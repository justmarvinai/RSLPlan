# 09 — Account State

> **📌 ACCOUNT STATE — an INPUT to tier-3 analysis, not analysis itself.**
> Owner-reported facts about the live account. It is neither research-pack data nor derived
> reasoning: **it outranks both** (`CLAUDE.md §2.7`). **A change here means regenerating
> `docs/plan/10`–`15`.**

**Recorded:** 2026-09-17, from the owner's answers to `USER_QUESTION.md`.
**This is the authoritative account state.** Every tier-3 document is derived from it, and a
change here means regenerating `docs/plan/10`–`15`.

---

## The account

| Field | Value |
|---|---|
| **Account level** | **26** |
| **Age** | Created several years ago |
| **Content cleared** | **None.** No campaign, no dungeons, no Clan Boss |
| **Origin** | **Purchased daily-login farm account** from a third-party seller |
| **Client** | English |
| **Play pattern** | 2–3 logins/day, 30–60 min · more at weekends |
| **Spending intent** | Gem Mine already bought. **No further spending planned** |

### What this account actually is
**Years of banked daily-login rewards, zero progress.** That combination is unusual and it
inverts the normal new-account problem.

> ⚠️ **One thing worth saying once, because it affects how much to invest:** purchased accounts
> generally breach Plarium's terms of service and carry a recovery/ban risk that is outside your
> control. That does not change any of the advice below — it is a reason to be aware of the
> downside before sinking six months into it, not a reason to play differently. Said once; the
> rest of this repository just does the job.

---

## Resources — the headline

| Resource | Held | Read |
|---|---|---|
| **Energy** | **94,667** | **≈11,800 Brutal 12-3 runs, or ≈7,900 dungeon runs.** Effectively unlimited for months |
| **Silver** | **58,000,000** | Effectively unlimited. Gear upgrading is free for a long time |
| **Gems** | **4,760** | **5 more full mastery purchases** at 800 each, with 760 left over |
| **Mystery Shards** | **1,500** | ≈1,113 Common + 366 Uncommon + 21 Rare — **this is your food supply** |
| Potions | 200–300 per element | Enough to ascend several champions |
| Gear | Basic, ~20 champions' worth | Usable via **Auto-Equip** |
| Ancient / Void / Sacred / Primal shards | **0** | No summoning planned |

### Tomes
| Tome | Held | Needed to max everything owned |
|---|---|---|
| Rare | **26** | 24 → **can fully max Kael and Apothecary** |
| Epic | **110** | 100 → **can fully max all eight Epics, 10 spare** |
| Legendary | **12** | 85 → **one clean full max only** |
| **Mythical** | **0** | 10 (Galathir) — **no farmable source** |

### Masteries already purchased
**Starsage Galathir · Artak · Ninja** — full trees, already bought with gems.

**Three of the core five are already mastered.** That is a significant head start and it shapes
the build order below.

---

## The strategic consequence

**Resources are not the bottleneck. Nothing in this plan should ration energy, silver or food.**

The real constraints are:

| Constraint | Why |
|---|---|
| **Account level 26** | Faction Wars **30** · Chimera **33** · Doom Tower **40** · Hydra **45** · Cursed City **52** |
| **Champion levels and ranks** | Nothing is built yet |
| **Gear quality** | Basic only. Real sets start at dungeon stage 16+ |
| **Clan size** | See below |
| **Skill tome randomness** | See below |

**So the plan changes from "ration carefully" to "spend aggressively and in parallel."** An
ordinary fresh account builds one champion at a time because it cannot afford two. You can
afford six.

---

## 🚨 Two findings that change the plan

### 1. Skill tomes are RANDOM — confirmed by the owner in client

> **Q2 answer: *"Skill Tome Upgrades are completely random. I can't select a Ability to
> specifically upgrade."***

**This overrides the research pack**, whose Legendary tome plan spent **2 tomes on UDK's A3
specifically**. That plan is not executable. Per `CLAUDE.md §2.7`, the pack wins conflicts
*unless the owner decides otherwise* — and the owner has direct observation of their own client.

