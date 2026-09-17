# CHANGELOG

All notable changes to the research, plan and (later) the website.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

Roster changes are logged here too — when you report a new champion, the entry records what
changed in the plan **and, just as importantly, what did not**.

---

## [Unreleased]

### Planned
- Website implementation (blocked on your green light — see `ROADMAP.md` Track B)
- Plan refinement once `USER_QUESTION.md` is answered

---

## [0.1.0] — 2026-09-17

Initial research and planning pass for a fresh starter account.

### Added — Research
- `docs/research/00-methodology-and-sources.md` — methodology, source-access constraints,
  confidence grading scheme
- `docs/research/01-game-state-2026.md` — patch line 11.7x state: Mythical rarity and
  Metamorph, Primal Shards and published rates, Relics, Hard Mode Dungeons, Super Raids,
  Live Arena, Champion Proving Grounds
- `docs/research/02-champion-dossiers.md` — dossiers for all 20 roster champions
- `docs/research/03-content-mechanics.md` — mechanical requirements for all nine requested
  content types, plus Minotaur, Doom Tower and Faction Wars
- `docs/research/04-gear-masteries-economy.md` — artifact sets, stat targets, mastery costs,
  account economy

### Added — Plan
- `docs/plan/10-roster-analysis.md` — roster strengths and the mechanical gaps in it
- `docs/plan/11-build-priority.md` — ordered build queue with reasoning
- `docs/plan/12-teams-by-content.md` — teams for all nine content types, with realistic
  timelines and explicit "not yet achievable" markers
- `docs/plan/13-tome-allocation.md` — allocation plan for 26 Rare / 110 Epic / 12 Legendary
  tomes
- `docs/plan/14-day-1-30-plan.md` — the 30-day plan
- `docs/plan/15-day-31-plus.md` — Day 31–180

### Added — Website spec
- `docs/website/20-product-spec.md` — what the tracker is for
- `docs/website/21-data-model.md` — typed data model
- `docs/website/22-tech-stack.md` — Next.js + Vercel stack decision, and an honest filter on
  which tools are worth building

### Added — Repo
- `CLAUDE.md` — working agreement, including a hard rule against inventing game data
- `README.md`, `ROADMAP.md`, `CHANGELOG.md`
- `USER_QUESTION.md` — open questions, each with a stated default assumption
- `data/roster.json` — machine-readable roster

### Corrected during this pass
- **Patch line:** an early draft of `01-game-state-2026.md` stated the game was on patch 10.x.
  It is on **11.7x**; patch 10.00 (Relics + Chimera) shipped **December 2024**. Document
  rewritten, and a section added on identifying recycled "2026" guide content.
- **Ninja** is the Tyler "Ninja" Blevins collaboration (Shadowkin · Magic · Attack), not a
  Nintendo Switch collaboration.
- **Artak** is Orcs · Magic · HP, not Banner Lords. The Banner Lord on the roster is
  **Rathalos Blademaster**.
- **"High Kathun"** is **High Khatun**, faction **Barbarians** (not Undead Hordes).
- **Alure** is **Demonspawn**, not Dark Elves.

### Known limitations
- `hellhades.com` and `ayumilove.net` — the two sources requested — are blocked by network
  egress policy in this environment. Research was conducted via search synthesis, which
  aggregates those same sites indirectly. Mechanics and evaluations are well covered; exact
  skill multipliers and base stats are the weak spot and are tagged accordingly.
- The session's web search budget was exhausted during this pass. Anything tagged
  `[UNCERTAIN]` or `[NOT CONFIRMED]` could not be resolved and is carried forward as an open
  item.
- Patches 10.00 and 10.60 both included champion re-balancing. Any champion evaluation here
  may lag the live client. Verify in-game before irreversible spends.

---

## Roster change log

Every reported roster change gets an entry: what arrived, what it unblocked, and whether the
plan moved.

| Date | Change | Plan impact |
|---|---|---|
| 2026-09-17 | Initial roster recorded: 1 Mythical, 7 Legendary, 8 Epic, 2 Rare | Baseline |
