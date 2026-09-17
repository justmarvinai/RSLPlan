# 02 — Champion Reference

**Tier 1 — source data.** Every value here is taken from the research pack
(`docs/research/claude-web/`, retrieved **2026-09-17**, direct access to hellhades.com and
ayumilove.net).

> **Verbatim skill text lives in [`claude-web/01_ROSTER_DATA.md`](claude-web/01_ROSTER_DATA.md)
> and the full HellHades mastery presets in
> [`claude-web/02_BUILDS_MASTERIES_TOMES.md`](claude-web/02_BUILDS_MASTERIES_TOMES.md).**
> This file is the working index: identity, auras, cooldowns, tome costs, book value, gear and
> stat priorities, and both rating scales side by side. It does not restate the full skill
> text — when you need exact wording, go to the pack.

**Changing this file means refreshing the data**, not editing it by hand. See
`docs/research/SOURCES.md §4`.

---

## Identity

| Champion | Rarity | Affinity | Faction | Role | Start rank | Ayumilove rank | HellHades overall |
|---|---|---|---|---|---|---|---|
| Starsage Galathir | **Mythical** | Force | High Elves | Support | **6** | SS | 10 |
| Ninja | Legendary | Magic | Shadowkin | Attack | 5 | S | 9 |
| Artak | Legendary | Magic | Orcs | HP | 5 | A | 9 |
| Turvold | Legendary | **Void** | Barbarians | Attack | 5 | S | 9 |
| Rathalos Blademaster | Legendary | Force | Banner Lords | Attack | 5 | S | 9 |
| Gnishak Verminlord | Legendary | Force | Skinwalkers | Attack | 5 | S | 9 |
| Ultimate Deathknight | Legendary | Force | Undead Hordes | Defense | 5 | S | 8 |
| Hurndig | Legendary | Magic | Dwarves | Attack | 5 | S | 9 |
| Godseeker Aniri | Epic | **Void** | Sacred Order | Defense | 4 | A | 8 |
| Skullcrown | Epic | **Void** | Knights Revenant | Attack | 4 | A | 8 |
| Tagoar | Epic | Magic | Orcs | Support | 4 | A | 8 |
| Uugo | Epic | Magic | Ogryn Tribes | Support | 4 | S | 8 |
| Alure | Epic | Magic | Demonspawn | Attack | 4 | S | 8 |
| Morag Bronzelock | Epic | Spirit | Dwarves | Defense | 4 | B | 7 |
| High Khatun | Epic | Spirit | Barbarians | Support | 4 | B | 7 |
| Fenax | Epic | Spirit | **Sacred Order** | Attack | 4 | B | 8 |
| Kael | Rare | Magic | Dark Elves | Attack | 3 | A | 7 |
| Apothecary | Rare | Magic | High Elves | Support | 3 | S | 7 |

**Affinity spread:** Magic ×9 · Force ×4 · Void ×3 · Spirit ×2

### 🚨 Start rank is the most important column on this page
Rarity sets starting rank, and starting rank sets **food cost to 6★**:

| Start rank | Feeders needed to reach 6★ |
|---|---|
| **6 (Mythical)** | **none** |
| 5 (Legendary) | 5 rank-5 feeders |
| 4 (Epic) | 4 rank-4, then 5 rank-5 |
| 3 (Rare) | 3 rank-3, 4 rank-4, then 5 rank-5 |

**Kael and Apothecary are the most expensive champions on this account to six-star. Starsage
Galathir is free.** This is the opposite of standard new-account advice and is entirely a
consequence of this roster's rarity mix. It drives the whole build order.

### Naming traps
- **"High Kathun" is High Khatun** (Barbarians)
- **Kael ≠ Dark Kael ≠ Supreme Kael.** You own plain **Kael** (Rare · Magic · Dark Elves).
  Supreme Kael is a Void Legendary from RAID's 4th anniversary. Any search for "Kael" returns
  all three
- **Starsage Galathir has two forms.** Ratings, skills and builds are stored **per form**
- **Legendary tomes cannot be used on a Mythical.** Galathir needs **Mythical Tomes**

---

## Ratings — two independent scales, never merged

**HellHades: 0–10** · **Ayumilove: 1–5 stars** · both retrieved **2026-09-17**

