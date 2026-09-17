# 22 — Website Tech Stack Decision

**Status:** Proposed — **not yet approved, not yet built**
**Constraint from the owner:** *"the main focus is NOT a fully fleshed out Website."*

---

## 1. The decision that matters most

Everything else follows from one question: **where does the data live?**

| Option | Complexity | What it buys you | Verdict |
|---|---|---|---|
| **A. Repo as database** — typed TS/JSON in git, edited by asking Claude | Lowest | Version history, zero infra, free, instant, reviewable diffs | ✅ **Recommended for v1** |
| **B. Repo + browser-editable local overlay** (localStorage) | Low | Tick checkboxes yourself without asking Claude | ✅ **Recommended addition** |
| **C. Full database** (Postgres/Supabase) + auth + API | High | Multi-device sync, multi-user | ❌ Not for v1 |

### Why A+B, concretely

Your actual usage loop is: *"Claude, I pulled Champion X"* → I research it, update the data,
push → Vercel redeploys in ~40 seconds → the site is current.

A database adds auth, migrations, an API layer, environment secrets and a hosting bill — and
buys you **nothing** for that loop, because I would still be the one writing the data.

**But** there is one thing you genuinely want to do yourself without asking me: **ticking off
daily tasks and marking a champion's gear as done.** That is what B solves. `localStorage`
holds *your* mutable progress state; the repo holds the *researched plan*. Clean separation,
no backend.

**Upgrade path if you outgrow it:** the data layer is defined behind typed accessor functions,
so swapping `lib/data/*.ts` for API calls later touches one directory and no components.

---

## 2. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15+, App Router** | Best-in-class on Vercel; RSC means data files are read at build time with zero client cost |
| Language | **TypeScript, strict** | The data model is the product. Types catch a mistyped affinity before it becomes wrong advice |
| Styling | **Tailwind CSS v4** | Fast, no CSS architecture decisions needed |
| Components | **shadcn/ui** | Copy-in components, no dependency lock-in, good tables/dialogs/tabs out of the box |
| Icons | **lucide-react** | Ships with shadcn |
| Content | **MDX** for long-form docs | Lets `docs/*.md` render in-app without a rewrite |
| Data validation | **Zod** | Runtime-validates the roster data at build; a malformed champion fails the build instead of shipping bad advice |
| State (local) | **localStorage + a typed hook** | Progress ticks only |
| Tables | **TanStack Table** | Sorting/filtering the roster — the one genuinely complex UI need |
| Hosting | **Vercel** | As you requested |
| Package manager | **pnpm** | Fast, disk-efficient |
| Lint/format | **ESLint + Prettier** | Standard |
| Tests | **Vitest** for data-integrity tests | Not UI tests — see below |

### What is deliberately NOT in the stack
- No database, no ORM, no auth provider, no state management library, no animation library,
  no analytics. Each would be a real cost and none earn their place in v1.

---

## 3. Data integrity tests — the one place testing earns its keep

Not UI tests. **Data tests**, run in CI:

- Every champion referenced in a team exists in `roster.json`
- Every champion has a faction, affinity, type and rarity
- No team exceeds its slot limit (4 for Arena, 5 for CB/Chimera, 6 for Hydra)
- Every build-priority entry references a real champion
- Every confidence tag is one of the four valid values
- No champion is marked "recommended" while also carrying `[NOT CONFIRMED]` on its core kit

**Rationale:** the failure mode that actually hurts you is *the site confidently showing wrong
advice*. That is a data problem, not a rendering problem. Test the thing that can hurt you.

---

## 4. Proposed structure

```
app/
  page.tsx                    Dashboard — "what do I do right now?"
  roster/                     Champion list + detail pages
  teams/                      Team compositions per content type
  plan/                       30-day plan as an interactive checklist
  content/[slug]/             Per-content-type guide pages
  resources/                  Tomes / gems / shards / scrolls planner
  research/[...slug]/         The docs/ markdown, rendered
components/
  ui/                         shadcn primitives
  champion/                   ChampionCard, BuildStatus, KitDisplay
  team/                       TeamComp, ReadinessBadge, SlotRequirement
lib/
  data/                       *** the typed data layer — swap point for a DB later ***
    roster.ts  teams.ts  plan.ts  content.ts  gear.ts
  schemas/                    Zod schemas
  hooks/                      useProgress (localStorage)
  readiness.ts                Computes team readiness from roster build state
content/                      MDX copies of docs/
data/                         roster.json — single source of truth
```

---

## 5. Tools worth building (and the ones that are not)

You said to include tools only if they are *actually* useful. Filtered honestly:

### Worth building
| Tool | Why it earns its place |
|---|---|
| **Team Readiness Checker** | Given your current build state, shows which teams are live and *precisely what is blocking* the rest. This is the killer feature — it turns the plan into a next-action |
| **"What do I do right now?"** | Dashboard widget reading the plan + your progress. Answers the question you will actually open the site to ask |
| **Accuracy target calculator** | Enter content → get required ACC. ACC is the #1 new-player failure point and the maths is trivial to encode |
| **Build-priority queue** | Ordered list of who to build next and why, recomputed when the roster changes |
| **Tome allocation planner** | You hold 26/110/12 tomes. Irreversible spend. Shows the plan and what each option costs |
| **Gap analysis** | Which mechanics your roster cannot currently cover (e.g. AoE HP Burn for Spider). Directly guides which shards to chase |

### Genuinely useful but phase 2
| Tool | Note |
|---|---|
| **Speed-tune helper** | Real value for Clan Boss, but DeadwoodJedi already does this well and correctly. Build only if the plan reaches a tuned CB team — otherwise it is a toy |
| **Mastery planner** | Visual tree per champion. Valuable because masteries cost ~60h each and Rapid Response / Arcane Celerity / Cycle of Magic silently break CB tunes |
| **Farm efficiency calculator** | Energy → XP/silver per stage |

### Deliberately NOT building
| Tool | Why not |
|---|---|
| Gear optimiser / auto-gear solver | Needs your full gear inventory manually entered — hundreds of items, constantly changing. The data entry burden exceeds the benefit. Real optimisers exist and hook the game client |
| Damage simulator | Requires exact multipliers we do not reliably have. Would produce confident, wrong numbers — the exact failure mode `CLAUDE.md` forbids |
| Full champion database | Thousands of champions. Duplicates existing sites, and we cannot keep it current |
| Arena defence analyser | Needs live opponent data |

**The through-line:** every tool built must answer a question *about your specific account*
that a generic site cannot. Anything a generic site does better, we link to instead.

---

## 6. Design principles

1. **Show the reasoning, not just the verdict.** "Build Uugo first" is useless. "Build Uugo
   first — Decrease DEF + Weaken are the two largest damage multipliers, and she is your only
   source of either" is actionable and teaches you the game.
2. **Never fabricate.** Unknown champion → "not yet researched," never a guessed rating.
3. **Mobile-first.** You will read this next to the game on a phone.
4. **Fast.** Static generation, no loading spinners. It is a reference tool.
5. **Progress is yours, plan is mine.** Your ticks live in localStorage; the plan lives in git.

---

## 7. Deployment

- GitHub → Vercel auto-deploy from `main` (or the working branch until merged)
- Preview deployments per branch
- No environment variables needed for v1 — nothing secret exists
- Free tier is sufficient by a wide margin

---

## 8. Open questions

Blocked on **Q11–Q13** in `USER_QUESTION.md` — what you actually want to track, whether it
needs auth, and whether you want in-browser editing. Defaults are assumed above; answers may
simplify further.
