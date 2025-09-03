export const UNIT_DATA: Record<string, { cost: number; traits: string[]; description: string; displayName: string; gender?: string; range?: number }> = {
  // 2 elixir cost
  barbarian: { displayName: "Barbarian", cost: 2, traits: ["Clan", "Brawler"], gender: "Male", range: 1, description: "An all-around melee attacker with a mean mustache" },
  archer: { displayName: "Archer", cost: 2, traits: ["Clan", "Ranger"], gender: "Female", range: 4, description: "Who needs all that armor when you’ve got wicked range and hot pink hair?" },
  knight: { displayName: "Knight", cost: 2, traits: ["Noble", "Juggernaut"], gender: "Male", range: 1, description: "One of the toughest melee fighters in the kingdom" },
  goblin: { displayName: "Goblin", cost: 2, traits: ["Goblin", "Assassin"], gender: "Male", range: 1, description: "Goblin speed and melee skills eliminate the need for that pesky armor" },
  speargoblin: { displayName: "Spear Goblin", cost: 2, traits: ["Goblin", "Thrower"], gender: "Male", range: 3, description: "Spears that slice through wind at such a wide range that he doesn’t even need armor" },
  bomber: { displayName: "Bomber", cost: 2, traits: ["Undead", "Thrower"], gender: "Male", range: 3, description: "Throws a bomb at the nearest enemy, dealing Damage in a 2-Hex Radius" },

  // 3 elixir cost
  valkyrie: { displayName: "Valkyrie", cost: 3, traits: ["Clan", "Avenger"], gender: "Female", range: 1, description: "A melee master who channels her rage into area Damage" },
  pekka: { displayName: "P.E.K.K.A", cost: 3, traits: ["Ace", "Juggernaut"], gender: "Female", range: 1, description: "A slow, but heavily armored melee fighter. Nothing gets past her…" },
  prince: { displayName: "Prince", cost: 3, traits: ["Noble", "Brawler"], gender: "Male", range: 1, description: "Combat Start: Charges at the nearest target, dealing double Damage, pushing back enemies and stunning them for 2s" },
  giantskeleton: { displayName: "Giant Skeleton", cost: 3, traits: ["Undead", "Brawler"], gender: "Male", range: 1, description: "Upon defeat, he drops a bomb that explodes after 1.5s, dealing Damage and stunning enemies in his Hex Radius for 2s" },
  dartgoblin: { displayName: "Dart Goblin", cost: 3, traits: ["Goblin", "Ranger"], gender: "Male", range: 4, description: "An unarmored ranged attacker who runs fast, shoots far, and chews gum" },
  executioner: { displayName: "Executioner", cost: 3, traits: ["Ace", "Thrower"], gender: "Male", range: 4, description: "Throws his boomerang axe at the nearest target across several Hexes" },

  // 4 elixir cost
  megaknight: { displayName: "Mega Knight", cost: 4, traits: ["Ace", "Brawler"], gender: "Male", range: 1, description: "Jumps and strikes the largest group of enemies every few seconds, dealing damage and stunning enemies in its Hex Radius for 2s" },
  bandit: { displayName: "Bandit", cost: 4, traits: ["Ace", "Avenger"], gender: "Female", range: 1, description: "Dashes to the farthest enemy in 3 Hexes after certain hits, dealing bonus Damage and stunning all in her path for 1s" },
  princess: { displayName: "Princess", cost: 4, traits: ["Noble", "Ranger"], gender: "Female", range: 6, description: "Fires flaming arrows at the farthest enemy, dealing Damage in a 2-Hex Radius" },
  royalghost: { displayName: "Royal Ghost", cost: 4, traits: ["Undead", "Assassin"], gender: "Male", range: 1, description: "Becomes invisible for a short time after 3 hits" },
  goblinmachine: { displayName: "Goblin Machine", cost: 4, traits: ["Goblin", "Juggernaut"], gender: "Male", range: 1, description: "Fires a rocket at the farthest enemy after certain hits, dealing 50% bonus Damage and stunning them for 1.5s" },

  // 5 elixir cost
  archerqueen: { displayName: "Archer Queen", cost: 5, traits: ["Clan", "Avenger"], gender: "Female", range: 4, description: "Fires multiple arrows at her closest enemy. When her HP drops below 50%, she’ll turn invisible and deal bonus Damage" },
  skeletonking: { displayName: "Skeleton King", cost: 5, traits: ["Undead", "Juggernaut"], gender: "Male", range: 1, description: "Deals Damage to enemies in a cone radius and summons a Skeleton for every enemy he defeats" },
  goldenknight: { displayName: "Golden Knight", cost: 5, traits: ["Noble", "Assassin"], gender: "Male", range: 1, description: "Dashes to the lowest HP enemy after defeating an enemy and deals bonus Damage" }
};