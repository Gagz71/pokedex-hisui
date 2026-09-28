<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import BookCover from './components/BookCover.vue'
import PokemonArtCard from './components/PokemonArtCard.vue'
import PokemonInfoCard from './components/PokemonInfoCard.vue'
import PokedexIndex from './components/PokedexIndex.vue'
import CreditsPanel from './components/CreditsPanel.vue'
import ProgressToggles from './components/ProgressToggles.vue'
import TeamStrip from './components/TeamStrip.vue'
import SyncPanel from './components/SyncPanel.vue'
import { useSyncStore } from './stores/sync'
import { useProgressStore, alphaKey } from './stores/progress'
import { HISUI_LOCATIONS, type LocationEntry } from './data/hisuiLocations'
import { TYPE_COLORS } from './data/typeColors'

const isOpen = ref(false)
const selectedName = ref<string | null>(null)
const history = ref<string[]>([])

const sortField = ref<'number' | 'alpha'>('number')
const sortDirection = ref<'asc' | 'desc'>('asc')
const isSortMenuOpen = ref(false)

const typeFilter = ref<string | null>(null)
const isTypeMenuOpen = ref(false)
const isCreditsOpen = ref(false)
const isSyncOpen = ref(false)
const sync = useSyncStore()
// Retour d'un lien « mot de passe oublié » : on ouvre directement le panneau
// pour choisir le nouveau mot de passe.
watch(
  () => sync.recovering,
  (recovering) => {
    if (recovering) isSyncOpen.value = true
  },
)

function setTypeFilter(slug: string | null) {
  typeFilter.value = slug
  isTypeMenuOpen.value = false
}

const sortedEntries = computed(() => {
  const list = [...entries.value]
  list.sort((a, b) => {
    const result =
      sortField.value === 'alpha'
        ? a.name.localeCompare(b.name, 'fr')
        : a.entryNumber - b.entryNumber
    return sortDirection.value === 'asc' ? result : -result
  })
  return list
})