> These scales measure different things and genuinely disagree. **Do not average them.** If a
> UI needs one sort order, compute it at render time and label it as derived.

### HellHades (0–10) — retrieved 2026-09-17

| Champion | Demon Lord | Chimera | Hydra | Spider | Dragon | Fire Knight | Ice Golem | Arena | Spider H | Dragon H | FK H | IG H |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Galathir (base)** | 8 | **10** | 9 | **10** | **10** | 8 | **10** | **10** | 6 | **10** | 7 | 9 |
| **Galathir (alt)** | 4 | 8 | 6 | **10** | **10** | 8 | 8 | **10** | 6 | 6 | 4 | 6 |
| Ninja | **10** | **10** | **10** | 8 | 9 | 9 | 9 | 7 | 3 | 9 | 7 | **10** |
| Artak | 9 | 7 | **10** | **10** | **10** | 8 | **10** | 7 | **10** | 9 | 4 | **10** |
| Turvold | **10** | 8 | 8 | 7 | 8 | 8 | 7 | 9 | 4 | 5 | 3 | 4 |
| Rathalos Blademaster | 9 | 8 | **10** | **10** | 9 | 8 | 8 | 8 | 8 | 8 | 3 | 5 |
| Gnishak Verminlord | 9 | 8 | 7 | 6 | **10** | 9 | **10** | **10** | 6 | 9 | 5 | 6 |
| Ultimate Deathknight | 8 | 7 | 9 | 9 | **10** | 5 | **10** | **10** | 6 | 8 | 2 | 7 |
| Hurndig | 6 | 8 | 8 | 9 | 9 | 8 | **10** | 9 | 4 | 8 | 4 | 9 |
| Godseeker Aniri | 9 | 7 | 8 | 8 | 8 | 6 | 8 | 7 | 4 | 7 | 4 | 8 |
| Skullcrown | 4 | 4 | 6 | 8 | 8 | 7 | 8 | 8 | 5 | 5 | 3 | 4 |
| Tagoar | 8 | 7 | 7 | 8 | 8 | 7 | 8 | 7 | 6 | 7 | 2 | 7 |
| Uugo | 7 | 8 | 9 | 9 | 9 | 7 | 9 | 6 | 7 | 7 | 4 | 6 |
| Alure | 4 | 4 | 2 | 6 | 4 | **10** | 8 | 6 | 2 | 3 | 2 | 4 |
| Morag Bronzelock | 8 | 7 | 5 | 6 | 7 | 8 | 7 | 8 | 5 | 5 | 6 | 6 |
| High Khatun | 7 | 6 | 7 | 8 | 7 | 8 | 8 | 8 | 5 | 4 | 4 | 5 |
| Fenax | 4 | 8 | 8 | 6 | 6 | 8 | **10** | 8 | 2 | 4 | 2 | 9 |
| Kael | 7 | 4 | 4 | 6 | 9 | 6 | 8 | 6 | 4 | 6 | 2 | 4 |
| Apothecary | 8 | 6 | 4 | 8 | 8 | 8 | 8 | 7 | 2 | 6 | 4 | 6 |

*"H" columns are Hard-mode dungeons.*

### Ayumilove (1–5 stars) — retrieved 2026-09-17

