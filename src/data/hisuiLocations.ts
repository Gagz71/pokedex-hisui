// Localisations à Hisui, par grande région (5 zones + Rusti-Cité).
// PokeAPI ne fournit aucune donnée d'encounter pour Legends: Arceus, donc ce
// dataset vient de sources externes :
//  - Poképédia (section « Localisations » de chaque pokémon, et de sa page
//    « … de Hisui » pour les formes régionales) : zones, sous-zones, Barons,
//    distorsions spatio-temporelles, rencontres uniques ;
//  - Bulbapedia pour les espèces à formes multiples que Poképédia n'affiche
//    pas (Cheniti, Sancoki, Bargantua, Giratina, Shaymin, génies...), pour
//    les zones que Poképédia oublie (ajoutées en « Rencontre sauvage »,
//    « Distorsions » ou « Invasions massives ») et pour les Barons à
//    emplacement fixe (champ alphas, avec le nom français du lieu repris des
//    pages de lieux de Bulbapedia ; Poképédia n'en recense qu'une partie) ;
//  - quelques descriptions rédigées à la main, gardées quand elles sont plus
//    précises (ex. Voltorbe « dans des caisses »).
// Les pokémon qu'on n'obtient que par évolution reprennent les zones de leur
// pré-évolution. Les lieux ponctuels sont rangés dans leur zone : Temple de
// Sinnoh / Arène de la Lune -> Contrefort Couronné, Temple de Frimapic et
// Lac Savoir -> Terres Immaculées, Lac Vérité -> Plaines Obsidiennes,
// Lac Courage -> Marais Carmin.
// Clé = apiName (slug PokeAPI).
export interface LocationEntry {
  region: string
  details: string
  // Emplacements des Barons fixes dans cette zone (niveau quand il est connu).
  // Les Barons des invasions massives ne sont pas listés.
  alphas?: string[]
}

