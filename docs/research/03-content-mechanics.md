# 03 — Content Mechanics Research

**Compiled:** 2026-09-17 · Confidence tags per `docs/research/00-methodology-and-sources.md`

This document describes *what each fight actually demands*. It deliberately describes
**requirements**, not champion names — champion assignment happens in
`docs/plan/12-teams-by-content.md`. Separating these two things is the whole point: when you
pull a new champion, you re-read the requirement and re-assign. The requirement does not
change; the roster does.

---

## 0. The universal gate: Accuracy (ACC)

Nearly every PvE failure on a new account traces back to one stat. Debuffs are resisted when
your ACC is too low for the enemy's RESIST.

**The rule:** required ACC ≈ enemy RESIST + 25 per 10% of resist chance you want to remove.
Practically, aim for enemy RESIST + 25 as a floor, more for critical debuffs. `[CONFIRMED]`

| Target | Practical ACC target | Confidence |
|---|---|---|
| Spider 20 | ~225 | `[CONFIRMED]` |
| Dragon 25 | ~300 | `[CONFIRMED]` |
| Clan Boss UNM | 230+ on all debuffers | `[CONFIRMED]` |
| Dungeon stages 21–25 generally | 250–300 | `[LIKELY]` |

**Why this matters more than damage on a fresh account:** a Decrease Defence that lands
doubles your team's damage. A Decrease Defence that gets resisted does nothing. ACC is
therefore the highest-leverage stat on every support you build, and it is the stat new
players most consistently under-build.

---

## 1. Affinity system (applies everywhere)

Rock-paper-scissors: **Force > Magic > Spirit > Force**. Void is neutral — no advantage, no
disadvantage, ever. `[CONFIRMED]`

**Advantage:** +15% C.Rate, +30% strong-hit chance, +30% damage on strong hits.
**Disadvantage:** −20% damage, +35% weak-hit chance, −15% C.Rate. `[CONFIRMED]`

Two consequences that drive the entire plan:

1. **Weak hits do not just reduce damage — they can cause debuffs to fail to apply.** This is
   why affinity matters far more in dungeons than raw numbers suggest.
2. **Void champions are disproportionately valuable to a small roster** because one Void
   champion covers all four affinity rotations. With a 20-champion roster you cannot afford
   four affinity-specific answers to every problem. This single fact shapes the build order
   in `docs/plan/11-build-priority.md`.

---

## 2. Dragon's Lair

**Rewards:** the primary early-game gear dungeon. Farmed for the core offensive/defensive
sets used everywhere else.
**Stage 25 affinity:** Force `[CONFIRMED]` — so Magic champions are at a disadvantage there,
Spirit champions have the advantage.

**Boss mechanics:**
- Applies **Poison**, **Weaken**, and **Decrease ATK** to your team `[CONFIRMED]`
- The fight is a sustained damage-race, not a burst check

**Requirements:**
| Need | Why |
|---|---|
| Decrease Defence | The single biggest damage multiplier available |
| A cleanse / Block Debuffs support | To strip the Poison + Weaken + Decrease ATK stack |
| High RESIST on that support | So the support itself does not get debuffed and fail its job |
| ~300 ACC on debuffers at stage 25 | Below this, debuffs resist constantly |
| Sustained single-target damage | It is an HP race against one target |

**Why Dragon is the correct first dungeon for most new accounts:** it is the most forgiving
of the gear dungeons (no shield-break check, no revive mechanic, no summon spam), and it
drops the sets you need to do everything else. `[LIKELY]`

---

## 3. Fire Knight's Castle

The hardest of the four classic dungeons for a new account, and the one most likely to hard-
block you. It is a **mechanics check**, not a stat check.

**Boss (Fyro) mechanics, stages 21–25:**
- At the start of his turn he raises a **Divine Shield with 12 shield layers** `[CONFIRMED]`
- The shield absorbs **80% of incoming damage** and makes him **immune to all debuffs** while
  active `[CONFIRMED]`
- **Each separate hit removes one shield layer**, regardless of that hit's damage
- If you fail to strip all 12 layers before his turn begins, he **heals himself** and
  **AoE-nukes your team** `[CONFIRMED]`