| Champion | Campaign | Demon Lord | Chimera | Hydra | Spider | Dragon | Fire Knight | Ice Golem | Faction Wars | Arena Off | Arena Def | Minotaur |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Starsage Galathir | 4 | 3 | **5** | 4 | **5** | **5** | 3 | 4 | **5** | 4 | 4 | **5** |
| Ninja | 4 | **5** | **5** | **5** | 2 | **5** | 4 | **5** | **5** | 4 | 3 | **5** |
| Artak | 4 | 4 | 3 | **5** | **5** | 4 | 3 | **5** | **5** | 3 | 3 | 4 |
| Turvold | 4 | **5** | 4 | 2 | 3 | **5** | **5** | **5** | **5** | **5** | **5** | **5** |
| Rathalos Blademaster | **5** | **5** | 4 | **5** | **5** | 4 | 3 | 4 | **5** | 3 | 3 | **5** |
| Gnishak Verminlord | **5** | **5** | 4 | **5** | 3 | **5** | 4 | **5** | **5** | **5** | 4 | 4 |
| Ultimate Deathknight | 4 | 4 | 3 | **5** | **5** | **5** | 4 | **5** | **5** | **5** | **5** | **5** |
| Hurndig | **5** | 3 | 4 | 4 | **5** | **5** | 4 | **5** | **5** | **5** | 3 | **5** |
| Godseeker Aniri | **5** | 4 | 3 | 4 | 4 | 4 | 4 | 4 | **5** | **5** | **5** | 4 |
| Skullcrown | **5** | 2 | 2 | 3 | 4 | 4 | 3 | 4 | 4 | **5** | **5** | **5** |
| Tagoar | 3 | 4 | 3 | 4 | 2 | 3 | 3 | 4 | 4 | 2 | 3 | 3 |
| Uugo | **5** | **5** | 4 | **5** | 4 | **5** | 3 | **5** | **5** | **5** | 4 | **5** |
| Alure | 3 | 2 | 2 | **1** | 4 | 2 | **5** | 4 | **5** | 3 | 3 | **5** |
| Morag Bronzelock | 4 | 4 | 3 | 3 | 3 | 3 | 4 | 3 | 3 | 4 | 3 | 3 |
| High Khatun | 4 | 4 | 3 | 2 | 4 | 4 | 3 | 4 | **5** | 4 | 4 | 4 |
| Fenax | 3 | 4 | 4 | 4 | 2 | 3 | 3 | **5** | 4 | **5** | 4 | 4 |
| Kael | **5** | **5** | 2 | 2 | 4 | **5** | 2 | 4 | **5** | **5** | **5** | **5** |
| Apothecary | 4 | **5** | 3 | 2 | **5** | **5** | **5** | **5** | **5** | **5** | **5** | **5** |

### Where the two scales disagree most
| Champion | HellHades | Ayumilove | Read |
|---|---|---|---|
| **Alure** | Fire Knight **10**, everything else 2–8 | Fire Knight 5/5, FW 5/5, Minotaur 5/5, Dragon **2**/5, Hydra **1**/5 | **Consistent — a specialist, not a generalist** |
| **Artak** | Campaign-adjacent dungeon work **10** | Campaign **4**/5, below six champions at 5/5 | Recommended as farmer on **gear-cost** grounds, not rating grounds |
| **Tagoar** | 7–8 across PvE | Spider **2**/5, Arena Off **2**/5 | HellHades values the support kit; Ayumilove values output |

### HellHades Arena roles
Galathir: cleanser, reviver, speed-manipulator · Ninja: crowd-control, damage-dealer · Artak:
damage-dealer, debuffer · Turvold: damage-dealer · Rathalos: damage-dealer · Gnishak:
damage-dealer · UDK: crowd-control, damage-absorption · Hurndig: damage-dealer, debuffer,
speed-manipulator · Aniri: healer, reviver · Skullcrown: damage-dealer · Tagoar: reviver,
speed-manipulator · Uugo: debuffer, reviver · Alure: crowd-control, debuffer · Morag:
damage-absorption, damage-dealer · High Khatun: speed-manipulator · Fenax: damage-dealer,
debuffer · Kael: damage-dealer · Apothecary: healer, speed-manipulator

---

## Auras

**Only the leader's aura applies.** Swapping leader per content is free stats.

| Champion | Aura | Scope |
|---|---|---|
| **Starsage Galathir** | **+80 Ally RES** | **All battles** |
| **Gnishak Verminlord** | **+30% Ally ATK** | **All battles** |
| **Ultimate Deathknight** | **+30% Ally DEF** | **All battles** |
| **Tagoar** | **+25% Ally HP** | **All battles** |
| **High Khatun** | **+19% Ally SPD** | **All battles** |
| Kael | +15% Ally HP | All battles |
| Turvold | **+42% Ally ATK** | **Faction Crypts only** |
| Alure | **+50 Ally ACC** | **Faction Crypts only** |
| Hurndig | +35% Ally ATK | **Arena only** |
| Skullcrown | +23% Ally SPD | **Arena only** |
| Rathalos Blademaster | +30% Ally ATK | **Dungeons only** |
| Apothecary | +21% Ally DEF | **Dungeons only** |
| Morag Bronzelock | **None** | — |
| Ninja · Artak · Uugo · Godseeker Aniri · Fenax | **No aura listed in the pack** | — |

