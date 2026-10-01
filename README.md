<p align="center">
  <img src="public/Pokeball1.png" alt="Poké Ball" width="120" />
</p>

<h1 align="center">Pokédex Hisui</h1>

<p align="center">
  Le Pokédex de poche pour <b>Légendes Pokémon : Arceus</b><br />
  Les 242 Pokémon de Hisui, leur fiche complète, la carte, les Barons et le suivi de ta partie, sur tous tes appareils.
</p>

<p align="center">
  <img alt="Vue" src="https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white" />
  <img alt="Pinia" src="https://img.shields.io/badge/Pinia-store-FFD859?logo=pinia&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img alt="Supabase" src="https://img.shields.io/badge/Supabase-sync-3FCF8E?logo=supabase&logoColor=white" />
  <img alt="PWA" src="https://img.shields.io/badge/PWA-installable-5A0FC8?logo=pwa&logoColor=white" />
</p>

---

## ✨ Ce qu'on y trouve

### 📖 Un Pokédex en forme de livre
Une couverture rouge qui s'ouvre sur deux pages : l'index à gauche et à droite,
puis l'illustration et la fiche du Pokémon choisi. Sur téléphone, les pages
s'empilent.

### 🔎 Un index qu'on fouille facilement
- **Recherche** par nom (accents facultatifs) ou par numéro.
- **Type** : les 18 types, avec leur couleur.
- **Statut** : vus, capturés, recherche terminée ou à terminer, chromatiques,
  ceux qui ont évolué ; **Barons** rencontrés, battus, capturés, ou encore à
  attraper ; légendaires et fabuleux, Pokémon sans évolution.
- **Lieu** : une zone entière de Hisui, ou une sous-zone précise.
- **Objet** : à qui sert une pierre, un objet spécial ou un objet propre à Hisui
  (Obsidienne, Bloc de Tourbe…).
- **Tri** : par numéro, par ordre alphabétique, par niveau ou par total des
  stats de *tes* Pokémon.

### 🗂️ Une fiche en six onglets
| Onglet | Contenu |
|---|---|
| **Accueil** | N° de Hisui, catégorie, description, taille, poids, sexe, talents, appâts qui l'attirent et objets qu'il peut laisser |
| **Stats** | Stats de base, ou celles de ton Pokémon que tu recopies depuis le jeu |
| **Type** | Faiblesses, résistances, immunités et types contre lesquels il est fort |
| **Évolution** | La lignée complète et comment évoluer, selon les règles de Légendes Arceus |
| **Carte** | La carte du jeu, avec les zones où le trouver (zoom au clic) et l'emplacement des Barons |
| **Sorts** | Capacités apprises dans Légendes Arceus, avec puissance, précision et PP |

### ✅ Le suivi de ta partie
- **Vu / Capturé / Recherche terminée / Chromatique** pour chaque Pokémon.
- **Barons** : rencontré, battu et capturé, emplacement par emplacement.
- **Mon équipe** : 6 places, en précisant les Barons et les chromatiques.
- **Faire évoluer** un Pokémon capturé, en un clic.
- **Niveau et stats** de tes Pokémon.

### ☁️ Partout, même hors ligne
- **Synchronisation** entre téléphone, tablette et ordinateur, avec un compte
  e-mail + mot de passe. Le même compte sert pour le
  [Pokédex Kanto](https://github.com/Gagz71/pokedex-kanto).
- **Installable** sur l'écran d'accueil (PWA) et utilisable **hors ligne** : la
  carte est pré-téléchargée, et les fiches déjà consultées restent en cache.

---

## 🚀 Lancer le projet

Node `^22.18.0` ou `>=24.12.0`.

```sh
npm install
npm run dev
```

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Vérification TypeScript (`vue-tsc`), puis build dans `dist/` |
| `npm run preview` | Aperçu du build |
| `npm run lint` | oxlint puis ESLint |
| `npm run format` | Prettier sur `src/` |

## ☁️ Configurer la synchronisation

1. Mettre l'URL et la clé **publique** du projet Supabase dans `.env`.
2. Créer la table une fois : Supabase → **SQL Editor** → coller
   [`supabase/schema.sql`](supabase/schema.sql) → **Run**.
3. Ajouter l'URL du site déployé dans **Authentication → URL Configuration →
   Redirect URLs**.

> Les deux valeurs du `.env` sont publiques par conception : elles finissent
> dans le code envoyé au navigateur. Les données sont protégées par les règles
> RLS de la table (chaque compte ne lit et n'écrit que sa propre ligne). Ne
> jamais y mettre la clé `secret` ou `service_role`.

## 🧱 Organisation du code

```
src/
├── App.vue              # le livre : index, filtres, navigation, chargement des fiches
├── stores/
│   ├── progress.ts      # progression de la partie (localStorage)
│   └── sync.ts          # synchronisation Supabase
├── components/          # couverture, index, fiche, équipe, panneaux…
├── data/
│   ├── hisuiLocations.ts   # lieux et Barons de chaque Pokémon
│   ├── evolutionItems.ts   # objets d'évolution de Légendes Arceus
│   ├── foodPreferences.ts  # appâts et objets laissés
│   └── …
└── lib/supabase.ts
public/hisui-maps/       # carte de Hisui
```

---

## 🙏 Crédits

- [PokeAPI](https://pokeapi.co) : noms, types, statistiques, talents,
  capacités, évolutions, descriptions du Pokédex et illustrations officielles.
- [Poképédia](https://www.pokepedia.fr) : localisations et carte de Hisui
  (textes sous licence [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.fr)).
- [Bulbapedia](https://bulbapedia.bulbagarden.net) : localisations
  complémentaires et emplacements des Barons (textes sous licence
  [CC BY-NC-SA 2.5](https://creativecommons.org/licenses/by-nc-sa/2.5/deed.fr)).
- [Serebii](https://www.serebii.net/legendsarceus/) : tables d'apparition du
  jeu, qui servent à vérifier les localisations, et liste des Barons garantis.

**Projet de fan non officiel**, gratuit et sans but commercial. Pokémon ainsi
que les noms, images et marques associés sont la propriété de Nintendo,
Creatures Inc., GAME FREAK inc. et The Pokémon Company. Ce projet n'est ni
affilié à ces sociétés, ni approuvé par elles.

<p align="center">© 2026 MDS Digital</p>