- His attack **decreases your champions' MAX HP by up to 40%**, which one-shots squishy
  champions `[CONFIRMED]`

**Requirements — this is the critical list:**
| Need | Why |
|---|---|
| **Multi-hit attacks, ideally on A1** | 12 layers must come off every rotation. A1 is always available; a 4-turn-cooldown multi-hit is not |
| Hit *count*, not hit *damage* | A 6-hit skill for low damage beats a 1-hit nuke here |
| Counterattack and/or Reflect Damage | Extra hits outside your turn — strips layers for free `[CONFIRMED]` |
| Increase Speed / Turn Meter control | Fit more of your turns between his `[CONFIRMED]` |
| HP/DEF bulk | To survive the MAX-HP-reduction nuke when you inevitably miss a break |

**The blunt truth for your roster:** if you do not own enough multi-hit champions, Fire
Knight is not a gear problem you can solve by farming. It is a roster problem. This is
addressed directly in the roster gap analysis.

**Hard Mode note:** Hard Mode Fire Knight ("Tainted Fyro") uses a *Bloodflame Cloak* shield
and is a distinct, much later problem. `[CONFIRMED]` Not relevant inside 30 days.

---

## 4. Spider's Den

**Rewards:** the **accessories** dungeon — Rings, Amulets/Necklaces, Banners `[CONFIRMED]`.
Accessories are a large, often-ignored chunk of your total stats, which makes Spider quietly
one of the highest-value dungeons.

**Boss (Skavag, the Spider Queen) mechanics:**
- Summons **2 Spiderlings whenever one of your champions begins a turn**, to a maximum of
  **10 Spiderlings** `[CONFIRMED]`
- On stages 21–25, **damage based on enemy MAX HP is capped** `[CONFIRMED]` — this is why the
  standard strategy changes at high stages

**The key mechanic — HP Burn:**
When a Spiderling affected by **HP Burn** takes its turn, **all of its allies take 3% of
their MAX HP as damage**. With all 10 Spiderlings burning and taking turns before the boss,
that is **~30% of the boss's MAX HP per rotation.** `[CONFIRMED]`

This makes **AoE HP Burn the primary damage source at Spider 21–25**, not your nukers.

**Requirements:**
| Need | Why |
|---|---|
| **AoE HP Burn** | The actual win condition at high stages |
| ~225 ACC (stage 20) rising at 21–25 | To land the Burn at all |
| A "bait" / lowest-HP champion, or strong AoE control | Spiderlings target the lowest-HP champion `[CONFIRMED]` |
| AoE damage to manage Spiderlings | Otherwise you drown in adds |
| Decrease Defence | As always |

**Note on the bait strategy:** the classic setup gives the bait champion the lowest HP on the
team by a wide margin (allies at ~300%+ of his HP) so Spiderlings reliably attack him while
he survives via Counterattack/Unkillable mechanics `[CONFIRMED]`. This is an advanced,
gear-hungry technique — **not** a realistic day-30 target.

---

## 5. Ice Golem's Peak

**Boss (Klyssus) mechanics:**
- **Frost Nova** — AoE damage `[CONFIRMED]`
- **Numbing Chill** — applies a **50% Decrease ACC debuff**, 4-turn cooldown `[CONFIRMED]`.
  This is vicious: it turns off your debuffs mid-fight
- **Frigid Vengeance [Passive]** — at certain HP thresholds, **revives all dead minions**,
  ignores 50% DEF per living minion, and has a freeze chance that scales with living minions
  `[CONFIRMED]`
- **Almighty Persistence [Passive]**, stages 21–25 — reduces all Turn Meter reduction against
  the boss by 50% `[CONFIRMED]`
- **Stage 25 is Magic affinity** `[CONFIRMED]` — Force champions have the advantage

**Requirements:**
| Need | Why |
|---|---|
| Decrease Defence | Standard |
| Increase ATK (or Increase DEF for DEF-scaling teams) + Increase SPD | Explicitly called out as the requirement `[CONFIRMED]` |
| A way to handle the revive | Either Block Revive, or enough sustained DoT that the boss dies without triggering the big nuke `[CONFIRMED]` |
| Enough ACC to punch through Numbing Chill | You lose 50% ACC while it is up — build a buffer |
| Cleanse for Freeze | Freeze chance scales with living minions |

