// Objets d'évolution de Légendes Arceus et Pokémon qu'ils font évoluer.
// Calculé à partir des chaînes d'évolution de PokeAPI, adapté aux règles du
// jeu : pas d'échange (le Fil de Liaison le remplace), les objets « à tenir »
// des autres jeux s'utilisent depuis le sac, et Tarinor évolue avec une
// Pierre Foudre (confirmé sur Bulbapedia). Noms et descriptions officiels en
// français viennent de PokeAPI, sauf pour Croc Rasoir, Griffe Rasoir et Peau
// Métal (le texte officiel parle d'objet à tenir) et pour les objets propres
// à Hisui (absents de PokeAPI) : descriptions rédigées pour l'appli.

export interface EvolutionItemUse {
  from: string // apiName du Pokémon à faire évoluer
  to: string // apiName de l'évolution
  toName: string // nom affiché de l'évolution (forme de Hisui précisée)
  note?: string // condition en plus : de jour, de nuit, mâle...
}

export interface EvolutionItem {
  name: string
  category: 'Pierres' | 'Objets spéciaux' | 'Propres à Hisui'
  description: string
  sprite?: string // image PokeAPI
  icon?: string // à défaut d'image
  uses: EvolutionItemUse[]
}

export const EVOLUTION_ITEMS: Record<string, EvolutionItem> = {
  'up-grade': {
    name: 'Améliorator',
    category: 'Objets spéciaux',
    description:
      'Un dispositif transparent rempli de données diverses et variées. Fabriqué par la Sylphe SARL.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/up-grade.png',
    uses: [{ from: 'porygon', to: 'porygon2', toName: 'Porygon2' }],
  },
  'dubious-disc': {
    name: 'CD Douteux',
    category: 'Objets spéciaux',
    description:
      'Un appareil transparent rempli de données douteuses. Son fabricant n’est pas connu.',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dubious-disc.png',
    uses: [{ from: 'porygon2', to: 'porygon-z', toName: 'Porygon-Z' }],
  },
  'razor-fang': {
    name: 'Croc Rasoir',
    category: 'Objets spéciaux',
    description:
      "Un croc pointu et tranchant. Dans Légendes Arceus, il s'utilise depuis le sac pour faire évoluer certains Pokémon.",
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/razor-fang.png',
    uses: [{ from: 'gligar', to: 'gliscor', toName: 'Scorvol', note: 'de nuit' }],
  },
  'razor-claw': {
    name: 'Griffe Rasoir',
    category: 'Objets spéciaux',
    description:
      "Une griffe crochue et pointue. Dans Légendes Arceus, elle s'utilise depuis le sac pour faire évoluer certains Pokémon.",
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/razor-claw.png',
    uses: [
      { from: 'sneasel', to: 'weavile', toName: 'Dimoret', note: 'forme classique, de nuit' },
      { from: 'sneasel', to: 'sneasler', toName: 'Farfurex', note: 'forme de Hisui, de jour' },
    ],
  },
  magmarizer: {
    name: 'Magmariseur',
    category: 'Objets spéciaux',
    description:
      'Une boîte remplie d’une énorme quantité d’énergie magmatique. Appréciée d’un certain Pokémon.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/magmarizer.png',
    uses: [{ from: 'magmar', to: 'magmortar', toName: 'Maganon' }],
  },
  'metal-coat': {
    name: 'Peau Métal',
    category: 'Objets spéciaux',
    description:
      "Une pellicule métallique spéciale. Dans Légendes Arceus, elle s'utilise depuis le sac pour faire évoluer certains Pokémon.",
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metal-coat.png',
    uses: [
      { from: 'onix', to: 'steelix', toName: 'Steelix' },
      { from: 'scyther', to: 'scizor', toName: 'Cizayox' },
    ],
  },
  'oval-stone': {
    name: 'Pierre Ovale',
    category: 'Objets spéciaux',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Elle a la forme d’un œuf.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oval-stone.png',
    uses: [{ from: 'happiny', to: 'chansey', toName: 'Leveinard', note: 'de jour' }],
  },
  protector: {
    name: 'Protecteur',
    category: 'Objets spéciaux',
    description: 'Un objet protecteur très dur et très lourd, apprécié d’un certain Pokémon.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/protector.png',
    uses: [{ from: 'rhydon', to: 'rhyperior', toName: 'Rhinastoc' }],
  },
  'reaper-cloth': {
    name: 'Tissu Fauche',
    category: 'Objets spéciaux',
    description:
      'Un tissu imprégné d’une énergie spirituelle horriblement puissante. Apprécié d’un certain Pokémon.',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/reaper-cloth.png',
    uses: [{ from: 'dusclops', to: 'dusknoir', toName: 'Noctunoir' }],
  },
  electirizer: {
    name: 'Électriseur',
    category: 'Objets spéciaux',
    description:
      'Une boîte remplie d’une énorme quantité d’énergie électrique. Appréciée d’un certain Pokémon.',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/electirizer.png',
    uses: [{ from: 'electabuzz', to: 'electivire', toName: 'Élekable' }],
  },
  'dawn-stone': {
    name: 'Pierre Aube',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Elle brille comme un œil.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dawn-stone.png',
    uses: [
      { from: 'kirlia', to: 'gallade', toName: 'Gallame', note: 'mâle uniquement' },
      { from: 'snorunt', to: 'froslass', toName: 'Momartik', note: 'femelle uniquement' },
    ],
  },
  'water-stone': {
    name: 'Pierre Eau',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Elle est de couleur bleue.',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png',
    uses: [{ from: 'eevee', to: 'vaporeon', toName: 'Aquali' }],
  },
  'fire-stone': {
    name: 'Pierre Feu',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Elle est jaune et orange.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png',
    uses: [
      { from: 'eevee', to: 'flareon', toName: 'Pyroli' },
      { from: 'growlithe', to: 'arcanine', toName: 'Arcanin de Hisui' },
      { from: 'vulpix', to: 'ninetales', toName: 'Feunard' },
    ],
  },
  'thunder-stone': {
    name: 'Pierre Foudre',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Un éclair est dessiné dessus.',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png',
    uses: [
      { from: 'eevee', to: 'jolteon', toName: 'Voltali' },
      { from: 'magneton', to: 'magnezone', toName: 'Magnézone' },
      { from: 'nosepass', to: 'probopass', toName: 'Tarinorme' },
      { from: 'pikachu', to: 'raichu', toName: 'Raichu' },
    ],
  },
  'ice-stone': {
    name: 'Pierre Glace',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Un flocon de neige semble dessiné dessus.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-stone.png',
    uses: [{ from: 'eevee', to: 'glaceon', toName: 'Givrali' }],
  },
  'moon-stone': {
    name: 'Pierre Lune',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Elle est sombre comme la nuit.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png',
    uses: [{ from: 'clefairy', to: 'clefable', toName: 'Mélodelfe' }],
  },
  'dusk-stone': {
    name: 'Pierre Nuit',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Elle est sombre comme une nuit sans lune.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png',
    uses: [
      { from: 'misdreavus', to: 'mismagius', toName: 'Magirêve' },
      { from: 'murkrow', to: 'honchkrow', toName: 'Corboss' },
    ],
  },
  'leaf-stone': {
    name: 'Pierre Plante',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Une feuille est dessinée dessus.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png',
    uses: [
      { from: 'eevee', to: 'leafeon', toName: 'Phyllali' },
      { from: 'voltorb', to: 'electrode', toName: 'Électrode de Hisui' },
    ],
  },
  'sun-stone': {
    name: 'Pierre Soleil',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Elle est rouge comme le soleil couchant.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png',
    uses: [{ from: 'petilil', to: 'lilligant', toName: 'Fragilady de Hisui' }],
  },
  'shiny-stone': {
    name: 'Pierre Éclat',
    category: 'Pierres',
    description:
      'Une pierre étrange qui fait évoluer certaines espèces de Pokémon. Elle brille d’une lumière aveuglante.',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-stone.png',
    uses: [
      { from: 'roselia', to: 'roserade', toName: 'Roserade' },
      { from: 'togetic', to: 'togekiss', toName: 'Togekiss' },
    ],
  },
  'peat-block': {
    name: 'Bloc de Tourbe',
    category: 'Propres à Hisui',
    description:
      'Un bloc de tourbe durcie. Utilisé une nuit de pleine lune, il fait évoluer un certain Pokémon.',
    icon: '🟫',
    uses: [
      { from: 'ursaring', to: 'ursaluna', toName: 'Ursaking', note: 'une nuit de pleine lune' },
    ],
  },
  'linking-cord': {
    name: 'Fil de Liaison',
    category: 'Propres à Hisui',
    description:
      "Un cordon mystérieux qui remplace l'échange : il fait évoluer les Pokémon qui, dans les autres jeux, évoluent quand on les échange.",
    icon: '🧶',
    uses: [
      { from: 'graveler', to: 'golem', toName: 'Grolem' },
      { from: 'haunter', to: 'gengar', toName: 'Ectoplasma' },
      { from: 'kadabra', to: 'alakazam', toName: 'Alakazam' },
      { from: 'machoke', to: 'machamp', toName: 'Mackogneur' },
    ],
  },
  'black-augurite': {
    name: 'Obsidienne',
    category: 'Propres à Hisui',
    description: 'Une pierre noire et brillante qui fait évoluer un certain Pokémon.',
    icon: '🪨',
    uses: [{ from: 'scyther', to: 'kleavor', toName: 'Hachécateur' }],
  },
}
