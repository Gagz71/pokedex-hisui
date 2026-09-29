// Préférences alimentaires et objets portés de chaque Pokémon dans Légendes
// Arceus, d'après la page « List of Pokémon by food preferences » de
// Bulbapedia (Pokédex de Hisui). Noms français officiels repris des pages
// d'objets de Bulbapedia (baies : PokeAPI).
// Chaque aliment a son appât (« gâteau ») : lancer l'appât correspondant
// attire les Pokémon qui aiment cet aliment.

export type FoodKey = 'mushroom' | 'honey' | 'grains' | 'beans' | 'salt'

// likes : l'aliment avec son article, pour « aime le Champi Toumou »
export const FOODS: Record<FoodKey, { food: string; likes: string; lure: string; icon: string }> = {
  mushroom: { food: 'Champi Toumou', likes: 'le Champi Toumou', lure: 'Appât Toumou', icon: '🍄' },
  honey: { food: 'Miel Kibrille', likes: 'le Miel Kibrille', lure: 'Appât Kibrille', icon: '🍯' },
  grains: { food: 'Riz Zélé', likes: 'le Riz Zélé', lure: 'Appât Zélé', icon: '🌾' },
  beans: { food: 'Fève Dodue', likes: 'la Fève Dodue', lure: 'Appât Dodu', icon: '🫘' },
  salt: { food: 'Sel Rochedur', likes: 'le Sel Rochedur', lure: 'Appât Rochedur', icon: '🧂' },
}

export interface CarriedItem {
  name: string
  chance: number // en %
  form?: string // quand l'objet dépend de la forme (Mer Occident / Orient)
}

export interface FoodPreference {
  likes: FoodKey[]
  carried: CarriedItem[]
}