**Useful tactical note:** the boss does not use its revive if it takes damage on its own turn
— so Poison + HP Burn pressure can skip the mechanic entirely `[CONFIRMED]`. This is a very
accessible line for a small roster and is the recommended approach.

---

## 6. Demon Lord (Clan Boss)

The single most important repeatable content in the game for a new account, because the chest
rewards include **Shards, Rare/Epic/Legendary Books, Gems**, and the **Cruel** and
**Immortal** gear sets `[CONFIRMED]`.

**Structure:**
- 6 difficulties: Easy → Normal → Hard → Brutal → Nightmare → **Ultra-Nightmare (UNM)**
  `[CONFIRMED]`
- **1 key every 6 hours, maximum 2 stored** `[CONFIRMED]` — so ~4 keys/day if you log in
  regularly. Missing logins literally burns rewards
- Defeating the boss on a difficulty **unlocks the next one** `[CONFIRMED]`
- Rewards are by **damage threshold**, and damage **accumulates across keys** in the same week
  `[CONFIRMED]`
- If the clan kills the Demon Lord outright, **every member's rewards double** `[CONFIRMED]`

**Boss mechanics:**
- **Immune to hard crowd control and Turn Meter reduction** `[CONFIRMED]`
- **Only 10 debuffs can be active at once** `[CONFIRMED]` — so debuff spam has a hard ceiling,
  and Poison quality matters more than quantity
- **His damage increases as the fight goes on** `[CONFIRMED]` — which is why Decrease ATK,
  survivability and correct speed tuning beat raw burst

**Requirements, in priority order:**
1. **Survive the full fight.** Damage is irrelevant if you die at turn 30.
2. **Decrease ATK** — the highest-value defensive debuff in the fight
3. **Weaken + Decrease Defence** — the damage multipliers
4. **Poison** — scales off the boss's huge MAX HP, ignores much of the damage formula
5. **ACC 230+** on every debuffer for UNM `[CONFIRMED]`
6. **Speed tuning** (see below)

### Speed tuning — read this before gearing anything for CB

A "2:1 tune" means your team takes **two turns for every one boss turn** `[CONFIRMED]`.
- UNM Demon Lord runs at **Speed 190** `[CONFIRMED]`
- A 2:1 tune needs roughly **380 effective speed** in relative-turn-meter terms `[CONFIRMED]`
- A 4:3 tune (4 team turns per 3 boss turns) lets 4-turn cooldowns cycle reliably `[CONFIRMED]`

**Masteries that BREAK speed tunes — do not take these on tuned CB champions:**
**Rapid Response**, **Arcane Celerity**, **Cycle of Magic** `[CONFIRMED]`.
They grant Turn Meter or reduce cooldowns unpredictably and desynchronise the rotation.

**This is a genuine trap.** It is fully reversible only by re-doing masteries, which costs
1,650 scrolls. Deciding "is this champion a tuned CB champion?" *before* assigning masteries
is one of the highest-value decisions in this whole plan.

**Tooling:** the DeadwoodJedi Clan Boss Calculator is the community standard and simulates
true turn order including the hidden decimal "true speed" produced by Speed sets and Lore of
Steel `[CONFIRMED]`. This is a strong candidate feature for the website.

---

## 7. Chimera (Clan Boss)

**Access gates — note these carefully, they are clan-dependent, not account-dependent:**
- Unlocks at **account level 33** `[CONFIRMED]`
- Your **clan** needs **≥10 players at level 33+** and **≥50 Clan Activity Stars in the
  preceding 7 days** `[CONFIRMED]`

**Structure:**
- 5 champions vs a metamorphic boss with **4 Forms: Ultimate, Ram, Lion, Viper** `[CONFIRMED]`
- Forms **cycle every 5 turns**, returning frequently to Ultimate `[CONFIRMED]`
- The fight runs **65 turns** `[CONFIRMED]`
- **Affinities rotate monthly (28-day rotation).** Ram, Lion and Viper share one affinity;
  Ultimate has a different one `[CONFIRMED]`