function normalize(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function setSort(field: 'number' | 'alpha', direction: 'asc' | 'desc') {
  sortField.value = field
  sortDirection.value = direction
  isSortMenuOpen.value = false
}

interface PokedexEntry {
  entryNumber: number
  name: string //affichage en français
  apiName: string // pour l'appel API (slug anglais)
  typeSlugs: string[]
  rarity: Rarity
}

// Légendaire / fabuleux, d'après les drapeaux is_legendary / is_mythical de
// l'espèce dans PokeAPI.
type Rarity = 'legendary' | 'mythical' | null
function getRarity(speciesData: any): Rarity {
  if (speciesData.is_mythical) return 'mythical'
  if (speciesData.is_legendary) return 'legendary'
  return null
}

const entries = ref<PokedexEntry[]>([])

const searchQuery = ref('')

// --- Progression de la partie : filtre de l'index et compteurs
const progress = useProgressStore()

// Barons fixes de chaque espèce (clés de progression), pour le filtre et le
// total du compteur.
const ALPHA_KEYS: Record<string, string[]> = Object.fromEntries(
  Object.entries(HISUI_LOCATIONS).map(([api, locs]) => [
    api,
    locs.flatMap((l) => (l.alphas ?? []).map((place) => alphaKey(api, l.region, place))),
  ]),
)
const TOTAL_ALPHAS = Object.values(ALPHA_KEYS).reduce((n, keys) => n + keys.length, 0)

type StatusFilter =
  | 'seen'
  | 'not-seen'
  | 'caught'
  | 'not-caught'
  | 'research-done'
  | 'research-todo'
  | 'shiny'
  | 'alpha-any'
  | 'alpha-encountered'
  | 'alpha-defeated'
  | 'alpha-caught'
  | 'alpha-todo'
// Regroupées par thème dans le menu Statut
const STATUS_GROUPS: { title: string; filters: { value: StatusFilter; label: string }[] }[] = [
  {
    title: 'Pokédex',
    filters: [
      { value: 'seen', label: 'Vus' },
      { value: 'not-seen', label: 'Pas encore vus' },
      { value: 'caught', label: 'Capturés' },
      { value: 'not-caught', label: 'Pas encore capturés' },
      { value: 'research-done', label: 'Recherche terminée' },
      { value: 'research-todo', label: 'Recherche à terminer' },
      { value: 'shiny', label: 'Chromatiques capturés' },
    ],
  },
  {
    title: 'Barons',
    filters: [
      { value: 'alpha-any', label: 'Avec un Baron fixe' },
      { value: 'alpha-encountered', label: 'Barons rencontrés' },
      { value: 'alpha-defeated', label: 'Barons battus' },
      { value: 'alpha-caught', label: 'Barons capturés' },
      { value: 'alpha-todo', label: 'Barons pas encore capturés' },
    ],
  },
]
const STATUS_FILTERS = STATUS_GROUPS.flatMap((g) => g.filters)
const statusFilter = ref<StatusFilter | null>(null)
const isStatusMenuOpen = ref(false)
function setStatusFilter(value: StatusFilter | null) {
  statusFilter.value = value
  isStatusMenuOpen.value = false
}
// Les filtres Barons portent sur les Barons fixes de l'espèce : « rencontrés »
// = au moins un rencontré, « pas encore capturés » = au moins un restant.
function matchesStatus(apiName: string, filter: StatusFilter): boolean {
  const p = progress.get(apiName)
  const alphas = (ALPHA_KEYS[apiName] ?? []).map((k) => progress.getAlpha(k))
  switch (filter) {
    case 'seen':
      return p.seen
    case 'not-seen':
      return !p.seen
    case 'caught':
      return p.caught
    case 'not-caught':
      return !p.caught
    case 'research-done':
      return p.researchDone
    case 'research-todo':
      return !p.researchDone
    case 'shiny':
      return p.shiny
    case 'alpha-any':
      return alphas.length > 0
    case 'alpha-encountered':
      return alphas.some((a) => a.encountered)
    case 'alpha-defeated':
      return alphas.some((a) => a.defeated)
    case 'alpha-caught':
      return alphas.some((a) => a.caught)
    case 'alpha-todo':
      return alphas.some((a) => !a.caught)
    default:
      return true
  }
}
const hisuiCounts = computed(() => {
  const inDex = entries.value.map((e) => progress.get(e.apiName))
  return {
    seen: inDex.filter((p) => p.seen).length,
    caught: inDex.filter((p) => p.caught).length,
    researchDone: inDex.filter((p) => p.researchDone).length,
    shiny: inDex.filter((p) => p.shiny).length,
  }
})

//Recherche de l'entrée par le nom ou le numéro, filtrée par type si choisi
const filteredEntries = computed(() => {
  const query = normalize(searchQuery.value.trim())
  let list = sortedEntries.value
  if (typeFilter.value) {
    list = list.filter((e) => e.typeSlugs.includes(typeFilter.value as string))
  }
  if (statusFilter.value) {
    const filter = statusFilter.value
    list = list.filter((e) => matchesStatus(e.apiName, filter))
  }
  if (!query) return list
  return list.filter(
    (e) => normalize(e.name).includes(query) || e.entryNumber.toString().includes(query),
  )
})

// Écran étroit (téléphone, tablette en portrait) : une seule page visible à
// la fois dans la largeur, donc l'index tient en une seule liste. Le seuil
// doit rester le même que la media query de fin de fichier.
const NARROW_QUERY = '(max-width: 959px)'
const narrowMedia = window.matchMedia(NARROW_QUERY)
const isNarrow = ref(narrowMedia.matches)
const onNarrowChange = (e: MediaQueryListEvent) => (isNarrow.value = e.matches)
onMounted(() => narrowMedia.addEventListener('change', onNarrowChange))
onUnmounted(() => narrowMedia.removeEventListener('change', onNarrowChange))

const entriesPerPage = computed(() =>
  isNarrow.value ? entries.value.length : Math.ceil(entries.value.length / 2),
)
const firstHalf = computed(() => filteredEntries.value.slice(0, entriesPerPage.value))
const secondHalf = computed(() => filteredEntries.value.slice(entriesPerPage.value))

async function fetchIndex() {
  const res = await fetch('https://pokeapi.co/api/v2/pokedex/hisui')
  const data = await res.json()
  const rawEntries = data.pokemon_entries

  // Un appel par Pokémon pour récupérer son nom français...
  const speciesResponses = await Promise.all(
    rawEntries.map((e: any) => fetch(e.pokemon_species.url).then((r) => r.json())),
  )

  // ...puis un appel pour son ou ses types (nécessaire pour le filtre par
  // type de l'index), via la variante par défaut de l'espèce : certaines
  // espèces (Wormadam, Giratina, Shaymin...) n'ont pas de ressource
  // /pokemon/{nom} à leur nom brut, seulement des variantes.
  const pokemonResponses = await Promise.all(
    speciesResponses.map((s: any) =>
      fetch(getDefaultVarietyUrl(s))
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null),
    ),
  )

  entries.value = rawEntries.map((e: any, i: number) => ({
    entryNumber: e.entry_number,
    name: getFrenchName(speciesResponses[i].names),
    apiName: e.pokemon_species.name,
    typeSlugs: pokemonResponses[i]?.types.map((t: any) => t.type.name) ?? [],
    rarity: getRarity(speciesResponses[i]),
  }))
}

onMounted(fetchIndex)

const STAT_LABELS: Record<string, string> = {
  hp: 'PV',
  attack: 'Attaque',
  defense: 'Défense',
  'special-attack': 'Att. Spé',
  'special-defense': 'Déf. Spé',
  speed: 'Vitesse',
}

const MOVE_METHOD_LABELS: Record<string, string> = {
  'level-up': 'Montée de niveau',
  machine: 'Capsule',
  egg: 'Œuf',
  tutor: 'Enseigné',
}

const DAMAGE_CLASS_LABELS: Record<string, string> = {
  physical: 'Physique',
  special: 'Spéciale',
  status: 'Statut',
}

