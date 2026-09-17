# USER_QUESTION.md

**Status: ✅ All 18 questions answered — 2026-09-17.**

Answers are recorded as the authoritative account state in
**[`docs/plan/09-account-state.md`](docs/plan/09-account-state.md)**, and every tier-3 plan
document has been regenerated against them.

---

## What the answers changed

| Answer | Consequence |
|---|---|
| **Level 26, years old, no content cleared** | Promo-code section dropped. The plan starts from level 26, not level 1 |
| **🚨 Skill tomes are RANDOM** | **Overrides the research pack.** Tome plan rebuilt on **full maxes only** |
| **94,667 energy · 58M silver · 4,760 gems · 1,500 Mystery Shards** | **Resources are no longer a constraint.** All rationing advice removed; six champions build in parallel |
| **Masteries already bought for Galathir, Artak, Ninja** | Three of the core five are part-finished. Gem budget re-planned around the remaining five purchases |
| **Family clan, level 4, non-competitive** | **Chimera — and therefore Relics — is probably inaccessible.** Kept as a contingency |
| **Gem Mine already bought** | Dropped from the plan |
| **No Ancient/Void/Sacred/Primal shards, no spending planned** | Summoning is not a lever. The roster you have is the roster you build with |
| **Private, no auth, repo-as-database + localStorage** | Confirms the proposed architecture — no change needed |

**Decisions I took on your behalf** (you answered "whatever you recommend" to Q3, Q4, Q6, Q11
and Q15) are listed with their reasoning in `09-account-state.md §Decisions taken on the
owner's behalf`.

---

## ❓ Still open — things only you can check in game

None of these block the plan. Each is a **ten-second in-game check** that would upgrade a
`unverified` tag to confirmed. They are listed in full in
`docs/research/DATA_CONFLICTS.md §C`.

| # | Check | Why it matters |
|---|---|---|
| **1** | **Do Tier 6 masteries (Warmaster / Giant Slayer) require Rank 6?** | The plan says "6★ before buying masteries with gems." If it is wrong you could buy five mastery sets earlier |
| **2** | **Is Chimera actually locked for your clan?** Open the Chimera tab and see what it says | It decides whether Relics are reachable at all. If it *is* open, tell me and I will promote Chimera from contingency to a live target |
| **3** | **What is your champion vault capacity?** | You have 1,500 Mystery Shards to open. Capacity decides your batch size |
| **4** | **Dungeon stage affinities** — is Dragon 25 Force and Ice Golem 25 Magic? | Drives affinity-aware team picks at high stages. Not urgent until stage 20+ |
| **5** | **Faction Guardians** — do Chambers need two copies of the same champion? | Decides whether your day-30 High Khatun duplicate is valuable. The pack lists this as unresearched |

---

## 📋 Report back when any of these happen

- **You clear a dungeon stage 20**, or Clan Boss Brutal/Nightmare — the teams document gets
  re-derived
- **You reach level 30 / 40 / 45** — Faction Wars, Doom Tower and Hydra open
- **You pull or acquire a champion** — I research it, check it against the known gaps, and tell
  you plainly whether it changes the plan. **Most pulls do not**
- **You get Mythical Tomes** — Galathir needs 10, banked to a full max
- **You join an active clan** — Chimera and Relics become live
- **Anything in game contradicts this repository** — you win, the pack second, me last

---

## Website scope — confirmed

You answered "as you recommend" (Q15), "private for me, no auth, Vercel" (Q16) and
"repo-as-database with localStorage" (Q17).

**Build order when you say go:**
1. Roster with build status, both rating scales shown separately
2. Teams per content type with **readiness computed from your actual build state**
3. The 30-day plan as a checklist (localStorage)
4. **"What do I do right now?"** dashboard

Full spec in `docs/website/20-product-spec.md`; stack in `docs/website/22-tech-stack.md`.
