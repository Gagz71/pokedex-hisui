import { reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'

// Progression de la partie, enregistrée sur l'appareil (localStorage).
// Chaque entrée porte la date de sa dernière modification (updatedAt, en ms) :
// la synchronisation entre appareils gardera la plus récente, entrée par
// entrée, plutôt que d'écraser toute la progression d'un appareil.

export interface PokemonProgress {
  seen: boolean
  caught: boolean
  researchDone: boolean // niveau de recherche 10 atteint
  shiny: boolean // un chromatique capturé
  updatedAt: number
}

// Un Baron fixe : rencontré, battu (mis K.O.) et/ou capturé. Battu et
// capturé impliquent rencontré ; les deux peuvent être vrais à la fois.
export interface AlphaProgress {
  encountered: boolean
  defeated: boolean
  caught: boolean
  updatedAt: number
}

export type AlphaFlag = 'encountered' | 'defeated' | 'caught'

// L'équipe du moment (6 places comme dans le jeu). Nom et illustration sont
// copiés à l'ajout pour afficher l'équipe sans recharger chaque fiche. Une
// même espèce peut y figurer plusieurs fois.
export const TEAM_SIZE = 6

export interface TeamMember {
  id: string
  apiName: string
  name: string
  sprite: string
  alpha: boolean // c'est un Baron
  shiny: boolean
}

export interface TeamData {
  members: TeamMember[]
  updatedAt: number
}

export interface ProgressData {
  pokemon: Record<string, PokemonProgress> // clé = apiName
  alphas: Record<string, AlphaProgress> // clé = alphaKey(...)
  team: TeamData
}

export type PokemonFlag = 'seen' | 'caught' | 'researchDone' | 'shiny'

const STORAGE_KEY = 'pokedex-hisui-progress-v1'

const EMPTY: Omit<PokemonProgress, 'updatedAt'> = {
  seen: false,
  caught: false,
  researchDone: false,
  shiny: false,
}

// Un Baron est identifié par l'espèce, la zone et l'emplacement.
export function alphaKey(apiName: string, region: string, place: string): string {
  return `${apiName}|${region}|${place}`
}

// Fusion de deux progressions (cet appareil + celle du compte en ligne) :
// pour chaque Pokémon et chaque Baron, la modification la plus récente
// l'emporte ; l'équipe est prise en bloc, la plus récemment modifiée.
function newest<T extends { updatedAt: number }>(
  a: Record<string, T>,
  b: Record<string, T>,
): Record<string, T> {
  const out = { ...a }
  for (const [key, value] of Object.entries(b)) {
    const current = out[key]
    if (!current || (value.updatedAt ?? 0) > (current.updatedAt ?? 0)) out[key] = value
  }
  return out
}

export function mergeProgress(a: ProgressData, b: Partial<ProgressData>): ProgressData {
  const teamB = b.team ?? { members: [], updatedAt: 0 }
  return {
    pokemon: newest(a.pokemon, b.pokemon ?? {}),
    alphas: newest(a.alphas, b.alphas ?? {}),
    team: teamB.updatedAt > a.team.updatedAt ? teamB : a.team,
  }
}

function load(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw)
      return {
        pokemon: data.pokemon ?? {},
        alphas: data.alphas ?? {},
        team: data.team ?? { members: [], updatedAt: 0 },
      }
    }
  } catch {
    // stockage indisponible (navigation privée...) : on repart de zéro
  }
  return { pokemon: {}, alphas: {}, team: { members: [], updatedAt: 0 } }
}

