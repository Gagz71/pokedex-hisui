<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSyncStore } from '../stores/sync'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const sync = useSyncStore()

type Mode = 'signin' | 'signup' | 'forgot'
const mode = ref<Mode>('signin')
const email = ref('')
const password = ref('')
const newPassword = ref('')
const busy = ref(false)
const error = ref('')
const info = ref('')

// Messages d'erreur de Supabase (en anglais) traduits pour l'utilisateur.
const ERRORS: [string, string][] = [
  ['Invalid login credentials', 'E-mail ou mot de passe incorrect.'],
  [
    'Email not confirmed',
    "Adresse pas encore confirmée : clique d'abord sur le lien reçu par e-mail.",
  ],
  ['already registered', 'Un compte existe déjà avec cette adresse : connecte-toi.'],
  ['at least 6 characters', 'Le mot de passe doit faire au moins 6 caractères.'],
  ['rate limit', "Trop d'e-mails envoyés pour le moment : réessaie dans une heure."],
  ['Failed to fetch', 'Pas de connexion internet.'],
]
function translate(message: string): string {
  return ERRORS.find(([needle]) => message.includes(needle))?.[1] ?? message
}

async function run(action: () => Promise<void>) {
  busy.value = true
  error.value = ''
  info.value = ''
  try {
    await action()
  } catch (e) {
    error.value = translate(e instanceof Error ? e.message : String(e))
  } finally {
    busy.value = false
  }
}

function setMode(next: Mode) {
  mode.value = next
  error.value = ''
  info.value = ''
}

const submit = () =>
  run(async () => {
    const address = email.value.trim()
    if (mode.value === 'signin') {
      await sync.signIn(address, password.value)
      password.value = ''
    } else if (mode.value === 'signup') {
      const needsConfirmation = await sync.signUp(address, password.value)
      password.value = ''
      if (needsConfirmation) {
        info.value = `Compte créé ! Clique sur le lien envoyé à ${address} (regarde aussi dans les indésirables), puis reviens ici pour te connecter.`
        mode.value = 'signin'
      }
    } else {
      await sync.requestPasswordReset(address)
      info.value = `Un lien pour choisir un nouveau mot de passe a été envoyé à ${address}.`
    }
  })

const submitNewPassword = () =>
  run(async () => {
    await sync.updatePassword(newPassword.value)
    newPassword.value = ''
    info.value = 'Mot de passe modifié.'
  })

const signOut = () => run(() => sync.signOut())

const SUBMIT_LABELS: Record<Mode, string> = {
  signin: 'Se connecter',
  signup: 'Créer mon compte',
  forgot: 'Recevoir un lien',
}

const STATUS_LABELS = {
  off: 'Non connecté',
  syncing: 'Synchronisation…',
  ok: 'Synchronisé',
  offline: 'Hors ligne : synchronisation au retour du réseau',
  error: 'Erreur de synchronisation',
} as const

const lastSyncLabel = computed(() =>
  sync.lastSync
    ? new Date(sync.lastSync).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    : null,
)
</script>

