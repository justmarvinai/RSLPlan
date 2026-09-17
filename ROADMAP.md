# ROADMAP.md

Two tracks run in parallel: **your account** (the real deliverable) and **the tracker
website** (the delivery mechanism). Account progression is the priority; the website exists
to serve it.

---

## Track A — Account progression

Dates assume a Day 1 of **2026-09-17**. Detail lives in `docs/plan/14-day-1-30-plan.md` and
`docs/plan/15-day-31-plus.md`.

### Phase 0 — Foundation · Days 1–3
**Goal:** stop bleeding value, start the engine.
- Join an active clan (unlocks Clan Boss income; gates Chimera later)
- Identify and commit to the campaign farmer
- Stop opening shards outside 2× events
- Set the daily routine

**Exit criteria:** in a clan · farmer identified · daily routine running.

### Phase 1 — The farmer · Days 1–10
**Goal:** one champion at **level 60, 6★**, clearing **Brutal 12-3** solo on auto at 100%.
This is the single highest-leverage objective on a fresh account — everything downstream is
bottlenecked by XP and silver.

**Exit criteria:** 60/6★ farmer · Brutal 12-3 solo on auto · Multi-Battle running unattended.

### Phase 2 — The core five · Days 5–20
**Goal:** a functioning 5-champion PvE core covering the universal requirements:
Decrease DEF · cleanse/Block Debuffs · Increase ATK/SPD · sustained damage · survivability.

**Exit criteria:** five champions at 60 · core debuffs covered · ~200+ ACC on debuffers.

### Phase 3 — Dungeon entry · Days 15–30
**Goal:** farmable stages in the gear dungeons. Dragon first (most forgiving, drops the sets
everything else needs), then Ice Golem, then Spider. Fire Knight is deliberately last — it is
a mechanics check, not a stat check.

**Exit criteria:** Dragon 12–15+ farmable · Ice Golem started · gear quality rising.

### Phase 4 — Clan Boss & Arena · Days 20–40
**Goal:** consistent Clan Boss chests and a Great Hall feed.
Arena is not optional: Great Hall bonuses are permanent, account-wide, and the top tiers are
gated behind Gold Medals.

**Exit criteria:** Clan Boss Hard/Brutal consistently · Silver Arena · Great Hall investment
started.

### Phase 5 — Masteries · Days 30–60
**Goal:** full masteries on the core 4–6 champions.
At ~1,650 scrolls and up to 60 hours of grinding per champion, this is the scarcest
investment in the game. **Who gets masteries is decided in Phase 2, not here** — because
Rapid Response, Arcane Celerity and Cycle of Magic silently break Clan Boss speed tunes and
are expensive to undo.

**Exit criteria:** Minotaur 13+ on auto · core team fully mastered.

### Phase 6 — Unlocks · Days 45–90
Faction Wars (lvl 30) · Chimera (lvl 33 + clan) · Doom Tower (lvl 40) · Hydra (lvl 45).

### Phase 7 — Endgame · Day 90+
Clan Boss Nightmare → Ultra-Nightmare · Dungeon 20–25 · Relics via Chimera ·
Hard Mode dungeons · Hydra depth.

---

## Track B — Tracker website

**Gate: no code until you say go.**

### Milestone 0 — Research & spec ✅ *current*
Research documents, plan documents, data model, tech stack, open questions.

### Milestone 1 — Skeleton *(on your green light)*
Next.js + TS + Tailwind + shadcn scaffold · Zod-validated roster data · deploys to Vercel ·
roster list renders from real data.

**Definition of done:** live Vercel URL showing your real roster.

### Milestone 2 — Core value
Champion detail pages with kit and build status · teams per content type with **readiness
computed from your actual build state** · the 30-day plan as a checklist (localStorage) ·
"what do I do right now?" dashboard.

**Definition of done:** you can answer "what should I do next?" without asking me.

### Milestone 3 — Tools
Accuracy target calculator · build-priority queue · tome allocation planner · roster gap
analysis · research docs rendered in-app.

### Milestone 4 — Polish
Mobile layout pass · search/filter · mastery planner · optional speed-tune helper.

### Explicitly out of scope
Gear optimiser · damage simulator · full champion database · multi-user accounts · a backend.
Reasoning in `docs/website/22-tech-stack.md §5`.

---

## Dependency map

```
Clan  ──────────────► Clan Boss income ──► Books/Shards/Gems ──► everything
                 └──► Chimera (lvl 33) ──► Relics

Farmer (60/6★) ─────► XP + Silver ──┬──► Core five at 60
                                    ├──► Gear upgrading
                                    └──► Food for rank-ups

Core five ──────────► Dragon ───────► Gear sets ──► every other dungeon
                 └──► Arena ────────► Great Hall ──► account-wide stats

Minotaur 13+ ───────► Masteries ────► ~15-25% effective power on mastered champions
```

**Read this map when tempted to skip a step.** The farmer and the clan are upstream of
literally everything else. They are also the two cheapest things on the list.

---

## Success criteria at Day 30

| Metric | Target | Stretch |
|---|---|---|
| Account level | 45+ | 50 |
| Farmer | 60/6★, Brutal 12-3 auto | Sub-40s clears |
| Champions at 60 | 3–5 | 6 |
| Dragon | Stage 13–15 farmable | 20 |
| Clan Boss | Hard/Brutal chests | Nightmare attempt |
| Arena | Silver | Gold |
| Great Hall | Investment started | Multiple level 4+ |
| Masteries | 1 champion done | 2–3 |
| Faction Wars | Unlocked, started | Several crypts progressing |

These are **calibrated for a fresh account**, not copied from a content creator's showcase.
If you beat them, you are ahead.
