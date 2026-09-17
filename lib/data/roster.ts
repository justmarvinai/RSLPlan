import rosterJson from "@/data/roster.json";
import { rosterSchema, type Champion } from "@/lib/schemas";

/**
 * Validated at module load. A malformed roster fails the build rather than
 * shipping wrong advice to the one person who acts on it.
 */
export const roster = rosterSchema.parse(rosterJson);

export const champions: Champion[] = roster.champions;
export const account = roster.accountState;
export const resources = roster.resources;

export function getChampion(id: string): Champion | undefined {
  return champions.find((c) => c.id === id);
}

/** Rarity order, strongest first — used for sorting, never for ranking quality. */
const RARITY_ORDER = ["Mythical", "Legendary", "Epic", "Rare", "Uncommon", "Common"];
export function byRarity(a: Champion, b: Champion): number {
  const d = RARITY_ORDER.indexOf(a.rarity) - RARITY_ORDER.indexOf(b.rarity);
  return d !== 0 ? d : a.name.localeCompare(b.name);
}

export function hasMasteriesPurchased(id: string): boolean {
  return resources.masteriesAlreadyPurchased.includes(id);
}
