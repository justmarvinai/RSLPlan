# 04 — Gear, Masteries & Account Economy

**Compiled:** 2026-09-17 · Confidence tags per `docs/research/00-methodology-and-sources.md`

This document covers the systems that actually determine how fast a fresh account moves.
Champions get the attention; **these systems decide the outcome.**

---

# PART A — GEAR

## A1. Fundamentals

- **60+ artifact sets**, 5 accessory sets `[LIKELY]` — the count keeps growing
- Sets come in **2-piece, 4-piece, 1-piece (accessory)**, and **9-piece "Variable" sets** that
  scale as you equip 1→9 pieces (6 artifacts + 3 accessories) `[CONFIRMED]`
- **Set bonuses stack additively** — three 2-sets of the same type gives 3× the effect
  `[CONFIRMED]`
- **6 artifact slots:** Weapon, Helmet, Shield, Gauntlets, Chestplate, Boots `[CONFIRMED]`
- **3 accessory slots:** Ring, Amulet, Banner `[CONFIRMED]`. Accessories are **faction-locked**
  and **gated behind Ascension level** `[CONFIRMED]`

## A2. The eight Basic sets

**Life, Offense, Defense, Speed, Critical Rate, Critical Damage, Accuracy, Resistance**
`[CONFIRMED — enumerated by the Lore of Steel mastery description]`

This matters because **Lore of Steel boosts only these eight**, multiplicatively (see B3).

| Set | Reported bonus | Confidence |
|---|---|---|
| Speed (2) | +12% SPD | `[LIKELY]` |
| Life (2) | +15% HP | `[LIKELY]` |
| Offense (2) | +15% ATK | `[LIKELY]` |
| Defense (2) | +15% DEF | `[UNCERTAIN]` — one source said +10% |
| Critical Rate (2) | +12% C.RATE | `[LIKELY]` |
| Critical Damage | +20% to +30% C.DMG | `[UNCERTAIN]` — sources disagree; piece count unconfirmed |
| Accuracy | +40 ACC | `[UNCERTAIN]` |
| Resistance | +40 RES | `[UNCERTAIN]` |

> **Note:** **Perception is NOT a Basic set**, so Lore of Steel does not boost it. That is a
> real gearing decision point, and it is easy to get wrong. `[CONFIRMED by exclusion]`

## A3. Advanced sets that matter to your roster

**Offensive**
- **Cruel (2)** — ATK +15%, ignores 5% of target DEF `[LIKELY]`
- **Savage (4)** — Ignores **25% of target DEF** on each attack `[LIKELY]`
- **Lifesteal (4)** — heals the wearer for a % of damage dealt. **Exact % `[NOT CONFIRMED]`**
- **Destroy (4)** — destroys target MAX HP by 40% of damage dealt, capped at 8% per attack
  `[LIKELY]`
- **Fury (4)** — +10% damage at 76–100% HP, +25% at 51–75%, +50% below 51% `[UNCERTAIN]`

**Survivability**
- **Immortal** — HP +15%, heals 3% MAX HP per turn `[LIKELY]`. Piece count disputed
  `[NOT CONFIRMED]`
- **Regeneration (4)** — per-turn heal. Exact % `[NOT CONFIRMED]`
- **Immunity (4)** — **[Block Debuffs] for 2 turns at the start of every Round** `[LIKELY]`
- **Resilience (2)** — HP +10%, DEF +10% `[LIKELY]`
- **Stalwart (4)** — reduces incoming **AoE** damage by 30% `[LIKELY]`
- **Divine Life / Divine Speed (2)** — base bonus **plus a 15% MAX HP self-Shield for 3 turns
  at battle start** `[LIKELY]`
- **Curing (4)** — increases healing by 20% `[LIKELY]`

**Reactive**
- **Retaliation (4)** — chance to counterattack when hit; stacks to **45% with 3 sets**
  `[LIKELY]`
- **Avenging (4)** — counterattack when an enemy debuffs the wearer `[UNCERTAIN]`
- **Frenzy (4)** — +5% Turn Meter per debuff placed on the wearer `[LIKELY]`

**Control — these do NOT require Accuracy, which is why they matter early**
- **Stun (4)** — chance to Stun on attack. **Ignores ACC** `[CONFIRMED]`; % `[NOT CONFIRMED]`
- **Cursed (4)** — 50% chance of [Hex] for 2 turns. **Ignores ACC** `[LIKELY]`
- **Toxic (4)** — 75% chance of a 2.5% [Poison] for 2 turns when attacking `[UNCERTAIN]`
- **Daze (4)** — 25% chance of [Sleep] for 1 turn `[LIKELY]`

