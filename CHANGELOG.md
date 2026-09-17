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

## [0.2.0] — 2026-09-17 — **Data source replacement**

The research pack in `docs/research/claude-web/` — compiled the same day by a session with
**direct access to hellhades.com and ayumilove.net** — replaced the search-synthesis research
as the project's primary source of record.

### The three findings that reorganised the plan

1. **🚨 Rank-up food cost runs opposite to what the earlier plan assumed.** Rarity sets
   starting rank, and starting rank sets food cost: Mythical starts at **rank 6 (zero
   feeders)**, Legendary at 5, Epic at 4, Rare at 3. **Kael and Apothecary are the most
   expensive champions on this account to six-star; Starsage Galathir is free.** The earlier
   plan put Kael first on the belief that Rares are cheap to rank. **Build order rebuilt** —
   Galathir moves from #13 to **#1**, Kael from #1 to optional.
2. **Legendary tomes cannot be used on a Mythical.** Galathir needs **10 Mythical Tomes**;
   the account owns **zero**, and there is no farmable source.
3. **Skill tomes almost certainly let you choose the skill.** The earlier research claimed
   selection was random and built the whole tome plan on it. Withdrawn and flagged for
   in-game verification.

### Added
- `docs/research/claude-web/` — the research pack (6 files, tier 1–3)
- `docs/research/SOURCES.md` — every URL, retrieval date, page staleness stamp, the two rating
  scales, refresh recipes, and the scraping/attribution restrictions
- `docs/research/DATA_CONFLICTS.md` — full audit: **4 open decisions**, 15 resolved conflicts,
  11 claims kept as `unverified`, 8 open TODOs

### Changed — tier 1 and 2 (source data)
- `docs/research/02-champion-dossiers.md` — **rebuilt from the pack.** Now carries both rating
  scales side by side (HellHades 0–10, Ayumilove 1–5), **Galathir's ratings per form**, auras,
  base→booked cooldowns, tome costs, book values, gear and stat priorities, and mastery presets
- `docs/research/03-content-mechanics.md` — **rebuilt from the pack.** Boss mechanics replaced
  wholesale for Dragon (Scorch), Spider (devour), Ice Golem (HP-threshold counter), Hydra
  (Exposed Neck / Serpent's Will / named heads), Chimera (form cycle, Ram reflect) and
  Demon Lord (affinity switch, A3 scaling)
- `data/roster.json` — **schema v2.** Every rating stored with `source`, `scale` and
  `retrieved`; Galathir stored per form; start rank and feeder cost per champion; tome
  header-vs-skill-list conflicts flagged inline
- `docs/research/00-methodology-and-sources.md`, `01-game-state-2026.md`,
  `04-gear-masteries-economy.md` — marked **secondary**, with superseded passages struck
  inline rather than deleted

### Changed — tier 3 (analysis, regenerated wholesale)
`docs/plan/10` through `15` regenerated from the pack, each carrying a banner marking it
tier 3 and regenerable:
- **Core five** is now **Galathir · UDK · Artak · Ninja · Rathalos** — they carry Clan Boss,
  Spider, Dragon and Ice Golem on one gear investment
- **Campaign farmer: Artak, not Kael** (HellHades ships him a "Solo Farm Build" preset; damage
  scales off HP). The pack's own caveat is recorded: Ayumilove rates his Campaign 4/5
- **Legendary tomes: UDK A3 (2) → UDK A2 (4) → Artak A3 (4), hold 2** — replaces
  hold-all-12-then-Rathalos
- **Fire Knight shield is stage-scaled** — 5 hits (1–6), 7 (7–9), 10 (10–20), 12 (21–25) —
  not a flat 12
- **Do not chase a Clan Boss speed tune yet**; run an untuned speed team
- **Ignore Chimera Trials early** — they strengthen the Ultimate form
- **⚠️ New Chimera hazard surfaced:** the Ram form reflects 50% damage against anyone under
  Perfect Veil, and **both Galathir's A3 and Ninja's A2 grant it**
- Accuracy floors corrected down: **150–180 ACC** for dungeon stages 10–16, **220+** for 20+
- Warmaster/Giant Slayer rule corrected to **A1 hit count** — adds **Alure** to Giant Slayer
  and resolves the Turvold question as **Warmaster**

### Changed — governance
- `CLAUDE.md` — new rules **§2.6–2.9**: champion data must carry source and date; the pack
  wins conflicts unless the owner decides otherwise; **rating scales are never merged**;
  **tier-3 analysis is regenerated wholesale, never patched**. Section 3 rewritten around the
  pack, with the scraping and attribution restrictions
- `USER_QUESTION.md` — rewritten. Questions the pack answered removed; the pack's six open
  questions added; **the time-critical promo-code window moved to Q1**

### Fixed
- **Fenax** — previously unresearched, now fully documented: **Epic · Spirit · Sacred Order ·
  Attack**, **HellHades Ice Golem 10**, and his A1 block-revive is a **kill clause**, not a
  debuff, which is why it needs no Accuracy
- Godseeker Aniri faction **"The Sacred Order" → "Sacred Order"**; Skullcrown
  **"Knight Revenant" → "Knights Revenant"**
- ~20 cooldown and skill-text corrections, mostly from quoting **booked** cooldowns as base
  (Tagoar A2 is **5→3**, not 3; Apothecary A3 is **5→3**, not 3)
- Galathir's passives were mis-assigned: **"Eternal Beyonder"** (base) and **"Starlight
  Reflect"** (alternate) are two separate skills
- **Alure's books: "never" → "last"** (HellHades book value 4/10)

### Known limitations
- The pack's HellHades **champion pages are stamped 2026-04-06** (Skullcrown 2026-08-24); its
  Ayumilove pages are 2026-09-16. A few HellHades evergreen articles date to **2023** and were
  used only for mechanics that have not changed
- **8 areas remain unresearched** and are recorded as TODOs, not filled in: Demon Lord speed
  tunes, the Hydra head-by-head playbook, Chimera Trials, Demon Lord damage thresholds, Arena
  validation (including Live and Tag Team Arena), six side modes, Blessings and Relics, and
  Faction Guardians
- **The Arena team is ratings-derived and unvalidated against the live meta** — the pack says
  so explicitly, and its proposed composition listed **five champions for a four-slot mode**

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
| 2026-09-17 | **Data source replaced** by the direct-access research pack | Build order rebuilt (Galathir #1, Artak farmer); Legendary tome plan replaced; Fenax researched; all tier-3 regenerated |