const TYPE_LABELS: Record<string, string> = {
  normal: 'Normal',
  fire: 'Feu',
  water: 'Eau',
  electric: 'Électrik',
  grass: 'Plante',
  ice: 'Glace',
  fighting: 'Combat',
  poison: 'Poison',
  ground: 'Sol',
  flying: 'Vol',
  psychic: 'Psy',
  bug: 'Insecte',
  rock: 'Roche',
  ghost: 'Spectre',
  dragon: 'Dragon',
  dark: 'Ténèbres',
  steel: 'Acier',
  fairy: 'Fée',
}

interface EvoLink {
  apiName: string
  name: string
  sprite: string
}
interface EvolutionInfo extends EvoLink {
  condition: string
}
// Un stade de la lignée : plusieurs Pokémon quand la chaîne se ramifie
// (Évoli, Farfuret...). condition = comment on obtient ce Pokémon depuis le
// stade précédent (vide pour le premier stade).
type EvolutionStage = EvolutionInfo[]

interface PokemonData {
  name: string
  sprite: string
  types: string[]
  typeSlugs: string[]
  abilities: string[]
  stats: { name: string; value: number }[]
  evolutions: EvolutionInfo[]
  previousEvolution: EvoLink | null
  evolvedFromCondition: string
  evolutionLine: EvolutionStage[]
  apiName: string
  hisuiNumber: number | null
  rarity: Rarity
  height: number // en mètres
  weight: number // en kg
  femaleRatio: number | null // 0-1, null = asexué
  locations: LocationEntry[]
  genus: string
  description: string
  weaknesses: { type: string; slug: string; multiplier: number }[]
  resistances: { type: string; slug: string; multiplier: number }[]
  immunities: { type: string; slug: string }[]
  strengths: { type: string; slug: string }[]
  moves: {
    name: string
    type: string
    typeSlug: string
    damageClass: string
    power: number | null
    accuracy: number | null
    pp: number
    effect: string
    method: string
    level: number
  }[]
}

const pokemon = ref<PokemonData | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)

function getFrenchName(names: any[]): string {
  return names.find((n) => n.language.name === 'fr')?.name ?? '???' // ?. === retourne undefined si .find ne trouve rien
}

function getFrenchGenus(genera: any[]): string {
  return genera.find((g) => g.language.name === 'fr')?.genus ?? ''
}

// Texte du Pokédex : Legends Arceus n'a pas de traduction française dans
// l'API, donc on retombe sur un autre jeu — mais sans jamais l'afficher,
// pour ne pas laisser penser que le texte vient d'Arceus.
function getFrenchDescription(entries: any[]): string {
  const priority = ['sword', 'shield', 'ultra-sun', 'ultra-moon', 'sun', 'moon']
  for (const version of priority) {
    const entry = entries.find((e) => e.language.name === 'fr' && e.version.name === version)
    if (entry) return entry.flavor_text.replace(/[\n\f]/g, ' ')
  }
  const fallback = entries.find((e) => e.language.name === 'fr')
  return fallback ? fallback.flavor_text.replace(/[\n\f]/g, ' ') : ''
}

function describeEvolution(detail: any): string {
  if (!detail) return 'Montée de niveau'
  if (detail.min_level) return `Atteindre le niveau ${detail.min_level}`
  if (detail.min_happiness && detail.known_move_type) {
    const typeName = TYPE_LABELS[detail.known_move_type.name] ?? detail.known_move_type.name
    return `Par amitié, en connaissant une capacité de type ${typeName}`
  }
  if (detail.min_happiness) return 'Par amitié'
  if (detail.min_affection) return 'Par affection élevée'
  if (detail.known_move_type) {
    const typeName = TYPE_LABELS[detail.known_move_type.name] ?? detail.known_move_type.name
    return `Connaître une attaque de type ${typeName}`
  }
  if (detail.near_special_rock) return "Près d'un rocher spécial"
  if (detail.needs_overworld_rain) return 'Sous la pluie'
  if (detail.min_beauty) return 'Beauté élevée'
  return 'Montée de niveau'
}

function describeTimeOfDay(timeOfDay: string | undefined): string {
  switch (timeOfDay) {
    case 'day':
      return ' (le jour)'
    case 'night':
      return ' (la nuit)'
    case 'full-moon':
      return ' (nuit de pleine lune)'
    default:
      return ''
  }
}

// Certaines espèces (Wormadam, Basculin, Giratina, Shaymin...) n'ont pas de
// ressource /pokemon/{nom-espèce} : seulement des variantes (ex: wormadam-plant).
// On passe donc toujours par les "varieties" de l'espèce pour trouver la bonne URL.
// Et comme cette appli ne parle QUE de Hisui, on préfère toujours la forme de
// Hisui quand elle existe (sprite, types, capacités... tout diffère sinon) —
// Giratina est un cas à part : sa forme d'Hisui s'appelle "-origin", pas "-hisui".
const HISUI_VARIETY_OVERRIDES: Record<string, string> = {
  giratina: 'giratina-origin',
  basculin: 'basculin-white-striped',
}

