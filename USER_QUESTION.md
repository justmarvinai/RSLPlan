# USER_QUESTION.md — Questions before we build

**Created:** 2026-09-17

Answer what you can. **None of these block the plan** — every question below has a stated
default assumption, and the plan in `docs/plan/` is written against those defaults. Your
answers make it sharper, they do not unlock it.

Questions are ordered by **how much your answer changes the plan**. If you only answer five,
answer the first five.

---

## TIER 1 — These materially change the plan

### Q1. What is your account level, and how far is your Campaign progress?
**Why it matters:** account level is a hard gate on almost everything —
Faction Wars needs 30, Chimera 33, Doom Tower 40, Hydra 45. Campaign progress determines
whether Brutal 12-3 farming is even reachable yet. The entire 30-day schedule is sequenced
around these gates.

**My default assumption:** account level under 20, Campaign Normal partially cleared, Brutal
not unlocked. The Day 1–30 plan is built for exactly this and front-loads campaign push.

---

### Q2. How did this account come by a Mythical + 7 Legendaries + 8 Epics + 110 Epic Tomes?
**Why it matters — and this is not an idle question:** that is not a normal fresh account.
A genuinely new F2P account has ~2 Legendaries at best and almost no Epic Tomes. 110 Epic
Tomes is a mid-game stockpile.

Which of these is it?
- (a) You bought starter/progression packs
- (b) The account was gifted/transferred/purchased from someone
- (c) A promo, returning-player or content-creator bundle
- (d) Something else

**Why I need it:** it tells me whether more resources are likely to keep arriving. If you are
buying packs, the plan should spend aggressively now because more is coming. If this is a
one-time windfall, the plan must treat these 110 Epic Tomes as **all the Epic Tomes you will
see for months** and ration them.

**My default assumption:** (a) — you bought starter packs, and modest further spending is
possible. **This is the assumption I am least confident in and the one most worth correcting.**

---

### Q3. Are you in a clan? If so, what Clan Boss difficulty does it clear?
**Why it matters:** Demon Lord chests are your main early source of Shards, Books and Gems.
Chimera needs **10+ clanmates at level 33 with 50 weekly activity stars** — if your clan
cannot field that, the entire **Relic** system is locked off for you, and Relics are a whole
equipment axis.

**My default assumption:** not yet in a clan. **Joining an active one is listed as a Day 1–2
action** because it is free and it is worth more than any single champion build.

---

### Q4. What is your spending intent going forward?
- (a) Strict F2P from here
- (b) Low spender — battle pass / occasional good value pack
- (c) Moderate — monthly packs, some events
- (d) Heavy

**Why it matters:** this changes energy policy (refill with gems or not), whether to chase
fusion events, and how hard to push Arena for Great Hall vs. just farming.

**My default assumption:** (b) low spender. Plan is written to be fully completable F2P, with
optional "if you spend" notes marked separately so you can ignore them cleanly.

---

### Q5. How much time per day, and how many separate log-ins?
**Why it matters:** energy caps and regenerates; Clan Boss gives **1 key per 6 hours, max 2
stored**. A player who logs in 4× a day gets meaningfully more out of the same account than
one who logs in once. The daily routine is built around your actual pattern.

**My default assumption:** 2–3 log-ins/day, 30–60 minutes total, most of it on auto/multi-
battle.

---

## TIER 2 — These refine the plan

### Q6. What resources do you currently hold?
Specifically: **Gems**, **Energy**, **Silver**, **Shards** (Ancient / Void / Sacred /
Primal), **Gear** of note, **Potions**, **Mastery Scrolls**.

**Why it matters:** 800 Gems buys a full mastery set and skips ~60 hours of Minotaur grinding
`[CONFIRMED]`. If you are sitting on gems, that changes the first two weeks completely.

**My default assumption:** low gems (<1000), no meaningful gear, no mastery scrolls.

---

### Q7. Do you have champions beyond the 18 you listed?
Duplicates, low-rarity champions, starter champions, Uncommons/Commons.

**Why it matters:** you need **food** champions to rank up your main team, and **Faction
Wars** requires fielding 4–5 champions from a *single faction*. Cheap champions are not junk;
feeding the wrong one is irreversible.

**My default assumption:** you have some low-rarity champions not worth listing. The plan
includes explicit "never feed these" rules.

---

### Q8. Do you have a preferred playstyle or content you actually enjoy?
Some people hate Arena. Some want to speed-farm and never think about it. Some enjoy
theorycrafting speed tunes.

**Why it matters:** I can weight the plan toward what you will actually do. A plan you abandon
in week 2 is worth nothing.

**My default assumption:** you want maximum efficiency and will do whatever is optimal,
including Arena.

---

### Q9. Platform — PC (Plarium Play / Steam), mobile, or both?
**Why it matters:** multi-battle and background farming behave differently, and PC makes long
farming sessions far more practical.

**My default assumption:** PC available for farming sessions.

---

### Q10. Your stated tome counts — confirm these are correct?
You said: **26 Rare Tomes, 110 Epic Tomes, 12 Legendary Tomes.**

**Why I am double-checking:** 110 Epic and 12 Legendary is a *lot*. Legendary Tomes are among
the scarcest resources in the game — 12 is enough to fully book roughly 1–2 Legendary
champions depending on their skill count. The tome allocation plan
(`docs/plan/13-tome-allocation.md`) treats these as precious and irreversible, so it is worth
confirming the numbers before you spend any.

**My default assumption:** the numbers are as stated.

---

## TIER 3 — Website questions (only matter once we start coding)

### Q11. What do you actually want to track day-to-day?
Rank the ones you would genuinely use:
- Champion roster with build status (gear / masteries / books / level / rank)
- Team compositions per content type, with "ready / blocked on X" status
- The 30-day plan as a checklist with progress
- Daily/weekly routine checklist
- Gear inventory
- A "what should I do right now?" recommender
- Farming/energy tracker
- Dungeon stage progress tracker
- Resource stockpile tracker (tomes, gems, shards, scrolls)
- A speed-tuning calculator for Clan Boss

**My default assumption:** roster + build status, teams with readiness, and the plan as a
checklist are the core. Everything else is secondary.

---

### Q12. Private to you, or shareable?
Does it need a login, or is a private Vercel URL fine? Will anyone else (clanmates) use it?

**My default assumption:** private, single-user, no auth needed for v1. Data stored in the
repo, edited by asking me. Simplest thing that works.

---

### Q13. Do you want to edit data in the browser, or is "tell Claude and he updates it" fine?
**Why it matters:** this is the single biggest architectural decision for the site. Browser
editing means a database, auth, and API routes. "Tell Claude" means static typed data in the
repo, which is dramatically simpler, faster, version-controlled and free to host.

**My default assumption:** repo-as-database for v1, with the option to add browser editing
later if you find yourself wanting it. See `docs/website/22-tech-stack.md`.

---

### Q14. Anything you specifically want that I have not thought of?
Open slot.

---

## How to answer

Reply in plain text however you like — bullet points, one line each, or just numbers:
`Q1: level 14, campaign Normal ch.6` etc. Anything you skip keeps its default assumption.
