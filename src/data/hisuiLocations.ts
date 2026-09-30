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
  // Sous-zones où on le trouve (filtre Lieu de l'index), Barons compris.
  places?: string[]
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
      places: ['Étendue Polaire', "Sentier de l'Arène", 'Glacier Séracrawl', 'Terrasse du Glacier'],
      alphas: ['Étendue Polaire'],
    },
  ],
  abra: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Rive Filevent, Plaine Littorella · Mégapparitions',
      places: ['Rive Filevent', 'Plaine Littorella'],
    },
    { region: 'Terres Immaculées', details: 'Lac Savoir · Mégapparitions', places: ['Lac Savoir'] },
  ],
  aipom: [
    { region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa', places: ['Île Rosa Rugosa'] },
    {
      region: 'Côte Lazuli',
      details:
        'Mont des Capumain (aussi dans les arbres qui tremblent), Crique Paisible · Mégapparitions',
      places: ['Mont des Capumain', 'Crique Paisible'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Vallée Enneigée, Étendue Polaire, Chute d'Oglacé (alentours), Sentier de l'Arène (alentours), Glacier Séracrawl (alentours), Source Panora-Neige, Terrasse du Glacier, Rocher Esprit, Hameau Perle (alentours) · Mégapparitions",
      places: [
        "Pente de l'Avalanche",
        'Vallée Enneigée',
        'Étendue Polaire',
        "Chute d'Oglacé",
        "Sentier de l'Arène",
        'Glacier Séracrawl',
        'Source Panora-Neige',
        'Terrasse du Glacier',
        'Rocher Esprit',
        'Hameau Perle',
      ],
    },
  ],
  alakazam: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plaine Littorella · Mégapparitions',
      places: ['Plaine Littorella'],
      alphas: ['Plaine Littorella (niv. 60)'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Lac Savoir · Mégapparitions', places: ['Lac Savoir'] },
  ],
  ambipom: [
    {
      region: 'Côte Lazuli',
      details: 'Mont des Capumain, Crique Paisible · Mégapparitions',
      places: ['Mont des Capumain', 'Crique Paisible'],
      alphas: ['Crique Paisible'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Chute d'Oglacé (alentours), Sentier de l'Arène (alentours), Glacier Séracrawl (alentours), Rocher Esprit · Mégapparitions",
      places: [
        "Pente de l'Avalanche",
        "Chute d'Oglacé",
        "Sentier de l'Arène",
        'Glacier Séracrawl',
        'Rocher Esprit',
      ],
    },
  ],
  arcanine: [
    { region: 'Côte Lazuli', details: 'Mégapparitions · En faisant évoluer Caninos de Hisui' },
  ],
  arceus: [
    {
      region: 'Contrefort Couronné',
      details: 'Salle Originelle (un seul) · niv. 75',
      places: ['Salle Originelle'],
    },
  ],
  avalugg: [
    {
      region: 'Terres Immaculées',
      details: 'Glacier Séracrawl · Mégapparitions',
      places: ['Glacier Séracrawl'],
    },
  ],
  azelf: [
    {
      region: 'Marais Carmin',
      details: 'Caverne Courage (un seul) · niv. 70',
      places: ['Caverne Courage'],
    },
  ],
  barboach: [
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée et alentours, Arène Ursa (alentours), Champ Bourdonne (alentours), Lac Courage · Mégapparitions',
      places: ['Marais Bouchebée', 'Arène Ursa', 'Champ Bourdonne', 'Lac Courage'],
    },
    { region: 'Contrefort Couronné', details: 'Grotte des Égarés', places: ['Grotte des Égarés'] },
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
      places: ['Baie Sérénité', 'Plage Long-des-Îles', 'Île Crache-Feu'],
    },
    { region: 'Contrefort Couronné', details: 'Source Féérique', places: ['Source Féérique'] },
    {
      region: 'Terres Immaculées',
      details: 'Glacier Séracrawl (alentours), Rocher Esprit, Lac Savoir, Hameau Perle (alentours)',
      places: ['Glacier Séracrawl', 'Rocher Esprit', 'Lac Savoir', 'Hameau Perle'],
    },
  ],
  bastiodon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  beautifly: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Le jour : Champ Flora, Bocage Agité, Forêt Lointaine · Mégapparitions',
      places: ['Champ Flora', 'Bocage Agité', 'Forêt Lointaine'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Le jour : Lagune des Bains, Cap du Voile',
      places: ['Lagune des Bains', 'Cap du Voile'],
    },
  ],
  bergmite: [
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche (alentours), Vallée Enneigée (alentours), Étendue Polaire, Sentier de l'Arène, Glacier Séracrawl, Terrasse du Glacier (alentours), Voie de Glace, Souterrain de Givre, Chambre des Piliers · Mégapparitions",
      places: [
        "Pente de l'Avalanche",
        'Vallée Enneigée',
        'Étendue Polaire',
        "Sentier de l'Arène",
        'Glacier Séracrawl',
        'Terrasse du Glacier',
        'Voie de Glace',
        'Souterrain de Givre',
        'Chambre des Piliers',
      ],
    },
  ],
  bibarel: [
    {
      region: 'Plaines Obsidiennes',
      details: "Digue de l'Estuaire et alentours · Mégapparitions",
      places: ["Digue de l'Estuaire"],
      alphas: ["Digue de l'Estuaire (niv. 16)"],
    },
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Arène Ursa (alentours), Champ Bourdonne',
      places: ['Marais Bouchebée', 'Arène Ursa', 'Champ Bourdonne'],
    },
    { region: 'Côte Lazuli', details: 'Chemin de la Source', places: ['Chemin de la Source'] },
    {
      region: 'Terres Immaculées',
      details: 'Glacier Séracrawl et alentours, Terrasse du Glacier (alentours) · Mégapparitions',
      places: ['Glacier Séracrawl', 'Terrasse du Glacier'],
    },
  ],
  bidoof: [
    {
      region: 'Plaines Obsidiennes',
      details: "Colline Ambition, Val Ferrache, Digue de l'Estuaire et alentours · Mégapparitions",
      places: ['Colline Ambition', 'Val Ferrache', "Digue de l'Estuaire"],
    },
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Arène Ursa (alentours), Champ Bourdonne',
      places: ['Marais Bouchebée', 'Arène Ursa', 'Champ Bourdonne'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Glacier Séracrawl (alentours), Terrasse du Glacier (alentours) · Mégapparitions',
      places: ['Glacier Séracrawl', 'Terrasse du Glacier'],
    },
  ],
  blissey: [
    {
      region: 'Plaines Obsidiennes',
      details: "Chute d'Obsidienne (alentours)",
      places: ["Chute d'Obsidienne"],
      alphas: ["Chute d'Obsidienne (niv. 62)"],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche",
      places: ["Pente de l'Avalanche"],
    },
  ],
  bonsly: [
    {
      region: 'Marais Carmin',
      details:
        'Lisière du Hameau (gisements qui tremblent), Col Mer-de-Nuages et alentours · Mégapparitions',
      places: ['Lisière du Hameau', 'Col Mer-de-Nuages'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'Temple Céleste (gisements qui tremblent), Temple Céleste (alentours, apparitions massives)',
      places: ['Temple Céleste'],
    },
  ],
  braviary: [
    {
      region: 'Terres Immaculées',
      details: 'Lac Savoir (alentours, aussi en apparitions massives, en vol) · Mégapparitions',
      places: ['Lac Savoir'],
    },
  ],
  bronzong: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière, Falaise Calade (alentours), Temple Céleste (alentours), Grotte Préhistorique (alentours), Col Pierlevé (le jour) · Mégapparitions',
      places: [
        'Ancienne Carrière',
        'Falaise Calade',
        'Temple Céleste',
        'Grotte Préhistorique',
        'Col Pierlevé',
      ],
      alphas: ['Falaise Calade'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Lac Savoir, Temple de Frimapic · Mégapparitions',
      places: ['Lac Savoir', 'Temple de Frimapic'],
    },
  ],
  bronzor: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière, Falaise Calade (alentours), Temple Céleste (alentours), Grotte Préhistorique (alentours), Col Pierlevé (le jour) · Mégapparitions',
      places: [
        'Ancienne Carrière',
        'Falaise Calade',
        'Temple Céleste',
        'Grotte Préhistorique',
        'Col Pierlevé',
      ],
    },
    {
      region: 'Terres Immaculées',
      details: 'Lac Savoir, Temple de Frimapic · Mégapparitions',
      places: ['Lac Savoir', 'Temple de Frimapic'],
    },
  ],
  budew: [
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or (aussi en apparitions massives, le jour), Marais Bouchebée, Lande Herbacoton (alentours) · Mégapparitions",
      places: ["Plaine d'Or", 'Marais Bouchebée', 'Lande Herbacoton'],
    },
    { region: 'Contrefort Couronné', details: 'Source Féérique', places: ['Source Féérique'] },
  ],
  buizel: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Val Ferrache, Pont Rocheux (alentours), Rive Filevent · Mégapparitions',
      places: ['Val Ferrache', 'Pont Rocheux', 'Rive Filevent'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Plage Ginkgo, Mont des Capumain, Lagune des Bains',
      places: ['Plage Ginkgo', 'Mont des Capumain', 'Lagune des Bains'],
    },
  ],
  buneary: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Forêt Lointaine et alentours · Mégapparitions',
      places: ['Forêt Lointaine'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Étendue Polaire, Source Panora-Neige · Mégapparitions',
      places: ['Étendue Polaire', 'Source Panora-Neige'],
    },
  ],
  burmy: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Cape Plante, arbres qui tremblent : Bocage Agité, Pont Rocheux, Sentier Cer-Mont, Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Chute d'Obsidienne",
      places: [
        'Bocage Agité',
        'Pont Rocheux',
        'Sentier Cer-Mont',
        'Plateau Cer-Mont',
        'Rive Filevent',
        'Cellier Champêtre',
        "Digue de l'Estuaire",
        "Chute d'Obsidienne",
      ],
    },
    {
      region: 'Marais Carmin',
      details:
        "Cape Sable, arbres qui tremblent : Plaine d'Or, Marais Bouchebée, Île de l'Épreuve, Arène Ursa, Marais Carlate (alentours), Col Mer-de-Nuages (alentours), Ruines Brumeuses, Hameau Diamant (alentours), Lisière du Hameau (alentours), Pente des Gringoles, Lande Herbacoton, Champ Bourdonne, Lac Courage (alentours)",
      places: [
        "Plaine d'Or",
        'Marais Bouchebée',
        "Île de l'Épreuve",
        'Arène Ursa',
        'Marais Carlate',
        'Col Mer-de-Nuages',
        'Ruines Brumeuses',
        'Hameau Diamant',
        'Lisière du Hameau',
        'Pente des Gringoles',
        'Lande Herbacoton',
        'Champ Bourdonne',
        'Lac Courage',
      ],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Cape Déchet, arbres qui tremblent : Coteau du Passage, Plage Ginkgo, Mont des Capumain, Lagune des Bains, Crique Paisible, Rive des Revenants (alentours), Presqu'île Tombolo, Main de Sable, Baie Sérénité, Plage de l'Errance, Bois Brise-Vent (alentours), Chemin de la Source, Plage Long-des-Îles (alentours), Cap du Voile, Arche Poissigrand, Havre des Algues, Île Crache-Feu (alentours)",
      places: [
        'Coteau du Passage',
        'Plage Ginkgo',
        'Mont des Capumain',
        'Lagune des Bains',
        'Crique Paisible',
        'Rive des Revenants',
        "Presqu'île Tombolo",
        'Main de Sable',
        'Baie Sérénité',
        "Plage de l'Errance",
        'Bois Brise-Vent',
        'Chemin de la Source',
        'Plage Long-des-Îles',
        'Cap du Voile',
        'Arche Poissigrand',
        'Havre des Algues',
        'Île Crache-Feu',
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Cape Sable, arbres qui tremblent : Hauts de l'Humilité, Ancienne Carrière (alentours), Falaise Calade, Temple Céleste, Sentier Céleste (alentours), Parvis des Prières, Col Pierlevé, Source Féérique, Passage des Nuages",
      places: [
        "Hauts de l'Humilité",
        'Ancienne Carrière',
        'Falaise Calade',
        'Temple Céleste',
        'Sentier Céleste',
        'Parvis des Prières',
        'Col Pierlevé',
        'Source Féérique',
        'Passage des Nuages',
      ],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Cape Déchet, arbres qui tremblent : Pente de l'Avalanche, Vallée Enneigée, Étendue Polaire, Chute d'Oglacé, Sentier de l'Arène, Glacier Séracrawl (alentours), Terrasse du Glacier, Rocher Esprit, Lac Savoir, Hameau Perle (alentours)",
      places: [
        "Pente de l'Avalanche",
        'Vallée Enneigée',
        'Étendue Polaire',
        "Chute d'Oglacé",
        "Sentier de l'Arène",
        'Glacier Séracrawl',
        'Terrasse du Glacier',
        'Rocher Esprit',
        'Lac Savoir',
        'Hameau Perle',
      ],
    },
  ],
  carnivine: [
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or et alentours, Marais Bouchebée, Île de l'Épreuve, Col Mer-de-Nuages, Ruines Brumeuses, Hameau Diamant (alentours), Lande Herbacoton (alentours), Lac Courage (alentours) · Mégapparitions",
      places: [
        "Plaine d'Or",
        'Marais Bouchebée',
        "Île de l'Épreuve",
        'Col Mer-de-Nuages',
        'Ruines Brumeuses',
        'Hameau Diamant',
        'Lande Herbacoton',
        'Lac Courage',
      ],
      alphas: ['Lande Herbacoton'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Source Reculée',
      places: ['Source Reculée'],
      alphas: ['Source Reculée'],
    },
  ],
  cascoon: [
    {
      region: 'Plaines Obsidiennes',
      details: 'La nuit : Champ Flora, Val Ferrache, Forêt Lointaine · Mégapparitions',
      places: ['Champ Flora', 'Val Ferrache', 'Forêt Lointaine'],
    },
  ],
  chansey: [
    {
      region: 'Plaines Obsidiennes',
      details: "Val Ferrache (alentours, apparitions massives), Chute d'Obsidienne (alentours)",
      places: ['Val Ferrache', "Chute d'Obsidienne"],
    },
    {
      region: 'Marais Carmin',
      details: 'Lande Herbacoton (apparitions massives)',
      places: ['Lande Herbacoton'],
    },
    {
      region: 'Côte Lazuli',
      details: "Crique Paisible, Presqu'île Tombolo et alentours · Mégapparitions",
      places: ['Crique Paisible', "Presqu'île Tombolo"],
      alphas: ["Presqu'île Tombolo"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Source Reculée (apparitions massives)',
      places: ['Source Reculée'],
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche",
      places: ["Pente de l'Avalanche"],
    },
  ],
  chatot: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details: 'Rive des Revenants (aussi en apparitions massives, le jour) · Mégapparitions',
      places: ['Rive des Revenants'],
    },
  ],
  cherrim: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Forêt Lointaine (arbres qui tremblent)',
      places: ['Forêt Lointaine'],
    },
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée (arbres qui tremblent)',
      places: ['Marais Bouchebée'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'Arbres qui tremblent : Source Reculée, Grotte Préhistorique (alentours), Mont des Gringoles',
      places: ['Source Reculée', 'Grotte Préhistorique', 'Mont des Gringoles'],
    },
  ],
  cherubi: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Forêt Lointaine (apparitions massives)',
      places: ['Forêt Lointaine'],
    },
    { region: 'Marais Carmin', details: 'Rencontre sauvage (lieu précis non répertorié)' },
    { region: 'Contrefort Couronné', details: 'Rencontre sauvage (lieu précis non répertorié)' },
  ],
  chimchar: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Plateau Cer-Mont, Rive Filevent (un seul, pendant la requête 20), Île Rosa Rugosa · Mégapparitions',
      places: ['Plateau Cer-Mont', 'Rive Filevent', 'Île Rosa Rugosa'],
    },
  ],
  chimecho: [
    {
      region: 'Contrefort Couronné',
      details:
        'Sentier Céleste, Grotte Préhistorique (apparitions massives), Parvis des Prières · Mégapparitions',
      places: ['Sentier Céleste', 'Grotte Préhistorique', 'Parvis des Prières'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Lac Savoir',
      places: ['Lac Savoir'],
      alphas: ['Lac Savoir'],
    },
  ],
  chingling: [
    {
      region: 'Contrefort Couronné',
      details: 'Grotte Préhistorique (apparitions massives), Parvis des Prières · Mégapparitions',
      places: ['Grotte Préhistorique', 'Parvis des Prières'],
    },
    { region: 'Terres Immaculées', details: 'Lac Savoir', places: ['Lac Savoir'] },
  ],
  clefable: [
    {
      region: 'Contrefort Couronné',
      details: 'Source Féérique (la nuit) · Mégapparitions',
      places: ['Source Féérique'],
      alphas: ['Source Féérique'],
    },
  ],
  clefairy: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Source Féérique (la nuit) · Mégapparitions',
      places: ['Source Féérique'],
    },
  ],
  cleffa: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Source Féérique (la nuit) · Mégapparitions',
      places: ['Source Féérique'],
    },
  ],
  combee: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Bocage Agité, Forêt Lointaine (alentours), Tunnel de Fer (alentours)',
      places: ['Bocage Agité', 'Forêt Lointaine', 'Tunnel de Fer'],
    },
    {
      region: 'Marais Carmin',
      details:
        'Col Mer-de-Nuages, Lande Herbacoton (alentours), Champ Bourdonne (alentours), Lac Courage (alentours)',
      places: ['Col Mer-de-Nuages', 'Lande Herbacoton', 'Champ Bourdonne', 'Lac Courage'],
    },
    { region: 'Côte Lazuli', details: 'Mont des Capumain', places: ['Mont des Capumain'] },
  ],
  cranidos: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  cresselia: [
    {
      region: 'Contrefort Couronné',
      details: 'Arène de la Lune (un seul) · niv. 70',
      places: ['Arène de la Lune'],
    },
  ],
  croagunk: [
    {
      region: 'Marais Carmin',
      details:
        "Marais Bouchebée, Île de l'Épreuve, Plateau Tourbeux (alentours), Marais Carlate · Mégapparitions",
      places: ['Marais Bouchebée', "Île de l'Épreuve", 'Plateau Tourbeux', 'Marais Carlate'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours)',
      places: ['Ancienne Carrière'],
    },
  ],
  crobat: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Grotte des Égarés',
      places: ['Grotte des Égarés'],
      alphas: ['Grotte des Égarés'],
    },
    { region: 'Terres Immaculées', details: "Chute d'Oglacé (en vol)", places: ["Chute d'Oglacé"] },
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
      places: ['Falaise Calade'],
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
  dialga: [
    {
      region: 'Contrefort Couronné',
      details: 'Temple de Sinnoh (un seul) · niv. 65',
      places: ['Temple de Sinnoh'],
    },
  ],
  drapion: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details: "Plage Ginkgo, Plage de l'Errance (apparitions massives) · Mégapparitions",
      places: ['Plage Ginkgo', "Plage de l'Errance"],
      alphas: ['Plage Ginkgo'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  drifblim: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'La nuit : Île Rosa Rugosa, Plaine Littorella, Lac Vérité et alentours · Mégapparitions',
      places: ['Île Rosa Rugosa', 'Plaine Littorella', 'Lac Vérité'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Côte Lazuli',
      details:
        "La nuit : Coteau du Passage, Plage Ginkgo (alentours), Mont des Capumain (alentours), Lagune des Bains et alentours, Crique Paisible (alentours), Rive des Revenants, Presqu'île Tombolo (alentours), Main de Sable et alentours, Baie Sérénité, Plage de l'Errance (alentours), Plage Long-des-Îles (alentours, apparitions massives à proximité), Arche Poissigrand, Havre des Algues, Île Crache-Feu",
      places: [
        'Coteau du Passage',
        'Plage Ginkgo',
        'Mont des Capumain',
        'Lagune des Bains',
        'Crique Paisible',
        'Rive des Revenants',
        "Presqu'île Tombolo",
        'Main de Sable',
        'Baie Sérénité',
        "Plage de l'Errance",
        'Plage Long-des-Îles',
        'Arche Poissigrand',
        'Havre des Algues',
        'Île Crache-Feu',
      ],
    },
    {
      region: 'Terres Immaculées',
      details:
        'La nuit : Étendue Polaire, Glacier Séracrawl, Terrasse du Glacier (aussi en apparitions massives), Rocher Esprit · Mégapparitions',
      places: ['Étendue Polaire', 'Glacier Séracrawl', 'Terrasse du Glacier', 'Rocher Esprit'],
    },
  ],
  drifloon: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'La nuit : Colline Ambition, Champ Flora, Val Ferrache, Pont Rocheux (alentours), Sentier Cer-Mont, Rive Filevent, Île Rosa Rugosa · Mégapparitions',
      places: [
        'Colline Ambition',
        'Champ Flora',
        'Val Ferrache',
        'Pont Rocheux',
        'Sentier Cer-Mont',
        'Rive Filevent',
        'Île Rosa Rugosa',
      ],
    },
    {
      region: 'Côte Lazuli',
      details:
        "La nuit : Coteau du Passage, Plage Ginkgo et alentours, Mont des Capumain (alentours), Lagune des Bains et alentours, Crique Paisible (alentours), Rive des Revenants, Presqu'île Tombolo (alentours), Main de Sable et alentours, Baie Sérénité, Plage de l'Errance (alentours), Plage Long-des-Îles (alentours, apparitions massives à proximité), Arche Poissigrand, Havre des Algues, Île Crache-Feu",
      places: [
        'Coteau du Passage',
        'Plage Ginkgo',
        'Mont des Capumain',
        'Lagune des Bains',
        'Crique Paisible',
        'Rive des Revenants',
        "Presqu'île Tombolo",
        'Main de Sable',
        'Baie Sérénité',
        "Plage de l'Errance",
        'Plage Long-des-Îles',
        'Arche Poissigrand',
        'Havre des Algues',
        'Île Crache-Feu',
      ],
    },
    {
      region: 'Terres Immaculées',
      details:
        'La nuit : Étendue Polaire, Glacier Séracrawl, Terrasse du Glacier (aussi en apparitions massives), Rocher Esprit · Mégapparitions',
      places: ['Étendue Polaire', 'Glacier Séracrawl', 'Terrasse du Glacier', 'Rocher Esprit'],
    },
  ],
  dusclops: [
    {
      region: 'Côte Lazuli',
      details: 'Rive des Revenants (la nuit)',
      places: ['Rive des Revenants'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles · Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Chute d'Oglacé et alentours (aussi en apparitions massives, la nuit), Sentier de l'Arène (la nuit), Pente de l'Avalanche · Mégapparitions",
      places: ["Chute d'Oglacé", "Sentier de l'Arène", "Pente de l'Avalanche"],
    },
  ],
  dusknoir: [
    {
      region: 'Côte Lazuli',
      details: 'Rive des Revenants (la nuit)',
      places: ['Rive des Revenants'],
      alphas: ['Rive des Revenants'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles · Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  duskull: [
    {
      region: 'Côte Lazuli',
      details: 'Rive des Revenants (la nuit)',
      places: ['Rive des Revenants'],
    },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Chute d'Oglacé et alentours (aussi en apparitions massives, la nuit), Sentier de l'Arène (la nuit), Pente de l'Avalanche · Mégapparitions",
      places: ["Chute d'Oglacé", "Sentier de l'Arène", "Pente de l'Avalanche"],
    },
  ],
  dustox: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'La nuit : Champ Flora, Bocage Agité (apparitions massives à proximité), Forêt Lointaine · Mégapparitions',
      places: ['Champ Flora', 'Bocage Agité', 'Forêt Lointaine'],
    },
    {
      region: 'Côte Lazuli',
      details: 'La nuit : Lagune des Bains, Cap du Voile',
      places: ['Lagune des Bains', 'Cap du Voile'],
    },
  ],
  eevee: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Val Ferrache · Distorsions spatio-temporelles',
      places: ['Val Ferrache'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Côte Lazuli',
      details: 'Coteau du Passage (alentours) · Distorsions spatio-temporelles',
      places: ['Coteau du Passage'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  electabuzz: [
    {
      region: 'Contrefort Couronné',
      details: 'Passage des Nuages · Mégapparitions',
      places: ['Passage des Nuages'],
    },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Sentier de l'Arène · Distorsions spatio-temporelles",
      places: ["Chute d'Oglacé", "Sentier de l'Arène"],
    },
  ],
  electivire: [
    {
      region: 'Contrefort Couronné',
      details: 'Passage des Nuages · Mégapparitions',
      places: ['Passage des Nuages'],
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
    {
      region: 'Contrefort Couronné',
      details: 'Passage des Nuages · Mégapparitions',
      places: ['Passage des Nuages'],
    },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Sentier de l'Arène",
      places: ["Chute d'Oglacé", "Sentier de l'Arène"],
    },
  ],
  empoleon: [
    {
      region: 'Côte Lazuli',
      details: 'Plage Long-des-Îles · Mégapparitions',
      places: ['Plage Long-des-Îles'],
      alphas: ['Plage Long-des-Îles'],
    },
  ],
  enamorus: [
    { region: 'Marais Carmin', details: 'Marais Carlate (un seul)', places: ['Marais Carlate'] },
  ],
  espeon: [{ region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' }],
  finneon: [
    {
      region: 'Côte Lazuli',
      details: 'Havre des Algues · Mégapparitions',
      places: ['Havre des Algues'],
    },
  ],
  flareon: [
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
  ],
  floatzel: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Val Ferrache (apparitions massives), Pont Rocheux (alentours), Rive Filevent · Mégapparitions',
      places: ['Val Ferrache', 'Pont Rocheux', 'Rive Filevent'],
      alphas: ['Pont Rocheux (niv. 31)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Côte Lazuli',
      details: 'Plage Ginkgo, Mont des Capumain, Lagune des Bains',
      places: ['Plage Ginkgo', 'Mont des Capumain', 'Lagune des Bains'],
    },
  ],
  froslass: [
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche (la nuit), Étendue Polaire (la nuit), Glacier Séracrawl (la nuit), Temple de Frimapic (la nuit), Hameau Perle (alentours, la nuit), Chambre des Piliers · Mégapparitions",
      places: [
        "Pente de l'Avalanche",
        'Étendue Polaire',
        'Glacier Séracrawl',
        'Temple de Frimapic',
        'Hameau Perle',
        'Chambre des Piliers',
      ],
      alphas: ['Chambre des Piliers'],
    },
  ],
  gabite: [
    {
      region: 'Contrefort Couronné',
      details: 'Falaise Calade (alentours), Falaise Calade (apparitions massives) · Mégapparitions',
      places: ['Falaise Calade'],
      alphas: ['Falaise Calade'],
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche",
      places: ["Pente de l'Avalanche"],
    },
  ],
  gallade: [
    {
      region: 'Terres Immaculées',
      details: 'Temple de Frimapic · Mégapparitions',
      places: ['Temple de Frimapic'],
      alphas: ['Temple de Frimapic (niv. 70)'],
    },
  ],
  garchomp: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche",
      places: ["Pente de l'Avalanche"],
      alphas: ["Pente de l'Avalanche"],
    },
  ],
  gardevoir: [
    {
      region: 'Terres Immaculées',
      details: 'Rocher Esprit (le jour), Lac Savoir (apparitions massives) · Mégapparitions',
      places: ['Rocher Esprit', 'Lac Savoir'],
      alphas: ['Rocher Esprit'],
    },
  ],
  gastly: [
    {
      region: 'Marais Carmin',
      details:
        "La nuit : Plaine d'Or, Marais Bouchebée, Île de l'Épreuve, Arène Ursa, Plateau Tourbeux (alentours), Marais Carlate, Ruines Brumeuses (aussi en apparitions massives), Lande Herbacoton, Champ Bourdonne, Lac Courage (alentours) · Mégapparitions",
      places: [
        "Plaine d'Or",
        'Marais Bouchebée',
        "Île de l'Épreuve",
        'Arène Ursa',
        'Plateau Tourbeux',
        'Marais Carlate',
        'Ruines Brumeuses',
        'Lande Herbacoton',
        'Champ Bourdonne',
        'Lac Courage',
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'La nuit : Falaise Calade, Temple Céleste, Parvis des Prières, Mont des Gringoles · Mégapparitions',
      places: ['Falaise Calade', 'Temple Céleste', 'Parvis des Prières', 'Mont des Gringoles'],
    },
    {
      region: 'Terres Immaculées',
      details:
        'La nuit : Étendue Polaire (aussi en apparitions massives), Glacier Séracrawl (alentours), Souterrain de Givre (alentours) · Mégapparitions',
      places: ['Étendue Polaire', 'Glacier Séracrawl', 'Souterrain de Givre'],
    },
  ],
  gastrodon: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Mer Occident : Île Rosa Rugosa, Plaine Littorella · Mégapparitions',
      places: ['Île Rosa Rugosa', 'Plaine Littorella'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Mer Orient : Havre des Algues · Mégapparitions',
      places: ['Havre des Algues'],
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
      places: ['Pont Rocheux', 'Plateau Cer-Mont', "Chute d'Obsidienne"],
    },
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée, Arène Ursa, Plateau Tourbeux (alentours), Marais Carlate (alentours), Pente des Gringoles, Champ Bourdonne',
      places: [
        'Marais Bouchebée',
        'Arène Ursa',
        'Plateau Tourbeux',
        'Marais Carlate',
        'Pente des Gringoles',
        'Champ Bourdonne',
      ],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière (alentours), Falaise Calade (le jour), Temple Céleste, Parvis des Prières, Mont des Gringoles · Mégapparitions',
      places: [
        'Ancienne Carrière',
        'Falaise Calade',
        'Temple Céleste',
        'Parvis des Prières',
        'Mont des Gringoles',
      ],
    },
  ],
  gible: [
    {
      region: 'Contrefort Couronné',
      details: 'Grotte des Égarés, Falaise Calade · Mégapparitions',
      places: ['Grotte des Égarés', 'Falaise Calade'],
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche",
      places: ["Pente de l'Avalanche"],
    },
  ],
  giratina: [
    { region: 'Côte Lazuli', details: 'Grotte du Retour (un seul)', places: ['Grotte du Retour'] },
  ],
  glaceon: [{ region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' }],
  glalie: [
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Étendue Polaire, Sentier de l'Arène (un seul, pendant la requête 86), Glacier Séracrawl, Temple de Frimapic, Hameau Perle (alentours) · Mégapparitions",
      places: [
        "Pente de l'Avalanche",
        'Étendue Polaire',
        "Sentier de l'Arène",
        'Glacier Séracrawl',
        'Temple de Frimapic',
        'Hameau Perle',
      ],
      alphas: ['Étendue Polaire'],
    },
  ],
  glameow: [
    {
      region: 'Côte Lazuli',
      details: 'Coteau du Passage, Cap du Voile · Mégapparitions',
      places: ['Coteau du Passage', 'Cap du Voile'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Terrasse du Glacier (alentours) · Mégapparitions',
      places: ['Terrasse du Glacier'],
    },
  ],
  gligar: [
    {
      region: 'Contrefort Couronné',
      details:
        'Falaise Calade, Temple Céleste et alentours, Grotte Préhistorique (alentours), Passage des Nuages (alentours) · Mégapparitions',
      places: ['Falaise Calade', 'Temple Céleste', 'Grotte Préhistorique', 'Passage des Nuages'],
      alphas: ['Temple Céleste'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Sentier de l'Arène, Terrasse du Glacier (le jour), Terrasse du Glacier (apparitions massives)",
      places: ["Sentier de l'Arène", 'Terrasse du Glacier'],
    },
  ],
  gliscor: [
    {
      region: 'Contrefort Couronné',
      details: 'Grotte Préhistorique (alentours) · Mégapparitions',
      places: ['Grotte Préhistorique'],
      alphas: ['Grotte Préhistorique'],
    },
  ],
  golbat: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "La nuit : Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Forêt Lointaine, Tunnel de Fer et alentours, Chute d'Obsidienne (alentours) · Mégapparitions",
      places: [
        'Plateau Cer-Mont',
        'Rive Filevent',
        'Cellier Champêtre',
        "Digue de l'Estuaire",
        'Forêt Lointaine',
        'Tunnel de Fer',
        "Chute d'Obsidienne",
      ],
      alphas: ['Tunnel de Fer (niv. 35)'],
    },
    {
      region: 'Marais Carmin',
      details:
        'La nuit : Col Mer-de-Nuages, Hameau Diamant (alentours), Lisière du Hameau, Pente des Gringoles',
      places: ['Col Mer-de-Nuages', 'Hameau Diamant', 'Lisière du Hameau', 'Pente des Gringoles'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité (la nuit), Forêt des Égarés (la nuit), Grotte des Égarés, Ancienne Carrière (alentours, la nuit)",
      places: ["Hauts de l'Humilité", 'Forêt des Égarés', 'Grotte des Égarés', 'Ancienne Carrière'],
    },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic', places: ['Temple de Frimapic'] },
  ],
  golduck: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Forêt Lointaine (apparitions massives)',
      places: ['Forêt Lointaine'],
    },
    {
      region: 'Marais Carmin',
      details: "Plaine d'Or (apparitions massives), Île de l'Épreuve · Mégapparitions",
      places: ["Plaine d'Or", "Île de l'Épreuve"],
    },
    {
      region: 'Côte Lazuli',
      details: 'Lagune des Bains · Mégapparitions',
      places: ['Lagune des Bains'],
      alphas: ['Lagune des Bains'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Forêt des Égarés, Source Reculée',
      places: ['Forêt des Égarés', 'Source Reculée'],
    },
  ],
  golem: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Mont des Gringoles · Mégapparitions',
      places: ['Mont des Gringoles'],
      alphas: ['Mont des Gringoles'],
    },
  ],
  goodra: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Lac Vérité (un seul, pendant la mission 14)',
      places: ['Lac Vérité'],
      alphas: ['Lac Vérité (niv. 58)'],
    },
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours)',
      places: ['Ancienne Carrière'],
      alphas: ['Ancienne Carrière'],
    },
  ],
  goomy: [
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve, Arène Ursa (apparitions massives) · Mégapparitions",
      places: ["Île de l'Épreuve", 'Arène Ursa'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours)',
      places: ['Ancienne Carrière'],
    },
  ],
  graveler: [
    {
      region: 'Plaines Obsidiennes',
      details: "Chute d'Obsidienne (alentours) · Mégapparitions",
      places: ["Chute d'Obsidienne", 'Bocage Agité'],
      alphas: ['Bocage Agité (niv. 30)', "Chute d'Obsidienne"],
    },
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée, Arène Ursa, Plateau Tourbeux (alentours), Marais Carlate (alentours), Pente des Gringoles, Champ Bourdonne, Lac Courage (alentours)',
      places: [
        'Marais Bouchebée',
        'Arène Ursa',
        'Plateau Tourbeux',
        'Marais Carlate',
        'Pente des Gringoles',
        'Champ Bourdonne',
        'Lac Courage',
      ],
    },
    {
      region: 'Côte Lazuli',
      details: 'Île Crache-Feu · Mégapparitions',
      places: ['Île Crache-Feu'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière (alentours), Falaise Calade (le jour), Temple Céleste, Parvis des Prières, Mont des Gringoles · Mégapparitions',
      places: [
        'Ancienne Carrière',
        'Falaise Calade',
        'Temple Céleste',
        'Parvis des Prières',
        'Mont des Gringoles',
      ],
    },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic' },
  ],
  grotle: [
    {
      region: 'Marais Carmin',
      details: 'Champ Bourdonne (alentours) · Mégapparitions',
      places: ['Champ Bourdonne'],
    },
  ],
  growlithe: [
    {
      region: 'Côte Lazuli',
      details: 'Bois Brise-Vent, Cap du Voile · Mégapparitions',
      places: ['Bois Brise-Vent', 'Cap du Voile'],
    },
  ],
  gyarados: [
    {
      region: 'Plaines Obsidiennes',
      details: "Chute d'Obsidienne (en vol), Lac Vérité",
      places: ["Chute d'Obsidienne", 'Lac Vérité'],
      alphas: ['Lac Vérité (niv. 60)'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Main de Sable et alentours · Mégapparitions',
      places: ['Main de Sable'],
      alphas: ['Main de Sable'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Grotte Préhistorique (alentours)',
      places: ['Grotte Préhistorique'],
    },
  ],
  happiny: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Val Ferrache (alentours, apparitions massives), Tunnel de Fer, Chute d'Obsidienne (alentours)",
      places: ['Val Ferrache', 'Tunnel de Fer', "Chute d'Obsidienne"],
    },
    {
      region: 'Marais Carmin',
      details: 'Lande Herbacoton (apparitions massives)',
      places: ['Lande Herbacoton'],
    },
    {
      region: 'Côte Lazuli',
      details: "Crique Paisible, Presqu'île Tombolo et alentours · Mégapparitions",
      places: ['Crique Paisible', "Presqu'île Tombolo"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Source Reculée (apparitions massives)',
      places: ['Source Reculée'],
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche",
      places: ["Pente de l'Avalanche"],
    },
  ],
  haunter: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details:
        "La nuit : Plaine d'Or (alentours), Marais Bouchebée, Île de l'Épreuve, Arène Ursa, Plateau Tourbeux (alentours), Marais Carlate, Ruines Brumeuses (aussi en apparitions massives), Lande Herbacoton, Champ Bourdonne, Lac Courage (alentours) · Mégapparitions",
      places: [
        "Plaine d'Or",
        'Marais Bouchebée',
        "Île de l'Épreuve",
        'Arène Ursa',
        'Plateau Tourbeux',
        'Marais Carlate',
        'Ruines Brumeuses',
        'Lande Herbacoton',
        'Champ Bourdonne',
        'Lac Courage',
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'La nuit : Falaise Calade, Temple Céleste, Parvis des Prières, Mont des Gringoles · Mégapparitions',
      places: ['Falaise Calade', 'Temple Céleste', 'Parvis des Prières', 'Mont des Gringoles'],
    },
    {
      region: 'Terres Immaculées',
      details:
        'La nuit : Étendue Polaire (aussi en apparitions massives), Glacier Séracrawl (alentours), Souterrain de Givre (alentours) · Mégapparitions',
      places: ['Étendue Polaire', 'Glacier Séracrawl', 'Souterrain de Givre'],
    },
  ],
  heatran: [
    {
      region: 'Côte Lazuli',
      details: 'Autel de la Caldeira (un seul)',
      places: ['Autel de la Caldeira'],
    },
  ],
  heracross: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Bocage Agité',
      places: ['Bocage Agité'],
      alphas: ['Bocage Agité (niv. 45)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Forêt des Égarés (le jour) · Mégapparitions',
      places: ['Forêt des Égarés'],
    },
  ],
  hippopotas: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Plateau Tourbeux (alentours), Marais Carlate · Mégapparitions',
      places: ['Marais Bouchebée', 'Plateau Tourbeux', 'Marais Carlate'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste · Mégapparitions',
      places: ['Sentier Céleste'],
    },
  ],
  hippowdon: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Marais Carlate et alentours · Mégapparitions',
      places: ['Marais Bouchebée', 'Marais Carlate'],
      alphas: ['Marais Bouchebée'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste · Mégapparitions',
      places: ['Sentier Céleste'],
    },
  ],
  honchkrow: [
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages (la nuit) · Mégapparitions',
      places: ['Col Mer-de-Nuages'],
      alphas: ['Col Mer-de-Nuages'],
    },
    { region: 'Côte Lazuli', details: 'Lagune des Bains (la nuit)', places: ['Lagune des Bains'] },
  ],
  infernape: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Île Rosa Rugosa · Mégapparitions',
      places: ['Île Rosa Rugosa'],
      alphas: ['Île Rosa Rugosa (niv. 65)'],
    },
  ],
  jolteon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  kadabra: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plaine Littorella · Mégapparitions',
      places: ['Plaine Littorella'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Lac Savoir · Mégapparitions', places: ['Lac Savoir'] },
  ],
  kirlia: [
    { region: 'Marais Carmin', details: 'Ruines Brumeuses', places: ['Ruines Brumeuses'] },
    {
      region: 'Terres Immaculées',
      details:
        'Rocher Esprit (le jour), Lac Savoir (apparitions massives), Temple de Frimapic · Mégapparitions',
      places: ['Rocher Esprit', 'Lac Savoir', 'Temple de Frimapic'],
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
      places: ['Sentier Cer-Mont', 'Rive Filevent', 'Cellier Champêtre', "Digue de l'Estuaire"],
    },
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages, Hameau Diamant (alentours) · Mégapparitions',
      places: ['Col Mer-de-Nuages', 'Hameau Diamant'],
    },
  ],
  kricketune: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Plateau Cer-Mont (un seul, pendant la mission 5), Rive Filevent, Cellier Champêtre, Digue de l'Estuaire · Mégapparitions",
      places: ['Plateau Cer-Mont', 'Rive Filevent', 'Cellier Champêtre', "Digue de l'Estuaire"],
      alphas: ["Digue de l'Estuaire (niv. 30)", 'Plateau Cer-Mont'],
    },
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages, Hameau Diamant (alentours) · Mégapparitions',
      places: ['Col Mer-de-Nuages', 'Hameau Diamant'],
    },
  ],
  landorus: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Île Rosa Rugosa (un seul)',
      places: ['Île Rosa Rugosa'],
    },
  ],
  leafeon: [{ region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' }],
  lickilicky: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details: 'Ruines Brumeuses (aussi en apparitions massives) · Mégapparitions',
      places: ['Ruines Brumeuses'],
      alphas: ['Ruines Brumeuses'],
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche · Mégapparitions",
      places: ["Pente de l'Avalanche"],
    },
  ],
  lickitung: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details: 'Ruines Brumeuses, Hameau Diamant (alentours) · Mégapparitions',
      places: ['Ruines Brumeuses', 'Hameau Diamant'],
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche, Source Panora-Neige · Mégapparitions",
      places: ["Pente de l'Avalanche", 'Source Panora-Neige'],
    },
  ],
  lilligant: [
    { region: 'Marais Carmin', details: 'Mégapparitions · En faisant évoluer Chlorobule' },
  ],
  lopunny: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Forêt Lointaine (alentours) · Mégapparitions',
      places: ['Forêt Lointaine'],
      alphas: ['Forêt Lointaine (niv. 40)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Terres Immaculées',
      details: 'Étendue Polaire, Source Panora-Neige · Mégapparitions',
      places: ['Étendue Polaire', 'Source Panora-Neige'],
    },
  ],
  lucario: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Source Panora-Neige · Mégapparitions",
      places: ["Chute d'Oglacé", 'Source Panora-Neige'],
      alphas: ["Chute d'Oglacé"],
    },
  ],
  lumineon: [
    {
      region: 'Côte Lazuli',
      details: 'Havre des Algues et alentours · Mégapparitions',
      places: ['Havre des Algues'],
      alphas: ['Havre des Algues'],
    },
  ],
  luxio: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Champ Flora, Tunnel de Fer (alentours), Plaine Littorella, Lac Vérité · Mégapparitions',
      places: ['Champ Flora', 'Tunnel de Fer', 'Plaine Littorella', 'Lac Vérité'],
      alphas: ['Champ Flora (niv. 40)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité, Sentier des Pèlerins, Parvis des Prières, Passage des Nuages · Mégapparitions",
      places: [
        "Hauts de l'Humilité",
        'Sentier des Pèlerins',
        'Parvis des Prières',
        'Passage des Nuages',
      ],
    },
  ],
  luxray: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plaine Littorella, Lac Vérité · Mégapparitions',
      places: ['Plaine Littorella', 'Lac Vérité'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité, Sentier des Pèlerins, Parvis des Prières, Passage des Nuages · Mégapparitions",
      places: [
        "Hauts de l'Humilité",
        'Sentier des Pèlerins',
        'Parvis des Prières',
        'Passage des Nuages',
      ],
      alphas: ['Parvis des Prières'],
    },
  ],
  machamp: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Sentier de l'Arène · Mégapparitions",
      places: ["Sentier de l'Arène"],
      alphas: ["Sentier de l'Arène"],
    },
  ],
  machoke: [
    {
      region: 'Plaines Obsidiennes',
      details: "Chute d'Obsidienne (alentours)",
      places: ["Chute d'Obsidienne"],
    },
    {
      region: 'Côte Lazuli',
      details: "Plage Ginkgo (alentours), Plage de l'Errance",
      places: ['Plage Ginkgo', "Plage de l'Errance"],
      alphas: ['Plage Ginkgo'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Mont des Gringoles, Passage des Nuages (alentours) · Mégapparitions',
      places: ['Mont des Gringoles', 'Passage des Nuages'],
    },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Sentier de l'Arène, Source Panora-Neige · Mégapparitions",
      places: ["Chute d'Oglacé", "Sentier de l'Arène", 'Source Panora-Neige'],
    },
  ],
  machop: [
    {
      region: 'Plaines Obsidiennes',
      details: "Tunnel de Fer, Chute d'Obsidienne (alentours)",
      places: ['Tunnel de Fer', "Chute d'Obsidienne"],
    },
    {
      region: 'Côte Lazuli',
      details: "Plage Ginkgo (alentours), Plage de l'Errance",
      places: ['Plage Ginkgo', "Plage de l'Errance"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Mont des Gringoles, Passage des Nuages (alentours) · Mégapparitions',
      places: ['Mont des Gringoles', 'Passage des Nuages'],
    },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Sentier de l'Arène, Source Panora-Neige · Mégapparitions",
      places: ["Chute d'Oglacé", "Sentier de l'Arène", 'Source Panora-Neige'],
    },
  ],
  magby: [
    {
      region: 'Côte Lazuli',
      details: 'Île Crache-Feu · Mégapparitions',
      places: ['Île Crache-Feu'],
    },
  ],
  magikarp: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Pont Rocheux (apparitions massives), Tunnel de Fer (alentours), Chute d'Obsidienne, Lac Vérité",
      places: ['Pont Rocheux', 'Tunnel de Fer', "Chute d'Obsidienne", 'Lac Vérité'],
      alphas: ['Tunnel de Fer'],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste (alentours)',
      places: ['Sentier Céleste'],
    },
  ],
  magmar: [
    {
      region: 'Côte Lazuli',
      details: 'Île Crache-Feu · Mégapparitions',
      places: ['Île Crache-Feu'],
    },
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
      places: ['Falaise Calade', 'Sentier Céleste', 'Source Féérique'],
    },
  ],
  mamoswine: [
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche (apparitions massives), Glacier Séracrawl · Mégapparitions",
      places: ["Pente de l'Avalanche", 'Glacier Séracrawl'],
      alphas: ['Glacier Séracrawl'],
    },
  ],
  manaphy: [{ region: 'Côte Lazuli', details: 'Creux du Cap (un seul)', places: ['Creux du Cap'] }],
  mantine: [
    {
      region: 'Côte Lazuli',
      details: 'Baie Sérénité · Mégapparitions',
      places: ['Baie Sérénité'],
      alphas: ['Baie Sérénité'],
    },
  ],
  mantyke: [
    {
      region: 'Côte Lazuli',
      details:
        "Plage Ginkgo (alentours), Mont des Capumain (alentours), Lagune des Bains (alentours), Baie Sérénité, Plage de l'Errance (alentours) · Mégapparitions",
      places: [
        'Plage Ginkgo',
        'Mont des Capumain',
        'Lagune des Bains',
        'Baie Sérénité',
        "Plage de l'Errance",
      ],
    },
  ],
  mesprit: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Caverne Vérité (un seul) · niv. 70',
      places: ['Caverne Vérité'],
    },
  ],
  'mime-jr': [
    {
      region: 'Plaines Obsidiennes',
      details: 'Val Ferrache, Plaine Littorella · Mégapparitions',
      places: ['Val Ferrache', 'Plaine Littorella'],
    },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
  ],
  misdreavus: [
    {
      region: 'Contrefort Couronné',
      details:
        'La nuit : Temple Céleste (alentours), Parvis des Prières (aussi en apparitions massives à proximité), Col Pierlevé · Mégapparitions',
      places: ['Temple Céleste', 'Parvis des Prières', 'Col Pierlevé'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche et alentours (aussi en apparitions massives, la nuit), Terrasse du Glacier (alentours), Souterrain de Givre, Chambre des Piliers · Mégapparitions",
      places: [
        "Pente de l'Avalanche",
        'Terrasse du Glacier',
        'Souterrain de Givre',
        'Chambre des Piliers',
      ],
    },
  ],
  mismagius: [
    {
      region: 'Contrefort Couronné',
      details: 'Col Pierlevé (la nuit) · Mégapparitions',
      places: ['Col Pierlevé'],
      alphas: ['Col Pierlevé'],
    },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  monferno: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plateau Cer-Mont, Île Rosa Rugosa · Mégapparitions',
      places: ['Plateau Cer-Mont', 'Île Rosa Rugosa'],
    },
  ],
  mothim: [
    { region: 'Plaines Obsidiennes', details: 'Bocage Agité', places: ['Bocage Agité'] },
    {
      region: 'Côte Lazuli',
      details:
        'Coteau du Passage (alentours), Mont des Capumain, Chemin de la Source, Cap du Voile, Île Crache-Feu (alentours)',
      places: [
        'Coteau du Passage',
        'Mont des Capumain',
        'Chemin de la Source',
        'Cap du Voile',
        'Île Crache-Feu',
      ],
      alphas: ['Chemin de la Source'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Forêt des Égarés, Ancienne Carrière (alentours)',
      places: ['Forêt des Égarés', 'Ancienne Carrière'],
      alphas: ['Forêt des Égarés'],
    },
  ],
  'mr-mime': [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plaine Littorella · Mégapparitions',
      places: ['Plaine Littorella'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
  ],
  munchlax: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Sentier Cer-Mont · Mégapparitions',
      places: ['Sentier Cer-Mont'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Source Panora-Neige',
      places: ['Source Panora-Neige'],
    },
  ],
  murkrow: [
    {
      region: 'Marais Carmin',
      details:
        'Col Mer-de-Nuages (aussi en apparitions massives à proximité, la nuit) · Mégapparitions',
      places: ['Col Mer-de-Nuages'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "La nuit : Coteau du Passage, Plage Ginkgo, Mont des Capumain, Lagune des Bains, Crique Paisible, Plage de l'Errance, Bois Brise-Vent, Chemin de la Source, Plage Long-des-Îles, Cap du Voile",
      places: [
        'Coteau du Passage',
        'Plage Ginkgo',
        'Mont des Capumain',
        'Lagune des Bains',
        'Crique Paisible',
        "Plage de l'Errance",
        'Bois Brise-Vent',
        'Chemin de la Source',
        'Plage Long-des-Îles',
        'Cap du Voile',
      ],
    },
  ],
  ninetales: [
    {
      region: 'Côte Lazuli',
      details: 'Île Crache-Feu · Mégapparitions',
      places: ['Île Crache-Feu'],
      alphas: ['Île Crache-Feu'],
    },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  nosepass: [
    {
      region: 'Contrefort Couronné',
      details: 'Temple Céleste, Grotte Préhistorique et alentours · Mégapparitions',
      places: ['Temple Céleste', 'Grotte Préhistorique'],
    },
  ],
  octillery: [
    {
      region: 'Côte Lazuli',
      details:
        "Plage de l'Errance (aussi en apparitions massives), Plage Long-des-Îles (alentours), Creux du Cap (après avoir capturé Manaphy pendant la requête 66)",
      places: ["Plage de l'Errance", 'Plage Long-des-Îles', 'Creux du Cap'],
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
      places: ['Marais Carlate', 'Hameau Diamant', 'Lac Courage'],
      alphas: ['Hameau Diamant'],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    { region: 'Contrefort Couronné', details: 'Sentier Céleste', places: ['Sentier Céleste'] },
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
      places: ['Lac Courage'],
      alphas: ['Lac Courage'],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions · En faisant évoluer Qwilfish de Hisui' },
  ],
  pachirisu: [
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée (alentours, aussi en apparitions massives), Lande Herbacoton · Mégapparitions',
      places: ['Marais Bouchebée', 'Lande Herbacoton'],
      alphas: ['Marais Bouchebée'],
    },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  palkia: [
    {
      region: 'Contrefort Couronné',
      details: 'Temple de Sinnoh (un seul) · niv. 65',
      places: ['Temple de Sinnoh'],
    },
  ],
  paras: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Cellier Champêtre · Mégapparitions',
      places: ['Cellier Champêtre'],
    },
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or, Arène Ursa (alentours), Col Mer-de-Nuages (alentours), Lisière du Hameau, Lande Herbacoton (alentours), Champ Bourdonne · Mégapparitions",
      places: [
        "Plaine d'Or",
        'Arène Ursa',
        'Col Mer-de-Nuages',
        'Lisière du Hameau',
        'Lande Herbacoton',
        'Champ Bourdonne',
      ],
    },
    { region: 'Côte Lazuli', details: 'Bois Brise-Vent (alentours)', places: ['Bois Brise-Vent'] },
    {
      region: 'Contrefort Couronné',
      details: "Hauts de l'Humilité, Forêt des Égarés",
      places: ["Hauts de l'Humilité", 'Forêt des Égarés'],
    },
  ],
  parasect: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Cellier Champêtre (alentours, aussi en apparitions massives) · Mégapparitions',
      places: ['Cellier Champêtre'],
      alphas: ['Cellier Champêtre (niv. 30)'],
    },
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or, Arène Ursa (alentours), Col Mer-de-Nuages (alentours), Lisière du Hameau, Lande Herbacoton (alentours), Champ Bourdonne · Mégapparitions",
      places: [
        "Plaine d'Or",
        'Arène Ursa',
        'Col Mer-de-Nuages',
        'Lisière du Hameau',
        'Lande Herbacoton',
        'Champ Bourdonne',
      ],
    },
    { region: 'Côte Lazuli', details: 'Bois Brise-Vent', places: ['Bois Brise-Vent'] },
    {
      region: 'Contrefort Couronné',
      details: "Hauts de l'Humilité, Forêt des Égarés",
      places: ["Hauts de l'Humilité", 'Forêt des Égarés'],
    },
  ],
  petilil: [
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve, Lande Herbacoton · Mégapparitions",
      places: ["Île de l'Épreuve", 'Lande Herbacoton'],
    },
  ],
  phione: [
    {
      region: 'Côte Lazuli',
      details:
        'Creux du Cap (trois pendant la requête 66, puis sans limite après avoir capturé Manaphy)',
      places: ['Creux du Cap'],
    },
  ],
  pichu: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Colline Ambition (alentours), Champ Flora, Cellier Champêtre (le jour) · Mégapparitions',
      places: ['Colline Ambition', 'Champ Flora', 'Cellier Champêtre'],
    },
    { region: 'Marais Carmin', details: "Plaine d'Or (alentours)", places: ["Plaine d'Or"] },
  ],
  pikachu: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Cellier Champêtre · Mégapparitions',
      places: ['Cellier Champêtre'],
    },
    { region: 'Marais Carmin', details: "Plaine d'Or (alentours)", places: ["Plaine d'Or"] },
    { region: 'Côte Lazuli', details: 'Bois Brise-Vent', places: ['Bois Brise-Vent'] },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  piloswine: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Étendue Polaire, Sentier de l'Arène et alentours, Glacier Séracrawl · Mégapparitions",
      places: [
        "Pente de l'Avalanche",
        'Étendue Polaire',
        "Sentier de l'Arène",
        'Glacier Séracrawl',
      ],
      alphas: ["Sentier de l'Arène"],
    },
  ],
  piplup: [
    {
      region: 'Côte Lazuli',
      details:
        'Chemin de la Source (alentours), Plage Long-des-Îles (alentours, apparitions massives) · Mégapparitions',
      places: ['Chemin de la Source', 'Plage Long-des-Îles'],
    },
  ],
  ponyta: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Val Ferrache (un chromatique en plus, un seul pendant la requête 19) · Mégapparitions',
      places: ['Val Ferrache'],
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
      places: ['Chemin de la Source', 'Plage Long-des-Îles'],
    },
  ],
  probopass: [
    {
      region: 'Contrefort Couronné',
      details: 'Grotte Préhistorique (alentours) · Mégapparitions',
      places: ['Grotte Préhistorique'],
      alphas: ['Grotte Préhistorique'],
    },
  ],
  psyduck: [
    { region: 'Plaines Obsidiennes', details: 'Forêt Lointaine', places: ['Forêt Lointaine'] },
    {
      region: 'Marais Carmin',
      details: "Plaine d'Or, Marais Bouchebée, Île de l'Épreuve · Mégapparitions",
      places: ["Plaine d'Or", 'Marais Bouchebée', "Île de l'Épreuve"],
    },
    {
      region: 'Côte Lazuli',
      details: 'Lagune des Bains · Mégapparitions',
      places: ['Lagune des Bains'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Forêt des Égarés, Source Reculée',
      places: ['Forêt des Égarés', 'Source Reculée'],
    },
  ],
  purugly: [
    {
      region: 'Côte Lazuli',
      details: 'Coteau du Passage, Cap du Voile (aussi en apparitions massives) · Mégapparitions',
      places: ['Coteau du Passage', 'Cap du Voile'],
      alphas: ['Cap du Voile'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Terrasse du Glacier (alentours) · Mégapparitions',
      places: ['Terrasse du Glacier'],
    },
  ],
  quilava: [
    {
      region: 'Marais Carmin',
      details:
        'Distorsions spatio-temporelles (après la mission 18) · Mégapparitions (après la requête 102)',
    },
  ],
  qwilfish: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Île Rosa Rugosa (alentours)',
      places: ['Île Rosa Rugosa'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Lagune des Bains (alentours), Crique Paisible (alentours), Presqu'île Tombolo (alentours), Main de Sable (alentours), Baie Sérénité, Plage Long-des-Îles et alentours, Arche Poissigrand, Havre des Algues (alentours), Île Crache-Feu (alentours) · Mégapparitions",
      places: [
        'Lagune des Bains',
        'Crique Paisible',
        "Presqu'île Tombolo",
        'Main de Sable',
        'Baie Sérénité',
        'Plage Long-des-Îles',
        'Arche Poissigrand',
        'Havre des Algues',
        'Île Crache-Feu',
      ],
      alphas: ['Plage Long-des-Îles'],
    },
  ],
  raichu: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Marais Carmin',
      details: "Plaine d'Or",
      places: ["Plaine d'Or"],
      alphas: ["Plaine d'Or"],
    },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  ralts: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée, Ruines Brumeuses',
      places: ['Marais Bouchebée', 'Ruines Brumeuses'],
    },
    {
      region: 'Terres Immaculées',
      details:
        'Rocher Esprit (le jour), Lac Savoir (apparitions massives), Temple de Frimapic · Mégapparitions',
      places: ['Rocher Esprit', 'Lac Savoir', 'Temple de Frimapic'],
    },
  ],
  rampardos: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  rapidash: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Val Ferrache (aussi en apparitions massives) · Mégapparitions',
      places: ['Val Ferrache'],
      alphas: ['Val Ferrache (niv. 40)'],
    },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  regigigas: [
    {
      region: 'Terres Immaculées',
      details: 'Temple de Frimapic (un seul) · niv. 70',
      places: ['Temple de Frimapic'],
    },
  ],
  remoraid: [
    {
      region: 'Côte Lazuli',
      details:
        "Lagune des Bains (alentours), Crique Paisible (alentours), Rive des Revenants (alentours), Presqu'île Tombolo (alentours), Main de Sable, Baie Sérénité, Plage de l'Errance (alentours)",
      places: [
        'Lagune des Bains',
        'Crique Paisible',
        'Rive des Revenants',
        "Presqu'île Tombolo",
        'Main de Sable',
        'Baie Sérénité',
        "Plage de l'Errance",
      ],
    },
  ],
  rhydon: [
    {
      region: 'Marais Carmin',
      details: 'Pente des Gringoles · Mégapparitions',
      places: ['Pente des Gringoles'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste, Parvis des Prières · Mégapparitions',
      places: ['Sentier Céleste', 'Parvis des Prières'],
    },
  ],
  rhyhorn: [
    {
      region: 'Marais Carmin',
      details: 'Ruines Brumeuses, Lisière du Hameau, Pente des Gringoles · Mégapparitions',
      places: ['Ruines Brumeuses', 'Lisière du Hameau', 'Pente des Gringoles'],
      alphas: ['Lisière du Hameau'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste, Parvis des Prières · Mégapparitions',
      places: ['Sentier Céleste', 'Parvis des Prières'],
    },
  ],
  rhyperior: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Parvis des Prières (alentours) · Mégapparitions',
      places: ['Parvis des Prières'],
      alphas: ['Parvis des Prières'],
    },
  ],
  riolu: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Source Panora-Neige · Mégapparitions",
      places: ["Chute d'Oglacé", 'Source Panora-Neige'],
    },
  ],
  roselia: [
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée, Col Mer-de-Nuages et alentours, Lande Herbacoton (alentours) · Mégapparitions',
      places: ['Marais Bouchebée', 'Col Mer-de-Nuages', 'Lande Herbacoton'],
    },
    { region: 'Contrefort Couronné', details: 'Source Féérique', places: ['Source Féérique'] },
  ],
  roserade: [
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages (le jour) · Mégapparitions',
      places: ['Col Mer-de-Nuages'],
      alphas: ['Col Mer-de-Nuages'],
    },
  ],
  rotom: [
    {
      region: 'Contrefort Couronné',
      details:
        'Temple Céleste (dans des caisses), Parvis des Prières (dans des caisses), Col Pierlevé',
      places: ['Temple Céleste', 'Parvis des Prières', 'Col Pierlevé'],
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
      places: ['Glacier Séracrawl', 'Rocher Esprit', 'Lac Savoir', 'Hameau Perle'],
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
      places: ['Forêt Lointaine', 'Arène du Grand Arbre'],
      alphas: ['Arène du Grand Arbre (niv. 42)'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Grotte Préhistorique (alentours)',
      places: ['Grotte Préhistorique'],
    },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  sealeo: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details: 'Crique Paisible, Plage Long-des-Îles · Mégapparitions',
      places: ['Crique Paisible', 'Plage Long-des-Îles'],
    },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  shaymin: [
    {
      region: 'Plaines Obsidiennes',
      details: "Champ Flora (un seul, avec une sauvegarde d'Épée ou Bouclier)",
      places: ['Champ Flora'],
    },
  ],
  shellos: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Mer Occident : Île Rosa Rugosa, Plaine Littorella · Mégapparitions',
      places: ['Île Rosa Rugosa', 'Plaine Littorella'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Mer Orient : Baie Sérénité, Havre des Algues · Mégapparitions',
      places: ['Baie Sérénité', 'Havre des Algues'],
    },
  ],
  shieldon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  shinx: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Colline Ambition (alentours), Champ Flora (alentours), Plateau Cer-Mont, Tunnel de Fer (alentours) · Mégapparitions',
      places: ['Colline Ambition', 'Champ Flora', 'Plateau Cer-Mont', 'Tunnel de Fer'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier des Pèlerins, Parvis des Prières · Mégapparitions',
      places: ['Sentier des Pèlerins', 'Parvis des Prières'],
    },
  ],
  silcoon: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Le jour : Champ Flora, Val Ferrache, Forêt Lointaine · Mégapparitions',
      places: ['Champ Flora', 'Val Ferrache', 'Forêt Lointaine'],
      alphas: ['Val Ferrache'],
    },
  ],
  skorupi: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details: "Plage Ginkgo, Plage de l'Errance · Mégapparitions",
      places: ['Plage Ginkgo', "Plage de l'Errance"],
    },
  ],
  skuntank: [
    {
      region: 'Marais Carmin',
      details: 'Marais Carlate · Mégapparitions',
      places: ['Marais Carlate'],
      alphas: ['Marais Carlate'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours), Sentier Céleste (alentours) · Mégapparitions',
      places: ['Ancienne Carrière', 'Sentier Céleste'],
    },
  ],
  sliggoo: [
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve, Arène Ursa (apparitions massives) · Mégapparitions",
      places: ["Île de l'Épreuve", 'Arène Ursa'],
      alphas: ["Île de l'Épreuve"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours)',
      places: ['Ancienne Carrière'],
    },
  ],
  sneasel: [
    { region: 'Plaines Obsidiennes', details: 'Forme classique : distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details:
        'Forme de Hisui : Sentier Céleste (alentours), Grotte Préhistorique (alentours) · Mégapparitions',
      places: ['Sentier Céleste', 'Grotte Préhistorique'],
    },
    {
      region: 'Terres Immaculées',
      details:
        'Glacier Séracrawl (alentours), Terrasse du Glacier, Hameau Perle (alentours, forme de Hisui)',
      places: ['Glacier Séracrawl', 'Terrasse du Glacier', 'Hameau Perle'],
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
      places: ['Plaine Littorella'],
      alphas: ['Plaine Littorella (niv. 45)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Terres Immaculées',
      details: 'Source Panora-Neige',
      places: ['Source Panora-Neige'],
    },
  ],
  snorunt: [
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Vallée Enneigée, Étendue Polaire, Hameau Perle (alentours) · Mégapparitions",
      places: ["Pente de l'Avalanche", 'Vallée Enneigée', 'Étendue Polaire', 'Hameau Perle'],
    },
  ],
  snover: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Étendue Polaire, Sentier de l'Arène (alentours), Glacier Séracrawl (alentours), Terrasse du Glacier · Mégapparitions",
      places: ['Étendue Polaire', "Sentier de l'Arène", 'Glacier Séracrawl', 'Terrasse du Glacier'],
    },
  ],
  spheal: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details: 'Plage Ginkgo, Crique Paisible · Mégapparitions',
      places: ['Plage Ginkgo', 'Crique Paisible'],
    },
  ],
  spiritomb: [
    {
      region: 'Marais Carmin',
      details: 'Ruines Brumeuses · Mégapparitions (après la requête 22)',
      places: ['Ruines Brumeuses'],
      alphas: ['Ruines Brumeuses'],
    },
  ],
  stantler: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plateau Cer-Mont · Mégapparitions',
      places: ['Plateau Cer-Mont'],
      alphas: ['Plateau Cer-Mont (niv. 42)'],
    },
    { region: 'Côte Lazuli', details: 'Bois Brise-Vent', places: ['Bois Brise-Vent'] },
    {
      region: 'Contrefort Couronné',
      details: 'Forêt des Égarés, Terrasse du Glacier (alentours)',
      places: ['Forêt des Égarés', 'Terrasse du Glacier'],
    },
    { region: 'Terres Immaculées', details: 'Rencontre sauvage (lieu précis non répertorié)' },
  ],
  staraptor: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Cellier Champêtre (alentours, en vol), Lac Vérité (alentours, aussi en apparitions massives, le jour) · Mégapparitions',
      places: ['Cellier Champêtre', 'Lac Vérité'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Rive des Revenants (le jour), Baie Sérénité (le jour), Plage de l'Errance (alentours, en vol), Chemin de la Source (le jour) · Mégapparitions",
      places: ['Rive des Revenants', 'Baie Sérénité', "Plage de l'Errance", 'Chemin de la Source'],
    },
  ],
  staravia: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Le jour : Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Chute d'Obsidienne (alentours), Île Rosa Rugosa, Plaine Littorella (apparitions massives à proximité) · Mégapparitions",
      places: [
        'Plateau Cer-Mont',
        'Rive Filevent',
        'Cellier Champêtre',
        "Digue de l'Estuaire",
        "Chute d'Obsidienne",
        'Île Rosa Rugosa',
        'Plaine Littorella',
      ],
      alphas: ['Rive Filevent (niv. 32)'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Le jour : Coteau du Passage, Lagune des Bains, Rive des Revenants (aussi en apparitions massives), Main de Sable, Baie Sérénité, Plage de l'Errance (alentours) · Mégapparitions",
      places: [
        'Coteau du Passage',
        'Lagune des Bains',
        'Rive des Revenants',
        'Main de Sable',
        'Baie Sérénité',
        "Plage de l'Errance",
      ],
    },
  ],
  starly: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Le jour : Colline Ambition, Val Ferrache, Pont Rocheux (alentours), Sentier Cer-Mont, Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Chute d'Obsidienne (alentours), Île Rosa Rugosa · Mégapparitions",
      places: [
        'Colline Ambition',
        'Val Ferrache',
        'Pont Rocheux',
        'Sentier Cer-Mont',
        'Plateau Cer-Mont',
        'Rive Filevent',
        'Cellier Champêtre',
        "Digue de l'Estuaire",
        "Chute d'Obsidienne",
        'Île Rosa Rugosa',
      ],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Le jour : Coteau du Passage, Lagune des Bains, Rive des Revenants, Main de Sable, Baie Sérénité, Plage de l'Errance (alentours) · Mégapparitions",
      places: [
        'Coteau du Passage',
        'Lagune des Bains',
        'Rive des Revenants',
        'Main de Sable',
        'Baie Sérénité',
        "Plage de l'Errance",
      ],
    },
  ],
  steelix: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste · Mégapparitions',
      places: ['Sentier Céleste'],
      alphas: ['Sentier Céleste'],
    },
  ],
  stunky: [
    {
      region: 'Marais Carmin',
      details: 'Marais Carlate · Mégapparitions',
      places: ['Marais Carlate'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours), Sentier Céleste (alentours) · Mégapparitions',
      places: ['Ancienne Carrière', 'Sentier Céleste'],
    },
  ],
  sudowoodo: [
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages et alentours · Mégapparitions',
      places: ['Col Mer-de-Nuages'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Temple Céleste et alentours',
      places: ['Temple Céleste'],
    },
  ],
  swinub: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Étendue Polaire, Sentier de l'Arène (alentours), Glacier Séracrawl · Mégapparitions",
      places: [
        "Pente de l'Avalanche",
        'Étendue Polaire',
        "Sentier de l'Arène",
        'Glacier Séracrawl',
      ],
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
      places: ['Marais Bouchebée', 'Lande Herbacoton'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Coteau du Passage (alentours)',
      places: ['Coteau du Passage'],
    },
  ],
  tangrowth: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée (aussi en apparitions massives à proximité) · Mégapparitions',
      places: ['Marais Bouchebée'],
      alphas: ['Marais Bouchebée'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Coteau du Passage (alentours, apparitions massives)',
      places: ['Coteau du Passage'],
    },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  teddiursa: [
    {
      region: 'Marais Carmin',
      details:
        "Plaine d'Or (alentours, apparitions massives), Arène Ursa, Champ Bourdonne (alentours) · Mégapparitions",
      places: ["Plaine d'Or", 'Arène Ursa', 'Champ Bourdonne'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier des Pèlerins',
      places: ['Sentier des Pèlerins'],
    },
  ],
  tentacool: [
    {
      region: 'Côte Lazuli',
      details:
        'Plage Long-des-Îles (alentours), Arche Poissigrand, Havre des Algues · Mégapparitions',
      places: ['Plage Long-des-Îles', 'Arche Poissigrand', 'Havre des Algues'],
    },
  ],
  tentacruel: [
    {
      region: 'Côte Lazuli',
      details:
        'Plage Long-des-Îles (alentours), Arche Poissigrand, Havre des Algues · Mégapparitions',
      places: ['Plage Long-des-Îles', 'Arche Poissigrand', 'Havre des Algues'],
      alphas: ['Arche Poissigrand'],
    },
  ],
  thundurus: [
    {
      region: 'Côte Lazuli',
      details: "Entre Main de Sable et Arche Poissigrand (un seul, par temps d'orage)",
      places: ['Main de Sable', 'Arche Poissigrand'],
    },
  ],
  togekiss: [
    { region: 'Plaines Obsidiennes', details: 'Lac Vérité (en vol)', places: ['Lac Vérité'] },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
  ],
  togepi: [
    { region: 'Marais Carmin', details: 'Lande Herbacoton', places: ['Lande Herbacoton'] },
    {
      region: 'Côte Lazuli',
      details:
        'Le jour : Lagune des Bains (aussi en apparitions massives), Baie Sérénité · Mégapparitions',
      places: ['Lagune des Bains', 'Baie Sérénité'],
    },
  ],
  togetic: [
    {
      region: 'Marais Carmin',
      details: 'En vol : Pente des Gringoles (alentours), Lande Herbacoton (alentours)',
      places: ['Pente des Gringoles', 'Lande Herbacoton'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Baie Sérénité (le jour) · Mégapparitions',
      places: ['Baie Sérénité'],
    },
  ],
  tornadus: [
    {
      region: 'Terres Immaculées',
      details: 'Étendue Polaire (un seul, par blizzard)',
      places: ['Étendue Polaire'],
    },
  ],
  torterra: [
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve · Mégapparitions",
      places: ["Île de l'Épreuve"],
      alphas: ["Île de l'Épreuve"],
    },
  ],
  toxicroak: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve · Mégapparitions",
      places: ["Île de l'Épreuve"],
      alphas: ["Île de l'Épreuve"],
    },
    { region: 'Côte Lazuli', details: 'Chemin de la Source', places: ['Chemin de la Source'] },
    {
      region: 'Contrefort Couronné',
      details: 'Ancienne Carrière (alentours)',
      places: ['Ancienne Carrière'],
    },
  ],
  turtwig: [
    {
      region: 'Marais Carmin',
      details: 'Champ Bourdonne (alentours) · Mégapparitions',
      places: ['Champ Bourdonne'],
    },
  ],
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
      places: ['Ruines Bonvivre'],
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
      places: ['Marais Bouchebée', 'Arène Ursa', 'Champ Bourdonne'],
      alphas: ['Marais Bouchebée', 'Arène Ursa'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier des Pèlerins',
      places: ['Sentier des Pèlerins'],
    },
  ],
  uxie: [
    {
      region: 'Terres Immaculées',
      details: 'Caverne Savoir (un seul) · niv. 70',
      places: ['Caverne Savoir'],
    },
  ],
  vaporeon: [{ region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' }],
  vespiquen: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Bocage Agité (un seul, pendant la mission 20)',
      places: ['Bocage Agité'],
      alphas: ['Bocage Agité'],
    },
    {
      region: 'Marais Carmin',
      details: 'Lande Herbacoton (alentours), Champ Bourdonne (alentours), Lac Courage (alentours)',
      places: ['Lande Herbacoton', 'Champ Bourdonne', 'Lac Courage'],
      alphas: ['Lande Herbacoton'],
    },
  ],
  voltorb: [
    {
      region: 'Contrefort Couronné',
      details:
        'Temple Céleste (dans des caisses), Parvis des Prières (aussi dans des caisses) · Mégapparitions',
      places: ['Temple Céleste', 'Parvis des Prières'],
    },
  ],
  vulpix: [
    { region: 'Côte Lazuli', details: 'Cap du Voile · Mégapparitions', places: ['Cap du Voile'] },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  walrein: [
    {
      region: 'Côte Lazuli',
      details:
        'Plage Ginkgo, Crique Paisible (apparitions massives), Plage Long-des-Îles · Mégapparitions',
      places: ['Plage Ginkgo', 'Crique Paisible', 'Plage Long-des-Îles'],
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
      places: [
        'Marais Bouchebée',
        'Arène Ursa',
        'Marais Carlate',
        'Champ Bourdonne',
        'Lac Courage',
      ],
      alphas: ['Lac Courage'],
    },
    { region: 'Contrefort Couronné', details: 'Grotte des Égarés', places: ['Grotte des Égarés'] },
  ],
  wormadam: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Cape Plante, arbres qui tremblent : Champ Flora (alentours), Bocage Agité, Plaine Littorella, Lac Vérité',
      places: ['Champ Flora', 'Bocage Agité', 'Plaine Littorella', 'Lac Vérité'],
    },
    {
      region: 'Marais Carmin',
      details:
        "Cape Sable, arbres qui tremblent : Plaine d'Or (alentours), Marais Bouchebée (alentours)",
      places: ["Plaine d'Or", 'Marais Bouchebée'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Cape Déchet, arbres qui tremblent : Coteau du Passage, Plage Ginkgo, Mont des Capumain, Lagune des Bains, Crique Paisible, Rive des Revenants (alentours), Presqu'île Tombolo, Main de Sable, Baie Sérénité, Plage de l'Errance, Bois Brise-Vent, Chemin de la Source, Plage Long-des-Îles (alentours), Cap du Voile, Arche Poissigrand, Havre des Algues, Île Crache-Feu (alentours)",
      places: [
        'Coteau du Passage',
        'Plage Ginkgo',
        'Mont des Capumain',
        'Lagune des Bains',
        'Crique Paisible',
        'Rive des Revenants',
        "Presqu'île Tombolo",
        'Main de Sable',
        'Baie Sérénité',
        "Plage de l'Errance",
        'Bois Brise-Vent',
        'Chemin de la Source',
        'Plage Long-des-Îles',
        'Cap du Voile',
        'Arche Poissigrand',
        'Havre des Algues',
        'Île Crache-Feu',
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Cape Sable, arbres qui tremblent : Hauts de l'Humilité, Ancienne Carrière (alentours), Falaise Calade, Temple Céleste, Sentier Céleste (alentours), Parvis des Prières, Col Pierlevé, Source Féérique, Passage des Nuages",
      places: [
        "Hauts de l'Humilité",
        'Ancienne Carrière',
        'Falaise Calade',
        'Temple Céleste',
        'Sentier Céleste',
        'Parvis des Prières',
        'Col Pierlevé',
        'Source Féérique',
        'Passage des Nuages',
      ],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Cape Déchet, arbres qui tremblent : Pente de l'Avalanche, Vallée Enneigée, Étendue Polaire, Chute d'Oglacé, Sentier de l'Arène, Glacier Séracrawl (alentours), Terrasse du Glacier, Rocher Esprit, Lac Savoir, Hameau Perle (alentours)",
      places: [
        "Pente de l'Avalanche",
        'Vallée Enneigée',
        'Étendue Polaire',
        "Chute d'Oglacé",
        "Sentier de l'Arène",
        'Glacier Séracrawl',
        'Terrasse du Glacier',
        'Rocher Esprit',
        'Lac Savoir',
        'Hameau Perle',
      ],
    },
  ],
  wurmple: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Colline Ambition (alentours), Champ Flora, Val Ferrache, Forêt Lointaine · Mégapparitions',
      places: ['Colline Ambition', 'Champ Flora', 'Val Ferrache', 'Forêt Lointaine'],
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
      places: ['Marais Bouchebée', 'Arène Ursa', 'Champ Bourdonne'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité (le jour), Hauts de l'Humilité (apparitions massives) · Mégapparitions",
      places: ["Hauts de l'Humilité"],
    },
  ],
  yanmega: [
    {
      region: 'Marais Carmin',
      details: 'Marais Bouchebée (apparitions massives), Champ Bourdonne · Mégapparitions',
      places: ['Marais Bouchebée', 'Champ Bourdonne'],
      alphas: ['Champ Bourdonne'],
    },
    {
      region: 'Contrefort Couronné',
      details: "Hauts de l'Humilité (aussi en apparitions massives, le jour) · Mégapparitions",
      places: ["Hauts de l'Humilité"],
    },
  ],
  zoroark: [
    {
      region: 'Terres Immaculées',
      details:
        'Glacier Séracrawl (alentours, apparitions massives), Terrasse du Glacier (alentours), Souterrain de Givre, Lac Savoir (un seul, pendant la mission 16) · Mégapparitions',
      places: ['Glacier Séracrawl', 'Terrasse du Glacier', 'Souterrain de Givre', 'Lac Savoir'],
      alphas: ['Lac Savoir (niv. 58)'],
    },
  ],
  zorua: [
    {
      region: 'Terres Immaculées',
      details:
        'Glacier Séracrawl (alentours, apparitions massives), Terrasse du Glacier (alentours), Souterrain de Givre · Mégapparitions',
      places: ['Glacier Séracrawl', 'Terrasse du Glacier', 'Souterrain de Givre'],
    },
  ],
  zubat: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "La nuit : Pont Rocheux, Sentier Cer-Mont, Plateau Cer-Mont, Rive Filevent, Cellier Champêtre, Digue de l'Estuaire, Forêt Lointaine, Tunnel de Fer, Chute d'Obsidienne (alentours) · Mégapparitions",
      places: [
        'Pont Rocheux',
        'Sentier Cer-Mont',
        'Plateau Cer-Mont',
        'Rive Filevent',
        'Cellier Champêtre',
        "Digue de l'Estuaire",
        'Forêt Lointaine',
        'Tunnel de Fer',
        "Chute d'Obsidienne",
      ],
    },
    {
      region: 'Marais Carmin',
      details:
        'La nuit : Col Mer-de-Nuages, Hameau Diamant (alentours), Lisière du Hameau, Pente des Gringoles',
      places: ['Col Mer-de-Nuages', 'Hameau Diamant', 'Lisière du Hameau', 'Pente des Gringoles'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité (la nuit), Forêt des Égarés (la nuit), Grotte des Égarés, Ancienne Carrière (alentours, la nuit)",
      places: ["Hauts de l'Humilité", 'Forêt des Égarés', 'Grotte des Égarés', 'Ancienne Carrière'],
    },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic', places: ['Temple de Frimapic'] },
  ],
}