**Form mechanics:**
| Form | Mechanic | Confidence |
|---|---|---|
| **Ram** | Places **Duel** on the champion with the **lowest Critical Damage** | `[CONFIRMED]` |
| **Lion** | Places **Hunter's Gaze** on the champion with the **highest Defence** | `[CONFIRMED]` |
| **Viper** | Applies and detonates **poison stacks** | `[CONFIRMED]` |
| **Ultimate** | Heavy AoE pressure; gains large stat bonuses from every Trial you complete | `[CONFIRMED]` |

**The critical build rule:** Duel and Hunter's Gaze **cannot be resisted or blocked**
`[CONFIRMED]`. You therefore do not counter them — you *choose who receives them* by
controlling which champion has the lowest C.DMG and which has the highest DEF, and then build
that champion to survive it. This is a team-composition decision made at gearing time.

**Trials and Clash Points:**
- **3 trials per form**, each with Easy / Normal / Hard tiers, unlocked sequentially
  `[CONFIRMED]`
- Completing a trial **raises your Clash Point multiplier** but **also permanently buffs the
  boss's Ultimate Form** `[CONFIRMED]`
- **The multiplier only applies to damage dealt *after* the trial completes** `[CONFIRMED]` —
  so completing trials late in the event is worth dramatically less
- Ultra-Nightmare yields **~11× the Clash Points of Easy**, and **+0.8× per trial** vs only
  **+0.05× per trial on Easy** `[CONFIRMED]`

**Strategic verdict:** survival to turn 65 is the baseline before damage matters at all
`[CONFIRMED]`. **Chimera is not realistic content inside 30 days on a fresh account** — it is
flagged here so you understand what you are building toward, and so you do not join a clan
that expects Chimera output from you on day 10.

---

## 8. Hydra (Clan Boss)

**Unlocks at account level 45** `[CONFIRMED]`.

**Structure:**
- **6 champions** per team (not 5) `[CONFIRMED]`
- The Hydra has **6 possible heads**; you fight **4 "Starter Heads"** per rotation, with the
  other 2 tagging in when you decapitate one `[CONFIRMED]`
- **Champion lock:** a champion used in one key cannot be reused in the next — you need
  **multiple viable teams**, not one good team `[CONFIRMED]`

**The Devour mechanic:**
- At battle start, one champion is marked with **Mark of the Hydra**, a **16-turn countdown**
  `[CONFIRMED]`
- When it expires, that champion is **devoured** by the next head to move
- You can **rescue them** by dealing enough damage to the devouring head before digestion
  completes `[CONFIRMED]`

**Requirements:** survival-first, exactly like Demon Lord, plus **roster depth**. The champion
lock means Hydra is fundamentally a *breadth* check, and breadth is precisely what a fresh
account lacks.

**Strategic verdict:** **Hydra is explicitly not a 30-day goal.** The community guidance is to
start at the lowest difficulty and climb `[CONFIRMED]`, and unlocking it at all requires
account level 45. Planning documents treat Hydra as a **Day 90+** target.

---

## 9. Classic Arena

**Structure:** 1 team of 4 vs another player's team of 4; first to wipe the other wins
`[CONFIRMED]`. Tiers: Bronze → Silver → Gold → Platinum.

**The core dynamic:** Classic Arena is a **speed race**. Whoever moves first usually wins,
because the opening turn can apply a full-team Turn Meter reduction or an AoE nuke before the
opponent ever acts. `[CONFIRMED]`

**Standard archetype ("go-first" team):**
| Slot | Role |
|---|---|
| 1 | **Speed lead** — an aura granting large team SPD, geared in full Speed sets |
| 2 | **Turn Meter control** — fill your team's TM and/or drain theirs |
| 3 | **Debuffer / Decrease DEF** — to make the nuke actually kill |
| 4 | **AoE nuker** — the finisher |

**Gearing note:** a Speed set grants **+12% SPD per completed set**, so three Speed sets on
your speed lead is **+36% SPD** `[CONFIRMED]`. Arena speed leads are geared differently from
every other champion in the game — they are the one place where you stack a single stat
almost exclusively.

