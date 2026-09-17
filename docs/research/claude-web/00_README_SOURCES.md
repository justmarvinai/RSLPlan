# 00 — Sources, method and reliability

Research pack for a fresh Raid: Shadow Legends account. Compiled 2026-09-17 by Claude (claude.ai session with web access), for handoff to a Claude Code project.

## Files

| File | Contents |
|---|---|
| 00_README_SOURCES.md | This file — sources, retrieval method, reliability notes |
| 01_ROSTER_DATA.md | Identity, auras, full skill text, tome costs, HellHades ratings and Ayumilove star ratings for all 18 champions |
| 02_BUILDS_MASTERIES_TOMES.md | Gear, stats, full HellHades mastery presets per champion, plus the tome allocation plan |
| 03_CONTENT_MECHANICS_TEAMS.md | Boss mechanics per content area and the proposed teams |
| 04_PROGRESSION_PLAN.md | Build order, 30-day plan, resource rules, promo codes, level gates |
| 05_OPEN_ITEMS_AND_CONFLICTS.md | Unverified data, source disagreements, what still needs research |
| CLAUDE_CODE_PROMPT.md | The handoff prompt for the Claude Code project |

## Sources and retrieval dates

- **hellhades.com** — champion pages (ratings, mastery presets, gear and stat recommendations, book value and priority, overview text), the per-stage boss strategy text for Chimera, Dragon, Spider, Fire Knight and Ice Golem, the new-player guide, the Clan Boss guide, the speed-tuning explainer, the Hydra starter guide and the promo-code page. All retrieved 2026-09-17. Champion pages carry a "Last Updated: April 6, 2026" stamp (Skullcrown: August 24, 2026); the promo page was updated 2026-09-13; the Chimera boss guide 2025-11-25.
- **ayumilove.net** — champion guides (faction, affinity, rarity, role, rank, full skill text with level-up effects, auras, recommended artifacts, masteries), the Hydra and Chimera guides, the 2026 patch notes, the champion leveling and campaign XP guides, the progress-missions guide, and the daily login rewards guide. Champion pages updated 2026-09-16 (Starsage Galathir 2026-09-13); guides updated 2026-09-13 to 2026-09-16.
- A handful of HellHades evergreen articles (Clan Boss guide, "who should I 60 next", "defining your stage of progress") were last modified in 2023. They were used only for mechanics that have not changed — rank-up costs, Warmaster/Giant Slayer selection, content ordering — and cross-checked against the 2026 patch notes.

## Reliability tiers

- **Tier 1, primary data:** everything in 01 and the appendix of 02. Copied from the two sites with no interpretation.
- **Tier 2, mechanics:** the boss mechanics in 03. Paraphrased from HellHades' stage strategy text and Ayumilove's boss guides.
- **Tier 3, analysis:** all team compositions, the build order, the tome allocation and the 30-day plan. Claude's reasoning on top of tiers 1 and 2. Treat as a strong starting point, not as source data — and expect it to change when the roster changes.

## Scale warning

HellHades rates 0–10; Ayumilove rates 1–5 stars. They disagree in places (Alure: HellHades 10 for Fire Knight, Ayumilove 5/5 there but 2/5 for Dragon; Artak: HellHades 10 for Campaign-adjacent dungeon work but Ayumilove 4/5 for Campaign itself). Store both with their source and never average them into one number.

## How to refresh this data later

Both sites answer a plain `curl -sL` with a normal desktop browser User-Agent; a bare default user agent or a JS-less fetcher may be what failed previously. Champion pages on HellHades render ratings client-side, so the HTML alone is not enough — the page calls the site's own JSON endpoints:

```
# champion post id
curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0 Safari/537.36" \
  "https://hellhades.com/wp-json/wp/v2/champions?search=Uugo&_fields=id,slug,title,modified"

# ratings for that post id
curl -sL -A "Mozilla/5.0 ..." "https://hellhades.com/wp-json/hh-api/v3/raid/ratings/7201"

# boss strategy text (region id and post id are in the boss page HTML)
curl -sL -A "Mozilla/5.0 ..." "https://hellhades.com/wp-json/hh-api/v3/strategy/206?post=37489&stage=2069020"
```

Mastery presets are in the static HTML of the champion page: each mastery node is a `div.msb-mastery-image`, and unselected nodes carry the class `rslm-disabled`. Ayumilove pages are plain server-rendered HTML and parse directly.

Use this for private research refreshes only. These are undocumented endpoints belonging to HellHades, so a public site built on this data should not scrape or hotlink them; cite HellHades and Ayumilove as sources and keep any cached values clearly attributed and dated.
