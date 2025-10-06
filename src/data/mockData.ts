import { Description } from "@radix-ui/react-toast";

export const mockComps = [
  {
  id: 1,
  name: "Dragon Juggernauts",
  ruler: "Spirit Empress",
  units: ["Baby Dragon", "Musketeer", "Goblin Machine", "Valkyrie", "Knight", "Skeleton King"],
  tier: "S" as const,
  description: "Flying AoE dragon power meets unbreakable Juggernaut front.",
  descriptionLong:
    "Dragon Juggernauts blend the tanky resilience of Skeleton King and Knight with the sustained AoE of Baby Dragon and Musketeer. Goblin Machine anchors the front as a Juggernaut shield generator while Valkyrie spins through clustered foes. The air pressure from Baby Dragon forces awkward enemy spreads, letting your frontline grind down opponents in extended fights.",
  whenToPlay:
    "Play when you find early Goblin Machine or Valkyrie pairs and can upgrade Baby Dragon quickly. Excels into melee-centric lobbies or clumped Throwers.",
  coreUnits: ["Baby Dragon", "Skeleton King", "Goblin Machine"],
  tips: [
    "Position Baby Dragon diagonally to hit both front and backlines with splash.",
    "Place Valkyrie near center to maximize spin coverage.",
    "Skeleton King should be centered to absorb aggro and trigger passive effectively.",
  ],
  battlefieldUnits: [
    { name: "Skeleton King", row: 2, col: 0 },
    { name: "Goblin Machine", row: 3, col: 2 },
    { name: "Knight", row: 1, col: 1 },
    { name: "Valkyrie", row: 2, col: 1 },
    { name: "Baby Dragon", row: 3, col: 0 },
    { name: "Musketeer", row: 3, col: 1 },
  ],
},

{
  id: 2,
  name: "Golden Fortress",
  ruler: "Spirit Empress",
  units: ["Golden Knight", "Goblin", "Goblin Machine", "Valkyrie", "Knight", "Skeleton King"],
  tier: "S" as const,
  description: "An economic frontline juggernaut comp powered by Goblin tempo and golden charge bursts.",
  descriptionLong:
    "Golden Fortress unites the efficiency of Goblin economy with the raw strength of Juggernaut tanks. Golden Knight leads the charge with his chain dash ability, supported by Valkyrie and Knight sustaining the front. Skeleton King and Goblin Machine provide durability and elixir efficiency, letting you outscale opponents while maintaining constant pressure.",
  whenToPlay:
    "Best when you find early Golden Knight or Goblin copies and want a stable, scaling frontline. Counters Assassin and Avenger comps reliant on quick kills.",
  coreUnits: ["Golden Knight", "Goblin Machine", "Skeleton King"],
  tips: [
    "Place Golden Knight front-center to trigger his dash through multiple enemies.",
    "Use Goblin as early fodder for merges — its economy bonus fuels higher-cost upgrades.",
    "Position Goblin Machine behind your main tanks to protect its Juggernaut shield radius.",
  ],
  battlefieldUnits: [
    { name: "Golden Knight", row: 1, col: 4 },
    { name: "Skeleton King", row: 0, col: 2 },
    { name: "Valkyrie", row: 0, col: 4 },
    { name: "Goblin Machine", row: 1, col: 2 },
    { name: "Goblin", row: 1, col: 3 },
    { name: "Knight", row: 0, col: 3 },
  ],
},

{
  id: 3,
  name: "Royal Smashers",
  ruler: "Spirit Empress",
  units: ["Barbarian", "Giant Skeleton", "Prince", "Mega Knight", "Goblin Machine", "Valkyrie"],
  tier: "S" as const,
  description: "Explosive frontline comp built around chain crowd control and death damage.",
  descriptionLong:
    "Royal Smashers thrive on brute force and area control. Giant Skeleton and Mega Knight bring devastating stuns and explosions, while Prince and Barbarian deliver constant melee pressure. Goblin Machine provides Juggernaut shielding, keeping Valkyrie alive to mop up survivors. This comp punishes clustered enemies and rewards aggressive front positioning.",
  whenToPlay:
    "Pick when you hit early tanks or Giant Skeleton. Excellent into fragile backlines and clumped Throwers. Shines in mid-late fights where CC stacking wins trades.",
  coreUnits: ["Mega Knight", "Giant Skeleton", "Prince"],
  tips: [
    "Lead with Giant Skeleton — its bomb creates space and massive AoE pressure.",
    "Keep Mega Knight slightly off-center to ensure he lands on multiple enemies.",
    "Prince’s charge can delete squishy carries if aimed at an exposed flank.",
    "Valkyrie should follow your tanks to clean up post-bomb fights.",
  ],
  battlefieldUnits: [
    { name: "Giant Skeleton", row: 0, col: 2 },
    { name: "Mega Knight", row: 2, col: 1 },
    { name: "Prince", row: 2, col: 2 },
    { name: "Goblin Machine", row: 1, col: 3 },
    { name: "Valkyrie", row: 1, col: 2 },
    { name: "Barbarian", row: 2, col: 3 },
  ],
},


  


];




