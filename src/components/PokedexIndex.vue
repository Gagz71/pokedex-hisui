<script setup lang="ts">
import { TYPE_COLORS } from '../data/typeColors'

defineProps<{
  entries: { entryNumber: number; name: string; apiName: string; typeSlugs: string[] }[]
}>()

const emit = defineEmits<{
  select: [name: string]
}>()
</script>

<template>
  <ul class="entry-list">
    <li v-for="entry in entries" :key="entry.entryNumber" @click="emit('select', entry.apiName)">
      <span class="entry-number">#{{ entry.entryNumber }}</span>
      <span class="entry-name">{{ entry.name }}</span>
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
.entry-name {
  flex: 1;
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
