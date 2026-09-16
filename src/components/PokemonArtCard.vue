<script setup lang="ts">
defineProps<{
  sprite: string
  name: string
}>()
</script>

<template>
  <div class="art-card">
    <img :src="sprite" :alt="name" />
    <p class="name">{{ name }}</p>
  </div>
</template>

<style scoped>
.art-card {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.art-card img {
  width: 100%;
  max-width: 340px;
  max-height: 100%;
  object-fit: contain;
}
.name {
  font-weight: 700;
  font-size: 20px;
  text-transform: capitalize;
  margin: 0;
}
</style>