> **Toxic is the key to Ultimate Deathknight's solo dungeon builds** `[CONFIRMED]` — Toxic's
> poison damage does not trigger the boss HP-threshold retaliation that direct damage does.

**Utility**
- **Relentless (4)** — **18% chance of an Extra Turn** immediately after the wearer's turn
  `[LIKELY]`. Reported as Artak's Hydra BiS alongside Perception
- **Reflex (4)** — chance to reduce a skill's cooldown by 1 `[UNCERTAIN]` — 30% vs 40% conflict
- **Perception** — ACC +40, SPD +5 `[LIKELY]`. **Advanced set, not Basic**

**Forge Pass exclusives:** Righteous, Bolster, Instinct `[LIKELY]`
**Live Arena exclusives:** Impulse, Zeal `[LIKELY]`

> **Note on the original brief:** there is no standalone "Hex" artifact set — **Hex is the
> debuff applied by the Cursed set** `[LIKELY]`.

## A4. 9-piece Variable sets — context only, far out of reach

Require all 6 artifacts + all 3 accessories of one set. **Mentioned so you recognise them in
guides, not as a target.**

- **Merciless (9)** — +25% ATK, +30% C.DMG, +10% SPD, 30% cooldown-reduction chance, +35%
  ignore DEF, 15% Extra Turn chance `[LIKELY]`
- **Stoneskin (9)** — culminates in a **[Stone Skin] buff each Round that removes all debuffs,
  blocks new ones, and reduces incoming damage by 85%** `[LIKELY]`. From Hydra Chests
- **Mercurial (9)**, **Supersonic (9)**, **Swift Parry (9)**, **Pinpoint**, **Protection**
  `[LIKELY / UNCERTAIN]`

## A5. Which dungeon drops what

| Source | Sets | Confidence |
|---|---|---|
| **Dragon's Lair** | Speed, Accuracy, Lifesteal, Destroy, plus general Offense/Defense/support | `[LIKELY — incomplete]` |
| **Ice Golem's Peak** | Life, Offense, Defense, Critical Rate, Resistance, Retaliation, Reflex, Cursed, Taunting | `[LIKELY]` |
| **Fire Knight's Castle** | Fury, Curing, Immunity, Shield, Critical Damage, Frenzy, Regeneration, Stun, Savage | `[LIKELY]` |
| **Spider's Den** | **Accessories ONLY** — Rings, Amulets, Banners, all factions | `[CONFIRMED]` |
| **Clan Boss** | Immortal, Cruel (top chests) | `[LIKELY]` |
| **Forge** | Divine sets; Righteous/Bolster/Instinct via Forge Pass | `[LIKELY]` |
| **Live Arena** | Impulse, Zeal | `[LIKELY]` |
| **Hydra Chests** | Stoneskin, Protection (incl. Mythical) | `[LIKELY]` |
| **Doom Tower** | Stoneskin, Frostbite, Cursed, Pinpoint, Slayer, others | `[UNCERTAIN]` — sources conflict on whether Cursed is Ice Golem or Doom Tower |
| **Proving Grounds** (11.70) | Anomalous Accessories | `[CONFIRMED]` |

**The practical read for you:** **Dragon's Lair drops Speed and Lifesteal** — the two sets your
campaign farmer and supports need most. That, plus it being the most mechanically forgiving
dungeon, is why Dragon is the correct first target.

## A6. Substats and upgrading — where your silver goes

- **Substat count is fixed at drop by rarity** `[CONFIRMED]`: Common 0 · Uncommon 1 · Rare 2 ·
  Epic 3 · Legendary 4
- **Substats roll at levels 4, 8, 12 and 16** — each roll either upgrades an existing substat
  or adds a new one (max 4) `[CONFIRMED]`
- **The main stat improves at every single upgrade level** `[CONFIRMED]`
- **Upgrade success rates degrade with level** `[CONFIRMED qualitatively; exact % NOT
  CONFIRMED]`: 1→4 effectively guaranteed, 9→12 fails often, 13→16 fails more often than it
  succeeds. **This is the single biggest silver sink in the game.**

