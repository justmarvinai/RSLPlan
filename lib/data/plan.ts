/**
 * TIER 3 — ANALYSIS. Generated from docs/plan/14-day-1-30-plan.md.
 * Regenerate wholesale when the roster or account state changes.
 */
export const TIER = 3 as const;
export const SOURCE_DOC = "docs/plan/14-day-1-30-plan.md";

export type TaskCategory = "setup" | "building" | "tomes" | "gems" | "farming" | "dungeon" | "clan" | "pvp";

export interface PlanTask {
  id: string;
  phase: string;
  days: string;
  title: string;
  detail: string;
  category: TaskCategory;
  /** Irreversible or easy-to-get-wrong actions the UI must surface. */
  warning?: string;
}

export const PHASES = [
  { id: "p1", name: "Turn the stockpile into progress", days: "Days 1-2" },
  { id: "p2", name: "Core five online", days: "Days 3-7" },
  { id: "p3", name: "Dungeons, Clan Boss, account level", days: "Days 8-14" },
  { id: "p4", name: "The Fire Knight kit and depth", days: "Days 15-21" },
  { id: "p5", name: "Push to the gear milestone", days: "Days 22-30" },
] as const;

export const PLAN_TASKS: PlanTask[] = [
  { id: "t01", phase: "p1", days: "1-2", category: "setup",
    title: "Open Mystery Shards in batches",
    detail: "Vaults hold 120 Master / 150 Champion / 600 Reserve. Check free slots, open that many, feed immediately, repeat. Batches of 100-150 are comfortable. Budget ~1,000 for food, hold ~300-500 for a Champion Chase or Fusion event.",
    warning: "1,500 shards will overflow your vaults if opened at once." },
  { id: "t02", phase: "p1", days: "1-2", category: "building",
    title: "Auto-Equip the core five",
    detail: "Your basic gear onto Galathir, Artak, UDK, Ninja and Rathalos. It is not good gear; it does not need to be yet." },
  { id: "t03", phase: "p1", days: "1-2", category: "building",
    title: "Level Starsage Galathir to 60",
    detail: "Already rank 6 — zero feeders — and his masteries are already bought. He is the closest champion on the account to finished." },
  { id: "t04", phase: "p1", days: "1-2", category: "building",
    title: "Start Artak to 6★ / level 60",
    detail: "Masteries already bought. Needs 5 rank-5 feeders. Gear in Speed / Perception / Lifesteal, prioritising HP% and SPD — his damage scales off HP." },
  { id: "t05", phase: "p1", days: "1-2", category: "farming",
    title: "Start clearing Normal campaign",
    detail: "You have played no content, so this is stage 1. Push Normal → Hard → Brutal as clear speed allows." },
  { id: "t06", phase: "p1", days: "1-2", category: "setup",
    title: "Fill the Sparring Pit and keep it full",
    detail: "A fully upgraded pit tops a champion up in roughly the time it takes to feed a 1★ champion in the Tavern." },
  { id: "t07", phase: "p1", days: "1-2", category: "pvp",
    title: "Start daily Classic Arena battles",
    detail: "Medals feed the Great Hall, which buffs every champion in every mode. Lead Skullcrown for the +23% SPD Arena aura." },

  { id: "t08", phase: "p2", days: "3-7", category: "farming",
    title: "Get Artak farming Brutal 12-3",
    detail: "Best XP and silver per energy, and shields there sell for the most. 8 energy per run." },
  { id: "t09", phase: "p2", days: "3-7", category: "building",
    title: "Ninja to 60/6★",
    detail: "Masteries already bought. HellHades Demon Lord 10, Chimera 10, Hydra 10." },
  { id: "t10", phase: "p2", days: "3-7", category: "building",
    title: "UDK to 60/6★, then buy masteries (800 gems)",
    detail: "AoE 50% Decrease ATK at 80% chance plus team shields. Dragon 10, Ice Golem 10, Arena 10.",
    warning: "6★ BEFORE buying masteries — Tier 6 requires Rank 6 (owner-confirmed)." },
  { id: "t11", phase: "p2", days: "3-7", category: "building",
    title: "Rathalos to 60/6★, then buy masteries (800 gems)",
    detail: "Completes the burn core. A2 ignores 100% of boss DEF; A1 Decrease DEF cannot be resisted against bosses.",
    warning: "6★ before buying masteries." },
  { id: "t12", phase: "p2", days: "3-7", category: "tomes",
    title: "Spend all 12 Legendary Tomes on Artak",
    detail: "He costs exactly 12 to fully max, so nothing is lost to randomness. Takes HP Burn to 100% and Decrease ATK to 100%, both cooldowns 4 → 3.",
    warning: "IRREVERSIBLE. Tome upgrades are random — only ever spend a full max." },
  { id: "t13", phase: "p2", days: "3-7", category: "tomes",
    title: "Spend Rare Tomes: Apothecary (10), then Kael (14)",
    detail: "Both full maxes. 24 of your 26 Rare tomes. They fit nothing else you own.",
    warning: "IRREVERSIBLE." },

  { id: "t14", phase: "p3", days: "8-14", category: "dungeon",
    title: "Start Dragon, Ice Golem and Spider",
    detail: "Push to stage 10-15 with the core five. You have the banked energy to brute-force this." },
  { id: "t15", phase: "p3", days: "8-14", category: "clan",
    title: "Clan Boss daily, Normal → Hard → Brutal",
    detail: "Lead UDK for the +30% DEF aura. Killing the boss doubles everyone's chest, so clear a lower difficulty rather than scratch a higher one." },
  { id: "t16", phase: "p3", days: "8-14", category: "farming",
    title: "Push account level 26 → 30 → 33",
    detail: "30 unlocks Faction Wars (your main Glyph source). 33 unlocks Chimera — weekly chest only, skip Trials." },
  { id: "t17", phase: "p3", days: "8-14", category: "tomes",
    title: "Epic tomes: Uugo (16) → Tagoar (10) → High Khatun (11)",
    detail: "Full maxes only. Uugo's A2 goes to 100% Decrease DEF chance with cooldown 4 → 3.",
    warning: "IRREVERSIBLE. Full max or bank." },
  { id: "t18", phase: "p3", days: "8-14", category: "gems",
    title: "Buy Uugo's masteries (800 gems)",
    detail: "Third of five planned purchases. Running total 2,400 of 4,760.",
    warning: "6★ BEFORE buying — Tier 6 masteries require Rank 6 (owner-confirmed)." },
  { id: "t19", phase: "p3", days: "8-14", category: "building",
    title: "Ascend the core five for accessory slots",
    detail: "You hold 200-300 potions per element, which is plenty." },

  { id: "t20", phase: "p4", days: "15-21", category: "building",
    title: "Build Apothecary, High Khatun and Alure to 60/6★",
    detail: "The Fire Knight kit. Apothecary is a Rare and therefore the most expensive on the account to 6★ — three rank-ups. You can afford it." },
  { id: "t21", phase: "p4", days: "15-21", category: "gems",
    title: "Buy masteries for Apothecary and Alure (800 gems each)",
    detail: "Both take Giant Slayer — their A1s hit 3 times. Running total 4,000 of 4,760, leaving 760.",
    warning: "6★ first." },
  { id: "t22", phase: "p4", days: "15-21", category: "building",
    title: "Build Alure to 100% C.RATE",
    detail: "Her A1 only strips turn meter on a CRITICAL hit. Below 100% crit she does nothing reliably." },
  { id: "t23", phase: "p4", days: "15-21", category: "dungeon",
    title: "Start Fire Knight",
    detail: "The shield is only 5 hits at stages 1-6 and 7 at 7-9. Alure (3) + Apothecary (3) already covers that." },
  { id: "t24", phase: "p4", days: "15-21", category: "tomes",
    title: "Epic tomes: Godseeker Aniri (17) → Alure (12)",
    detail: "Full maxes. Aniri's A3 and passive both drop from cooldown 7 to 4.",
    warning: "IRREVERSIBLE." },
  { id: "t25", phase: "p4", days: "15-21", category: "farming",
    title: "Account level toward 40",
    detail: "Unlocks Doom Tower." },

  { id: "t26", phase: "p5", days: "22-30", category: "building",
    title: "Gnishak Verminlord to 60/6★",
    detail: "Dragon 10, Ice Golem 10, Arena 10, and a 3-hit A1 for Fire Knight." },
  { id: "t27", phase: "p5", days: "22-30", category: "building",
    title: "Fenax to 60/6★",
    detail: "Ice Golem 10. His A1 kill-clause stops Klyssus's allies being revived, and it needs no Accuracy." },
  { id: "t28", phase: "p5", days: "22-30", category: "tomes",
    title: "Epic tomes: Fenax (13) → Morag (9) → Skullcrown (12)",
    detail: "Completes all eight Epics at 100 tomes, leaving 10 spare.",
    warning: "IRREVERSIBLE." },
  { id: "t29", phase: "p5", days: "22-30", category: "dungeon",
    title: "Dragon and Ice Golem to stage 20",
    detail: "The main gear milestone.",
    warning: "Do NOT rush into 21-25 — Enemy Max HP damage is capped and turn-meter reduction halved." },
  { id: "t30", phase: "p5", days: "22-30", category: "clan",
    title: "Clan Boss to Brutal",
    detail: "Nightmare if survival allows." },
  { id: "t31", phase: "p5", days: "22-30", category: "clan",
    title: "Run Chimera weekly once past level 33",
    detail: "Chest only, no Trials. Bank the Ocular Masses toward Relics — Chimera is their only source." },
  { id: "t32", phase: "p5", days: "22-30", category: "farming",
    title: "Faction Wars in your doubled factions",
    detail: "Orcs (Artak, Tagoar), Dwarves (Hurndig, Morag), Barbarians (Turvold, High Khatun), Sacred Order (Aniri, Fenax)." },
  { id: "t33", phase: "p5", days: "22-30", category: "farming",
    title: "Account level toward 45",
    detail: "Unlocks Hydra, where six of your champions rate HellHades 9-10." },
];

export const DAY_30_TARGETS = [
  { metric: "Account level", target: "40+ (Doom Tower)", stretch: "45 (Hydra)" },
  { metric: "Champions at 60/6★", target: "8-10", stretch: "12" },
  { metric: "Campaign", target: "Brutal 12-3 on farm", stretch: "Nightmare started" },
  { metric: "Dragon / Ice Golem", target: "Stage 20", stretch: "20 on auto" },
  { metric: "Spider", target: "Stage 15-20", stretch: "20" },
  { metric: "Fire Knight", target: "Stage 10-15", stretch: "20" },
  { metric: "Clan Boss", target: "Brutal", stretch: "Nightmare" },
  { metric: "Tomes spent", target: "12 Leg · 100 Epic · 24 Rare", stretch: "—" },
  { metric: "Masteries", target: "8 champions (3 owned + 5 bought)", stretch: "+ Minotaur farming" },
];
