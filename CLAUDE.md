# CLAUDE.md — Working agreement for this repository

This file tells Claude (and any future agent) how to work in this repo without breaking the
things that matter.

---

## 1. What this project is

A **personal RAID: Shadow Legends progression system** for a single player's account.

It has two parts, in strict priority order:

1. **The plan** (`docs/`) — the accurate, researched, prioritised progression plan.
   **This is the product.** ~90% of the value lives here.
2. **The tracker** (website, not yet built) — a Next.js app for viewing and updating the
   plan as the roster changes. **This is the delivery mechanism.** ~10% of the value.

> **If you are ever trading accuracy of the plan against polish of the website, accuracy wins
> every single time.** The owner stated this explicitly: *"the main focus is NOT a fully
> fleshed out Website. The main focus BY FAR is giving me the most accurate, most effective
> and best way to progress."*

---

## 2. Non-negotiable rules

### 2.1 Never invent game data
No invented skill names, multipliers, cooldowns, base stats, drop rates or set bonuses.
If a value cannot be verified, write `[NOT CONFIRMED]`. A plausible-looking wrong number
causes the owner to spend irreplaceable resources (Legendary Tomes, 60-hour mastery grinds)
on a false premise. **An admitted gap is always better than a confident guess.**

### 2.2 Tag every non-obvious claim
Use `[CONFIRMED]` / `[LIKELY]` / `[UNCERTAIN]` / `[NOT CONFIRMED]`.
Definitions in `docs/research/00-methodology-and-sources.md`.

### 2.3 The in-game client is the source of truth
Patches 10.00 and 10.60 both re-balanced champions. Every website is a lagging indicator,
**including this repository**. Before any irreversible spend, the plan tells the owner to
verify in-game. Keep that instruction in place; do not soften it.

### 2.4 Distinguish "endgame good" from "good for THIS account"
Tier lists are written from an endgame perspective. A champion rated C for endgame Hydra can
be an account-carrying star on a 3-week-old account. **Always evaluate against the owner's
actual roster, gear level and account age** — never paste a generic tier ranking.

### 2.5 Respect irreversibility
Rank these by how hard they are to undo, and warn accordingly:

| Action | Reversibility | Treatment |
|---|---|---|
| Feeding/sacrificing a champion | **Irreversible** | Warn loudly, always |
| Legendary Tome spend | **Irreversible** | Require explicit confirmation |
| Full mastery set (1,650 scrolls, ~60h) | Effectively irreversible | Plan before spending |
| Ascension / rank-up | Costly to redo | Plan first |
| Gear allocation | Cheap to move | Free to iterate |

---

## 3. Source access constraint (important, will bite you)

`hellhades.com`, `ayumilove.net`, `raidoptimizer.com`, `inteleria.com`, `allclash.com`,
`bluestacks.com` and `raid-support.plarium.com` are **blocked by network egress policy** in
this environment. Direct page fetches fail with `EGRESS_BLOCKED`.

**Do not** try to route around this. **Do** use web *search*, which works and returns
synthesis drawn from those same sites. When citing, cite the underlying source URL and note
that it was reached via search synthesis.

---

## 4. Repository layout

```
docs/research/    Raw research. Facts about the game. Changes only when the game changes.
docs/plan/        Synthesis. Applies research to THIS roster. Changes when the roster changes.
docs/website/     Product spec, data model, tech stack for the tracker app.
data/roster.json  Machine-readable roster — the single source of truth for champions owned.
```

**The research/plan split is load-bearing.** Research describes *requirements*
("Fire Knight needs multi-hit A1 attacks"). Plan describes *assignments*
("Champion X fills the multi-hit slot"). When a new champion arrives, only the **plan** layer
is re-derived. Never collapse these two layers together.

---

## 5. Handling a roster update

The owner will say things like *"I pulled Champion X"* or *"I got a second Uugo"*. Procedure:

1. Add the champion to `data/roster.json`.
2. **Research the champion** before judging it — do not rely on memory.
3. Re-check `docs/plan/10-roster-analysis.md` — does this fill a known gap?
   The open gaps are the whole point of that document.
4. Re-derive only the affected sections of `docs/plan/11-build-priority.md` and
   `docs/plan/12-teams-by-content.md`.
5. **State plainly whether this changes the plan or not.** Most pulls do not. Saying "this
   is a nice champion but it changes nothing, stay the course" is a valuable answer and is
   usually the correct one. Do not manufacture a re-plan to look responsive.
6. Log it in `CHANGELOG.md`.

---

## 6. Tone and output style for this owner

- **Direct.** Give the recommendation, then the reasoning. Not a survey of options.
- **Justify with mechanics**, not vibes. "Uugo brings Decrease DEF + Weaken, which are the
  two biggest damage multipliers in the game" beats "Uugo is A-tier."
- **Flag risk explicitly** on irreversible actions.
- **Don't hedge on things that are known.** Hedge on things that are genuinely uncertain, and
  say which is which.
- Tables over prose for comparisons. The owner is optimising decisions, not reading an essay.

---

## 7. Website build rules (when the owner green-lights it)

Do not start building until explicitly told to. The owner's instruction:
*"First up, BEFORE you code anything. Do Deep research and write documents... Only THEN when
I tell you start coding."*

When green-lit, follow `docs/website/22-tech-stack.md`. Summary:

- **Next.js (App Router) + TypeScript + Tailwind + shadcn/ui**, deployed on **Vercel**
- **Content lives in the repo as typed data**, not in a database, for v1
- Every champion/team view must render **the reasoning**, not just the verdict
- The site must degrade gracefully: an unknown champion should render "not yet researched",
  never a fabricated rating
- No feature that requires data we do not actually have

---

## 8. Git conventions

- Branch: `claude/peaceful-wozniak-kkuhjx`
- Conventional commits: `docs:`, `feat:`, `fix:`, `chore:`
- Update `CHANGELOG.md` for any change to plan or research content
- Never push to another branch without explicit permission
- Do not open a pull request unless explicitly asked

---

## 9. Definition of done for a plan change

- [ ] Claims tagged with confidence levels
- [ ] Sources cited
- [ ] Irreversible actions flagged
- [ ] `data/roster.json` consistent with the docs
- [ ] `CHANGELOG.md` updated
- [ ] The owner can act on it **today** without further research
