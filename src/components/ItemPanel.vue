<script setup lang="ts">
import { computed } from 'vue'
import { EVOLUTION_ITEMS } from '../data/evolutionItems'

const props = defineProps<{
  slug: string
}>()

const emit = defineEmits<{
  close: []
}>()

const item = computed(() => EVOLUTION_ITEMS[props.slug])
</script>

<template>
  <section v-if="item" class="item-panel">
    <div class="item-visual">
      <img v-if="item.sprite" :src="item.sprite" alt="" />
      <span v-else class="item-icon">{{ item.icon }}</span>
    </div>
    <div class="item-text">
      <p class="item-title">
        {{ item.name }} <span class="item-category">{{ item.category }}</span>
      </p>
      <p class="item-description">{{ item.description }}</p>
      <p class="item-count">
        Fait évoluer {{ item.uses.length }} Pokémon — touche-en un pour ouvrir sa fiche.
      </p>
    </div>
    <button class="item-close" aria-label="Retirer le filtre objet" @click="emit('close')">
      ✕
    </button>
  </section>
</template>

<style scoped>
.item-panel {
  flex-shrink: 0;
  position: relative;
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
  padding: 12px 40px 12px 12px;
  border-radius: 10px;
  border: 1.5px solid #8fc0a2;
  background: #eef8f1;
}
.item-visual {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
}
.item-visual img {
  width: 36px;
  height: 36px;
  image-rendering: pixelated;
}
.item-icon {
  font-size: 24px;
}
.item-text {
  min-width: 0;
}
.item-text p {
  margin: 0;
}
.item-title {
  font-size: 15px;
  font-weight: 800;
  color: #1a1a1a;
}
.item-category {
  margin-left: 4px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #2f7a4f;
}
.item-description {
  margin-top: 4px !important;
  font-size: 13px;
  line-height: 1.45;
  color: #3a4a3a;
}
.item-count {
  margin-top: 6px !important;
  font-size: 12px;
  font-weight: 700;
  color: #2f7a4f;
}
.item-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #3a4a3a;
  font-size: 13px;
  cursor: pointer;
}
.item-close:hover {
  background: rgba(0, 0, 0, 0.08);
}
</style>
