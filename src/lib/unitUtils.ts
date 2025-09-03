export const normalizeUnitName = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ""); // keep only letters + numbers