### The rule that saves you the most silver
**Do not upgrade anything past level 8 unless it is a 5-star item with good substats.**
`[CONFIRMED as consensus]` A 3-star item looks useful on day 3 and quietly drains the silver
you will desperately need at level 60.

## A7. Glyphs
- Enchant an artifact to upgrade **one specific substat** `[CONFIRMED]`
- Target HP, HP%, ATK, ATK%, DEF, DEF%, SPD, RES, ACC `[CONFIRMED]`
- **Primary source: beating Faction Crypt stages in Faction Wars** `[CONFIRMED]`

## A8. Forge Pass & Artifact Enhancement events

**Forge Pass** `[CONFIRMED]`: three tracks — **Core** (free, via Daily Challenges), **Gold**
(paid; adds Weekly Challenges plus a season-long **Raid Boost granting extra Silver and XP from
all battles**), **Platinum**. Yields Artifact and Relic crafting materials, and is the exclusive
source of Righteous / Bolster / Instinct.

**Artifact Enhancement events** — recurring; you score points for upgrading gear, converting to
brews, chickens, shards, **Legendary tomes**, or fusion fragments `[CONFIRMED]`.

### Three tactics worth adopting immediately `[CONFIRMED as consensus]`
1. **Never roll gear to 16 on a random day.** Bank your upgrades and dump them when an Artifact
   Enhancement event is live — ideally overlapping a Clan vs Clan tournament so you score twice
2. Use **cheap Forge-crafted gear** for the upgrade points (craftable with free materials from
   Doom Tower and Faction Wars)
3. Save **Artifact Charms** from the Forge Pass and spend them during the event to cut failed
   rolls

## A9. What gear you will realistically have, and when `[LIKELY]`

| Period | Reality |
|---|---|
| **Days 1–14** | Campaign drops only — Common/Uncommon/Rare, 3–4★. **You will be gear-starved.** This is normal |
| **Weeks 3–4** | First real dungeon gear. Target **Dragon or Ice Golem Stage 10+** |
| **Months 2–4** | Stage 20 dungeons — the real "gear graduation" |
| **Not in scope at all** | Mythical gear, 9-piece sets, Anomalous Accessories, Proving Grounds |

**Say this to yourself when you feel behind:** your day-30 gear is *supposed* to be bad. Every
showcase build you see online represents 1–3 years of farming plus Mythical-tier gear that
literally cannot drop below Hard Stage 26.

---

# PART B — MASTERIES

## B1. Structure and the constraint that catches people

- **3 trees: Offense, Defense, Support** `[CONFIRMED]`
- **You activate only 2 of the 3, and take up to 15 masteries total**, in descending tier order
  `[CONFIRMED]`
- **6 tiers per tree**, ~22 masteries per tree `[CONFIRMED / LIKELY]`
- **🚨 HARD GATE: a champion cannot unlock a mastery from a tier above their Rank. Tier 6
  (Warmaster / Giant Slayer) therefore requires a 6★ champion.** `[CONFIRMED]`

**That last point is a genuine trap.** Giving masteries to a champion below Rank 6 locks you out
of the only masteries that really matter. **6★ first, masteries second.**

**Two acquisition routes** `[CONFIRMED]`:
1. Farm Mastery Scrolls in **Minotaur's Labyrinth**
2. **Spend 800 Gems** to instantly unlock the full tree for one champion

## B2. Warmaster vs Giant Slayer — the exact rules

Both are **Tier 6 Offense**. You can only have one. `[CONFIRMED]`

| | Warmaster | Giant Slayer |
|---|---|---|
| Proc chance | **60%** | **30%** |
| Bonus damage vs normal enemy | **10% of target MAX HP** | **5% of target MAX HP** |
| Bonus damage vs **Boss** | **4%** | **2%** |
| Procs per skill | **Once per skill, maximum** | **Can proc on EACH HIT** |
| Counts as an extra hit? | No | No |

`[LIKELY — consistently reported, not verified against Plarium's own text]`

### The decision rule — and a correction
**Hit count is the decision axis. Boss vs non-boss is NOT.** `[LIKELY]`

Boss content halves *both* equally (10%→4%, 5%→2%), so it does not flip the choice. What flips
it is how many times a skill hits:

- **Single-hit skills → Warmaster.** One hit means Giant Slayer gets exactly one 30% roll
  against Warmaster's 60% roll at double damage. Warmaster wins decisively
