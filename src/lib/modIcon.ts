// src/lib/modIcon.ts
export const modIcon = (modName: string) =>
  `/modifiers/${modName
    .toLowerCase()          // to lowercase
    .replace(/\s+/g, "")   // remove spaces
    .replace(/['!]/g, "")  // remove ' and !
  }.webp`;
