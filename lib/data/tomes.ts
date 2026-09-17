/**
 * TIER 3 — ANALYSIS. Generated from docs/plan/13-tome-allocation.md.
 *
 * The defining constraint: the owner confirmed in client that SKILL TOME UPGRADES
 * ARE RANDOM — you cannot choose which skill a tome improves. So the only safe
 * spend is a FULL MAX. This module must never express a partial allocation.
 */
export const TIER = 3 as const;
export const SOURCE_DOC = "docs/plan/13-tome-allocation.md";

export const TOME_UPGRADES_ARE_RANDOM = true;

export const RANDOMNESS_RULE =
  "Tome upgrades pick a random skill. Partial booking is a lottery — a full max is the " +
  "only way to guarantee the skill you want is upgraded, and it wastes nothing.";

export interface TomeAllocation {
  order: number;
  championId: string;
  cost: number;
  running: number;
  buys: string;
}

export interface TomeBudget {
  tier: "Rare" | "Epic" | "Legendary" | "Mythical";
  held: number;
  spend: number;
  spare: number;
  allocations: TomeAllocation[];
  note: string;
}

export const TOME_BUDGETS: TomeBudget[] = [
  {
    tier: "Legendary", held: 12, spend: 12, spare: 0,
    note: "Artak costs exactly 12 — a perfect fit, zero waste. Rathalos is the next full max, also exactly 12. More Legendary tomes arrive from Live Arena (1/month regardless of tier), the day 61-90 login block, and the Faction Wars star track past 335 stars.",
    allocations: [
      { order: 1, championId: "artak", cost: 12, running: 12,
        buys: "HP Burn 75% → 100% and Decrease ATK 75% → 100%, both cooldowns 4 → 3. His masteries are already bought, so books finish him rather than starting someone else." },
    ],
  },
  {
    tier: "Epic", held: 110, spend: 100, spare: 10,
    note: "You can afford to fully max every Epic you own. The only question is order, and that is just whoever joins a team first.",
    allocations: [
      { order: 1, championId: "uugo", cost: 16, running: 16,
        buys: "A2 Decrease DEF to 100% chance plus Block Buffs, cooldown 4 → 3; A3 cooldown 6 → 4." },
      { order: 2, championId: "tagoar", cost: 10, running: 26,
        buys: "A2 cooldown 5 → 3 on the AoE Increase SPD; A3 revive 7 → 5." },
      { order: 3, championId: "high-khatun", cost: 11, running: 37,
        buys: "A2 cooldown 4 → 3; A1 Decrease SPD 25% → 40%." },
      { order: 4, championId: "godseeker-aniri", cost: 17, running: 54,
        buys: "A3 and passive both drop from cooldown 7 to 4 — the revive and the Revive-on-Death pre-empt." },
      { order: 5, championId: "alure", cost: 12, running: 66,
        buys: "A2 cooldown 4 → 3 plus debuff chance. Needed for the Fire Knight kit. HellHades book value is only 4/10, which is why she is 5th rather than skipped." },
      { order: 6, championId: "fenax", cost: 13, running: 79,
        buys: "A2 cooldown 5 → 4, A3 6 → 4. Your Ice Golem specialist." },
      { order: 7, championId: "morag-bronzelock", cost: 9, running: 88,
        buys: "A2 cooldown 4 → 3 for near-permanent Strengthen, A3 6 → 4." },
      { order: 8, championId: "skullcrown", cost: 12, running: 100,
        buys: "A2 cooldown 4 → 3; both passive cooldowns down." },
    ],
  },
  {
    tier: "Rare", held: 26, spend: 24, spare: 2,
    note: "Rare tomes fit nothing else you own — there is no reason to hold them.",
    allocations: [
      { order: 1, championId: "apothecary", cost: 10, running: 10,
        buys: "A2 heal and cooldown 3 → 2; A3 cooldown 5 → 3 on the AoE Increase SPD." },
      { order: 2, championId: "kael", cost: 14, running: 24,
        buys: "A1 Poison chance, A2 damage, A3 cooldown 5 → 4 and Poison chance. Book value 10/10." },
    ],
  },
  {
    tier: "Mythical", held: 0, spend: 0, spare: 0,
    note: "Galathir needs 10, and LEGENDARY TOMES CANNOT BE USED ON A MYTHICAL. They come from Hero's Path events and similar; there is no farmable source. Bank to 10, then full-max — a partial spend on a two-form champion with six skills is the worst possible lottery.",
    allocations: [],
  },
];

/** Champions that must never appear in Legendary tome planning. */
export const LEGENDARY_TOME_INELIGIBLE = ["starsage-galathir"];
