# 03 — Content Mechanics

**Tier 2 — mechanics.** Paraphrased from HellHades' per-stage boss strategy text and
Ayumilove's boss guides via the research pack
([`claude-web/03_CONTENT_MECHANICS_TEAMS.md`](claude-web/03_CONTENT_MECHANICS_TEAMS.md)),
retrieved **2026-09-17**.

This file describes **what each fight demands**. Champion assignment is tier-3 analysis and
lives in `docs/plan/12-teams-by-content.md`.

Anything marked `unverified (search synthesis, 2026-09-17)` is carried over from the earlier
research pass because the pack is silent on it. **Treat those as lower confidence** — see
`docs/research/DATA_CONFLICTS.md §C`.

---

## 0. Stat floors that gate content

| Target | Requirement | Source |
|---|---|---|
| Dungeon stages **10–16** | **~150–180 ACC** | pack |
| Dungeon stage **20+** | **220+ ACC** | pack |
| **Hydra Normal** | **>210 SPD · ~215 ACC · 355 RES** on the Mischief target | pack |

> Use the **HellHades Stages Tool** for exact per-stage numbers rather than guessing.

**Debuffs that do not land do nothing.** A Decrease DEF that resists is a wasted turn, and this
is the most common reason a young account stalls in a dungeon it "should" clear.

---

## 1. Demon Lord (daily Clan Boss)

**Mechanics**
- The boss **opens on Void affinity and switches to Force, Magic or Spirit at 50% HP**
- **A1 and A2 are AoE attacks scaling off the boss's ATK** — which is why **Decrease ATK is the
  top-priority debuff**
- **A3 is a single-target hit scaling off the target's HP**, so whoever soaks it wants **high
  DEF and comparatively low HP**
- **Cap of 10 debuffs on the boss** at any time
- **Poisons plus Warmaster / Giant Slayer procs are the main damage sources for a young
  account**
- Everything early runs in **Lifesteal** gear

**Progression:** Normal → Hard → Brutal as damage and survival allow. **Killing the boss
outright doubles every clan member's chest**, so clearing a lower difficulty beats scratching a
higher one.

> **Do not chase a speed tune yet.** HellHades explicitly recommends an **untuned "speed team"**
> for early accounts. A 2:1 or 4:3 tune needs the DeadwoodJedi calculator and champions with the
> right cooldowns.

`unverified (search synthesis, 2026-09-17)`: 1 key per 6 hours, max 2 stored.

---

## 2. Chimera (weekly clan boss — unlocks at level 33)

**Structure:** five champions · **65 turns** · four forms cycling
**Ultimate → Ram → Ultimate → Lion → Ultimate → Viper**, **five boss turns per form**.
**Unusually, the Chimera can be hit with Decrease SPD.**
**Quick Battle** became available in July 2026 once you have claimed the final reward chest on a
difficulty.

| Form | Mechanics |
|---|---|
| **Ultimate** | A3 **removes all your buffs and hits 10% harder per buff removed** · A2 does 10% more damage per debuff on the boss and grants him Increase SPD (**Block Buffs stops this**) · A1 places Provoke and Decrease SPD (**Block Debuffs stops it**). **Do not stack buffs right before he swaps back into this form** |
| **Ram** | **Duel lands on the champion with the LOWEST C.DMG%.** **Reflects 50% of the damage you deal and ignores 50% DEF against anyone under Veil, Perfect Veil or Taunt** |
| **Lion** | **Hunter's Gaze lands on the HIGHEST-DEF champion.** Its A3 removes Decrease ATK / C.RATE / C.DMG and **hits harder per debuff removed** — so re-apply Decrease ATK **after** that attack. **Never remove Hunter's Gaze**; doing so triggers an extra AoE |
| **Viper** | **Where new players wipe.** Necrosis stacks per dead ally · **the first revive attempt in the form is blocked** · steals buffs · applies poisons plus Poison Sensitivity · spreads debuffs via Hex / Heal Reduction. **Vulnerable to Block Active Skills**, which locks it to its A1 |