**Why Arena matters even if you do not enjoy PvP — this is important:**
Arena rank feeds the **Great Hall**, and Great Hall bonuses are **permanent, account-wide
stat increases applied to every champion of a given affinity, in every mode** — campaign,
dungeons, Clan Wars, Demon Lord `[CONFIRMED]`.

- Bronze rank → Bronze Medals; Silver → Silver Medals; Gold/Platinum → Gold Medals
  `[CONFIRMED]`
- Great Hall levels 1–3: upgradable with any medal · levels 4–6: Silver or Gold only ·
  **levels 7–10: Gold Medals only** `[CONFIRMED]`
- Conversion: **1 Gold = 2 Silver = 4 Bronze** `[CONFIRMED]`

**Consequence:** reaching **Gold Arena** is a genuine PvE progression milestone, because the
top Great Hall tiers are gated behind Gold Medals. Arena is not optional content for a player
who wants to clear dungeons. This is one of the most commonly missed new-player insights.

---

## 10. Campaign — the solo farmer

**The goal:** one champion who clears a campaign stage solo, on auto, at 100% reliability,
fast — while three "food" champions ride along and soak XP.

**Best stage: Brutal 12-3 ("Pit of Sorrows" area)** `[CONFIRMED]`
It is the most energy-efficient stage in the game for the **combination** of XP and silver.
`[CONFIRMED]`

**Requirements for a solo farmer:**
| Need | Why |
|---|---|
| **AoE damage** | Waves must die in as few turns as possible |
| **Self-sustain (lifesteal or a heal)** | No support is present to keep them alive |
| **100% consistency** | A 95% farmer that occasionally fails ruins Multi-Battle and Super Raids |
| **Speed** | The metric is *runs per hour*, not damage |
| Level 60, 6★ | This is the first major account goal `[CONFIRMED]` |

**Standard gearing:** Lifesteal set is the classic enabler (self-sustain without a healer),
plus Speed. Masteries commonly recommended for farmers: Deadly Precision, Keen Strike, Heart
of Glory, Whirlwind of Death, Ruthless Ambush, Cycle of Violence `[LIKELY]`.

**Super Raids** `[CONFIRMED]`: an opt-in toggle (available during specific events/dungeons)
that spends **2× energy** for **2× XP and 2× rewards** in the time of a single run, and works
with Multi-Battle. **Risk: if the run is not 100% successful you can lose the doubled runs.**
This is precisely why farmer *reliability* matters more than farmer *speed*.

**Why this is priority #1 on a fresh account:** every other system — ascension, mastery
farming, gear upgrading, food for rank-ups — is bottlenecked by XP and silver. Getting a
level-60 6★ farmer online is the single highest-leverage thing a new account can do
`[CONFIRMED]`.

---

## 11. Adjacent content that gates your progression

These were not on your list, but they gate the things that were.

### Minotaur's Labyrinth — masteries
- A full mastery set costs **1,650 scrolls per champion**: **100 Basic + 600 Advanced +
  950 Divine** `[CONFIRMED]`
- Stages 1–5 drop Basic · 6–10 Advanced + Basic · 11–15 all types including Divine
  `[CONFIRMED]`
- Farming one champion's full masteries takes **~201–380 runs (~14,070–26,390 energy)** —
  **over 60 hours of continuous grinding** `[CONFIRMED]`
- Best practice: only start farming once you can auto **stage 13+**; farm **stage 15**
  `[CONFIRMED]`
- Once your main 4 champions are maxed they stop receiving scrolls, so the 5th slot collects
  everything `[CONFIRMED]`

**The implication is severe and drives the whole build-priority document:** masteries are
*the* scarcest investment in the game. At roughly 60 hours of grinding per champion, you
cannot mastery 20 champions. **Choosing the right 4–6 champions to mastery is the single most
consequential resource decision on this account.**

### Doom Tower
- Unlocks at **level 40**, **120 floors**, resets monthly, Normal and Hard difficulties
  `[CONFIRMED]`
- Every 10th floor is one of **8 rotating bosses** `[CONFIRMED]`
- **12 Secret Rooms per difficulty**, entered with **Silver Keys**, each with a restriction
  (specific faction, specific affinity, etc.); completing one refunds 2 keys `[CONFIRMED]`
