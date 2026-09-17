# 11 — Champion Build Priority

> **🔄 TIER 3 — ANALYSIS, NOT SOURCE DATA.**
> **Regenerate wholesale when the roster changes — never edit piecemeal.**
> Ratings and skill data come from `docs/research/claude-web/`; every recommendation below
> cites the rating or mechanic behind it.

**Regenerated:** 2026-09-17 from the research pack, against the account state in
`docs/plan/09-account-state.md`.

> **Account context that changes this document:** **masteries are already bought for Starsage
> Galathir, Artak and Ninja**, and the owner holds **4,760 gems** (5 more purchases at 800) plus
> **effectively unlimited energy, silver and food**. Three of the core five are therefore
> already part-finished, and **champions can be built in parallel** rather than one at a time.

---

## The rule that drives the order

**Rarity sets starting rank; starting rank sets food cost.**

| Start rank | Feeders to 6★ |
|---|---|
| **6 — Mythical** | **none** |
| 5 — Legendary | 5 rank-5 |
| 4 — Epic | 4 rank-4, then 5 rank-5 |
| 3 — Rare | 3 rank-3, 4 rank-4, then 5 rank-5 |

**Kael and Apothecary are the most expensive champions on this account to six-star. Galathir is
free.** Build the high-rarity champions first — on this roster that is the *cheap* path.

---

## Build order

| # | Champion | Target | Why now — with the rating or mechanic behind it |
|---|---|---|---|
| **1** | **Starsage Galathir** | **Level 60** | **Starts at rank 6 — zero food, only XP.** Ayumilove **SS**, HellHades **10 overall**. Base form: Chimera 10 · Spider 10 · Dragon 10 · Ice Golem 10 · Arena 10 · Hydra 9. Fits every team you will build for months |
| **2** | **Artak** | **6★, level 60** | **Campaign farmer** — HellHades ships a dedicated **"Solo Farm Build"** preset, all three skills are AoE, and damage scales off **HP** (cheap gear). Also Spider **10**, Dragon **10**, Ice Golem **10**, Hydra **10**. Cheapest real 6★ at 5 rank-5 feeders |
| **3** | **Ultimate Deathknight** | **50 fast, then 60** | **AoE 50% Decrease ATK at 80% chance** — the top-priority Demon Lord debuff — plus team Shield + Continuous Heal. Dragon **10**, Ice Golem **10**, Arena **10**. HellHades notes supports do their job at level 50 |
| **4** | **Ninja** | **Level 60** | **Demon Lord 10 · Chimera 10 · Hydra 10 · Ice Golem H 10.** Boss killer that builds its own ATK/C.DMG stacks |
| **5** | **Rathalos Blademaster** | **Level 60** | Completes the burn core — **+50% damage vs [HP Burn] targets**. Hydra **10**, Spider **10**. A2 **ignores 100% of a boss's DEF** |
| **6** | **Uugo** | **Level 50–60** | **Hydra MVP** — her A3 removes **all Heal Reduction**, the direct counter to Head of Decay. AoE **60% Decrease DEF + Block Buffs** on one skill. Hydra 9 · Spider 9 · Dragon 9 · Ice Golem 9 |
| **7** | **High Khatun · Apothecary · Alure** | **60/6★** | **The Fire Knight kit — build it inside 30 days.** Alure is **HellHades' Fire Knight 10** and the named MVP of stages 21–25. Apothecary and Alure both have **3-hit A1s**. High Khatun is also your **+19% SPD all-battles** lead. *(Owner answered "whatever you recommend" to the timing question; your resources allow parallel building that a fresh account could not — so this comes forward from month 2 to days 15–21.)* |
| **8** | **Gnishak Verminlord** | **Level 60** | Dragon **10** · Ice Golem **10** · Arena **10** · Fire Knight 9. **3-hit A1**; bombs convert into **protected poisons**; later a Dragon and Ice Golem soloist |
| **9+** | Fenax · Godseeker Aniri · Tagoar · Hurndig · Turvold · Skullcrown · Morag · Kael | As needed | Situational — see below |

### The situational nine, and what each is *for*

| Champion | Trigger to build |
|---|---|
| **Fenax** | **Ice Golem 10** (HellHades) and **5/5** (Ayumilove). His A1 kill-clause means enemies **cannot be revived** — the direct answer to Klyssus reviving his allies, and it needs **no Accuracy** |
| **Godseeker Aniri** | Demon Lord **9**. Revive **with full cooldown reset**. **Void** |
| **Tagoar** | Clan Boss speed tuning later — **AoE Increase SPD, cooldown 5 → 3 booked**. Note Ayumilove rates him **Spider 2/5, Arena Off 2/5** |
| **Hurndig** | **Nightmare 12-3 farming** (HellHades "Campaign Farmer" preset) and Arena — **+35% ATK Arena aura**, AoE **60% Dec DEF + 50% Dec ACC** |
| **Turvold** | **Demon Lord 10**, Arena 9 — but his A3 scales with **buffs on him**, so he needs a buff-support team first |
| **Skullcrown** | Arena speed lead (**+23% SPD Arena**) and wave clearing. **AoE A1** |
| **Morag Bronzelock** | Fire Knight — her **A3 pulls two allies into a joint attack**, stripping extra shield counters. **DEF is her damage stat** |
| **Kael** | A cheap extra **poisoner for Dragon** (Dragon **9** HellHades, **5/5** Ayumilove). **Most expensive champion on the account to 6★** |