**Duel and Hunter's Gaze are both under your control through gear** — you choose who receives
them by choosing who has the lowest C.DMG and the highest DEF.

> **Trials: ignore them early.** Completing a trial makes the **Ultimate form significantly
> stronger**. Farm the weekly chest instead.
> `unverified (search synthesis, 2026-09-17)`: within a Chimera Clash you are competing in, the
> Clash Point multiplier only applies to damage dealt *after* a trial completes, so late
> completion is worth less. That is an argument for doing trials early **once you are actually
> competing** — not for a young account.

---

## 3. Hydra (weekly clan boss — unlocks at level 45)

**Structure:** **six champions**, **three keys a week**, and **those six champions are locked
out for the rest of the week** — so you need multiple viable teams, not one good team.

- Four heads active, **two on the bench**
- When a head dies it becomes an **Exposed Neck taking 200% damage** for a few turns
- The replacement head arrives with **Serpent's Will (−75% damage taken)**
- Chests are awarded on **cumulative weekly damage thresholds**, doubled if the clan kills it
- **Fragments for Mithrala Lifebane** come from here

**Head interactions**

| Head | Mechanic | Counter |
|---|---|---|
| **Blight** | **Poison Cloud blocks all poison damage and turns your attacks into Weak Hits** | **HP Burn cancels it** |
| **Decay** | Applies **Heal Reduction** | A full-team Heal Reduction removal |
| **Mischief** | **Steals buffs with high ACC** | One champion built to **355 RES** as the designated target |
| **Wrath** | **Triggers Vengeance after 15 hits it has taken — a 300% damage AoE** | Many-hit teams must plan around it |
| Suffering, Torment | Not researched in full | — |

---

## 4. Spider's Den

**Mechanics**
- Spiderlings spawn: **6 at the start · 2 at the start of each of your turns · 4 after each
  Spider turn · capped at 10**
- **The Spider devours them for a 3% heal and +10% ATK each — up to +100% ATK for the fight**
- **Stages 14–20:** you can no longer kill spiderlings fast enough. The answer becomes **crowd
  control, a spiderling tank, healing and turn-meter control on the boss**
- **Stages 21–25:** add a **cap on Enemy Max HP damage** and **halve turn-meter reduction** —
  which makes **HP Burn plus burn activation the main damage route**

> **Stage 10 drops unusually generous gear for its energy cost** — the stage to farm during
> Spider tournaments before you can clear 20.

---

## 5. Dragon's Lair

**Mechanics**
- The boss **charges Scorch**, shown as a purple portion of its HP bar. **Deal enough damage
  before its next turn and it uses a weaker attack instead**
- **Poison damage lands before the boss acts, which is why poisons cancel Scorch**
- **The boss reduces incoming poison damage by 60%** — so you need **many** poisons, not a few
- **Dragon bosses are immune to all turn-meter and speed manipulation.** Leave Alure's and High
  Khatun's turn-meter tricks out of this dungeon entirely
- **Stages 21–25 cap Enemy Max HP damage to 10% per hit**

**Dragon stage 25 is Force affinity** — ✅ owner-confirmed in client, 2026-09-17.

---

## 6. Fire Knight's Castle

**The shield is the whole fight**, and **it scales by stage**:

| Stages | Hits to strip the shield |
|---|---|
| 1–6 | **5** |
| 7–9 | **7** |
| 10–20 | **10** |
| 21–25 | **12** |

- While the shield is up, the boss is **immune to debuffs and turn-meter effects and takes 80%
  less damage**
- **When he takes a turn he heals and fully regenerates the shield**
- So: **multi-hit attacks to strip it**, then Decrease SPD, turn-meter reduction and Decrease
  DEF while it is down
- **After stage 20, turn-meter reduction is halved**

> HellHades calls **Alure the MVP of stages 21–25**: her 3-hit A1 removes **25% turn meter per
> critical hit**, and once TM reduction is halved her consistency is what wins.

**Multi-hit A1s on this roster:** Apothecary **3** · Alure **3** · Gnishak **3** · Tagoar 2 ·
Turvold 2 · Morag 2. **Morag's A3 pulls two allies into a joint attack**, which strips extra
shield counters.