*"No aura listed" is strong evidence of no aura, but the pack does not assert its absence.*

---

## Tome costs, book value and book priority

**Tome costs are counted from Ayumilove's skill-level lists.** Where Ayumilove's page header
disagrees with its own skill list, both are shown and **the skill list is trusted**.

| Champion | Tome rarity | Cost to max | Header says | HellHades book value | Book priority |
|---|---|---|---|---|---|
| **Starsage Galathir** | **Mythical** | **10** | 10 | **10/10** | **A2** |
| Ninja | Legendary | **13** | 13 | 10/10 | A1, A2, A3 |
| Artak | Legendary | **12** | 12 | 10/10 | A1, A2, A3 |
| Turvold | Legendary | **11** | 11 | 10/10 | A1, A2, A3 |
| Rathalos Blademaster | Legendary | **12** | 12 | 10/10 | A2, A3 |
| Gnishak Verminlord | Legendary | **12** | 12 | 10/10 | A2, A3 |
| Ultimate Deathknight | Legendary | **10** | 10 | 9/10 | A2, A3 |
| Hurndig | Legendary | **15** | 15 | 9/10 | A1, A2, A3 |
| Godseeker Aniri | Epic | **17** | ⚠️ 9 | 10/10 | A2, A3 |
| Skullcrown | Epic | **12** | 12 | 8/10 | A2 |
| Tagoar | Epic | **10** | 10 | 10/10 | A2, A3 |
| Uugo | Epic | **16** | 16 | 10/10 | A2, A3 |
| Alure | Epic | **12** | ⚠️ 14 | **4/10** | A2, A3 |
| Morag Bronzelock | Epic | **9** | ⚠️ 11 | 10/10 | A2, A3 |
| High Khatun | Epic | **11** | 11 | 8/10 | A2, A3 |
| Fenax | Epic | **13** | 13 | 7/10 | A1, A2 |
| Kael | Rare | **14** | 14 | 10/10 | A2, A3 |
| Apothecary | Rare | **10** | 10 | 10/10 | A2, A3 |

**Totals to max everything owned:** 24 Rare · ~100 Epic · **85 Legendary** · 10 Mythical.
**You hold 26 / 110 / 12 / 0.** Legendary tomes are the bottleneck; Mythical tomes you have
none of.

---

## Gear and stat priority

From each champion's HellHades page, with Ayumilove as a second opinion.

| Champion | PvE stats | PvE sets |
|---|---|---|
| **Galathir (base)** | **RES, SPD, HP%, DEF%** | Speed, Protection, Relentless |
| Ninja | SPD, ACC, C.RATE, C.DMG, ATK% | Savage/Lethal, Merciless, Perception, Speed, Cruel |
| Artak | SPD, ACC, HP%, C.RATE, C.DMG | Perception, Immortal, Relentless, Speed, **Toxic**, Regen |
| Turvold | SPD, C.RATE, C.DMG, HP%, ATK% | Lifesteal, Speed, Cruel |
| Rathalos | ATK%, SPD, C.RATE, C.DMG | Savage/Lethal, Cruel, Fatal, Crit Damage |
| Gnishak | ACC, ATK, SPD, HP | Perception, Cruel, Speed, Fatal, Regen, Relentless |
| Ultimate Deathknight | ACC, SPD, DEF, HP, RES | Regen, Reflex, Relentless, Perception, **Toxic** |
| Hurndig | ACC, SPD, C.RATE, C.DMG, ATK% | Savage, Cruel, Swift Parry, Stun, Relentless, Speed |
| Godseeker Aniri | SPD, HP%, DEF% | Speed, Defence, Immortal, Regeneration |
| Skullcrown | SPD, C.RATE, C.DMG, ACC, ATK% | Stun, Cruel, Savage/Lethal, Merciless, Retaliation |
| Tagoar | HP%, SPD, DEF%, RES | Regeneration, Immortal, Guardian, Bolster |
| Uugo | SPD, ACC, HP%, DEF% | Speed, Perception, Reflex, Impulse, Feral |
| Alure | **ACC, C.RATE, HP%, SPD** | Lifesteal, Speed, Accuracy, Perception, Crit Rate |
| Morag Bronzelock | C.RATE, C.DMG, **DEF%**, SPD | Protection, Savage/Lethal, Defiant, Merciless |
| High Khatun | SPD, ACC, DEF%, HP% | Speed, Accuracy, Perception, Relentless |
| Fenax | ACC, SPD, C.RATE, C.DMG, HP%, ATK% | Savage, Cruel, Speed, Accuracy |
| Kael | ACC, SPD, ATK%, C.RATE, C.DMG | **Lifesteal**, Speed, Perception, Cruel |
| Apothecary | SPD, HP%, DEF%, C.RATE | Speed, Relentless, Righteous, Divine Speed |

