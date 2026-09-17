# RSLPlan — RAID: Shadow Legends Progression System

A researched, prioritised progression plan for one specific account, plus (later) a tracker
website to keep it current as the roster changes.

**Account:** level **26**, no content cleared · 1 Mythical · 7 Legendary · 8 Epic · 2 Rare
**Banked:** 94,667 energy · 58M silver · 4,760 gems · 1,500 Mystery Shards · 26/110/12/**0** tomes
**Primary source:** `docs/research/claude-web/` — retrieved **2026-09-17** with direct access
to hellhades.com and ayumilove.net

---

## ⚡ Start here

1. **[`docs/plan/14-day-1-30-plan.md`](docs/plan/14-day-1-30-plan.md)** — what to do, starting today
2. **[`docs/plan/09-account-state.md`](docs/plan/09-account-state.md)** — the account, its banked
   resources, and the decisions taken on your behalf
3. **[`docs/plan/11-build-priority.md`](docs/plan/11-build-priority.md)** — who to build, in order
4. **[`docs/plan/12-teams-by-content.md`](docs/plan/12-teams-by-content.md)** — teams for all nine content types
5. **[`docs/plan/13-tome-allocation.md`](docs/plan/13-tome-allocation.md)** — **tome upgrades are random; only ever full-max**

---

## This is not a fresh account

It is a **purchased daily-login farm account**: years of banked rewards, **zero content
cleared**. So the usual new-account advice inverts.

| Normal new account | This account |
|---|---|
| Ration energy | **94,667 energy** — ~11,800 Brutal 12-3 runs |
| Ration silver, don't upgrade past level 8 | **58M silver** — upgrade freely |
| Build one champion at a time | **Build six in parallel** |
| Buy Market fodder, hoard Mystery Shards | **1,500 Mystery Shards *are* the fodder** |
| Grind Minotaur for masteries | **Already bought for Galathir, Artak and Ninja**; 4,760 gems buys five more |

**The constraints are account level (26), champion ranks, gear quality — and clan size.**

> ⚠️ **The one thing that shapes the plan most:** **skill tome upgrades are random** on this
> client, so the tome plan only ever spends a **full max** — never a partial spend toward a
> named skill.
>
> ✅ **All five in-game checks are answered.** Tier 6 masteries need 6★, Dragon 25 is Force,
> Ice Golem 25 is Magic, Faction Guardian Chambers need two copies of the same champion, and
> **Chimera is available** — so Relics are reachable.

---

## The finding that drives everything

> **Rarity sets starting rank, and starting rank sets how much food a champion eats.**

| Start rank | Feeders to 6★ |
|---|---|
| **6 — Mythical** | **none** |
| 5 — Legendary | 5 rank-5 |
| 4 — Epic | 4 rank-4, then 5 rank-5 |
| 3 — Rare | 3 rank-3, 4 rank-4, then 5 rank-5 |

**Kael and Apothecary are the most expensive champions on this account to six-star. Starsage
Galathir is free — he arrives at rank 6.**

This is the opposite of standard new-account advice, and it is entirely a consequence of this
roster's rarity mix. **It is also why an earlier version of this plan was wrong** — see
`docs/research/DATA_CONFLICTS.md §B1`.

### The core five
**Starsage Galathir · Ultimate Deathknight · Artak · Ninja · Rathalos Blademaster**

They carry **Clan Boss, Spider, Dragon and Ice Golem simultaneously**, so one gear investment
serves four modes — and they are the cheapest champions on the roster to rank.

| # | Champion | Target | Why |
|---|---|---|---|
| 1 | **Starsage Galathir** | Level 60 | **Zero food.** Ayumilove SS · HellHades 10 overall |
| 2 | **Artak** | 6★, 60 | **Campaign farmer** — HP-scaling, 3 AoE skills, dedicated HellHades preset |
| 3 | **Ultimate Deathknight** | 50 → 60 | **AoE 50% Decrease ATK at 80%** + team shields |
| 4 | **Ninja** | 60 | Demon Lord **10** · Chimera **10** · Hydra **10** |
| 5 | **Rathalos Blademaster** | 60 | Completes the burn core; **ignores 100% of boss DEF** |
| 6 | **Uugo** | 50–60 | **Hydra MVP** — removes all Heal Reduction |

---

## Repository layout

```
docs/research/claude-web/        PRIMARY SOURCE — the research pack. Refresh, do not edit.
docs/research/SOURCES.md         Every URL, retrieval date, staleness stamp, refresh recipes.
docs/research/DATA_CONFLICTS.md  Pack vs earlier research. 4 open decisions.
docs/research/02, 03             Tier 1 + 2 working index over the pack.
docs/research/00, 01, 04         SECONDARY — earlier search-synthesis pass, marked inline.
docs/plan/                       TIER 3 — regenerated wholesale when the roster changes.
docs/website/                    Spec, data model, tech stack for the tracker.
data/roster.json                 Tier-1 data. Every rating carries source, scale and date.
```

### The tier rule
| Tier | What | How it changes |
|---|---|---|
| **1 — data** | Identity, auras, skills, tome costs, ratings | **Only via a data refresh** |
| **2 — mechanics** | Boss mechanics | **Only via a data refresh** |
| **3 — analysis** | Teams, build order, tome plan, 30-day plan | **Regenerated wholesale — never patched** |

---

## Two rating scales, never merged

**HellHades 0–10** and **Ayumilove 1–5 stars** are independent judgements that genuinely
disagree — Alure is HellHades **10** for Fire Knight and Ayumilove **1/5** for Hydra.

**Both are stored with their source, scale and retrieval date. Never average them.** If a UI
needs one sort order, compute it at render time and label it derived.

---

## Corrections to the roster as originally supplied

| Supplied | Actually |
|---|---|
| Ninja = Nintendo Switch collab | **Tyler "Ninja" Blevins** collab · Shadowkin · Magic · Attack |
| Artak = Banner Lords | **Orcs · Magic · HP.** The Banner Lord is **Rathalos Blademaster** |
| High Kathun | **High Khatun** · Barbarians · Spirit |
| Alure = Dark Elves | **Demonspawn** |
| Fenax = unknown | **Epic · Spirit · Sacred Order · Attack** — and **HellHades Ice Golem 10** |

---

## 🚨 Before you spend anything irreversible

**Open the champion in-game and read the skill text.** The pack's HellHades champion pages are
stamped **2026-04-06** (Skullcrown 2026-08-24); its Ayumilove pages **2026-09-16**. Every
website, **including this one**, is a lagging indicator.

Three things are irreversible and worth ten seconds of checking first: **Legendary tome
spends**, **feeding a champion**, and **Great Hall upgrades**.

---

## Attribution

Champion data, ratings, mastery presets and boss mechanics come from
**[HellHades](https://hellhades.com/)** and **[Ayumilove](https://ayumilove.net/)**.

**The refresh recipes in `SOURCES.md` are for private use only.** Any public site built from
this repository **must not scrape or hotlink their endpoints**, must ship cached values
**clearly attributed and dated**, and **must credit both sources**.

---

## Website

**Built and deployable.** Next.js 15 (App Router) + TypeScript (strict) + Tailwind v4, static
export of 26 pages, no backend.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm check      # typecheck + data tests + security audit + production build
pnpm audit      # high/critical advisories only
```

> **Dependency versions must be checked against the registry, never pinned from memory.** The
> first deploy of this app was rejected by Vercel because `next@15.5.4` carried four critical
> advisories. `pnpm check` now runs the audit so that fails locally instead of at deploy time.

**Deploy:** point Vercel at this repo. It auto-detects Next.js; no environment variables are
needed because nothing secret exists and nothing is fetched at runtime.

| Page | What it does |
|---|---|
| **/** | "What do I do right now?" — next plan steps, resources, the two rules that shape everything |
| **/roster** | All 18 champions, filterable, **both rating scales shown separately** |
| **/roster/[id]** | Per-champion: aura, food cost, tome cost, masteries, ratings by content, teams they appear in, and your build tracker |
| **/teams** | Nine content types with **readiness computed from your build state** and the blocker named |
| **/plan** | 33 steps across five phases, ticked in `localStorage` |
| **/tomes** | Allocation that is **full-max only**, because tome upgrades are random |

### What the data tests guard
`pnpm test` runs 21 checks over the data, not the UI — because the failure that would actually
hurt is the site confidently showing wrong advice:

- Every rating carries **source, scale and retrieval date**; the two scales are **never merged**
- Galathir's ratings are stored **per form**, and he is **excluded from Legendary tome planning**
- Every tome allocation is **exactly a full max** — a partial spend fails the build
- Every team slot has a **stated reason**, and no team exceeds its mode's size
- The Fire Knight team supplies **enough A1 hits** for the stage 10–20 shield
- Giant Slayer only ever goes to a **3+ hit A1**; Warmaster only to 1–2
- Every irreversible tome step carries an **IRREVERSIBLE** warning, and every gem mastery
  purchase carries the **6★** warning

---

## Attribution

Champion data, ratings, mastery presets and boss mechanics come from
**[HellHades](https://hellhades.com/)** and **[Ayumilove](https://ayumilove.net/)**, retrieved
2026-09-17.

**The refresh recipes in `SOURCES.md` are for private use only.** The site ships cached,
attributed, dated values — it **does not scrape or hotlink** their endpoints, and it credits
both sources in the footer of every page.