function getDefaultVarietyUrl(speciesData: any): string {
  const override = HISUI_VARIETY_OVERRIDES[speciesData.name]
  const hisuiVariety = speciesData.varieties.find((v: any) =>
    override ? v.pokemon.name === override : v.pokemon.name.endsWith('-hisui'),
  )
  const variety =
    hisuiVariety ?? speciesData.varieties.find((v: any) => v.is_default) ?? speciesData.varieties[0]
  return variety.pokemon.url
}

// Condition pour obtenir ce nœud depuis le stade précédent. On privilégie les
// détails propres à Legends: Arceus, qui diffèrent parfois des autres jeux.
async function describeNodeCondition(node: any): Promise<string> {
  const details: any[] = node.evolution_details
  const detail =
    details.find((d: any) => d.version_group?.name === 'legends-arceus') ??
    details.find((d: any) => d.version_group?.name === 'sword-shield') ??
    details[0]

  let condition = describeEvolution(detail)

  if (detail?.item) {
    const itemData = await fetch(detail.item.url).then((r) => r.json())
    condition = `Utiliser l'objet : ${getFrenchName(itemData.names)}`
  } else if (detail?.held_item) {
    const heldItemData = await fetch(detail.held_item.url).then((r) => r.json())
    condition = `Utiliser l'objet : ${getFrenchName(heldItemData.names)}`
  } else if (detail?.trigger?.name === 'trade') {
    condition = "Utiliser l'objet : Fil de Liaison"
  } else if (detail?.known_move) {
    const moveData = await fetch(detail.known_move.url).then((r) => r.json())
    condition = `Connaître l'attaque : ${getFrenchName(moveData.names)}`
  }

  return condition + describeTimeOfDay(detail?.time_of_day)
}

//Fonction pour retouver pokemon évoluer
function findChainNode(node: any, targetName: string): any {
  if (node.species.name === targetName) return node
  for (const child of node.evolves_to) {
    const found = findChainNode(child, targetName)
    if (found) return found
  }
  return null
}

//Fonction pr retrouver le pokémon précédent dans la chaine d'évolution
function findParentNode(node: any, targetName: string, parent: any = null): any {
  if (node.species.name === targetName) return parent
  for (const child of node.evolves_to) {
    const found = findParentNode(child, targetName, node)
    if (found) return found
  }
  return null
}

// Faiblesses/résistances/forces : on combine les damage_relations de chaque
// type du Pokémon (les multiplicateurs se cumulent en cas de double-type).
const ALL_TYPES = Object.keys(TYPE_LABELS)

function computeTypeMatchups(typeResponses: any[]) {
  const defenseMultiplier = new Map<string, number>(ALL_TYPES.map((t) => [t, 1]))
  const mult = (t: string) => defenseMultiplier.get(t) ?? 1

  const offensiveStrengths = new Set<string>()

  for (const typeRes of typeResponses) {
    const dr = typeRes.damage_relations
    for (const t of dr.double_damage_from) defenseMultiplier.set(t.name, mult(t.name) * 2)
    for (const t of dr.half_damage_from) defenseMultiplier.set(t.name, mult(t.name) * 0.5)
    for (const t of dr.no_damage_from) defenseMultiplier.set(t.name, 0)
    for (const t of dr.double_damage_to) offensiveStrengths.add(t.name)
  }

  const weaknesses = ALL_TYPES.filter((t) => mult(t) > 1)
    .sort((a, b) => mult(b) - mult(a))
    .map((t) => ({ type: TYPE_LABELS[t] ?? t, slug: t, multiplier: mult(t) }))

  const resistances = ALL_TYPES.filter((t) => mult(t) > 0 && mult(t) < 1)
    .sort((a, b) => mult(a) - mult(b))
    .map((t) => ({ type: TYPE_LABELS[t] ?? t, slug: t, multiplier: mult(t) }))

  const immunities = ALL_TYPES.filter((t) => mult(t) === 0).map((t) => ({
    type: TYPE_LABELS[t] ?? t,
    slug: t,
  }))

  const strengths = Array.from(offensiveStrengths).map((t) => ({
    type: TYPE_LABELS[t] ?? t,
    slug: t,
  }))

  return { weaknesses, resistances, immunities, strengths }
}

// PokeAPI n'a, pour de rares pokémon, aucune donnée de sorts pour Legends
// Arceus (vrai trou de données, pas un problème de variante). On comble ça
// à la main pour les cas rencontrés, sourcé sur pokemondb.net.
const POKEMON_MOVE_OVERRIDES: Record<string, { slug: string; method: string; level: number }[]> = {
  porygon2: [
    { slug: 'tackle', method: 'level-up', level: 1 },
    { slug: 'thunder-shock', method: 'level-up', level: 5 },
    { slug: 'thunder-wave', method: 'level-up', level: 9 },
    { slug: 'spark', method: 'level-up', level: 15 },
    { slug: 'tri-attack', method: 'level-up', level: 21 },
    { slug: 'thunderbolt', method: 'level-up', level: 29 },
    { slug: 'recover', method: 'level-up', level: 37 },
    { slug: 'hyper-beam', method: 'level-up', level: 47 },
    { slug: 'aerial-ace', method: 'tutor', level: 0 },
    { slug: 'charge-beam', method: 'tutor', level: 0 },
    { slug: 'giga-impact', method: 'tutor', level: 0 },
    { slug: 'ice-beam', method: 'tutor', level: 0 },
    { slug: 'icy-wind', method: 'tutor', level: 0 },
    { slug: 'iron-tail', method: 'tutor', level: 0 },
    { slug: 'psychic', method: 'tutor', level: 0 },
    { slug: 'rest', method: 'tutor', level: 0 },
    { slug: 'shadow-ball', method: 'tutor', level: 0 },
    { slug: 'swift', method: 'tutor', level: 0 },
    { slug: 'zen-headbutt', method: 'tutor', level: 0 },
  ],
}