- Guidance: **do not farm Secret Rooms early** — wait until you can clear higher stages for
  better rewards `[CONFIRMED]`

### Faction Wars
- Unlocks at **level 30** `[CONFIRMED]`
- **14 factions**, each with a Crypt of **21 stages**, bosses at floors 7, 14, 21
  `[CONFIRMED]`
- Rewards **Glyphs** (HP/ATK/DEF/SPD/RESIST/ACC) for improving gear substats, plus Forge
  materials `[CONFIRMED]`
- **3-starring all Normal stages across all 14 factions rewards Lydia the Deathsiren**, a
  top-tier Legendary support `[CONFIRMED]`. Hard Mode completion rewards **Polara Fireheart**
  `[CONFIRMED]`
- Hard Mode unlocks only after earning Lydia `[CONFIRMED]`

**Why this matters to you specifically:** Faction Wars requires **fielding a full team from a
single faction**. Your roster is spread across many factions with 1–2 champions each, which
means Faction Wars will be slow for a long time. It is a **long-term** objective, and it is a
reason to *keep* otherwise-mediocre champions rather than feeding them away.

### Hard Mode Dungeons
- Harder versions of the classic dungeons featuring "Tainted" bosses `[CONFIRMED]`
- Drop **Mythical Artifacts and Accessories**, previously only available from Hydra chests
  `[CONFIRMED]`
- Higher stages = better Mythical drop chances `[CONFIRMED]`
- **Endgame content — not relevant inside 30 days.**

---

## 12. Requirement summary matrix

The compressed version. This is the table to re-read whenever you pull a new champion.

| Content | Hard requirement | Secondary | Gate |
|---|---|---|---|
| **Campaign farm** | AoE + self-sustain + 100% reliability | Speed | Level 60 farmer |
| **Dragon** | Decrease DEF · cleanse/Block Debuffs · ~300 ACC | Single-target DPS | — |
| **Ice Golem** | Decrease DEF · Increase ATK/DEF + SPD · revive answer | DoT pressure | — |
| **Spider** | **AoE HP Burn** · ~225+ ACC | Bait/AoE control | — |
| **Fire Knight** | **Multi-hit A1** (12 shield layers) | Counterattack · TM control · bulk | — |
| **Arena Classic** | Speed lead · TM control · AoE nuke | Decrease DEF | — |
| **Demon Lord** | Survival · Decrease ATK · Weaken/Dec DEF · Poison · 230 ACC | Speed tuning | Clan |
| **Chimera** | Survive 65 turns · control who gets Duel/Hunter's Gaze | Trials early | Lvl 33 + clan |
| **Hydra** | Survival · **roster depth** (champion lock) | Devour management | **Lvl 45** + clan |

---

## 13. Sources

Reached via search synthesis (direct fetch blocked — see `00-methodology-and-sources.md`):