export const mockModifiers = [
  {
    name: "Bronze II League",
    modifiers: [
      { title: "Big Bucks", description: "All Rulers start with +5 Elixir" },
      { title: "Legacy", description: "Gain +5 Elixir when a Ruler is knocked out" },
    ],
  },
  {
    name: "Bronze III League",
    modifiers: [
      { title: "Elixir Festival", description: "+2 Elixir per round" },
      { title: "Champion Star", description: "Start with a random 5-Elixir Troop" },
    ],
  },
  {
    name: "Silver I League",
    modifiers: [
      { title: "Endurance Training", description: "All troops gain +40% HP" },
      { title: "You're Mine", description: "You will gain a 1-Star copy of the first enemy Troop you defeat" },
    ],
  },
  {
    name: "Silver II League",
    modifiers: [
      { title: "Fighting Fever", description: "Troops gain +100% Hit Speed for 6s when defeating an enemy" },
      { title: "Elixir Collector", description: "Gain an Elixir Collector that generates 2 Elixir per round which will be stored until you decide to sell" },
    ],
  },
  {
    name: "Silver III League",
    modifiers: [
      { title: "Echo Bench", description: "Every round, gain a 1-Star copy of the Troop in your right-most Bench slot" },
      { title: "Last Stand", description: "The last troop standing gains +200% damage" },
    ],
  },
  {
    name: "Gold I League",
    modifiers: [
      { title: "Chaos Chaos", description: "When troops merge, they become a random troop of +1 Elixir (Once per round)" },
      { title: "Master Arena", description: "Troops gain +100% HP and +50% damage if they stay on the same tile from round to round" },
    ],
  },
  {
    name: "Gold II League",
    modifiers: [
      { title: "Trait Dummy", description: "Start with a Dummy that has 2 random Traits" },
      { title: "Promotion", description: "Each round, the Troop in your right-most Bench slot transforms into a random Troop that costs +1 Elixir" },
    ],
  },
  {
    name: "Gold III League",
    modifiers: [
      { title: "Ultimate Origins", description: "Start with a Dummy with Undead and Noble Traits" },
      { title: "Ascension", description: "In Round 3, the Troop in your right-most Bench slot becomes a 3-Star powerhouse" },
    ],
  },
  {
    name: "Diamond League",
    modifiers: [
      { title: "Coaching", description: "Benched troops gain +100% damage and +50% HP next round" },
      { title: "Monster Drink", description: "Combat Start: Lowest HP troop gets bigger and gains +200% HP and +100% damage" },
    ],
  },
  {
    name: "COMING IN NOVEMBER!",
    modifiers: [
      { title: "Swift Tile", description: "A special tile appears on the board giving its troop +100% bonus hit speed" },
      { title: "One Punch", description: "Every troops' first attack in each round deals +300% damage" },
      { title: "Mystery Shop", description: "Shop's right-most troop will always cost 3 Elixir, but be a mystery until bought" },
      { title: "Devil Snap", description: "Troop in the right-most bench slot will be auto-sold for x2 Elixir and removed from the game (Once per game)" },

    ],
  },
]


