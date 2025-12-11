export default [
  // S+ Tier
  {
    id: 1,
    name: 'Demonic Pickaxe',
    tier: 'S+',
    minePower: 175,
    mineSpeed: '+15%',
    luck: '+47.5%',
    cost: '500k Gold',
    runeSlots: 0,
    imageUrl: '/images/tier/pickaxes/pickaxe01.webp',
    imageAlt: 'Demonic Pickaxe',
    pros: [
      'Strongest Pickaxe in the game by far.'
    ],
    cons: [
      'Second highest Luck stat but still lower than the Arcane Pickaxe which is much cheaper.',
      'Currently unobtainable in the game (will be updated when available).',
      'Will be excellent for late game, but it\'s recommended to go with the Magma or Arcane Pickaxe first due to its sheer price.'
    ]
  },
  {
    id: 2,
    name: 'Magma Pickaxe',
    tier: 'S+',
    minePower: 135,
    mineSpeed: null,
    luck: '+46%',
    cost: '150k Gold',
    runeSlots: 2,
    imageUrl: '/images/tier/pickaxes/pickaxe02.webp',
    imageAlt: 'Magma Pickaxe',
    pros: [
      'Second Strongest Pickaxe in the game.',
      'Not as expensive as the Demonic Pickaxe while still having great Power and Luck stats.'
    ],
    cons: [
      'Only 2 Rune Slots, which, on top of the bigger price, makes it fall slightly behind the Arcane Pickaxe.'
    ]
  },
  {
    id: 3,
    name: 'Arcane Pickaxe',
    tier: 'S+',
    minePower: 115,
    mineSpeed: '+10%',
    luck: '+50%',
    cost: '125k Gold',
    runeSlots: 3,
    imageUrl: '/images/tier/pickaxes/pickaxe03.webp',
    imageAlt: 'Arcane Pickaxe',
    pros: [
      'Highest Luck stat that other pickaxes can\'t match.',
      '3 Rune Slots make this one of the most OP pickaxes in The Forge.'
    ],
    cons: [
      'Lower Mining Power, which means longer mining times.'
    ]
  },
  {
    id: 4,
    name: 'Mythril Pickaxe',
    tier: 'S',
    minePower: 80,
    mineSpeed: null,
    luck: '+43',
    cost: '67.5k Gold',
    runeSlots: 0,
    imageUrl: '/images/tier/pickaxes/pickaxe04.webp',
    imageAlt: 'Mythril Pickaxe',
    suggestedRunes: ['Miner Shard', 'Blast Chip', 'Rage Mark'],
    pros: [
      'Decent stats for a mid-game Pickaxe.',
      'With the right Runes, can match S+ tier pickaxes.',
      'Available for a fair price ($67,500).'
    ],
    cons: []
  },
  {
    id: 5,
    name: 'Lightite Pickaxe',
    tier: 'S',
    minePower: 100,
    mineSpeed: '+30%',
    luck: '+45%',
    cost: '98.5k Gold',
    runeSlots: 0,
    imageUrl: '/images/tier/pickaxes/pickaxe05.webp',
    imageAlt: 'Lightite Pickaxe',
    pros: [
      'Excellent power that can handle early late-game content.',
      '+30% speed buff makes it one of the quickest pickaxes in the game.'
    ],
    cons: [
      'Luck stat could be better for a pickaxe that costs almost $100,000.'
    ]
  },
  // A Tier
  {
    id: 6,
    name: 'Uranium Pickaxe',
    tier: 'A',
    minePower: 67,
    mineSpeed: null,
    luck: '+41%',
    cost: '37.5k Gold',
    runeSlots: 0,
    imageUrl: '/images/tier/pickaxes/pickaxe06.webp',
    imageAlt: 'Uranium Pickaxe',
    suggestedRunes: ['Miner Shard', 'Drain Edge', 'Ward Patch'],
    pros: [
      'Excellent luck boost that makes the Forgotten Kingdom grind easier.',
      'Only costs $37,500.'
    ],
    cons: [
      'Lacks the power needed for late-game content.'
    ]
  },
  {
    id: 7,
    name: 'Cobalt Pickaxe',
    tier: 'A',
    minePower: 40,
    mineSpeed: null,
    luck: '+35%',
    cost: '10k Gold',
    runeSlots: 2,
    imageUrl: '/images/tier/pickaxes/pickaxe07.webp',
    imageAlt: 'Cobalt Pickaxe',
    suggestedRunes: ['Miner Shard', 'Blast Chip', 'Rage Mark'],
    pros: [
      '40 Power makes lightwork of the Stonewake\'s Cross grind.',
      '2 Rune Slots to further boost its performance.'
    ],
    cons: [
      'Struggles in the Forgotten Kingdom.'
    ]
  },
  {
    id: 8,
    name: 'Titanium Pickaxe',
    tier: 'A',
    minePower: 55,
    mineSpeed: null,
    luck: '+38',
    cost: '22.5k Gold',
    runeSlots: 0,
    imageUrl: '/images/tier/pickaxes/pickaxe08.webp',
    imageAlt: 'Titanium Pickaxe',
    suggestedRunes: ['Miner Shard', 'Rage Mark'],
    pros: [
      'Good power.',
      'Can mine multiple ores in a single hit.',
      'Tier 2 Pickaxe that\'s good for the early Forgotten Kingdom grind.'
    ],
    cons: [
      'Expensive, considering the stats on offer.'
    ]
  },
  // B Tier
  {
    id: 9,
    name: 'Platinum Pickaxe',
    tier: 'B',
    minePower: 24,
    mineSpeed: null,
    luck: '+25%',
    cost: '5,000 Gold',
    runeSlots: 2,
    imageUrl: '/images/tier/pickaxes/pickaxe09.webp',
    imageAlt: 'Platinum Pickaxe',
    suggestedRunes: ['Miner Shard', 'Rage Mark', 'Drain Edge'],
    pros: [
      'Good stats all around.',
      'Decent Power and the second-highest base Luck stat in the Forge world one.',
      'Perfect for quick mid-game mining.',
      '2 Rune Slots.'
    ],
    cons: [
      'Slightly expensive (5,000 Gold).'
    ]
  },
  {
    id: 10,
    name: 'Stonewake\'s Pickaxe',
    tier: 'B',
    minePower: 33,
    mineSpeed: '-30%',
    luck: '+10%',
    cost: null,
    runeSlots: 0,
    imageUrl: '/images/tier/pickaxes/pickaxe10.webp',
    imageAlt: 'Stonewake\'s Pickaxe',
    suggestedRunes: ['Miner Shard', 'Rage Mark', 'Drain Edge'],
    pros: [
      'Second-highest power stat in world one.',
      'Can be used to mine all rocks in all current locations in the game.'
    ],
    cons: [
      'Low base luck stat makes the Miner Shard compulsory.',
      'Speed debuff can slow down progress and even get you killed.'
    ]
  },
  // C Tier
  {
    id: 11,
    name: 'Iron Pickaxe',
    tier: 'C',
    minePower: 10,
    mineSpeed: null,
    luck: '+5%',
    cost: '500 Gold',
    runeSlots: 0,
    imageUrl: '/images/tier/pickaxes/pickaxe11.webp',
    imageAlt: 'Iron Pickaxe',
    pros: [
      'One of the stronger starter pickaxes in the game.',
      'The only early-game Pickaxe with some luck.'
    ],
    cons: [
      'Takes too long to destroy bigger boulders.',
      'No Rune slots means the pickaxe can\'t be improved.'
    ]
  },
  {
    id: 12,
    name: 'Gold Pickaxe',
    tier: 'C',
    minePower: 16,
    mineSpeed: null,
    luck: '+15%',
    cost: '1.5k Gold',
    runeSlots: 1,
    imageUrl: '/images/tier/pickaxes/pickaxe12.webp',
    imageAlt: 'Gold Pickaxe',
    suggestedRunes: ['Miner Shard', 'Blast Chip Rune', 'Rage Mark'],
    pros: [
      'High power means you can quickly mine Pebbles, Rocks, and Boulders.',
      'Has 1 Rune slot.'
    ],
    cons: [
      'Not that effective in Forgotten Kingdom and Goblin Cave.'
    ]
  },
  // D Tier
  {
    id: 13,
    name: 'Bronze Pickaxe',
    tier: 'D',
    minePower: 7,
    mineSpeed: null,
    luck: '0%',
    cost: '150 Gold',
    runeSlots: 0,
    imageUrl: '/images/tier/pickaxes/pickaxe13.webp',
    imageAlt: 'Bronze Pickaxe',
    pros: [
      'More power than the Stone Pickaxe.',
      'Mines slightly more quickly.'
    ],
    cons: [
      'Zero Luck.',
      'No Rune Slots.'
    ]
  },
  {
    id: 14,
    name: 'Stone Pickaxe',
    tier: 'D',
    minePower: 4,
    mineSpeed: null,
    luck: '0%',
    cost: 'Free',
    runeSlots: 0,
    imageUrl: '',
    imageAlt: 'Stone Pickaxe',
    pros: [
      'Get for free at the start of the game.'
    ],
    cons: [
      'Weakest pickaxe in the game, so even though it is free, you should get rid of it as soon as possible.',
      'Zero luck means you can\'t mine high-rarity ores with this pickaxe.'
    ]
  }
]