<template>
  <!-- Hors du livre : sa perspective 3D empêcherait position: fixed de
       couvrir tout l'écran -->
  <Teleport to="body">
    <div v-if="open" class="sync-backdrop" @click.self="emit('close')">
      <section class="sync" role="dialog" aria-modal="true" aria-labelledby="sync-title">
        <header class="sync-head">
          <h2 id="sync-title">Synchronisation</h2>
          <button class="sync-close" aria-label="Fermer" @click="emit('close')">✕</button>
        </header>

        <!-- Retour d'un lien « mot de passe oublié » -->
        <form v-if="sync.recovering" @submit.prevent="submitNewPassword">
          <p class="sync-help">Choisis ton nouveau mot de passe.</p>
          <label class="field">
            Nouveau mot de passe
            <input
              v-model="newPassword"
              type="password"
              required
              minlength="6"
              autocomplete="new-password"
            />
          </label>
          <p v-if="error" class="sync-error">{{ error }}</p>
          <div class="sync-actions">
            <button class="primary" type="submit" :disabled="busy">Enregistrer</button>
          </div>
        </form>

        <template v-else-if="sync.user">
          <p>
            Compte connecté : <b>{{ sync.user.email }}</b>
          </p>
          <p class="sync-status" :class="sync.status">
            {{ STATUS_LABELS[sync.status] }}
            <span v-if="sync.status === 'ok' && lastSyncLabel"> à {{ lastSyncLabel }}</span>
          </p>
          <p v-if="sync.status === 'error'" class="sync-error">{{ sync.errorMessage }}</p>
          <p v-if="info" class="sync-info">{{ info }}</p>
          <p class="sync-help">
            Ta progression (Pokémon, Barons, équipe) est enregistrée sur cet appareil et sur ton
            compte. Connecte-toi avec la même adresse sur tes autres appareils pour la retrouver.
          </p>
          <div class="sync-actions">
            <button class="primary" :disabled="sync.status === 'syncing'" @click="sync.sync()">
              Synchroniser maintenant
            </button>
            <button :disabled="busy" @click="signOut">Se déconnecter</button>
          </div>
        </template>

        <template v-else>
          <div class="sync-tabs" role="tablist">
            <button
              role="tab"
              :aria-selected="mode === 'signin'"
              :class="{ active: mode === 'signin' }"
              @click="setMode('signin')"
            >
              Se connecter
            </button>
            <button
              role="tab"
              :aria-selected="mode === 'signup'"
              :class="{ active: mode === 'signup' }"
              @click="setMode('signup')"
            >
              Créer un compte
            </button>
          </div>

          <form @submit.prevent="submit">
            <p class="sync-help">
              <template v-if="mode === 'forgot'">
                Indique ton adresse : tu vas recevoir un lien pour choisir un nouveau mot de passe.
              </template>
              <template v-else>
                Retrouve ta progression sur ton téléphone, ta tablette et ton ordinateur.
              </template>
            </p>
            <label class="field">
              Adresse e-mail
              <input v-model="email" type="email" required autocomplete="email" inputmode="email" />
            </label>
            <label v-if="mode !== 'forgot'" class="field">
              Mot de passe
              <input
                v-model="password"
                type="password"
                required
                minlength="6"
                :autocomplete="mode === 'signup' ? 'new-password' : 'current-password'"
              />
            </label>
            <p v-if="info" class="sync-info">{{ info }}</p>
            <p v-if="error" class="sync-error">{{ error }}</p>
            <div class="sync-actions">
              <button class="primary" type="submit" :disabled="busy">
                {{ busy ? 'Un instant…' : SUBMIT_LABELS[mode] }}
              </button>
              <button
                v-if="mode === 'signin'"
                type="button"
                class="link"
                @click="setMode('forgot')"
              >
                Mot de passe oublié ?
              </button>
              <button
                v-if="mode === 'forgot'"
                type="button"
                class="link"
                @click="setMode('signin')"
              >
                Retour
              </button>
            </div>
          </form>
        </template>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.sync-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
}
.sync {
  width: min(460px, 100%);
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  padding: 22px 24px;
  border-radius: 14px;
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 1.5;
}
.sync-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.sync h2 {
  margin: 0;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 22px;
}
.sync p {
  margin: 0 0 12px;
}
.sync-help {
  color: var(--text-2);
}
.sync-status {
  font-weight: 700;
}
.sync-status.ok {
  color: var(--hp-ok);
}
.sync-status.error {
  color: var(--hp-low);
}
.sync-status.offline,
.sync-status.syncing {
  color: var(--hp-mid);
}
.sync-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  margin-bottom: 14px;
  border-radius: 10px;
  background: var(--surface-2);
}
.sync-tabs button {
  font: inherit;
  font-size: 13.5px;
  font-weight: 700;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--text-2);
  cursor: pointer;
}
.sync-tabs button.active {
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}
.sync-info {
  padding: 8px 10px;
  border-radius: 8px;
  background: #e6f4ea;
  color: #1e5b2f;
  font-size: 13px;
}
.sync-error {
  padding: 8px 10px;
  border-radius: 8px;
  background: #fde8e8;
  color: #9b1c1c;
  font-size: 13px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 700;
  color: var(--text-2);
}
.field input {
  font: inherit;
  font-size: 16px; /* 16 px : évite le zoom automatique de Safari sur iPhone */
  font-weight: 400;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
}
.sync-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.sync-actions button {
  font: inherit;
  font-weight: 700;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  color: var(--text);
  cursor: pointer;
}
.sync-actions button.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
.sync-actions button.link {
  border: none;
  background: none;
  padding: 10px 4px;
  font-weight: 600;
  color: var(--accent);
}
.sync-actions button:disabled {
  opacity: 0.6;
  cursor: default;
}
.sync-close {
  font: inherit;
  font-size: 16px;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: var(--surface-2);
  color: var(--text);
  cursor: pointer;
}
</style>