// Ne garde que les sorts effectivement appris dans Legends Arceus (pas les
// sorts d'autres jeux), avec leur méthode d'apprentissage pour ce jeu.
function getHisuiMoveStubs(
  pokemonName: string,
  moves: any[],
): { name: string; url: string; method: string; level: number }[] {
  const stubs = moves.map((m) => {
    const detail = m.version_group_details.find(
      (vd: any) => vd.version_group.name === 'legends-arceus',
    )
    if (!detail) return null
    return {
      name: m.move.name as string,
      url: m.move.url as string,
      method: detail.move_learn_method.name as string,
      level: detail.level_learned_at as number,
    }
  })
  const found = stubs.filter((m): m is NonNullable<typeof m> => m !== null)
  if (found.length > 0) return found

  const override = POKEMON_MOVE_OVERRIDES[pokemonName]
  if (!override) return []
  return override.map((o) => ({
    name: o.slug,
    url: `https://pokeapi.co/api/v2/move/${o.slug}`,
    method: o.method,
    level: o.level,
  }))
}

async function fetchPokemon(name: string) {
  isLoading.value = true
  error.value = null
  pokemon.value = null
  try {
    // On part de l'espèce (toujours valide par son nom brut), puis on résout
    // sa variante par défaut, plutôt que de supposer que /pokemon/{name} existe.
    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    if (!speciesRes.ok) throw new Error('not found')
    const speciesData = await speciesRes.json()
    const frenchName = getFrenchName(speciesData.names)

    const res = await fetch(getDefaultVarietyUrl(speciesData))
    if (!res.ok) throw new Error('not found')
    const data = await res.json()

    // Capacités françaises : un appel par capacité, tous lancés en même temps
    const abilityResponses = await Promise.all(
      data.abilities.map((a: any) => fetch(a.ability.url).then((r) => r.json())),
    )
    const frenchAbilities = abilityResponses.map((a) => getFrenchName(a.names))

    // Faiblesses/résistances/forces : un appel par type du Pokémon (1 ou 2)
    const typeResponses = await Promise.all(
      data.types.map((t: any) => fetch(t.type.url).then((r) => r.json())),
    )
    const matchups = computeTypeMatchups(typeResponses)

    // Sorts : uniquement ceux appris dans Legends Arceus, un appel par sort
    const moveStubs = getHisuiMoveStubs(data.name, data.moves)
    const moveResponses = await Promise.all(
      moveStubs.map((m) => fetch(m.url).then((r) => r.json())),
    )
    const moves = moveStubs
      .map((stub, i) => {
        const moveData = moveResponses[i]
        return {
          name: getFrenchName(moveData.names),
          type: TYPE_LABELS[moveData.type.name] ?? moveData.type.name,
          typeSlug: moveData.type.name as string,
          damageClass:
            DAMAGE_CLASS_LABELS[moveData.damage_class.name] ?? moveData.damage_class.name,
          power: moveData.power as number | null,
          accuracy: moveData.accuracy as number | null,
          pp: moveData.pp as number,
          effect:
            moveData.effect_entries.find((e: any) => e.language.name === 'fr')?.short_effect ?? '',
          method: MOVE_METHOD_LABELS[stub.method] ?? stub.method,
          level: stub.level,
        }
      })
      .sort((a, b) => (a.level || 9999) - (b.level || 9999))

    // Chaîne d'évolution
    const evoChainRes = await fetch(speciesData.evolution_chain.url)
    const evoChainData = await evoChainRes.json()
    const currentNode = findChainNode(evoChainData.chain, data.species.name)
    const nextNodes = currentNode?.evolves_to ?? []

    // Tous les nœuds de la chaîne, en ne gardant que les Pokémon présents dans
    // le Pokédex de Hisui (ex. Raichu n'existe pas dans Legends: Arceus).
    const hisuiNames = new Set(entries.value.map((e) => e.apiName))
    const inHisui = (node: any) => hisuiNames.size === 0 || hisuiNames.has(node.species.name)
    const chainNodes: any[] = []
    const collect = (node: any) => {
      chainNodes.push(node)
      node.evolves_to.forEach(collect)
    }
    collect(evoChainData.chain)
    const resolved = new Map<string, EvolutionInfo>()
    await Promise.all(
      chainNodes.filter(inHisui).map(async (node: any) => {
        const nodeSpecies = await fetch(node.species.url).then((r) => r.json())
        const nodePokemon = await fetch(getDefaultVarietyUrl(nodeSpecies)).then((r) => r.json())
        resolved.set(node.species.name, {
          apiName: node.species.name,
          name: getFrenchName(nodeSpecies.names),
          sprite: nodePokemon.sprites.other['official-artwork'].front_default,
          condition: node.evolution_details.length ? await describeNodeCondition(node) : '',
        })
      }),
    )

    const evolutionLine: EvolutionStage[] = []
    let stage: any[] = [evoChainData.chain]
    while (stage.length) {
      const members = stage.filter(inHisui).map((n) => resolved.get(n.species.name)!)
      if (members.length) evolutionLine.push(members)
      stage = stage.flatMap((n) => n.evolves_to)
    }

    const evolutions = nextNodes
      .filter(inHisui)
      .map((node: any) => resolved.get(node.species.name)!)

    const parentNode = findParentNode(evoChainData.chain, data.species.name)
    const parentInfo = parentNode ? resolved.get(parentNode.species.name) : undefined
    const previousEvolution: EvoLink | null = parentInfo
      ? { apiName: parentInfo.apiName, name: parentInfo.name, sprite: parentInfo.sprite }
      : null
    const evolvedFromCondition = resolved.get(data.species.name)?.condition ?? ''

    pokemon.value = {
      name: frenchName,
      sprite: data.sprites.other['official-artwork'].front_default,
      types: data.types.map((t: any) => TYPE_LABELS[t.type.name] ?? t.type.name),
      typeSlugs: data.types.map((t: any) => t.type.name),
      abilities: frenchAbilities,
      stats: data.stats.map((s: any) => ({
        name: STAT_LABELS[s.stat.name] ?? s.stat.name,
        value: s.base_stat as number,
      })),
      evolutions: evolutions,
      previousEvolution: previousEvolution,
      evolvedFromCondition,
      evolutionLine,
      apiName: data.species.name,
      hisuiNumber: entries.value.find((e) => e.apiName === name)?.entryNumber ?? null,
      rarity: getRarity(speciesData),
      height: data.height / 10,
      weight: data.weight / 10,
      femaleRatio: speciesData.gender_rate < 0 ? null : speciesData.gender_rate / 8,
      locations: HISUI_LOCATIONS[name] ?? [],
      genus: getFrenchGenus(speciesData.genera),
      description: getFrenchDescription(speciesData.flavor_text_entries),
      weaknesses: matchups.weaknesses,
      resistances: matchups.resistances,
      immunities: matchups.immunities,
      strengths: matchups.strengths,
      moves: moves,
    }
  } catch {
    error.value = 'Impossible de charger ce Pokémon.'
  } finally {
    isLoading.value = false
  }
}