export const HISUI_LOCATIONS: Record<string, LocationEntry[]> = {
  abomasnow: [
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ['Étendue Polaire'] },
  ],
  abra: [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella · Rive Filevent' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  aipom: [
    { region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  alakazam: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron',
      alphas: ['Plaine Littorella (niv. 60)'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage · Invasions massives' },
  ],
  ambipom: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Crique Paisible'] },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  arcanine: [{ region: 'Côte Lazuli', details: 'En faisant évoluer Caninos de Hisui' }],
  arceus: [
    { region: 'Contrefort Couronné', details: 'Temple de Sinnoh, rencontre unique (niv. 75)' },
  ],
  avalugg: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  azelf: [{ region: 'Marais Carmin', details: 'Lac Courage, rencontre unique (niv. 70)' }],
  barboach: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  basculegion: [
    { region: 'Côte Lazuli', details: 'En faisant évoluer Bargantua' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Bargantua' },
    { region: 'Terres Immaculées', details: 'En faisant évoluer Bargantua' },
  ],
  basculin: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage, invasions massives (Motif Blanc)' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage (Motif Blanc)' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage, près du Lac Savoir (Motif Blanc)' },
  ],
  bastiodon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles (rare)' }],
  beautifly: [
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité · Champ Flora · Forêt Lointaine' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  bergmite: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  bibarel: [
    {
      region: 'Plaines Obsidiennes',
      details: "Digue de l'Estuaire",
      alphas: ["Digue de l'Estuaire (niv. 16)"],
    },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  bidoof: [
    {
      region: 'Plaines Obsidiennes',
      details: "Colline Ambition · Digue de l'Estuaire · Val Ferrache",
    },
    { region: 'Marais Carmin', details: 'Zones ouvertes' },
    { region: 'Terres Immaculées', details: 'Zones ouvertes, invasions massives' },
  ],
  blissey: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron',
      alphas: ["Chute d'Obsidienne (niv. 62)"],
    },
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  bonsly: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  braviary: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  bronzong: [
    { region: 'Marais Carmin', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Falaise Calade'] },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage · Temple de Frimapic' },
  ],
  bronzor: [
    { region: 'Marais Carmin', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage · Temple de Frimapic' },
  ],
  budew: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  buizel: [
    { region: 'Plaines Obsidiennes', details: 'Pont Rocheux · Rive Filevent · Val Ferrache' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  buneary: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  burmy: [
    { region: 'Plaines Obsidiennes', details: 'Arbres qui tremblent (Cape Plante)' },
    { region: 'Marais Carmin', details: 'Arbres qui tremblent (Cape Sable)' },
    { region: 'Côte Lazuli', details: 'Arbres qui tremblent (Cape Déchet)' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  carnivine: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Lande Herbacoton'] },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Source Reculée'] },
  ],
  cascoon: [{ region: 'Plaines Obsidiennes', details: 'Champ Flora · Forêt Lointaine' }],
  chansey: [
    { region: 'Plaines Obsidiennes', details: "Chute d'Obsidienne" },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ["Presqu'île Tombolo"] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  chatot: [
    { region: 'Plaines Obsidiennes', details: 'Invasions massives' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  cherrim: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  cherubi: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  chimchar: [{ region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa · Plateau Cer-Mont' }],
  chimecho: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ['Lac Savoir'] },
  ],
  chingling: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  clefable: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Source Féérique'] },
  ],
  clefairy: [
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  cleffa: [
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  combee: [
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité · Forêt Lointaine · Île Rosa Rugosa' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  cranidos: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles (rare)' }],
  cresselia: [
    { region: 'Contrefort Couronné', details: 'Arène de la Lune, rencontre unique (niv. 70)' },
  ],
  croagunk: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  crobat: [
    { region: 'Plaines Obsidiennes', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Grotte des Égarés'] },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  cyndaquil: [
    { region: 'Rusti-Cité', details: 'Pokémon de départ, offert au Siège du Groupe Galaxie' },
    {
      region: 'Marais Carmin',
      details: 'Distorsions spatio-temporelles (rare), après le générique de fin',
    },
  ],
  darkrai: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  dartrix: [
    {
      region: 'Contrefort Couronné',
      details: 'Distorsions spatio-temporelles (rare), après le générique de fin',
    },
  ],
  decidueye: [
    {
      region: 'Contrefort Couronné',
      details: 'Distorsions spatio-temporelles (rare), après le générique de fin',
    },
  ],
  dewott: [
    {
      region: 'Terres Immaculées',
      details: 'Distorsions spatio-temporelles (rare), après le générique de fin',
    },
  ],
  dialga: [
    { region: 'Contrefort Couronné', details: 'Temple de Sinnoh, rencontre unique (niv. 65)' },
  ],
  drapion: [
    { region: 'Marais Carmin', details: 'Invasions massives' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Plage Ginkgo'] },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  drifblim: [
    { region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa · Plaine Littorella' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  drifloon: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Champ Flora · Colline Ambition · Île Rosa Rugosa · Val Ferrache',
    },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  dusclops: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  dusknoir: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Rive des Revenants'] },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Invasions massives' },
  ],
  duskull: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  dustox: [
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité · Champ Flora · Forêt Lointaine' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  eevee: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles · Val Ferrache' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage · Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  electabuzz: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage · Distorsions spatio-temporelles' },
  ],
  electivire: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Passage des Nuages'] },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  electrode: [{ region: 'Contrefort Couronné', details: 'En faisant évoluer Voltorbe de Hisui' }],
  elekid: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  empoleon: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Plage Long-des-Îles'] },
  ],
  enamorus: [{ region: 'Marais Carmin', details: 'Rencontre unique (Forme Avatar)' }],
  espeon: [{ region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' }],
  finneon: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  flareon: [
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
  ],
  floatzel: [
    { region: 'Plaines Obsidiennes', details: 'Pont Rocheux', alphas: ['Pont Rocheux (niv. 31)'] },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  froslass: [
    {
      region: 'Terres Immaculées',
      details: 'Rencontre sauvage · Temple de Frimapic',
      alphas: ['Chambre des Piliers'],
    },
  ],
  gabite: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Falaise Calade'] },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  gallade: [
    {
      region: 'Terres Immaculées',
      details: 'Rencontre sauvage',
      alphas: ['Temple de Frimapic (niv. 70)'],
    },
  ],
  garchomp: [
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ["Pente de l'Avalanche"] },
  ],
  gardevoir: [
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ['Rocher Esprit'] },
  ],
  gastly: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  gastrodon: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Rencontre sauvage, invasions massives (Mer Occident)',
    },
    {
      region: 'Côte Lazuli',
      details: 'Rencontre sauvage, invasions massives (Mer Orient)',
      alphas: ['Havre des Algues'],
    },
  ],
  gengar: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Invasions massives' },
  ],
  geodude: [
    { region: 'Plaines Obsidiennes', details: 'Plateau Cer-Mont · Pont Rocheux · Tunnel de Fer' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  gible: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  giratina: [
    { region: 'Côte Lazuli', details: 'Rencontre unique dans la Grotte Retour (Forme Originelle)' },
  ],
  glaceon: [{ region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' }],
  glalie: [
    {
      region: 'Terres Immaculées',
      details: 'Rencontre sauvage · Temple de Frimapic',
      alphas: ['Étendue Polaire'],
    },
  ],
  glameow: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  gligar: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Temple Céleste'] },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  gliscor: [
    {
      region: 'Contrefort Couronné',
      details: 'Rencontre sauvage',
      alphas: ['Grotte Préhistorique'],
    },
  ],
  golbat: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Tunnel de Fer',
      alphas: ['Tunnel de Fer (niv. 35)'],
    },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic' },
  ],
  golduck: [
    { region: 'Plaines Obsidiennes', details: 'Rencontre sauvage' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Lagune des Bains'] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  golem: [
    { region: 'Plaines Obsidiennes', details: 'Invasions massives' },
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Mont des Gringoles'] },
  ],
  goodra: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron',
      alphas: ['Lac Vérité (niv. 58)'],
    },
    { region: 'Marais Carmin', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Ancienne Carrière'] },
  ],
  goomy: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  graveler: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plaine Littorella · Tunnel de Fer',
      alphas: ['Bocage Agité (niv. 30)', "Chute d'Obsidienne"],
    },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic' },
  ],
  grotle: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
  growlithe: [
    { region: 'Côte Lazuli', details: 'Zones ouvertes, invasions massives (forme de Hisui)' },
  ],
  gyarados: [
    {
      region: 'Plaines Obsidiennes',
      details: "Lac Vérité · Chute d'Obsidienne",
      alphas: ['Lac Vérité (niv. 60)'],
    },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Main de Sable'] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  happiny: [
    { region: 'Plaines Obsidiennes', details: "Chute d'Obsidienne · Tunnel de Fer" },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  haunter: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  heatran: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  heracross: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron',
      alphas: ['Bocage Agité (niv. 45)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  hippopotas: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  hippowdon: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Marais Bouchebée'] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  honchkrow: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Col Mer-de-Nuages'] },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  infernape: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron',
      alphas: ['Île Rosa Rugosa (niv. 65)'],
    },
  ],
  jolteon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  kadabra: [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  kirlia: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage · Temple de Frimapic' },
  ],
  kleavor: [
    { region: 'Plaines Obsidiennes', details: 'En faisant évoluer Insécateur' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Insécateur' },
    { region: 'Terres Immaculées', details: 'En faisant évoluer Insécateur' },
  ],
  kricketot: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Cellier Champêtre · Rive Filevent · Sentier Cer-Mont',
    },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
  ],
  kricketune: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Cellier Champêtre',
      alphas: ["Digue de l'Estuaire (niv. 30)", 'Plateau Cer-Mont'],
    },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
  ],
  landorus: [{ region: 'Plaines Obsidiennes', details: 'Rencontre unique (Forme Avatar)' }],
  leafeon: [{ region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' }],
  lickilicky: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Ruines Brumeuses'] },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  lickitung: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  lilligant: [{ region: 'Marais Carmin', details: 'En faisant évoluer Chlorobule' }],
  lopunny: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron',
      alphas: ['Forêt Lointaine (niv. 40)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  lucario: [
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ["Chute d'Oglacé"] },
  ],
  lumineon: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Havre des Algues'] }],
  luxio: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Champ Flora · Plaine Littorella · Tunnel de Fer',
      alphas: ['Champ Flora (niv. 40)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  luxray: [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Parvis des Prières'] },
  ],
  machamp: [
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ["Sentier de l'Arène"] },
  ],
  machoke: [
    { region: 'Plaines Obsidiennes', details: "Chute d'Obsidienne" },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Plage Ginkgo'] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  machop: [
    { region: 'Plaines Obsidiennes', details: "Chute d'Obsidienne · Tunnel de Fer" },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  magby: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  magikarp: [
    {
      region: 'Plaines Obsidiennes',
      details: "Lac Vérité · Chute d'Obsidienne",
      alphas: ['Tunnel de Fer'],
    },
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  magmar: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  magmortar: [
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  magnemite: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles (rare)' }],
  magneton: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles (rare)' }],
  magnezone: [
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles (rare)' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  mamoswine: [
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ['Glacier Séracrawl'] },
  ],
  manaphy: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  mantine: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Baie Sérénité'] }],
  mantyke: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  mesprit: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Lac Vérité, rencontre unique (niv. 70) · Lac Vérité (rencontre unique (niv. 70))',
    },
  ],
  'mime-jr': [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella · Val Ferrache' },
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
  ],
  misdreavus: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  mismagius: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Col Pierlevé'] },
    { region: 'Terres Immaculées', details: 'Invasions massives' },
  ],
  monferno: [{ region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa' }],
  mothim: [
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Chemin de la Source'] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Forêt des Égarés'] },
  ],
  'mr-mime': [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
  ],
  munchlax: [
    { region: 'Plaines Obsidiennes', details: 'Plateau Cer-Mont' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  murkrow: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  ninetales: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Île Crache-Feu'] },
    { region: 'Terres Immaculées', details: 'Invasions massives' },
  ],
  nosepass: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  octillery: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ["Plage de l'Errance"] },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  onix: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Hameau Diamant'] },
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  oshawott: [
    { region: 'Rusti-Cité', details: 'Pokémon de départ, offert au Siège du Groupe Galaxie' },
    {
      region: 'Terres Immaculées',
      details: 'Distorsions spatio-temporelles (rare), après le générique de fin',
    },
  ],
  overqwil: [
    { region: 'Plaines Obsidiennes', details: 'En faisant évoluer Qwilfish de Hisui' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Lac Courage'] },
    { region: 'Côte Lazuli', details: 'En faisant évoluer Qwilfish de Hisui' },
  ],
  pachirisu: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Marais Bouchebée'] },
    { region: 'Terres Immaculées', details: 'Invasions massives' },
  ],
  palkia: [
    { region: 'Contrefort Couronné', details: 'Temple de Sinnoh, rencontre unique (niv. 65)' },
  ],
  paras: [
    { region: 'Plaines Obsidiennes', details: 'Cellier Champêtre' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  parasect: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron',
      alphas: ['Cellier Champêtre (niv. 30)'],
    },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  petilil: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
  phione: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  pichu: [
    { region: 'Plaines Obsidiennes', details: 'Cellier Champêtre · Champ Flora' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
  ],
  pikachu: [
    { region: 'Plaines Obsidiennes', details: 'Cellier Champêtre' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  piloswine: [
    { region: 'Marais Carmin', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ["Sentier de l'Arène"] },
  ],
  piplup: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  ponyta: [
    { region: 'Plaines Obsidiennes', details: 'Val Ferrache' },
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
  ],
  porygon: [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles (rare)' }],
  'porygon-z': [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles (rare)' }],
  porygon2: [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles (rare)' }],
  prinplup: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  probopass: [
    {
      region: 'Contrefort Couronné',
      details: 'Rencontre sauvage',
      alphas: ['Grotte Préhistorique'],
    },
  ],
  psyduck: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  purugly: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Cap du Voile'] },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  quilava: [
    {
      region: 'Marais Carmin',
      details: 'Distorsions spatio-temporelles (rare), après le générique de fin',
    },
  ],
  qwilfish: [
    { region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Plage Long-des-Îles'] },
  ],
  raichu: [
    { region: 'Plaines Obsidiennes', details: 'Invasions massives' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ["Plaine d'Or"] },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  ralts: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage · Temple de Frimapic' },
  ],
  rampardos: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles (rare)' }],
  rapidash: [
    { region: 'Plaines Obsidiennes', details: 'Val Ferrache', alphas: ['Val Ferrache (niv. 40)'] },
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  regigigas: [
    { region: 'Terres Immaculées', details: 'Temple de Frimapic, rencontre unique (niv. 70)' },
  ],
  remoraid: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  rhydon: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  rhyhorn: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Lisière du Hameau'] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  rhyperior: [
    { region: 'Marais Carmin', details: 'Invasions massives' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Parvis des Prières'] },
  ],
  riolu: [
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  roselia: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  roserade: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Col Mer-de-Nuages'] },
  ],
  rotom: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  rowlet: [
    { region: 'Rusti-Cité', details: 'Pokémon de départ, offert au Siège du Groupe Galaxie' },
    {
      region: 'Contrefort Couronné',
      details: 'Distorsions spatio-temporelles (rare), après le générique de fin',
    },
  ],
  rufflet: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  samurott: [
    {
      region: 'Terres Immaculées',
      details: 'Distorsions spatio-temporelles (rare), après le générique de fin',
    },
  ],
  scizor: [{ region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles (rare)' }],
  scyther: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Arène du Grand Arbre',
      alphas: ['Arène du Grand Arbre (niv. 42)'],
    },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  sealeo: [
    { region: 'Plaines Obsidiennes', details: 'Invasions massives' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  shaymin: [
    {
      region: 'Plaines Obsidiennes',
      details: "Rencontre unique, nécessite une sauvegarde d'Épée ou Bouclier",
    },
  ],
  shellos: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Rencontre sauvage, invasions massives (Mer Occident)',
    },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage, invasions massives (Mer Orient)' },
  ],
  shieldon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles (rare)' }],
  shinx: [
    { region: 'Plaines Obsidiennes', details: 'Champ Flora · Colline Ambition · Tunnel de Fer' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  silcoon: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Champ Flora · Forêt Lointaine',
      alphas: ['Val Ferrache'],
    },
  ],
  skorupi: [
    { region: 'Marais Carmin', details: 'Invasions massives' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  skuntank: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Marais Carlate'] },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  sliggoo: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ["Île de l'Épreuve"] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  sneasel: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles (forme classique)' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage (forme de Hisui)' },
    {
      region: 'Terres Immaculées',
      details: 'Rencontre sauvage (forme de Hisui)',
      alphas: ['Glacier Séracrawl'],
    },
  ],
  sneasler: [
    { region: 'Plaines Obsidiennes', details: 'En faisant évoluer Farfuret de Hisui' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Farfuret de Hisui' },
    { region: 'Terres Immaculées', details: 'En faisant évoluer Farfuret de Hisui' },
  ],
  snorlax: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron',
      alphas: ['Plaine Littorella (niv. 45)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  snorunt: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  snover: [
    { region: 'Contrefort Couronné', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  spheal: [
    { region: 'Plaines Obsidiennes', details: 'Invasions massives' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  spiritomb: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Ruines Brumeuses'] },
  ],
  stantler: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plateau Cer-Mont',
      alphas: ['Plateau Cer-Mont (niv. 42)'],
    },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  staraptor: [
    { region: 'Plaines Obsidiennes', details: 'Cellier Champêtre' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  staravia: [
    {
      region: 'Plaines Obsidiennes',
      details: "Cellier Champêtre · Digue de l'Estuaire · Île Rosa Rugosa · Plaine Littorella",
      alphas: ['Rive Filevent (niv. 32)'],
    },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  starly: [
    {
      region: 'Plaines Obsidiennes',
      details: "Colline Ambition · Digue de l'Estuaire · Rive Filevent · Val Ferrache",
    },
    { region: 'Côte Lazuli', details: 'Zones ouvertes en journée, invasions massives' },
  ],
  steelix: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Invasions massives' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage', alphas: ['Sentier Céleste'] },
  ],
  stunky: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  sudowoodo: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  swinub: [
    { region: 'Marais Carmin', details: 'Invasions massives' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ['Étendue Polaire'] },
  ],
  sylveon: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  tangela: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  tangrowth: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Marais Bouchebée'] },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  teddiursa: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  tentacool: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  tentacruel: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Arche Poissigrand'] },
  ],
  thundurus: [
    { region: 'Côte Lazuli', details: "Rencontre unique, par temps d'orage (Forme Avatar)" },
  ],
  togekiss: [
    { region: 'Plaines Obsidiennes', details: 'Lac Vérité' },
    { region: 'Côte Lazuli', details: 'Invasions massives' },
  ],
  togepi: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  togetic: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  tornadus: [
    {
      region: 'Terres Immaculées',
      details: 'Rencontre unique, par temps de blizzard (Forme Avatar)',
    },
  ],
  torterra: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ["Île de l'Épreuve"] },
  ],
  toxicroak: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ["Île de l'Épreuve"] },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  turtwig: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
  typhlosion: [
    {
      region: 'Marais Carmin',
      details: 'Distorsions spatio-temporelles (rare), après le générique de fin',
    },
  ],
  umbreon: [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' }],
  unown: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
  ursaluna: [
    { region: 'Plaines Obsidiennes', details: 'En faisant évoluer Ursaring' },
    { region: 'Marais Carmin', details: 'En faisant évoluer Ursaring' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Ursaring' },
  ],
  ursaring: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details: 'Rencontre sauvage',
      alphas: ['Marais Bouchebée', 'Arène Ursa'],
    },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  uxie: [{ region: 'Terres Immaculées', details: 'Lac Savoir, rencontre unique (niv. 70)' }],
  vaporeon: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' }],
  vespiquen: [
    { region: 'Plaines Obsidiennes', details: 'Rencontre sauvage', alphas: ['Bocage Agité'] },
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Lande Herbacoton'] },
  ],
  voltorb: [
    {
      region: 'Contrefort Couronné',
      details: 'Dans des caisses, invasions massives (forme de Hisui)',
    },
  ],
  vulpix: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Invasions massives' },
  ],
  walrein: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage', alphas: ['Plage Ginkgo'] },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  weavile: [{ region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' }],
  whiscash: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Lac Courage'] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  wormadam: [
    { region: 'Plaines Obsidiennes', details: 'Arbres qui tremblent (Cape Plante)' },
    { region: 'Marais Carmin', details: 'Arbres qui tremblent (Cape Sable)' },
    { region: 'Côte Lazuli', details: 'Arbres qui tremblent (Cape Déchet)' },
    { region: 'Contrefort Couronné', details: 'Arbres qui tremblent' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  wurmple: [
    { region: 'Plaines Obsidiennes', details: 'Champ Flora · Forêt Lointaine · Val Ferrache' },
  ],
  wyrdeer: [
    { region: 'Plaines Obsidiennes', details: 'En faisant évoluer Cerfrousse' },
    { region: 'Côte Lazuli', details: 'En faisant évoluer Cerfrousse' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Cerfrousse' },
    { region: 'Terres Immaculées', details: 'En faisant évoluer Cerfrousse' },
  ],
  yanma: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  yanmega: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage', alphas: ['Champ Bourdonne'] },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  zoroark: [
    { region: 'Terres Immaculées', details: 'Rencontre sauvage', alphas: ['Lac Savoir (niv. 58)'] },
  ],
  zorua: [
    { region: 'Terres Immaculées', details: 'Zones ouvertes, invasions massives (forme de Hisui)' },
  ],
  zubat: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Cellier Champêtre · Forêt Lointaine · Sentier Cer-Mont · Tunnel de Fer',
    },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic' },
  ],
}
