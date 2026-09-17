# 20 — Tracker Website: Product Spec

**Status:** scope **confirmed by the owner 2026-09-17**. Not built — awaiting the go-ahead.

**Confirmed decisions:** private, single-user (possibly shown to the owner's dad), **no auth**,
hosted on **Vercel**, **repo-as-database with localStorage** for progress ticks. Feature order
below was left to me ("as you recommend").

---

## The problem it solves

The plan in `docs/plan/` is accurate but static. Three things go stale:

1. **The roster changes.** You pull champions; the plan needs re-deriving
2. **Your progress changes.** Which champions are actually at 60/6★ with masteries?
3. **The question you actually have is "what do I do right now?"** — and a markdown file
   cannot answer that, because it does not know what you have already done

**The site exists to answer question 3.** Everything else is supporting cast.

---

## Who uses it

One person, on a phone, next to the game, asking one of three questions:
- *"What should I do right now?"*
- *"Can I run this content yet, and if not, what is blocking me?"*
- *"I just pulled X — does that change anything?"*

---

## The core loop

```
You pull a champion / hit a milestone
        ↓
You tell me
        ↓
I research it, update data/roster.json and the affected plan docs, push
        ↓
Vercel redeploys (~40s)
        ↓
Site is current. Readiness recomputes. Next action updates.
```

**You tick off progress in the browser** (localStorage). **I maintain the plan** (git).
Clean separation, no backend.

---

## Features, in priority order

### P0 — without these the site has no reason to exist
| Feature | What it does |
|---|---|
| **Dashboard: "what do I do right now?"** | Reads the plan + your progress, surfaces the next 3 actions |
| **Team Readiness Checker** | For each of the 9 content types: ready / blocked, and **exactly what is blocking it** — "Uugo at level 42, needs 60" or "ACC 180, needs 300" |
| **Roster view** | All champions, sortable/filterable, with build status and priority |
| **Champion detail** | Kit, build targets, content verdicts, **with confidence badges** |
| **Plan checklist** | The 30-day plan as tickable tasks, with progress persisted |

### P1 — high value, build second
| Feature | What it does |
|---|---|
| **Build priority queue** | Ordered "build next" list, recomputed when the roster changes |
| **Accuracy target calculator** | Pick content → required ACC. The #1 new-player failure point, trivial maths |
| **Tome allocation planner** | 26/110/12 tomes, what each option costs, irreversibility warnings |
| **Gap analysis** | Which mechanics the roster cannot cover → what to chase in summons |
| **Content guides** | The mechanics research, rendered per content type |

### P2 — nice, only after P0/P1 are solid
Mastery planner (visual tree, flags the three tune-breaking masteries) · daily routine
checklist with reset timers · resource tracker · research docs rendered in-app ·
speed-tune helper (only if the plan reaches a tuned CB team).

### Explicitly NOT building
| Feature | Why not |
|---|---|
| **Gear optimiser** | Needs your full gear inventory hand-entered — hundreds of constantly-changing items. Data entry cost exceeds benefit |
| **Damage simulator** | Requires exact multipliers we do not reliably have. Would produce confident wrong numbers — the exact failure `CLAUDE.md` forbids |
| **Full champion database** | Thousands of champions. Duplicates existing sites and we cannot keep it current |
| **Multi-user / social** | One user |

**The filter:** every feature must answer a question **about your specific account** that a
generic site cannot. Anything a generic site does better, we link to instead.

---

## 🚨 Non-negotiable build constraints

These come from `docs/research/SOURCES.md §5` and `CLAUDE.md §2.8, §3` and are binding on the
implementation.

### 1. Attribution and no scraping
Champion data, ratings, mastery presets and boss mechanics come from **HellHades** and
**Ayumilove**.

- **The site must credit both**, visibly
- **The site must not scrape or hotlink HellHades' JSON endpoints.** The refresh recipes in
  `SOURCES.md` are undocumented endpoints belonging to them, and are for the owner's **private**
  refreshes only
- Cached values must be shipped **clearly attributed and dated**

### 2. Never merge the two rating scales
**HellHades rates 0–10. Ayumilove rates 1–5 stars.** They disagree substantively — Alure is
HellHades **10** for Fire Knight and Ayumilove **1/5** for Hydra.

- **Show both**, each labelled with its source and scale
- **Never persist an averaged or normalised number**
- If a view needs one sort order, **compute it at render time and label it as derived**

### 3. Tier 3 is regenerated, not edited
Teams, build order, tome plan and the 30-day plan are **analysis**, not source data. The site
renders them; it must not let them be hand-patched into divergence from `docs/plan/`.

### 4. Per-form champions
**Starsage Galathir has two forms with separate ratings and skills.** Any champion view must
render per-form data without collapsing it, and **he cannot use Legendary Skill Tomes** — the
tome planner must not offer them.

---

## Design principles

1. **Show the reasoning, not just the verdict.** "Build Uugo first" is useless. "Build Uugo
   first — 60% AoE Decrease DEF is the largest damage multiplier available, and she is one of
   only two AoE sources you own" is actionable and teaches you the game
2. **Never fabricate.** Unknown champion → "not yet researched", never a guessed rating.
   **Fenax must render as a gap, not as a rating**
3. **Surface confidence.** `[CONFIRMED]` and `[UNCERTAIN]` look different on screen
4. **Warn on irreversibility.** Legendary Tomes, masteries, feeding, Great Hall — these get a
   visible warning, every time
5. **Mobile-first.** You will read this on a phone beside the game
6. **Fast.** Static generation, no spinners. It is a reference tool

---

## Success criteria

The site works if:
- You open it instead of asking me "what should I do next?"
- You can tell at a glance which content is blocked and why
- You never see a rating the research does not support
- Updating after a pull takes me one edit and 40 seconds of deploy

**It fails if** it becomes a pretty rendering of information you already had, or if it ever
shows a number we cannot stand behind.

---

## Account-specific requirements

From `docs/plan/09-account-state.md` — these are not generic features, they are things this
account specifically needs:

| Requirement | Why |
|---|---|
| **Tome planner must model RANDOM upgrades** | The owner cannot target a skill. The planner shows **full-max costs only** and must never suggest a partial spend |
| **Galathir must be excluded from Legendary tome planning** | Mythicals need Mythical Tomes |
| **Mark Chimera as clan-blocked** | Family clan cannot meet the 10×level-33 requirement. Show it as a contingency, not a target |
| **Do not render energy/silver as constraints** | 94,667 and 58M respectively |
| **Track which masteries are already bought** | Galathir, Artak and Ninja are done; the gem budget depends on it |

## Open questions

**None blocking.** Remaining in-game verifications are listed in `USER_QUESTION.md` and
`docs/research/DATA_CONFLICTS.md §C`.
