// Localisations à Hisui, par grande région (5 zones + Rusti-Cité).
// PokeAPI ne fournit aucune donnée d'encounter pour Legends: Arceus, donc ce
// dataset vient de sources externes :
//  - les tables d'apparition du jeu publiées par Serebii (pages « pokearth »
//    de chaque sous-zone, données extraites du jeu) : lieux exacts et mode
//    d'apparition (au sol, en vol, dans l'eau, arbres ou gisements qui
//    tremblent, apparitions massives), heure, météo, rareté (< 5 %) ;
//  - Bulbapedia (section « Game locations » de chaque pokémon) pour ce que
//    ces tables ne disent pas : requêtes, caisses, rencontres uniques,
//    distorsions, mégapparitions. Un lieu que Bulbapedia annonce mais que
//    les tables ne confirment pas est présenté en « Alentours » (le Pokémon
//    est bien dans la zone, mais pas rattaché à cette sous-zone) ;
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
  // « (non confirmé) » : absent de la liste des Barons garantis de Serebii.
  // Les Barons des apparitions massives ne sont pas listés.
  alphas?: string[]
}

export const HISUI_LOCATIONS: Record<string, LocationEntry[]> = {
  abomasnow: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Terrasse du Glacier, Étendue Polaire · Apparitions massives : Terrasse du Glacier · Alentours : Sentier de l'Arène, Glacier Séracrawl · Mégapparitions",
      places: ['Glacier Séracrawl', "Sentier de l'Arène", 'Terrasse du Glacier', 'Étendue Polaire'],
      alphas: ['Étendue Polaire'],
    },
  ],
  abra: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Plaine Littorella, Rive Filevent · Apparitions massives : Rive Filevent · Mégapparitions',
      places: ['Plaine Littorella', 'Rive Filevent'],
    },
    { region: 'Terres Immaculées', details: 'Lac Savoir · Mégapparitions', places: ['Lac Savoir'] },
  ],
  aipom: [
    { region: 'Plaines Obsidiennes', details: 'Île Rosa Rugosa', places: ['Île Rosa Rugosa'] },
    {
      region: 'Côte Lazuli',
      details:
        'Crique Paisible · Mont des Capumain (aussi dans les arbres qui tremblent) · Mégapparitions',
      places: ['Crique Paisible', 'Mont des Capumain'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Rocher Esprit, Sentier de l'Arène, Source Panora-Neige, Terrasse du Glacier, Vallée Enneigée, Étendue Polaire · Alentours : Chute d'Oglacé, Glacier Séracrawl, Hameau Perle · Mégapparitions",
      places: [
        "Chute d'Oglacé",
        'Glacier Séracrawl',
        'Hameau Perle',
        "Pente de l'Avalanche",
        'Rocher Esprit',
        "Sentier de l'Arène",
        'Source Panora-Neige',
        'Terrasse du Glacier',
        'Vallée Enneigée',
        'Étendue Polaire',
      ],
    },
  ],
  alakazam: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Mégapparitions',
      places: ['Plaine Littorella'],
      alphas: ['Plaine Littorella (niv. 60)'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Terres Immaculées',
      details: 'Alentours : Lac Savoir · Mégapparitions',
      places: ['Lac Savoir'],
    },
  ],
  ambipom: [
    {
      region: 'Côte Lazuli',
      details: 'Mont des Capumain · Apparitions massives : Mont des Capumain · Mégapparitions',
      places: ['Mont des Capumain', 'Crique Paisible'],
      alphas: ['Crique Paisible'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Rocher Esprit · Apparitions massives : Pente de l'Avalanche · Alentours : Chute d'Oglacé, Sentier de l'Arène, Glacier Séracrawl · Mégapparitions",
      places: [
        "Chute d'Oglacé",
        'Glacier Séracrawl',
        "Pente de l'Avalanche",
        'Rocher Esprit',
        "Sentier de l'Arène",
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
        "Dans l'eau : Lac Courage, Marais Bouchebée · Alentours : Arène Ursa, Champ Bourdonne · Mégapparitions",
      places: ['Arène Ursa', 'Champ Bourdonne', 'Lac Courage', 'Marais Bouchebée'],
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
      details: 'Alentours : Baie Sérénité, Plage Long-des-Îles, Île Crache-Feu · Mégapparitions',
      places: ['Baie Sérénité', 'Plage Long-des-Îles', 'Île Crache-Feu'],
    },
    {
      region: 'Contrefort Couronné',
      details: "Dans l'eau : Source Féérique",
      places: ['Source Féérique'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Dans l'eau : Lac Savoir, Rocher Esprit · Alentours : Glacier Séracrawl, Hameau Perle",
      places: ['Glacier Séracrawl', 'Hameau Perle', 'Lac Savoir', 'Rocher Esprit'],
    },
  ],
  bastiodon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  beautifly: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'En vol : Bocage Agité (le jour), Champ Flora (le jour), Forêt Lointaine (le jour) · Apparitions massives : Bocage Agité · Mégapparitions',
      places: ['Bocage Agité', 'Champ Flora', 'Forêt Lointaine'],
    },
    {
      region: 'Côte Lazuli',
      details: 'En vol : Cap du Voile (le jour), Lagune des Bains (le jour)',
      places: ['Cap du Voile', 'Lagune des Bains'],
    },
  ],
  bergmite: [
    {
      region: 'Terres Immaculées',
      details:
        "Chambre des Piliers, Glacier Séracrawl, Sentier de l'Arène, Souterrain de Givre, Voie de Glace, Étendue Polaire · Gisements qui tremblent : Chambre des Piliers, Glacier Séracrawl, Sentier de l'Arène, Souterrain de Givre, Vallée Enneigée, Voie de Glace · Apparitions massives : Sentier de l'Arène · Alentours : Pente de l'Avalanche, Terrasse du Glacier · Mégapparitions",
      places: [
        'Chambre des Piliers',
        'Glacier Séracrawl',
        "Pente de l'Avalanche",
        "Sentier de l'Arène",
        'Souterrain de Givre',
        'Terrasse du Glacier',
        'Vallée Enneigée',
        'Voie de Glace',
        'Étendue Polaire',
      ],
    },
  ],
  bibarel: [
    {
      region: 'Plaines Obsidiennes',
      details: "Digue de l'Estuaire · Mégapparitions",
      places: ["Digue de l'Estuaire"],
      alphas: ["Digue de l'Estuaire (niv. 16)"],
    },
    {
      region: 'Marais Carmin',
      details: 'Champ Bourdonne, Marais Bouchebée · Alentours : Arène Ursa',
      places: ['Arène Ursa', 'Champ Bourdonne', 'Marais Bouchebée'],
    },
    { region: 'Côte Lazuli', details: 'Chemin de la Source', places: ['Chemin de la Source'] },
    {
      region: 'Terres Immaculées',
      details: 'Glacier Séracrawl · Alentours : Terrasse du Glacier · Mégapparitions',
      places: ['Glacier Séracrawl', 'Terrasse du Glacier'],
    },
  ],
  bidoof: [
    {
      region: 'Plaines Obsidiennes',
      details: "Colline Ambition, Digue de l'Estuaire, Val Ferrache · Mégapparitions",
      places: ['Colline Ambition', "Digue de l'Estuaire", 'Val Ferrache'],
    },
    {
      region: 'Marais Carmin',
      details: 'Champ Bourdonne, Marais Bouchebée · Alentours : Arène Ursa',
      places: ['Arène Ursa', 'Champ Bourdonne', 'Marais Bouchebée'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Alentours : Glacier Séracrawl, Terrasse du Glacier · Mégapparitions',
      places: ['Glacier Séracrawl', 'Terrasse du Glacier'],
    },
  ],
  blissey: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron',
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
        'Gisements qui tremblent : Lisière du Hameau · Apparitions massives : Col Mer-de-Nuages · Mégapparitions',
      places: ['Col Mer-de-Nuages', 'Lisière du Hameau'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Gisements qui tremblent : Temple Céleste',
      places: ['Temple Céleste'],
    },
  ],
  braviary: [
    {
      region: 'Terres Immaculées',
      details: 'Apparitions massives : Lac Savoir · Mégapparitions',
      places: ['Lac Savoir'],
    },
  ],
  bronzong: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière, Col Pierlevé (le jour) · Alentours : Falaise Calade, Temple Céleste, Grotte Préhistorique · Mégapparitions',
      places: [
        'Ancienne Carrière',
        'Col Pierlevé',
        'Falaise Calade',
        'Grotte Préhistorique',
        'Temple Céleste',
      ],
      alphas: ['Falaise Calade'],
    },
    {
      region: 'Terres Immaculées',
      details:
        'Lac Savoir, Temple de Frimapic · Apparitions massives : Lac Savoir · Mégapparitions',
      places: ['Lac Savoir', 'Temple de Frimapic'],
    },
  ],
  bronzor: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Ancienne Carrière, Col Pierlevé (le jour) · Gisements qui tremblent : Falaise Calade, Forêt des Égarés, Grotte Préhistorique, Sentier des Pèlerins, Source Reculée · Alentours : Temple Céleste · Mégapparitions',
      places: [
        'Ancienne Carrière',
        'Col Pierlevé',
        'Falaise Calade',
        'Forêt des Égarés',
        'Grotte Préhistorique',
        'Sentier des Pèlerins',
        'Source Reculée',
        'Temple Céleste',
      ],
    },
    {
      region: 'Terres Immaculées',
      details:
        'Lac Savoir, Temple de Frimapic · Gisements qui tremblent : Lac Savoir · Apparitions massives : Lac Savoir · Mégapparitions',
      places: ['Lac Savoir', 'Temple de Frimapic'],
    },
  ],
  budew: [
    {
      region: 'Marais Carmin',
      details:
        "Marais Bouchebée, Plaine d'Or (le jour) · Apparitions massives : Plaine d'Or · Alentours : Lande Herbacoton · Mégapparitions",
      places: ['Lande Herbacoton', 'Marais Bouchebée', "Plaine d'Or"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Source Féérique · Apparitions massives : Source Féérique',
      places: ['Source Féérique'],
    },
  ],
  buizel: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Rive Filevent, Val Ferrache · Alentours : Pont Rocheux · Mégapparitions',
      places: ['Pont Rocheux', 'Rive Filevent', 'Val Ferrache'],
    },
    {
      region: 'Côte Lazuli',
      details:
        'Lagune des Bains, Mont des Capumain, Plage Ginkgo · Apparitions massives : Lagune des Bains',
      places: ['Lagune des Bains', 'Mont des Capumain', 'Plage Ginkgo'],
    },
  ],
  buneary: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Forêt Lointaine · Mégapparitions',
      places: ['Forêt Lointaine'],
    },
    {
      region: 'Terres Immaculées',
      details: "Sentier de l'Arène, Source Panora-Neige, Étendue Polaire · Mégapparitions",
      places: ["Sentier de l'Arène", 'Source Panora-Neige', 'Étendue Polaire'],
    },
  ],
  burmy: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Arbres qui tremblent : Bocage Agité, Cellier Champêtre, Chute d'Obsidienne, Digue de l'Estuaire, Plateau Cer-Mont, Pont Rocheux, Rive Filevent, Sentier Cer-Mont",
      places: [
        'Bocage Agité',
        'Cellier Champêtre',
        "Chute d'Obsidienne",
        "Digue de l'Estuaire",
        'Plateau Cer-Mont',
        'Pont Rocheux',
        'Rive Filevent',
        'Sentier Cer-Mont',
      ],
    },
    {
      region: 'Marais Carmin',
      details:
        "Arbres qui tremblent : Arène Ursa, Col Mer-de-Nuages, Marais Bouchebée, Pente des Gringoles, Plaine d'Or, Ruines Brumeuses, Île de l'Épreuve · Alentours : Marais Carlate, Hameau Diamant, Lisière du Hameau, Lande Herbacoton, Champ Bourdonne, Lac Courage (arbres qui tremblent)",
      places: [
        'Arène Ursa',
        'Champ Bourdonne',
        'Col Mer-de-Nuages',
        'Hameau Diamant',
        'Lac Courage',
        'Lande Herbacoton',
        'Lisière du Hameau',
        'Marais Bouchebée',
        'Marais Carlate',
        'Pente des Gringoles',
        "Plaine d'Or",
        'Ruines Brumeuses',
        "Île de l'Épreuve",
      ],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Arbres qui tremblent : Arche Poissigrand, Baie Sérénité, Cap du Voile, Chemin de la Source, Coteau du Passage, Crique Paisible, Havre des Algues, Lagune des Bains, Main de Sable, Mont des Capumain, Plage Ginkgo, Plage de l'Errance, Presqu'île Tombolo · Alentours : Rive des Revenants, Bois Brise-Vent, Plage Long-des-Îles, Île Crache-Feu (arbres qui tremblent)",
      places: [
        'Arche Poissigrand',
        'Baie Sérénité',
        'Bois Brise-Vent',
        'Cap du Voile',
        'Chemin de la Source',
        'Coteau du Passage',
        'Crique Paisible',
        'Havre des Algues',
        'Lagune des Bains',
        'Main de Sable',
        'Mont des Capumain',
        'Plage Ginkgo',
        'Plage Long-des-Îles',
        "Plage de l'Errance",
        "Presqu'île Tombolo",
        'Rive des Revenants',
        'Île Crache-Feu',
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Arbres qui tremblent : Col Pierlevé, Falaise Calade, Hauts de l'Humilité, Parvis des Prières, Passage des Nuages, Source Féérique, Temple Céleste · Alentours : Ancienne Carrière, Sentier Céleste",
      places: [
        'Ancienne Carrière',
        'Col Pierlevé',
        'Falaise Calade',
        "Hauts de l'Humilité",
        'Parvis des Prières',
        'Passage des Nuages',
        'Sentier Céleste',
        'Source Féérique',
        'Temple Céleste',
      ],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Arbres qui tremblent : Chute d'Oglacé, Lac Savoir, Pente de l'Avalanche, Rocher Esprit, Sentier de l'Arène, Terrasse du Glacier, Vallée Enneigée, Étendue Polaire · Alentours : Glacier Séracrawl, Hameau Perle (arbres qui tremblent)",
      places: [
        "Chute d'Oglacé",
        'Glacier Séracrawl',
        'Hameau Perle',
        'Lac Savoir',
        "Pente de l'Avalanche",
        'Rocher Esprit',
        "Sentier de l'Arène",
        'Terrasse du Glacier',
        'Vallée Enneigée',
        'Étendue Polaire',
      ],
    },
  ],
  carnivine: [
    {
      region: 'Marais Carmin',
      details:
        "En vol : Col Mer-de-Nuages, Marais Bouchebée, Plaine d'Or, Ruines Brumeuses, Île de l'Épreuve · Apparitions massives : Plaine d'Or · Alentours : Hameau Diamant, Lande Herbacoton, Lac Courage · Mégapparitions",
      places: [
        'Col Mer-de-Nuages',
        'Hameau Diamant',
        'Lac Courage',
        'Lande Herbacoton',
        'Marais Bouchebée',
        "Plaine d'Or",
        'Ruines Brumeuses',
        "Île de l'Épreuve",
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
      details:
        'Champ Flora (la nuit), Forêt Lointaine (la nuit), Val Ferrache (la nuit) · Apparitions massives : Champ Flora · Mégapparitions',
      places: ['Champ Flora', 'Forêt Lointaine', 'Val Ferrache'],
    },
  ],
  chansey: [
    {
      region: 'Plaines Obsidiennes',
      details: "Alentours : Val Ferrache (apparitions massives), Chute d'Obsidienne",
      places: ["Chute d'Obsidienne", 'Val Ferrache'],
    },
    {
      region: 'Marais Carmin',
      details: 'Apparitions massives : Lande Herbacoton',
      places: ['Lande Herbacoton'],
    },
    {
      region: 'Côte Lazuli',
      details: "Crique Paisible · Apparitions massives : Presqu'île Tombolo · Mégapparitions",
      places: ['Crique Paisible', "Presqu'île Tombolo"],
      alphas: ["Presqu'île Tombolo"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Source Reculée (apparitions massives)',
      places: ['Source Reculée'],
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche · Apparitions massives : Pente de l'Avalanche",
      places: ["Pente de l'Avalanche"],
    },
  ],
  chatot: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details:
        'En vol : Rive des Revenants (le jour) · Apparitions massives : Rive des Revenants · Mégapparitions',
      places: ['Rive des Revenants'],
    },
  ],
  cherrim: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Alentours : Forêt Lointaine (arbres qui tremblent)',
      places: ['Forêt Lointaine'],
    },
    {
      region: 'Marais Carmin',
      details: 'Alentours : Marais Bouchebée (arbres qui tremblent)',
      places: ['Marais Bouchebée'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'Arbres qui tremblent : Mont des Gringoles, Source Reculée · Alentours : Grotte Préhistorique',
      places: ['Grotte Préhistorique', 'Mont des Gringoles', 'Source Reculée'],
    },
  ],
  cherubi: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Apparitions massives : Forêt Lointaine',
      places: ['Forêt Lointaine'],
    },
    {
      region: 'Marais Carmin',
      details: 'Arbres qui tremblent, dans un coin sans nom de sous-zone',
    },
    {
      region: 'Contrefort Couronné',
      details: 'Arbres qui tremblent : Mont des Gringoles, Source Reculée',
      places: ['Mont des Gringoles', 'Source Reculée'],
    },
  ],
  chimchar: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Plateau Cer-Mont, Île Rosa Rugosa · Apparitions massives : Île Rosa Rugosa · Rive Filevent (un seul, pendant la requête 20) · Mégapparitions',
      places: ['Plateau Cer-Mont', 'Rive Filevent', 'Île Rosa Rugosa'],
    },
  ],
  chimecho: [
    {
      region: 'Contrefort Couronné',
      details:
        'Parvis des Prières, Sentier Céleste · Alentours : Grotte Préhistorique (apparitions massives) · Mégapparitions',
      places: ['Grotte Préhistorique', 'Parvis des Prières', 'Sentier Céleste'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Lac Savoir · Apparitions massives : Lac Savoir',
      places: ['Lac Savoir'],
      alphas: ['Lac Savoir'],
    },
  ],
  chingling: [
    {
      region: 'Contrefort Couronné',
      details:
        'Parvis des Prières · Alentours : Grotte Préhistorique (apparitions massives) · Mégapparitions',
      places: ['Grotte Préhistorique', 'Parvis des Prières'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Lac Savoir · Apparitions massives : Lac Savoir',
      places: ['Lac Savoir'],
    },
  ],
  clefable: [
    {
      region: 'Contrefort Couronné',
      details: 'Mégapparitions',
      places: ['Source Féérique'],
      alphas: ['Source Féérique'],
    },
  ],
  clefairy: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Source Féérique (la nuit) · Apparitions massives : Source Féérique · Mégapparitions',
      places: ['Source Féérique'],
    },
  ],
  cleffa: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details:
        'Source Féérique (la nuit) · Apparitions massives : Source Féérique · Mégapparitions',
      places: ['Source Féérique'],
    },
  ],
  combee: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Bocage Agité · Arbres qui tremblent : Forêt Lointaine, Île Rosa Rugosa · Alentours : Tunnel de Fer',
      places: ['Bocage Agité', 'Forêt Lointaine', 'Tunnel de Fer', 'Île Rosa Rugosa'],
    },
    {
      region: 'Marais Carmin',
      details:
        'Col Mer-de-Nuages · Arbres qui tremblent : Champ Bourdonne, Lande Herbacoton · Apparitions massives : Col Mer-de-Nuages · Alentours : Lac Courage',
      places: ['Champ Bourdonne', 'Col Mer-de-Nuages', 'Lac Courage', 'Lande Herbacoton'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Mont des Capumain · Arbres qui tremblent : Mont des Capumain',
      places: ['Mont des Capumain'],
    },
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
        "Marais Bouchebée, Marais Carlate, Île de l'Épreuve · Apparitions massives : Marais Bouchebée · Alentours : Plateau Tourbeux · Mégapparitions",
      places: ['Marais Bouchebée', 'Marais Carlate', 'Plateau Tourbeux', "Île de l'Épreuve"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Ancienne Carrière',
      places: ['Ancienne Carrière'],
    },
  ],
  crobat: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Uniquement en Baron',
      places: ['Grotte des Égarés'],
      alphas: ['Grotte des Égarés'],
    },
    { region: 'Terres Immaculées', details: "En vol : Chute d'Oglacé", places: ["Chute d'Oglacé"] },
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
      details: "Apparitions massives : Plage de l'Errance · Mégapparitions",
      places: ["Plage de l'Errance", 'Plage Ginkgo'],
      alphas: ['Plage Ginkgo'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  drifblim: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Lac Vérité (la nuit), Plaine Littorella (la nuit), Île Rosa Rugosa (la nuit) · En vol : Plaine Littorella (la nuit), Île Rosa Rugosa (la nuit) · Mégapparitions',
      places: ['Lac Vérité', 'Plaine Littorella', 'Île Rosa Rugosa'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Côte Lazuli',
      details:
        "Baie Sérénité (la nuit), Lagune des Bains (la nuit) · En vol : Baie Sérénité (la nuit), Coteau du Passage (la nuit), Lagune des Bains (la nuit), Main de Sable (la nuit), Rive des Revenants (la nuit) · Dans l'eau : Arche Poissigrand (la nuit), Baie Sérénité (la nuit), Havre des Algues (la nuit) · Alentours : Plage Ginkgo (la nuit), Mont des Capumain (la nuit), Crique Paisible (la nuit), Presqu'île Tombolo (la nuit), Plage de l'Errance (la nuit), Plage Long-des-Îles (apparitions massives à proximité, la nuit), Île Crache-Feu (la nuit)",
      places: [
        'Arche Poissigrand',
        'Baie Sérénité',
        'Coteau du Passage',
        'Crique Paisible',
        'Havre des Algues',
        'Lagune des Bains',
        'Main de Sable',
        'Mont des Capumain',
        'Plage Ginkgo',
        'Plage Long-des-Îles',
        "Plage de l'Errance",
        "Presqu'île Tombolo",
        'Rive des Revenants',
        'Île Crache-Feu',
      ],
    },
    {
      region: 'Terres Immaculées',
      details:
        'Glacier Séracrawl (la nuit), Rocher Esprit (la nuit), Terrasse du Glacier (la nuit), Étendue Polaire (la nuit) · Apparitions massives : Terrasse du Glacier · Mégapparitions',
      places: ['Glacier Séracrawl', 'Rocher Esprit', 'Terrasse du Glacier', 'Étendue Polaire'],
    },
  ],
  drifloon: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Champ Flora (la nuit), Colline Ambition (la nuit), Rive Filevent (la nuit), Val Ferrache (la nuit), Île Rosa Rugosa (la nuit) · En vol : Colline Ambition (la nuit), Sentier Cer-Mont (la nuit), Val Ferrache (la nuit), Île Rosa Rugosa (la nuit) · Alentours : Pont Rocheux (la nuit) · Mégapparitions',
      places: [
        'Champ Flora',
        'Colline Ambition',
        'Pont Rocheux',
        'Rive Filevent',
        'Sentier Cer-Mont',
        'Val Ferrache',
        'Île Rosa Rugosa',
      ],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Baie Sérénité (la nuit), Lagune des Bains (la nuit), Plage Ginkgo (la nuit) · En vol : Baie Sérénité (la nuit), Coteau du Passage (la nuit), Main de Sable (la nuit), Rive des Revenants (la nuit) · Dans l'eau : Arche Poissigrand (la nuit), Baie Sérénité (la nuit), Havre des Algues (la nuit) · Alentours : Mont des Capumain (la nuit), Crique Paisible (la nuit), Presqu'île Tombolo (la nuit), Plage de l'Errance (la nuit), Plage Long-des-Îles (apparitions massives à proximité, la nuit), Île Crache-Feu (la nuit)",
      places: [
        'Arche Poissigrand',
        'Baie Sérénité',
        'Coteau du Passage',
        'Crique Paisible',
        'Havre des Algues',
        'Lagune des Bains',
        'Main de Sable',
        'Mont des Capumain',
        'Plage Ginkgo',
        'Plage Long-des-Îles',
        "Plage de l'Errance",
        "Presqu'île Tombolo",
        'Rive des Revenants',
        'Île Crache-Feu',
      ],
    },
    {
      region: 'Terres Immaculées',
      details:
        'Glacier Séracrawl (la nuit), Rocher Esprit (la nuit), Terrasse du Glacier (la nuit), Étendue Polaire (la nuit) · Apparitions massives : Terrasse du Glacier · Mégapparitions',
      places: ['Glacier Séracrawl', 'Rocher Esprit', 'Terrasse du Glacier', 'Étendue Polaire'],
    },
  ],
  dusclops: [
    {
      region: 'Côte Lazuli',
      details: 'Rive des Revenants (la nuit) · Apparitions massives : Rive des Revenants',
      places: ['Rive des Revenants'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles · Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche (la nuit), Sentier de l'Arène (la nuit) · Alentours : Chute d'Oglacé (aussi en apparitions massives, la nuit) · Mégapparitions",
      places: ["Chute d'Oglacé", "Pente de l'Avalanche", "Sentier de l'Arène"],
    },
  ],
  dusknoir: [
    {
      region: 'Côte Lazuli',
      details: 'Uniquement en Baron',
      places: ['Rive des Revenants'],
      alphas: ['Rive des Revenants'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles · Mégapparitions' },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  duskull: [
    {
      region: 'Côte Lazuli',
      details: 'Rive des Revenants (la nuit) · Apparitions massives : Rive des Revenants',
      places: ['Rive des Revenants'],
    },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche (la nuit), Sentier de l'Arène (la nuit) · Alentours : Chute d'Oglacé (aussi en apparitions massives, la nuit) · Mégapparitions",
      places: ["Chute d'Oglacé", "Pente de l'Avalanche", "Sentier de l'Arène"],
    },
  ],
  dustox: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'En vol : Bocage Agité (la nuit), Champ Flora (la nuit), Forêt Lointaine (la nuit) · Mégapparitions',
      places: ['Bocage Agité', 'Champ Flora', 'Forêt Lointaine'],
    },
    {
      region: 'Côte Lazuli',
      details: 'En vol : Cap du Voile (la nuit), Lagune des Bains (la nuit)',
      places: ['Cap du Voile', 'Lagune des Bains'],
    },
  ],
  eevee: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Val Ferrache · Apparitions massives : Val Ferrache · Distorsions spatio-temporelles',
      places: ['Val Ferrache'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Côte Lazuli',
      details: 'Alentours : Coteau du Passage · Distorsions spatio-temporelles',
      places: ['Coteau du Passage'],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  electabuzz: [
    {
      region: 'Contrefort Couronné',
      details: 'Passage des Nuages · Apparitions massives : Passage des Nuages · Mégapparitions',
      places: ['Passage des Nuages'],
    },
    {
      region: 'Terres Immaculées',
      details: "Chute d'Oglacé, Sentier de l'Arène · Distorsions spatio-temporelles",
      places: ["Chute d'Oglacé", "Sentier de l'Arène"],
      alphas: ['emplacement non précisé'],
    },
  ],
  electivire: [
    {
      region: 'Contrefort Couronné',
      details: 'Mégapparitions',
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
      details: 'Passage des Nuages · Apparitions massives : Passage des Nuages · Mégapparitions',
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
      details: 'Mégapparitions',
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
      details:
        "Dans l'eau : Havre des Algues · Apparitions massives : Havre des Algues · Mégapparitions",
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
      details: 'Alentours : Val Ferrache (apparitions massives), Rive Filevent · Mégapparitions',
      places: ['Rive Filevent', 'Val Ferrache', 'Pont Rocheux'],
      alphas: ['Pont Rocheux (niv. 31)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Côte Lazuli',
      details:
        'Lagune des Bains, Mont des Capumain, Plage Ginkgo · Apparitions massives : Lagune des Bains',
      places: ['Lagune des Bains', 'Mont des Capumain', 'Plage Ginkgo'],
    },
  ],
  froslass: [
    {
      region: 'Terres Immaculées',
      details:
        "Glacier Séracrawl (la nuit, rare), Pente de l'Avalanche (la nuit, rare), Temple de Frimapic (la nuit, rare), Étendue Polaire (la nuit, rare) · Alentours : Hameau Perle (la nuit) · Mégapparitions",
      places: [
        'Glacier Séracrawl',
        'Hameau Perle',
        "Pente de l'Avalanche",
        'Temple de Frimapic',
        'Étendue Polaire',
        'Chambre des Piliers',
      ],
      alphas: ['Chambre des Piliers'],
    },
  ],
  gabite: [
    {
      region: 'Contrefort Couronné',
      details: 'Apparitions massives : Falaise Calade · Mégapparitions',
      places: ['Falaise Calade'],
      alphas: ['Falaise Calade'],
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche · Apparitions massives : Pente de l'Avalanche",
      places: ["Pente de l'Avalanche"],
    },
  ],
  gallade: [
    {
      region: 'Terres Immaculées',
      details: 'Mégapparitions',
      places: ['Temple de Frimapic'],
      alphas: ['Temple de Frimapic (niv. 70)'],
    },
  ],
  garchomp: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: 'Uniquement en Baron',
      places: ["Pente de l'Avalanche"],
      alphas: ["Pente de l'Avalanche"],
    },
  ],
  gardevoir: [
    {
      region: 'Terres Immaculées',
      details: 'Apparitions massives : Lac Savoir · Mégapparitions',
      places: ['Lac Savoir', 'Rocher Esprit'],
      alphas: ['Rocher Esprit'],
    },
  ],
  gastly: [
    {
      region: 'Marais Carmin',
      details:
        "Arène Ursa (la nuit), Champ Bourdonne (la nuit), Lande Herbacoton (la nuit), Marais Bouchebée (la nuit), Marais Carlate (la nuit), Plaine d'Or (la nuit), Ruines Brumeuses (la nuit), Île de l'Épreuve (la nuit) · En vol : Marais Bouchebée (la nuit) · Apparitions massives : Ruines Brumeuses · Alentours : Plateau Tourbeux (la nuit), Lac Courage (la nuit) · Mégapparitions",
      places: [
        'Arène Ursa',
        'Champ Bourdonne',
        'Lac Courage',
        'Lande Herbacoton',
        'Marais Bouchebée',
        'Marais Carlate',
        "Plaine d'Or",
        'Plateau Tourbeux',
        'Ruines Brumeuses',
        "Île de l'Épreuve",
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'Falaise Calade (la nuit), Mont des Gringoles (la nuit), Parvis des Prières (la nuit), Temple Céleste (la nuit) · Mégapparitions',
      places: ['Falaise Calade', 'Mont des Gringoles', 'Parvis des Prières', 'Temple Céleste'],
    },
    {
      region: 'Terres Immaculées',
      details:
        'Étendue Polaire (la nuit) · Apparitions massives : Étendue Polaire · Alentours : Glacier Séracrawl (la nuit), Souterrain de Givre (la nuit) · Mégapparitions',
      places: ['Glacier Séracrawl', 'Souterrain de Givre', 'Étendue Polaire'],
    },
  ],
  gastrodon: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Plaine Littorella, Île Rosa Rugosa · Apparitions massives : Île Rosa Rugosa · Mégapparitions',
      places: ['Plaine Littorella', 'Île Rosa Rugosa'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Havre des Algues · Apparitions massives : Havre des Algues · Mégapparitions',
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
      details:
        "Plateau Cer-Mont, Pont Rocheux · Gisements qui tremblent : Cellier Champêtre, Digue de l'Estuaire, Forêt Lointaine, Plateau Cer-Mont, Pont Rocheux, Rive Filevent, Sentier Cer-Mont, Tunnel de Fer · Alentours : Chute d'Obsidienne · Mégapparitions",
      places: [
        'Cellier Champêtre',
        "Chute d'Obsidienne",
        "Digue de l'Estuaire",
        'Forêt Lointaine',
        'Plateau Cer-Mont',
        'Pont Rocheux',
        'Rive Filevent',
        'Sentier Cer-Mont',
        'Tunnel de Fer',
      ],
    },
    {
      region: 'Marais Carmin',
      details:
        "Arène Ursa, Marais Bouchebée, Marais Carlate, Pente des Gringoles · Gisements qui tremblent : Arène Ursa, Champ Bourdonne, Col Mer-de-Nuages, Lande Herbacoton, Lisière du Hameau, Marais Bouchebée, Marais Carlate, Pente des Gringoles, Plaine d'Or, Plateau Tourbeux, Ruines Brumeuses, Île de l'Épreuve · Apparitions massives : Pente des Gringoles",
      places: [
        'Arène Ursa',
        'Champ Bourdonne',
        'Col Mer-de-Nuages',
        'Lande Herbacoton',
        'Lisière du Hameau',
        'Marais Bouchebée',
        'Marais Carlate',
        'Pente des Gringoles',
        "Plaine d'Or",
        'Plateau Tourbeux',
        'Ruines Brumeuses',
        "Île de l'Épreuve",
      ],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Gisements qui tremblent : Baie Sérénité, Cap du Voile, Coteau du Passage, Lagune des Bains, Main de Sable, Mont des Capumain, Plage Ginkgo, Plage de l'Errance, Rive des Revenants · Mégapparitions",
      places: [
        'Baie Sérénité',
        'Cap du Voile',
        'Coteau du Passage',
        'Lagune des Bains',
        'Main de Sable',
        'Mont des Capumain',
        'Plage Ginkgo',
        "Plage de l'Errance",
        'Rive des Revenants',
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'Falaise Calade (le jour), Mont des Gringoles, Parvis des Prières, Temple Céleste · Apparitions massives : Mont des Gringoles · Alentours : Ancienne Carrière · Mégapparitions',
      places: [
        'Ancienne Carrière',
        'Falaise Calade',
        'Mont des Gringoles',
        'Parvis des Prières',
        'Temple Céleste',
      ],
    },
  ],
  gible: [
    {
      region: 'Contrefort Couronné',
      details:
        'Falaise Calade, Grotte des Égarés · Gisements qui tremblent : Falaise Calade, Grotte des Égarés · Apparitions massives : Falaise Calade · Mégapparitions',
      places: ['Falaise Calade', 'Grotte des Égarés'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche · Gisements qui tremblent : Pente de l'Avalanche · Apparitions massives : Pente de l'Avalanche",
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
        "Glacier Séracrawl, Pente de l'Avalanche, Temple de Frimapic, Étendue Polaire · Gisements qui tremblent : Chute d'Oglacé, Hameau Perle, Pente de l'Avalanche, Rocher Esprit, Terrasse du Glacier, Étendue Polaire · Sentier de l'Arène (un seul, pendant la requête 86) · Mégapparitions",
      places: [
        "Chute d'Oglacé",
        'Glacier Séracrawl',
        'Hameau Perle',
        "Pente de l'Avalanche",
        'Rocher Esprit',
        "Sentier de l'Arène",
        'Temple de Frimapic',
        'Terrasse du Glacier',
        'Étendue Polaire',
      ],
      alphas: ['Étendue Polaire'],
    },
  ],
  glameow: [
    {
      region: 'Côte Lazuli',
      details:
        'Cap du Voile, Coteau du Passage · Apparitions massives : Cap du Voile · Mégapparitions',
      places: ['Cap du Voile', 'Coteau du Passage'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Alentours : Terrasse du Glacier · Mégapparitions',
      places: ['Terrasse du Glacier'],
    },
  ],
  gligar: [
    {
      region: 'Contrefort Couronné',
      details:
        'Falaise Calade, Temple Céleste · Apparitions massives : Falaise Calade · Alentours : Grotte Préhistorique, Passage des Nuages · Mégapparitions',
      places: ['Falaise Calade', 'Grotte Préhistorique', 'Passage des Nuages', 'Temple Céleste'],
      alphas: ['Temple Céleste'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Sentier de l'Arène, Terrasse du Glacier (le jour) · Apparitions massives : Terrasse du Glacier",
      places: ["Sentier de l'Arène", 'Terrasse du Glacier'],
    },
  ],
  gliscor: [
    {
      region: 'Contrefort Couronné',
      details: 'Mégapparitions',
      places: ['Grotte Préhistorique'],
      alphas: ['Grotte Préhistorique'],
    },
  ],
  golbat: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Cellier Champêtre (la nuit), Digue de l'Estuaire (la nuit), Forêt Lointaine (la nuit), Plateau Cer-Mont (la nuit), Rive Filevent (la nuit) · En vol : Cellier Champêtre (la nuit), Digue de l'Estuaire (la nuit), Plateau Cer-Mont (la nuit), Rive Filevent (la nuit) · Apparitions massives : Forêt Lointaine · Alentours : Tunnel de Fer (la nuit), Chute d'Obsidienne (la nuit) · Mégapparitions",
      places: [
        'Cellier Champêtre',
        "Chute d'Obsidienne",
        "Digue de l'Estuaire",
        'Forêt Lointaine',
        'Plateau Cer-Mont',
        'Rive Filevent',
        'Tunnel de Fer',
      ],
      alphas: ['Tunnel de Fer (niv. 35)'],
    },
    {
      region: 'Marais Carmin',
      details:
        'Col Mer-de-Nuages (la nuit), Lisière du Hameau (la nuit), Pente des Gringoles (la nuit) · Alentours : Hameau Diamant (la nuit)',
      places: ['Col Mer-de-Nuages', 'Hameau Diamant', 'Lisière du Hameau', 'Pente des Gringoles'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Forêt des Égarés (la nuit), Hauts de l'Humilité (la nuit) · En vol : Forêt des Égarés (la nuit), Grotte des Égarés, Hauts de l'Humilité (la nuit) · Apparitions massives : Hauts de l'Humilité · Alentours : Ancienne Carrière (la nuit)",
      places: ['Ancienne Carrière', 'Forêt des Égarés', 'Grotte des Égarés', "Hauts de l'Humilité"],
    },
    {
      region: 'Terres Immaculées',
      details: 'En vol : Temple de Frimapic',
      places: ['Temple de Frimapic'],
    },
  ],
  golduck: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Apparitions massives : Forêt Lointaine',
      places: ['Forêt Lointaine'],
    },
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve · Apparitions massives : Plaine d'Or · Mégapparitions",
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
      details: 'Mégapparitions',
      places: ['Mont des Gringoles'],
      alphas: ['Mont des Gringoles'],
    },
  ],
  goodra: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Uniquement en Baron (non confirmé)',
      places: ['Lac Vérité'],
      alphas: ['Lac Vérité (niv. 58) (non confirmé)'],
    },
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Uniquement en Baron',
      places: ['Ancienne Carrière'],
      alphas: ['Ancienne Carrière'],
    },
  ],
  goomy: [
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve · Apparitions massives : Arène Ursa · Mégapparitions",
      places: ['Arène Ursa', "Île de l'Épreuve"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Ancienne Carrière',
      places: ['Ancienne Carrière'],
    },
  ],
  graveler: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Gisements qui tremblent : Plaine Littorella, Tunnel de Fer, Île Rosa Rugosa · Mégapparitions',
      places: [
        'Plaine Littorella',
        'Tunnel de Fer',
        'Île Rosa Rugosa',
        'Bocage Agité',
        "Chute d'Obsidienne",
      ],
      alphas: ['Bocage Agité (niv. 30)', "Chute d'Obsidienne"],
    },
    {
      region: 'Marais Carmin',
      details:
        "Arène Ursa, Marais Bouchebée, Marais Carlate, Pente des Gringoles · Gisements qui tremblent : Arène Ursa, Champ Bourdonne, Col Mer-de-Nuages, Lac Courage, Lande Herbacoton, Lisière du Hameau, Marais Bouchebée, Marais Carlate, Pente des Gringoles, Plaine d'Or, Plateau Tourbeux, Ruines Brumeuses, Île de l'Épreuve · Apparitions massives : Pente des Gringoles",
      places: [
        'Arène Ursa',
        'Champ Bourdonne',
        'Col Mer-de-Nuages',
        'Lac Courage',
        'Lande Herbacoton',
        'Lisière du Hameau',
        'Marais Bouchebée',
        'Marais Carlate',
        'Pente des Gringoles',
        "Plaine d'Or",
        'Plateau Tourbeux',
        'Ruines Brumeuses',
        "Île de l'Épreuve",
      ],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Île Crache-Feu · Gisements qui tremblent : Baie Sérénité, Bois Brise-Vent, Cap du Voile, Chemin de la Source, Coteau du Passage, Crique Paisible, Lagune des Bains, Main de Sable, Mont des Capumain, Plage Ginkgo, Plage de l'Errance, Presqu'île Tombolo, Rive des Revenants, Île Crache-Feu · Mégapparitions",
      places: [
        'Baie Sérénité',
        'Bois Brise-Vent',
        'Cap du Voile',
        'Chemin de la Source',
        'Coteau du Passage',
        'Crique Paisible',
        'Lagune des Bains',
        'Main de Sable',
        'Mont des Capumain',
        'Plage Ginkgo',
        "Plage de l'Errance",
        "Presqu'île Tombolo",
        'Rive des Revenants',
        'Île Crache-Feu',
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Falaise Calade (le jour), Mont des Gringoles, Parvis des Prières, Temple Céleste · Gisements qui tremblent : Col Pierlevé, Hauts de l'Humilité, Mont des Gringoles, Parvis des Prières, Sentier Céleste, Source Féérique · Apparitions massives : Mont des Gringoles · Alentours : Ancienne Carrière · Mégapparitions",
      places: [
        'Ancienne Carrière',
        'Col Pierlevé',
        'Falaise Calade',
        "Hauts de l'Humilité",
        'Mont des Gringoles',
        'Parvis des Prières',
        'Sentier Céleste',
        'Source Féérique',
        'Temple Céleste',
      ],
    },
    { region: 'Terres Immaculées', details: 'Temple de Frimapic', places: ['Temple de Frimapic'] },
  ],
  grotle: [
    {
      region: 'Marais Carmin',
      details: 'Alentours : Champ Bourdonne · Mégapparitions',
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
      details:
        "En vol : Chute d'Obsidienne · Dans l'eau : Lac Vérité · Apparitions massives : Lac Vérité",
      places: ["Chute d'Obsidienne", 'Lac Vérité'],
      alphas: ['Lac Vérité (niv. 60)'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Alentours : Main de Sable · Mégapparitions',
      places: ['Main de Sable'],
      alphas: ['Main de Sable'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Grotte Préhistorique',
      places: ['Grotte Préhistorique'],
    },
  ],
  happiny: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Tunnel de Fer · Alentours : Val Ferrache (apparitions massives), Chute d'Obsidienne",
      places: ["Chute d'Obsidienne", 'Tunnel de Fer', 'Val Ferrache'],
    },
    {
      region: 'Marais Carmin',
      details: 'Apparitions massives : Lande Herbacoton',
      places: ['Lande Herbacoton'],
    },
    {
      region: 'Côte Lazuli',
      details: "Crique Paisible · Apparitions massives : Presqu'île Tombolo · Mégapparitions",
      places: ['Crique Paisible', "Presqu'île Tombolo"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Source Reculée (apparitions massives)',
      places: ['Source Reculée'],
    },
    {
      region: 'Terres Immaculées',
      details: "Pente de l'Avalanche · Apparitions massives : Pente de l'Avalanche",
      places: ["Pente de l'Avalanche"],
    },
  ],
  haunter: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details:
        "Arène Ursa (la nuit), Champ Bourdonne (la nuit), Lande Herbacoton (la nuit), Marais Bouchebée (la nuit), Marais Carlate (la nuit), Ruines Brumeuses (la nuit), Île de l'Épreuve (la nuit) · En vol : Marais Bouchebée (la nuit) · Apparitions massives : Ruines Brumeuses · Alentours : Plaine d'Or (la nuit), Plateau Tourbeux (la nuit), Lac Courage (la nuit) · Mégapparitions",
      places: [
        'Arène Ursa',
        'Champ Bourdonne',
        'Lac Courage',
        'Lande Herbacoton',
        'Marais Bouchebée',
        'Marais Carlate',
        "Plaine d'Or",
        'Plateau Tourbeux',
        'Ruines Brumeuses',
        "Île de l'Épreuve",
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'Falaise Calade (la nuit), Mont des Gringoles (la nuit), Parvis des Prières (la nuit), Temple Céleste (la nuit) · Mégapparitions',
      places: ['Falaise Calade', 'Mont des Gringoles', 'Parvis des Prières', 'Temple Céleste'],
    },
    {
      region: 'Terres Immaculées',
      details:
        'Étendue Polaire (la nuit) · Apparitions massives : Étendue Polaire · Alentours : Glacier Séracrawl (la nuit), Souterrain de Givre (la nuit) · Mégapparitions',
      places: ['Glacier Séracrawl', 'Souterrain de Givre', 'Étendue Polaire'],
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
      details: 'Uniquement en Baron',
      places: ['Bocage Agité'],
      alphas: ['Bocage Agité (niv. 45)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details:
        'Forêt des Égarés (le jour) · Arbres qui tremblent : Forêt des Égarés, Sentier des Pèlerins · Apparitions massives : Forêt des Égarés · Mégapparitions',
      places: ['Forêt des Égarés', 'Sentier des Pèlerins'],
    },
  ],
  hippopotas: [
    {
      region: 'Marais Carmin',
      details:
        'Marais Bouchebée, Marais Carlate · Apparitions massives : Marais Bouchebée · Alentours : Plateau Tourbeux · Mégapparitions',
      places: ['Marais Bouchebée', 'Marais Carlate', 'Plateau Tourbeux'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste · Apparitions massives : Sentier Céleste · Mégapparitions',
      places: ['Sentier Céleste'],
    },
  ],
  hippowdon: [
    {
      region: 'Marais Carmin',
      details: 'Marais Carlate · Mégapparitions',
      places: ['Marais Carlate', 'Marais Bouchebée'],
      alphas: ['Marais Bouchebée'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste · Apparitions massives : Sentier Céleste · Mégapparitions',
      places: ['Sentier Céleste'],
    },
  ],
  honchkrow: [
    {
      region: 'Marais Carmin',
      details: 'Mégapparitions',
      places: ['Col Mer-de-Nuages'],
      alphas: ['Col Mer-de-Nuages'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Alentours : Lagune des Bains (la nuit)',
      places: ['Lagune des Bains'],
    },
  ],
  infernape: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Mégapparitions',
      places: ['Île Rosa Rugosa'],
      alphas: ['Île Rosa Rugosa (niv. 65)'],
    },
  ],
  jolteon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  kadabra: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plaine Littorella · Apparitions massives : Plaine Littorella · Mégapparitions',
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
        'Rocher Esprit (le jour), Temple de Frimapic · Alentours : Lac Savoir (apparitions massives) · Mégapparitions',
      places: ['Lac Savoir', 'Rocher Esprit', 'Temple de Frimapic'],
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
        "Cellier Champêtre, Digue de l'Estuaire, Rive Filevent, Sentier Cer-Mont · Mégapparitions",
      places: ['Cellier Champêtre', "Digue de l'Estuaire", 'Rive Filevent', 'Sentier Cer-Mont'],
    },
    {
      region: 'Marais Carmin',
      details: "Col Mer-de-Nuages, Plaine d'Or · Alentours : Hameau Diamant · Mégapparitions",
      places: ['Col Mer-de-Nuages', 'Hameau Diamant', "Plaine d'Or"],
    },
  ],
  kricketune: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Cellier Champêtre, Digue de l'Estuaire, Rive Filevent · Apparitions massives : Rive Filevent · Mégapparitions",
      places: ['Cellier Champêtre', "Digue de l'Estuaire", 'Rive Filevent', 'Plateau Cer-Mont'],
      alphas: ["Digue de l'Estuaire (niv. 30)", 'Plateau Cer-Mont'],
    },
    {
      region: 'Marais Carmin',
      details:
        "Col Mer-de-Nuages, Plaine d'Or · Apparitions massives : Col Mer-de-Nuages · Alentours : Hameau Diamant · Mégapparitions",
      places: ['Col Mer-de-Nuages', 'Hameau Diamant', "Plaine d'Or"],
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
      details: 'Apparitions massives : Ruines Brumeuses · Mégapparitions',
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
      details: 'Ruines Brumeuses · Alentours : Hameau Diamant · Mégapparitions',
      places: ['Hameau Diamant', 'Ruines Brumeuses'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Sentier de l'Arène, Source Panora-Neige · Apparitions massives : Pente de l'Avalanche · Mégapparitions",
      places: ["Pente de l'Avalanche", "Sentier de l'Arène", 'Source Panora-Neige'],
    },
  ],
  lilligant: [
    { region: 'Marais Carmin', details: 'Mégapparitions · En faisant évoluer Chlorobule' },
  ],
  lopunny: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Mégapparitions',
      places: ['Forêt Lointaine'],
      alphas: ['Forêt Lointaine (niv. 40)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Terres Immaculées',
      details:
        "Sentier de l'Arène (rare), Source Panora-Neige (rare), Étendue Polaire (rare) · Mégapparitions",
      places: ["Sentier de l'Arène", 'Source Panora-Neige', 'Étendue Polaire'],
    },
  ],
  lucario: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Chute d'Oglacé (par blizzard), Sentier de l'Arène (rare), Source Panora-Neige (rare) · Mégapparitions",
      places: ["Chute d'Oglacé", "Sentier de l'Arène", 'Source Panora-Neige'],
      alphas: ["Chute d'Oglacé"],
    },
  ],
  lumineon: [
    {
      region: 'Côte Lazuli',
      details: 'Apparitions massives : Havre des Algues · Mégapparitions',
      places: ['Havre des Algues'],
      alphas: ['Havre des Algues'],
    },
  ],
  luxio: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Lac Vérité, Plaine Littorella · Apparitions massives : Plaine Littorella · Alentours : Tunnel de Fer · Mégapparitions',
      places: ['Lac Vérité', 'Plaine Littorella', 'Tunnel de Fer', 'Champ Flora'],
      alphas: ['Champ Flora (niv. 40)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité, Parvis des Prières, Passage des Nuages, Sentier des Pèlerins · Apparitions massives : Sentier des Pèlerins · Mégapparitions",
      places: [
        "Hauts de l'Humilité",
        'Parvis des Prières',
        'Passage des Nuages',
        'Sentier des Pèlerins',
      ],
    },
  ],
  luxray: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Lac Vérité, Plaine Littorella · Apparitions massives : Lac Vérité · Mégapparitions',
      places: ['Lac Vérité', 'Plaine Littorella'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details:
        "Hauts de l'Humilité, Parvis des Prières, Passage des Nuages, Sentier des Pèlerins · Apparitions massives : Hauts de l'Humilité · Mégapparitions",
      places: [
        "Hauts de l'Humilité",
        'Parvis des Prières',
        'Passage des Nuages',
        'Sentier des Pèlerins',
      ],
      alphas: ['Parvis des Prières'],
    },
  ],
  machamp: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details: 'Mégapparitions',
      places: ["Sentier de l'Arène"],
      alphas: ["Sentier de l'Arène"],
    },
  ],
  machoke: [
    {
      region: 'Plaines Obsidiennes',
      details: "Alentours : Chute d'Obsidienne",
      places: ["Chute d'Obsidienne"],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Plage de l'Errance · Apparitions massives : Plage de l'Errance · Alentours : Plage Ginkgo",
      places: ['Plage Ginkgo', "Plage de l'Errance"],
      alphas: ['Plage Ginkgo'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Mont des Gringoles · Alentours : Passage des Nuages · Mégapparitions',
      places: ['Mont des Gringoles', 'Passage des Nuages'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Chute d'Oglacé, Sentier de l'Arène, Source Panora-Neige · Apparitions massives : Sentier de l'Arène · Mégapparitions",
      places: ["Chute d'Oglacé", "Sentier de l'Arène", 'Source Panora-Neige'],
    },
  ],
  machop: [
    {
      region: 'Plaines Obsidiennes',
      details: "Tunnel de Fer · Alentours : Chute d'Obsidienne",
      places: ["Chute d'Obsidienne", 'Tunnel de Fer'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Plage de l'Errance · Apparitions massives : Plage de l'Errance · Alentours : Plage Ginkgo",
      places: ['Plage Ginkgo', "Plage de l'Errance"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Mont des Gringoles · Alentours : Passage des Nuages · Mégapparitions',
      places: ['Mont des Gringoles', 'Passage des Nuages'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Chute d'Oglacé, Sentier de l'Arène, Source Panora-Neige · Apparitions massives : Sentier de l'Arène · Mégapparitions",
      places: ["Chute d'Oglacé", "Sentier de l'Arène", 'Source Panora-Neige'],
    },
  ],
  magby: [
    {
      region: 'Côte Lazuli',
      details: 'Île Crache-Feu · Apparitions massives : Île Crache-Feu · Mégapparitions',
      places: ['Île Crache-Feu'],
    },
  ],
  magikarp: [
    {
      region: 'Plaines Obsidiennes',
      details: "Dans l'eau : Chute d'Obsidienne, Lac Vérité · Apparitions massives : Pont Rocheux",
      places: ["Chute d'Obsidienne", 'Lac Vérité', 'Pont Rocheux', 'Tunnel de Fer'],
      alphas: ['Tunnel de Fer'],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Sentier Céleste',
      places: ['Sentier Céleste'],
    },
  ],
  magmar: [
    {
      region: 'Côte Lazuli',
      details: 'Île Crache-Feu · Apparitions massives : Île Crache-Feu · Mégapparitions',
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
        'Alentours : Falaise Calade (en vol), Sentier Céleste (en vol), Source Féérique (en vol) · Distorsions spatio-temporelles',
      places: ['Falaise Calade', 'Sentier Céleste', 'Source Féérique'],
    },
  ],
  mamoswine: [
    {
      region: 'Terres Immaculées',
      details: "Apparitions massives : Pente de l'Avalanche · Mégapparitions",
      places: ["Pente de l'Avalanche", 'Glacier Séracrawl'],
      alphas: ['Glacier Séracrawl'],
    },
  ],
  manaphy: [{ region: 'Côte Lazuli', details: 'Creux du Cap (un seul)', places: ['Creux du Cap'] }],
  mantine: [
    {
      region: 'Côte Lazuli',
      details: "Dans l'eau : Baie Sérénité · Mégapparitions",
      places: ['Baie Sérénité'],
      alphas: ['Baie Sérénité'],
    },
  ],
  mantyke: [
    {
      region: 'Côte Lazuli',
      details:
        "Dans l'eau : Baie Sérénité · Apparitions massives : Baie Sérénité · Alentours : Plage Ginkgo, Mont des Capumain, Lagune des Bains, Plage de l'Errance · Mégapparitions",
      places: [
        'Baie Sérénité',
        'Lagune des Bains',
        'Mont des Capumain',
        'Plage Ginkgo',
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
      details:
        'Plaine Littorella, Val Ferrache · Apparitions massives : Plaine Littorella · Mégapparitions',
      places: ['Plaine Littorella', 'Val Ferrache'],
    },
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
  ],
  misdreavus: [
    {
      region: 'Contrefort Couronné',
      details:
        'Col Pierlevé (la nuit), Parvis des Prières (la nuit), Temple Céleste (la nuit) · Mégapparitions',
      places: ['Col Pierlevé', 'Parvis des Prières', 'Temple Céleste'],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Chambre des Piliers, Souterrain de Givre · Apparitions massives : Pente de l'Avalanche · Alentours : Terrasse du Glacier · Mégapparitions",
      places: [
        'Chambre des Piliers',
        "Pente de l'Avalanche",
        'Souterrain de Givre',
        'Terrasse du Glacier',
      ],
    },
  ],
  mismagius: [
    {
      region: 'Contrefort Couronné',
      details: 'Mégapparitions',
      places: ['Col Pierlevé'],
      alphas: ['Col Pierlevé'],
    },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  monferno: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Plateau Cer-Mont, Île Rosa Rugosa (rare) · Apparitions massives : Île Rosa Rugosa · Mégapparitions',
      places: ['Plateau Cer-Mont', 'Île Rosa Rugosa'],
    },
  ],
  mothim: [
    { region: 'Plaines Obsidiennes', details: 'En vol : Bocage Agité', places: ['Bocage Agité'] },
    {
      region: 'Côte Lazuli',
      details:
        'En vol : Cap du Voile, Chemin de la Source, Mont des Capumain · Alentours : Coteau du Passage, Île Crache-Feu',
      places: [
        'Cap du Voile',
        'Chemin de la Source',
        'Coteau du Passage',
        'Mont des Capumain',
        'Île Crache-Feu',
      ],
      alphas: ['Chemin de la Source'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'En vol : Forêt des Égarés · Alentours : Ancienne Carrière',
      places: ['Ancienne Carrière', 'Forêt des Égarés'],
      alphas: ['Forêt des Égarés'],
    },
  ],
  'mr-mime': [
    {
      region: 'Plaines Obsidiennes',
      details: 'Plaine Littorella · Apparitions massives : Plaine Littorella · Mégapparitions',
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
      details:
        "Sentier de l'Arène (rare), Source Panora-Neige (rare) · Apparitions massives : Sentier de l'Arène",
      places: ["Sentier de l'Arène", 'Source Panora-Neige'],
    },
  ],
  murkrow: [
    {
      region: 'Marais Carmin',
      details: 'Col Mer-de-Nuages (la nuit) · Mégapparitions',
      places: ['Col Mer-de-Nuages'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Cap du Voile (la nuit), Coteau du Passage (la nuit), Crique Paisible (la nuit), Lagune des Bains (la nuit), Mont des Capumain (la nuit), Plage Ginkgo (la nuit), Plage Long-des-Îles (la nuit), Plage de l'Errance (la nuit) · En vol : Cap du Voile (la nuit), Plage de l'Errance (la nuit) · Alentours : Bois Brise-Vent (la nuit), Chemin de la Source (la nuit)",
      places: [
        'Bois Brise-Vent',
        'Cap du Voile',
        'Chemin de la Source',
        'Coteau du Passage',
        'Crique Paisible',
        'Lagune des Bains',
        'Mont des Capumain',
        'Plage Ginkgo',
        'Plage Long-des-Îles',
        "Plage de l'Errance",
      ],
    },
  ],
  ninetales: [
    {
      region: 'Côte Lazuli',
      details: 'Mégapparitions',
      places: ['Île Crache-Feu'],
      alphas: ['Île Crache-Feu'],
    },
    { region: 'Terres Immaculées', details: 'Mégapparitions' },
  ],
  nosepass: [
    {
      region: 'Contrefort Couronné',
      details:
        'Grotte Préhistorique, Temple Céleste · Gisements qui tremblent : Grotte Préhistorique, Parvis des Prières, Passage des Nuages · Mégapparitions',
      places: [
        'Grotte Préhistorique',
        'Parvis des Prières',
        'Passage des Nuages',
        'Temple Céleste',
      ],
    },
  ],
  octillery: [
    {
      region: 'Côte Lazuli',
      details:
        "Apparitions massives : Plage de l'Errance · Creux du Cap (après avoir capturé Manaphy pendant la requête 66) · Alentours : Plage Long-des-Îles",
      places: ['Creux du Cap', 'Plage Long-des-Îles', "Plage de l'Errance"],
      alphas: ["Plage de l'Errance"],
    },
    { region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' },
  ],
  onix: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details: 'Alentours : Marais Carlate, Lac Courage · Mégapparitions',
      places: ['Lac Courage', 'Marais Carlate', 'Hameau Diamant'],
      alphas: ['Hameau Diamant'],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier Céleste · Apparitions massives : Sentier Céleste',
      places: ['Sentier Céleste'],
    },
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
      details: 'Uniquement en Baron (non confirmé)',
      places: ['Lac Courage'],
      alphas: ['Lac Courage (non confirmé)'],
    },
    { region: 'Côte Lazuli', details: 'Mégapparitions · En faisant évoluer Qwilfish de Hisui' },
  ],
  pachirisu: [
    {
      region: 'Marais Carmin',
      details:
        "Lande Herbacoton · Arbres qui tremblent : Arène Ursa, Champ Bourdonne, Lande Herbacoton, Marais Bouchebée, Île de l'Épreuve · Mégapparitions",
      places: [
        'Arène Ursa',
        'Champ Bourdonne',
        'Lande Herbacoton',
        'Marais Bouchebée',
        "Île de l'Épreuve",
      ],
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
        "Champ Bourdonne, Col Mer-de-Nuages, Lisière du Hameau, Plaine d'Or · Apparitions massives : Plaine d'Or · Alentours : Arène Ursa, Lande Herbacoton · Mégapparitions",
      places: [
        'Arène Ursa',
        'Champ Bourdonne',
        'Col Mer-de-Nuages',
        'Lande Herbacoton',
        'Lisière du Hameau',
        "Plaine d'Or",
      ],
    },
    { region: 'Côte Lazuli', details: 'Alentours : Bois Brise-Vent', places: ['Bois Brise-Vent'] },
    {
      region: 'Contrefort Couronné',
      details: "Forêt des Égarés, Hauts de l'Humilité",
      places: ['Forêt des Égarés', "Hauts de l'Humilité"],
    },
  ],
  parasect: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Mégapparitions',
      places: ['Cellier Champêtre'],
      alphas: ['Cellier Champêtre (niv. 30)'],
    },
    {
      region: 'Marais Carmin',
      details:
        "Champ Bourdonne, Col Mer-de-Nuages, Lisière du Hameau, Plaine d'Or · Apparitions massives : Plaine d'Or · Alentours : Arène Ursa, Lande Herbacoton · Mégapparitions",
      places: [
        'Arène Ursa',
        'Champ Bourdonne',
        'Col Mer-de-Nuages',
        'Lande Herbacoton',
        'Lisière du Hameau',
        "Plaine d'Or",
      ],
    },
    { region: 'Côte Lazuli', details: 'Bois Brise-Vent', places: ['Bois Brise-Vent'] },
    {
      region: 'Contrefort Couronné',
      details: "Forêt des Égarés, Hauts de l'Humilité",
      places: ['Forêt des Égarés', "Hauts de l'Humilité"],
    },
  ],
  petilil: [
    {
      region: 'Marais Carmin',
      details:
        "Lande Herbacoton, Île de l'Épreuve · Apparitions massives : Île de l'Épreuve · Mégapparitions",
      places: ['Lande Herbacoton', "Île de l'Épreuve"],
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
        'Cellier Champêtre (le jour), Champ Flora · Alentours : Colline Ambition · Mégapparitions',
      places: ['Cellier Champêtre', 'Champ Flora', 'Colline Ambition'],
    },
    { region: 'Marais Carmin', details: "Alentours : Plaine d'Or", places: ["Plaine d'Or"] },
  ],
  pikachu: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Cellier Champêtre · Mégapparitions',
      places: ['Cellier Champêtre'],
    },
    { region: 'Marais Carmin', details: "Alentours : Plaine d'Or", places: ["Plaine d'Or"] },
    { region: 'Côte Lazuli', details: 'Alentours : Bois Brise-Vent', places: ['Bois Brise-Vent'] },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  piloswine: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Glacier Séracrawl (le jour), Pente de l'Avalanche, Étendue Polaire · Apparitions massives : Étendue Polaire · Alentours : Sentier de l'Arène · Mégapparitions",
      places: [
        'Glacier Séracrawl',
        "Pente de l'Avalanche",
        "Sentier de l'Arène",
        'Étendue Polaire',
      ],
      alphas: ["Sentier de l'Arène"],
    },
  ],
  piplup: [
    {
      region: 'Côte Lazuli',
      details:
        'Alentours : Chemin de la Source, Plage Long-des-Îles (apparitions massives) · Mégapparitions',
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
        'Alentours : Chemin de la Source, Plage Long-des-Îles (apparitions massives) · Mégapparitions',
      places: ['Chemin de la Source', 'Plage Long-des-Îles'],
    },
  ],
  probopass: [
    {
      region: 'Contrefort Couronné',
      details: 'Mégapparitions',
      places: ['Grotte Préhistorique'],
      alphas: ['Grotte Préhistorique'],
    },
  ],
  psyduck: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Forêt Lointaine · Apparitions massives : Forêt Lointaine',
      places: ['Forêt Lointaine'],
    },
    {
      region: 'Marais Carmin',
      details:
        "Marais Bouchebée, Plaine d'Or, Île de l'Épreuve · Apparitions massives : Plaine d'Or · Mégapparitions",
      places: ['Marais Bouchebée', "Plaine d'Or", "Île de l'Épreuve"],
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
      details: 'Coteau du Passage · Apparitions massives : Cap du Voile · Mégapparitions',
      places: ['Cap du Voile', 'Coteau du Passage'],
      alphas: ['Cap du Voile'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Alentours : Terrasse du Glacier · Mégapparitions',
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
      details: 'Alentours : Île Rosa Rugosa',
      places: ['Île Rosa Rugosa'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Dans l'eau : Arche Poissigrand, Baie Sérénité · Alentours : Lagune des Bains, Crique Paisible, Presqu'île Tombolo, Main de Sable, Plage Long-des-Îles, Havre des Algues, Île Crache-Feu · Mégapparitions",
      places: [
        'Arche Poissigrand',
        'Baie Sérénité',
        'Crique Paisible',
        'Havre des Algues',
        'Lagune des Bains',
        'Main de Sable',
        'Plage Long-des-Îles',
        "Presqu'île Tombolo",
        'Île Crache-Feu',
      ],
      alphas: ['Plage Long-des-Îles'],
    },
  ],
  raichu: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Marais Carmin',
      details: 'Uniquement en Baron',
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
        'Rocher Esprit (le jour), Temple de Frimapic · Alentours : Lac Savoir (apparitions massives) · Mégapparitions',
      places: ['Lac Savoir', 'Rocher Esprit', 'Temple de Frimapic'],
    },
  ],
  rampardos: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  rapidash: [
    {
      region: 'Plaines Obsidiennes',
      details: 'Apparitions massives : Val Ferrache · Mégapparitions',
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
        "Dans l'eau : Baie Sérénité, Crique Paisible, Main de Sable · Alentours : Lagune des Bains, Rive des Revenants, Presqu'île Tombolo, Plage de l'Errance",
      places: [
        'Baie Sérénité',
        'Crique Paisible',
        'Lagune des Bains',
        'Main de Sable',
        "Plage de l'Errance",
        "Presqu'île Tombolo",
        'Rive des Revenants',
      ],
    },
  ],
  rhydon: [
    {
      region: 'Marais Carmin',
      details: 'Apparitions massives : Pente des Gringoles · Mégapparitions',
      places: ['Pente des Gringoles'],
    },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Parvis des Prières, Sentier Céleste · Mégapparitions',
      places: ['Parvis des Prières', 'Sentier Céleste'],
    },
  ],
  rhyhorn: [
    {
      region: 'Marais Carmin',
      details:
        'Lisière du Hameau, Pente des Gringoles, Ruines Brumeuses · Apparitions massives : Pente des Gringoles · Mégapparitions',
      places: ['Lisière du Hameau', 'Pente des Gringoles', 'Ruines Brumeuses'],
      alphas: ['Lisière du Hameau'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Parvis des Prières, Sentier Céleste · Mégapparitions',
      places: ['Parvis des Prières', 'Sentier Céleste'],
    },
  ],
  rhyperior: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    { region: 'Côte Lazuli', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Mégapparitions',
      places: ['Parvis des Prières'],
      alphas: ['Parvis des Prières'],
    },
  ],
  riolu: [
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Chute d'Oglacé, Sentier de l'Arène (rare), Source Panora-Neige (rare) · Apparitions massives : Chute d'Oglacé · Mégapparitions",
      places: ["Chute d'Oglacé", "Sentier de l'Arène", 'Source Panora-Neige'],
    },
  ],
  roselia: [
    {
      region: 'Marais Carmin',
      details:
        'Col Mer-de-Nuages, Marais Bouchebée · Alentours : Lande Herbacoton · Mégapparitions',
      places: ['Col Mer-de-Nuages', 'Lande Herbacoton', 'Marais Bouchebée'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Source Féérique · Apparitions massives : Source Féérique',
      places: ['Source Féérique'],
    },
  ],
  roserade: [
    {
      region: 'Marais Carmin',
      details: 'Mégapparitions',
      places: ['Col Mer-de-Nuages'],
      alphas: ['Col Mer-de-Nuages'],
    },
  ],
  rotom: [
    {
      region: 'Contrefort Couronné',
      details:
        'Col Pierlevé · Temple Céleste (dans des caisses) · Parvis des Prières (dans des caisses)',
      places: ['Col Pierlevé', 'Parvis des Prières', 'Temple Céleste'],
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
        'En vol : Lac Savoir, Rocher Esprit · Apparitions massives : Lac Savoir · Alentours : Glacier Séracrawl, Hameau Perle · Mégapparitions',
      places: ['Glacier Séracrawl', 'Hameau Perle', 'Lac Savoir', 'Rocher Esprit'],
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
      details: 'Forêt Lointaine · Alentours : Arène du Grand Arbre · Mégapparitions',
      places: ['Arène du Grand Arbre', 'Forêt Lointaine'],
      alphas: ['Arène du Grand Arbre (niv. 42)'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Grotte Préhistorique',
      places: ['Grotte Préhistorique'],
    },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  sealeo: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details:
        'Crique Paisible, Plage Long-des-Îles · Apparitions massives : Crique Paisible · Mégapparitions',
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
      details:
        'Plaine Littorella, Île Rosa Rugosa · Apparitions massives : Île Rosa Rugosa · Mégapparitions',
      places: ['Plaine Littorella', 'Île Rosa Rugosa'],
    },
    {
      region: 'Côte Lazuli',
      details:
        'Baie Sérénité, Havre des Algues · Apparitions massives : Havre des Algues · Mégapparitions',
      places: ['Baie Sérénité', 'Havre des Algues'],
    },
  ],
  shieldon: [{ region: 'Contrefort Couronné', details: 'Distorsions spatio-temporelles' }],
  shinx: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Champ Flora, Plateau Cer-Mont · Alentours : Colline Ambition, Tunnel de Fer · Mégapparitions',
      places: ['Champ Flora', 'Colline Ambition', 'Plateau Cer-Mont', 'Tunnel de Fer'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        'Parvis des Prières, Sentier des Pèlerins · Apparitions massives : Sentier des Pèlerins · Mégapparitions',
      places: ['Parvis des Prières', 'Sentier des Pèlerins'],
    },
  ],
  silcoon: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Champ Flora (le jour), Forêt Lointaine (le jour) · Apparitions massives : Champ Flora · Mégapparitions',
      places: ['Champ Flora', 'Forêt Lointaine', 'Val Ferrache'],
      alphas: ['Val Ferrache (non confirmé)'],
    },
  ],
  skorupi: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details:
        "Plage Ginkgo, Plage de l'Errance · Apparitions massives : Plage de l'Errance · Mégapparitions",
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
      details: 'Alentours : Ancienne Carrière, Sentier Céleste · Mégapparitions',
      places: ['Ancienne Carrière', 'Sentier Céleste'],
    },
  ],
  sliggoo: [
    {
      region: 'Marais Carmin',
      details: 'Apparitions massives : Arène Ursa · Mégapparitions',
      places: ['Arène Ursa', "Île de l'Épreuve"],
      alphas: ["Île de l'Épreuve"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Ancienne Carrière',
      places: ['Ancienne Carrière'],
    },
  ],
  sneasel: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Sentier Céleste, Grotte Préhistorique · Mégapparitions',
      places: ['Grotte Préhistorique', 'Sentier Céleste'],
    },
    {
      region: 'Terres Immaculées',
      details:
        'Terrasse du Glacier · Hameau Perle (alentours, forme de Hisui) · Alentours : Glacier Séracrawl',
      places: ['Glacier Séracrawl', 'Hameau Perle', 'Terrasse du Glacier'],
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
      details: 'Mégapparitions',
      places: ['Plaine Littorella'],
      alphas: ['Plaine Littorella (niv. 45)'],
    },
    { region: 'Marais Carmin', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Terres Immaculées',
      details: "Sentier de l'Arène (rare), Source Panora-Neige (rare)",
      places: ["Sentier de l'Arène", 'Source Panora-Neige'],
    },
  ],
  snorunt: [
    {
      region: 'Terres Immaculées',
      details:
        "Pente de l'Avalanche, Vallée Enneigée, Étendue Polaire · Gisements qui tremblent : Chute d'Oglacé, Hameau Perle, Pente de l'Avalanche, Rocher Esprit, Sentier de l'Arène, Terrasse du Glacier, Étendue Polaire · Mégapparitions",
      places: [
        "Chute d'Oglacé",
        'Hameau Perle',
        "Pente de l'Avalanche",
        'Rocher Esprit',
        "Sentier de l'Arène",
        'Terrasse du Glacier',
        'Vallée Enneigée',
        'Étendue Polaire',
      ],
    },
  ],
  snover: [
    { region: 'Contrefort Couronné', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Terrasse du Glacier, Étendue Polaire · Apparitions massives : Terrasse du Glacier · Alentours : Sentier de l'Arène, Glacier Séracrawl · Mégapparitions",
      places: ['Glacier Séracrawl', "Sentier de l'Arène", 'Terrasse du Glacier', 'Étendue Polaire'],
    },
  ],
  spheal: [
    { region: 'Plaines Obsidiennes', details: 'Mégapparitions' },
    {
      region: 'Côte Lazuli',
      details:
        'Crique Paisible, Plage Ginkgo · Apparitions massives : Crique Paisible · Mégapparitions',
      places: ['Crique Paisible', 'Plage Ginkgo'],
    },
  ],
  spiritomb: [
    {
      region: 'Marais Carmin',
      details: 'Ruines Brumeuses (la nuit, rare) · Mégapparitions (après la requête 22)',
      places: ['Ruines Brumeuses'],
      alphas: ['Ruines Brumeuses (non confirmé)'],
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
      details: 'Forêt des Égarés · Alentours : Terrasse du Glacier',
      places: ['Forêt des Égarés', 'Terrasse du Glacier'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Le jour, dans un coin sans nom de sous-zone · Apparitions massives',
    },
  ],
  staraptor: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Apparitions massives : Lac Vérité · Alentours : Cellier Champêtre (en vol) · Mégapparitions',
      places: ['Cellier Champêtre', 'Lac Vérité'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Baie Sérénité (le jour) · En vol : Rive des Revenants (le jour) · Apparitions massives : Baie Sérénité · Alentours : Plage de l'Errance (en vol), Chemin de la Source (le jour) · Mégapparitions",
      places: ['Baie Sérénité', 'Chemin de la Source', "Plage de l'Errance", 'Rive des Revenants'],
    },
  ],
  staravia: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Plateau Cer-Mont (le jour) · En vol : Cellier Champêtre (le jour), Digue de l'Estuaire (le jour), Plaine Littorella (le jour), Plateau Cer-Mont (le jour), Rive Filevent (le jour), Île Rosa Rugosa (le jour) · Alentours : Chute d'Obsidienne (le jour) · Mégapparitions",
      places: [
        'Cellier Champêtre',
        "Chute d'Obsidienne",
        "Digue de l'Estuaire",
        'Plaine Littorella',
        'Plateau Cer-Mont',
        'Rive Filevent',
        'Île Rosa Rugosa',
      ],
      alphas: ['Rive Filevent (niv. 32)'],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Baie Sérénité (le jour), Lagune des Bains (le jour) · En vol : Baie Sérénité (le jour), Coteau du Passage (le jour), Lagune des Bains (le jour), Main de Sable (le jour), Rive des Revenants (le jour) · Alentours : Plage de l'Errance (le jour) · Mégapparitions",
      places: [
        'Baie Sérénité',
        'Coteau du Passage',
        'Lagune des Bains',
        'Main de Sable',
        "Plage de l'Errance",
        'Rive des Revenants',
      ],
    },
  ],
  starly: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Plateau Cer-Mont (le jour) · En vol : Cellier Champêtre (le jour), Colline Ambition (le jour), Digue de l'Estuaire (le jour), Plateau Cer-Mont (le jour), Rive Filevent (le jour), Sentier Cer-Mont (le jour), Val Ferrache (le jour), Île Rosa Rugosa (le jour) · Apparitions massives : Sentier Cer-Mont · Alentours : Pont Rocheux (le jour), Chute d'Obsidienne (le jour) · Mégapparitions",
      places: [
        'Cellier Champêtre',
        "Chute d'Obsidienne",
        'Colline Ambition',
        "Digue de l'Estuaire",
        'Plateau Cer-Mont',
        'Pont Rocheux',
        'Rive Filevent',
        'Sentier Cer-Mont',
        'Val Ferrache',
        'Île Rosa Rugosa',
      ],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Lagune des Bains (le jour) · En vol : Baie Sérénité (le jour), Coteau du Passage (le jour), Main de Sable (le jour), Rive des Revenants (le jour) · Alentours : Plage de l'Errance (le jour) · Mégapparitions",
      places: [
        'Baie Sérénité',
        'Coteau du Passage',
        'Lagune des Bains',
        'Main de Sable',
        "Plage de l'Errance",
        'Rive des Revenants',
      ],
    },
  ],
  steelix: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
    {
      region: 'Contrefort Couronné',
      details: 'Mégapparitions',
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
      details: 'Alentours : Ancienne Carrière, Sentier Céleste · Mégapparitions',
      places: ['Ancienne Carrière', 'Sentier Céleste'],
    },
  ],
  sudowoodo: [
    {
      region: 'Marais Carmin',
      details: 'Apparitions massives : Col Mer-de-Nuages · Mégapparitions',
      places: ['Col Mer-de-Nuages'],
    },
    { region: 'Contrefort Couronné', details: 'Temple Céleste', places: ['Temple Céleste'] },
  ],
  swinub: [
    { region: 'Marais Carmin', details: 'Mégapparitions' },
    {
      region: 'Terres Immaculées',
      details:
        "Glacier Séracrawl (le jour), Pente de l'Avalanche, Étendue Polaire · Apparitions massives : Étendue Polaire · Alentours : Sentier de l'Arène · Mégapparitions",
      places: [
        'Glacier Séracrawl',
        "Pente de l'Avalanche",
        "Sentier de l'Arène",
        'Étendue Polaire',
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
      details: 'Marais Bouchebée · Alentours : Lande Herbacoton · Mégapparitions',
      places: ['Lande Herbacoton', 'Marais Bouchebée'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Alentours : Coteau du Passage',
      places: ['Coteau du Passage'],
    },
  ],
  tangrowth: [
    {
      region: 'Marais Carmin',
      details: 'Mégapparitions',
      places: ['Marais Bouchebée'],
      alphas: ['Marais Bouchebée'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Alentours : Coteau du Passage (apparitions massives)',
      places: ['Coteau du Passage'],
    },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  teddiursa: [
    {
      region: 'Marais Carmin',
      details:
        "Arène Ursa · Alentours : Plaine d'Or (apparitions massives), Champ Bourdonne · Mégapparitions",
      places: ['Arène Ursa', 'Champ Bourdonne', "Plaine d'Or"],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier des Pèlerins · Apparitions massives : Sentier des Pèlerins',
      places: ['Sentier des Pèlerins'],
    },
  ],
  tentacool: [
    {
      region: 'Côte Lazuli',
      details:
        "Dans l'eau : Arche Poissigrand, Havre des Algues · Alentours : Plage Long-des-Îles · Mégapparitions",
      places: ['Arche Poissigrand', 'Havre des Algues', 'Plage Long-des-Îles'],
    },
  ],
  tentacruel: [
    {
      region: 'Côte Lazuli',
      details:
        "Dans l'eau : Arche Poissigrand, Havre des Algues · Alentours : Plage Long-des-Îles · Mégapparitions",
      places: ['Arche Poissigrand', 'Havre des Algues', 'Plage Long-des-Îles'],
      alphas: ['Arche Poissigrand'],
    },
  ],
  thundurus: [
    {
      region: 'Côte Lazuli',
      details: "Entre Main de Sable et Arche Poissigrand (un seul, par temps d'orage)",
      places: ['Arche Poissigrand', 'Main de Sable'],
    },
  ],
  togekiss: [
    { region: 'Plaines Obsidiennes', details: 'En vol : Lac Vérité', places: ['Lac Vérité'] },
    { region: 'Côte Lazuli', details: 'Mégapparitions' },
  ],
  togepi: [
    {
      region: 'Marais Carmin',
      details: 'Lande Herbacoton · Apparitions massives : Lande Herbacoton',
      places: ['Lande Herbacoton'],
    },
    {
      region: 'Côte Lazuli',
      details:
        'Baie Sérénité (le jour), Lagune des Bains (le jour) · Apparitions massives : Lagune des Bains · Mégapparitions',
      places: ['Baie Sérénité', 'Lagune des Bains'],
    },
  ],
  togetic: [
    {
      region: 'Marais Carmin',
      details: 'Alentours : Pente des Gringoles (en vol), Lande Herbacoton (en vol)',
      places: ['Lande Herbacoton', 'Pente des Gringoles'],
    },
    {
      region: 'Côte Lazuli',
      details: 'Baie Sérénité (le jour, rare) · Mégapparitions',
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
      details: 'Mégapparitions',
      places: ["Île de l'Épreuve"],
      alphas: ["Île de l'Épreuve"],
    },
  ],
  toxicroak: [
    { region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' },
    {
      region: 'Marais Carmin',
      details: "Île de l'Épreuve · Apparitions massives : Île de l'Épreuve · Mégapparitions",
      places: ["Île de l'Épreuve"],
      alphas: ["Île de l'Épreuve"],
    },
    { region: 'Côte Lazuli', details: 'Chemin de la Source', places: ['Chemin de la Source'] },
    {
      region: 'Contrefort Couronné',
      details: 'Alentours : Ancienne Carrière',
      places: ['Ancienne Carrière'],
    },
  ],
  turtwig: [
    {
      region: 'Marais Carmin',
      details: 'Alentours : Champ Bourdonne · Mégapparitions',
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
        'Ruines Bonvivre (rare) · Mégapparitions (les 28 formes, après avoir complété les notes de recherche sur les Zarbi)',
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
      details: 'Alentours : Champ Bourdonne · Mégapparitions',
      places: ['Champ Bourdonne', 'Marais Bouchebée', 'Arène Ursa'],
      alphas: ['Marais Bouchebée', 'Arène Ursa'],
    },
    {
      region: 'Contrefort Couronné',
      details: 'Sentier des Pèlerins · Apparitions massives : Sentier des Pèlerins',
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
      details: 'Uniquement en Baron (non confirmé)',
      places: ['Bocage Agité'],
      alphas: ['Bocage Agité (non confirmé)'],
    },
    {
      region: 'Marais Carmin',
      details: 'Arbres qui tremblent : Champ Bourdonne, Lande Herbacoton · Alentours : Lac Courage',
      places: ['Champ Bourdonne', 'Lac Courage', 'Lande Herbacoton'],
      alphas: ['Lande Herbacoton'],
    },
  ],
  voltorb: [
    {
      region: 'Contrefort Couronné',
      details:
        'Temple Céleste (dans des caisses) · Parvis des Prières (aussi dans des caisses) · Mégapparitions',
      places: ['Parvis des Prières', 'Temple Céleste'],
    },
  ],
  vulpix: [
    {
      region: 'Côte Lazuli',
      details: 'Cap du Voile · Apparitions massives : Cap du Voile · Mégapparitions',
      places: ['Cap du Voile'],
    },
    {
      region: 'Terres Immaculées',
      details: 'Gisements qui tremblent : Vallée Enneigée (rare) · Mégapparitions',
      places: ['Vallée Enneigée'],
    },
  ],
  walrein: [
    {
      region: 'Côte Lazuli',
      details: 'Plage Long-des-Îles · Apparitions massives : Crique Paisible · Mégapparitions',
      places: ['Crique Paisible', 'Plage Long-des-Îles', 'Plage Ginkgo'],
      alphas: ['Plage Ginkgo'],
    },
    { region: 'Terres Immaculées', details: 'Distorsions spatio-temporelles' },
  ],
  weavile: [{ region: 'Plaines Obsidiennes', details: 'Distorsions spatio-temporelles' }],
  whiscash: [
    {
      region: 'Marais Carmin',
      details:
        "Dans l'eau : Lac Courage, Marais Bouchebée · Alentours : Arène Ursa, Marais Carlate (apparitions massives), Champ Bourdonne · Mégapparitions",
      places: [
        'Arène Ursa',
        'Champ Bourdonne',
        'Lac Courage',
        'Marais Bouchebée',
        'Marais Carlate',
      ],
      alphas: ['Lac Courage'],
    },
    { region: 'Contrefort Couronné', details: 'Grotte des Égarés', places: ['Grotte des Égarés'] },
  ],
  wormadam: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Arbres qui tremblent : Bocage Agité (rare), Lac Vérité, Plaine Littorella · Alentours : Champ Flora',
      places: ['Bocage Agité', 'Champ Flora', 'Lac Vérité', 'Plaine Littorella'],
    },
    {
      region: 'Marais Carmin',
      details: "Alentours : Plaine d'Or, Marais Bouchebée (arbres qui tremblent)",
      places: ['Marais Bouchebée', "Plaine d'Or"],
    },
    {
      region: 'Côte Lazuli',
      details:
        "Arbres qui tremblent : Arche Poissigrand, Baie Sérénité, Bois Brise-Vent, Cap du Voile, Chemin de la Source, Coteau du Passage, Crique Paisible, Havre des Algues, Lagune des Bains, Main de Sable, Mont des Capumain, Plage Ginkgo, Plage de l'Errance, Presqu'île Tombolo · Alentours : Rive des Revenants, Plage Long-des-Îles, Île Crache-Feu (arbres qui tremblent)",
      places: [
        'Arche Poissigrand',
        'Baie Sérénité',
        'Bois Brise-Vent',
        'Cap du Voile',
        'Chemin de la Source',
        'Coteau du Passage',
        'Crique Paisible',
        'Havre des Algues',
        'Lagune des Bains',
        'Main de Sable',
        'Mont des Capumain',
        'Plage Ginkgo',
        'Plage Long-des-Îles',
        "Plage de l'Errance",
        "Presqu'île Tombolo",
        'Rive des Revenants',
        'Île Crache-Feu',
      ],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Arbres qui tremblent : Col Pierlevé, Falaise Calade, Hauts de l'Humilité, Parvis des Prières, Passage des Nuages, Source Féérique, Temple Céleste · Alentours : Ancienne Carrière, Sentier Céleste",
      places: [
        'Ancienne Carrière',
        'Col Pierlevé',
        'Falaise Calade',
        "Hauts de l'Humilité",
        'Parvis des Prières',
        'Passage des Nuages',
        'Sentier Céleste',
        'Source Féérique',
        'Temple Céleste',
      ],
    },
    {
      region: 'Terres Immaculées',
      details:
        "Arbres qui tremblent : Chute d'Oglacé, Lac Savoir, Pente de l'Avalanche, Rocher Esprit, Sentier de l'Arène, Terrasse du Glacier, Vallée Enneigée, Étendue Polaire · Alentours : Glacier Séracrawl, Hameau Perle (arbres qui tremblent)",
      places: [
        "Chute d'Oglacé",
        'Glacier Séracrawl',
        'Hameau Perle',
        'Lac Savoir',
        "Pente de l'Avalanche",
        'Rocher Esprit',
        "Sentier de l'Arène",
        'Terrasse du Glacier',
        'Vallée Enneigée',
        'Étendue Polaire',
      ],
    },
  ],
  wurmple: [
    {
      region: 'Plaines Obsidiennes',
      details:
        'Champ Flora, Forêt Lointaine, Val Ferrache · Alentours : Colline Ambition · Mégapparitions',
      places: ['Champ Flora', 'Colline Ambition', 'Forêt Lointaine', 'Val Ferrache'],
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
      details:
        'Champ Bourdonne · En vol : Arène Ursa, Marais Bouchebée · Apparitions massives : Marais Bouchebée · Mégapparitions',
      places: ['Arène Ursa', 'Champ Bourdonne', 'Marais Bouchebée'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "En vol : Hauts de l'Humilité (le jour) · Apparitions massives : Hauts de l'Humilité · Mégapparitions",
      places: ["Hauts de l'Humilité"],
    },
  ],
  yanmega: [
    {
      region: 'Marais Carmin',
      details: 'Apparitions massives : Marais Bouchebée · Mégapparitions',
      places: ['Marais Bouchebée', 'Champ Bourdonne'],
      alphas: ['Champ Bourdonne'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "En vol : Hauts de l'Humilité (le jour) · Apparitions massives : Hauts de l'Humilité · Mégapparitions",
      places: ["Hauts de l'Humilité"],
    },
  ],
  zoroark: [
    {
      region: 'Terres Immaculées',
      details:
        'Souterrain de Givre (rare) · Alentours : Glacier Séracrawl (apparitions massives), Terrasse du Glacier · Mégapparitions',
      places: ['Glacier Séracrawl', 'Souterrain de Givre', 'Terrasse du Glacier', 'Lac Savoir'],
      alphas: ['Lac Savoir (niv. 58) (non confirmé)'],
    },
  ],
  zorua: [
    {
      region: 'Terres Immaculées',
      details:
        'Souterrain de Givre · Alentours : Glacier Séracrawl (apparitions massives), Terrasse du Glacier · Mégapparitions',
      places: ['Glacier Séracrawl', 'Souterrain de Givre', 'Terrasse du Glacier'],
    },
  ],
  zubat: [
    {
      region: 'Plaines Obsidiennes',
      details:
        "Cellier Champêtre (la nuit), Digue de l'Estuaire (la nuit), Forêt Lointaine (la nuit), Plateau Cer-Mont (la nuit), Pont Rocheux (la nuit), Rive Filevent (la nuit), Sentier Cer-Mont (la nuit), Tunnel de Fer (la nuit) · En vol : Cellier Champêtre (la nuit), Digue de l'Estuaire (la nuit), Plateau Cer-Mont (la nuit), Rive Filevent (la nuit) · Alentours : Chute d'Obsidienne (la nuit) · Mégapparitions",
      places: [
        'Cellier Champêtre',
        "Chute d'Obsidienne",
        "Digue de l'Estuaire",
        'Forêt Lointaine',
        'Plateau Cer-Mont',
        'Pont Rocheux',
        'Rive Filevent',
        'Sentier Cer-Mont',
        'Tunnel de Fer',
      ],
    },
    {
      region: 'Marais Carmin',
      details:
        'Col Mer-de-Nuages (la nuit), Lisière du Hameau (la nuit), Pente des Gringoles (la nuit) · Alentours : Hameau Diamant (la nuit)',
      places: ['Col Mer-de-Nuages', 'Hameau Diamant', 'Lisière du Hameau', 'Pente des Gringoles'],
    },
    {
      region: 'Contrefort Couronné',
      details:
        "Forêt des Égarés (la nuit), Hauts de l'Humilité (la nuit) · En vol : Grotte des Égarés, Hauts de l'Humilité (la nuit) · Apparitions massives : Hauts de l'Humilité · Alentours : Ancienne Carrière (la nuit)",
      places: ['Ancienne Carrière', 'Forêt des Égarés', 'Grotte des Égarés', "Hauts de l'Humilité"],
    },
    {
      region: 'Terres Immaculées',
      details: 'En vol : Temple de Frimapic',
      places: ['Temple de Frimapic'],
    },
  ],
}
