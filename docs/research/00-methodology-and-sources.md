# 00 — Research Methodology, Source Quality & Confidence Grading

**Compiled:** 2026-09-17
**Game version context:** RAID: Shadow Legends, patch line **11.7x** (11.50 → 11.75, 2026)
**Account context:** Fresh starter account, zero content cleared

---

## 1. Why this document exists

You explicitly asked for research rather than "the first best Google result." That request
deserves an honest account of *how* the information below was gathered, because the quality
of your 30-day plan is capped by the quality of the data underneath it.

This document is the audit trail. Every other document in `docs/` inherits the confidence
grades defined here.

---

## 2. Hard constraint encountered: source access

You named two preferred sources:

- `hellhades.com`
- `ayumilove.net`

**Both are blocked at the network layer in this environment.** So are essentially all other
RAID data sites tested:

| Domain | Direct page fetch | Note |
|---|---|---|
| hellhades.com | ❌ EGRESS_BLOCKED | Your preferred source #1 |
| ayumilove.net | ❌ EGRESS_BLOCKED | Your preferred source #2 |
| raidoptimizer.com | ❌ EGRESS_BLOCKED | |
| inteleria.com | ❌ EGRESS_BLOCKED | |
| allclash.com | ❌ EGRESS_BLOCKED | |
| raid-support.plarium.com | ❌ EGRESS_BLOCKED | Official Plarium guides |
| bluestacks.com | ❌ EGRESS_BLOCKED | |

This is an organisation egress policy, not a transient error, and it is not something to be
routed around.

### What was used instead

Web **search** works, and it returns multi-source synthesised answers that quote and
aggregate the very sites above (HellHades, AyumiLove, InTeleria, RaidOptimizer, Plarium
official, the Fandom wiki, DeadwoodJedi, Plarium forums). So the underlying sources you
wanted *are* represented — they were reached indirectly, through search synthesis, rather
than by reading the pages directly.

### What this costs you — stated plainly

| Reliable | Less reliable |
|---|---|
| Mechanics, systems, rotations, structural rules | Exact skill multipliers (e.g. "4.2 × ATK") |
| Which champion is good at what, and why | Exact base stats at level 60 |
| Set bonuses, dungeon rules, affinity rules | Exact cooldown numbers on obscure champions |
| Progression order, economy, best practice | Precise patch-note wording |

**Practical consequence:** every *number* in these documents is graded. Anything not marked
`[CONFIRMED]` should be verified in-game before you spend a Legendary Tome or a full mastery
set on it. Verifying in-game costs you 30 seconds; a wasted Legendary Tome costs you months.

---

## 3. Confidence grading scheme

Applied to every non-obvious claim across all research documents:

| Tag | Meaning | How you should treat it |
|---|---|---|
| `[CONFIRMED]` | Multiple independent sources agree, or it is a stable, long-standing game rule | Act on it |
| `[LIKELY]` | One credible source, consistent with the rest of the game's design | Act on it, but sanity-check in game |
| `[UNCERTAIN]` | Inferred, conflicting sources, or extrapolated from older patches | **Verify before spending resources** |
| `[NOT CONFIRMED]` | Could not be established at all | Treated as unknown; never used as a plan dependency |

**The rule I held myself to:** no invented skill names, no invented multipliers, no invented
cooldowns. Where a number could not be established, the documents say so rather than
producing a plausible-looking guess. A confident wrong number is worse than an admitted gap,
because you would spend real resources on it.

---

## 4. Research scope executed

1. **Game state 2026** — patch line, new systems (Mythical rarity, Primal Shards, Relics,
   Hard Mode dungeons, Super Raids, Live Arena seasons), and what changed for new accounts.
2. **Champion dossiers** — all 20 champions on your roster: faction, affinity, type, kit,
   role, debuff/buff coverage, content fit, and investment verdict.
3. **Content mechanics** — the 9 modes you asked for, plus the adjacent modes that gate
   progression (Minotaur, Doom Tower, Faction Wars).
4. **Gear, masteries, economy** — set bonuses, stat targets, mastery costs, energy/silver
   economy, shard rates, and the systems that actually determine early-account speed.
5. **Synthesis** — roster gap analysis, build priority, teams per content type, tome
   allocation, and the day-by-day plan.

---

## 5. Source tiers

Sources were weighted, not treated equally:

**Tier 1 — Structural truth (mechanics, rules, systems)**
Plarium official guides and patch notes, the Fandom wiki, and long-standing community
reference sites (HellHades, AyumiLove) as surfaced through search. These are reliable for
*how the game works*.

**Tier 2 — Evaluative (is this champion good?)**
HellHades ratings, AyumiLove rankings, InTeleria, RaidOptimizer, DeadwoodJedi. Reliable for
*relative* judgements. Note these sites disagree at the margins, and their ratings are
frequently written from an endgame perspective — a champion rated "C" for endgame Hydra can
still be a account-defining carry on a 3-week-old account. **This distinction is applied
throughout the plan documents and is one of the main reasons a generic tier list is the wrong
tool for your situation.**

**Tier 3 — Contextual**
Forum threads, Reddit, YouTube guide descriptions. Used for "what do real players actually
run" sanity checks, never as the sole basis for a claim.

**Explicitly discounted**
SEO content farms that republish stale tier lists with a fresh date stamp. Several 2026-dated
"tier lists" surfaced in search are recycled 2023 content. These were identified by checking
whether they mention post-2024 systems (Mythical rarity, Chimera, Relics). If a "2026" tier
list does not know Mythical champions exist, it is not a 2026 tier list.

---

## 6. Known open questions

Tracked in `USER_QUESTION.md`. These are the items where an answer from you changes the plan
materially — mostly around your account level, clan status, and spending intent. They are
*not* blockers: the plan is written to work under stated default assumptions, and the answers
refine it rather than unlock it.

---

## 7. Maintenance

This research is a snapshot dated **2026-09-17**. RAID rebalances champions regularly, and
several patches have shipped champion re-balancing passes `[CONFIRMED]`. Any champion judgement
here has a shelf life measured in months, not years.

**A warning that applies to your own reading too:** many pages dated 2026 are recycled 2023–2024
content. A quick filter — a genuinely current guide knows about Mythical rarity, Primal Shards,
Chimera, Relics and Champion Proving Grounds. If a "2026" tier list does not know Mythical
champions exist, it is not a 2026 tier list. See `01-game-state-2026.md §1`.

`CHANGELOG.md` tracks every revision to this research. When you report a new champion or a
patch lands, the affected documents get updated and the change is logged there.
