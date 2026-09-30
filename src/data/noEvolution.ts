// Pokémon d'Hisui qui n'ont ni pré-évolution ni évolution dans Légendes
// Arceus (calculé à partir des chaînes d'évolution de PokeAPI, restreintes au
// Pokédex de Hisui). Légendaires et fabuleux compris : le filtre les écarte.
export const NO_EVOLUTION = new Set<string>([
  'arceus',
  'azelf',
  'carnivine',
  'chatot',
  'cresselia',
  'darkrai',
  'dialga',
  'enamorus',
  'giratina',
  'heatran',
  'heracross',
  'landorus',
  'mesprit',
  'pachirisu',
  'palkia',
  'regigigas',
  'rotom',
  'shaymin',
  'spiritomb',
  'thundurus',
  'tornadus',
  'unown',
  'uxie',
])