function handleSelect(name: string) {
  selectedName.value = name
  fetchPokemon(name)
}

function handleTypeFilter(slug: string) {
  typeFilter.value = slug
  searchQuery.value = ''
  selectedName.value = null
}

function backToIndex() {
  selectedName.value = null
}

function goBack() {
  const previous = history.value.pop()
  if (previous) {
    selectedName.value = previous
    fetchPokemon(previous)
  }
}
</script>

<template>
  <div class="scene">
    <div class="book" :class="{ open: isOpen, 'has-pokemon': !!selectedName }">
      <div class="page page-left">
        <div class="nav-row index-nav" v-if="isOpen && !selectedName">
          <button class="sync-button" :class="sync.status" @click="isSyncOpen = true">
            <span class="sync-dot"></span>
            {{ sync.user ? 'Synchronisé' : 'Synchroniser mes appareils' }}
          </button>
          <button class="close-tab" @click="isOpen = false">✕ Fermer le livre</button>
        </div>
        <div class="index-toolbar" v-if="!selectedName">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher par nom ou n°..."
            class="search-input"
          />

          <div class="type-menu">
            <button class="type-toggle" @click="isTypeMenuOpen = !isTypeMenuOpen">
              <span
                v-if="typeFilter"
                class="type-toggle-dot"
                :style="{ background: TYPE_COLORS[typeFilter] }"
              ></span>
              {{ typeFilter ? TYPE_LABELS[typeFilter] : 'Type' }}
              <span class="arrow" :class="{ open: isTypeMenuOpen }">▾</span>
            </button>
            <ul class="type-options" v-if="isTypeMenuOpen">
              <li @click="setTypeFilter(null)" :class="{ active: !typeFilter }">Tous les types</li>
              <li
                v-for="slug in Object.keys(TYPE_LABELS)"
                :key="slug"
                @click="setTypeFilter(slug)"
                :class="{ active: typeFilter === slug }"
              >
                <span class="type-option-dot" :style="{ background: TYPE_COLORS[slug] }"></span>
                {{ TYPE_LABELS[slug] }}
              </li>
            </ul>
          </div>

          <div class="sort-menu">
            <button class="sort-toggle" @click="isStatusMenuOpen = !isStatusMenuOpen">
              {{ STATUS_FILTERS.find((f) => f.value === statusFilter)?.label ?? 'Statut' }}
              <span class="arrow" :class="{ open: isStatusMenuOpen }">▾</span>
            </button>
            <ul class="sort-options" v-if="isStatusMenuOpen">
              <li @click="setStatusFilter(null)" :class="{ active: !statusFilter }">
                Tous les Pokémon
              </li>
              <template v-for="group in STATUS_GROUPS" :key="group.title">
                <li class="menu-group">{{ group.title }}</li>
                <li
                  v-for="f in group.filters"
                  :key="f.value"
                  @click="setStatusFilter(f.value)"
                  :class="{ active: statusFilter === f.value }"
                >
                  {{ f.label }}
                </li>
              </template>
            </ul>
          </div>

          <div class="sort-menu">
            <button class="sort-toggle" @click="isSortMenuOpen = !isSortMenuOpen">
              Tri <span class="arrow" :class="{ open: isSortMenuOpen }">▾</span>
            </button>
            <ul class="sort-options" v-if="isSortMenuOpen">
              <li @click="setSort('number', 'asc')">N° croissant</li>
              <li @click="setSort('number', 'desc')">N° décroissant</li>
              <li @click="setSort('alpha', 'asc')">A → Z</li>
              <li @click="setSort('alpha', 'desc')">Z → A</li>
            </ul>
          </div>
        </div>

        <template v-if="!selectedName">
          <TeamStrip @select="handleSelect" />
          <p v-if="entries.length" class="progress-summary">
            <span
              ><b class="c-caught">●</b> {{ hisuiCounts.caught }}/{{
                entries.length
              }}
              capturés</span
            >
            <span
              ><b class="c-research">★</b> {{ hisuiCounts.researchDone }}/{{
                entries.length
              }}
              recherches</span
            >
            <span
              ><b class="c-alpha">B</b> {{ progress.counts.alphas }}/{{ TOTAL_ALPHAS }} Barons
              capturés</span
            >
            <span v-if="hisuiCounts.shiny"><b class="c-shiny">✦</b> {{ hisuiCounts.shiny }}</span>
          </p>
          <PokedexIndex :entries="firstHalf" @select="handleSelect" />
          <button class="credits-link" @click="isCreditsOpen = true">
            Projet de fan non officiel · Crédits
          </button>
        </template>
        <template v-else>
          <p v-if="isLoading" class="status">Chargement...</p>
          <p v-else-if="error" class="status">{{ error }}</p>
          <PokemonArtCard
            v-else-if="pokemon"
            :sprite="pokemon.sprite"
            :name="pokemon.name"
            :typeSlugs="pokemon.typeSlugs"
          >
            <template #nav>
              <div class="nav-row">
                <button class="close-tab" @click="selectedName = null">← Retour à l'index</button>
                <button class="close-tab" v-if="isOpen" @click="isOpen = false">
                  ✕ Fermer le livre
                </button>
              </div>
              <button
                class="close-tab prev-evo"
                v-if="pokemon.previousEvolution"
                @click="handleSelect(pokemon.previousEvolution.apiName)"
              >
                ← {{ pokemon.previousEvolution.name }}
              </button>
            </template>
            <template #footer>
              <ProgressToggles
                :apiName="pokemon.apiName"
                :name="pokemon.name"
                :sprite="pokemon.sprite"
              />
            </template>
          </PokemonArtCard>
        </template>
      </div>

      <div class="page-right-mask">
        <div class="page page-right">
          <PokedexIndex v-if="!selectedName" :entries="secondHalf" @select="handleSelect" />
          <PokemonInfoCard
            v-else-if="pokemon"
            :pokemon="pokemon"
            @select="handleSelect"
            @filter-type="handleTypeFilter"
          />
        </div>
      </div>

      <div class="spine"></div>

      <BookCover :isOpen="isOpen" @toggle="isOpen = !isOpen" />
      <CreditsPanel :open="isCreditsOpen" @close="isCreditsOpen = false" />
      <SyncPanel :open="isSyncOpen" @close="isSyncOpen = false" />
    </div>
  </div>
