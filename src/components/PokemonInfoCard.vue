<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
  pokemon: {
    name: string
    types: string[]
    stats: { name: string; value: number }[]
    evolutions: { apiName: string; name: string; sprite: string }[]
  }
}>()

const emit = defineEmits<{
  select: [name: string]
}>()

type View = 'defaut' | 'stats' | 'type' | 'evolution' | 'localisation' | 'moveset'
const activeView = ref<View>('defaut')
const isSimpleView = computed(() => ['defaut', 'stats', 'type'].includes(activeView.value))
</script>

<template>
  <div class="info-wrapper">
    <div class="info-card">
      <div class="content" v-if="isSimpleView">
        <div v-if="activeView === 'defaut'">
          <p class="name">{{ pokemon.name }}</p>
          <p class="hp">PV : {{ pokemon.stats.find((s) => s.name === 'PV')?.value }}</p>
        </div>
        <ul v-else-if="activeView === 'stats'" class="stats">
          <li v-for="stat in pokemon.stats" :key="stat.name">
            <span>{{ stat.name }}</span
            ><span>{{ stat.value }}</span>
          </li>
        </ul>
        <p v-else-if="activeView === 'type'">{{ pokemon.types.join(' / ') }}</p>
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
    </div>

    <div class="detail-card" v-if="!isSimpleView">
      <div v-if="activeView === 'evolution'" class="evolutions">
        <p v-if="pokemon.evolutions.length === 0" class="soon">Évolution maximale atteinte.</p>
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
      <p v-else-if="activeView === 'localisation'" class="soon">Bientôt.</p>
      <p v-else-if="activeView === 'moveset'" class="soon">Bientôt.</p>
    </div>
  </div>
</template>

<style scoped>
.info-wrapper {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.info-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.detail-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.content {
  font-size: 13px;
  color: var(--text);
}
.evolutions {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.evolution-item {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;
  padding: 20px;
  border-radius: 12px;
  background: var(--surface-2);
}
.evolution-item:hover {
  background: rgba(0, 0, 0, 0.06);
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
  gap: 6px;
  flex-shrink: 0;
  text-align: center;
}
.evolution-name {
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
}
.evolution-condition {
  font-size: 14px;
  color: var(--text-2);
}
.name {
  font-weight: 700;
  font-size: 15px;
  text-transform: capitalize;
  margin: 0 0 4px;
}
.hp {
  color: var(--text-2);
  margin: 0;
}
.stats {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.stats li {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}
.soon {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-2);
  font-style: italic;
  font-size: 16px;
  text-align: center;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
}
.buttons button {
  font: inherit;
  font-size: 10.5px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 7px;
  padding: 6px 4px;
  border: 1.5px solid var(--border);
  background: var(--surface-2);
  color: var(--text-2);
}
.buttons button:hover {
  border-color: var(--accent);
}
.buttons button.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
</style>
