export const mockComps = [
  // 1) Original – enriched
  {
    id: 1,
    name: "Clan Avengers",
    ruler: "Spirit Empress",
    units: ["Archer Queen", "Bandit", "Mega Knight", "Valkyrie", "Archer", "Barbarian"],
    tier: "S" as const,
    description: "A bruiser-heavy frontline with Bandit/AQ cracking backlines.",
    descriptionLong:
      "Clan Avengers dominates the frontline with Valkyrie and Mega Knight soaking endless damage, while Bandit and Archer Queen dismantle key targets.\
       This comp excels at breaking through backlines thanks to Bandit’s stuns and Queen’s sniper potential. With strong crowd control and durability, \
       it’s a late-game powerhouse once fully starred.",
    whenToPlay:
      "Play if you hit early Clan pieces or find Bandit/AQ copies. Great versus squishy Ranger and Throwers",
    coreUnits: ["Archer Queen", "Bandit", "Valkyrie"],
    tips: [
      "Position Bandit to jump straight onto enemy carries.",
      "If safe, play Archer Queen in front to snipe opposing range carries.",
      "Deny enemy upgrades by buying their key units in shop."
    ],
    battlefieldUnits: [
      { name: "Archer Queen", row: 2, col: 1 },
      { name: "Bandit",       row: 0, col: 0 },
      { name: "Mega Knight",  row: 0, col: 4 },
      { name: "Valkyrie",     row: 0, col: 1 },
      { name: "Archer",       row: 2, col: 3 },
      { name: "Barbarian",    row: 0, col: 3 },
    ],
  },

  // 2) Original – enriched
  {
    id: 2,
    name: "Assassin Ranger",
    ruler: "Spirit Empress",
    units: ["Golden Knight", "Royal Ghost", "Princess", "Dart Goblin", "Archer", "Goblin"],
    tier: "S" as const,
    description: "Burst assassins + scaling rangers to delete carries fast.",
    descriptionLong:
      "Assassin Ranger blends high-burst assassins with relentless ranger scaling. Golden Knight and Royal Ghost dive into the enemy backline while Princess and Dart Goblin shred from safety. The comp thrives on tempo—clean positioning turns fights before enemies stabilize.",
    whenToPlay:
      "Best when you hit early Rangers (Archer/Dart Goblin) and can pivot into Princess. Punishes fragile backlines.",
    coreUnits: ["Golden Knight", "Princess", "Dart Goblin"],
    tips: [
      "Center Princess in the backline so shots pierce multiple targets.",
      "Split assassins on both sides to collapse enemy backline.",
      "I longer games you can four star your Goblin."
    ],
    battlefieldUnits: [
      { name: "Golden Knight", row: 0, col: 2 },
      { name: "Royal Ghost",   row: 0, col: 0 },
      { name: "Goblin",        row: 0, col: 4 },
      { name: "Princess",      row: 3, col: 2 },
      { name: "Archer",        row: 3, col: 0 },
      { name: "Dart Goblin",   row: 3, col: 4 },
    ],
  },

  // 3) Original – enriched
  {
    id: 3,
    name: "Clan Ranger",
    ruler: "Spirit Empress",
    units: ["Archer Queen", "Princess", "Dart Goblin", "Valkyrie", "Archer", "Barbarian"],
    tier: "S" as const,
    description: "Reliable Clan front with Ranger DPS scaling.",
    descriptionLong:
      "Clan Ranger merges a stable Clan frontline with the scaling DPS of Rangers. Archer Queen and Princess pressure from range while Valkyrie/Barbarian keep the front intact. It’s less bursty than Assassin comps but wins through consistency and adaptable positioning.",
    whenToPlay:
      "Pick when you find early Clan units or Princess quickly. Great default if you want stability over high-rolls.",
    coreUnits: ["Archer Queen", "Princess", "Valkyrie"],
    tips: [
      "Place Valkyrie to spin on multiple frontline targets.",
      "Keep Archers/Dart Goblin safe to maximize uptime.",
      "Three-star Princess can hard-carry late rounds."
    ],
    battlefieldUnits: [
      { name: "Archer Queen", row: 2, col: 2 },
      { name: "Princess",     row: 3, col: 2 },
      { name: "Dart Goblin",  row: 3, col: 4 },
      { name: "Valkyrie",     row: 0, col: 1 },
      { name: "Archer",       row: 3, col: 0 },
      { name: "Barbarian",    row: 0, col: 3 },
    ],
  },

  {
    id: 4,
    name: "Juggernaut Throwers",
    ruler: "Sprit Empress",
    units: ["Spear Goblin", "Skeleton King", "Goblin Machine", "P.E.K.K.A", "Executioner", "Bomber"],
    tier: "A" as const,
    description: "Tanky Juggernauts upfront with Throwers providing long-range AoE.",
    descriptionLong:
      "Juggernaut Throwers mix a strong frontline of Skeleton King, Goblin Machine, and P.E.K.K.A with backline AoE from Executioner, Bomber, and Spear Goblin. The Juggernaut synergy grants frontline shields and stuns, buying time for Throwers to rain down damage from a distance. It excels in mid-to-late fights where sturdy tanks and consistent AoE wear opponents down.",
    whenToPlay:
      "Run this when you get early Juggernaut pieces (Skeleton King, Goblin Machine) or multiple Throwers in shop. Great against swarmy or melee-heavy lobbies.",
    coreUnits: ["Skeleton King", "Executioner", "Goblin Machine"],
    tips: [
      "Keep Throwers two rows back to fully use their range bonus.",
      "Skeleton King should anchor center frontline to maximize his shield and death effect.",
      "Use Goblin Machine as an early-game stabilizer until your big tanks come online."
    ],
    battlefieldUnits: [
      { name: "Skeleton King", row: 0, col: 2 },
      { name: "Goblin Machine",row: 0, col: 1 },
      { name: "P.E.K.K.A",     row: 0, col: 3 },
      { name: "Executioner",   row: 3, col: 2 },
      { name: "Bomber",        row: 3, col: 0 },
      { name: "Spear Goblin",  row: 3, col: 4 },
    ],
  },

  {
    id: 5,
    name: "Undead Throwers",
    ruler: "Spirit Empress",
    units: [ "Skeleton King", "Royal Ghost", "Giant Skeleton", "Executioner", "Spear Goblin", "Bomber" ],
    tier: "A" as const,
    description: "Thrower AoE with Undead curses and massive frontline explosions.",
    descriptionLong:
      "Undead Throwers combines Thrower AoE damage with Undead curses and tanky death effects. Skeleton King and Giant Skeleton anchor the frontline, while Royal Ghost adds pressure with curses and backline disruption. Executioner and Bomber shred grouped enemies, and Spear Goblin provides consistent poke from range. This comp excels against clustered enemies where AoE and death explosions can swing fights.",
    whenToPlay:
      "Great when you find early Throwers or Undead units. Works best against swarmy or melee-heavy comps that clump together.",
    coreUnits: ["Executioner", "Skeleton King", "Giant Skeleton"],
    tips: [
      "Position Giant Skeleton to explode in the middle of enemy tanks.",
      "Keep Executioner and Bomber in the backline for maximum AoE uptime.",
      "Royal Ghost should target fragile carries with his curse.",
    ],
    battlefieldUnits: [
      { name: "Skeleton King",   row: 0, col: 2 },
      { name: "Giant Skeleton",  row: 0, col: 3 },
      { name: "Royal Ghost",     row: 0, col: 1 },
      { name: "Executioner",     row: 3, col: 2 },
      { name: "Bomber",          row: 3, col: 0 },
      { name: "Spear Goblin",    row: 3, col: 4 },
    ],
  },

  {
    id: 6,
    name: "Princess Carry",
    ruler: "Spirit Empress",
    units: ["Princess", "Archer", "Dart Goblin", "Knight", "Valkyrie", "Goblin Machine"],
    tier: "A" as const,
    description: "High-tempo 3× Ranger rush to a fast 3★ Princess.",
    descriptionLong:
      "Built around cheap Rangers to hit 3× Ranger instantly and snowball tempo. Cycle merges for extra elixir and rush a 3★ Princess before heavy comps stabilize. Knight/Valkyrie anchor a modest front while your backline overwhelms with speed.",
    whenToPlay:
      "Perfect when you see early Princess copies or want to punish slow scalers.",
    coreUnits: ["Princess", "Dart Goblin", "Valkyrie"],
    tips: [
      "Hard-roll for Princess early—she’s the win condition.",
      "Use Archer/Dart Goblin as both synergy and merge fodder.",
      "Keep cycling merges to farm elixir and tempo advantage."
    ],
    battlefieldUnits: [
      { name: "Princess",   row: 3, col: 2 },
      { name: "Archer",     row: 3, col: 0 },
      { name: "Dart Goblin",row: 3, col: 4 },
      { name: "Knight",     row: 0, col: 1 },
      { name: "Valkyrie",   row: 0, col: 2 },
      { name: "Goblin Machine",     row: 0, col: 3 },
    ],
  },


  {
    id: 7,
    name: "Noble Juggernauts",
    ruler: "Spirit Empress",
    units: ["Goblin Machine", "Skeleton King", "Knight", "P.E.K.K.A", "Princess", "Executioner"],
    tier: "B" as const,
    description: "Juggernaut frontline with Princess-led Noble support and AoE control.",
    descriptionLong:
      "Noble Juggernauts blend the durability of Skeleton King, Goblin Machine, Knight, and P.E.K.K.A with Princess’s Ranger/Noble synergy. The Juggernauts provide frontline shields and stuns, while Executioner and Princess handle AoE and ranged pressure. With Nobles boosting allied stats, this comp scales well into extended fights, trading raw burst for consistent team power.",
    whenToPlay:
      "Best picked when you find Princess early and have access to multiple Juggernaut tanks. Counters backline-heavy teams by outlasting them.",
    coreUnits: ["Princess", "Skeleton King", "P.E.K.K.A"],
    tips: [
      "Keep Princess safe in the backline to scale her DPS and Noble buffs.",
      "Knight and Goblin Machine serve as cheap Juggernaut fillers until P.E.K.K.A is online.",
      "Executioner’s line damage pairs well with Juggernaut stuns—position him behind tanks."
    ],
    battlefieldUnits: [
      { name: "Skeleton King", row: 0, col: 2 },
      { name: "Goblin Machine",row: 0, col: 1 },
      { name: "P.E.K.K.A",     row: 0, col: 3 },
      { name: "Knight",        row: 2, col: 1 },
      { name: "Princess",      row: 3, col: 2 },
      { name: "Executioner",   row: 3, col: 4 },
    ],
  },

  {
    id: 8,
    name: "Ace Throwers",
    ruler: "Spirit Empress",
    units: ["PEKKA", "Executioner", "Bandit", "Mega Knight", "Bomber", "Spear Goblin"],
    tier: "A" as const,
    description: "Heavy tanks up front, Thrower damage from safety.",
    descriptionLong:
      "P.E.K.K.A, Bandit and Mega Knight buy time while Bomber/Executioner ramp DPS with Thrower synergy. Bandit stuns and Ace leadership buffs add durability. It’s slower than rush comps but extremely stable with good positioning.",
    whenToPlay:
      "Great when you hit multiple tanks early. Strong versus Assassin-heavy lobbies.",
    coreUnits: ["Bandit", "Executioner", "Mega Knight"],
    tips: [
      "Always front the tanks to protect your backline.",
      "Prioritize 3★ Executioner; he scales best with range.",
      "Fan out tanks to cover both flanks versus divers."
    ],
    battlefieldUnits: [
      { name: "PEKKA",     row: 0, col: 2 },
      { name: "Bandit", row: 0, col: 1 },
      { name: "Mega Knight",   row: 0, col: 3 },
      { name: "Executioner",      row: 3, col: 2 },
      { name: "Bomber",        row: 3, col: 0 },
      { name: "Spear Goblin",        row: 3, col: 4 },
    ],
  },

  // 9) New
  {
    id: 9,
    name: "Ace Avengers",
    ruler: "Spirit Empress",
    units: ["Valkyrie", "Archer Queen", "Bandit", "P.E.K.K.A", "Executioner", "Mega Knight"],
    tier: "A" as const,
    description: "Tanky Ace frontline with Avenger finishers and strong AoE control.",
    descriptionLong:
      "Ace Avengers combines a beefy frontline of P.E.K.K.A, Mega Knight, and Valkyrie with the clutch carry potential of Archer Queen and Bandit. The Ace trait empowers Bandit as a deadly captain unit, while Executioner provides reliable AoE damage from the backline. The comp thrives in extended fights where your tanks buy time for your carries to clean up with Avenger bursts and Ace scaling.",
    whenToPlay:
      "Choose this comp when you hit Bandit or P.E.K.K.A early and need a stable, bruiser-heavy team. Strong against fragile Ranger comps and mid-game assassins.",
    coreUnits: ["Archer Queen", "Bandit", "P.E.K.K.A"],
    tips: [
      "Use P.E.K.K.A and Mega Knight up front to absorb damage while stunning enemies.",
      "Executioner should be placed behind tanks to maximize his AoE line damage.",
      "Archer Queen and Bandit become the late-game closers — prioritize their upgrades.",
      "Position Bandit where she can dash onto high-value enemy carries."
    ],
    battlefieldUnits: [
      { name: "Archer Queen", row: 2, col: 2 },
      { name: "Bandit",       row: 0, col: 1 },
      { name: "Valkyrie",     row: 0, col: 2 },
      { name: "P.E.K.K.A",        row: 0, col: 3 },
      { name: "Executioner",  row: 3, col: 2 },
      { name: "Mega Knight",  row: 0, col: 0 },
    ],
  },

  {
    id: 10,
    name: "Noble Ranger",
    ruler: "Spirit Empress",
    units: ["Golden Knight", "Knight", "Princess", "Prince", "Dart Goblin", "Archer"],
    tier: "B" as const,
    description: "Noble frontline tanks protect scaling Rangers with piercing damage.",
    descriptionLong:
      "Noble Ranger blends the durability of Noble frontline units with the relentless scaling of Rangers. Golden Knight and Knight hold the line, while Prince provides strong single-target pressure. In the backline, Princess, Dart Goblin, and Archer scale into high DPS threats. The Noble synergy enhances frontline survivability and backline damage, making this comp a consistent performer across different lobbies.",
    whenToPlay:
      "Best when you find early Rangers or Princess quickly. Excels against Clan and Thrower comps by outlasting them with a sturdy Noble front.",
    coreUnits: ["Princess", "Golden Knight", "Dart Goblin"],
    tips: [
      "Allways put your Rangers in the backline so they recieve Noble trait buffs consistently.",
      "Use Prince aggressively to break through enemy tanks or dive into carries.",
      "Fan out Rangers to avoid losing them all to AoE abilities.",
    ],
    battlefieldUnits: [
      { name: "Golden Knight", row: 0, col: 3 },
      { name: "Knight",        row: 0, col: 1 },
      { name: "Prince",        row: 2, col: 2 },
      { name: "Princess",      row: 3, col: 2 },
      { name: "Dart Goblin",   row: 3, col: 4 },
      { name: "Archer",        row: 3, col: 0 },
    ],
  },

  {
    id: 11,
    name: "Goblin Assassin",
    ruler: "Spirit Empress",
    units: ["Goblin", "Spear Goblin", "Royal Ghost", "Golden Knight", "Goblin Machine", "Dart Goblin"],
    tier: "B" as const,
    description: "Econ-driven assassin swarm that snowballs merges/crits.",
    descriptionLong:
      "Leans into Goblin economy for free units and fast merges, then uses Assassin leaps and crits to pick off key targets. Royal Ghost and Golden Knight pressure backlines while Goblin Machine stabilizes the front. When Goblin procs hit, it ramps frighteningly fast.",
    whenToPlay:
      "Great if shop feeds Goblins early or you want a high-tempo curve.",
    coreUnits: ["Royal Ghost", "Golden Knight", "Goblin Machine"],
    tips: [
      "Cycle cheap Goblins aggressively to trigger bonus elixir spawns.",
      "Split assassins to collapse the enemy backline from both sides.",
      "Don’t over-invest in fragile DPS before securing a front."
    ],
    battlefieldUnits: [
      { name: "Golden Knight",  row: 0, col: 3 },
      { name: "Royal Ghost",    row: 0, col: 4 },
      { name: "Goblin Machine", row: 0, col: 2 },
      { name: "Spear Goblin",   row: 2, col: 4 },
      { name: "Dart Goblin",    row: 3, col: 2 },
      { name: "Goblin",         row: 0, col: 0 },
    ],
  },
];




