# 10 — Roster Analysis

> **🔄 TIER 3 — ANALYSIS, NOT SOURCE DATA.**
> Reasoning on top of `docs/research/` (tiers 1–2). **Regenerate this file wholesale whenever
> the roster changes — never edit it piecemeal.** Source data lives in
> `docs/research/claude-web/` and must not be changed here.

**Regenerated:** 2026-09-17 from the research pack · **Roster:** 1 Mythical · 7 Legendary ·
8 Epic · 2 Rare

---

## 1. The finding that reorganises everything

**Rarity sets starting rank, and starting rank sets how much food a champion eats.**

| Start rank | Feeders to reach 6★ |
|---|---|
| **6 — Mythical** | **none** |
| 5 — Legendary | 5 rank-5 feeders |
| 4 — Epic | 4 rank-4, then 5 rank-5 |
| 3 — Rare | 3 rank-3, 4 rank-4, then 5 rank-5 |

**Consequence, in the pack's own words:** *"Kael and Apothecary are the most expensive
champions on your account to six-star, which is the opposite of the usual new-account advice
and is entirely because of this roster's rarity mix."*

**Starsage Galathir costs zero feeders. He arrives at rank 6.**

> ⚠️ **This reverses the previous version of this plan**, which put Kael first on the belief
> that Rares are cheap to rank. They are not — they are the most expensive. See
> `docs/research/DATA_CONFLICTS.md §B1`.

**What this means practically:** on most new accounts you build cheap Rares because that is all
you have. **You have eight champions that skip one to three rank-ups entirely.** Building them
is *cheaper*, not more expensive.

---

## 2. The core five

**Starsage Galathir · Ultimate Deathknight · Artak · Ninja · Rathalos Blademaster**

Two reasons, both structural:

**Food cost.** Galathir costs nothing; each Legendary costs five rank-5 feeders. Any Epic adds
four rank-4 feeders on top of that, and a Rare adds three more.

**One gear investment, four modes.** These five carry **Clan Boss, Spider, Dragon and Ice
Golem simultaneously.**

| Role in the core five | Who |
|---|---|
| **Decrease ATK** (AoE 50%) | UDK · Artak |
| **Decrease DEF** (60%) | Ninja · Rathalos — **Rathalos's cannot be resisted against bosses** |
| **HP Burn placement** | Artak (A3) · Ninja (A2) |
| **Burn activation** | Artak (A2) · Ninja (A2, vs bosses) |
| **Sustain** | UDK (Shield + Continuous Heal) · Galathir (cleanse, Block Debuffs, AoE revive, TM fill) |

---

## 3. Genuine strengths

### 3.1 The burn engine is self-contained
Artak and Ninja both **place** HP Burn and both **activate** it; Rathalos gets **+50% damage
and −25% damage taken** against burning targets. Three champions, one closed loop, no external
pieces needed.

This matters beyond damage: **Hydra's Head of Blight casts Poison Cloud, which blocks all
poison damage and turns your attacks into Weak Hits — and HP Burn cancels it.** You own two
answers to a mechanic that hard-counters poison teams.