</template>

<style scoped>
.scene {
  display: flex;
  justify-content: center;
  padding: 24px 24px;
  perspective: 1800px;
  width: 100%;
}

.book {
  position: relative;
  width: var(--page-w);
  height: var(--page-h);
  transition:
    width 0.7s cubic-bezier(0.4, 0.1, 0.2, 1),
    height 0.7s cubic-bezier(0.4, 0.1, 0.2, 1);
}
.book.open {
  width: calc(var(--page-w) * 2);
}
.page {
  position: absolute;
  top: 0;
  width: var(--page-w);
  height: var(--page-h);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: 22px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.page-left {
  left: 0;
  border-radius: 6px 0 0 6px;
}
.page-right {
  left: 0;
  border-radius: 0 6px 6px 0;
  border-left: none;
}

.page-right-mask {
  position: absolute;
  top: 0;
  left: var(--page-w);
  width: 0;
  height: var(--page-h);
  overflow: hidden;
  transition: width 0.7s cubic-bezier(0.4, 0.1, 0.2, 1);
}
.book.open .page-right-mask {
  width: var(--page-w);
}

.spine {
  position: absolute;
  left: calc(var(--page-w) - 3px);
  top: 0;
  bottom: 0;
  width: 6px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.14),
    rgba(0, 0, 0, 0.02) 40%,
    rgba(0, 0, 0, 0.02) 60%,
    rgba(0, 0, 0, 0.14)
  );
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.book.open .spine {
  opacity: 1;
  transition-delay: 0.3s;
}