> **Early-gear reality (HellHades progression guide):** an early account lives on **Speed,
> Perception and Lifesteal in 3–5★ gear**. Savage, Cruel, Merciless, Relentless, Protection and
> Stoneskin come from **dungeon stage 16+ or Hydra** and are month 2–4 targets, not week 1.
> Boots always want SPD; gloves and chest want HP%/DEF% on supports and C.RATE/C.DMG on damage
> dealers.

---

## Masteries

### The Warmaster / Giant Slayer rule
**HellHades' Clan Boss guide: if the champion's A1 hits once or twice → Warmaster. Three or
four hits → Giant Slayer.**

| Capstone | Champions |
|---|---|
| **Giant Slayer** | **Apothecary · Alure · Gnishak** — all 3-hit A1s |
| **Warmaster** | Everyone else, **including Kael — his 4-hit skill is the A3, not the A1** |

Turvold's A1 hits twice → **Warmaster**. HellHades' own Turvold Clan Boss presets confirm it.

### 🚨 Masteries that break a speed-tuned Clan Boss team
**Rapid Response · Arcane Celerity · Cycle of Magic** — all named by HellHades' speed-tune
article. The pack adds: **Lasting Gifts can push a buff-heavy team over the 10-buff cap.**

This only matters once you are actually running a tuned team. An untuned early speed team
(Apothecary / High Khatun boosting) does not care.

### Preset to copy first, per champion
Full node lists are in `claude-web/02_BUILDS_MASTERIES_TOMES.md`.

| Champion | HellHades preset |
|---|---|
| Starsage Galathir | **Base Form** |
| Ultimate Deathknight | **General PvE** → *Solo Drag & Ice Golem* later, with Toxic |
| Artak | **Solo Farm Build** for campaign · **General PVE** for dungeons |
| Ninja | **Standard PvE** → *Boss Killer* |
| Rathalos Blademaster | **General PVE** |
| Uugo | **Standard PvE** |
| High Khatun | **Standard PvE** |
| Alure | **Fire Knight + FW** (ends in Giant Slayer) |
| Apothecary | **All Round PvE** · *Clan Boss* preset for Giant Slayer |
| Gnishak Verminlord | **Nuker** → *Solo Build* |
| Godseeker Aniri | **General PvE / Reviver** |
| Tagoar | **Clan Boss / General PVE** |
| Fenax | **Standard PvE** |
| Turvold | **PVP Nuker** |
| Skullcrown | **Campaign Farmer / PVP Blender** |
| Hurndig | **Campaign Farmer** |
| Morag Bronzelock | **Nuker** |
| Kael | **General PvE** |

---

## Per-champion notes

Cooldowns are shown **base → fully booked**. Full skill text is in
[`claude-web/01_ROSTER_DATA.md`](claude-web/01_ROSTER_DATA.md).

### Starsage Galathir — Mythical · Force · High Elves · Support
**Aura: +80 Ally RES in all battles.** Starts at **rank 6 — zero feeders.**

**Two forms, with Metamorph (CD 4) switching between them and granting an Extra Turn.**

**Base form** — *Astral Storm* (AoE, fills all ally TM 10%, +5% more for allies carrying his
buffs) · *Stellar Embryo* **(4 → 3)** removes **all** debuffs from all allies, heals 25% of
**his own** MAX HP, fills TM 15%, applies **Block Debuffs** 2 turns · *Part the Veil*
**(6 → 4)** revives **all** dead allies at 50% HP and 50% TM, applies **Perfect Veil** to all
allies except himself · *Eternal Beyonder* **[Passive, CD 3]** −5% damage taken per 100 RES
(caps 25%); survives a fatal hit at 1 HP then equalises his HP to the team average.

