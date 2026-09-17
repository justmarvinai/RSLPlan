import { z } from "zod";

/**
 * Tier-1 schema. Mirrors data/roster.json, which is sourced from
 * docs/research/claude-web/ (retrieved 2026-09-17).
 *
 * Two rules are enforced by the shape itself:
 *  - Ratings are stored PER SOURCE with their own scale. There is deliberately no
 *    field for a combined score. See CLAUDE.md 2.8.
 *  - Every rating block carries source + scale + retrieved. A value without
 *    provenance is not representable. See CLAUDE.md 2.6.
 */

export const RARITIES = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythical"] as const;
export const AFFINITIES = ["Magic", "Force", "Spirit", "Void"] as const;

export const CONTENT_KEYS = [
  "campaign", "demonLord", "chimera", "hydra", "spider", "dragon",
  "fireKnight", "iceGolem", "arena", "factionWars", "minotaur",
  "arenaOffense", "arenaDefense",
  "spiderHard", "dragonHard", "fireKnightHard", "iceGolemHard",
] as const;

export type Rarity = (typeof RARITIES)[number];
export type Affinity = (typeof AFFINITIES)[number];
export type ContentKey = (typeof CONTENT_KEYS)[number];

const contentScores = z.record(z.enum(CONTENT_KEYS), z.number()).optional();

/** HellHades rates 0-10; Ayumilove rates 1-5 stars. Never merged. */
export const ratingSetSchema = z.object({
  source: z.string(),
  scale: z.string(),
  retrieved: z.string(),
  overall: z.number().optional(),
  rank: z.string().optional(),
  byContent: contentScores,
  byForm: z.record(z.string(), z.record(z.enum(CONTENT_KEYS), z.number())).optional(),
});

export const championSchema = z.object({
  id: z.string(),
  name: z.string(),
  rarity: z.enum(RARITIES),
  affinity: z.enum(AFFINITIES),
  faction: z.string(),
  role: z.string(),
  startRank: z.union([z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  feedersTo6Star: z.string(),
  aura: z
    .object({
      effect: z.string(),
      scope: z.string(),
      source: z.string(),
      retrieved: z.string(),
    })
    .nullable(),
  auraNote: z.string().nullable(),
  tomes: z.object({
    tomeRarity: z.enum(RARITIES),
    toMaxAllSkills: z.number(),
    ayumiloveHeaderSays: z.number().optional(),
    conflictNote: z.string().optional(),
    hellhadesBookValue: z.number(),
    hellhadesBookPriority: z.array(z.string()),
    source: z.string(),
    retrieved: z.string(),
  }),
  ratings: z.object({
    hellhades: ratingSetSchema,
    ayumilove: ratingSetSchema,
  }),
  gear: z.object({
    pveStats: z.array(z.string()),
    pveSets: z.array(z.string()),
    source: z.string(),
    retrieved: z.string(),
  }),
  masteries: z.object({
    firstPresetToCopy: z.string(),
    tier6Capstone: z.string().nullable(),
    a1HitCount: z.number(),
    rule: z.string(),
  }),
  owned: z.boolean(),
});

export const rosterSchema = z.object({
  schemaVersion: z.number(),
  lastUpdated: z.string(),
  primarySource: z.object({
    pack: z.string(),
    retrieved: z.string(),
    sources: z.array(z.string()),
    attributionRequired: z.boolean(),
    scrapingPolicy: z.string(),
  }),
  accountName: z.string(),
  accountLevel: z.number().nullable(),
  accountState: z.object({
    recorded: z.string(),
    source: z.string(),
    detail: z.string(),
    level: z.number(),
    contentCleared: z.string(),
    client: z.string(),
    origin: z.string(),
    playPattern: z.string(),
    spendingIntent: z.string(),
    clan: z.object({
      type: z.string(),
      level: z.number(),
      competitive: z.boolean(),
      chimeraAvailable: z.boolean(),
      note: z.string(),
    }),
    vaults: z.object({
      masterVault: z.number(),
      championVault: z.number(),
      reserveVault: z.number(),
      note: z.string(),
    }),
    ownerVerified: z.object({
      date: z.string(),
      tier6MasteriesRequireRank6: z.boolean(),
      dragon25Affinity: z.string(),
      iceGolem25Affinity: z.string(),
      factionGuardianChamberNeedsTwoCopies: z.boolean(),
      chimeraAvailable: z.boolean(),
    }),
  }),
  resources: z.object({
    tomes: z.object({
      rare: z.number(), epic: z.number(), legendary: z.number(), mythical: z.number(),
    }),
    tomesNeededToMaxAllOwned: z.object({
      rare: z.number(), epic: z.number(), legendary: z.number(), mythical: z.number(),
    }),
    tomeUpgradeIsRandom: z.boolean(),
    tomeUpgradeNote: z.string(),
    gems: z.number(),
    gemMinePurchased: z.boolean(),
    energy: z.number(),
    silver: z.number(),
    shards: z.object({
      mystery: z.number(), ancient: z.number(), void: z.number(),
      sacred: z.number(), primal: z.number(),
    }),
    potionsPerElement: z.string(),
    gear: z.string(),
    masteriesAlreadyPurchased: z.array(z.string()),
  }),
  rankUpFoodRule: z.object({
    note: z.string(),
    byStartRank: z.record(z.string(), z.string()),
    source: z.string(),
    retrieved: z.string(),
  }),
  champions: z.array(championSchema),
});

export type Champion = z.infer<typeof championSchema>;
export type Roster = z.infer<typeof rosterSchema>;
export type RatingSet = z.infer<typeof ratingSetSchema>;
