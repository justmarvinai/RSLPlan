# 21 — Data Model

**Status:** Proposed. Types are the contract between the research and the UI.

The guiding rule from `CLAUDE.md`: **the model must be able to express uncertainty.** If a
type forces every champion to have a rating, the code will eventually invent one. Every
evaluative field below is therefore optional or explicitly nullable.

---

## Core enums

```ts
export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythical';
export type Affinity = 'Magic' | 'Force' | 'Spirit' | 'Void';
export type ChampionType = 'Attack' | 'Defense' | 'HP' | 'Support';

export type Confidence = 'CONFIRMED' | 'LIKELY' | 'UNCERTAIN' | 'NOT_CONFIRMED';

export type ContentType =
  | 'campaign-farm' | 'dragon' | 'fire-knight' | 'ice-golem' | 'spider'
  | 'minotaur' | 'arena-classic' | 'clan-boss' | 'chimera' | 'hydra'
  | 'doom-tower' | 'faction-wars';

/** The mechanical capabilities that team-building actually keys off. */
export type Capability =
  | 'decrease-defence' | 'decrease-attack' | 'weaken' | 'poison' | 'hp-burn'
  | 'heal-reduction' | 'provoke' | 'freeze' | 'stun' | 'sleep' | 'fear'
  | 'increase-attack' | 'increase-defence' | 'increase-speed' | 'increase-crit-rate'
  | 'shield' | 'block-damage' | 'unkillable' | 'revive' | 'heal' | 'cleanse'
  | 'block-debuffs' | 'block-revive' | 'counterattack' | 'reflect-damage'
  | 'turn-meter-fill' | 'turn-meter-reduction' | 'multi-hit-a1' | 'aoe-damage'
  | 'single-target-nuke' | 'lifesteal-sustain' | 'extra-turn';
```

`Capability` is the important one. **Teams are built against capabilities, not champion
names.** That is what makes the model survive roster changes: a new champion is described by
what it can do, and the readiness engine re-solves the teams automatically.

---

## Champion

```ts
export interface Value<T> {
  value: T;
  confidence: Confidence;
  source?: string;
  note?: string;
}

export interface Skill {
  slot: 'A1' | 'A2' | 'A3' | 'A4' | 'Passive' | 'Aura';
  name: Value<string>;
  description: Value<string>;
  cooldown?: Value<number>;
  placesDebuffs?: Capability[];
  placesBuffs?: Capability[];
  /** Books needed to max this skill, if known. */
  booksToMax?: Value<number>;
  /** Does booking this skill actually matter? Drives the tome planner. */
  bookPriority?: 'critical' | 'useful' | 'skippable' | 'unknown';
}

/** Every rating block carries its provenance. A value with no provenance is unusable. */
export interface RatingSet<T> {
  source: 'hellhades.com' | 'ayumilove.net';
  scale: '0-10' | '1-5 stars';
  retrieved: string;                       // ISO date
  overall?: T;
  /** Standard case: one rating per content type. */
  byContent?: Partial<Record<ContentType, T>>;
  /** Mythical dual-form champions (Starsage Galathir) rate PER FORM. */
  byForm?: Record<'base' | 'alternate', Partial<Record<ContentType, T>>>;
}

export interface Champion {
  id: string;                    // 'starsage-galathir'
  /** Rarity determines starting rank, which determines food cost to 6-star.
   *  Mythical starts at 6 (zero feeders); Rare starts at 3 (three rank-ups).
   *  This is the single most important field for build ordering. */
  startRank: 3 | 4 | 5 | 6;
  feedersTo6Star: string;
  /** Mythicals cannot use Legendary tomes. The tome planner must respect this. */
  tomes: {
    tomeRarity: Rarity;
    toMaxAllSkills: number;
    ayumiloveHeaderSays?: number;   // present only when it conflicts with the skill list
    conflictNote?: string;
    hellhadesBookValue: number;     // 0-10
    hellhadesBookPriority: string[];
    source: string;
    retrieved: string;
  };
  name: string;
  rarity: Rarity;
  faction: Value<string>;
  affinity: Value<Affinity>;
  type: Value<ChampionType>;

  skills?: Skill[];
  capabilities: Capability[];    // derived from skills; the team solver reads this

  /**
   * Ratings, stored PER SOURCE. Never merged, never averaged.
   * HellHades is 0-10; Ayumilove is 1-5 stars. A UI that needs one sort order
   * computes it at render time and labels it derived.
   */
  ratings: {
    hellhades?: RatingSet<number>;   // 0-10
    ayumilove?: RatingSet<number>;   // 1-5
  };

  /** Verdict for THIS account specifically — not a generic tier list. */
  accountVerdict?: {
    priority: 'build-now' | 'build-soon' | 'build-later' | 'situational' | 'skip' | 'never-feed';
    reasoning: string;
    relevantUntil: 'early-game' | 'mid-game' | 'endgame' | 'permanent';
  };

  recommendedBuilds?: Build[];
  researchStatus: 'complete' | 'partial' | 'not-researched';
  lastResearched?: string;       // ISO date
}
```

