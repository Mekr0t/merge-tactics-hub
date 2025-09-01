const TRAIT_MAX: Record<string, number> = {
  Clan: 4,
  Avenger: 3,
  Ace: 4,
  Brawler: 4,
  Ranger: 3,
  Assassin: 3,
  Goblin: 4,
  Juggernaut: 4,
  Noble: 4,
  Thrower: 3,
  Undead: 4
};

export const traitMax = (traitName: string): number => {
  return TRAIT_MAX[traitName] ?? 1;
};