- [AyumiLove — Chimera Clan Boss Guide](https://ayumilove.net/raid-shadow-legends-chimera-clan-boss-guide/)
- [AyumiLove — Dragon Dungeon Guide](https://ayumilove.net/raid-shadow-legends-champion-ranking-in-dragons-lair/)
- [AyumiLove — Fire Knight Dungeon Guide](https://ayumilove.net/raid-shadow-legends-champion-ranking-in-fire-knights-castle/)
- [AyumiLove — Spider Dungeon Guide](https://ayumilove.net/raid-shadow-legends-champion-ranking-in-spiders-den/)
- [AyumiLove — Ice Golem Dungeon Guide](https://ayumilove.net/raid-shadow-legends-champion-ranking-in-ice-golems-peak/)
- [AyumiLove — Demon Lord Clan Boss Guide](https://ayumilove.net/raid-shadow-legends-champion-ranking-in-clan-boss/)
- [AyumiLove — Hydra Clan Boss Guide](https://ayumilove.net/raid-shadow-legends-hydra-clan-boss-guide/)
- [AyumiLove — Champion Masteries Guide](https://ayumilove.net/raid-shadow-legends-champion-mastery-guide/)
- [AyumiLove — Faction Wars Guide](https://ayumilove.net/raid-shadow-legends-champion-ranking-in-faction-wars/)
- [AyumiLove — Doom Tower Guide](https://ayumilove.net/raid-shadow-legends-doom-tower-guide/)
- [HellHades — Chimera boss guide](https://hellhades.com/raid/boss-guide/chimera/)
- [HellHades — Chimera Trials Breakdown](https://hellhades.com/chimera-trials-breakdown-raid-shadow-legends/)
- [HellHades — Chimera Clash Rewards and Requirements](https://hellhades.com/chimera-clash-rewards-and-requirements/)
- [HellHades — Ultimate Clan Boss Guide](https://hellhades.com/ultimate-clan-boss-guide-everything-you-need-to-know/)
- [HellHades — Understanding Fire Knight Hard Mode Mechanics](https://hellhades.com/understanding-fire-knight-hard-mode-mechanics-in-raid-shadow-legends/)
- [HellHades — Skavag, the Spider Queen](https://hellhades.com/raid/boss-guide/skavag-the-spider-queen/)
- [HellHades — Klyssus, The Ice-Golem](https://hellhades.com/raid/boss-guide/klyssus-the-ice-golem/)
- [HellHades — Understanding Arena](https://hellhades.com/raid-shadow-legends-understanding-arena/)
- [HellHades — What makes an effective 12-3 Brutal Campaign Farmer?](https://hellhades.com/what-makes-an-effective-12-3-brutal-campaign-farmer/)
- [HellHades — Gems vs. Farming: Minotaur's Labyrinth](https://hellhades.com/gems-vs-farming-minotaurs-labyrinth/)
- [HellHades — Doom Tower Secret Rooms](https://hellhades.com/doom-tower-secret-rooms/)
- [HellHades — Introducing Super Raids](https://hellhades.com/introducing-super-raids/)
- [HellHades — Getting started with Hydra](https://hellhades.com/getting-started-with-hydra-clan-boss-in-raid-shadow-legends/)
- [DeadwoodJedi — Speed tuning](https://deadwoodjedi.com/what-is-a-speed-tuned-clan-boss-team-in-raid-shadow-legends/)
- [Plarium official — Guide: The Chimera](https://raid-support.plarium.com/hc/en-us/articles/17510611600412-Guide-The-Chimera)
- [Plarium official — Guide: The Hydra](https://raid-support.plarium.com/hc/en-us/articles/4411876951442-Guide-The-Hydra)
- [Plarium official — Great Hall](https://raid-support.plarium.com/hc/en-us/articles/360014653840-Great-Hall)
- [Plarium official — Classic Arena](https://raid-support.plarium.com/hc/en-us/articles/360014642780-Classic-Arena)
- [RAID Wiki (Fandom) — Clan Boss](https://raidshadowlegends.fandom.com/wiki/Clan_Boss)
- [RAID Wiki (Fandom) — Great Hall](https://raidshadowlegends.fandom.com/wiki/Great_Hall)
- [RAID Wiki (Fandom) — Frugal Farming](https://raidshadowlegends.fandom.com/wiki/Frugal_Farming)
- [BlueStacks — Clan Boss progression guide](https://www.bluestacks.com/blog/game-guides/raid-shadow-legends/rsl-clan-boss-progression-guide-en.html)
- [BlueStacks — Chimera guide](https://www.bluestacks.com/blog/game-guides/raid-shadow-legends/rsl-chimera-guide-en.html)
- [BlueStacks — Hydra guide](https://www.bluestacks.com/blog/game-guides/raid-shadow-legends/rsl-hydra-guide-en.html)
- [BlueStacks — Affinity guide](https://www.bluestacks.com/blog/game-guides/raid-shadow-legends/rsl-affinity-guide-en.html)
- [BlueStacks — Faction Wars guide](https://www.bluestacks.com/blog/game-guides/raid-shadow-legends/rsl-faction-wars-guide-en.html)
- [BlueStacks — Hard Mode Dungeons / Mythical Artifacts](https://www.bluestacks.com/blog/updates/raid-shadow-legends/rsl-hardmode-dungeons-en.html)
- [RaidOptimizer — Fire Knight 25 guide](https://raidoptimizer.com/guide/fire-knight-25-guide)
