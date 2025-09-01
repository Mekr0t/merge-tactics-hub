import { UNIT_DATA } from "./unitData";
import { normalizeUnitName } from "./unitUtils";
import { traitMax } from "./traitData"; // you already have max values per trait

export const calculateTraits = (units: string[]) => {
  const counts: Record<string, number> = {};

  units.forEach(unitName => {
    const normalized = normalizeUnitName(unitName);
    const data = UNIT_DATA[normalized];
    if (!data) return;

    data.traits.forEach(trait => {
      counts[trait] = (counts[trait] || 0) + 1;
    });
  });

  // convert to array { name, level, max }
  return Object.entries(counts).map(([name, level]) => ({
    name,
    level,
    max: traitMax(name),
  }));
};

export const getTraitColor = (current: number, max: number): string => {
  // Fully active trait (max bonus unlocked)
  if (current >= max) {
    return "bg-yellow-600 text-white"; // gold
  }

  // Partially active (some units, not maxed)
  if (current > 0) {
    return "bg-blue-700 text-white"; // blue highlight
  }

  // Inactive (no units)
  return "bg-gray-800 text-gray-400"; // dark gray background
};