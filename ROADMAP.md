# ROADMAP.md

Two tracks run in parallel: **your account** (the real deliverable) and **the tracker
website** (the delivery mechanism). Account progression is the priority; the website exists
to serve it.

---

## Track A — Account progression

> **🔄 Tier-3 analysis.** Regenerated 2026-09-17 from the research pack. Detail in
> `docs/plan/14-day-1-30-plan.md` and `docs/plan/15-day-31-plus.md`.

Dates assume Day 1 = **2026-09-17**.

### Phase 0 — Setup · Days 1–3
**⏰ Redeem the new-player promo code** (24h / level 15 window) · join a clan **at your level** ·
start the Arbiter progress missions · fill the Sparring Pit and keep it full · daily Arena
battles · **book UDK's A3 (2 Legendary tomes) on day one** · start levelling Galathir.

**Exit:** in a clan · Galathir levelling · daily loop running.

### Phase 1 — Farmer online · Days 4–14
**Artak to 6★ level 60**, farming **Brutal 12-3**. Gear him in whatever Speed, Perception and
Lifesteal you find — his damage scales off **HP**, so cheap gear works. **UDK to 50** and book
his A2 (4 tomes). Start daily Clan Boss.

**Exit:** Artak farming on Multi-Battle · UDK at 50 with Decrease ATK at 100%.

### Phase 2 — Dungeons open · Days 15–21
Clan Boss daily, Normal → Hard → Brutal. **Dragon, Ice Golem and Spider to stage 10** with the
core five. Minotaur for mastery scrolls, Potion Keeps for ascension — **Super Raids are
permanent in both**. **Ninja to 60.** Finish Arbiter part 1. Book Artak's A3 (4 tomes).

### Phase 3 — Settle the loop · Days 22–30
**Rathalos to 60** — completes the burn core. Dungeons to **stage 13–16**. Chimera weekly chest
at level 33, **Trials ignored**. Fire Knight low stages as the Alure / High Khatun / Apothecary
kit comes online. Hold shards for boosted summons.

### Phase 4 — Content order · Days 31–90
**HellHades' order: Dragon 20 → Spider 20 → Fire Knight.** Stage 20 is the gear milestone;
**do not rush into 21–25**, where Enemy Max HP damage is capped and TM reduction halved.
Build wave 2: Uugo · the Fire Knight kit · Gnishak · Fenax · Aniri · Tagoar.

### Phase 5 — Solo farming · Days 90–120
**UDK in Toxic** (his preset is literally *"Solo Drag & Ice Golem"*) · **Gnishak** for Dragon
and Ice Golem · **Artak** soloing Spider, or duoing it with UDK. A soloist also levels **four
fodder champions per run**.

### Phase 6 — Endgame
Clan Boss **Brutal → Nightmare with a real speed tune** (DeadwoodJedi calculator) · **Hydra at
level 45** — six champions all rating 9–10 · Chimera Trials once the clan can support them ·
Hard dungeons, where awakening levels start to matter.

**Level gates:** Chimera **33** · Doom Tower **40** · Hydra **45** · Cursed City **52**.

---

## Track B — Tracker website

**Gate: no code until you say go.**

### Milestone 0 — Research & spec ✅ **done**
Research documents, plan documents, data model, tech stack, open questions.

### Milestone 1 — Skeleton ✅ **done**
Next.js + TS + Tailwind + shadcn scaffold · Zod-validated roster data · deploys to Vercel ·
roster list renders from real data.

**Definition of done:** live Vercel URL showing your real roster.

### Milestone 2 — Core value ✅ **done**
Champion detail pages with kit and build status · teams per content type with **readiness
computed from your actual build state** · the 30-day plan as a checklist (localStorage) ·
"what do I do right now?" dashboard.

**Definition of done:** you can answer "what should I do next?" without asking me.

### Milestone 3 — Tools *(partly done — tome planner and readiness shipped; accuracy calculator and gap analysis outstanding)*
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

| Metric | Target |
|---|---|
| **Campaign** | **Artak 6★/60 farming Brutal 12-3** |
| Champions at 60 | **4–5** — Galathir, Artak, UDK, Ninja, Rathalos |
| Dragon / Ice Golem / Spider | **Stage 13–16** |
| Fire Knight | Low stages started |
| Clan Boss | **Hard**, climbing to Brutal |
| Chimera | Weekly chest, **Trials ignored** |
| Arbiter missions | **Part 1 complete** |
| Legendary tomes spent | **10 of 12** — UDK A3, UDK A2, Artak A3 |

Calibrated for a fresh account. Savage, Cruel, Merciless, Relentless, Protection and Stoneskin
all come from **dungeon stage 16+ or Hydra** — they are month 2–4 targets, not week 1.
