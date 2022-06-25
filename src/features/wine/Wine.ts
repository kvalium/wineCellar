export const wineKind = ["blanc", "rouge", "rosé", "licoreux", "autre"];

export type WineKind = "blanc" | "rouge" | "rosé" | "licoreux" | "autre";

export type Wine = {
  year: number;
  kind: WineKind;
  castle: string;
  appellation: string;
};