export const useProgressStore = defineStore('progress', () => {
  const data = reactive<ProgressData>(load())

  watch(
    data,
    (value) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
      } catch {
        // stockage plein ou indisponible : la progression reste en mémoire
      }
    },
    { deep: true },
  )

  function get(apiName: string): Omit<PokemonProgress, 'updatedAt'> {
    return data.pokemon[apiName] ?? EMPTY
  }

  // Les états s'enchaînent comme dans le jeu : capturé implique vu, recherche
  // terminée implique capturé. Décocher « vu » ou « capturé » décoche aussi
  // ce qui en dépend.
  function toggle(apiName: string, flag: PokemonFlag) {
    const next = { ...get(apiName) }
    const value = !next[flag]
    next[flag] = value
    if (value) {
      if (flag === 'caught' || flag === 'researchDone' || flag === 'shiny') next.seen = true
      if (flag === 'researchDone') next.caught = true
    } else {
      if (flag === 'seen') next.caught = next.researchDone = next.shiny = false
      if (flag === 'caught') next.researchDone = false
    }
    data.pokemon[apiName] = { ...next, updatedAt: Date.now() }
  }

  function getAlpha(key: string): Omit<AlphaProgress, 'updatedAt'> {
    const a = data.alphas[key]
    // (les premières versions n'enregistraient que « caught »)
    return {
      encountered: a?.encountered ?? a?.caught ?? false,
      defeated: a?.defeated ?? false,
      caught: a?.caught ?? false,
    }
  }

  function isAlphaCaught(key: string): boolean {
    return getAlpha(key).caught
  }

  function toggleAlpha(key: string, flag: AlphaFlag) {
    const next = { ...getAlpha(key) }
    next[flag] = !next[flag]
    if (next[flag] && flag !== 'encountered') next.encountered = true
    if (!next.encountered) next.defeated = next.caught = false
    data.alphas[key] = { ...next, updatedAt: Date.now() }
    // Capturer un Baron, c'est aussi capturer l'espèce.
    const apiName = key.split('|')[0] ?? ''
    if (next.caught && !get(apiName).caught) toggle(apiName, 'caught')
  }

  // --- Équipe
  const isTeamFull = computed(() => data.team.members.length >= TEAM_SIZE)

  function teamCount(apiName: string): number {
    return data.team.members.filter((m) => m.apiName === apiName).length
  }

  // Avoir un Pokémon dans l'équipe suppose de l'avoir capturé.
  function addToTeam(apiName: string, name: string, sprite: string) {
    if (isTeamFull.value) return
    if (!get(apiName).caught) toggle(apiName, 'caught')
    data.team.members.push({
      id: `${apiName}-${Date.now()}`,
      apiName,
      name,
      sprite,
      alpha: false,
      shiny: false,
    })
    data.team.updatedAt = Date.now()
  }

  function removeFromTeam(id: string) {
    data.team.members = data.team.members.filter((m) => m.id !== id)
    data.team.updatedAt = Date.now()
  }

  function toggleMemberFlag(id: string, flag: 'alpha' | 'shiny') {
    const member = data.team.members.find((m) => m.id === id)
    if (!member) return
    member[flag] = !member[flag]
    data.team.updatedAt = Date.now()
  }

  const counts = computed(() => {
    const all = Object.values(data.pokemon)
    return {
      seen: all.filter((p) => p.seen).length,
      caught: all.filter((p) => p.caught).length,
      researchDone: all.filter((p) => p.researchDone).length,
      shiny: all.filter((p) => p.shiny).length,
      alphasEncountered: Object.values(data.alphas).filter((a) => a.encountered || a.caught).length,
      alphasDefeated: Object.values(data.alphas).filter((a) => a.defeated).length,
      alphas: Object.values(data.alphas).filter((a) => a.caught).length,
    }
  })

  // Remplace toute la progression (après fusion avec celle du compte).
  function replaceAll(next: ProgressData) {
    data.pokemon = next.pokemon
    data.alphas = next.alphas
    data.team = next.team
  }

  return {
    data,
    replaceAll,
    get,
    toggle,
    getAlpha,
    isAlphaCaught,
    toggleAlpha,
    counts,
    isTeamFull,
    teamCount,
    addToTeam,
    removeFromTeam,
    toggleMemberFlag,
  }
})