**Alternate form** — *Uncreation Beam* (AoE, −10% enemy TM, −5% more under his Block Active
Skills / Decrease RES / Stun) · *Eclipse Rend* **(4 → 3)** removes **all buffs** from all
enemies then applies **Block Active Skills** 2 turns; does not trigger counterattacks ·
*Dark Nebula* **(4)** **+50% Increase ACC** on all allies, **50% Decrease RES** and **Stun**
on all enemies · *Starlight Reflect* **[Passive, CD 3]** **increases his ACC by 75% of his
RES** when placing debuffs; can reflect CC debuffs back at a higher-ACC enemy.

> **Build RES, not ACC.** The alternate form's passive converts RES into ACC, and his aura
> gives the team +80 RES. Stat priority **RES, SPD, HP%, DEF%**.

### Ninja — Legendary · Magic · Shadowkin · Attack
*Shatterbolt* (A1) 45% → 60% **Decrease DEF** 2 turns; **+15% own TM vs Bosses** ·
*Hailburn* **(4 → 3)** 3 random hits, 75% **HP Burn** each, **places Perfect Veil on himself**,
and **vs Bosses instantly activates all HP Burns** · *Cyan Slash* **(5 → 4)** AoE 75%
**Freeze**; vs a Boss hits only the Boss, **ignores 50% DEF**, and cuts Hailburn's cooldown by
1 · *Escalation* **[Passive]** +10% ATK (cap 100%) and +5% C.DMG (cap 25%) each time one enemy
is hit by all three actives in a Round — **+20% / +10% vs Bosses**.

⚠️ **Perfect Veil on himself is a Chimera hazard** — see the Ram form note in
`docs/plan/12-teams-by-content.md`.

### Artak — Legendary · Magic · Orcs · HP
**All three skills are AoE and all damage scales off HP** (0.1 / 0.25 / 0.14 × HP).
*Chaosrazor* (A1) 35% to extend HP Burns by 1 turn · *Dogs Of War* **(4 → 3)** **instantly
activates all HP Burns before attacking**, then 75% **50% Decrease ATK** · *Purifyre*
**(4 → 3)** AoE ×2, 75% **HP Burn**, restores 10% of his destroyed MAX HP per burn placed
**and heals 5% MAX HP per burn blocked or resisted** · *Burning Blood* **[Passive]** each burn
activation destroys 5% of his MAX HP (caps 50%) and grants **+1% DMG/C.DMG/DEF and +2 SPD/RES
per 1% destroyed**.

### Turvold — Legendary · **Void** · Barbarians · Attack
**Aura: +42% Ally ATK in Faction Crypts.**
*Crackling Blade* (A1) 1 enemy ×2, 55% **25% Weaken** · *Ancestor's Power* **(4 → 3)** self
**+50% ATK, +30% C.RATE, +30% SPD** 2 turns, **then an Extra Turn** · *Juggernaut* **(5 → 3)**
1 enemy ×2, **damage scales with the number of buffs on him**; **kill resets the cooldown**.
No passive.

### Rathalos Blademaster — Legendary · Force · Banner Lords · Attack
**Aura: +30% Ally ATK in Dungeons.**
*Spirit Thrust* (A1) 50% → 60% **Decrease DEF**; **vs a Boss it cannot be resisted** ·
*Spirit Step Slash* **(4 → 3)** every second use in a Round hits all enemies; ignores 25% DEF —
**vs a Boss ignores 100% of DEF** · *Overhead Slash* **(4 → 3)** AoE; self **+30% C.DMG and
+30% SPD** first · *Rathalos Mastery* **[Passive]** **+50% damage vs [HP Burn] targets**,
**−25% damage taken from them**, and **every fifth skill used deals 200% more damage**.

> Ayumilove's own note: pair him with **Counterattack** and **Ally Joint Attack** providers, or
> **Retaliation** set / **Retribution** mastery, to reach the fifth-skill trigger faster.
> **Relentless is called out as the better alternative to Retaliation.**

