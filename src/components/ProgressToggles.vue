<script setup lang="ts">
import { computed } from 'vue'
import { useProgressStore, alphaKey, type PokemonFlag, type AlphaFlag } from '../stores/progress'
import { HISUI_LOCATIONS } from '../data/hisuiLocations'

const props = defineProps<{
  apiName: string
  name: string
  sprite: string
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
// individu distinct dans le jeu).
const alphas = computed(() =>
  (HISUI_LOCATIONS[props.apiName] ?? []).flatMap((loc) =>
    (loc.alphas ?? []).map((place) => ({
      key: alphaKey(props.apiName, loc.region, place),
      place,
      region: loc.region,
    })),
  ),
)

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

    <button
      class="team-button"
      :class="{ in: progress.teamCount(apiName) > 0 }"
      :disabled="progress.isTeamFull"
      @click="progress.addToTeam(apiName, name, sprite)"
    >
      <template v-if="progress.isTeamFull">
        Équipe complète ({{ progress.data.team.members.length }}/6)
      </template>
      <template v-else-if="progress.teamCount(apiName) > 0">
        ✓ Dans l'équipe · ＋ en ajouter un autre
      </template>
      <template v-else>＋ Ajouter à l'équipe</template>
    </button>

    <div v-for="alpha in alphas" :key="alpha.key" class="alpha-row">
      <span class="alpha-place">
        <b class="alpha-tag">Baron</b>
        <span class="alpha-name">{{ alpha.place }}</span>
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

.team-button {
  font: inherit;
  font-size: 12.5px;
  font-weight: 700;
  padding: 7px 10px;
  border-radius: 10px;
  border: 1.5px dashed #9aa894;
  background: transparent;
  color: #4a5a40;
  cursor: pointer;
}
.team-button:hover:not(:disabled) {
  border-style: solid;
  background: #fff;
}
.team-button.in {
  border-style: solid;
  border-color: #3d4fc4;
  color: #3d4fc4;
  background: #eef0fb;
}
.team-button:disabled {
  cursor: default;
  opacity: 0.6;
}
/* Lieu à gauche, boutons à droite ; passe sur deux lignes si trop étroit */
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