export const mockModifiers = [
  {
    name: "Bronze II League",
    modifiers: [
      { title: "Big Bucks", description: "All Rulers start with +5 Elixir" },
      { title: "Bigger Team", description: "Team Size +1" },
      { title: "Legacy", description: "Gain +5 Elixir when a Ruler is knocked out" },
    ],
  },
  {
    name: "Bronze III League",
    modifiers: [
      { title: "Epic Star", description: "Start with a 2-Star 3-Elixir Troop" },
      { title: "Party Time", description: "Team Size is always 6" },
      { title: "Rare Star", description: "Start with a 2-Star 2-Elixir Troop" },
    ],
  },
  {
    name: "Silver I League",
    modifiers: [
      { title: "Legendary Star", description: "Start with a 2-Star 4-Elixir Troop" },
      { title: "Champion Star", description: "Start with a random 5-Elixir Troop" },
      { title: "Richer and Richer", description: "Every 2 Elixir, you'll gain +1 Elixir interest next round" },
    ],
  },
  {
    name: "Silver II League",
    modifiers: [
      { title: "Fighting Fever", description: "Troops gain +100% Hit Speed for 6s when defeating an enemy" },
      { title: "Less is More", description: "Combat Start: If you have fewer Troops, your team will gain +25% HP and Hit Speed" },
      { title: "Ouch!", description: "Combat Start: Troops in the first row of hexes reflect 40% of Damage taken" },
    ],
  },
  {
    name: "Silver III League",
    modifiers: [
      { title: "Elixir Collector", description: "Gain an Elixir Collector that generates 2 Elixir per round which will be stored until you decide to sell" },
      { title: "You're Mine", description: "You will gain a 1-Star copy of the first enemy Troop you defeat" },
      { title: "First Free", description: "The first Troop bought each turn is free" },
    ],
  },
  {
    name: "Gold I League",
    modifiers: [
      { title: "Four Stars", description: "Troop pool doubled with more available in the Shop" },
      { title: "Echo Bench", description: "Every round, gain a 1-Star copy of the Troop in your right-most Dench slot" },
      { title: "Pandora's Bench", description: "Each round, the Troop in your right-most Bench slot becomes a random Troop of the same cost" },
    ],
  },
  {
    name: "Gold II League",
    modifiers: [
      { title: "Just Keep Living", description: "Start with a Dummy and gain +1 Elixir if it survives the round" },
      { title: "Trait Dummy", description: "Start with a Dummy that has 2 random Traits" },
      { title: "Huddle Up!", description: "Every round, gain a Troop that suits your team" },
    ],
  },
  {
    name: "Gold III League",
    modifiers: [
      { title: "Lucky Discount", description: "Every time the Shop resets, one random Troop will cost 1 Elixir less than normal" },
      { title: "Clear Mind", description: "If your Bench is empty, gain +2 Elixir next round" },
      { title: "Promotion", description: "Each round, the Troop in your right-most Bench slot transforms into a random Troop that costs +1 Elixir" },
    ],
  },
  {
    name: "Diamond League",
    modifiers: [
      { title: "Smart Trade", description: "For every Troop you sell, gain +1 Elixir next round" },
      { title: "Ascension", description: "In Round 3, the Troop in your right-most Bench slot becomes a 3-Star powerhouse" },
      { title: "First Choice", description: "The first Troop bought each turn is a 2-Star" },
    ],
  },
]