### 3.2 Sustain and revive depth
Galathir (mass revive, full cleanse, Block Debuffs, AoE heal off his own MAX HP) · Tagoar (mass
revive, AoE Shield, AoE heal, Increase DEF on A1) · Uugo (all-dead revive, AoE heal, cleanse,
**removes all Heal Reduction**) · Aniri (single revive **with full cooldown reset**, plus a
Revive-on-Death pre-empt) · UDK (Shield, Continuous Heal, **blocks a hit aimed at any ally**) ·
Apothecary (heal scaling off the **ally's** HP).

**Uugo's Heal Reduction removal is specifically why HellHades lists her as a Hydra MVP** —
Head of Decay applies it to the whole team.

### 3.3 Galathir's +80 RES aura solves a named Hydra problem
**Head of Mischief steals buffs with high ACC**, and the counter is one champion built to
**355 RES**. Galathir's aura gives **the whole team +80 RES** in every battle, and his own
alternate-form passive converts RES into ACC. The aura and the build point the same way.

### 3.4 Decrease DEF and Decrease ATK are both three deep
**Decrease DEF 60%:** Uugo (AoE) · Hurndig (AoE) · Ninja · Rathalos (unresistable vs bosses) ·
Fenax
**Decrease ATK 50% AoE:** UDK (80% chance) · Artak · Gnishak

Decrease ATK is the **top-priority debuff for Demon Lord** (its A1 and A2 scale off boss ATK)
and **close to mandatory for Ice Golem**.

---

## 4. Genuine weaknesses

### 4.1 Fire Knight — the core five cannot do it
**UDK is rated 5/10 for Fire Knight** — the lowest rating any core-five member has anywhere.
The fight rewards hit *count*, and the core five are single-hit champions.

**The shield scales by stage**, which softens the problem early:

| Stages | Hits needed | Reachable with |
|---|---|---|
| 1–6 | **5** | Apothecary (3) + any two |
| 7–9 | **7** | Apothecary (3) + Alure (3) + one |
| 10–20 | **10** | Apothecary + Alure + Gnishak = 9, plus one 2-hit |
| 21–25 | **12** | Apothecary + Alure + Gnishak + Morag/Tagoar/Turvold |

**Multi-hit A1s owned:** Apothecary 3 · Alure 3 · Gnishak 3 · Tagoar 2 · Turvold 2 · Morag 2.
**Morag's A3 pulls two allies into a joint attack**, stripping extra counters.

**So Fire Knight is not a roster gap — it is a different team.** It needs **Alure, High Khatun
and Apothecary** built, which is build wave 7.

### 4.2 No team-wide Unkillable, Block Damage or Counterattack
- **Unkillable:** Skullcrown only, **self**, below 20% HP
- **Block Damage:** Uugo only, **self**, passive
- **Counterattack:** Morag only, **self**, conditional on her own Strengthen

**This costs you twice.** Standard endgame Clan Boss templates are built on Unkillable
rotations. And **Rathalos explicitly wants Counterattack or Ally Joint Attack providers** to
reach his every-fifth-skill trigger faster — Ayumilove's own note on his page.

**Workarounds you already own:** revive-and-sustain instead of Unkillable; **Retaliation set or
the Retribution mastery** for Rathalos, with **Relentless called out as the better alternative**;
and **Morag's A3 Ally Joint Attack**.

### 4.3 ⚠️ A Chimera trap specific to this roster
> **The Ram form reflects 50% of the damage you deal and ignores 50% DEF against anyone under
> Veil, Perfect Veil or Taunt.**

**Galathir's A3 grants [Perfect Veil] to all allies except himself. Ninja's A2 grants it to
himself.** Both are in the Chimera team. **Do not use Part the Veil or Hailburn going into Ram
form.**

### 4.4 Affinity is Magic-heavy
**Magic ×9 · Force ×4 · Void ×3 · Spirit ×2.** Your three **Void** champions — Turvold,
Godseeker Aniri, Skullcrown — never take an affinity penalty anywhere.

`unverified (search synthesis, 2026-09-17)`: Dragon 25 is Force (bad for Magic) and Ice Golem 25
is Magic (good for your four Force champions, including both Ice Golem soloists). **Verify
before building around it.**

---

## 5. Requirement coverage

| Content | Key requirement | Covered? | By whom |
|---|---|---|---|
| **Campaign farm** | AoE + self-sustain + reliability | ✅ | **Artak** — 3 AoE skills, HP-scaling, HellHades ships a Solo Farm preset |
| **Demon Lord** | **Decrease ATK** first · survive · poisons | ✅ | UDK (80% chance) · Artak · Galathir sustain |
| **Dragon** | **Many poisons** (60% reduction) · cancel Scorch · **no TM tricks** | ✅ | Gnishak (protected poisons) · Kael · core five |
| **Ice Golem** | AoE Dec ATK · cleanse/Block Debuffs · **Block Revive** | ✅ | UDK · Artak · Galathir · **Fenax (IG 10)** |
| **Spider** | HP Burn + activation at 21–25 · CC · spiderling tank | ✅ | **Artak (Spider 10)** · UDK redirect · Rathalos (10) |
| **Fire Knight** | **Multi-hit A1s**, scaling 5→12 by stage | ⚠️ **Different team** | Alure (FK 10) · Apothecary · Gnishak · High Khatun |
| **Arena** | Speed aura · TM control · nuke | ✅ | Galathir 10 · Hurndig 9 · Turvold 9 · Skullcrown 8 |
| **Chimera** | Survive 65 turns · Block Active Skills for Viper | ✅ | **Galathir alt-form Eclipse Rend** · Uugo Block Buffs |
| **Hydra** | HP Burn vs Poison Cloud · Heal Reduction removal · 355 RES | ✅ | Artak/Ninja · **Uugo** · **Galathir aura** |

**Eight of nine are solved by the core five plus Uugo.** Fire Knight needs a separate team, and
that is a scheduling problem, not a roster gap.

---

## 6. Aura selection

**Only the leader's aura applies.** Swapping per content is free.

| Situation | Lead with | Aura |
|---|---|---|
| **General PvE / Clan Boss** | **Ultimate Deathknight** | +30% Ally DEF, all battles |
| **Damage-race dungeons** | **Gnishak Verminlord** | +30% Ally ATK, all battles |
| **Fragile team** | **Tagoar** | +25% Ally HP, all battles |
| **Speed / Fire Knight** | **High Khatun** | +19% Ally SPD, all battles |
| **Hydra / heavy-debuff content** | **Starsage Galathir** | **+80 Ally RES, all battles** |
| **Inside dungeons** | **Rathalos** or **Apothecary** | +30% ATK / +21% DEF, dungeons only |
| **Arena** | **Hurndig** or **Skullcrown** | +35% ATK / +23% SPD, Arena only |
| **Faction Wars** | **Turvold** or **Alure** | **+42% ATK** / **+50 ACC**, Crypts only |

**Morag has no aura.** Ninja, Artak, Uugo, Aniri and Fenax have none listed in the pack.

---

## 7. What to chase in summons

1. **Team-wide Unkillable or Block Damage** — your biggest structural gap
2. **Counterattack or Ally Joint Attack providers** — directly upgrades Rathalos, and helps
   Fire Knight shield-stripping
3. **More 3-hit A1 champions** — Fire Knight
4. **Mythical Tomes** — not a champion, but Galathir needs **10** and you have **0**

**What you do not need:** more Decrease DEF, more revives, more healers, more single-target
damage. **A new Legendary in those categories changes nothing**, and I will say so rather than
manufacture a re-plan.

The pack's promo-code recommendation is relevant here: **FIRESTORM (Sicia Flametongue)** is an
HP Burn activator that slots straight into the Artak/Ninja/Rathalos loop, and **HEARTOFCOLD
(Coldheart)** is the strongest general-purpose Rare for Fire Knight, Spider and boss damage.

---

## 8. Open items

- **Fenax** — now fully researched (Epic · Spirit · Sacred Order · Attack, **Ice Golem 10**)
- **Faction Guardians** — unresearched, and live for you from the **day-30 High Khatun
  duplicate** login reward
- **Arena** — the team is ratings-derived and unvalidated against the live meta
- **Hydra Head-of-Torment vs Perfect Veil** — needs checking against what Galathir's A3 does