> **Kael has moved from build #1 to optional.** Not because he is bad — Ayumilove rates him
> 5/5 in six categories — but because a Rare costs **three rank-ups** where Galathir costs
> **none**. See `docs/research/DATA_CONFLICTS.md §B1`.

---

## Masteries

### The capstone rule
**HellHades' Clan Boss guide: A1 hits once or twice → Warmaster. Three or four hits → Giant
Slayer.**

| Capstone | Champions |
|---|---|
| **Giant Slayer** | **Apothecary · Alure · Gnishak** — all 3-hit A1s |
| **Warmaster** | Everyone else, **including Kael — his 4-hit skill is the A3, not the A1** |

Turvold's A1 hits twice → **Warmaster**, confirmed by HellHades' own Turvold presets. *(This
resolves a question the previous plan left open.)*

### Preset to copy first
Full node lists in `claude-web/02_BUILDS_MASTERIES_TOMES.md`.

| Champion | Preset |
|---|---|
| Starsage Galathir | **Base Form** |
| Artak | **Solo Farm Build** (campaign) → **General PVE** (dungeons) |
| Ultimate Deathknight | **General PvE** → **Solo Drag & Ice Golem** later, with Toxic |
| Ninja | **Standard PvE** → **Boss Killer** |
| Rathalos Blademaster | **General PVE** |
| Uugo | **Standard PvE** |
| Alure | **Fire Knight + FW** (ends in Giant Slayer) |
| Apothecary | **All Round PvE** · Clan Boss preset for Giant Slayer |
| High Khatun | **Standard PvE** |
| Gnishak Verminlord | **Nuker** → **Solo Build** |

### 🚨 Two mastery traps
1. **Rapid Response · Arcane Celerity · Cycle of Magic break a speed-tuned Clan Boss team.**
   The pack adds that **Lasting Gifts can push a buff-heavy team over the 10-buff cap.**
   *This only matters once you run a tuned team — an untuned early speed team does not care.*
2. `unverified (search synthesis, 2026-09-17)`: **Tier 6 masteries require Rank 6.** If true,
   masteries on a champion below 6★ waste the capstone. **Verify before spending.**

### Gems — 4,760 held, Gem Mine already bought

**Masteries are already owned for Galathir, Artak and Ninja.** The remaining budget:

| Purchase | Cost | Running |
|---|---|---|
| **Ultimate Deathknight** | 800 | 800 |
| **Rathalos Blademaster** | 800 | 1,600 |
| **Uugo** | 800 | 2,400 |
| **Apothecary** | 800 | 3,200 |
| **Alure** | 800 | **4,000** |

**Leaves 760 gems.** Everyone after that gets masteries from **Minotaur**, where **Super Raids
are permanent** and you have ~7,900 dungeon runs of banked energy.

**⚠️ 6★ the champion before buying** — Tier 6 is Rank-6 gated. **Do not buy shards with gems.**

`unverified (search synthesis, 2026-09-17)`: a full mastery set is **1,650 scrolls**
(100 Basic / 600 Advanced / 950 Divine), and **maxed champions stop receiving scrolls, so a 5th
slot in a fully-mastered Minotaur team collects everything**. The pack confirms Minotaur is the
source and that **Super Raids are permanent there**.

**With ~94,667 banked energy, Minotaur farming is cheap for you** — the scroll grind that
bottlenecks most accounts is a time cost here, not a resource cost.

---

## 🚨 Never feed

Feeding is **irreversible**.

| Never feed | Why |
|---|---|
| **Any Epic or Legendary** | Never, early |
| **The day-30 High Khatun duplicate** | The pack is explicit: *"use it for Faction Guardians or as skill-up material rather than fodder"* |
| **Duplicate Rares** | `unverified`: Faction Guardians need **two copies of the same champion** per Chamber |
| **Off-faction Rares** | Faction Wars needs a full team from **one faction** |

**Your food supply is the 1,500 Mystery Shards** — roughly 1,113 Common and 366 Uncommon
champions. **Open them in batches of 50–100 and feed immediately**, or you will overflow the
champion vault. Budget ~1,000 for food and hold ~300–500 for a Champion Chase or Fusion event.

Keep the **Sparring Pit full from day 1** — a fully upgraded pit tops a champion up in roughly
the time it takes to feed a 1★ champion in the Tavern.

---

## What "built" means

- [ ] **Level 60** (or **50** for a support — HellHades says supports do their job at 50)
- [ ] **6★**, where the food cost is justified
- [ ] **Ascended** far enough to equip accessories
- [ ] **Masteries** from the preset above
- [ ] **Gear hitting the stat floors**: ~150–180 ACC for dungeon stages 10–16, **220+ for
      stage 20+**

**Finish one before starting the next.** Partial progress on six champions is worth less than
full completion on three.
