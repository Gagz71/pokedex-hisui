<script setup lang="ts">
defineProps<{
  entries: { entryNumber: number; name: string; apiName: string }[]
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
  gap: 0.5rem;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
}
.entry-list li:hover {
  background: rgba(0, 0, 0, 0.06);
}
</style>