### Design notes worth defending

- **`Value<T>` wraps every researched fact with its confidence.** This is slightly verbose and
  entirely worth it: the UI can render a confidence badge, and nothing can silently present a
  guess as a fact.
- **`contentRatings` is `Partial`.** Absent means *not evaluated*. The UI renders "not yet
  researched." It must never render a default grade.
- **`reasoning` is required alongside every grade.** A grade you cannot justify is a grade you
  should not ship.
- **`accountVerdict` is separate from `contentRatings`** — generic quality and
  *value-to-you-right-now* are different questions, and conflating them is the single most
  common way tier lists mislead new players.
- **`'never-feed'`** is a distinct priority because feeding is irreversible, and some champions
  worth skipping are still worth keeping (Faction Wars needs same-faction bodies).

---

## Player build state

What *you* have actually done. Separate from what the champion *is*.

```ts
export interface ChampionBuildState {
  championId: string;
  owned: boolean;
  level: number;                 // 1-60
  stars: 1|2|3|4|5|6;
  ascension: 0|1|2|3|4|5|6;
  masteries: 'none' | 'partial' | 'complete';
  booksApplied: number;
  gearQuality: 'none' | 'starter' | 'decent' | 'good' | 'endgame';
  currentStats?: Partial<Record<'HP'|'ATK'|'DEF'|'SPD'|'CR'|'CD'|'RES'|'ACC', number>>;
  notes?: string;
}
```

Splitting `Champion` (immutable game data) from `ChampionBuildState` (your mutable progress)
is what lets the readiness engine work, and lets your progress live in localStorage while the
plan lives in git.

---

## Teams

```ts
export interface TeamSlot {
  role: string;                       // 'Decrease DEF + Weaken'
  requiredCapabilities: Capability[]; // hard requirements
  preferredCapabilities?: Capability[];
  assignedChampionId?: string;
  alternatives?: string[];
  reasoning: string;
  /** Stat floors for this slot in this content, e.g. { ACC: 300 }. */
  statTargets?: Partial<Record<'ACC'|'SPD'|'RES'|'CR'|'CD', number>>;
}

export interface Team {
  id: string;
  content: ContentType;
  name: string;
  slots: TeamSlot[];                  // 4 arena · 5 CB/chimera · 6 hydra
  viability: 'ready-now' | 'needs-building' | 'needs-gear' | 'roster-gap' | 'not-achievable-yet';
  blockedBy?: string[];               // human-readable blockers
  targetPhase: string;                // 'Phase 3 — Days 15-30'
  notes: string;
}
```

**`viability: 'roster-gap'` is deliberately distinct from `'needs-building'`.** One means
*work harder*; the other means *you do not own the answer and no amount of effort fixes it —
chase this in summons*. Telling you which is which honestly is more useful than pretending
every team is reachable.

---

## Readiness engine

```ts
export function computeSlotReadiness(
  slot: TeamSlot,
  roster: Champion[],
  buildState: Record<string, ChampionBuildState>,
): {
  status: 'ready' | 'champion-not-built' | 'stats-short' | 'no-candidate';
  candidate?: Champion;
  shortfall?: string[];   // ['ACC 180 → need 300']
};
```

This is the heart of the site. It turns "here is a plan" into **"here is exactly what is
blocking you right now."** Everything else is presentation.

---

## Plan & progress

```ts
export interface PlanTask {
  id: string;
  day: number | [number, number];
  phase: string;
  title: string;
  detail: string;
  category: 'farming' | 'building' | 'gearing' | 'dungeon' | 'pvp' | 'clan' | 'admin';
  priority: 'critical' | 'high' | 'medium' | 'optional';
  dependsOn?: string[];
  /** Irreversible actions get a warning the UI must surface. */
  warning?: string;
}

/** Lives in localStorage — yours, not the repo's. */
export interface ProgressState {
  completedTaskIds: string[];
  buildState: Record<string, ChampionBuildState>;
  resources: {
    tomes: { rare: number; epic: number; legendary: number };
    gems?: number;
    shards?: Partial<Record<'ancient'|'void'|'sacred'|'primal', number>>;
    masteryScrolls?: { basic: number; advanced: number; divine: number };
  };
  accountLevel?: number;
  lastUpdated: string;
}
```

---

## `data/roster.json`

The single source of truth for champions owned. Zod-validated at build time so a malformed
entry fails the build rather than shipping wrong advice.

```jsonc
{
  "$schema": "./roster.schema.json",
  "lastUpdated": "2026-09-17",
  "accountName": "Fresh Starter Account",
  "champions": [
    {
      "id": "starsage-galathir",
      "name": "Starsage Galathir",
      "rarity": "Mythical",
      "owned": true,
      "acquiredDate": "2026-09-17"
    }
  ],
  "resources": {
    "tomes": { "rare": 26, "epic": 110, "legendary": 12 }
  }
}
```

Deliberately minimal: **ownership and resources only.** Champion *knowledge* lives in the
research layer keyed by `id`. That way reporting a new champion is a two-line edit, and the
research attaches to it separately.
