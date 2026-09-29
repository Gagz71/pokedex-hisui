<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  useProgressStore,
  alphaKey,
  otherAlphaKey,
  type PokemonFlag,
  type AlphaFlag,
} from '../stores/progress'
import { HISUI_LOCATIONS } from '../data/hisuiLocations'

const props = defineProps<{
  apiName: string
  name: string
  sprite: string
  canBeAlpha: boolean // faux pour les légendaires et fabuleux
  evolutions: { apiName: string; name: string; sprite: string }[] // évolutions directes
}>()

const emit = defineEmits<{
  select: [name: string]
}>()

const progress = useProgressStore()
const state = computed(() => progress.get(props.apiName))

const TOGGLES: { flag: PokemonFlag; label: string; icon: string }[] = [
  { flag: 'seen', label: 'Vu', icon: '◉' },
  { flag: 'caught', label: 'Capturé', icon: '●' },
  { flag: 'researchDone', label: 'Recherche', icon: '★' },
  { flag: 'shiny', label: 'Chroma', icon: '✦' },
]

const TITLES: Record<PokemonFlag, string> = {
  seen: 'Pokémon vu',
  caught: 'Pokémon capturé',
  researchDone: 'Recherche terminée (niveau 10)',
  shiny: 'Chromatique capturé',
}

// Barons fixes de l'espèce : un suivi par emplacement (chacun est un
// individu distinct dans le jeu), puis une ligne pour les Barons hors
// emplacement fixe (apparition massive, distorsion, rencontre aléatoire).
const alphas = computed(() => {
  if (!props.canBeAlpha) return []
  const fixed = (HISUI_LOCATIONS[props.apiName] ?? []).flatMap((loc) =>
    (loc.alphas ?? []).map((place) => ({
      key: alphaKey(props.apiName, loc.region, place),
      place,
      region: loc.region,
    })),
  )
  const other = {
    key: otherAlphaKey(props.apiName),
    place: fixed.length ? 'Autre' : '',
    region: 'apparition massive, distorsion ou au hasard',
  }
  return [...fixed, other]
})

// « 1 normal · 1 Baron » : ce que l'équipe contient déjà de cette espèce.
const teamLabel = computed(() => {
  const { normal, alpha } = progress.teamCounts(props.apiName)
  const parts = []
  if (normal) parts.push(`${normal} normal${normal > 1 ? 'aux' : ''}`)
  if (alpha) parts.push(`${alpha} Baron${alpha > 1 ? 's' : ''}`)
  return parts.join(' · ')
})

// --- Évolution : le Pokémon capturé a évolué (voir progress.evolve)
const lastEvolution = ref<{ apiName: string; name: string } | null>(null)
watch(
  () => props.apiName,
  () => (lastEvolution.value = null),
)
function evolveInto(to: { apiName: string; name: string; sprite: string }) {
  progress.evolve(props.apiName, to)
  lastEvolution.value = { apiName: to.apiName, name: to.name }
}

const ALPHA_STATES: { flag: AlphaFlag; label: string }[] = [
  { flag: 'encountered', label: 'Rencontré' },
  { flag: 'defeated', label: 'Battu' },
  { flag: 'caught', label: 'Capturé' },
]
</script>