// Clé = apiName (slug PokeAPI).
export const FOOD_PREFERENCES: Record<string, FoodPreference> = {
  abomasnow: {
    likes: ['mushroom', 'honey', 'grains', 'beans', 'salt'],
    carried: [
      { name: 'Rutabagaz', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  abra: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Bouhlon', chance: 30 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  aipom: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Nanab', chance: 30 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  alakazam: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Bouhlon', chance: 30 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  ambipom: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Nanab', chance: 30 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  arcanine: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Fraive', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  arceus: { likes: [], carried: [] },
  avalugg: {
    likes: ['honey', 'grains', 'beans', 'salt'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  azelf: { likes: [], carried: [] },
  barboach: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  basculegion: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Pétaralgue', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  basculin: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Pétaralgue', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  bastiodon: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  beautifly: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Miel Kibrille', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  bergmite: {
    likes: ['honey', 'grains', 'beans', 'salt'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  bibarel: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  bidoof: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  blissey: {
    likes: ['honey'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Pierre Ovale', chance: 10 },
    ],
  },
  bonsly: {
    likes: ['salt'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  braviary: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Rutabagaz', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  bronzong: {
    likes: ['salt'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  bronzor: {
    likes: ['salt'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  budew: {
    likes: ['mushroom', 'honey', 'salt'],
    carried: [
      { name: 'Riz Zélé', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  buizel: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  buneary: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  burmy: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Bourgeon Vivace', chance: 65 },
      { name: 'Baie Prine', chance: 15 },
    ],
  },
  carnivine: {
    likes: ['mushroom', 'salt'],
    carried: [
      { name: 'Feuille Ronde', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  cascoon: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [{ name: 'Noigrume Rongé', chance: 15 }],
  },
  chansey: {
    likes: ['honey'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Pierre Ovale', chance: 10 },
    ],
  },
  chatot: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Fève Dodue', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  cherrim: {
    likes: ['mushroom', 'honey', 'salt'],
    carried: [
      { name: 'Baie Prine', chance: 65 },
      { name: 'Herbe Souveraine', chance: 30 },
    ],
  },
  cherubi: {
    likes: ['mushroom', 'honey', 'salt'],
    carried: [
      { name: 'Bourgeon Vivace', chance: 65 },
      { name: 'Baie Prine', chance: 20 },
    ],
  },
  chimchar: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  chimecho: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Galet Azur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  chingling: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Galet Azur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  clefable: {
    likes: ['honey'],
    carried: [
      { name: 'Baie Mepo', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  clefairy: {
    likes: ['honey'],
    carried: [
      { name: 'Baie Mepo', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  cleffa: {
    likes: ['honey'],
    carried: [
      { name: 'Baie Mepo', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  combee: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Miel Kibrille', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  cranidos: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  cresselia: { likes: [], carried: [] },
  croagunk: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  crobat: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Maron', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  cyndaquil: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  darkrai: { likes: [], carried: [] },
  dartrix: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  decidueye: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 35 },
      { name: 'Herbe Souveraine', chance: 15 },
    ],
  },
  dewott: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  dialga: { likes: [], carried: [] },
  drapion: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  drifblim: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  drifloon: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  dusclops: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Tissu Fauche', chance: 8 },
    ],
  },
  dusknoir: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Tissu Fauche', chance: 8 },
    ],
  },
  duskull: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Tissu Fauche', chance: 8 },
    ],
  },
  dustox: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Miel Kibrille', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  eevee: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Framby', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  electabuzz: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Ceriz', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  electivire: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Ceriz', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  electrode: {
    likes: ['salt'],
    carried: [
      { name: 'Feuille Ronde', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  elekid: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Ceriz', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  empoleon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 35 },
      { name: 'Herbe Souveraine', chance: 15 },
    ],
  },
  enamorus: { likes: [], carried: [] },
  espeon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  finneon: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  flareon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  floatzel: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  froslass: {
    likes: ['honey', 'salt'],
    carried: [
      { name: 'Baie Bouhlon', chance: 30 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  gabite: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  gallade: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  garchomp: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  gardevoir: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  gastly: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Baie Maron', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  gastrodon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Boule de Boue', chance: 15 },
      { name: 'Baie Nanab', chance: 30, form: 'Mer Orient' },
    ],
  },
  gengar: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Baie Maron', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  geodude: {
    likes: ['salt'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  gible: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  giratina: { likes: [], carried: [] },
  glaceon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  glalie: {
    likes: ['honey', 'salt'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  glameow: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Feuille Ronde', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  gligar: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Croc Rasoir', chance: 8 },
    ],
  },
  gliscor: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Croc Rasoir', chance: 8 },
    ],
  },
  golbat: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Maron', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  golduck: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  golem: {
    likes: ['salt'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Obsidienne', chance: 8 },
    ],
  },
  goodra: {
    likes: ['beans'],
    carried: [
      { name: 'Champi Toumou', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  goomy: {
    likes: ['beans'],
    carried: [
      { name: 'Champi Toumou', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  graveler: {
    likes: ['salt'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Obsidienne', chance: 8 },
    ],
  },
  grotle: {
    likes: ['mushroom', 'honey', 'grains', 'beans', 'salt'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  growlithe: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Fraive', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  gyarados: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Galet Azur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  happiny: {
    likes: ['honey'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Pierre Ovale', chance: 10 },
    ],
  },
  haunter: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Baie Maron', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  heatran: { likes: [], carried: [] },
  heracross: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Miel Kibrille', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  hippopotas: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Rutabagaz', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  hippowdon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Rutabagaz', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  honchkrow: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Fève Dodue', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  infernape: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 35 },
      { name: 'Herbe Souveraine', chance: 15 },
    ],
  },
  jolteon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  kadabra: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Bouhlon', chance: 30 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  kirlia: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  kleavor: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Bois', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  kricketot: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [{ name: 'Noigrume Rongé', chance: 15 }],
  },
  kricketune: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [{ name: 'Noigrume Rongé', chance: 15 }],
  },
  landorus: { likes: [], carried: [] },
  leafeon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  lickilicky: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Feuille Ronde', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  lickitung: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Feuille Ronde', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  lilligant: {
    likes: ['mushroom', 'salt'],
    carried: [
      { name: 'Baie Prine', chance: 65 },
      { name: 'Herbe Souveraine', chance: 30 },
    ],
  },
  lopunny: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  lucario: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  lumineon: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  luxio: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Ceriz', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  luxray: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Ceriz', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  machamp: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  machoke: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  machop: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  magby: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Fraive', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  magikarp: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  magmar: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Fraive', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  magmortar: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Fraive', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  magnemite: {
    likes: ['salt'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Peau Métal', chance: 7 },
    ],
  },
  magneton: {
    likes: ['salt'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Peau Métal', chance: 7 },
    ],
  },
  magnezone: {
    likes: ['salt'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Peau Métal', chance: 7 },
    ],
  },
  mamoswine: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  manaphy: { likes: ['honey', 'grains', 'beans'], carried: [] },
  mantine: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Galet Azur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  mantyke: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Galet Azur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  mesprit: { likes: [], carried: [] },
  'mime-jr': {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Maron', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  misdreavus: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  mismagius: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  monferno: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  mothim: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Miel Kibrille', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  'mr-mime': {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Maron', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  munchlax: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  murkrow: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Fève Dodue', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  ninetales: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Fraive', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  nosepass: {
    likes: ['salt'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Boule de Boue', chance: 35 },
    ],
  },
  octillery: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Pétaralgue', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  onix: {
    likes: ['salt'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  oshawott: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  overqwil: { likes: ['grains', 'beans'], carried: [{ name: 'Boule de Boue', chance: 15 }] },
  pachirisu: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  palkia: { likes: [], carried: [] },
  paras: {
    likes: ['mushroom', 'honey', 'grains', 'beans', 'salt'],
    carried: [
      { name: 'Champi Toumou', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  parasect: {
    likes: ['mushroom', 'honey', 'grains', 'beans', 'salt'],
    carried: [
      { name: 'Champi Toumou', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  petilil: {
    likes: ['mushroom', 'salt'],
    carried: [
      { name: 'Bourgeon Vivace', chance: 65 },
      { name: 'Baie Prine', chance: 20 },
    ],
  },
  phione: { likes: ['honey', 'grains', 'beans'], carried: [] },
  pichu: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  pikachu: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  piloswine: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  piplup: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  ponyta: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Fraive', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  porygon: {
    likes: ['salt'],
    carried: [
      { name: 'Galet Azur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  'porygon-z': {
    likes: ['salt'],
    carried: [
      { name: 'Galet Azur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  porygon2: {
    likes: ['salt'],
    carried: [
      { name: 'Galet Azur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  prinplup: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  probopass: {
    likes: ['salt'],
    carried: [
      { name: 'Fragment de Fer', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  psyduck: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  purugly: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Feuille Ronde', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  quilava: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  qwilfish: { likes: ['grains', 'beans'], carried: [{ name: 'Boule de Boue', chance: 15 }] },
  raichu: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  ralts: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  rampardos: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  rapidash: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Fraive', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  regigigas: { likes: [], carried: [] },
  remoraid: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Pétaralgue', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  rhydon: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  rhyhorn: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  rhyperior: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  riolu: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  roselia: {
    likes: ['mushroom', 'honey', 'salt'],
    carried: [
      { name: 'Riz Zélé', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  roserade: {
    likes: ['mushroom', 'honey', 'salt'],
    carried: [
      { name: 'Riz Zélé', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  rotom: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  rowlet: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  rufflet: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Rutabagaz', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  samurott: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 35 },
      { name: 'Herbe Souveraine', chance: 15 },
    ],
  },
  scizor: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Peau Métal', chance: 7 },
    ],
  },
  scyther: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Bois', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  sealeo: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Fève Dodue', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  shaymin: { likes: [], carried: [] },
  shellos: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Boule de Boue', chance: 15 },
      { name: 'Baie Nanana', chance: 30, form: 'Mer Occident' },
    ],
  },
  shieldon: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  shinx: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Ceriz', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  silcoon: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [{ name: 'Noigrume Rongé', chance: 15 }],
  },
  skorupi: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  skuntank: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Pêcha', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  sliggoo: {
    likes: ['beans'],
    carried: [
      { name: 'Champi Toumou', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  sneasel: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Plante PP', chance: 35 },
      { name: 'Griffe Rasoir', chance: 8 },
    ],
  },
  sneasler: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Plante PP', chance: 35 },
      { name: 'Griffe Rasoir', chance: 8 },
    ],
  },
  snorlax: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  snorunt: {
    likes: ['honey', 'salt'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  snover: {
    likes: ['mushroom', 'honey', 'grains', 'beans', 'salt'],
    carried: [
      { name: 'Rutabagaz', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  spheal: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Fève Dodue', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  spiritomb: {
    likes: ['mushroom', 'beans'],
    carried: [
      { name: 'Plante Répulsive', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  stantler: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Plante PP', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  staraptor: {
    likes: ['honey', 'grains', 'beans'],
    carried: [{ name: 'Noigrume Rongé', chance: 15 }],
  },
  staravia: {
    likes: ['honey', 'grains', 'beans'],
    carried: [{ name: 'Noigrume Rongé', chance: 15 }],
  },
  starly: {
    likes: ['honey', 'grains', 'beans'],
    carried: [{ name: 'Noigrume Rongé', chance: 15 }],
  },
  steelix: {
    likes: ['salt'],
    carried: [
      { name: 'Fragment de Fer', chance: 30 },
      { name: 'Peau Métal', chance: 7 },
    ],
  },
  stunky: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Pêcha', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  sudowoodo: {
    likes: ['salt'],
    carried: [
      { name: 'Galet Noir', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  swinub: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Sel Rochedur', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  sylveon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  tangela: {
    likes: ['mushroom', 'salt'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  tangrowth: {
    likes: ['mushroom', 'salt'],
    carried: [
      { name: 'Soignon', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  teddiursa: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Miel Kibrille', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  tentacool: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Baie Pêcha', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  tentacruel: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Baie Pêcha', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  thundurus: { likes: [], carried: [] },
  togekiss: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Mepo', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  togepi: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Mepo', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  togetic: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Mepo', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  tornadus: { likes: [], carried: [] },
  torterra: {
    likes: ['mushroom', 'honey', 'grains', 'beans', 'salt'],
    carried: [
      { name: 'Baie Sitrus', chance: 35 },
      { name: 'Herbe Souveraine', chance: 15 },
    ],
  },
  toxicroak: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Galet', chance: 40 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  turtwig: {
    likes: ['mushroom', 'honey', 'grains', 'beans', 'salt'],
    carried: [
      { name: 'Baie Oran', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  typhlosion: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 35 },
      { name: 'Herbe Souveraine', chance: 15 },
    ],
  },
  umbreon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  unown: { likes: [], carried: [] },
  ursaluna: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  ursaring: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Miel Kibrille', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  uxie: { likes: [], carried: [] },
  vaporeon: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Framby', chance: 30 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  vespiquen: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Miel Kibrille', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  voltorb: {
    likes: ['salt'],
    carried: [
      { name: 'Feuille Ronde', chance: 35 },
      { name: 'Boule de Boue', chance: 15 },
    ],
  },
  vulpix: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Fraive', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  walrein: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Fève Dodue', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  weavile: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Plante PP', chance: 35 },
      { name: 'Griffe Rasoir', chance: 8 },
    ],
  },
  whiscash: {
    likes: ['grains', 'beans'],
    carried: [
      { name: 'Baie Sitrus', chance: 25 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  wormadam: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Prine', chance: 65 },
      { name: 'Herbe Souveraine', chance: 30 },
    ],
  },
  wurmple: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [{ name: 'Noigrume Rongé', chance: 15 }],
  },
  wyrdeer: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Plante PP', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  yanma: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Riz Zélé', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  yanmega: {
    likes: ['mushroom', 'honey', 'grains', 'beans'],
    carried: [
      { name: 'Riz Zélé', chance: 35 },
      { name: 'Bourgeon Vivace', chance: 15 },
    ],
  },
  zoroark: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Bouhlon', chance: 30 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  zorua: {
    likes: ['mushroom', 'grains', 'beans'],
    carried: [
      { name: 'Baie Bouhlon', chance: 30 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
  zubat: {
    likes: ['honey', 'grains', 'beans'],
    carried: [
      { name: 'Baie Maron', chance: 35 },
      { name: 'Noigrume Rongé', chance: 15 },
    ],
  },
}