---

## 7. Ice Golem's Peak

**Mechanics**
- **Klyssus counter-attacks at HP thresholds**
- **With both of his allies alive, that counter ignores defence entirely and can wipe the team
  — and it can Freeze**
- **If his allies are dead, the counter revives them instead**
- His allies apply **Heal Reduction** and **Decrease DEF**

**Checklist:** AoE **Decrease ATK** (close to mandatory) · crowd control · a **cleanse or Block
Debuffs** for Decrease ACC and Freeze · a reviver · and ideally **Block Revive so the allies
stay dead** — HellHades names **Fenax** for exactly this.

**Ice Golem stage 25 is Magic affinity** — ✅ owner-confirmed in client, 2026-09-17.

---

## 8. Classic Arena

Early aim: **win enough to farm medals for the Great Hall**, which gives permanent stats by
affinity across the whole game. **Speed aura matters more than anything else at this stage.**

`unverified (search synthesis, 2026-09-17)`:
- Great Hall upgrade priority **ACC → C.DMG → RESIST → DEF → HP → ATK**; C.DMG, RES and ACC
  give more stat per medal than HP/ATK/DEF
- Medal tiers: levels 1–3 any medal · 4–6 Silver or Gold · **7–10 Gold only** ·
  1 Gold = 2 Silver = 4 Bronze
- **Great Hall upgrades are irreversible**

> **Not researched by the pack:** Live Arena and Tag Team Arena. The Arena team in
> `docs/plan/12-teams-by-content.md` is ratings-derived and **has not been validated against
> the live arena meta** — the pack says so explicitly.

---

## 9. Campaign farming

**Goal stage: Brutal 12-3** — best XP per energy once you can clear it fast, and **shields
there sell for the most silver**.

**Energy costs per run:** Normal **4** · Hard **6** · **Brutal 8** · Nightmare **16**

**XP totals:**
- **963,806** to take a rank-5 champion to level 50
- **2,010,669** to take a rank-6 champion to level 60

**Every run is one farmer plus three food champions.**

Quality-of-life that matters:
- **Multi-Battle training queue holds 60 champions** (July 2026 update)
- **Auto-Equip** (May 2026) is a fast way to gear fodder
- **Super Raids are permanent in the Potion Keeps** (April 2026) and in **Minotaur**

---

## 10. Progression gates and content order

**Level gates:** Chimera **33** · Doom Tower **40** · Hydra **45** · Cursed City (Sintranos)
**52**. **Grim Forest** (added December 2025) is endgame — note it exists and ignore it for
months.

**HellHades' content order after day 30: Dragon 20 → Spider 20 → Fire Knight.**

- **Dungeon stage 20 is the main gear milestone**
- **Stages 21–25 change the rules** (Enemy Max HP damage capped, turn-meter reduction halved) —
  **do not rush past 20 until your gear can handle it**
- **Stage 16 is where Mystery Shards stop dropping** — a useful milestone marker
- Hard dungeons add an **"Awakened Weakness"** passive, at which point awakening levels start
  to matter

---

## 11. Not researched

From `claude-web/05_OPEN_ITEMS_AND_CONFLICTS.md`. **These are open TODOs and have not been
filled in with guesses.**

1. **Demon Lord speed tunes** — whether this roster can reach 2:1 or 4:3, and at what speeds
2. **Hydra head-by-head playbook** — the six head guides were not read in full. **Head-of-Torment
   counterplay versus Starsage's Perfect Veil specifically needs checking**
3. **Chimera Trials** — trial list and empowerment breakpoints (7–9 and 16–18 trials)
4. **Demon Lord damage thresholds** per difficulty and chest tier
5. **Arena validation** — Live Arena and Tag Team Arena not researched at all
6. **Doom Tower, Faction Wars, Cursed City, Grim Forest, Minotaur, Iron Twins, Sand Devil,
   Phantom Shogun** — ratings exist, mechanics and teams do not
7. **Blessings and Relics** — both live systems eventually; not extracted
8. **Faction Guardians** — not researched, and live for you from the **day-30 High Khatun
   duplicate**
