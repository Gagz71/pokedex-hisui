<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <div class="cover" :class="{ open: isOpen }" @click="emit('toggle')">
    <div class="indicator-dots">
      <span class="dot a"></span>
      <span class="dot b"></span>
    </div>
    <img class="pokeball" src="/Pokeball1.png" alt="Pokeball" />
    <div class="title">Pokédex Hisui</div>
    <div class="groove"></div>
    <p class="hint">Cliquer pour ouvrir</p>
  </div>
</template>

<style scoped>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--page-w);
  height: var(--page-h);
  transform-origin: left center;
  transform: rotateY(0deg);
  transition: transform 0.7s cubic-bezier(0.4, 0.1, 0.2, 1);
  backface-visibility: hidden;
  cursor: pointer;
  border-radius: 6px 14px 14px 6px;
  background: linear-gradient(155deg, #e0393e 0%, var(--cover) 45%, var(--cover-shade) 100%);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 20px 20px;
  overflow: hidden;
}
.cover.open {
  transform: rotateY(-150deg);
  pointer-events: none;
}

.cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 32%);
  pointer-events: none;
}

.indicator-dots {
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  gap: 6px;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.dot.a {
  background: #fca5a5;
  box-shadow: 0 0 5px rgba(252, 165, 165, 0.9);
}
.dot.b {
  background: #86efac;
  box-shadow: 0 0 5px rgba(134, 239, 172, 0.9);
}

.pokeball {
  width: 56px;
  height: 56px;
  margin-top: 8px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.15),
    0 0 0 6px rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.15);
}

.title {
  margin-top: 14px;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fff;
  text-align: center;
}

.groove {
  margin-top: auto;
  width: 65%;
  height: 3px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.28);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
}

.hint {
  margin: 10px 0 0;
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.75);
}
</style>