export const mockTraits = [
  {
    name: "Ace",
    description: "Combat Start: Highest Merge Level Troop is Captain. When the Captain defeats enemy Troops, your team gains +20% Hit Speed (4s)",
    thresholds: [
      { value: 2, effect: "Captain gains 30% bonus Damage" },
      { value: 4, effect: "Captain gains 60% bonus Damage and +30% HP of Damage dealt" },
    ],
  },
  {
    name: "Assassin",
    description: "Combat Start: Assassins will leap to the enemy’s backline Troops",
    thresholds: [
      { value: 3, effect: "+35% Critical Chance and Critical Damage" },
    ],
  },
  {
    name: "Avenger",
    description: "Avengers gain bonus Damage, with the last woman standing gaining double Damage",
    thresholds: [
      { value: 3, effect: "+30% Damage" },
    ],
  },
  {
    name: "Brawler",
    description: "Brawlers gain bonus max HP.",
    thresholds: [
      { value: 2, effect: "+40% HP" },
      { value: 4, effect: "+80% for Brawlers, +30% for the team HP" },
    ],
  },
  {
    name: "Clan",
    description: "Once per round, Clans rapidly heal and gain bonus Hit Speed at 50% HP.",
    thresholds: [
      { value: 2, effect: "+30% of max HP and Hit Speed" },
      { value: 4, effect: "+60% of max HP and Hit Speed for Clans, +30% for the team" },
    ],
  },
  {
    name: "Goblin",
    description: "You’ll get an extra random Goblin for free next round.",
    thresholds: [
      { value: 2, effect: "Gain a 2-Elixir Goblin" },
      { value: 4, effect: "+60% chance of gaining a 3 or 4-Elixir Goblin" },
    ],
  },
  {
    name: "Juggernaut",
    description: "Combat Start: Juggernaunts and Troops behind gain a 12s Shield",
    thresholds: [
      { value: 2, effect: "+30% bonus Shield" },
      { value: 4, effect: "+60% bonus Shield" },
    ],
  },
  {
    name: "Noble",
    description: "Frontline Troops take less Damage while backline Troops gain bonus Damage",
    thresholds: [
      { value: 2, effect: "20%" },
      { value: 4, effect: "40%" },
    ],
  },
  {
    name: "Ranger",
    description: "Rangers gain Hit Speed per attack, stacking up to 15x",
    thresholds: [
      { value: 3, effect: "+15% Hit Speed" },
    ],
  },
  {
    name: "Thrower",
    description: "Throwers gain +1 Attack Range and deal more Damage to distant targets",
    thresholds: [
      { value: 3, effect: "+10% Damage per Hex" },
    ],
  },
  {
    name: "Undead",
    description: "Combat Start: The enemy with the highest HP is cursed, and your Undead gain 30% bonus Damage when that enemy is defeated",
    thresholds: [
      { value: 2, effect: "Curses 2 enemies, max HP cut by 25%" },
      { value: 4, effect: "Curses 3 enemies, max HP cut by 50%" },
    ],
  },
];
