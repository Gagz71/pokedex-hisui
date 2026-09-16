<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import BookCover from './components/BookCover.vue'
import PokemonArtCard from './components/PokemonArtCard.vue'
import PokemonInfoCard from './components/PokemonInfoCard.vue'
import PokedexIndex from './components/PokedexIndex.vue'

const isOpen = ref(false)
const selectedName = ref<string | null>(null)
const history = ref<string[]>([])

const sortField = ref<'number' | 'alpha'>('number')
const sortDirection = ref<'asc' | 'desc'>('asc')
const isSortMenuOpen = ref(false)

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
}

const entries = ref<PokedexEntry[]>([])

const searchQuery = ref('')

//Recherche de l'entrée par le nom ou le numéro
const filteredEntries = computed(() => {
  const query = normalize(searchQuery.value.trim())
  if (!query) return sortedEntries.value
  return sortedEntries.value.filter(
    (e) => normalize(e.name).includes(query) || e.entryNumber.toString().includes(query),
  )
})

const entriesPerPage = computed(() => Math.ceil(entries.value.length / 2))
const firstHalf = computed(() => filteredEntries.value.slice(0, entriesPerPage.value))
const secondHalf = computed(() => filteredEntries.value.slice(entriesPerPage.value))

async function fetchIndex() {
  const res = await fetch('https://pokeapi.co/api/v2/pokedex/hisui')
  const data = await res.json()
  const rawEntries = data.pokemon_entries

  // Un appel par Pokémon pour récupérer son nom français
  const speciesResponses = await Promise.all(
    rawEntries.map((e: any) => fetch(e.pokemon_species.url).then((r) => r.json())),
  )

  entries.value = rawEntries.map((e: any, i: number) => ({
    entryNumber: e.entry_number,
    name: getFrenchName(speciesResponses[i].names),
    apiName: e.pokemon_species.name,
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

interface PokemonData {
  name: string
  sprite: string
  types: string[]
  abilities: string[]
  stats: { name: string; value: number }[]
  evolutions: EvolutionInfo[]
  previousEvolution: EvoLink | null
}

const pokemon = ref<PokemonData | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)

function getFrenchName(names: any[]): string {
  return names.find((n) => n.language.name === 'fr')?.name ?? '???' // ?. === retourne undefined si .find ne trouve rien
}

function describeEvolution(detail: any): string {
  if (!detail) return 'Montée de niveau'
  if (detail.min_level) return `Atteindre le niveau ${detail.min_level}`
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

async function fetchPokemon(name: string) {
  isLoading.value = true
  error.value = null
  pokemon.value = null
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (!res.ok) throw new Error('not found')
    const data = await res.json()

    // Nom français : deuxième appel, vers l'URL "species" fournie par l'API
    const speciesRes = await fetch(data.species.url)
    const speciesData = await speciesRes.json()
    const frenchName = getFrenchName(speciesData.names)

    // Capacités françaises : un appel par capacité, tous lancés en même temps
    const abilityResponses = await Promise.all(
      data.abilities.map((a: any) => fetch(a.ability.url).then((r) => r.json())),
    )
    const frenchAbilities = abilityResponses.map((a) => getFrenchName(a.names))

    // Chaîne d'évolution
    const evoChainRes = await fetch(speciesData.evolution_chain.url)
    const evoChainData = await evoChainRes.json()
    const currentNode = findChainNode(evoChainData.chain, data.species.name)
    const nextNodes = currentNode?.evolves_to ?? []

    const evolutions = await Promise.all(
      nextNodes.map(async (node: any) => {
        const [pokeRes, speciesRes] = await Promise.all([
          fetch(`https://pokeapi.co/api/v2/pokemon/${node.species.name}`).then((r) => r.json()),
          fetch(node.species.url).then((r) => r.json()),
        ])

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

        condition += describeTimeOfDay(detail?.time_of_day)

        return {
          apiName: node.species.name,
          name: getFrenchName(speciesRes.names),
          sprite: pokeRes.sprites.other['official-artwork'].front_default,
          condition,
        }
      }),
    )

    const parentNode = findParentNode(evoChainData.chain, data.species.name)
    let previousEvolution: EvoLink | null = null
    if (parentNode) {
      const [prevPokeRes, prevSpeciesRes] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${parentNode.species.name}`).then((r) => r.json()),
        fetch(parentNode.species.url).then((r) => r.json()),
      ])
      previousEvolution = {
        apiName: parentNode.species.name,
        name: getFrenchName(prevSpeciesRes.names),
        sprite: prevPokeRes.sprites.other['official-artwork'].front_default,
      }
    }

    pokemon.value = {
      name: frenchName,
      sprite: data.sprites.other['official-artwork'].front_default,
      types: data.types.map((t: any) => TYPE_LABELS[t.type.name] ?? t.type.name),
      abilities: frenchAbilities,
      stats: data.stats.map((s: any) => ({
        name: STAT_LABELS[s.stat.name] ?? s.stat.name,
        value: s.base_stat as number,
      })),
      evolutions: evolutions,
      previousEvolution: previousEvolution,
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
    <div class="book" :class="{ open: isOpen }">
      <div class="page page-left">
        <button class="close-tab" v-if="isOpen" @click="isOpen = false">✕ Fermer le livre</button>
        <button class="close-tab" v-if="selectedName" @click="selectedName = null">
          ← Retour à l'index
        </button>
        <button
          class="close-tab"
          v-if="selectedName && pokemon?.previousEvolution"
          @click="handleSelect(pokemon.previousEvolution.apiName)"
        >
          ← {{ pokemon.previousEvolution.name }}
        </button>
        <div class="index-toolbar" v-if="!selectedName">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher par nom ou n°..."
            class="search-input"
          />

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

        <PokedexIndex v-if="!selectedName" :entries="firstHalf" @select="handleSelect" />
        <template v-else>
          <p v-if="isLoading" class="status">Chargement...</p>
          <p v-else-if="error" class="status">{{ error }}</p>
          <PokemonArtCard v-else-if="pokemon" :sprite="pokemon.sprite" :name="pokemon.name" />
        </template>
      </div>

      <div class="page-right-mask">
        <div class="page page-right">
          <PokedexIndex v-if="!selectedName" :entries="secondHalf" @select="handleSelect" />
          <PokemonInfoCard v-else-if="pokemon" :pokemon="pokemon" @select="handleSelect" />
        </div>
      </div>

      <div class="spine"></div>

      <BookCover :isOpen="isOpen" @toggle="isOpen = !isOpen" />
    </div>
  </div>
</template>

<style scoped>
.scene {
  display: flex;
  justify-content: center;
  padding: 48px 20px;
  perspective: 1800px;
  width: 100%;
}

.book {
  position: relative;
  width: 400px;
  height: 560px;
  transition: width 0.7s cubic-bezier(0.4, 0.1, 0.2, 1);
}
.book.open {
  width: 800px;
}
.page {
  position: absolute;
  top: 0;
  width: 400px;
  height: 560px;
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
  left: 400px;
  width: 0;
  height: 560px;
  overflow: hidden;
  transition: width 0.7s cubic-bezier(0.4, 0.1, 0.2, 1);
}
.book.open .page-right-mask {
  width: 400px;
}

.spine {
  position: absolute;
  left: 397px;
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
.sort-menu {
  position: relative;
}
.sort-toggle {
  border: 1px solid var(--border);
  background: none;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: var(--text-2);
}
.arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}
.arrow.open {
  transform: rotate(180deg);
}
.sort-options {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  list-style: none;
  padding: 4px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  box-shadow: var(--shadow);
  z-index: 4;
  min-width: 140px;
}
.sort-options li {
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
}
.sort-options li:hover {
  background: rgba(0, 0, 0, 0.06);
}

.index-toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.search-input {
  flex: 1;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
  color: var(--text);
  background: var(--surface);
}
</style>