### Gnishak Verminlord — Legendary · Force · Skinwalkers · Attack
**Aura: +30% Ally ATK in all battles.**
*Pestilent Censer* (A1) **3 random hits**, 40% **Bomb** each; **Bombs deal double damage vs
enemies with ≥200,000 MAX HP** · *Verminlord's Command* **(4 → 3)** AoE 75% **50% Decrease
ATK**, plus 75% to cut all Bomb countdowns by 1 and extend all Poisons by 1 · *Unclean Banquet*
**(5 → 4)** AoE 75% to place **2 Bombs** each, **then an Extra Turn**; same 200k double-damage
clause · *Rat Plague* **[Passive]** every Bomb that detonates or is removed places **two 5%
Poisons, protected**.

### Ultimate Deathknight — Legendary · Force · Undead Hordes · Defense
**Aura: +30% Ally DEF in all battles.** All damage scales off **DEF**.
*Heckler of Legends* (A1) 30% **Provoke** — **55% vs Legendary champions** · *Rats Off To Ya*
**(4 → 3)** AoE **80% → 50% Decrease ATK**, plus 80% **Fear** on Legendary champions ·
*Get Comfy Everyone* **(5 → 3)** **Shield (2.5 × DEF) + 15% Continuous Heal** on all allies ·
*Too Awesome To Die* **[Passive]** **100% chance to completely block 1 hit aimed at an ally**
and take it himself — **50% if the attacker is a Boss, and never against AoE**; also **heals
him 20% of any heal an enemy receives** · *Didn't Need 'Em* **[Passive]** **+10% HP, DEF and
SPD per dead ally**.

### Hurndig — Legendary · Magic · Dwarves · Attack
**Aura: +35% Ally ATK in Arena.**
*Lethal Lust* (A1) **kill → Extra Turn and Stasis Strike cooldown −2** · *Arcane Tempest*
**(4 → 3)** AoE 75% **60% Decrease DEF + 50% Decrease ACC** · *Stasis Strike* **(6 → 4)**
**fully depletes one Turn Meter**; hits all enemies if the first attack crits, with 75%
**25% Weaken**, and places **HP Burn** on enemies whose Turn Meter is **below 30%** ·
*Staid* **[Passive]** +10% own TM per hit taken, +20% when an ally dies.

### Godseeker Aniri — Epic · **Void** · Sacred Order · Defense
All damage scales off **DEF**.
*Blade of Blessings* (A1) heals the **lowest-HP ally** 5% of **their** MAX HP; **cannot heal
herself** · *Quest for Meaning* **(4 → 3)** AoE, heals all allies 15% of **their** MAX HP,
**−1 turn on all enemy buffs, +1 turn on all ally buffs** · *Rise of Glory* **(7 → 4)** revives
one ally at 50% HP, fills their TM 50%, **and resets all of their cooldowns** ·
*Guardian Angel* **[Passive, 7 → 4]** +10% healing received by allies; **pre-empts a fatal hit
with [Revive on Death]**.

### Skullcrown — Epic · **Void** · Knights Revenant · Attack
**Aura: +23% Ally SPD in Arena.**
*Wave of Souls* (A1) **AoE**, **extra hit vs targets above 50% HP** · *Corrupting Touch*
**(4 → 3)** AoE 50% **25% Weaken** · *Resilient* **[Passive, 6 → 4]** **Unkillable** 1 turn
whenever her HP drops below 20% · *From Beyond* **[Passive, 8 → 6]** self-revive at 30% HP —
**only when Sinesha is on the team.** You do not own Sinesha, so treat it as inactive.

### Tagoar — Epic · Magic · Orcs · Support
**Aura: +25% Ally HP in all battles.**
*Da Magic Stick* (A1) 1 enemy ×2, places **60% Increase DEF** on the **lowest-current-HP ally**
· *Charge Cant* **(5 → 3)** AoE, **30% Increase SPD on all allies**, heals all allies 15% of
**his** MAX HP · *Rise and Fight* **(7 → 5)** revives all dead allies at 30% HP and **Shields
all allies for 20% of his MAX HP** · *Aid the Feeble* **[Passive]** allies at ≤50% HP take
**10% less damage**.

