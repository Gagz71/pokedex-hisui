<script setup lang="ts">
import { computed } from 'vue'
import { useProgressStore, TEAM_SIZE } from '../stores/progress'

const emit = defineEmits<{
  select: [name: string]
}>()

const progress = useProgressStore()
const members = computed(() => progress.data.team.members)
const emptySlots = computed(() => Math.max(0, TEAM_SIZE - members.value.length))
</script>

<template>
  <section class="team">
    <h2 class="team-title">
      Mon équipe <span>{{ members.length }}/{{ TEAM_SIZE }}</span>
    </h2>
    <p v-if="!members.length" class="team-empty">
      Ouvre la fiche d'un Pokémon et touche « ＋ Équipe » ou « ＋ Équipe en Baron ».
    </p>
    <ul v-else class="team-slots">
      <li v-for="m in members" :key="m.id" class="slot" :class="{ alpha: m.alpha }">
        <span v-if="m.alpha" class="slot-ribbon">Baron</span>
        <button
          class="slot-open"
          :title="`Ouvrir la fiche de ${m.name}`"
          @click="emit('select', m.apiName)"
        >
          <img :src="m.sprite" :alt="m.name" />
          <span class="slot-name">{{ m.name }}</span>
        </button>
        <div class="slot-flags">
          <button
            class="flag alpha"
            :class="{ on: m.alpha }"
            :aria-pressed="m.alpha"
            title="C'est un Baron"
            @click="progress.toggleMemberFlag(m.id, 'alpha')"
          >
            B
          </button>
          <button
            class="flag shiny"
            :class="{ on: m.shiny }"
            :aria-pressed="m.shiny"
            title="C'est un chromatique"
            @click="progress.toggleMemberFlag(m.id, 'shiny')"
          >
            ✦
          </button>
        </div>
        <button
          class="slot-remove"
          :title="`Retirer ${m.name} de l'équipe`"
          @click="progress.removeFromTeam(m.id)"
        >
          ✕
        </button>
      </li>
      <li v-for="n in emptySlots" :key="'empty-' + n" class="slot empty" aria-hidden="true"></li>
    </ul>
  </section>
</template>

<style scoped>
.team {
  flex-shrink: 0;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 10px;
  background: var(--surface-2);
}
.team-title {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-2);
}
.team-title span {
  font-weight: 600;
  margin-left: 4px;
}
.team-empty {
  margin: 0;
  font-size: 12.5px;
  color: var(--text-2);
}
.team-slots {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 6px;
}
.slot {
  position: relative;
  min-height: 84px;
  border-radius: 10px;
  background: var(--surface);
  border: 1.5px solid var(--border);
  display: flex;
  flex-direction: column;
}
.slot.alpha {
  border-color: #c62f2f;
  background: #fff6f6;
}
.slot-ribbon {
  position: absolute;
  top: 4px;
  left: 4px;
  padding: 1px 6px;
  border-radius: 999px;
  background: #c62f2f;
  color: #fff;
  font-size: 9.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  pointer-events: none;
}
.slot.empty {
  border-style: dashed;
  background: transparent;
}
.slot-open {
  font: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 4px 2px;
  border: none;
  background: none;
  cursor: pointer;
  min-width: 0;
}
.slot-open img {
  width: 100%;
  max-width: 56px;
  aspect-ratio: 1;
  object-fit: contain;
}
.slot-name {
  max-width: 100%;
  font-size: 11px;
  font-weight: 700;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slot-flags {
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 0 4px 6px;
}
.flag {
  font: inherit;
  width: 22px;
  height: 20px;
  padding: 0;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-2);
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
}
.flag.alpha.on {
  background: #c62f2f;
  border-color: #c62f2f;
  color: #fff;
}
.flag.shiny.on {
  background: #9a5cc8;
  border-color: #9a5cc8;
  color: #fff;
}
.slot-remove {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--text-2);
  font-size: 11px;
  cursor: pointer;
}
.slot-remove:hover {
  background: rgba(0, 0, 0, 0.08);
  color: var(--text);
}

/* Téléphone : 3 colonnes de 2 lignes */
@media (max-width: 480px) {
  .team-slots {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
