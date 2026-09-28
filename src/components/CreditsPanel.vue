<script setup lang="ts">
defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <!-- Hors du livre : sa perspective 3D empêcherait position: fixed de
       couvrir tout l'écran -->
  <Teleport to="body">
    <div v-if="open" class="credits-backdrop" @click.self="emit('close')">
      <section class="credits" role="dialog" aria-modal="true" aria-labelledby="credits-title">
        <header class="credits-head">
          <h2 id="credits-title">Crédits</h2>
          <button class="credits-close" aria-label="Fermer" @click="emit('close')">✕</button>
        </header>

        <p class="credits-disclaimer">
          <b>Projet de fan non officiel</b>, gratuit et sans but commercial. Pokémon ainsi que les
          noms, images et marques associés sont la propriété de Nintendo, Creatures Inc., GAME FREAK
          inc. et The Pokémon Company. Ce site n'est ni affilié à ces sociétés, ni approuvé par
          elles.
        </p>

        <h3>Sources</h3>
        <ul>
          <li>
            <a href="https://pokeapi.co" target="_blank" rel="noopener">PokeAPI</a>
            — noms, types, statistiques, talents, capacités, évolutions, descriptions du Pokédex et
            illustrations officielles.
          </li>
          <li>
            <a href="https://www.pokepedia.fr" target="_blank" rel="noopener">Poképédia</a>
            — localisations dans Légendes Pokémon : Arceus et carte de Hisui. Textes sous licence
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.fr"
              target="_blank"
              rel="noopener"
              >CC BY-NC-SA 3.0</a
            >.
          </li>
          <li>
            <a href="https://bulbapedia.bulbagarden.net" target="_blank" rel="noopener"
              >Bulbapedia</a
            >
            — localisations complémentaires et emplacements des Pokémon Barons. Textes sous licence
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/2.5/deed.fr"
              target="_blank"
              rel="noopener"
              >CC BY-NC-SA 2.5</a
            >.
          </li>
        </ul>

        <h3>Conception et développement</h3>
        <p>© 2026 MDS Digital</p>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.credits-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
}
.credits {
  width: min(560px, 100%);
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  padding: 22px 24px;
  border-radius: 14px;
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 1.55;
}
.credits-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.credits h2 {
  margin: 0;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 22px;
}
.credits h3 {
  margin: 18px 0 6px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-2);
}
.credits p {
  margin: 0;
}
.credits ul {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.credits a {
  color: var(--accent);
  font-weight: 600;
}
.credits-disclaimer {
  padding: 12px 14px;
  border-radius: 10px;
  background: var(--surface-2);
}
.credits-close {
  font: inherit;
  font-size: 16px;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: var(--surface-2);
  color: var(--text);
  cursor: pointer;
}
</style>