<template>
  <div class="progress-panel">
    <div class="progress-toggles">
      <button
        v-for="t in TOGGLES"
        :key="t.flag"
        class="toggle"
        :class="[t.flag, { on: state[t.flag] }]"
        :aria-pressed="state[t.flag]"
        :title="TITLES[t.flag]"
        @click="progress.toggle(apiName, t.flag)"
      >
        <span class="icon">{{ t.icon }}</span>
        {{ t.label }}
      </button>
    </div>

    <!-- Équipe : on précise à l'ajout s'il s'agit d'un Baron -->
    <div class="team-block">
      <p v-if="teamLabel" class="team-status">✓ Dans l'équipe : {{ teamLabel }}</p>
      <p v-if="progress.isTeamFull" class="team-full">
        Équipe complète ({{ progress.data.team.members.length }}/6)
      </p>
      <div v-else class="team-actions">
        <button class="team-button" @click="progress.addToTeam(apiName, name, sprite)">
          ＋ Équipe
        </button>
        <button
          v-if="canBeAlpha"
          class="team-button alpha"
          @click="progress.addToTeam(apiName, name, sprite, true)"
        >
          ＋ Équipe en Baron
        </button>
      </div>
    </div>

    <!-- Évolution du Pokémon capturé -->
    <div v-if="evolutions.length" class="evolve-block">
      <p v-if="lastEvolution" class="evolve-status">
        ✓ {{ name }} a évolué en {{ lastEvolution.name }}
        <button class="link" @click="emit('select', lastEvolution.apiName)">
          Voir {{ lastEvolution.name }} →
        </button>
      </p>
      <p v-else-if="state.evolved" class="evolve-status">
        ↗ Ton {{ name }} a évolué
        <button class="link" @click="progress.undoEvolve(apiName)">Annuler</button>
      </p>
      <div class="evolve-actions" :class="{ many: evolutions.length > 2 }">
        <span v-if="evolutions.length > 2" class="evolve-label">↗ Faire évoluer en :</span>
        <button
          v-for="evo in evolutions"
          :key="evo.apiName"
          class="evolve-button"
          @click="evolveInto(evo)"
        >
          {{ evolutions.length > 2 ? evo.name : `↗ Faire évoluer en ${evo.name}` }}
        </button>
      </div>
    </div>

    <div v-for="alpha in alphas" :key="alpha.key" class="alpha-row">
      <span class="alpha-place">
        <b class="alpha-tag">Baron</b>
        <span v-if="alpha.place" class="alpha-name">{{ alpha.place }}</span>
        <span class="alpha-region">{{ alpha.region }}</span>
      </span>
      <div class="alpha-states">
        <button
          v-for="s in ALPHA_STATES"
          :key="s.flag"
          class="alpha-state"
          :class="[s.flag, { on: progress.getAlpha(alpha.key)[s.flag] }]"
          :aria-pressed="progress.getAlpha(alpha.key)[s.flag]"
          @click="progress.toggleAlpha(alpha.key, s.flag)"
        >
          {{ s.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.progress-toggles {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
}
.toggle {
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 7px 2px;
  border-radius: 10px;
  border: 1.5px solid #c9d6bd;
  background: #fff;
  color: #6b7a62;
  cursor: pointer;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.toggle:hover {
  border-color: #9aa894;
}
.icon {
  font-size: 15px;
  line-height: 1;
  opacity: 0.45;
}
.toggle.on {
  color: #fff;
}
.toggle.on .icon {
  opacity: 1;
}
.toggle.seen.on {
  background: #5b7aa8;
  border-color: #5b7aa8;
}
.toggle.caught.on {
  background: #c62f2f;
  border-color: #c62f2f;
}
.toggle.researchDone.on {
  background: #d99a1c;
  border-color: #d99a1c;
}
.toggle.shiny.on {
  background: linear-gradient(135deg, #7b5cd6, #d65cb4);
  border-color: #9a5cc8;
}

.team-block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.team-status,
.team-full {
  margin: 0;
  font-size: 12.5px;
  font-weight: 700;
  color: #3d4fc4;
}
.team-full {
  color: #6b7a62;
}
.team-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 6px;
}
.team-button {
  font: inherit;
  font-size: 12.5px;
  font-weight: 700;
  padding: 7px 6px;
  border-radius: 10px;
  border: 1.5px dashed #9aa894;
  background: transparent;
  color: #4a5a40;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.team-button:hover {
  border-style: solid;
  background: #fff;
}
.team-button.alpha {
  border-color: #e3a3a3;
  color: #a82424;
}
.team-button.alpha:hover {
  border-color: #c62f2f;
  background: #fff6f6;
}
/* Petits téléphones */
@media (max-width: 400px) {
  .team-button {
    font-size: 11.5px;
    padding: 7px 2px;
  }
}
.evolve-block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.evolve-status {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 2px 8px;
  margin: 0;
  font-size: 12.5px;
  font-weight: 700;
  color: #2f7a4f;
}
.evolve-status .link {
  font: inherit;
  padding: 0;
  border: none;
  background: none;
  color: #3d4fc4;
  text-decoration: underline;
  cursor: pointer;
}
.evolve-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 5px;
}
/* Évoli & co : une grille de noms */
.evolve-actions.many {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.evolve-label {
  grid-column: 1 / -1;
  font-size: 12px;
  font-weight: 700;
  color: #2f7a4f;
}
.evolve-button {
  font: inherit;
  font-size: 12.5px;
  font-weight: 700;
  padding: 7px 4px;
  border-radius: 10px;
  border: 1.5px dashed #8fc0a2;
  background: transparent;
  color: #2f7a4f;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.evolve-button:hover {
  border-style: solid;
  background: #eef8f1;
}
.evolve-actions.many .evolve-button {
  font-size: 11.5px;
  padding: 5px 2px;
}
.alpha-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 5px 10px;
  padding: 6px 10px;
  border-radius: 10px;
  border: 1.5px solid #efc7c7;
  background: #fff6f6;
}
.alpha-place {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 2px 6px;
  font-size: 13px;
}
.alpha-tag {
  padding: 1px 7px;
  border-radius: 999px;
  background: #c62f2f;
  color: #fff;
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.alpha-name {
  font-weight: 700;
  color: #1a1a1a;
}
.alpha-region {
  font-size: 11.5px;
  color: #8a6b6b;
}
.alpha-states {
  flex: 1 1 230px;
  max-width: 300px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 5px;
}
.alpha-state {
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 2px;
  border-radius: 8px;
  border: 1.5px solid #e3c3c3;
  background: #fff;
  color: #9a7070;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.alpha-state:hover {
  border-color: #c62f2f;
}
.alpha-state.on {
  color: #fff;
}
.alpha-state.encountered.on {
  background: #d9826b;
  border-color: #d9826b;
}
.alpha-state.defeated.on {
  background: #7a5a5a;
  border-color: #7a5a5a;
}
.alpha-state.caught.on {
  background: #c62f2f;
  border-color: #c62f2f;
}

/* Petits téléphones (360 px) : les quatre boutons doivent tenir sur une ligne */
@media (max-width: 400px) {
  .progress-toggles {
    gap: 4px;
  }
  .toggle {
    font-size: 11px;
    padding: 7px 0;
  }
  .alpha-state {
    font-size: 11px;
  }
}
</style>
