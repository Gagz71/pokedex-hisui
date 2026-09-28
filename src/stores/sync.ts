import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { useProgressStore, mergeProgress, type ProgressData } from './progress'

// Synchronisation de la progression avec le compte Supabase.
// L'appareil reste la source de vérité immédiate (tout marche hors ligne) ;
// dès qu'on est connecté, chaque synchro lit la version en ligne, la fusionne
// avec celle de l'appareil (la modification la plus récente l'emporte, voir
// mergeProgress) puis enregistre le résultat des deux côtés.
// Table : progress (user_id, data jsonb, updated_at), une ligne par compte,
// protégée par RLS (chacun n'accède qu'à sa ligne).

export type SyncStatus = 'off' | 'syncing' | 'ok' | 'offline' | 'error'

const PUSH_DELAY_MS = 1500

export const useSyncStore = defineStore('sync', () => {
  const progress = useProgressStore()

  const user = ref<User | null>(null)
  const status = ref<SyncStatus>('off')
  const lastSync = ref<number | null>(null)
  const errorMessage = ref('')

  let running = false
  let again = false
  let pushTimer: ReturnType<typeof setTimeout> | undefined

  async function sync() {
    if (!user.value) return
    if (running) {
      again = true
      return
    }
    if (!navigator.onLine) {
      status.value = 'offline'
      return
    }
    running = true
    status.value = 'syncing'
    try {
      const { data: row, error } = await supabase
        .from('progress')
        .select('data')
        .eq('user_id', user.value.id)
        .maybeSingle()
      if (error) throw error

      const local: ProgressData = JSON.parse(JSON.stringify(progress.data))
      const merged = mergeProgress(local, row?.data ?? {})
      const mergedJson = JSON.stringify(merged)
      if (mergedJson !== JSON.stringify(local)) progress.replaceAll(merged)
      if (mergedJson !== JSON.stringify(row?.data ?? null)) {
        const { error: saveError } = await supabase.from('progress').upsert({
          user_id: user.value.id,
          data: merged,
          updated_at: new Date().toISOString(),
        })
        if (saveError) throw saveError
      }
      status.value = 'ok'
      lastSync.value = Date.now()
      errorMessage.value = ''
    } catch (e) {
      status.value = navigator.onLine ? 'error' : 'offline'
      errorMessage.value = e instanceof Error ? e.message : String(e)
    } finally {
      running = false
      if (again) {
        again = false
        void sync()
      }
    }
  }

  // --- Connexion par e-mail + mot de passe. Le mot de passe se tape dans
  // l'appli (aucun lien à ouvrir : sur iPhone, un lien ouvrirait Safari au
  // lieu de l'appli installée). Seule la création de compte envoie un e-mail
  // de confirmation (modèle par défaut de Supabase, pas besoin de SMTP perso).

  // true tant que l'utilisateur arrive d'un lien « mot de passe oublié » et
  // doit choisir un nouveau mot de passe.
  const recovering = ref(false)

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  // Renvoie true si l'adresse doit d'abord être confirmée par e-mail.
  async function signUp(email: string, password: string): Promise<boolean> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin },
    })
    if (error) throw error
    return !data.session
  }

  async function requestPasswordReset(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    })
    if (error) throw error
  }

  async function updatePassword(password: string) {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) throw error
    recovering.value = false
  }

  // La progression reste sur l'appareil après déconnexion.
  async function signOut() {
    await supabase.auth.signOut()
  }

  // --- Déclencheurs
  supabase.auth.getSession().then(({ data }) => {
    user.value = data.session?.user ?? null
    if (user.value) void sync()
  })
  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user ?? null
    if (!user.value) status.value = 'off'
    if (event === 'PASSWORD_RECOVERY') recovering.value = true
    if (event === 'SIGNED_IN') void sync()
  })

  watch(
    () => progress.data,
    () => {
      if (!user.value) return
      clearTimeout(pushTimer)
      pushTimer = setTimeout(() => void sync(), PUSH_DELAY_MS)
    },
    { deep: true },
  )
  window.addEventListener('online', () => void sync())
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') void sync()
  })

  return {
    user,
    status,
    lastSync,
    errorMessage,
    recovering,
    sync,
    signIn,
    signUp,
    requestPasswordReset,
    updatePassword,
    signOut,
  }
})
