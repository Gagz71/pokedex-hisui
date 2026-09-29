import { reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { HISUI_LOCATIONS } from '../data/hisuiLocations'

// Progression de la partie, enregistrée sur l'appareil (localStorage).
// Chaque entrée porte la date de sa dernière modification (updatedAt, en ms) :
// la synchronisation entre appareils gardera la plus récente, entrée par
// entrée, plutôt que d'écraser toute la progression d'un appareil.

export interface PokemonProgress {
  seen: boolean
  caught: boolean
  researchDone: boolean // niveau de recherche 10 atteint
  shiny: boolean // un chromatique capturé
  // Le Pokémon capturé a évolué : on ne l'a plus sous cette forme, mais il
  // reste « capturé » au Pokédex, comme dans le jeu. (Absent des données
  // enregistrées avant l'ajout de cette option.)
  evolved?: boolean
  // Mon Pokémon à moi (une fois capturé) : niveau et stats telles que le jeu
  // les affiche, saisis à la main. Clés des stats = libellés de l'appli
  // (PV, Attaque, Défense, Att. Spé, Déf. Spé, Vitesse).
  level?: number
  stats?: Record<string, number>
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

type PokemonState = Required<Omit<PokemonProgress, 'updatedAt' | 'level' | 'stats'>> &
  Pick<PokemonProgress, 'level' | 'stats'>

const EMPTY: PokemonState = {
  seen: false,
  caught: false,
  researchDone: false,
  shiny: false,
  evolved: false,
}

// Un Baron fixe est identifié par l'espèce, la zone et l'emplacement.
export function alphaKey(apiName: string, region: string, place: string): string {
  return `${apiName}|${region}|${place}`
}

// Baron hors emplacement fixe (apparition massive, distorsion, rencontre
// aléatoire) : un seul suivi par espèce.
const OTHER_ALPHA_SUFFIX = '|autre'
export function otherAlphaKey(apiName: string): string {
  return apiName + OTHER_ALPHA_SUFFIX
}
export function isOtherAlphaKey(key: string): boolean {
  return key.endsWith(OTHER_ALPHA_SUFFIX)
}

export function hasFixedAlphas(apiName: string): boolean {
  return (HISUI_LOCATIONS[apiName] ?? []).some((l) => l.alphas?.length)
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

  function get(apiName: string): PokemonState {
    return { ...EMPTY, ...data.pokemon[apiName] }
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
      if (flag === 'seen') next.caught = next.researchDone = next.shiny = next.evolved = false
      if (flag === 'caught') next.researchDone = next.evolved = false
    }
    data.pokemon[apiName] = { ...next, updatedAt: Date.now() }
  }

  // Le Pokémon capturé a évolué en `to` : il reste capturé au Pokédex (comme
  // dans le jeu) mais passe en « a évolué » ; la forme évoluée devient vue et
  // capturée ; dans l'équipe, le premier membre de l'espèce est remplacé par
  // sa forme évoluée (en gardant ses marques Baron / chromatique).
  function evolve(apiName: string, to: { apiName: string; name: string; sprite: string }) {
    const now = Date.now()
    data.pokemon[apiName] = {
      ...get(apiName),
      seen: true,
      caught: true,
      evolved: true,
      updatedAt: now,
    }
    data.pokemon[to.apiName] = { ...get(to.apiName), seen: true, caught: true, updatedAt: now }
    const member = data.team.members.find((m) => m.apiName === apiName)
    if (member) {
      Object.assign(member, { apiName: to.apiName, name: to.name, sprite: to.sprite })
      data.team.updatedAt = now
    }
  }

  // Niveau et stats de mon Pokémon (null = effacer). Les noter suppose de
  // l'avoir capturé.
  function setLevel(apiName: string, level: number | null) {
    const next = { ...get(apiName), seen: true, caught: true, updatedAt: Date.now() }
    if (level === null) delete next.level
    else next.level = Math.min(100, Math.max(1, Math.round(level)))
    data.pokemon[apiName] = next
  }

  function setStat(apiName: string, stat: string, value: number | null) {
    const current = get(apiName)
    const stats = { ...current.stats }
    if (value === null || Number.isNaN(value)) delete stats[stat]
    else stats[stat] = Math.max(0, Math.round(value))
    data.pokemon[apiName] = { ...current, seen: true, caught: true, stats, updatedAt: Date.now() }
  }

  // Total de mes stats saisies (null si aucune).
  function statTotal(apiName: string): number | null {
    const values = Object.values(get(apiName).stats ?? {})
    return values.length ? values.reduce((a, b) => a + b, 0) : null
  }

  // Annule seulement l'état « a évolué » (la forme évoluée reste capturée).
  function undoEvolve(apiName: string) {
    data.pokemon[apiName] = { ...get(apiName), evolved: false, updatedAt: Date.now() }
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

  // Membres de l'équipe de cette espèce, en distinguant les Barons.
  function teamCounts(apiName: string): { normal: number; alpha: number } {
    const same = data.team.members.filter((m) => m.apiName === apiName)
    const alpha = same.filter((m) => m.alpha).length
    return { normal: same.length - alpha, alpha }
  }

  // Avoir un Pokémon dans l'équipe suppose de l'avoir capturé.
  function addToTeam(apiName: string, name: string, sprite: string, alpha = false) {
    if (isTeamFull.value) return
    if (!get(apiName).caught) toggle(apiName, 'caught')
    data.team.members.push({
      id: `${apiName}-${Date.now()}`,
      apiName,
      name,
      sprite,
      alpha,
      shiny: false,
    })
    data.team.updatedAt = Date.now()
    // Sans Baron fixe, un Baron dans l'équipe vient forcément d'ailleurs
    // (apparition massive, distorsion...) : on le note comme capturé. Avec des Barons
    // fixes, on ne sait pas lequel : l'utilisateur coche le bon.
    const other = otherAlphaKey(apiName)
    if (alpha && !hasFixedAlphas(apiName) && !getAlpha(other).caught) toggleAlpha(other, 'caught')
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

  // Barons capturés : fixes (sur les 93 emplacements) et autres, séparément.
  const counts = computed(() => {
    const caughtAlphas = Object.entries(data.alphas).filter(([, a]) => a.caught)
    const other = caughtAlphas.filter(([key]) => isOtherAlphaKey(key)).length
    return {
      alphas: caughtAlphas.length - other,
      alphasOther: other,
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
    evolve,
    undoEvolve,
    setLevel,
    setStat,
    statTotal,
    getAlpha,
    isAlphaCaught,
    toggleAlpha,
    counts,
    isTeamFull,
    teamCount,
    teamCounts,
    addToTeam,
    removeFromTeam,
    toggleMemberFlag,
  }
})