- **Multi-hit skills → Giant Slayer.** A **3-hit** skill gives ~66% chance of at least one proc
  (beating Warmaster's 60%); a **4-hit** skill ~76% `[LIKELY]`
- **Practical threshold: ~3+ hits per skill**

**Clan Boss caveat:** Clan Bosses cap damage taken per hit. At the cap, **Warmaster and Giant
Slayer deal identical damage** because both proc values exceed it. `[LIKELY in principle; the
commonly-quoted ~75,000 cap figure is UNCERTAIN and likely varies by difficulty]`

**Default for a fresh account: Warmaster**, unless the champion has a 3+ hit A1.
**On your roster that means Giant Slayer for Apothecary and Gnishak** (see
`docs/research/02-champion-dossiers.md`).

## B3. Key masteries

**Offense**
- **Deadly Precision** (T1) +5% C.RATE · **Keen Strike** (T2) +10% C.DMG · **Blade Disciple**
  (T1) +75 ATK `[LIKELY]`
- **Helmsmasher** — **50% chance to ignore 25% of target DEF**, stacks additively with skills
  that already ignore DEF `[LIKELY]`. Excellent and widely taken
- **Whirlwind of Death** — SPD bonus per enemy killed that **carries across rounds** `[LIKELY]`.
  Very strong for Campaign farming and Faction Wars
- **Rapid Response** — 30% chance of +10% Turn Meter when a **buff** he cast expires `[LIKELY]`
- **Arcane Celerity** — same but for **debuffs** `[LIKELY]`
- **Bloodthirst** — heals 10% MAX HP on kill `[LIKELY]`

**Defense**
- **Delay Death** — reduces damage from a specific enemy by **0.75% per hit taken, stacking to
  6%**, tracked per enemy `[LIKELY]`. **Cornerstone of Clan Boss survivability**
- **Blastproof** — −5% damage from **AoE** attacks `[LIKELY]`
- **Retribution** — 50% counterattack chance when losing ≥25% MAX HP from one skill `[LIKELY]`
- **Deterrence** — 20% counterattack when an enemy applies Stun/Sleep/Fear/Freeze to an **ally**
  `[LIKELY]`
- **Stubbornness** — +10 RES per debuff on this champion, stacking to 30 `[LIKELY]`

**Support**
- **Lore of Steel** — **increases Basic Artifact Set bonuses by 15%, MULTIPLICATIVELY**
  `[CONFIRMED, including the multiplicative detail]`. Only the eight Basic sets
- **Evil Eye** — decreases target Turn Meter on the first A1 hit: **−20% single-target, −5%
  AoE** `[LIKELY]`
- **Cycle of Magic** — 5% chance to reduce a random cooldown by 1 at the start of every turn
  `[LIKELY]`
- **Charged Focus** — +20 ACC while no skills are on cooldown `[LIKELY]`
- **Swarm Smiter** — +4 ACC per living enemy, stacking to 16 `[LIKELY]`
- **Wisdom of Battle** — 30% chance of self [Block Debuffs] when a Sleep/Stun/Freeze expires
  `[LIKELY]`

**Pathing note:** to reach **Charged Focus** you must take **Pinpoint Accuracy** first, not
Steadfast `[LIKELY]`. Mastery pathing is a real constraint — **use a mastery simulator
(InTeleria or RaidOptimizer host one) rather than guessing.**

## B4. 🚨 Masteries that break Clan Boss speed tunes

**Rapid Response · Arcane Celerity · Cycle of Magic** `[CONFIRMED]`

All three grant Turn Meter or reduce cooldowns unpredictably, which desynchronises a tuned
rotation. **Do not take them on a champion in a speed-tuned Clan Boss team.**

This is expensive to undo — it costs a full re-farm. **Decide "is this a tuned CB champion?"
BEFORE assigning masteries.**

## B5. Farming scrolls

- **Mastery Scrolls drop ONLY in Minotaur's Labyrinth.** No other source `[CONFIRMED]`
- **Full cost per champion: 1,650 scrolls — 100 Basic, 600 Advanced, 950 Divine** `[LIKELY]`
- Stages 1–5 Basic · 6–10 Advanced + Basic · **11–15 all types including Divine** `[CONFIRMED]`
- **Time: ~2–4 hours per champion** if efficient, **5+ hours** without a solid auto team
  `[LIKELY]`. *(An alternate estimate of 201–380 runs / 14,070–26,390 energy / 60+ hours was
  also reported `[CONFIRMED]` — the discrepancy is large and unresolved; assume it is slow.)*
- **Farm the highest stage you can clear — Stage 15** `[CONFIRMED]`
- Only start once you can auto **Stage 13+** `[CONFIRMED]`

### 🔑 The single most important masteries mechanic
**Build a 4-champion Minotaur team that is already fully mastered, then put the champion you
are farming for in the 5th slot. That 5th champion receives every scroll that drops.**
`[CONFIRMED]`

Maxed champions stop receiving scrolls — so once your core four are done, everything funnels
into slot five. **This roughly quadruples your effective farm rate.**

## B6. Who gets masteries first `[CONFIRMED as consensus]`

1. **Your campaign farmer, at level 60 / 6★, is the absolute first priority.** Multiple 2026
   guides independently recommend **spending your first 800 Gems buying masteries for it** —
   described as *"one of the highest-value gem expenditures in the game"*
2. Rationale: your first carry appears in *everything*. **Full masteries on one carry beats
   partial masteries spread across five**
3. Only after that champion can reliably clear high Minotaur stages should you farm for anyone
   else

---

# PART C — ACCOUNT ECONOMY

## C1. Energy

- **Cap: 130** `[LIKELY]` · **Regen: 1 per 3 minutes**, only while below cap `[LIKELY]`
  → **~480/day** from natural regen if you never overcap
- **Energy Refill costs 40 Gems** and grants your **current cap** `[LIKELY]`
- **Daily reset: 00:00 UTC** `[CONFIRMED]`
- **Daily Quests and Timeplay each grant a refill — ~2 free refills/day** `[LIKELY]`

**Realistic F2P throughput: ~740 energy/day** (480 regen + ~260 from 2 refills) — *if* you log
in often enough not to overcap. `[LIKELY, derived]`

> **Overcapping is the #1 silent energy loss for new players.** Short frequent logins beat one
> long session. This single habit is worth more than most gear upgrades.

## C2. Silver

- **Campaign 12-3 Brutal is the consensus best early silver+XP farm** `[CONFIRMED]`
  - **8 energy per run** `[LIKELY]`
  - **Why 12-3 and not 12-6:** 12-6 gives marginally more XP, but **12-3 drops Shields, which
    sell for significantly more silver than the Boots from 12-6** `[CONFIRMED]`
  - Doubles as **food farming**
- Later, silver strategy shifts to **liquidation** — farming gear specifically to sell.
  **Spider 20 is cited as the eventual best silver farm** `[LIKELY]`

## C3. Shards

Full rates, mercy thresholds and the Summon Boost explanation are in
`docs/research/01-game-state-2026.md §4`. The three rules that matter:

1. **Never open Ancient/Void/Sacred/Primal outside a 2× boost or relevant event**
2. **Summon Boosts do NOT raise your Legendary odds** — they only bias *which* Legendary
3. **Buy Common/Uncommon champions from the Market for food, and SAVE your Mystery Shards** for
   Champion Chase / Fusion events `[CONFIRMED as consensus]`

## C4. Fusions and events

- **Fusions** are multi-stage: assemble specific champions/materials across sequential layers,
  culminating in a free Legendary or Mythical `[LIKELY]`
- **Fragment Events** are simpler — every activity drips progress toward the champion
- **Honest framing for a fresh account:** full Fusions demand deep roster, multiple dungeon
  clears and gear. **Participate for the partial/milestone rewards; do not wreck your economy
  chasing the final champion** `[LIKELY]`

## C5. Great Hall — and the irreversible mistake

Permanent, global, always-on stat bonuses **split by Affinity**, bought with Arena Medals
`[CONFIRMED]`.

- Six upgradable stats: **HP%, ATK%, DEF%, C.DMG%, RESIST, ACC** `[CONFIRMED]`
- Bonuses apply **in every game mode to every champion of that affinity**, whether or not they
  ever fight in Arena `[CONFIRMED]`
- Medals: Bronze rank → Bronze · Silver → Silver · **Gold/Platinum → Gold** `[CONFIRMED]`
- Levels 1–3: any medal · 4–6: Silver or Gold · **7–10: Gold only** `[CONFIRMED]`
- Conversion: **1 Gold = 2 Silver = 4 Bronze** `[CONFIRMED]`

### Two things to act on
**Efficiency fact:** **C.DMG, RESIST and ACC give a higher stat boost per Medal than HP, ATK
and DEF** at equivalent levels `[CONFIRMED]`.

**Recommended priority: ACC → C.DMG → RESIST → DEF → HP → ATK** `[CONFIRMED as consensus]`

> **🚨 Great Hall upgrades are IRREVERSIBLE** `[CONFIRMED]`. New players routinely dump medals
> into ATK% and cannot undo it. **Put your first medals into ACC** — it is both the most
> efficient per medal and the stat that fixes your most common failure mode (resisted debuffs).

## C6. Arena

| Mode | What you get | Confidence |
|---|---|---|
| **Classic** | Great Hall medals, **Magisteel** per Offence win | `[CONFIRMED]` |
| **Tag Team** | **Gold Bars** → Skill Tomes, Champion Fragments, Forge Materials | `[CONFIRMED]` |
| **Live** | 35 wins → chest with **Primal Quartz**; **1 Legendary Skill Tome/month regardless of tier** | `[CONFIRMED]` |

**Fresh-account reality check** `[LIKELY]`: Bronze→Silver is achievable in 30 days with one fast
damage dealer. **Gold is a stretch. Platinum is not happening.** The realistic 30-day goal is
**"do your free Arena battles daily for Medals and Daily Quest completion"** — not climbing.

## C7. Progress Missions — your north star

Full table in `docs/research/01-game-state-2026.md §9`. Summary: four chains totalling 286
missions, rewarding **300 Gems → 1 Sacred Shard → 2 Legendary Tomes → Arbiter** `[CONFIRMED]`.

**Arbiter's aura is +30% SPD in all areas** — a permanent upgrade to every team you will ever
build, and the single best F2P champion reward in the game.

## C8. Faction Wars & Faction Guardians

**Faction Wars** — unlocks level 30. 14 factions × 21 stages, bosses at 7/14/21. Primary Glyph
source. **3-starring all Normal stages → Lydia the Deathsiren**; Hard → Polara Fireheart
`[CONFIRMED]`. Star track: **335 stars → Epic Tome; everything past 335 is Epic or Legendary**
`[LIKELY]`.

**Faction Guardians** — assign **duplicate** champions to boost all champions of the same
rarity and faction. 5 Chambers per tier, 2 slots each, **both must be filled**, **each Chamber
needs two copies of the same champion**. Bonuses are **global and always-on** `[CONFIRMED]`.

> **🚨 Your duplicate Rares are NOT junk food.** Feeding them permanently destroys Faction
> Guardian value. Buy Market fodder instead.

## C9. Skill Tomes — the mechanic that makes books painful

- Three rarities: Rare, Epic, Legendary `[CONFIRMED]`
- **You must use a tome matching the champion's rarity** `[CONFIRMED]`
- **🚨 Each tome adds one level to ONE skill, and WHICH skill is upgraded is RANDOM among
  skills still needing improvement** `[CONFIRMED]`

**That randomness is the whole problem.** You cannot target the skill you want. If a champion
has one skill worth booking and three that are not, you will waste tomes on the three.

**Sources** `[CONFIRMED]`: Missions, login rewards, **Clan Boss chests**, clan activity,
**Live Arena (1 Legendary tome/month regardless of tier)**, **Faction Wars star track**, events.

**Philosophy** `[CONFIRMED as consensus]`: Epic and Legendary tomes are scarce. **Only book
champions you are certain will stay in your core roster for years.**

Applied to your account: see `docs/plan/13-tome-allocation.md`.

## C10. The thirteen new-player mistakes `[CONFIRMED as consensus]`

1. **Upgrading low-quality artifacts too early** — nothing past level 8 unless 5★ with good subs
2. **Spreading investment across too many champions** — one well-built beats five half-built
3. **Sacrificing Epics or above as food** — never, in the early game
4. **Feeding duplicate Rares** — destroys permanent Faction Guardian value
5. **Burning Mystery Shards for food** — buy Market fodder, save Mysteries for events
6. **Trying to do everything at once** — Campaign first, everything else waits
7. **Missing free rewards** — promo codes expire; several tracks only pay if you manually claim
8. **Opening shards outside a Summon Boost**
9. **Misreading Summon Boosts** as raising Legendary odds — they do not
10. **Overcapping energy** — regen stops at 130
11. **Spending Great Hall medals on the wrong stats** — irreversible
12. **Rolling gear to 16 on a random day** instead of banking for an Enhancement event
13. **Giving masteries to a champion below Rank 6** — locks out Tier 6 entirely

---

## Unresolved gaps

Carried forward honestly. All are verifiable by you in-game in minutes:

1. Exact Basic-set percentages for Defense, Critical Damage, Accuracy, Resistance
2. Lifesteal set's exact heal %
3. Complete Doom Tower set roster; **Cursed** is placed in Ice Golem by one source and Doom
   Tower by another
4. Complete Dragon's Lair set list
5. Gear upgrade success-rate percentages per level
6. Full mastery tier tables; tree placement of Solidarity, Rapid Response, Arcane Celerity,
   Bloodthirst; **Master Hexer's effect**
7. **Ascension / Potion Keeps** — energy costs, tier requirements, potion types per affinity.
   **No data gathered at all.** This is a real gap in the Week 3 plan
8. 2026 Battle Pass specifics (distinct from Forge Pass)
9. Arena Medal economy — medals per win, Great Hall upgrade costs
10. Dungeon energy costs per stage; silver-per-energy figures
11. Champion Training system details
12. Faction Guardian exact bonus values
13. The two conflicting Minotaur time estimates (2–4 hours vs 60+ hours per champion)

---

## Sources

- [AyumiLove — Artifact and Accessory Guide](https://ayumilove.net/raid-shadow-legends-artifact-and-accessory-guide/)
- [AyumiLove — Champion Masteries Guide](https://ayumilove.net/raid-shadow-legends-champion-mastery-guide/)
- [AyumiLove — Loot Table and Drop Rates](https://ayumilove.net/raid-shadow-legends-loot-table-and-drop-rates/)
- [AyumiLove — Mercy System Explained](https://ayumilove.net/raid-shadow-legends-mercy-system-explained/)
- [HellHades — Artifact Tier List](https://hellhades.com/raid/artifact-tier-list/)
- [HellHades — Doom Tower Artifact Sets](https://hellhades.com/doom-tower-artifact-sets/)
- [HellHades — Gems vs Farming: Minotaur's Labyrinth](https://hellhades.com/gems-vs-farming-minotaurs-labyrinth/)
- [HellHades — 2025 Gear Set Meta: what's still worth farming](https://hellhades.com/2025-gear-set-meta-in-raid-whats-still-worth-farming/)
- [HellHades — Where to level your champions](https://hellhades.com/where-is-the-best-place-to-level-your-champions-in-raid-shadow-legends/)
- [InTeleria — Artifact Sets and Gear Tier List](https://www.inteleria.com/raid-shadow-legends-artifact-sets-and-gear-tier-list/)
- [InTeleria — Dungeon Drop Rates 2026](https://www.inteleria.com/raid-dungeon-drop-rates/)
- [InTeleria — 800 Gems for Masteries: is it worth it?](https://www.inteleria.com/800-gems-for-masteries-is-it-worth-it/)
- [Plarium — Basic Guide: Gear Overview](https://raid-support.plarium.com/hc/en-us/articles/360014657140-Basic-Guide-Gear-Overview)
- [Plarium — Great Hall](https://raid-support.plarium.com/hc/en-us/articles/360014653840-Great-Hall)
- [RAID Wiki (Fandom) — Artifact Sets](https://raidshadowlegends.fandom.com/wiki/Artifact_Sets)
- [RAID Wiki (Fandom) — Champion Mastery Guide](https://raidshadowlegends.fandom.com/wiki/Champion_Mastery_Guide)
- [RAID Wiki (Fandom) — Frugal Farming](https://raidshadowlegends.fandom.com/wiki/Frugal_Farming)
- [BlueStacks — Farming guide](https://www.bluestacks.com/blog/game-guides/raid-shadow-legends-2/farming-guide-en.html)
- [CGMagazine — RAID Guide: everything new players must know in 2026](https://www.cgmagonline.com/articles/raid-shadow-legends-guide/)
- [InTeleria — Beginner Guide 2026](https://www.inteleria.com/raid-shadow-legends-beginner-guide-2026-fast-start-zero-regrets/)
- [InTeleria — Early Game Guide: first 30 days](https://www.inteleria.com/raid-shadow-legends-early-game-guide-what-to-do-in-your-first-30-days/)
