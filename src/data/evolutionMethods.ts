// Comment faire évoluer chaque Pokémon dans Légendes Arceus (hors évolutions
// par objet, voir evolutionItems.ts). Généré à partir des conditions de PokeAPI
// (version Légendes Arceus quand elle existe), avec un mode d'emploi pour les
// cas particuliers. Règles du jeu vérifiées sur Bulbapedia : l'amitié monte à
// chaque gain d'expérience ; un style (Rapide / Puissant) demande une
// capacité maîtrisée et coûte 2 PP.
// Clé : « avant>après » (apiName).

export interface EvolutionMethod {
  condition: string
  howTo?: string // mode d'emploi détaillé
}

export const EVOLUTION_METHODS: Record<string, EvolutionMethod> = {
  'abra>kadabra': { condition: 'Atteindre le niveau 16' },
  'aipom>ambipom': { condition: "Monter d'un niveau en connaissant Coup Double" },
  'barboach>whiscash': { condition: 'Atteindre le niveau 30' },
  'basculin>basculegion': {
    condition: 'Subir au moins 294 points de dégâts de recul sans être mis K.O.',
    howTo:
      "Uniquement Bargantua Motif Blanc. Les dégâts de recul sont ceux que ses propres capacités lui infligent quand elles blessent aussi le lanceur. Ils se cumulent d'un combat à l'autre, mais le compteur repart à zéro s'il est mis K.O. Un mâle devient Paragruel mâle, une femelle devient Paragruel femelle.",
  },
  'bergmite>avalugg': { condition: 'Atteindre le niveau 37' },
  'bidoof>bibarel': { condition: 'Atteindre le niveau 15' },
  'bonsly>sudowoodo': { condition: "Monter d'un niveau en connaissant Copie" },
  'bronzor>bronzong': { condition: 'Atteindre le niveau 33' },
  'budew>roselia': {
    condition: "Monter d'un niveau avec une forte amitié le jour",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'buizel>floatzel': { condition: 'Atteindre le niveau 26' },
  'buneary>lopunny': {
    condition: "Monter d'un niveau avec une forte amitié",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'burmy>mothim': { condition: 'Atteindre le niveau 20 (mâle uniquement)' },
  'burmy>wormadam': { condition: 'Atteindre le niveau 20 (femelle uniquement)' },
  'cascoon>dustox': { condition: 'Atteindre le niveau 10' },
  'chansey>blissey': {
    condition: "Monter d'un niveau avec une forte amitié",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'cherubi>cherrim': { condition: 'Atteindre le niveau 25' },
  'chimchar>monferno': { condition: 'Atteindre le niveau 14' },
  'chingling>chimecho': {
    condition: "Monter d'un niveau avec une forte amitié la nuit",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'cleffa>clefairy': {
    condition: "Monter d'un niveau avec une forte amitié",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'combee>vespiquen': { condition: 'Atteindre le niveau 21 (femelle uniquement)' },
  'cranidos>rampardos': { condition: 'Atteindre le niveau 30' },
  'croagunk>toxicroak': { condition: 'Atteindre le niveau 37' },
  'cyndaquil>quilava': { condition: 'Atteindre le niveau 17' },
  'dartrix>decidueye': { condition: 'Atteindre le niveau 36' },
  'dewott>samurott': { condition: 'Atteindre le niveau 36' },
  'drifloon>drifblim': { condition: 'Atteindre le niveau 28' },
  'duskull>dusclops': { condition: 'Atteindre le niveau 37' },
  'eevee>espeon': {
    condition: "Monter d'un niveau avec une forte amitié le jour",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'eevee>sylveon': {
    condition: "Monter d'un niveau avec une forte amitié en connaissant une capacité de type Fée",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'eevee>umbreon': {
    condition: "Monter d'un niveau avec une forte amitié la nuit",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'elekid>electabuzz': { condition: 'Atteindre le niveau 30' },
  'finneon>lumineon': { condition: 'Atteindre le niveau 31' },
  'gabite>garchomp': { condition: 'Atteindre le niveau 48' },
  'gastly>haunter': { condition: 'Atteindre le niveau 25' },
  'geodude>graveler': { condition: 'Atteindre le niveau 25' },
  'gible>gabite': { condition: 'Atteindre le niveau 24' },
  'glameow>purugly': { condition: 'Atteindre le niveau 38' },
  'golbat>crobat': {
    condition: "Monter d'un niveau avec une forte amitié",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'goomy>sliggoo': { condition: 'Atteindre le niveau 40' },
  'grotle>torterra': { condition: 'Atteindre le niveau 32' },
  'hippopotas>hippowdon': { condition: 'Atteindre le niveau 34' },
  'kirlia>gardevoir': { condition: 'Atteindre le niveau 30' },
  'kricketot>kricketune': { condition: 'Atteindre le niveau 10' },
  'lickitung>lickilicky': { condition: "Monter d'un niveau en connaissant Roulade" },
  'luxio>luxray': { condition: 'Atteindre le niveau 30' },
  'machop>machoke': { condition: 'Atteindre le niveau 28' },
  'magby>magmar': { condition: 'Atteindre le niveau 30' },
  'magikarp>gyarados': { condition: 'Atteindre le niveau 20' },
  'magnemite>magneton': { condition: 'Atteindre le niveau 30' },
  'mantyke>mantine': {
    condition: "Monter d'un niveau avec Rémoraid dans l'équipe",
    howTo: 'Ajoute un Rémoraid à ton équipe, puis fais gagner un niveau à Babimanta.',
  },
  'mime-jr>mr-mime': { condition: "Monter d'un niveau en connaissant Copie" },
  'monferno>infernape': { condition: 'Atteindre le niveau 36' },
  'munchlax>snorlax': {
    condition: "Monter d'un niveau avec une forte amitié",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'oshawott>dewott': { condition: 'Atteindre le niveau 17' },
  'paras>parasect': { condition: 'Atteindre le niveau 24' },
  'pichu>pikachu': {
    condition: "Monter d'un niveau avec une forte amitié",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'piloswine>mamoswine': { condition: "Monter d'un niveau en connaissant Pouvoir Antique" },
  'piplup>prinplup': { condition: 'Atteindre le niveau 16' },
  'ponyta>rapidash': { condition: 'Atteindre le niveau 40' },
  'prinplup>empoleon': { condition: 'Atteindre le niveau 36' },
  'psyduck>golduck': { condition: 'Atteindre le niveau 33' },
  'quilava>typhlosion': { condition: 'Atteindre le niveau 36' },
  'qwilfish>overqwil': {
    condition: 'Utiliser Multitoxik 20 fois en Style Puissant',
    howTo:
      "Mets-le dans ton équipe avec la capacité Multitoxik maîtrisée (une capacité doit être maîtrisée pour être utilisée dans un style ; c'est indiqué par une icône dans son résumé). En combat, utilise Multitoxik en Style Puissant 20 fois au total : le compteur se cumule d'un combat à l'autre. Chaque utilisation en style coûte 2 PP au lieu d'1, pense à recharger ses PP. Une fois les 20 utilisations atteintes, il peut évoluer.",
  },
  'ralts>kirlia': { condition: 'Atteindre le niveau 20' },
  'remoraid>octillery': { condition: 'Atteindre le niveau 25' },
  'rhyhorn>rhydon': { condition: 'Atteindre le niveau 42' },
  'riolu>lucario': {
    condition: "Monter d'un niveau avec une forte amitié le jour",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'rowlet>dartrix': { condition: 'Atteindre le niveau 17' },
  'rufflet>braviary': { condition: 'Atteindre le niveau 54' },
  'sealeo>walrein': { condition: 'Atteindre le niveau 44' },
  'shellos>gastrodon': { condition: 'Atteindre le niveau 30' },
  'shieldon>bastiodon': { condition: 'Atteindre le niveau 30' },
  'shinx>luxio': { condition: 'Atteindre le niveau 15' },
  'silcoon>beautifly': { condition: 'Atteindre le niveau 10' },
  'skorupi>drapion': { condition: 'Atteindre le niveau 40' },
  'sliggoo>goodra': { condition: "Atteindre le niveau 50 pendant qu'il pleut" },
  'snorunt>glalie': { condition: 'Atteindre le niveau 42' },
  'snover>abomasnow': { condition: 'Atteindre le niveau 40' },
  'spheal>sealeo': { condition: 'Atteindre le niveau 32' },
  'stantler>wyrdeer': {
    condition: 'Utiliser Sprint Bouclier 20 fois en Style Rapide',
    howTo:
      "Mets-le dans ton équipe avec la capacité Sprint Bouclier maîtrisée (une capacité doit être maîtrisée pour être utilisée dans un style ; c'est indiqué par une icône dans son résumé). En combat, utilise Sprint Bouclier en Style Rapide 20 fois au total : le compteur se cumule d'un combat à l'autre. Chaque utilisation en style coûte 2 PP au lieu d'1, pense à recharger ses PP. Une fois les 20 utilisations atteintes, il peut évoluer.",
  },
  'staravia>staraptor': { condition: 'Atteindre le niveau 34' },
  'starly>staravia': { condition: 'Atteindre le niveau 14' },
  'stunky>skuntank': { condition: 'Atteindre le niveau 34' },
  'swinub>piloswine': { condition: 'Atteindre le niveau 33' },
  'tangela>tangrowth': { condition: "Monter d'un niveau en connaissant Pouvoir Antique" },
  'teddiursa>ursaring': { condition: 'Atteindre le niveau 30' },
  'tentacool>tentacruel': { condition: 'Atteindre le niveau 30' },
  'togepi>togetic': {
    condition: "Monter d'un niveau avec une forte amitié",
    howTo:
      "L'amitié augmente de 1 à chaque fois qu'il gagne de l'expérience : combats gagnés (même sans y participer), chaque Bonbon Exp. donné, objets récoltés en secouant un arbre ou en cassant un rocher. Elle baisse s'il est mis K.O. ou si tu lui donnes des remèdes à base de plantes.",
  },
  'turtwig>grotle': { condition: 'Atteindre le niveau 18' },
  'wurmple>cascoon': {
    condition: 'Atteindre le niveau 7 (au hasard, une chance sur deux)',
    howTo: 'Devient Armulys ou Blindalys au hasard (une chance sur deux), sans moyen de choisir.',
  },
  'wurmple>silcoon': {
    condition: 'Atteindre le niveau 7 (au hasard, une chance sur deux)',
    howTo: 'Devient Armulys ou Blindalys au hasard (une chance sur deux), sans moyen de choisir.',
  },
  'yanma>yanmega': { condition: "Monter d'un niveau en connaissant Pouvoir Antique" },
  'zorua>zoroark': { condition: 'Atteindre le niveau 30' },
  'zubat>golbat': { condition: 'Atteindre le niveau 22' },
}