### Uugo — Epic · Magic · Ogryn Tribes · Support
*Black Hand* (A1) 35% **Leech**, +5% per living enemy · *Maelstrom Wrack* **(4 → 3)** AoE
**75% → 60% Decrease DEF** **and** 50% **Block Buffs** (+5% per living enemy) ·
*Uugo's Brew* **(6 → 4)** removes **all Heal Reduction**, then 1 random debuff, then heals all
allies 20% of **her** MAX HP; **if all allies are dead, revives them at 50% HP with 50% TM** ·
*Final Spite* **[Passive, CD 5]** self **30% Increase SPD + Block Damage** when her last living
ally dies.

### Alure — Epic · Magic · Demonspawn · Attack
**Aura: +50 Ally ACC in Faction Crypts.**
*Psychic Whip* (A1) **3 random hits, −25% Turn Meter on each CRITICAL hit** ·
*Temptation* **(4 → 3)** AoE ×2, each hit 30% → **30% Decrease DEF** 1 turn; applies **Sleep**
to targets already under Decrease DEF · *Hellish Blaze* **(6)** 1 enemy, +30% crit chance,
**ignores 50% DEF**. No passive.

> **100% C.RATE is the gate** — Psychic Whip only strips Turn Meter on a **critical** hit.
> HellHades book value **4/10**: her turn-meter control works unbooked.

### Morag Bronzelock — Epic · Spirit · Dwarves · Defense
**No aura.** All damage scales off **DEF** (1.85 / 3.9 × DEF).
*Raw Iron Slab* (A1) 1 enemy ×2, **each hit ignores Shield buffs** · *Outrage* **(4 → 3)** AoE,
**25% Strengthen on all allies** · *Raider Captain* **(6 → 4)** **teams up with 2 random
allies** to attack one enemy using their default skills; **Extra Turn if anything dies** ·
*Test This Might* **[Passive]** **counterattacks when hit while under her own Strengthen**.

### High Khatun — Epic · Spirit · Barbarians · Support
**Aura: +19% Ally SPD in all battles.**
*Imperial Grace* (A1) **25%** → 30% **Decrease SPD** (40% fully booked) · *Rally the Horde*
**(4 → 3)** **fills all ally Turn Meters 15%** and **30% Increase SPD** 2 turns ·
*Shamanic Lightning* **(5 → 4)** AoE, **50% chance to decrease all enemy Turn Meters by 15%**.
No passive.

### Fenax — Epic · Spirit · Sacred Order · Attack
*Put Down* (A1) 1 enemy, **extra hit if the target has any debuffs**, and **enemies killed by
this skill cannot be revived** · *Stern Partner* **(5 → 4)** AoE 75% **Block Buffs** 2 turns;
places **Block Active Skills** 1 turn instead if Block Buffs did not land; cuts Bomb countdowns
when **Tallia** is on the team · *Sow Feebleness* **(6 → 4)** 1 enemy, 60% **60% Decrease DEF +
30% Decrease SPD**. No passive.

> **The block-revive is a kill clause, not a debuff** — which is why it needs **no Accuracy**.
> HellHades **Ice Golem 10** and Ayumilove **5/5 Ice Golem**, the highest Ice Golem rating on
> the roster alongside Artak, Gnishak, Hurndig and UDK.

### Kael — Rare · Magic · Dark Elves · Attack
**Aura: +15% Ally HP in all battles.**
*Dark Bolt* (A1) **80%** → 2.5% **Poison** · *Acid Rain* **(3)** AoE, +15% crit chance,
**fills his own Turn Meter 25% per enemy killed** · *Disintegrate* **(5 → 4)** **4 random
hits**, 40% → **5% Poison** each.

### Apothecary — Rare · Magic · High Elves · Support
**Aura: +21% Ally DEF in Dungeons.**
*Scatterbolt* (A1) **3 random hits** — three Giant Slayer chances per turn ·
*Soothing Chant* **(3 → 2)** heals one ally **35% of their MAX HP**, **52.5% on a critical
heal** · *Boon of Speed* **(5 → 3)** **30% Increase SPD on all allies** and **fills all ally
Turn Meters 15%**.
