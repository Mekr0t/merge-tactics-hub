import { normalizeUnitName } from "./unitUtils";

export const unitPortrait = (unitName: string) =>
  `/units/${normalizeUnitName(unitName)}.webp`;