# SOURCES.md

Every source behind the champion and mechanics data in this repository, with retrieval dates.

**Primary source of record:** `docs/research/claude-web/` — the research pack compiled
**2026-09-17** by a Claude session with direct web access to hellhades.com and ayumilove.net.
Per `CLAUDE.md §2.6`, the pack wins conflicts with anything sourced earlier unless the owner
decides otherwise.

---

## 1. Reliability tiers

Defined in `docs/research/claude-web/00_README_SOURCES.md` and binding on this repository.

| Tier | What | Where | How it may be changed |
|---|---|---|---|
| **Tier 1 — primary data** | Identity, auras, full skill text, tome costs, ratings | `01_ROSTER_DATA.md`, appendix of `02_BUILDS_MASTERIES_TOMES.md` | Copied from source with no interpretation. **Only a data refresh changes it** |
| **Tier 2 — mechanics** | Boss mechanics per content area | `03_CONTENT_MECHANICS_TEAMS.md` | Paraphrased from HellHades stage-strategy text and Ayumilove boss guides. **Only a data refresh changes it** |
| **Tier 3 — analysis** | Team compositions, build order, tome allocation, 30-day plan | `03`, `04`, and all of `docs/plan/` | Reasoning on top of tiers 1–2. **Must be regenerated wholesale when the roster changes — never edited piecemeal** |

---

## 2. Sources and retrieval dates

### hellhades.com — retrieved 2026-09-17
Champion pages (ratings, mastery presets, gear and stat recommendations, book value and
priority, overview text); per-stage boss strategy text for Chimera, Dragon, Spider, Fire Knight
and Ice Golem; the new-player guide; the Clan Boss guide; the speed-tuning explainer; the Hydra
starter guide; the promo-code page.

**Page staleness stamps carried by the source:**

| Page group | Last updated |
|---|---|
| Champion pages | 2026-04-06 |
| Skullcrown champion page | 2026-08-24 |
| Promo code page | 2026-09-13 |
| Chimera boss guide | 2025-11-25 |
| Clan Boss guide, "who should I 60 next", "defining your stage of progress" | **2023** — used only for mechanics that have not changed (rank-up costs, Warmaster/Giant Slayer selection, content ordering), cross-checked against the 2026 patch notes |

### ayumilove.net — retrieved 2026-09-17
Champion guides (faction, affinity, rarity, role, rank, full skill text with level-up effects,
auras, recommended artifacts, masteries); the Hydra and Chimera guides; the 2026 patch notes;
the champion levelling and campaign XP guides; the progress-missions guide; the daily login
rewards guide.

**Page staleness stamps carried by the source:**

| Page group | Last updated |
|---|---|
| Champion pages | 2026-09-16 |
| Starsage Galathir champion page | 2026-09-13 |
| Guides | 2026-09-13 to 2026-09-16 |

### Superseded — earlier search-synthesis research (2026-09-17, same day)
`hellhades.com` and `ayumilove.net` were **blocked by network egress policy** in the Claude
Code environment, so the first research pass reached them only indirectly through web-search
synthesis. Where that pass conflicts with the pack, **the pack wins**; the differences are
recorded in `docs/research/DATA_CONFLICTS.md`.

A small number of claims from that pass survive because the pack is silent on them. Each is
tagged `unverified (search synthesis, 2026-09-17)` at the point of use.

---

## 3. Rating scales — never merge them

Two independent scales are stored. **They are not interchangeable and must never be averaged
into a single number.**

| Source | Scale | Direction |
|---|---|---|
| **HellHades** | **0–10** | Higher is better |
| **Ayumilove** | **1–5 stars** | Higher is better |

They genuinely disagree. Documented examples from the pack:
- **Alure** — HellHades 10 for Fire Knight; Ayumilove 5/5 Fire Knight but **2/5 Dragon** and
  **1/5 Hydra**
- **Artak** — HellHades 10 for dungeon work; Ayumilove **4/5 Campaign**, below six other
  champions rated 5/5

**If a UI needs one sort order, compute it at render time and label it as a derived value.**
Never persist a merged number.

Every stored rating carries `source`, `scale` and `retrieved` fields. See
`data/roster.json`.

---

## 4. Refreshing the data

Both sites answer a plain `curl -sL` with a normal desktop browser User-Agent. A bare default
user agent or a JS-less fetcher is what failed previously.

HellHades champion pages render ratings **client-side**, so the HTML alone is not enough — the
page calls the site's own JSON endpoints:

```bash
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0 Safari/537.36"

# 1. champion post id
curl -sL -A "$UA" \
  "https://hellhades.com/wp-json/wp/v2/champions?search=Uugo&_fields=id,slug,title,modified"

# 2. ratings for that post id
curl -sL -A "$UA" "https://hellhades.com/wp-json/hh-api/v3/raid/ratings/7201"

# 3. boss strategy text (region id and post id are in the boss page HTML)
curl -sL -A "$UA" \
  "https://hellhades.com/wp-json/hh-api/v3/strategy/206?post=37489&stage=2069020"
```

**Mastery presets** are in the static HTML of the champion page: each mastery node is a
`div.msb-mastery-image`, and unselected nodes carry the class `rslm-disabled`.

**Ayumilove pages** are plain server-rendered HTML and parse directly.

---

## 5. 🚨 Usage restrictions — binding on the website

These are undocumented endpoints belonging to HellHades.

- **The recipes above are for the owner's private research refreshes only.**
- **The public website must not scrape these endpoints, and must not hotlink their data.**
- Any cached values shipped in the site must be **clearly attributed and dated**.
- **The site must credit HellHades and Ayumilove as sources.**

This is recorded as a build constraint in `docs/website/20-product-spec.md` and
`CLAUDE.md §7`.

---

## 6. Known source-internal conflicts

Carried from `05_OPEN_ITEMS_AND_CONFLICTS.md`. These are disagreements **within** the pack's
own sources, not between the pack and this repository.

| Item | HellHades | Ayumilove | Resolution |
|---|---|---|---|
| Godseeker Aniri tome cost | — | Header 9; skill list sums to **17** | Trust the skill list; **verify in game** |
| Alure tome cost | — | Header 14; skill list sums to **12** | Trust the skill list; **verify in game** |
| Morag Bronzelock tome cost | — | Header 11; skill list sums to **9** | Trust the skill list; **verify in game** |
| Artak as campaign farmer | Ships a dedicated "Solo Farm Build" mastery preset | Campaign **4/5**, below six champions at 5/5 | Both recorded; Artak recommended on **gear-cost** grounds, not rating grounds |
| New-player promo window | Promo page: before level 15 **and within 24 hours**; new-player guide: 72 hours | — | **Assume 24 hours** |
| Alure's overall value | Fire Knight 10, everything else 2–8 | Fire Knight 5/5, FW 5/5, Minotaur 5/5, Dragon 2/5, Hydra 1/5 | Consistent — she is a **specialist**, not a generalist |
