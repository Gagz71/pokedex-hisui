<script setup lang="ts">
import { ref, computed } from 'vue'
import { TYPE_COLORS } from '../data/typeColors'

const props = defineProps<{
  pokemon: {
    name: string
    sprite: string
    types: string[]
    typeSlugs: string[]
    abilities: string[]
    stats: { name: string; value: number }[]
    evolutions: { apiName: string; name: string; sprite: string; condition: string }[]
    previousEvolution: { apiName: string; name: string; sprite: string } | null
    evolvedFromCondition: string
    evolutionLine: { apiName: string; name: string; sprite: string; condition: string }[][]
    apiName: string
    hisuiNumber: number | null
    rarity: 'legendary' | 'mythical' | null
    height: number
    weight: number
    femaleRatio: number | null
    locations: { region: string; details: string; alphas?: string[] }[]
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
}>()

const emit = defineEmits<{
  select: [name: string]
  'filter-type': [slug: string]
}>()

type View = 'defaut' | 'stats' | 'type' | 'evolution' | 'localisation' | 'moveset'
const activeView = ref<View>('defaut')
const isSimpleView = computed(() => ['defaut', 'stats', 'type'].includes(activeView.value))

const accent = computed(() => {
  const slug = props.pokemon.typeSlugs[0]
  return (slug && TYPE_COLORS[slug]) || '#A8A77A'
})

// Carte d'Hisui : la carte du jeu (écran de sélection de zone au portail de
// Rusti-Cité, avec les panneaux en écriture Zarbi), 2300×1278 px, récupérée
// sur Poképédia (Fichier:Hisui_-_LPA.png).
// Chaque zone est un polygone qui suit le relief (neige, volcan, marais...),
// en unités du viewBox (x: 0-100, y: 0-55.565, soit le ratio de l'image),
// tracé puis vérifié en superposition sur l'image. Les zones actives
// affichent la carte telle quelle, le reste est grisé.
// cx/cy/zoom servent au gros plan (clic) : centre du recadrage (% de l'image,
// x et y sur 0-100 cette fois, indépendant du viewBox) et facteur de zoom,
// calculés à partir du rectangle englobant de chaque polygone.
const MAP_SRC = '/hisui-maps/hisui-map.jpg'
const MAP_HEIGHT = 55.565

const HISUI_ZONES = [
  {
    key: 'ice',
    name: 'Terres Immaculées',
    points:
      '14.5,15 12.5,12.5 15,9.5 21,7.5 28,7.5 35,8.5 42,11.5 44,14.5 41,17.5 38,21 36,24.5 33,26 29,25.5 25,27 22,25 18,23.5 16.5,21 15,16.5',
    cx: 28.2,
    cy: 31.1,
    zoom: 2.76,
  },
  {
    key: 'highlands',
    name: 'Contrefort Couronné',
    points:
      '44,14.5 42,11.5 45,9 50,10.5 53,15 56,17.5 56.5,22.5 60,26 65,28 72.5,30 79,35 75,38 69,38 63,35 60,32.5 57.5,28 53,26 48,23.5 43,21 38,21 41,17.5',
    cx: 58.5,
    cy: 42.3,
    zoom: 1.87,
  },
  {
    key: 'coast',
    name: 'Côte Lazuli',
    points:
      '53,15 50,10.5 56,8 70,7.5 80,9 89,10.5 91,16.5 90,20 88,23.5 84,23.5 81,21 72.5,20 65,19.5 60,19 56,17.5',
    cx: 70.5,
    cy: 27.9,
    zoom: 2.12,
  },
  {
    key: 'mireland',
    name: 'Marais Carmin',
    points:
      '56,17.5 60,19 65,19.5 72.5,20 81,21 84,23.5 88,26 88,32 83,34.5 79,35 72.5,30 65,28 60,26 56.5,22.5',
    cx: 72,
    cy: 47.3,
    zoom: 2.72,
  },
  {
    key: 'fields',
    name: 'Plaines Obsidiennes',
    points:
      '25,27 29,25.5 33,26 36,24.5 38,21 43,21 48,23.5 53,26 57.5,28 60,32.5 63,35 69,38 63,40 55,43 50,47.5 45,45 41,48 35,48 28,45 21,43 15,39.5 21,38 28,36.5 30.5,32.5 30,28',
    cx: 42,
    cy: 62.1,
    zoom: 1.61,
  },
]

// Rusti-Cité n'est pas un territoire mais un petit village : juste un pin.
const JUBILIFE_PIN = {
  name: 'Rusti-Cité',
  x: 23.5,
  y: 32,
  color: '#e0393e',
  cx: 23.5,
  cy: 57.6,
  zoom: 3.3,
}

const RARITY_LABELS = { legendary: 'Légendaire', mythical: 'Fabuleux' } as const

// Barons à emplacement fixe (champ alphas des localisations). Les Barons des
// invasions massives ne sont pas listés.
const alphaPlaces = computed(() => props.pokemon.locations.flatMap((l) => l.alphas ?? []))

const formatNumber = (n: number) => n.toLocaleString('fr-FR', { maximumFractionDigits: 1 })

const genderLabel = computed(() => {
  const ratio = props.pokemon.femaleRatio
  if (ratio === null) return 'Asexué'
  if (ratio === 0) return '100 % ♂'
  if (ratio === 1) return '100 % ♀'
  return `${formatNumber((1 - ratio) * 100)} % ♂ · ${formatNumber(ratio * 100)} % ♀`
})

const isFinalStage = computed(
  () => props.pokemon.evolutions.length === 0 && props.pokemon.evolutionLine.length > 1,
)

const activeRegions = computed(() => new Set(props.pokemon.locations.map((l) => l.region)))

const activeZones = computed(() => HISUI_ZONES.filter((z) => activeRegions.value.has(z.name)))

const expandedZone = ref<{ name: string; cx: number; cy: number; zoom: number } | null>(null)
const hoveredZoneName = ref<string | null>(null)
</script>

<template>
  <div class="card-frame" :style="{ '--type-accent': accent }">
    <div class="inner">
      <div class="header">
        <span class="name">{{ pokemon.name }}</span>
        <div class="hp-badge">
          <span class="hp-label">PV</span>
          <span class="hp-value">{{ pokemon.stats.find((s) => s.name === 'PV')?.value }}</span>
          <span class="type-dot"></span>
        </div>
      </div>

      <div class="buttons">
        <button :class="{ active: activeView === 'defaut' }" @click="activeView = 'defaut'">
          Accueil
        </button>
        <button :class="{ active: activeView === 'stats' }" @click="activeView = 'stats'">
          Stats
        </button>
        <button :class="{ active: activeView === 'type' }" @click="activeView = 'type'">
          Type
        </button>
        <button :class="{ active: activeView === 'evolution' }" @click="activeView = 'evolution'">
          Évolution
        </button>
        <button
          :class="{ active: activeView === 'localisation' }"
          @click="activeView = 'localisation'"
        >
          Carte
        </button>
        <button :class="{ active: activeView === 'moveset' }" @click="activeView = 'moveset'">
          Sorts
        </button>
      </div>

      <div class="window">
        <div class="content" v-if="isSimpleView">
          <div v-if="activeView === 'defaut'" class="accueil">
            <div class="badges">
              <span v-if="pokemon.hisuiNumber" class="badge">
                N° {{ String(pokemon.hisuiNumber).padStart(3, '0') }} du Pokédex de Hisui
              </span>
              <span v-if="pokemon.rarity" class="badge badge-legend">
                ★ {{ RARITY_LABELS[pokemon.rarity] }}
              </span>
              <button
                v-if="alphaPlaces.length"
                class="badge badge-alpha"
                title="Voir les emplacements sur la carte"
                @click="activeView = 'localisation'"
              >
                Baron : {{ alphaPlaces.join(' · ') }}
              </button>
            </div>

            <div class="dex-entry">
              <p class="genus">{{ pokemon.genus }}</p>
              <p class="dex-text">{{ pokemon.description }}</p>
            </div>

            <div class="facts">
              <div class="fact">
                <span class="fact-label">Taille</span>
                <span class="fact-value">{{ formatNumber(pokemon.height) }} m</span>
              </div>
              <div class="fact">
                <span class="fact-label">Poids</span>
                <span class="fact-value">{{ formatNumber(pokemon.weight) }} kg</span>
              </div>
              <div class="fact fact-wide">
                <span class="fact-label">Sexe</span>
                <span class="fact-value">{{ genderLabel }}</span>
                <div v-if="pokemon.femaleRatio !== null" class="gender-bar">
                  <div
                    class="gender-bar-male"
                    :style="{ width: (1 - pokemon.femaleRatio) * 100 + '%' }"
                  ></div>
                </div>
              </div>
              <div class="fact fact-wide">
                <span class="fact-label">Talents</span>
                <span class="fact-value abilities-value">{{ pokemon.abilities.join(' · ') }}</span>
              </div>
            </div>

            <div v-if="pokemon.locations.length" class="where">
              <span class="fact-label">Où le trouver</span>
              <div class="where-chips">
                <button
                  v-for="loc in pokemon.locations"
                  :key="loc.region"
                  class="where-chip"
                  @click="activeView = 'localisation'"
                >
                  {{ loc.region }}
                </button>
              </div>
            </div>
          </div>
          <div v-else-if="activeView === 'stats'" class="stats">
            <div v-for="stat in pokemon.stats" :key="stat.name" class="stat-row">
              <div class="stat-head">
                <span class="stat-name">{{ stat.name }}</span>
                <span class="stat-value">{{ stat.value }}</span>
              </div>
              <div class="stat-bar">
                <div
                  class="stat-bar-fill"
                  :style="{ width: Math.min(100, (stat.value / 255) * 100) + '%' }"
                ></div>
              </div>
            </div>
          </div>
          <div v-else-if="activeView === 'type'" class="type-view">
            <div class="type-badges">
              <span
                v-for="(type, i) in pokemon.types"
                :key="type"
                class="type-badge"
                :style="{ background: TYPE_COLORS[pokemon.typeSlugs[i] ?? ''] ?? accent }"
                @click="emit('filter-type', pokemon.typeSlugs[i] ?? '')"
              >
                {{ type }}
              </span>
            </div>

            <div v-if="pokemon.weaknesses.length" class="matchup-group">
              <span class="matchup-label weak">Vulnérable à</span>
              <div class="matchup-pills">
                <span
                  v-for="w in pokemon.weaknesses"
                  :key="w.slug"
                  class="matchup-pill weak"
                  @click="emit('filter-type', w.slug)"
                >
                  {{ w.type }} <b>×{{ w.multiplier }}</b>
                </span>
              </div>
            </div>

            <div v-if="pokemon.strengths.length" class="matchup-group">
              <span class="matchup-label strong">Fort contre</span>
              <div class="matchup-pills">
                <span
                  v-for="s in pokemon.strengths"
                  :key="s.slug"
                  class="matchup-pill strong"
                  @click="emit('filter-type', s.slug)"
                  >{{ s.type }}</span
                >
              </div>
            </div>

            <div v-if="pokemon.resistances.length" class="matchup-group">
              <span class="matchup-label resist">Résiste à</span>
              <div class="matchup-pills">
                <span
                  v-for="r in pokemon.resistances"
                  :key="r.slug"
                  class="matchup-pill resist"
                  @click="emit('filter-type', r.slug)"
                >
                  {{ r.type }} <b>×{{ r.multiplier }}</b>
                </span>
              </div>
            </div>

            <div v-if="pokemon.immunities.length" class="matchup-group">
              <span class="matchup-label immune">Immunisé à</span>
              <div class="matchup-pills">
                <span
                  v-for="im in pokemon.immunities"
                  :key="im.slug"
                  class="matchup-pill immune"
                  @click="emit('filter-type', im.slug)"
                  >{{ im.type }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <template v-else>
          <div v-if="activeView === 'evolution'" class="evolutions">
            <!-- Lignée complète, le Pokémon affiché mis en avant -->
            <div v-if="pokemon.evolutionLine.length > 1" class="evo-line">
              <template v-for="(stage, i) in pokemon.evolutionLine" :key="i">
                <span v-if="i > 0" class="evo-arrow">→</span>
                <div class="evo-stage">
                  <button
                    v-for="member in stage"
                    :key="member.apiName"
                    class="evo-member"
                    :class="{ current: member.apiName === pokemon.apiName }"
                    :title="member.name"
                    @click="member.apiName !== pokemon.apiName && emit('select', member.apiName)"
                  >
                    <img :src="member.sprite" :alt="member.name" />
                    <span>{{ member.name }}</span>
                  </button>
                </div>
              </template>
            </div>

            <div
              v-if="pokemon.evolutions.length"
              class="evo-next"
              :class="{ many: pokemon.evolutions.length > 2 }"
            >
              <div
                v-for="evo in pokemon.evolutions"
                :key="evo.apiName"
                class="evolution-item"
                @click="emit('select', evo.apiName)"
              >
                <img :src="evo.sprite" :alt="evo.name" />
                <div class="evolution-text">
                  <span class="evolution-name">{{ evo.name }}</span>
                  <span class="evolution-condition">{{ evo.condition }}</span>
                </div>
              </div>
            </div>

            <!-- Stade final : on raconte comment il a été obtenu -->
            <div v-if="isFinalStage && pokemon.previousEvolution" class="evo-final">
              <span class="evo-final-tag">Évolution maximale atteinte</span>
              <div class="evo-final-row">
                <button
                  class="evo-final-poke"
                  @click="emit('select', pokemon.previousEvolution.apiName)"
                >
                  <img
                    :src="pokemon.previousEvolution.sprite"
                    :alt="pokemon.previousEvolution.name"
                  />
                  <span>{{ pokemon.previousEvolution.name }}</span>
                </button>
                <div class="evo-final-how">
                  <span class="evo-final-arrow">→</span>
                  <span>{{ pokemon.evolvedFromCondition }}</span>
                </div>
                <div class="evo-final-poke current">
                  <img :src="pokemon.sprite" :alt="pokemon.name" />
                  <span>{{ pokemon.name }}</span>
                </div>
              </div>
            </div>

            <!-- Pas de lignée du tout -->
            <div v-if="pokemon.evolutionLine.length <= 1" class="evo-none">
              <img :src="pokemon.sprite" :alt="pokemon.name" />
              <span class="evo-none-title">Ce Pokémon n'évolue pas</span>
              <span class="evo-none-text">
                <template v-if="pokemon.rarity">
                  C'est un Pokémon {{ RARITY_LABELS[pokemon.rarity].toLowerCase() }} : il n'a ni
                  pré-évolution ni évolution.
                </template>
                <template v-else>
                  {{ pokemon.name }} n'a ni pré-évolution ni évolution : il reste tel quel pendant
                  toute l'aventure.
                </template>
              </span>
            </div>
          </div>
          <div v-else-if="activeView === 'localisation'" class="locations">
            <div class="hisui-map-wrap">
              <svg
                class="hisui-map"
                :viewBox="`0 0 100 ${MAP_HEIGHT}`"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="map-dim">
                    <feColorMatrix type="saturate" values="0.15" />
                    <feComponentTransfer>
                      <feFuncR type="linear" slope="0.8" />
                      <feFuncG type="linear" slope="0.8" />
                      <feFuncB type="linear" slope="0.8" />
                    </feComponentTransfer>
                  </filter>
                  <clipPath id="map-active-zones">
                    <polygon v-for="zone in activeZones" :key="zone.key" :points="zone.points" />
                  </clipPath>
                </defs>
                <!-- Fond grisé, puis la carte d'origine découpée sur les zones actives -->
                <image
                  :href="MAP_SRC"
                  x="0"
                  y="0"
                  width="100"
                  :height="MAP_HEIGHT"
                  filter="url(#map-dim)"
                />
                <image
                  :href="MAP_SRC"
                  x="0"
                  y="0"
                  width="100"
                  :height="MAP_HEIGHT"
                  clip-path="url(#map-active-zones)"
                />
                <polygon
                  v-for="zone in HISUI_ZONES"
                  :key="zone.key"
                  :points="zone.points"
                  class="map-zone"
                  :class="{ active: activeRegions.has(zone.name) }"
                  @mouseenter="activeRegions.has(zone.name) && (hoveredZoneName = zone.name)"
                  @mouseleave="hoveredZoneName = null"
                  @click="activeRegions.has(zone.name) && (expandedZone = zone)"
                />
                <circle
                  :cx="JUBILIFE_PIN.x"
                  :cy="JUBILIFE_PIN.y"
                  r="1.4"
                  class="map-pin"
                  :class="{ active: activeRegions.has(JUBILIFE_PIN.name) }"
                  :style="{ '--zone-color': JUBILIFE_PIN.color }"
                  @mouseenter="
                    activeRegions.has(JUBILIFE_PIN.name) && (hoveredZoneName = JUBILIFE_PIN.name)
                  "
                  @mouseleave="hoveredZoneName = null"
                  @click="activeRegions.has(JUBILIFE_PIN.name) && (expandedZone = JUBILIFE_PIN)"
                />
              </svg>
              <span v-if="hoveredZoneName" class="map-tooltip">{{ hoveredZoneName }}</span>
            </div>
            <p class="map-hint">
              Les zones en couleur indiquent où trouver ce Pokémon — touche une zone pour voir son
              nom, clique dessus pour l'agrandir.
            </p>

            <p v-if="pokemon.locations.length === 0" class="soon">
              Localisation non répertoriée pour le moment.
            </p>
            <div v-for="loc in pokemon.locations" :key="loc.region" class="location-item">
              <span class="location-region">{{ loc.region }}</span>
              <span class="location-details">{{ loc.details }}</span>
              <span v-if="loc.alphas?.length" class="location-alpha">
                <b>Baron</b> {{ loc.alphas.join(' · ') }}
              </span>
            </div>
          </div>
          <div v-else-if="activeView === 'moveset'" class="moveset">
            <p v-if="pokemon.moves.length === 0" class="soon">
              Aucune capacité répertoriée pour Hisui.
            </p>
            <div v-for="move in pokemon.moves" :key="move.name" class="move-card">
              <div class="move-head">
                <span class="move-name">{{ move.name }}</span>
                <span
                  class="move-type-badge"
                  :style="{ background: TYPE_COLORS[move.typeSlug] ?? accent }"
                  >{{ move.type }}</span
                >
              </div>
              <div class="move-meta">
                <span>{{
                  move.method === 'Montée de niveau' ? `Niveau ${move.level}` : move.method
                }}</span>
                <span>{{ move.damageClass }}</span>
                <span v-if="move.power">Puissance {{ move.power }}</span>
                <span v-if="move.accuracy">Précision {{ move.accuracy }}%</span>
                <span>PP {{ move.pp }}</span>
              </div>
              <p v-if="move.effect" class="move-effect">{{ move.effect }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div v-if="expandedZone" class="map-lightbox" @click="expandedZone = null">
      <div
        class="map-crop"
        :style="{
          '--crop-cx': expandedZone.cx + '%',
          '--crop-cy': expandedZone.cy + '%',
          '--crop-zoom': expandedZone.zoom,
        }"
      >
        <img :src="MAP_SRC" alt="" />
        <span class="map-crop-title">{{ expandedZone.name }}</span>
      </div>
      <button class="map-lightbox-close" @click="expandedZone = null">✕ Fermer</button>
    </div>
  </div>
</template>

<style scoped>
.card-frame {
  flex: 1;
  min-height: 0;
  display: flex;
  padding: 14px;
  background: linear-gradient(135deg, #fbe08a, #f0b93d);
  border-radius: 20px;
  box-shadow: 0 20px 40px -14px rgba(20, 30, 10, 0.4);
}

.inner {
  flex: 1;
  min-height: 0;
  background: #eaf5e1;
  border: 3px solid var(--type-accent);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.name {
  font-size: 22px;
  font-weight: 800;
  font-style: italic;
  color: #1a1a1a;
  text-transform: capitalize;
}
.hp-badge {
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.hp-label {
  font-size: 12px;
  font-weight: 700;
  color: #1a1a1a;
}
.hp-value {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a1a;
}
.type-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--type-accent);
  border: 1.5px solid #1a1a1a;
  flex-shrink: 0;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  flex-shrink: 0;
}
.buttons button {
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 10px;
  padding: 12px 4px;
  border: 1.5px solid #c9d6bd;
  background: transparent;
  color: #5b6b52;
}
.buttons button:hover {
  border-color: var(--type-accent);
}
.buttons button.active {
  background: var(--type-accent);
  border-color: var(--type-accent);
  color: #fff;
}

.window {
  flex: 1;
  min-height: 0;
  border: 3px solid #1a1a1a;
  border-radius: 8px;
  background: #ffffff;
  padding: 18px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.content {
  font-size: 15px;
  line-height: 1.5;
  color: #1a1a1a;
}
.accueil {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.badge {
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  background: #eef3e8;
  color: #4a5a40;
}
.badge-legend {
  background: linear-gradient(135deg, #fbe08a, #e8a92b);
  color: #5a3b00;
}
.badge-alpha {
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background: #c62f2f;
  color: #fff;
  text-align: left;
}
.badge-alpha:hover {
  background: #a82424;
}
.dex-entry {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 16px;
  border-left: 4px solid var(--type-accent);
  border-radius: 4px 10px 10px 4px;
  background: #f4f8f0;
}
.genus {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--type-accent);
  margin: 0;
}
.dex-text {
  font-size: 18px;
  line-height: 1.6;
  font-style: italic;
  color: #1a1a1a;
  margin: 0;
}
.facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.fact {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1.5px solid #dce6d2;
}
.fact-wide {
  grid-column: 1 / -1;
}
.fact-label {
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7a62;
}
.fact-value {
  font-size: 20px;
  font-weight: 800;
  color: #1a1a1a;
}
.abilities-value {
  font-size: 17px;
  text-transform: capitalize;
}
.gender-bar {
  height: 8px;
  border-radius: 999px;
  background: #f07fa6;
  overflow: hidden;
  margin-top: 4px;
}
.gender-bar-male {
  height: 100%;
  background: #4f8fe0;
}
.where {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.where-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.where-chip {
  font: inherit;
  font-size: 13.5px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1.5px solid var(--type-accent);
  background: transparent;
  color: #1a1a1a;
  cursor: pointer;
}
.where-chip:hover {
  background: var(--type-accent);
  color: #fff;
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.stat-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.stat-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.stat-name {
  font-size: 15px;
  font-weight: 700;
  text-transform: capitalize;
  color: #1a1a1a;
}
.stat-value {
  font-size: 17px;
  font-weight: 800;
  color: #1a1a1a;
}
.stat-bar {
  height: 9px;
  border-radius: 5px;
  background: #e5ecd9;
  overflow: hidden;
}
.stat-bar-fill {
  height: 100%;
  border-radius: 5px;
  background: var(--type-accent);
}

.type-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.type-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}
.type-badge {
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  transition: transform 0.15s ease;
}
.type-badge:hover {
  transform: translateY(-2px);
}

.matchup-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 14px;
  border-top: 1px solid #dce6d2;
}
.matchup-group:first-of-type {
  padding-top: 0;
  border-top: none;
}
.matchup-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.matchup-label.weak {
  color: #e3350d;
}
.matchup-label.strong {
  color: #b8790a;
}
.matchup-label.resist {
  color: #2e8b22;
}
.matchup-label.immune {
  color: #6c4a9c;
}

.matchup-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.matchup-pill {
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: 700;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.15s ease;
}
.matchup-pill:hover {
  transform: translateY(-2px);
}
.matchup-pill.weak {
  background: #e3350d;
  color: #fff;
}
.matchup-pill.strong {
  background: #f2a71b;
  color: #1a1a1a;
}
.matchup-pill.resist {
  background: #3dae2b;
  color: #fff;
}
.matchup-pill.immune {
  background: #6c4a9c;
  color: #fff;
}

.evolutions {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.evolution-item {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background: #f4f8f0;
}
.evolution-item:hover {
  background: #e7efdd;
}
.evolution-item img {
  flex: 1;
  min-height: 0;
  max-width: 100%;
  object-fit: contain;
}
.evolution-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  text-align: center;
}
.evolution-name {
  font-size: 20px;
  font-weight: 800;
  text-transform: capitalize;
  color: #1a1a1a;
}
.evolution-condition {
  font-size: 13.5px;
  color: #5b6373;
}

.evo-next {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
/* Beaucoup d'évolutions possibles (Évoli) : grille de cartes compactes, la
   fenêtre défile si besoin au lieu d'écraser les cartes. */
.evo-next.many {
  flex: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.evo-next.many .evolution-item {
  flex: none;
  flex-direction: row;
  justify-content: flex-start;
  padding: 8px 10px;
}
.evo-next.many .evolution-item img {
  flex: none;
  width: 64px;
  height: 64px;
}
.evo-next.many .evolution-text {
  align-items: flex-start;
  text-align: left;
  min-width: 0;
}
.evo-next.many .evolution-name {
  font-size: 16px;
}
.evo-next.many .evolution-condition {
  font-size: 12.5px;
  line-height: 1.35;
}
.evo-line {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px;
  border-radius: 10px;
  background: #f4f8f0;
}
.evo-stage {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  max-width: 60%;
}
.evo-arrow {
  font-size: 18px;
  font-weight: 800;
  color: #9aa894;
}
.evo-member {
  font: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px;
  border-radius: 10px;
  border: 2px solid transparent;
  background: transparent;
  cursor: pointer;
  font-size: 11.5px;
  font-weight: 700;
  color: #4a5a40;
}
.evo-member:hover {
  background: #e7efdd;
}
.evo-member.current {
  border-color: var(--type-accent);
  background: #fff;
  cursor: default;
}
.evo-member img {
  width: 56px;
  height: 56px;
  object-fit: contain;
}
/* Évoli & co : beaucoup de membres sur un même stade, on réduit */
.evo-stage:has(.evo-member:nth-child(4)) .evo-member img {
  width: 40px;
  height: 40px;
}
.evo-final,
.evo-none {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 18px;
  border-radius: 10px;
  background: #f4f8f0;
  text-align: center;
}
.evo-final-tag {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 5px 12px;
  border-radius: 999px;
  background: var(--type-accent);
  color: #fff;
}
.evo-final-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
}
.evo-final-poke {
  font: inherit;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px;
  border: none;
  border-radius: 10px;
  background: transparent;
  font-size: 15px;
  font-weight: 800;
  color: #1a1a1a;
}
button.evo-final-poke {
  cursor: pointer;
}
button.evo-final-poke:hover {
  background: #e7efdd;
}
.evo-final-poke img {
  width: 100%;
  max-width: 140px;
  aspect-ratio: 1;
  object-fit: contain;
}
.evo-final-poke.current img {
  max-width: 170px;
}
.evo-final-how {
  flex: 0 1 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #5b6373;
}
.evo-final-arrow {
  font-size: 26px;
  font-weight: 800;
  color: var(--type-accent);
}
.evo-none img {
  width: 55%;
  max-width: 220px;
  aspect-ratio: 1;
  object-fit: contain;
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.18));
}
.evo-none-title {
  font-size: 20px;
  font-weight: 800;
  color: #1a1a1a;
}
.evo-none-text {
  font-size: 14.5px;
  line-height: 1.5;
  color: #5b6373;
  max-width: 34ch;
}

.locations {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hisui-map-wrap {
  position: relative;
  margin-bottom: 6px;
}
.hisui-map {
  display: block;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.35);
}
.map-tooltip {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  padding: 5px 12px;
  border-radius: 999px;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}
.map-zone {
  fill: transparent;
  stroke: rgba(255, 255, 255, 0.35);
  stroke-width: 0.15;
  stroke-linejoin: round;
}
.map-zone.active {
  stroke: #fff;
  stroke-width: 0.45;
  cursor: pointer;
  filter: drop-shadow(0 0 0.6px rgba(0, 0, 0, 0.7));
}
.map-zone.active:hover {
  fill: rgba(255, 255, 255, 0.12);
}
.map-pin {
  fill: #8a8a8a;
  stroke: rgba(255, 255, 255, 0.6);
  stroke-width: 0.25;
}
.map-pin.active {
  fill: var(--zone-color);
  fill-opacity: 1;
  stroke: #fff;
  stroke-width: 0.5;
  cursor: pointer;
  filter: drop-shadow(0 0 3px var(--zone-color));
}
.map-hint {
  font-size: 11px;
  font-style: italic;
  color: #5b6373;
  text-align: center;
  margin: 0 0 4px;
}
.location-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 14px;
  border-radius: 10px;
  background: #f4f8f0;
}
.location-region {
  font-size: 16.5px;
  font-weight: 700;
  color: #1a1a1a;
}
.location-alpha {
  font-size: 13.5px;
  color: #a82424;
}
.location-alpha b {
  display: inline-block;
  margin-right: 4px;
  padding: 1px 7px;
  border-radius: 999px;
  background: #c62f2f;
  color: #fff;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.location-details {
  font-size: 14px;
  line-height: 1.4;
  color: #5b6373;
}

.soon {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9aa1b4;
  font-style: italic;
  font-size: 16px;
  text-align: center;
}

.moveset {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.move-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 10px;
  background: #f4f8f0;
}
.move-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.move-name {
  font-size: 15.5px;
  font-weight: 800;
  color: #1a1a1a;
  text-transform: capitalize;
}
.move-type-badge {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  flex-shrink: 0;
}
.move-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #5b6373;
}
.move-effect {
  font-size: 13.5px;
  line-height: 1.45;
  color: #3a3a3a;
  margin: 0;
}

.map-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 24px;
  z-index: 50;
  cursor: pointer;
}
.map-crop {
  position: relative;
  width: min(94vw, 900px);
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 14px;
  cursor: default;
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.6);
}
.map-crop img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(var(--crop-zoom) * 100%);
  max-width: none;
  height: auto;
  transform: translate(calc(-1 * var(--crop-cx)), calc(-1 * var(--crop-cy)));
}
.map-crop-title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 14px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}
.map-lightbox-close {
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background: #fff;
  color: #1a1a1a;
  cursor: pointer;
}
</style>