export const mockTraits = [
  {
    name: "Ace",
    description: "Aces gain +20% Hit Speed. Your strongest Ace becomes the Captain",
    thresholds: [
      { value: 2, effect: "Captain gains 40% bonus Damage" },
      { value: 4, effect: "Captain gains 60% bonus Damage and gains +50% HP of Damage dealt" },
    ],
  },
  {
    name: "Assassin",
    description: "Combat Start: Assassins will leap to the enemy’s backline Troops",
    thresholds: [
      { value: 2, effect: "+25% Critical Chance and Critical Damage" },
      { value: 4, effect: "+50% Critical Chance and Critical Damage" },
    ],
  },
  {
    name: "Avenger",
    description: "Avengers gain bonus Damage, with the last woman standing gaining double Damage",
    thresholds: [
      { value: 2, effect: "+20% bonus Damage" },
      { value: 4, effect: "+40% bonus Damage" },
    ],
  },
  {
    name: "Brawler",
    description: "Brawlers gain bonus max HP.",
    thresholds: [
      { value: 2, effect: "+50% HP" },
      { value: 4, effect: "+100% bonus HP" },
    ],
  },
  {
    name: "Clan",
    description: "Once per round, Clans rapidly heal and gain bonus Hit Speed at 50% HP",
    thresholds: [
      { value: 2, effect: "+30% of max HP and Hit Speed" },
      { value: 4, effect: "+60% of max HP and Hit Speed for Clans" },
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
    description: "Combat Start: Juggernauts and allies behind them gain a 12s Shield and are immune to control effects while shielded",
    thresholds: [
      { value: 2, effect: "+30% Shield of max HP" },
      { value: 4, effect: "+60% Shield of max HP" },
    ],
  },
  {
    name: "Noble",
    description: "Frontline Nobles take less damage, while backline Nobles gain bonus damage",
    thresholds: [
      { value: 2, effect: "20% less Damage and 20% bonus Damage" },
      { value: 4, effect: "30% less Damage and 30% bonus Damage" },
      { value: 6, effect: "45% less Damage and 45% bonus Damage" },
    ],
  },
  {
    name: "Ranger",
    description: "Rangers gain Hit Speed per attack, stacking up to 15x",
    thresholds: [
      { value: 2, effect: "+10% Hit Speed" },
      { value: 4, effect: "+10% Hit Speed" },
    ],
  },
  {
    name: "Undead",
    description: "Combat Start: The enemy with the highest HP is cursed, and your Undead gain 30% bonus Damage when that enemy is defeated.",
    thresholds: [
      { value: 2, effect: "Curses 2 enemy, max HP cut by 25%" },
      { value: 4, effect: "Curses 3 enemy, max HP cut by 50%" },
      { value: 6, effect: "Curses 4 enemies, max HP cut by 75%" },
    ],
  },
  {
    name: "Blaster",
    description: "Blasters gain +1 Range and extra damage based on distance",
    thresholds: [
      { value: 2, effect: "+10% damage per hex" },
      { value: 4, effect: "+20% damage per hex" },
    ],
  },
  {
    name: "Electric",
    description: "After 10s, lightning strikes all enemies once and stunned troops 3x",
    thresholds: [
      { value: 2, effect: "Each strike deals 15% max HP damage" },
    ],
  },
  {
    name: "Fire",
    description: "Gain stackable bonus damage upon enemies’ defeat",
    thresholds: [
      { value: 2, effect: "Stackable bonus damage of 40%" },
    ],
  },
  {
    name: "Mage",
    description: "Combat Start: Strongest enemy troop is turned into a harmless rabbit for some time",
    thresholds: [
      { value: 2, effect: "Rabbit duration of 8 seconds" },
    ],
  }
];