.close-tab {
  display: block;
  margin: 0 0 14px auto;
  background: none;
  border: none;
  padding: 0;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--text-2);
  cursor: pointer;
}
.close-tab:hover {
  color: var(--accent);
}

.nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.nav-row .close-tab {
  margin: 0;
  color: #3a4a3a;
}
.nav-row .close-tab:hover {
  color: #1a3d1a;
}
.close-tab.prev-evo {
  margin: 0 0 14px;
  color: #3a4a3a;
}
.close-tab.prev-evo:hover {
  color: #1a3d1a;
}
.progress-summary {
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin: 0 0 8px;
  padding: 8px 10px;
  border-radius: 8px;
  background: var(--surface-2);
  font-size: 12.5px;
  color: var(--text-2);
}
.progress-summary b {
  margin-right: 2px;
}
.c-caught {
  color: #c62f2f;
}
.c-research {
  color: #d99a1c;
}
.c-alpha {
  display: inline-block;
  padding: 0 4px;
  border-radius: 4px;
  background: #c62f2f;
  color: #fff;
  font-size: 10px;
}
.c-shiny {
  color: #9a5cc8;
}
.index-nav {
  margin-bottom: 12px;
}
/* Pastille d'état : grise hors connexion, verte synchronisé, orange en
   cours ou hors ligne, rouge en erreur */
.sync-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font: inherit;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--text-2);
  cursor: pointer;
}
.sync-button:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.sync-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #9aa1b4;
}
.sync-button.ok .sync-dot {
  background: var(--hp-ok);
}
.sync-button.syncing .sync-dot,
.sync-button.offline .sync-dot {
  background: var(--hp-mid);
}
.sync-button.error .sync-dot {
  background: var(--hp-low);
}
.credits-link {
  flex-shrink: 0;
  align-self: center;
  margin-top: 10px;
  padding: 4px 8px;
  border: none;
  background: none;
  font: inherit;
  font-size: 11.5px;
  color: var(--text-2);
  cursor: pointer;
}
.credits-link:hover {
  color: var(--accent);
  text-decoration: underline;
}
.status {
  font-size: 13px;
  color: var(--text-2);
}

.sort-controls {
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
}
.sort-controls button {
  border: 1px solid var(--border);
  background: none;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: var(--text-2);
}
.sort-controls button.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
.sort-menu,
.type-menu {
  position: relative;
}
.sort-toggle,
.type-toggle {
  border: 1px solid var(--border);
  background: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: var(--text-2);
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}
.arrow.open {
  transform: rotate(180deg);
}
.sort-options,
.type-options {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  list-style: none;
  padding: 4px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  box-shadow: var(--shadow);
  z-index: 4;
  min-width: 180px;
  max-height: 320px;
  overflow-y: auto;
}
.sort-options li,
.type-options li {
  padding: 9px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sort-options li.active {
  background: var(--accent);
  color: #fff;
}
/* Titre de section dans le menu Statut (non cliquable) */
.sort-options li.menu-group {
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-2);
  cursor: default;
  pointer-events: none;
}
.sort-options li:hover,
.type-options li:hover {
  background: rgba(0, 0, 0, 0.06);
}
.type-options li.active {
  background: var(--accent);
  color: #fff;
}
.type-toggle-dot,
.type-option-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.index-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}
.search-input {
  flex: 1 1 140px;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  color: var(--text);
  background: var(--surface);
}

/* Écran trop étroit pour montrer les deux pages côte à côte (téléphone,
   tablette en portrait) : les pages s'empilent dans le flux normal, pleine
   largeur. Sur l'index, la liste tient entière sur la page de gauche et la
   page de droite est masquée ; sur une fiche, l'illustration est au-dessus
   et la fiche en dessous. Même seuil que NARROW_QUERY. */
@media (max-width: 959px) {
  .scene {
    padding: 12px;
  }
  .book.open {
    width: var(--page-w);
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .book.open .page,
  .book.open .page-right-mask {
    position: relative;
    left: 0;
  }
  .page {
    padding: 14px;
  }
  .page-right-mask {
    left: 0;
    width: var(--page-w);
    transition: none;
  }
  .book.open .page-right-mask {
    width: var(--page-w);
    height: var(--page-h);
  }
  .book.open:not(.has-pokemon) .page-right-mask {
    display: none;
  }
  .book.has-pokemon .page-left {
    height: auto;
    overflow: visible;
  }
  .page-left,
  .page-right {
    border-radius: 6px;
    border-left: 1px solid var(--border);
  }
  .spine {
    display: none;
  }
}
</style>
