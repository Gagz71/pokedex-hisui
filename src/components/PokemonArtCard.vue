<script setup lang="ts">
import { computed } from 'vue'
import { TYPE_COLORS } from '../data/typeColors'

const props = defineProps<{
  sprite: string
  name: string
  typeSlugs: string[]
}>()

function shade(hex: string, percent: number): string {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  const target = percent < 0 ? 0 : 255
  const p = Math.abs(percent)
  const mix = (c: number) => Math.round((target - c) * p) + c
  const toHex = (c: number) => c.toString(16).padStart(2, '0')
  return `#${toHex(mix(r))}${toHex(mix(g))}${toHex(mix(b))}`
}

const primaryColor = computed(() => {
  const slug = props.typeSlugs[0]
  return (slug && TYPE_COLORS[slug]) || '#A8A77A'
})
const lightColor = computed(() => shade(primaryColor.value, 0.55))
const darkColor = computed(() => shade(primaryColor.value, -0.55))
</script>

<template>
  <div
    class="art-card"
    :style="{ background: `linear-gradient(160deg, ${lightColor} 0%, ${primaryColor} 55%, ${darkColor} 100%)` }"
  >
    <div class="gloss"></div>
    <div class="panel">
      <div v-if="$slots.nav" class="nav-slot"><slot name="nav" /></div>
      <div
        class="art-stage"
        :style="{ background: `radial-gradient(circle at 50% 32%, ${lightColor}, ${primaryColor} 78%)` }"
      >
        <img :src="sprite" :alt="name" />
      </div>
      <p class="name">{{ name }}</p>
    </div>
  </div>
</template>

<style scoped>
.art-card {
  flex: 1;
  min-height: 0;
  position: relative;
  border-radius: 26px;
  box-shadow: 0 24px 50px -16px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.gloss {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0) 35%);
  pointer-events: none;
}

.panel {
  position: absolute;
  inset: 10px;
  border-radius: 20px;
  background: #f4faef;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.nav-slot {
  flex-shrink: 0;
  padding: 14px 16px 0;
}

.art-stage {
  flex: 1;
  min-height: 0;
  margin: 16px;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
}

.art-stage img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 14px;
  box-sizing: border-box;
}

.name {
  flex-shrink: 0;
  text-align: center;
  padding: 0 16px 20px;
  font-size: 27px;
  font-weight: 800;
  color: #1a3d1a;
  text-transform: capitalize;
  margin: 0;
}
</style>
