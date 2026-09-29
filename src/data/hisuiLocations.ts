// Localisations à Hisui, par grande région (5 zones + Rusti-Cité).
// PokeAPI ne fournit aucune donnée d'encounter pour Legends: Arceus, donc ce
// dataset vient de sources externes :
//  - Bulbapedia (section « Game locations » de chaque pokémon) pour les lieux
//    précis : sous-zones, « alentours », conditions (la nuit, arbres qui
//    tremblent, caisses, requêtes...), apparitions massives et mégapparitions.
//    Noms de lieux en français repris des tableaux de traduction de ses pages
//    de lieux, termes officiels vérifiés sur Poképédia ;
//  - Poképédia (section « Localisations » de chaque pokémon, et de sa page
//    « … de Hisui » pour les formes régionales) : zones, sous-zones, Barons,
//    distorsions spatio-temporelles, rencontres uniques ;
//  - Bulbapedia pour les espèces à formes multiples que Poképédia n'affiche
//    pas (Cheniti, Sancoki, Bargantua, Giratina, Shaymin, génies...), pour
//    les zones que Poképédia oublie et pour les Barons à
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
  // Les Barons des apparitions massives ne sont pas listés.
  alphas?: string[]
}

export const HISUI_LOCATIONS: Record<string, LocationEntry[]> = {
  abomasnow: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Étendue Polaire, Sentier de l'Arène (alentours), Glacier Séracrawl (alentours), Terrasse du Glacier · Mégapparitions",
      alphas: ['Étendue Polaire'],
    },
  ],
  abra: [
    { region: 'Plaines Obsidiennes', details: 'Rive Filevent, Plaine Littorella · Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Lac Savoir · Mégapparitions' },
  ],
  aipom: [
    { region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa' },
    {
      region: 'Côte Lazuli',
      details:
        'Mont des Capumain (aussi dans les arbres qui tremblent), Crique Paisible · Mégapparitions',
    },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Vallée Enneigée, Étendue Polaire, Chute d'Oglacé (alentours), Sentier de l'Arène (alentours), Glacier Séracrawl (alentours), Source Panora-Neige, Terrasse du Glacier, Rocher Esprit, Hameau Perle (alentours) · Mégapparitions",
    },
  ],
  alakazam: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plaine Littorella · Mégapparitions',
      alphas: ['Plaine Littorella (niv. 60)'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Lac Savoir · Mégapparitions' },
  ],
  ambipom: [
    {
      region: 'Côte Lazuli',
      details: 'Mont des Capumain, Crique Paisible · Mégapparitions',
      alphas: ['Crique Paisible'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Chute d'Oglacé (alentours), Sentier de l'Arène (alentours), Glacier Séracrawl (alentours), Rocher Esprit · Mégapparitions",
    },
  ],
  arcanine: [
    { region: 'Côte Lazuli', details: 'Mégapparitions · En faisant évoluer Caninos de Hisui' },
  ],
  arceus: [{ region: 'Contrefort Couronné', details: 'Salle Originelle (un seul) · niv. 75' }],
  avalugg: [{ region: 'Terres Immaculées', details: 'Glacier Séracrawl · Mégapparitions' }],
  azelf: [{ region: 'Marais Carmin', details: 'Caverne Courage (un seul) · niv. 70' }],
  barboach: [
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée et alentours, Arène Ursa (alentours), Champ Bourdonne (alentours), Lac Courage · Mégapparitions',
    },
    { region: 'Contrefort Couronné', details: 'Grotte des Égarés' },
  ],
  basculegion: [
    { region: 'Côte Lazuli', details: 'Mégapparitions · En faisant évoluer Bargantua' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Bargantua' },
    { region: 'Terres Immaculées', details: 'En faisant évoluer Bargantua' },
  ],
  basculin: [
    {
      region: 'Côte Lazuli',
      details:
        'Baie Sérénité, Plage Long-des-Îles (alentours), Île Crache-Feu (alentours) · Mégapparitions',
    },
    { region: 'Contrefort Couronné', details: 'Source Féérique' },
    {
      region: 'Terres Immaculées',
      details: 'Glacier Séracrawl (alentours), Rocher Esprit, Lac Savoir, Hameau Perle (alentours)',
    },
  ],
  bastiodon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  beautifly: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Le jour : Champ Flora, Bocage Agité, Forêt Lointaine · Mégapparitions',
    },
    { region: 'Côte Lazuli', details: 'Le jour : Lagune des Bains, Cap du Voile' },
  ],
  bergmite: [
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche (alentours), Vallée Enneigée (alentours), Étendue Polaire, Sentier de l'Arène, Glacier Séracrawl, Terrasse du Glacier (alentours), Voie de Glace, Souterrain de Givre, Chambre des Piliers · Mégapparitions",
    },
  ],
  bibarel: [
    {
      region: 'Plaines Obsidiennes',
      details: "Digue de l'Estuaire et alentours · Mégapparitions",
      alphas: ["Digue de l'Estuaire (niv. 16)"],
    },
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Arène Ursa (alentours), Champ Bourdonne',
    },
    { region: 'Côte Lazuli', details: 'Chemin de la Source' },
    {
      region: 'Terres Immaculées',
      details: 'Glacier Séracrawl et alentours, Terrasse du Glacier (alentours) · Mégapparitions',
    },
  ],
  bidoof: [
    {
      region: 'Plaines Obsidiennes',
      details: "Colline Ambition, Val Ferrache, Digue de l'Estuaire et alentours · Mégapparitions",
    },
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Arène Ursa (alentours), Champ Bourdonne',
    },
    {
      region: 'Terres Immaculées',
      details: 'Glacier Séracrawl (alentours), Terrasse du Glacier (alentours) · Mégapparitions',
    },
  ],
  blissey: [
    {
      region: 'Plaines Obsidiennes',
      details: "Chute d'Obsidienne (alentours)",
      alphas: ["Chute d'Obsidienne (niv. 62)"],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    { region: 'Terres Immaculées', details: "Pente de l'Avalanche" },
  ],
  bonsly: [
    {
      region: 'Marais Carmin',
      details:
        'Lisière du Hameau (gisements qui tremblent), Col Mer-de-Nuages et alentours · Mégapparitions',
    },
    {
      region: 'Contrefort Couronné',
      details:
        'Temple Céleste (gisements qui tremblent), Temple Céleste (alentours, apparitions massives)',
    },
  ],
  braviary: [
    {
      region: 'Terres Immaculées',
      details: 'Lac Savoir (alentours, aussi en apparitions massives, en vol) · Mégapparitions',
    },
  ],
  bronzong: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière, Falaise Calade (alentours), Temple Céleste (alentours), Grotte Préhistorique (alentours), Col Pierlevé (le jour) · Mégapparitions',
      alphas: ['Falaise Calade'],
    },
    { region: 'Terres Immaculées', details: 'Lac Savoir, Temple de Frimapic · Mégapparitions' },
  ],
  bronzor: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière, Falaise Calade (alentours), Temple Céleste (alentours), Grotte Préhistorique (alentours), Col Pierlevé (le jour) · Mégapparitions',
    },
    { region: 'Terres Immaculées', details: 'Lac Savoir, Temple de Frimapic · Mégapparitions' },
  ],
  budew: [
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or (aussi en apparitions massives, le jour), Marais Bouchebée, Lande Herbacoton (alentours) · Mégapparitions",
    },
    { region: 'Contrefort Couronné', details: 'Source Féérique' },
  ],
  buizel: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Val Ferrache, Pont Rocheux (alentours), Rive Filevent · Mégapparitions',
    },
    { region: 'Côte Lazuli', details: 'Plage Ginkgo, Mont des Capumain, Lagune des Bains' },
  ],
  buneary: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine et alentours · Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: 'Étendue Polaire, Source Panora-Neige · Mégapparitions',
    },
  ],
  burmy: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Cape Plante, arbres qui tremblent : Bocage Agité, Pont Rocheux, Sentier Cer-Mont, Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Chute d'Obsidienne",
    },
    {
      region: 'Marais Carmin',
      details:
        "Cape Sable, arbres qui tremblent : Plaine d'Or, Marais Bouchebée, Île de l'Épreuve, Arène Ursa, Marais Carlate (alentours), Col Mer-de-Nuages (alentours), Ruines Brumeuses, Hameau Diamant (alentours), Lisière du Hameau (alentours), Pente des Gringoles, Lande Herbacoton, Champ Bourdonne, Lac Courage (alentours)",
    },
    {
      region: 'Côte Lazuli',
      details:
        "Cape Déchet, arbres qui tremblent : Coteau du Passage, Plage Ginkgo, Mont des Capumain, Lagune des Bains, Crique Paisible, Rive des Revenants (alentours), Presqu'île Tombolo, Main de Sable, Baie Sérénité, Plage de l'Errance, Bois Brise-Vent (alentours), Chemin de la Source, Plage Long-des-Îles (alentours), Cap du Voile, Arche Poissigrand, Havre des Algues, Île Crache-Feu (alentours)",
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Cape Sable, arbres qui tremblent : Hauts de l'Humilité, Ancienne Carrière (alentours), Falaise Calade, Temple Céleste, Sentier Céleste (alentours), Parvis des Prières, Col Pierlevé, Source Féérique, Passage des Nuages",
    },
    {
      region: 'Terres Immaculées',
      details:
        "Cape Déchet, arbres qui tremblent : Pente de l'Avalanche, Vallée Enneigée, Étendue Polaire, Chute d'Oglacé, Sentier de l'Arène, Glacier Séracrawl (alentours), Terrasse du Glacier, Rocher Esprit, Lac Savoir, Hameau Perle (alentours)",
    },
  ],
  carnivine: [
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or et alentours, Marais Bouchebée, Île de l'Épreuve, Col Mer-de-Nuages, Ruines Brumeuses, Hameau Diamant (alentours), Lande Herbacoton (alentours), Lac Courage (alentours) · Mégapparitions",
      alphas: ['Lande Herbacoton'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Source Reculée', alphas: ['Source Reculée'] },
  ],
  cascoon: [
    {
      region: 'Plaines Obsidiennes',
      details: 'La nuit : Champ Flora, Val Ferrache, Forêt Lointaine · Mégapparitions',
    },
  ],
  chansey: [
    {
      region: 'Plaines Obsidiennes',
      details: "Val Ferrache (alentours, apparitions massives), Chute d'Obsidienne (alentours)",
    },
    { region: 'Marais Carmin', details: 'Lande Herbacoton (apparitions massives)' },
    {
      region: 'Côte Lazuli',
      details: "Crique Paisible, Presqu'île Tombolo et alentours · Mégapparitions",
      alphas: ["Presqu'île Tombolo"],
    },
    { region: 'Contrefort Couronné', details: 'Source Reculée (apparitions massives)' },
    { region: 'Terres Immaculées', details: "Pente de l'Avalanche" },
  ],
  chatot: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details: 'Rive des Revenants (aussi en apparitions massives, le jour) · Mégapparitions',
    },
  ],
  cherrim: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine (arbres qui tremblent)' },
    { region: 'Marais Carmin', details: 'Marais Bouchebée (arbres qui tremblent)' },
    {
      region: 'Contrefort Couronné',
      details:
        'Arbres qui tremblent : Source Reculée, Grotte Préhistorique (alentours), Mont des Gringoles',
    },
  ],
  cherubi: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine (apparitions massives)' },
    { region: 'Marais Carmin', details: 'Rencontre sauvage (lieu précis non répertorié)' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage (lieu précis non répertorié)' },
  ],
  chimchar: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Plateau Cer-Mont, Rive Filevent (un seul, pendant la requête 20), Île Rosa Rugosa · Mégapparitions',
    },
  ],
  chimecho: [
    {
      region: 'Contrefort Couronné',
      details:
        'Sentier Céleste, Grotte Préhistorique (apparitions massives), Parvis des Prières · Mégapparitions',
    },
    { region: 'Terres Immaculées', details: 'Lac Savoir', alphas: ['Lac Savoir'] },
  ],
  chingling: [
    {
      region: 'Contrefort Couronné',
      details: 'Grotte Préhistorique (apparitions massives), Parvis des Prières · Mégapparitions',
    },
    { region: 'Terres Immaculées', details: 'Lac Savoir' },
  ],
  clefable: [
    {
      region: 'Contrefort Couronné',
      details: 'Source Féérique (la nuit) · Mégapparitions',
      alphas: ['Source Féérique'],
    },
  ],
  clefairy: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Source Féérique (la nuit) · Mégapparitions' },
  ],
  cleffa: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Source Féérique (la nuit) · Mégapparitions' },
  ],
  combee: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Bocage Agité, Forêt Lointaine (alentours), Tunnel de Fer (alentours)',
    },
    {
      region: 'Marais Carmin',
      details:
        'Col Mer-de-Nuages, Lande Herbacoton (alentours), Champ Bourdonne (alentours), Lac Courage (alentours)',
    },
    { region: 'Côte Lazuli', details: 'Mont des Capumain' },
  ],
  cranidos: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  cresselia: [{ region: 'Contrefort Couronné', details: 'Arène de la Lune (un seul) · niv. 70' }],
  croagunk: [
    {
      region: 'Marais Carmin',
      details:
        "Marais Bouchebée, Île de l'Épreuve, Plateau Tourbeux (alentours), Marais Carlate · Mégapparitions",
    },
    { region: 'Contrefort Couronné', details: 'Ancienne Carrière (alentours)' },
  ],
  crobat: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Grotte des Égarés', alphas: ['Grotte des Égarés'] },
    { region: 'Terres Immaculées', details: "Chute d'Oglacé (en vol)" },
  ],
  cyndaquil: [
    { region: 'Rusti-Cité', details: 'Pokémon de départ, offert au Siège du Groupe Galaxie' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles (après la mission 18)' },
  ],
  darkrai: [
    {
      region: 'Contrefort Couronné',
      details:
        'Falaise Calade (alentours, un seul, avec une sauvegarde de Diamant Étincelant ou Perle Scintillante)',
    },
  ],
  dartrix: [
    {
      region: 'Contrefort Couronné',
      details:
        'Distorsions spatio-temporelles (après la mission 18) · Mégapparitions (après la requête 102)',
    },
  ],
  decidueye: [
    {
      region: 'Contrefort Couronné',
      details:
        'Distorsions spatio-temporelles (après la mission 18) · Mégapparitions (après la requête 102)',
    },
  ],
  dewott: [
    {
      region: 'Terres Immaculées',
      details:
        'Distorsions spatio-temporelles (après la mission 18) · Mégapparitions (après la requête 102)',
    },
  ],
  dialga: [{ region: 'Contrefort Couronné', details: 'Temple de Sinnoh (un seul) · niv. 65' }],
  drapion: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details: "Plage Ginkgo, Plage de l'Errance (apparitions massives) · Mégapparitions",
      alphas: ['Plage Ginkgo'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  drifblim: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'La nuit : Île Rosa Rugosa, Plaine Littorella, Lac Vérité et alentours · Mégapparitions',
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Côte Lazuli',
      details:
        "La nuit : Coteau du Passage, Plage Ginkgo (alentours), Mont des Capumain (alentours), Lagune des Bains et alentours, Crique Paisible (alentours), Rive des Revenants, Presqu'île Tombolo (alentours), Main de Sable et alentours, Baie Sérénité, Plage de l'Errance (alentours), Plage Long-des-Îles (alentours, apparitions massives à proximité), Arche Poissigrand, Havre des Algues, Île Crache-Feu",
    },
    {
      region: 'Terres Immaculées',
      details:
        'La nuit : Étendue Polaire, Glacier Séracrawl, Terrasse du Glacier (aussi en apparitions massives), Rocher Esprit · Mégapparitions',
    },
  ],
  drifloon: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'La nuit : Colline Ambition, Champ Flora, Val Ferrache, Pont Rocheux (alentours), Sentier Cer-Mont, Rive Filevent, Île Rosa Rugosa · Mégapparitions',
    },
    {
      region: 'Côte Lazuli',
      details:
        "La nuit : Coteau du Passage, Plage Ginkgo et alentours, Mont des Capumain (alentours), Lagune des Bains et alentours, Crique Paisible (alentours), Rive des Revenants, Presqu'île Tombolo (alentours), Main de Sable et alentours, Baie Sérénité, Plage de l'Errance (alentours), Plage Long-des-Îles (alentours, apparitions massives à proximité), Arche Poissigrand, Havre des Algues, Île Crache-Feu",
    },
    {
      region: 'Terres Immaculées',
      details:
        'La nuit : Étendue Polaire, Glacier Séracrawl, Terrasse du Glacier (aussi en apparitions massives), Rocher Esprit · Mégapparitions',
    },
  ],
  dusclops: [
    { region: 'Côte Lazuli', details: 'Rive des Revenants (la nuit)' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles · Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Chute d'Oglacé et alentours (aussi en apparitions massives, la nuit), Sentier de l'Arène (la nuit), Pente de l'Avalanche · Mégapparitions",
    },
  ],
  dusknoir: [
    {
      region: 'Côte Lazuli',
      details: 'Rive des Revenants (la nuit)',
      alphas: ['Rive des Revenants'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles · Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  duskull: [
    { region: 'Côte Lazuli', details: 'Rive des Revenants (la nuit)' },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Chute d'Oglacé et alentours (aussi en apparitions massives, la nuit), Sentier de l'Arène (la nuit), Pente de l'Avalanche · Mégapparitions",
    },
  ],
  dustox: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'La nuit : Champ Flora, Bocage Agité (apparitions massives à proximité), Forêt Lointaine · Mégapparitions',
    },
    { region: 'Côte Lazuli', details: 'La nuit : Lagune des Bains, Cap du Voile' },
  ],
  eevee: [
    { region: 'Plaines Obsidiennes', details: 'Val Ferrache · Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Côte Lazuli',
      details: 'Coteau du Passage (alentours) · Distorsions spatio-temporelles',
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  electabuzz: [
    { region: 'Contrefort Couronné', details: 'Passage des Nuages · Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Sentier de l'Arène · Distorsions spatio-temporelles",
    },
  ],
  electivire: [
    {
      region: 'Contrefort Couronné',
      details: 'Passage des Nuages · Mégapparitions',
      alphas: ['Passage des Nuages'],
    },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  electrode: [
    {
      region: 'Contrefort Couronné',
      details: 'Mégapparitions · En faisant évoluer Voltorbe de Hisui',
    },
  ],
  elekid: [
    { region: 'Contrefort Couronné', details: 'Passage des Nuages · Mégapparitions' },
    { region: 'Terres Immaculées', details: "Chute d'Oglacé, Sentier de l'Arène" },
  ],
  empoleon: [
    {
      region: 'Côte Lazuli',
      details: 'Plage Long-des-Îles · Mégapparitions',
      alphas: ['Plage Long-des-Îles'],
    },
  ],
  enamorus: [{ region: 'Marais Carmin', details: 'Marais Carlate (un seul)' }],
  espeon: [{ region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' }],
  finneon: [{ region: 'Côte Lazuli', details: 'Havre des Algues · Mégapparitions' }],
  flareon: [
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
  ],
  floatzel: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Val Ferrache (apparitions massives), Pont Rocheux (alentours), Rive Filevent · Mégapparitions',
      alphas: ['Pont Rocheux (niv. 31)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Plage Ginkgo, Mont des Capumain, Lagune des Bains' },
  ],
  froslass: [
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche (la nuit), Étendue Polaire (la nuit), Glacier Séracrawl (la nuit), Temple de Frimapic (la nuit), Hameau Perle (alentours, la nuit), Chambre des Piliers · Mégapparitions",
      alphas: ['Chambre des Piliers'],
    },
  ],
  gabite: [
    {
      region: 'Contrefort Couronné',
      details: 'Falaise Calade (alentours), Falaise Calade (apparitions massives) · Mégapparitions',
      alphas: ['Falaise Calade'],
    },
    { region: 'Terres Immaculées', details: "Pente de l'Avalanche" },
  ],
  gallade: [
    {
      region: 'Terres Immaculées',
      details: 'Temple de Frimapic · Mégapparitions',
      alphas: ['Temple de Frimapic (niv. 70)'],
    },
  ],
  garchomp: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche",
      alphas: ["Pente de l'Avalanche"],
    },
  ],
  gardevoir: [
    {
      region: 'Terres Immaculées',
      details: 'Rocher Esprit (le jour), Lac Savoir (apparitions massives) · Mégapparitions',
      alphas: ['Rocher Esprit'],
    },
  ],
  gastly: [
    {
      region: 'Marais Carmin',
      details:
        "La nuit : Plaine d'Or, Marais Bouchebée, Île de l'Épreuve, Arène Ursa, Plateau Tourbeux (alentours), Marais Carlate, Ruines Brumeuses (aussi en apparitions massives), Lande Herbacoton, Champ Bourdonne, Lac Courage (alentours) · Mégapparitions",
    },
    {
      region: 'Contrefort Couronné',
      details:
        'La nuit : Falaise Calade, Temple Céleste, Parvis des Prières, Mont des Gringoles · Mégapparitions',
    },
    {
      region: 'Terres Immaculées',
      details:
        'La nuit : Étendue Polaire (aussi en apparitions massives), Glacier Séracrawl (alentours), Souterrain de Givre (alentours) · Mégapparitions',
    },
  ],
  gastrodon: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Mer Occident : Île Rosa Rugosa, Plaine Littorella · Mégapparitions',
    },
    {
      region: 'Côte Lazuli',
      details: 'Mer Orient : Havre des Algues · Mégapparitions',
      alphas: ['Havre des Algues'],
    },
  ],
  gengar: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  geodude: [
    {
      region: 'Plaines Obsidiennes',
      details: "Pont Rocheux, Plateau Cer-Mont, Chute d'Obsidienne (alentours) · Mégapparitions",
    },
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée, Arène Ursa, Plateau Tourbeux (alentours), Marais Carlate (alentours), Pente des Gringoles, Champ Bourdonne',
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière (alentours), Falaise Calade (le jour), Temple Céleste, Parvis des Prières, Mont des Gringoles · Mégapparitions',
    },
  ],
  gible: [
    {
      region: 'Contrefort Couronné',
      details: 'Grotte des Égarés, Falaise Calade · Mégapparitions',
    },
    { region: 'Terres Immaculées', details: "Pente de l'Avalanche" },
  ],
  giratina: [{ region: 'Côte Lazuli', details: 'Grotte du Retour (un seul)' }],
  glaceon: [{ region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' }],
  glalie: [
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Étendue Polaire, Sentier de l'Arène (un seul, pendant la requête 86), Glacier Séracrawl, Temple de Frimapic, Hameau Perle (alentours) · Mégapparitions",
      alphas: ['Étendue Polaire'],
    },
  ],
  glameow: [
    { region: 'Côte Lazuli', details: 'Coteau du Passage, Cap du Voile · Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Terrasse du Glacier (alentours) · Mégapparitions' },
  ],
  gligar: [
    {
      region: 'Contrefort Couronné',
      details:
        'Falaise Calade, Temple Céleste et alentours, Grotte Préhistorique (alentours), Passage des Nuages (alentours) · Mégapparitions',
      alphas: ['Temple Céleste'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Sentier de l'Arène, Terrasse du Glacier (le jour), Terrasse du Glacier (apparitions massives)",
    },
  ],
  gliscor: [
    {
      region: 'Contrefort Couronné',
      details: 'Grotte Préhistorique (alentours) · Mégapparitions',
      alphas: ['Grotte Préhistorique'],
    },
  ],
  golbat: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "La nuit : Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Forêt Lointaine, Tunnel de Fer et alentours, Chute d'Obsidienne (alentours) · Mégapparitions",
      alphas: ['Tunnel de Fer (niv. 35)'],
    },
    {
      region: 'Marais Carmin',
      details:
        'La nuit : Col Mer-de-Nuages, Hameau Diamant (alentours), Lisière du Hameau, Pente des Gringoles',
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité (la nuit), Forêt des Égarés (la nuit), Grotte des Égarés, Ancienne Carrière (alentours, la nuit)",
    },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic' },
  ],
  golduck: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine (apparitions massives)' },
    {
      region: 'Marais Carmin',
      details: "Plaine d'Or (apparitions massives), Île de l'Épreuve · Mégapparitions",
    },
    {
      region: 'Côte Lazuli',
      details: 'Lagune des Bains · Mégapparitions',
      alphas: ['Lagune des Bains'],
    },
    { region: 'Contrefort Couronné', details: 'Forêt des Égarés, Source Reculée' },
  ],
  golem: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Mont des Gringoles · Mégapparitions',
      alphas: ['Mont des Gringoles'],
    },
  ],
  goodra: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Lac Vérité (un seul, pendant la mission 14)',
      alphas: ['Lac Vérité (niv. 58)'],
    },
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours)',
      alphas: ['Ancienne Carrière'],
    },
  ],
  goomy: [
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve, Arène Ursa (apparitions massives) · Mégapparitions",
    },
    { region: 'Contrefort Couronné', details: 'Ancienne Carrière (alentours)' },
  ],
  graveler: [
    {
      region: 'Plaines Obsidiennes',
      details: "Chute d'Obsidienne (alentours) · Mégapparitions",
      alphas: ['Bocage Agité (niv. 30)', "Chute d'Obsidienne"],
    },
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée, Arène Ursa, Plateau Tourbeux (alentours), Marais Carlate (alentours), Pente des Gringoles, Champ Bourdonne, Lac Courage (alentours)',
    },
    { region: 'Côte Lazuli', details: 'Île Crache-Feu · Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière (alentours), Falaise Calade (le jour), Temple Céleste, Parvis des Prières, Mont des Gringoles · Mégapparitions',
    },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic' },
  ],
  grotle: [{ region: 'Marais Carmin', details: 'Champ Bourdonne (alentours) · Mégapparitions' }],
  growlithe: [{ region: 'Côte Lazuli', details: 'Bois Brise-Vent, Cap du Voile · Mégapparitions' }],
  gyarados: [
    {
      region: 'Plaines Obsidiennes',
      details: "Chute d'Obsidienne (en vol), Lac Vérité",
      alphas: ['Lac Vérité (niv. 60)'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Main de Sable et alentours · Mégapparitions',
      alphas: ['Main de Sable'],
    },
    { region: 'Contrefort Couronné', details: 'Grotte Préhistorique (alentours)' },
  ],
  happiny: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Val Ferrache (alentours, apparitions massives), Tunnel de Fer, Chute d'Obsidienne (alentours)",
    },
    { region: 'Marais Carmin', details: 'Lande Herbacoton (apparitions massives)' },
    {
      region: 'Côte Lazuli',
      details: "Crique Paisible, Presqu'île Tombolo et alentours · Mégapparitions",
    },
    { region: 'Contrefort Couronné', details: 'Source Reculée (apparitions massives)' },
    { region: 'Terres Immaculées', details: "Pente de l'Avalanche" },
  ],
  haunter: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details:
        "La nuit : Plaine d'Or (alentours), Marais Bouchebée, Île de l'Épreuve, Arène Ursa, Plateau Tourbeux (alentours), Marais Carlate, Ruines Brumeuses (aussi en apparitions massives), Lande Herbacoton, Champ Bourdonne, Lac Courage (alentours) · Mégapparitions",
    },
    {
      region: 'Contrefort Couronné',
      details:
        'La nuit : Falaise Calade, Temple Céleste, Parvis des Prières, Mont des Gringoles · Mégapparitions',
    },
    {
      region: 'Terres Immaculées',
      details:
        'La nuit : Étendue Polaire (aussi en apparitions massives), Glacier Séracrawl (alentours), Souterrain de Givre (alentours) · Mégapparitions',
    },
  ],
  heatran: [{ region: 'Côte Lazuli', details: 'Autel de la Caldeira (un seul)' }],
  heracross: [
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité', alphas: ['Bocage Agité (niv. 45)'] },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Forêt des Égarés (le jour) · Mégapparitions' },
  ],
  hippopotas: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Plateau Tourbeux (alentours), Marais Carlate · Mégapparitions',
    },
    { region: 'Contrefort Couronné', details: 'Sentier Céleste · Mégapparitions' },
  ],
  hippowdon: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Marais Carlate et alentours · Mégapparitions',
      alphas: ['Marais Bouchebée'],
    },
    { region: 'Contrefort Couronné', details: 'Sentier Céleste · Mégapparitions' },
  ],
  honchkrow: [
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages (la nuit) · Mégapparitions',
      alphas: ['Col Mer-de-Nuages'],
    },
    { region: 'Côte Lazuli', details: 'Lagune des Bains (la nuit)' },
  ],
  infernape: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Île Rosa Rugosa · Mégapparitions',
      alphas: ['Île Rosa Rugosa (niv. 65)'],
    },
  ],
  jolteon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  kadabra: [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella · Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Lac Savoir · Mégapparitions' },
  ],
  kirlia: [
    { region: 'Marais Carmin', details: 'Ruines Brumeuses' },
    {
      region: 'Terres Immaculées',
      details:
        'Rocher Esprit (le jour), Lac Savoir (apparitions massives), Temple de Frimapic · Mégapparitions',
    },
  ],
  kleavor: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions · En faisant évoluer Insécateur' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Insécateur' },
    { region: 'Terres Immaculées', details: 'En faisant évoluer Insécateur' },
  ],
  kricketot: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Sentier Cer-Mont et alentours, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire · Mégapparitions",
    },
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages, Hameau Diamant (alentours) · Mégapparitions',
    },
  ],
  kricketune: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Plateau Cer-Mont (un seul, pendant la mission 5), Rive Filevent, Cellier Champêtre, Digue de l'Estuaire · Mégapparitions",
      alphas: ["Digue de l'Estuaire (niv. 30)", 'Plateau Cer-Mont'],
    },
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages, Hameau Diamant (alentours) · Mégapparitions',
    },
  ],
  landorus: [{ region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa (un seul)' }],
  leafeon: [{ region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' }],
  lickilicky: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details: 'Ruines Brumeuses (aussi en apparitions massives) · Mégapparitions',
      alphas: ['Ruines Brumeuses'],
    },
    { region: 'Terres Immaculées', details: "Pente de l'Avalanche · Mégapparitions" },
  ],
  lickitung: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details: 'Ruines Brumeuses, Hameau Diamant (alentours) · Mégapparitions',
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche, Source Panora-Neige · Mégapparitions",
    },
  ],
  lilligant: [
    { region: 'Marais Carmin', details: 'Mégapparitions · En faisant évoluer Chlorobule' },
  ],
  lopunny: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Forêt Lointaine (alentours) · Mégapparitions',
      alphas: ['Forêt Lointaine (niv. 40)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Terres Immaculées',
      details: 'Étendue Polaire, Source Panora-Neige · Mégapparitions',
    },
  ],
  lucario: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Source Panora-Neige · Mégapparitions",
      alphas: ["Chute d'Oglacé"],
    },
  ],
  lumineon: [
    {
      region: 'Côte Lazuli',
      details: 'Havre des Algues et alentours · Mégapparitions',
      alphas: ['Havre des Algues'],
    },
  ],
  luxio: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Champ Flora, Tunnel de Fer (alentours), Plaine Littorella, Lac Vérité · Mégapparitions',
      alphas: ['Champ Flora (niv. 40)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité, Sentier des Pèlerins, Parvis des Prières, Passage des Nuages · Mégapparitions",
    },
  ],
  luxray: [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella, Lac Vérité · Mégapparitions' },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité, Sentier des Pèlerins, Parvis des Prières, Passage des Nuages · Mégapparitions",
      alphas: ['Parvis des Prières'],
    },
  ],
  machamp: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Sentier de l'Arène · Mégapparitions",
      alphas: ["Sentier de l'Arène"],
    },
  ],
  machoke: [
    { region: 'Plaines Obsidiennes', details: "Chute d'Obsidienne (alentours)" },
    {
      region: 'Côte Lazuli',
      details: "Plage Ginkgo (alentours), Plage de l'Errance",
      alphas: ['Plage Ginkgo'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Mont des Gringoles, Passage des Nuages (alentours) · Mégapparitions',
    },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Sentier de l'Arène, Source Panora-Neige · Mégapparitions",
    },
  ],
  machop: [
    { region: 'Plaines Obsidiennes', details: "Tunnel de Fer, Chute d'Obsidienne (alentours)" },
    { region: 'Côte Lazuli', details: "Plage Ginkgo (alentours), Plage de l'Errance" },
    {
      region: 'Contrefort Couronné',
      details: 'Mont des Gringoles, Passage des Nuages (alentours) · Mégapparitions',
    },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Sentier de l'Arène, Source Panora-Neige · Mégapparitions",
    },
  ],
  magby: [{ region: 'Côte Lazuli', details: 'Île Crache-Feu · Mégapparitions' }],
  magikarp: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Pont Rocheux (apparitions massives), Tunnel de Fer (alentours), Chute d'Obsidienne, Lac Vérité",
      alphas: ['Tunnel de Fer'],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Sentier Céleste (alentours)' },
  ],
  magmar: [
    { region: 'Côte Lazuli', details: 'Île Crache-Feu · Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  magmortar: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  magnemite: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' }],
  magneton: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' }],
  magnezone: [
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles (rare)' },
    {
      region: 'Contrefort Couronné',
      details:
        'En vol : Falaise Calade (alentours), Sentier Céleste (alentours), Source Féérique (alentours) · Distorsions spatio-temporelles',
    },
  ],
  mamoswine: [
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche (apparitions massives), Glacier Séracrawl · Mégapparitions",
      alphas: ['Glacier Séracrawl'],
    },
  ],
  manaphy: [{ region: 'Côte Lazuli', details: 'Creux du Cap (un seul)' }],
  mantine: [
    { region: 'Côte Lazuli', details: 'Baie Sérénité · Mégapparitions', alphas: ['Baie Sérénité'] },
  ],
  mantyke: [
    {
      region: 'Côte Lazuli',
      details:
        "Plage Ginkgo (alentours), Mont des Capumain (alentours), Lagune des Bains (alentours), Baie Sérénité, Plage de l'Errance (alentours) · Mégapparitions",
    },
  ],
  mesprit: [{ region: 'Plaines Obsidiennes', details: 'Caverne Vérité (un seul) · niv. 70' }],
  'mime-jr': [
    { region: 'Plaines Obsidiennes', details: 'Val Ferrache, Plaine Littorella · Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
  ],
  misdreavus: [
    {
      region: 'Contrefort Couronné',
      details:
        'La nuit : Temple Céleste (alentours), Parvis des Prières (aussi en apparitions massives à proximité), Col Pierlevé · Mégapparitions',
    },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche et alentours (aussi en apparitions massives, la nuit), Terrasse du Glacier (alentours), Souterrain de Givre, Chambre des Piliers · Mégapparitions",
    },
  ],
  mismagius: [
    {
      region: 'Contrefort Couronné',
      details: 'Col Pierlevé (la nuit) · Mégapparitions',
      alphas: ['Col Pierlevé'],
    },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  monferno: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plateau Cer-Mont, Île Rosa Rugosa · Mégapparitions',
    },
  ],
  mothim: [
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité' },
    {
      region: 'Côte Lazuli',
      details:
        'Coteau du Passage (alentours), Mont des Capumain, Chemin de la Source, Cap du Voile, Île Crache-Feu (alentours)',
      alphas: ['Chemin de la Source'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Forêt des Égarés, Ancienne Carrière (alentours)',
      alphas: ['Forêt des Égarés'],
    },
  ],
  'mr-mime': [
    { region: 'Plaines Obsidiennes', details: 'Plaine Littorella · Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
  ],
  munchlax: [
    { region: 'Plaines Obsidiennes', details: 'Sentier Cer-Mont · Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Source Panora-Neige' },
  ],
  murkrow: [
    {
      region: 'Marais Carmin',
      details:
        'Col Mer-de-Nuages (aussi en apparitions massives à proximité, la nuit) · Mégapparitions',
    },
    {
      region: 'Côte Lazuli',
      details:
        "La nuit : Coteau du Passage, Plage Ginkgo, Mont des Capumain, Lagune des Bains, Crique Paisible, Plage de l'Errance, Bois Brise-Vent, Chemin de la Source, Plage Long-des-Îles, Cap du Voile",
    },
  ],
  ninetales: [
    {
      region: 'Côte Lazuli',
      details: 'Île Crache-Feu · Mégapparitions',
      alphas: ['Île Crache-Feu'],
    },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  nosepass: [
    {
      region: 'Contrefort Couronné',
      details: 'Temple Céleste, Grotte Préhistorique et alentours · Mégapparitions',
    },
  ],
  octillery: [
    {
      region: 'Côte Lazuli',
      details:
        "Plage de l'Errance (aussi en apparitions massives), Plage Long-des-Îles (alentours), Creux du Cap (après avoir capturé Manaphy pendant la requête 66)",
      alphas: ["Plage de l'Errance"],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  onix: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details:
        'Marais Carlate (alentours), Hameau Diamant (alentours), Lac Courage (alentours) · Mégapparitions',
      alphas: ['Hameau Diamant'],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Sentier Céleste' },
  ],
  oshawott: [
    { region: 'Rusti-Cité', details: 'Pokémon de départ, offert au Siège du Groupe Galaxie' },
    {
      region: 'Terres Immaculées',
      details: 'Distorsions spatio-temporelles (après la mission 18)',
    },
  ],
  overqwil: [
    { region: 'Plaines Obsidiennes', details: 'En faisant évoluer Qwilfish de Hisui' },
    {
      region: 'Marais Carmin',
      details: 'Lac Courage (un seul, pendant la mission 15)',
      alphas: ['Lac Courage'],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions · En faisant évoluer Qwilfish de Hisui' },
  ],
  pachirisu: [
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée (alentours, aussi en apparitions massives), Lande Herbacoton · Mégapparitions',
      alphas: ['Marais Bouchebée'],
    },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  palkia: [{ region: 'Contrefort Couronné', details: 'Temple de Sinnoh (un seul) · niv. 65' }],
  paras: [
    { region: 'Plaines Obsidiennes', details: 'Cellier Champêtre · Mégapparitions' },
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or, Arène Ursa (alentours), Col Mer-de-Nuages (alentours), Lisière du Hameau, Lande Herbacoton (alentours), Champ Bourdonne · Mégapparitions",
    },
    { region: 'Côte Lazuli', details: 'Bois Brise-Vent (alentours)' },
    { region: 'Contrefort Couronné', details: "Hauts de l'Humilité, Forêt des Égarés" },
  ],
  parasect: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Cellier Champêtre (alentours, aussi en apparitions massives) · Mégapparitions',
      alphas: ['Cellier Champêtre (niv. 30)'],
    },
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or, Arène Ursa (alentours), Col Mer-de-Nuages (alentours), Lisière du Hameau, Lande Herbacoton (alentours), Champ Bourdonne · Mégapparitions",
    },
    { region: 'Côte Lazuli', details: 'Bois Brise-Vent' },
    { region: 'Contrefort Couronné', details: "Hauts de l'Humilité, Forêt des Égarés" },
  ],
  petilil: [
    { region: 'Marais Carmin', details: "Île de l'Épreuve, Lande Herbacoton · Mégapparitions" },
  ],
  phione: [
    {
      region: 'Côte Lazuli',
      details:
        'Creux du Cap (trois pendant la requête 66, puis sans limite après avoir capturé Manaphy)',
    },
  ],
  pichu: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Colline Ambition (alentours), Champ Flora, Cellier Champêtre (le jour) · Mégapparitions',
    },
    { region: 'Marais Carmin', details: "Plaine d'Or (alentours)" },
  ],
  pikachu: [
    { region: 'Plaines Obsidiennes', details: 'Cellier Champêtre · Mégapparitions' },
    { region: 'Marais Carmin', details: "Plaine d'Or (alentours)" },
    { region: 'Côte Lazuli', details: 'Bois Brise-Vent' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  piloswine: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Étendue Polaire, Sentier de l'Arène et alentours, Glacier Séracrawl · Mégapparitions",
      alphas: ["Sentier de l'Arène"],
    },
  ],
  piplup: [
    {
      region: 'Côte Lazuli',
      details:
        'Chemin de la Source (alentours), Plage Long-des-Îles (alentours, apparitions massives) · Mégapparitions',
    },
  ],
  ponyta: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Val Ferrache (un chromatique en plus, un seul pendant la requête 19) · Mégapparitions',
    },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
  ],
  porygon: [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' }],
  'porygon-z': [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' }],
  porygon2: [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' }],
  prinplup: [
    {
      region: 'Côte Lazuli',
      details:
        'Chemin de la Source (alentours), Plage Long-des-Îles (alentours, apparitions massives) · Mégapparitions',
    },
  ],
  probopass: [
    {
      region: 'Contrefort Couronné',
      details: 'Grotte Préhistorique (alentours) · Mégapparitions',
      alphas: ['Grotte Préhistorique'],
    },
  ],
  psyduck: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine' },
    {
      region: 'Marais Carmin',
      details: "Plaine d'Or, Marais Bouchebée, Île de l'Épreuve · Mégapparitions",
    },
    { region: 'Côte Lazuli', details: 'Lagune des Bains · Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Forêt des Égarés, Source Reculée' },
  ],
  purugly: [
    {
      region: 'Côte Lazuli',
      details: 'Coteau du Passage, Cap du Voile (aussi en apparitions massives) · Mégapparitions',
      alphas: ['Cap du Voile'],
    },
    { region: 'Terres Immaculées', details: 'Terrasse du Glacier (alentours) · Mégapparitions' },
  ],
  quilava: [
    {
      region: 'Marais Carmin',
      details:
        'Distorsions spatio-temporelles (après la mission 18) · Mégapparitions (après la requête 102)',
    },
  ],
  qwilfish: [
    { region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa (alentours)' },
    {
      region: 'Côte Lazuli',
      details:
        "Lagune des Bains (alentours), Crique Paisible (alentours), Presqu'île Tombolo (alentours), Main de Sable (alentours), Baie Sérénité, Plage Long-des-Îles et alentours, Arche Poissigrand, Havre des Algues (alentours), Île Crache-Feu (alentours) · Mégapparitions",
      alphas: ['Plage Long-des-Îles'],
    },
  ],
  raichu: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    { region: 'Marais Carmin', details: "Plaine d'Or", alphas: ["Plaine d'Or"] },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  ralts: [
    { region: 'Marais Carmin', details: 'Marais Bouchebée, Ruines Brumeuses' },
    {
      region: 'Terres Immaculées',
      details:
        'Rocher Esprit (le jour), Lac Savoir (apparitions massives), Temple de Frimapic · Mégapparitions',
    },
  ],
  rampardos: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  rapidash: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Val Ferrache (aussi en apparitions massives) · Mégapparitions',
      alphas: ['Val Ferrache (niv. 40)'],
    },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  regigigas: [{ region: 'Terres Immaculées', details: 'Temple de Frimapic (un seul) · niv. 70' }],
  remoraid: [
    {
      region: 'Côte Lazuli',
      details:
        "Lagune des Bains (alentours), Crique Paisible (alentours), Rive des Revenants (alentours), Presqu'île Tombolo (alentours), Main de Sable, Baie Sérénité, Plage de l'Errance (alentours)",
    },
  ],
  rhydon: [
    { region: 'Marais Carmin', details: 'Pente des Gringoles · Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste, Parvis des Prières · Mégapparitions',
    },
  ],
  rhyhorn: [
    {
      region: 'Marais Carmin',
      details: 'Ruines Brumeuses, Lisière du Hameau, Pente des Gringoles · Mégapparitions',
      alphas: ['Lisière du Hameau'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste, Parvis des Prières · Mégapparitions',
    },
  ],
  rhyperior: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Parvis des Prières (alentours) · Mégapparitions',
      alphas: ['Parvis des Prières'],
    },
  ],
  riolu: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Source Panora-Neige · Mégapparitions",
    },
  ],
  roselia: [
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée, Col Mer-de-Nuages et alentours, Lande Herbacoton (alentours) · Mégapparitions',
    },
    { region: 'Contrefort Couronné', details: 'Source Féérique' },
  ],
  roserade: [
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages (le jour) · Mégapparitions',
      alphas: ['Col Mer-de-Nuages'],
    },
  ],
  rotom: [
    {
      region: 'Contrefort Couronné',
      details:
        'Temple Céleste (dans des caisses), Parvis des Prières (dans des caisses), Col Pierlevé',
    },
  ],
  rowlet: [
    { region: 'Rusti-Cité', details: 'Pokémon de départ, offert au Siège du Groupe Galaxie' },
    {
      region: 'Contrefort Couronné',
      details:
        'Distorsions spatio-temporelles (après la mission 18) · Mégapparitions (après la requête 102)',
    },
  ],
  rufflet: [
    {
      region: 'Terres Immaculées',
      details:
        'Glacier Séracrawl (alentours), Rocher Esprit, Lac Savoir, Hameau Perle (alentours) · Mégapparitions',
    },
  ],
  samurott: [
    {
      region: 'Terres Immaculées',
      details:
        'Distorsions spatio-temporelles (après la mission 18) · Mégapparitions (après la requête 102)',
    },
  ],
  scizor: [{ region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' }],
  scyther: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Forêt Lointaine, Arène du Grand Arbre · Mégapparitions',
      alphas: ['Arène du Grand Arbre (niv. 42)'],
    },
    { region: 'Contrefort Couronné', details: 'Grotte Préhistorique (alentours)' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  sealeo: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Crique Paisible, Plage Long-des-Îles · Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  shaymin: [
    {
      region: 'Plaines Obsidiennes',
      details: "Champ Flora (un seul, avec une sauvegarde d'Épée ou Bouclier)",
    },
  ],
  shellos: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Mer Occident : Île Rosa Rugosa, Plaine Littorella · Mégapparitions',
    },
    {
      region: 'Côte Lazuli',
      details: 'Mer Orient : Baie Sérénité, Havre des Algues · Mégapparitions',
    },
  ],
  shieldon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  shinx: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Colline Ambition (alentours), Champ Flora (alentours), Plateau Cer-Mont, Tunnel de Fer (alentours) · Mégapparitions',
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier des Pèlerins, Parvis des Prières · Mégapparitions',
    },
  ],
  silcoon: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Le jour : Champ Flora, Val Ferrache, Forêt Lointaine · Mégapparitions',
      alphas: ['Val Ferrache'],
    },
  ],
  skorupi: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    { region: 'Côte Lazuli', details: "Plage Ginkgo, Plage de l'Errance · Mégapparitions" },
  ],
  skuntank: [
    {
      region: 'Marais Carmin',
      details: 'Marais Carlate · Mégapparitions',
      alphas: ['Marais Carlate'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours), Sentier Céleste (alentours) · Mégapparitions',
    },
  ],
  sliggoo: [
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve, Arène Ursa (apparitions massives) · Mégapparitions",
      alphas: ["Île de l'Épreuve"],
    },
    { region: 'Contrefort Couronné', details: 'Ancienne Carrière (alentours)' },
  ],
  sneasel: [
    { region: 'Plaines Obsidiennes', details: 'Forme classique : distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details:
        'Forme de Hisui : Sentier Céleste (alentours), Grotte Préhistorique (alentours) · Mégapparitions',
    },
    {
      region: 'Terres Immaculées',
      details:
        'Glacier Séracrawl (alentours), Terrasse du Glacier, Hameau Perle (alentours, forme de Hisui)',
      alphas: ['Glacier Séracrawl'],
    },
  ],
  sneasler: [
    { region: 'Plaines Obsidiennes', details: 'En faisant évoluer Farfuret de Hisui' },
    {
      region: 'Contrefort Couronné',
      details: 'Mégapparitions · En faisant évoluer Farfuret de Hisui',
    },
    { region: 'Terres Immaculées', details: 'En faisant évoluer Farfuret de Hisui' },
  ],
  snorlax: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plaine Littorella (alentours) · Mégapparitions',
      alphas: ['Plaine Littorella (niv. 45)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Source Panora-Neige' },
  ],
  snorunt: [
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Vallée Enneigée, Étendue Polaire, Hameau Perle (alentours) · Mégapparitions",
    },
  ],
  snover: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Étendue Polaire, Sentier de l'Arène (alentours), Glacier Séracrawl (alentours), Terrasse du Glacier · Mégapparitions",
    },
  ],
  spheal: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Plage Ginkgo, Crique Paisible · Mégapparitions' },
  ],
  spiritomb: [
    {
      region: 'Marais Carmin',
      details: 'Ruines Brumeuses · Mégapparitions (après la requête 22)',
      alphas: ['Ruines Brumeuses'],
    },
  ],
  stantler: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plateau Cer-Mont · Mégapparitions',
      alphas: ['Plateau Cer-Mont (niv. 42)'],
    },
    { region: 'Côte Lazuli', details: 'Bois Brise-Vent' },
    { region: 'Contrefort Couronné', details: 'Forêt des Égarés, Terrasse du Glacier (alentours)' },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage (lieu précis non répertorié)' },
  ],
  staraptor: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Cellier Champêtre (alentours, en vol), Lac Vérité (alentours, aussi en apparitions massives, le jour) · Mégapparitions',
    },
    {
      region: 'Côte Lazuli',
      details:
        "Rive des Revenants (le jour), Baie Sérénité (le jour), Plage de l'Errance (alentours, en vol), Chemin de la Source (le jour) · Mégapparitions",
    },
  ],
  staravia: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Le jour : Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Chute d'Obsidienne (alentours), Île Rosa Rugosa, Plaine Littorella (apparitions massives à proximité) · Mégapparitions",
      alphas: ['Rive Filevent (niv. 32)'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Le jour : Coteau du Passage, Lagune des Bains, Rive des Revenants (aussi en apparitions massives), Main de Sable, Baie Sérénité, Plage de l'Errance (alentours) · Mégapparitions",
    },
  ],
  starly: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Le jour : Colline Ambition, Val Ferrache, Pont Rocheux (alentours), Sentier Cer-Mont, Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Chute d'Obsidienne (alentours), Île Rosa Rugosa · Mégapparitions",
    },
    {
      region: 'Côte Lazuli',
      details:
        "Le jour : Coteau du Passage, Lagune des Bains, Rive des Revenants, Main de Sable, Baie Sérénité, Plage de l'Errance (alentours) · Mégapparitions",
    },
  ],
  steelix: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste · Mégapparitions',
      alphas: ['Sentier Céleste'],
    },
  ],
  stunky: [
    { region: 'Marais Carmin', details: 'Marais Carlate · Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours), Sentier Céleste (alentours) · Mégapparitions',
    },
  ],
  sudowoodo: [
    { region: 'Marais Carmin', details: 'Col Mer-de-Nuages et alentours · Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Temple Céleste et alentours' },
  ],
  swinub: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Étendue Polaire, Sentier de l'Arène (alentours), Glacier Séracrawl · Mégapparitions",
      alphas: ['Étendue Polaire'],
    },
  ],
  sylveon: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  tangela: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée et alentours, Lande Herbacoton (alentours) · Mégapparitions',
    },
    { region: 'Côte Lazuli', details: 'Coteau du Passage (alentours)' },
  ],
  tangrowth: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée (aussi en apparitions massives à proximité) · Mégapparitions',
      alphas: ['Marais Bouchebée'],
    },
    { region: 'Côte Lazuli', details: 'Coteau du Passage (alentours, apparitions massives)' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  teddiursa: [
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or (alentours, apparitions massives), Arène Ursa, Champ Bourdonne (alentours) · Mégapparitions",
    },
    { region: 'Contrefort Couronné', details: 'Sentier des Pèlerins' },
  ],
  tentacool: [
    {
      region: 'Côte Lazuli',
      details:
        'Plage Long-des-Îles (alentours), Arche Poissigrand, Havre des Algues · Mégapparitions',
    },
  ],
  tentacruel: [
    {
      region: 'Côte Lazuli',
      details:
        'Plage Long-des-Îles (alentours), Arche Poissigrand, Havre des Algues · Mégapparitions',
      alphas: ['Arche Poissigrand'],
    },
  ],
  thundurus: [
    {
      region: 'Côte Lazuli',
      details: "Entre Main de Sable et Arche Poissigrand (un seul, par temps d'orage)",
    },
  ],
  togekiss: [
    { region: 'Plaines Obsidiennes', details: 'Lac Vérité (en vol)' },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
  ],
  togepi: [
    { region: 'Marais Carmin', details: 'Lande Herbacoton' },
    {
      region: 'Côte Lazuli',
      details:
        'Le jour : Lagune des Bains (aussi en apparitions massives), Baie Sérénité · Mégapparitions',
    },
  ],
  togetic: [
    {
      region: 'Marais Carmin',
      details: 'En vol : Pente des Gringoles (alentours), Lande Herbacoton (alentours)',
    },
    { region: 'Côte Lazuli', details: 'Baie Sérénité (le jour) · Mégapparitions' },
  ],
  tornadus: [{ region: 'Terres Immaculées', details: 'Étendue Polaire (un seul, par blizzard)' }],
  torterra: [
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve · Mégapparitions",
      alphas: ["Île de l'Épreuve"],
    },
  ],
  toxicroak: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve · Mégapparitions",
      alphas: ["Île de l'Épreuve"],
    },
    { region: 'Côte Lazuli', details: 'Chemin de la Source' },
    { region: 'Contrefort Couronné', details: 'Ancienne Carrière (alentours)' },
  ],
  turtwig: [{ region: 'Marais Carmin', details: 'Champ Bourdonne (alentours) · Mégapparitions' }],
  typhlosion: [
    {
      region: 'Marais Carmin',
      details:
        'Distorsions spatio-temporelles (après la mission 18) · Mégapparitions (après la requête 102)',
    },
  ],
  umbreon: [{ region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' }],
  unown: [
    {
      region: 'Marais Carmin',
      details:
        'Ruines Bonvivre · Mégapparitions (les 28 formes, après avoir complété les notes de recherche sur les Zarbi)',
    },
  ],
  ursaluna: [
    { region: 'Plaines Obsidiennes', details: 'En faisant évoluer Ursaring' },
    { region: 'Marais Carmin', details: 'Mégapparitions · En faisant évoluer Ursaring' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Ursaring' },
  ],
  ursaring: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée (alentours), Arène Ursa, Champ Bourdonne (alentours) · Mégapparitions',
      alphas: ['Marais Bouchebée', 'Arène Ursa'],
    },
    { region: 'Contrefort Couronné', details: 'Sentier des Pèlerins' },
  ],
  uxie: [{ region: 'Terres Immaculées', details: 'Caverne Savoir (un seul) · niv. 70' }],
  vaporeon: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' }],
  vespiquen: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Bocage Agité (un seul, pendant la mission 20)',
      alphas: ['Bocage Agité'],
    },
    {
      region: 'Marais Carmin',
      details: 'Lande Herbacoton (alentours), Champ Bourdonne (alentours), Lac Courage (alentours)',
      alphas: ['Lande Herbacoton'],
    },
  ],
  voltorb: [
    {
      region: 'Contrefort Couronné',
      details:
        'Temple Céleste (dans des caisses), Parvis des Prières (aussi dans des caisses) · Mégapparitions',
    },
  ],
  vulpix: [
    { region: 'Côte Lazuli', details: 'Cap du Voile · Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  walrein: [
    {
      region: 'Côte Lazuli',
      details:
        'Plage Ginkgo, Crique Paisible (apparitions massives), Plage Long-des-Îles · Mégapparitions',
      alphas: ['Plage Ginkgo'],
    },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  weavile: [{ region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' }],
  whiscash: [
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée et alentours, Arène Ursa (alentours), Marais Carlate (apparitions massives), Champ Bourdonne (alentours), Lac Courage · Mégapparitions',
      alphas: ['Lac Courage'],
    },
    { region: 'Contrefort Couronné', details: 'Grotte des Égarés' },
  ],
  wormadam: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Cape Plante, arbres qui tremblent : Champ Flora (alentours), Bocage Agité, Plaine Littorella, Lac Vérité',
    },
    {
      region: 'Marais Carmin',
      details:
        "Cape Sable, arbres qui tremblent : Plaine d'Or (alentours), Marais Bouchebée (alentours)",
    },
    {
      region: 'Côte Lazuli',
      details:
        "Cape Déchet, arbres qui tremblent : Coteau du Passage, Plage Ginkgo, Mont des Capumain, Lagune des Bains, Crique Paisible, Rive des Revenants (alentours), Presqu'île Tombolo, Main de Sable, Baie Sérénité, Plage de l'Errance, Bois Brise-Vent, Chemin de la Source, Plage Long-des-Îles (alentours), Cap du Voile, Arche Poissigrand, Havre des Algues, Île Crache-Feu (alentours)",
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Cape Sable, arbres qui tremblent : Hauts de l'Humilité, Ancienne Carrière (alentours), Falaise Calade, Temple Céleste, Sentier Céleste (alentours), Parvis des Prières, Col Pierlevé, Source Féérique, Passage des Nuages",
    },
    {
      region: 'Terres Immaculées',
      details:
        "Cape Déchet, arbres qui tremblent : Pente de l'Avalanche, Vallée Enneigée, Étendue Polaire, Chute d'Oglacé, Sentier de l'Arène, Glacier Séracrawl (alentours), Terrasse du Glacier, Rocher Esprit, Lac Savoir, Hameau Perle (alentours)",
    },
  ],
  wurmple: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Colline Ambition (alentours), Champ Flora, Val Ferrache, Forêt Lointaine · Mégapparitions',
    },
  ],
  wyrdeer: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions · En faisant évoluer Cerfrousse' },
    { region: 'Côte Lazuli', details: 'En faisant évoluer Cerfrousse' },
    { region: 'Contrefort Couronné', details: 'En faisant évoluer Cerfrousse' },
    { region: 'Terres Immaculées', details: 'En faisant évoluer Cerfrousse' },
  ],
  yanma: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Arène Ursa, Champ Bourdonne · Mégapparitions',
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité (le jour), Hauts de l'Humilité (apparitions massives) · Mégapparitions",
    },
  ],
  yanmega: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée (apparitions massives), Champ Bourdonne · Mégapparitions',
      alphas: ['Champ Bourdonne'],
    },
    {
      region: 'Contrefort Couronné',
      details: "Hauts de l'Humilité (aussi en apparitions massives, le jour) · Mégapparitions",
    },
  ],
  zoroark: [
    {
      region: 'Terres Immaculées',
      details:
        'Glacier Séracrawl (alentours, apparitions massives), Terrasse du Glacier (alentours), Souterrain de Givre, Lac Savoir (un seul, pendant la mission 16) · Mégapparitions',
      alphas: ['Lac Savoir (niv. 58)'],
    },
  ],
  zorua: [
    {
      region: 'Terres Immaculées',
      details:
        'Glacier Séracrawl (alentours, apparitions massives), Terrasse du Glacier (alentours), Souterrain de Givre · Mégapparitions',
    },
  ],
  zubat: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "La nuit : Pont Rocheux, Sentier Cer-Mont, Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Forêt Lointaine, Tunnel de Fer, Chute d'Obsidienne (alentours) · Mégapparitions",
    },
    {
      region: 'Marais Carmin',
      details:
        'La nuit : Col Mer-de-Nuages, Hameau Diamant (alentours), Lisière du Hameau, Pente des Gringoles',
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité (la nuit), Forêt des Égarés (la nuit), Grotte des Égarés, Ancienne Carrière (alentours, la nuit)",
    },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic' },
  ],
}
