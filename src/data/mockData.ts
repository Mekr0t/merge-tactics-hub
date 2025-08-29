export const mockComps = [
  {
    id: 1,
    name: "Juggernaut Nobles",
    ruler: "Iron Crown",
    units: ["Knight", "Guardian", "Paladin", "Crusader", "Champion"],
    traits: [
      { name: "Juggernaut", level: 4 },
      { name: "Noble", level: 3 },
      { name: "Ace", level: 2 }
    ],
    tier: 'S' as const,
    description: "Tanky frontline comp with massive shields and healing."
  },
  {
    id: 2,
    name: "Assassin Shadows",
    ruler: "Void Blade",
    units: ["Ninja", "Rogue", "Phantom", "Wraith", "Shadow"],
    traits: [
      { name: "Assassin", level: 5 },
      { name: "Shadow", level: 3 },
      { name: "Stealth", level: 2 }
    ],
    tier: 'S' as const,
    description: "High burst damage with invisibility and critical strikes."
  },
  {
    id: 3,
    name: "Mage Academy",
    ruler: "Arcane Staff",
    units: ["Wizard", "Sorcerer", "Arcane", "Mystic", "Sage"],
    traits: [
      { name: "Mage", level: 5 },
      { name: "Scholar", level: 3 },
      { name: "Elemental", level: 2 }
    ],
    tier: 'A' as const,
    description: "AOE magic damage with mana synergies."
  },
  {
    id: 4,
    name: "Goblin Swarm",
    ruler: "Tribal Chief",
    units: ["Goblin", "Shaman", "Warrior", "Scout", "Berserker"],
    traits: [
      { name: "Goblin", level: 6 },
      { name: "Tribal", level: 3 },
      { name: "Swarm", level: 2 }
    ],
    tier: 'A' as const,
    description: "Overwhelming numbers with tribal bonuses."
  },
  {
    id: 5,
    name: "Dragon Lords",
    ruler: "Ancient Scale",
    units: ["Drake", "Wyvern", "Dragon", "Elder", "Ancient"],
    traits: [
      { name: "Dragon", level: 3 },
      { name: "Ancient", level: 2 },
      { name: "Fire", level: 4 }
    ],
    tier: 'B' as const,
    description: "Expensive but powerful late-game units."
  },
  {
    id: 6,
    name: "Beast Pack",
    ruler: "Wild Hunt",
    units: ["Wolf", "Bear", "Tiger", "Panther", "Alpha"],
    traits: [
      { name: "Beast", level: 5 },
      { name: "Wild", level: 3 },
      { name: "Pack", level: 2 }
    ],
    tier: 'B' as const,
    description: "Nature-based synergies with attack speed buffs."
  }
];

export const mockTraits = [
  {
    name: "Juggernaut",
    description: "Units gain massive shields and damage reduction",
    thresholds: [2, 4, 6],
    color: "bg-blue-500"
  },
  {
    name: "Assassin", 
    description: "Units gain critical strike chance and stealth",
    thresholds: [2, 4, 6],
    color: "bg-purple-500"
  },
  {
    name: "Mage",
    description: "Units deal magic damage and share mana",
    thresholds: [2, 4, 6],
    color: "bg-cyan-500"
  },
  {
    name: "Dragon",
    description: "Ancient power with fire damage",
    thresholds: [2, 3],
    color: "bg-red-500"
  }
];

export const mockRulers = [
  {
    name: "Iron Crown",
    description: "Your Juggernauts gain +100 armor and taunt nearby enemies",
    tier: "S",
    bestWith: ["Juggernaut Nobles", "Tank Fortress"]
  },
  {
    name: "Void Blade", 
    description: "Assassins deal +50% critical damage and gain invisibility on kill",
    tier: "S",
    bestWith: ["Assassin Shadows", "Stealth Strike"]
  },
  {
    name: "Arcane Staff",
    description: "Mages restore 20 mana to nearby allies when casting spells",
    tier: "A", 
    bestWith: ["Mage Academy", "Elemental Storm"]
  }
];