# RSLPlan — RAID: Shadow Legends Progression System

A researched, prioritised progression plan for one specific account, plus (later) a tracker
website to keep it current as the roster changes.

**Account:** fresh starter · 1 Mythical · 7 Legendary · 8 Epic · 2 Rare · 26/110/12 tomes
**Compiled:** 2026-09-17 · **Game version:** patch line 11.7x

---

## ⚡ Start here

**If you read three files, read these:**

1. **[`docs/plan/14-day-1-30-plan.md`](docs/plan/14-day-1-30-plan.md)** — what to do, starting today
2. **[`docs/plan/11-build-priority.md`](docs/plan/11-build-priority.md)** — which six champions to build, and in what order
3. **[`docs/plan/12-teams-by-content.md`](docs/plan/12-teams-by-content.md)** — teams for all nine content types

Then answer **[`USER_QUESTION.md`](USER_QUESTION.md)** — 14 questions, none of them blocking,
each with a stated default assumption.

---

## The headline finding

> **You are not champion-limited. You are resource-limited.**

Eight of the nine content types you asked about are already *roster-solved* — you own the
mechanical answers. What you lack is gear, levels, silver, mastery scrolls and account level.

**So the plan is: build a resource engine first, then spend its output on exactly six
champions.** Not eighteen.

| # | Champion | Role | Start |
|---|---|---|---|
| 1 | **Kael** | Campaign farmer — generates resources | Day 1 |
| 2 | **Apothecary** | Healer / speed — 10 Rare Tomes for a full max | Day 3 |
| 3 | **Ultimate Deathknight** | Survivability anchor | Day 7 |
| 4 | **Uugo** | 60% AoE Decrease DEF — your damage multiplier | Day 12 |
| 5 | **Artak** | Damage + your only AoE HP Burn | Day 16 |
| 6 | **Tagoar** | AoE Increase SPD — unlocks Clan Boss speed tunes | Day 22 |

---

## Repository layout

```
docs/research/    Facts about the game. Changes only when the game changes.
  00-methodology-and-sources.md    How this was researched, and what that costs you
  01-game-state-2026.md            Patch 11.7x, Mythical rarity, Primal Shards, Relics
  02-champion-dossiers.md          All 18 champions: kits, builds, verdicts
  03-content-mechanics.md          What each of the 9 fights actually demands
  04-gear-masteries-economy.md     Sets, masteries, energy/silver/shards, Great Hall

docs/plan/        Applies the research to THIS roster. Changes when the roster changes.
  10-roster-analysis.md            Strengths, gaps, affinity problems, aura selection
  11-build-priority.md             The build queue, with reasoning
  12-teams-by-content.md           Teams for all 9 content types, now → endgame
  13-tome-allocation.md            26 Rare / 110 Epic / 12 Legendary — where they go
  14-day-1-30-plan.md              The 30-day plan
  15-day-31-plus.md                Day 31 → 180

docs/website/     Spec for the tracker app (not built yet)
data/roster.json  Machine-readable roster — single source of truth
```

**The research/plan split is deliberate.** Research describes *requirements* ("Fire Knight needs
multi-hit A1 attacks"). Plan describes *assignments* ("these four champions supply 11 of the 12
hits"). When you pull a new champion, only the plan layer gets re-derived.

---

## Three corrections to the roster as supplied

Research contradicted three things in the champion list. Two of them change team building:

| You said | Actually |
|---|---|
| **Ninja** = Nintendo Switch collab | **Tyler "Ninja" Blevins** collab. **Shadowkin · Magic · Attack** |
| **Artak** = Banner Lords | **Orcs · Magic · HP.** The Banner Lord you own is **Rathalos Blademaster** |
| **High Kathun** | **High Khatun**, faction **Barbarians** |

Also: **Alure is Demonspawn**, not Dark Elves.

---

## Known limitations — read before acting

**Source access:** `hellhades.com` and `ayumilove.net` — the two sources you named — are
**blocked by network egress policy** in this environment, as are all other RAID data sites
tested. Research was done via **search synthesis**, which aggregates those same sites
indirectly. Mechanics and evaluations came through well. **Exact skill multipliers and base
stats are the weak spot** and are tagged accordingly.

**Confidence grading** is applied throughout:
`[CONFIRMED]` · `[LIKELY]` · `[UNCERTAIN]` · `[NOT CONFIRMED]`

> **🚨 Before any irreversible spend** — a Legendary Tome, a 1,650-scroll mastery set, feeding a
> champion — **open the champion in-game and read the actual skill text.** Patches 10.00 and
> 10.60 both re-balanced champions. The in-game client is always correct; every website,
> **including this one**, is a lagging indicator.

**The biggest open gap:** **Fenax** is unresearched, and **Starsage Galathir** — your best
champion — has the thinnest data on the roster. Both are flagged rather than guessed at.

---

## Keeping it current

Tell me when you pull a champion, hit a milestone, or verify something in-game. I will:
1. Research the champion properly rather than relying on memory
2. Check it against the known gaps in `docs/plan/10-roster-analysis.md`
3. Re-derive only the affected sections
4. **Tell you plainly whether it changes the plan — most pulls do not**
5. Log it in `CHANGELOG.md`

---

## Website status

**Not built.** Spec is in `docs/website/`; stack is Next.js + TypeScript + Tailwind on Vercel.
**Waiting on your go-ahead**, per your instruction to research first and code second.
