<script setup lang="ts">
import { TYPE_COLORS } from '../data/typeColors'
import { useProgressStore } from '../stores/progress'

const progress = useProgressStore()

// Marque d'état : la plus avancée l'emporte (recherche > capturé > vu).
function statusOf(apiName: string): { mark: string; cls: string; title: string } | null {
  const p = progress.get(apiName)
  if (p.researchDone) return { mark: '★', cls: 'research', title: 'Recherche terminée' }
  if (p.caught) return { mark: '●', cls: 'caught', title: 'Capturé' }
  if (p.seen) return { mark: '◉', cls: 'seen', title: 'Vu' }
  return null
}

defineProps<{
  entries: {
    entryNumber: number
    name: string
    apiName: string
    typeSlugs: string[]
    rarity: 'legendary' | 'mythical' | null
  }[]
  notes?: Record<string, string> // ex. « → Aquali » avec le filtre Objet
}>()

const emit = defineEmits<{
  select: [name: string]
}>()
</script>

<template>
  <ul class="entry-list">
    <li v-for="entry in entries" :key="entry.entryNumber" @click="emit('select', entry.apiName)">
      <span
        class="entry-status"
        :class="statusOf(entry.apiName)?.cls"
        :title="statusOf(entry.apiName)?.title"
        >{{ statusOf(entry.apiName)?.mark ?? '' }}</span
      >
      <span class="entry-number">#{{ entry.entryNumber }}</span>
      <span class="entry-name">
        {{ entry.name }}
        <span
          v-if="entry.rarity"
          class="entry-legend"
          :title="entry.rarity === 'mythical' ? 'Pokémon fabuleux' : 'Pokémon légendaire'"
          >★</span
        >
        <span
          v-if="progress.get(entry.apiName).shiny"
          class="entry-shiny"
          title="Chromatique capturé"
          >✦</span
        >
        <span v-if="progress.get(entry.apiName).evolved" class="entry-evolved" title="A évolué"
          >↗</span
        >
        <span v-if="notes?.[entry.apiName]" class="entry-note">{{ notes[entry.apiName] }}</span>
      </span>
      <span class="entry-types">
        <span
          v-for="slug in entry.typeSlugs"
          :key="slug"
          class="entry-type-dot"
          :style="{ background: TYPE_COLORS[slug] ?? '#ccc' }"
        ></span>
      </span>
    </li>
  </ul>
</template>

<style scoped>
.entry-list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}
.entry-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
}
.entry-list li:hover {
  background: rgba(0, 0, 0, 0.06);
}
.entry-note {
  display: block;
  font-size: 12.5px;
  font-weight: 600;
  color: #2f7a4f;
}
.entry-name {
  flex: 1;
}
.entry-status {
  width: 14px;
  flex-shrink: 0;
  text-align: center;
  font-size: 13px;
}
.entry-status.seen {
  color: #5b7aa8;
}
.entry-status.caught {
  color: #c62f2f;
}
.entry-status.research {
  color: #d99a1c;
}
.entry-shiny {
  color: #9a5cc8;
  font-size: 0.9em;
  margin-left: 2px;
}
.entry-evolved {
  color: #2f7a4f;
  font-size: 0.85em;
  margin-left: 2px;
}
.entry-legend {
  color: #e0a21b;
  font-size: 0.9em;
  margin-left: 2px;
}
.entry-types {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}
.entry-type-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