**What follows:** partial booking is a gamble. **Full-maxing is the only way to guarantee the
skill you want gets upgraded.** The tome plan in `13-tome-allocation.md` is rebuilt entirely on
this, and it works out unusually well — see there.

### 2. ✅ Chimera IS available — corrected 2026-09-17

> **Owner:** *"Chimera is not locked but we don't push it competitively."*

**An earlier draft of this file said Chimera was probably inaccessible**, reasoning that a
family clan could not meet the 10-members-at-level-33 requirement. **That was wrong.** The clan
can run it.

| Content | Status |
|---|---|
| **Demon Lord** | ✅ Any clan |
| **Chimera** | ✅ **Available to the clan. Opens for this account at level 33** (currently 26) |
| **Hydra** | ✅ Level 45 |

**So Relics are reachable** — Chimera drops **Ocular Masses**, the only source of Relic crafting
materials. That is a whole equipment axis back on the table.

**Trials stay off.** Not because of access, but because the clan does not compete: Trials make
the Ultimate form significantly stronger and only pay off in competitive Clash placement.
**Farm the weekly chest.**

---

## Vault capacity

| Vault | Capacity |
|---|---|
| Master Vault | **120** |
| Champion Vault | **150** |
| Reserve Vault | **600** |

**This is why the 1,500 Mystery Shards cannot be opened in one go.** Open only as many as you
have free slots, feed immediately, repeat. **Batches of 100–150 are comfortable**; check free
space before each batch rather than trusting a fixed number.

---

## ✅ Owner-verified in client — 2026-09-17

Five claims checked directly against the live game. **Four confirm things this repository had
tagged `unverified`; one corrected an assumption.**

| # | Claim | Result |
|---|---|---|
| 1 | **Tier 6 masteries (Warmaster / Giant Slayer) require a 6★ champion** | ✅ **Confirmed** — 6★ before buying masteries with gems |
| 2 | Chimera locked for a family clan | ❌ **Wrong — Chimera is available.** See above |
| 3 | Vault capacity | ✅ **120 / 150 / 600** — drives Mystery Shard batching |
| 4 | **Dragon 25 is Force · Ice Golem 25 is Magic** | ✅ **Confirmed** — affinity-aware teams stand |
| 5 | **Faction Guardian Chambers need two copies of the same champion** | ✅ **Confirmed** — never feed duplicates |

These are now **owner-confirmed**, which outranks both the research pack and search synthesis
(`CLAUDE.md §2.7`).

---

## Decisions taken on the owner's behalf

The owner answered "whatever you recommend" to Q3, Q4, Q6, Q11 and Q15, with the standing
instruction from Q4:

> ***"Prioritize what is better from Early all the way to Endgame instead of short term
> progression boost."***

| Question | Decision | Where |
|---|---|---|
| **Q3** — Legendary tomes | **Spend all 12 on Artak** — an exact full max, zero waste under randomness | `13-tome-allocation.md` |
| **Q4** — Arena leader | **Skullcrown** (+23% SPD) while climbing; **Hurndig** (+35% ATK) once your damage one-shots | `12-teams-by-content.md` |
| **Q5** — Chimera | **Run it for the weekly chest from level 33. Skip Trials** — the clan does not compete | `12-teams-by-content.md` |
| **Q6** — Fire Knight kit timing | **Build it inside 30 days.** Resources allow parallel building that a fresh account could not | `11-build-priority.md` |
| **Q11** — Gems | **6★ first, then buy masteries** for UDK → Rathalos → Uugo → Apothecary → Alure (5 × 800 = 4,000, leaving 760) | `11-build-priority.md` |
| **Q15** — Website scope | Roster + build status, teams with readiness, plan checklist, "what now?" dashboard | `docs/website/20-product-spec.md` |

---

## Website decisions (Q16, Q17)

- **Private, single-user**, hosted on Vercel. **No auth.** Possibly shown to the owner's dad,
  but not built for multi-user
- **Repo-as-database**, with **localStorage** for the owner's own progress ticks

Confirmed as proposed in `docs/website/22-tech-stack.md`. No architecture change needed.
