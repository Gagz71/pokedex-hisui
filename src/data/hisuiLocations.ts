// Localisations à Hisui, par grande région (5 zones + Rusti-Cité).
// PokeAPI ne fournit aucune donnée d'encounter pour Legends: Arceus, donc ce
// dataset vient de sources externes :
//  - Poképédia (section « Localisations » de chaque pokémon, et de sa page
//    « … de Hisui » pour les formes régionales) : zones, sous-zones, Barons,
//    distorsions spatio-temporelles, rencontres uniques ;
//  - Bulbapedia pour les espèces à formes multiples que Poképédia n'affiche
//    pas (Cheniti, Sancoki, Bargantua, Giratina, Shaymin, génies...) ;
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
}

export const HISUI_LOCATIONS: Record<string, LocationEntry[]> = {
  abomasnow: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
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
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella (Baron, niv. 60)' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
  ],
  ambipom: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  arcanine: [{ region: 'Côte Lazuli', details: 'En faisant évoluer Caninos de Hisui' }],
  arceus: [
    { region: 'Contrefort Couronné', details: 'Temple de Sinnoh, rencontre unique (niv. 75)' },
  ],
  avalugg: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  azelf: [{ region: 'Marais Carmin', details: 'Lac Courage, rencontre unique (niv. 70)' }],
  barboach: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
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
      details: "Digue de l'Estuaire · Digue de l'Estuaire (Baron, niv. 16)",
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
    { region: 'Plaines Obsidiennes', details: "Chute d'Obsidienne (Baron, niv. 62)" },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  bonsly: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  braviary: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  bronzong: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage · Temple de Frimapic' },
  ],
  bronzor: [
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
  ],
  carnivine: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  cascoon: [{ region: 'Plaines Obsidiennes', details: 'Champ Flora · Forêt Lointaine' }],
  chansey: [
    { region: 'Plaines Obsidiennes', details: "Chute d'Obsidienne" },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  chatot: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
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
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  chingling: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  clefable: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  clefairy: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  cleffa: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
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
  crobat: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
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
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
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
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  duskull: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  dustox: [
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité · Champ Flora · Forêt Lointaine' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  eevee: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles · Val Ferrache' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  electabuzz: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  electivire: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  electrode: [{ region: 'Contrefort Couronné', details: 'En faisant évoluer Voltorbe de Hisui' }],
  elekid: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  empoleon: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  enamorus: [{ region: 'Marais Carmin', details: 'Rencontre unique (Forme Avatar)' }],
  espeon: [{ region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' }],
  finneon: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  flareon: [
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
  ],
  floatzel: [
    { region: 'Plaines Obsidiennes', details: 'Pont Rocheux · Pont Rocheux (Baron, niv. 31)' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  froslass: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage · Temple de Frimapic' }],
  gabite: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  gallade: [
    {
      region: 'Terres Immaculées',
      details: 'Rencontre sauvage · Temple de Frimapic, Baron (niv. 70)',
    },
  ],
  garchomp: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  gardevoir: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
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
    { region: 'Côte Lazuli', details: 'Rencontre sauvage, Baron, invasions massives (Mer Orient)' },
  ],
  gengar: [{ region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' }],
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
  glalie: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage · Temple de Frimapic' }],
  glameow: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  gligar: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  gliscor: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  golbat: [
    { region: 'Plaines Obsidiennes', details: 'Tunnel de Fer · Tunnel de Fer (Baron, niv. 35)' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic' },
  ],
  golduck: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  golem: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  goodra: [
    { region: 'Plaines Obsidiennes', details: 'Lac Vérité, Baron (niv. 58)' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  goomy: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  graveler: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Bocage Agité (Baron, niv. 30) · Plaine Littorella · Tunnel de Fer',
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
      details:
        "Lac Vérité · Lac Vérité, Baron (niv. 60) · Chute d'Obsidienne · Lac Vérité (Baron, niv. 60)",
    },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
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
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité (Baron, niv. 45)' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  hippopotas: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  hippowdon: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  honchkrow: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  infernape: [{ region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa (Baron, niv. 65)' }],
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
      details: "Cellier Champêtre · Digue de l'Estuaire (Baron, niv. 30)",
    },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
  ],
  landorus: [{ region: 'Plaines Obsidiennes', details: 'Rencontre unique (Forme Avatar)' }],
  leafeon: [{ region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' }],
  lickilicky: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  lickitung: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  lilligant: [{ region: 'Marais Carmin', details: 'En faisant évoluer Chlorobule' }],
  lopunny: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine (Baron, niv. 40)' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  lucario: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  lumineon: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  luxio: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Champ Flora · Champ Flora (Baron, niv. 40) · Plaine Littorella · Tunnel de Fer',
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  luxray: [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  machamp: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  machoke: [
    { region: 'Plaines Obsidiennes', details: "Chute d'Obsidienne" },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
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
    { region: 'Plaines Obsidiennes', details: "Lac Vérité · Chute d'Obsidienne" },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  magmar: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  magmortar: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  magnemite: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles (rare)' }],
  magneton: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles (rare)' }],
  magnezone: [
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles (rare)' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  mamoswine: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  manaphy: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  mantine: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  mantyke: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  mesprit: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Lac Vérité, rencontre unique (niv. 70) · Lac Vérité (rencontre unique (niv. 70))',
    },
  ],
  'mime-jr': [{ region: 'Plaines Obsidiennes', details: 'Plaine Littorella · Val Ferrache' }],
  misdreavus: [
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  mismagius: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  monferno: [{ region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa' }],
  mothim: [
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  'mr-mime': [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
  ],
  munchlax: [
    { region: 'Plaines Obsidiennes', details: 'Plateau Cer-Mont' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  murkrow: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  ninetales: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  nosepass: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  octillery: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  onix: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
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
    { region: 'Côte Lazuli', details: 'En faisant évoluer Qwilfish de Hisui' },
  ],
  pachirisu: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
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
    { region: 'Plaines Obsidiennes', details: 'Cellier Champêtre (Baron, niv. 30)' },
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
  piloswine: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  piplup: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  ponyta: [{ region: 'Plaines Obsidiennes', details: 'Val Ferrache' }],
  porygon: [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles (rare)' }],
  'porygon-z': [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles (rare)' }],
  porygon2: [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles (rare)' }],
  prinplup: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  probopass: [{ region: 'Contrefort Couronné', details: 'Rencontre sauvage' }],
  psyduck: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  purugly: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
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
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  raichu: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  ralts: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage · Temple de Frimapic' },
  ],
  rampardos: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles (rare)' }],
  rapidash: [
    { region: 'Plaines Obsidiennes', details: 'Val Ferrache · Val Ferrache (Baron, niv. 40)' },
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
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  rhyperior: [
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  riolu: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  roselia: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  roserade: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
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
      details: 'Arène du Grand Arbre · Arène du Grand Arbre (Baron, niv. 42)',
    },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  sealeo: [
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
  silcoon: [{ region: 'Plaines Obsidiennes', details: 'Champ Flora · Forêt Lointaine' }],
  skorupi: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  skuntank: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  sliggoo: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  sneasel: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles (forme classique)' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage (forme de Hisui)' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage (forme de Hisui)' },
  ],
  sneasler: [
    { region: 'Plaines Obsidiennes', details: 'En faisant évoluer Farfuret de Hisui' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Farfuret de Hisui' },
    { region: 'Terres Immaculées', details: 'En faisant évoluer Farfuret de Hisui' },
  ],
  snorlax: [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella (Baron, niv. 45)' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage' },
  ],
  snorunt: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  snover: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  spheal: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  spiritomb: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
  stantler: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plateau Cer-Mont · Plateau Cer-Mont (Baron, niv. 42)',
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
      details:
        "Cellier Champêtre · Digue de l'Estuaire · Île Rosa Rugosa · Plaine Littorella · Rive Filevent (Baron, niv. 32)",
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
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  stunky: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  sudowoodo: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  swinub: [{ region: 'Terres Immaculées', details: 'Rencontre sauvage' }],
  sylveon: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  tangela: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
  ],
  tangrowth: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  teddiursa: [
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  tentacool: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  tentacruel: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  thundurus: [
    { region: 'Côte Lazuli', details: "Rencontre unique, par temps d'orage (Forme Avatar)" },
  ],
  togekiss: [{ region: 'Plaines Obsidiennes', details: 'Lac Vérité' }],
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
  torterra: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
  toxicroak: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
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
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  uxie: [{ region: 'Terres Immaculées', details: 'Lac Savoir, rencontre unique (niv. 70)' }],
  vaporeon: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' }],
  vespiquen: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
  voltorb: [
    {
      region: 'Contrefort Couronné',
      details: 'Dans des caisses, invasions massives (forme de Hisui)',
    },
  ],
  vulpix: [{ region: 'Côte Lazuli', details: 'Rencontre sauvage' }],
  walrein: [
    { region: 'Côte Lazuli', details: 'Rencontre sauvage' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  weavile: [{ region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' }],
  whiscash: [{ region: 'Marais Carmin', details: 'Rencontre sauvage' }],
  wormadam: [
    { region: 'Plaines Obsidiennes', details: 'Arbres qui tremblent (Cape Plante)' },
    { region: 'Marais Carmin', details: 'Arbres qui tremblent (Cape Sable)' },
    { region: 'Côte Lazuli', details: 'Arbres qui tremblent (Cape Déchet)' },
    { region: 'Contrefort Couronné', details: 'Arbres qui tremblent' },
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
    { region: 'Marais Carmin', details: 'Rencontre sauvage' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage' },
  ],
  zoroark: [
    { region: 'Terres Immaculées', details: 'Rencontre sauvage · Lac Savoir, Baron (niv. 58)' },
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
