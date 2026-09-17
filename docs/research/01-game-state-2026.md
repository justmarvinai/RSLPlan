# 01 — Game State: RAID Shadow Legends, September 2026

**Compiled:** 2026-09-17 · Current patch line **11.7x**

> **Correction notice:** an earlier draft of this document stated the patch line was 10.x.
> That was wrong — 10.00 shipped in **December 2024**. The game is on **11.7x** as of
> September 2026. The error is preserved in `CHANGELOG.md` rather than hidden, because the
> same trap will catch you when reading guides: **many "2026" guide pages are recycled
> 2023–2024 content.**

---

## 1. How to tell a real 2026 guide from a recycled one

This is a practical filter you should apply yourself when reading anything about the game.

A genuinely current guide knows about:
- **Mythical** rarity and **Metamorph**
- **Primal Shards**
- **Chimera** and **Relics**
- **Champion Proving Grounds** and **Anomalous Accessories** (August 2026)

If an article dated 2026 does not mention Mythical champions, it is not 2026 content.

**Things frequently mislabelled as "new" that are actually old** `[CONFIRMED]`:

| Feature | Actually shipped |
|---|---|
| Awakening + Iron Twins Fortress | Patch 6.0 — **September 2022** |
| Hard Mode Dungeons + Mythical Artifacts | Patch 6.51.1 |
| Impulse & Zeal reworked to 2-piece | Patch 8.40 — **April 2024** |
| Relics + Chimera Clan Boss | Patch 10.00 — **5 December 2024** |

These are all still *current game state* — they are simply not recent changes.

---

## 2. 2026 patch timeline `[CONFIRMED]`

| Version | When | What |
|---|---|---|
| **11.50** | May 2026 | May update |
| **11.65** | mid-2026 | — |
| **11.67** | mid-2026 | Unity 6.3 engine upgrade. **Minimum OS raised to Android 7.1 / iOS 15 / macOS 12.0** |
| **11.70** | August 2026 | **Anomalous Accessories**, **Coalescence Relics**, **Champion Proving Grounds**, **Gear Slot Expansion** |
| **11.71** | 2026 | **Echoes of Oz** event (Wizard of Oz collab) |
| **11.75** | 2026 | **Frontier Events**, Summon Boost multiplier increases, 4 new Legendaries |

**Action item for you:** patch 11.67 raised the minimum OS. If you are on an older phone, check
it runs before investing a month into the account.

**2026 collaborations** `[CONFIRMED]`: Wizard of Oz (Echoes of Oz), He-Man & Masters of the
Universe, Teenage Mutant Ninja Turtles, Assassin's Creed, Xenomorph & Predator. Plus RAID's
7th anniversary.

---

## 3. Rarity tiers and Mythical champions

Ladder: **Common → Uncommon → Rare → Epic → Legendary → Mythical** `[CONFIRMED]`

### Metamorph
Mythical champions have **two distinct forms, each with a full skill set** — "two champions in
one" `[CONFIRMED]`. When Metamorph triggers:
1. The champion **switches form**
2. **All skill cooldowns reset** (except Metamorph itself)
3. The champion **gets an extra turn**

A cooldown reset plus a free turn is an enormous tempo swing, which is why Mythicals sit above
Legendaries rather than alongside them.

### How you get Mythicals `[CONFIRMED]`
**Only three routes:** Primal Shards · Fusion events · limited-time summoning events.

**You own one: Starsage Galathir.** Dossier in `docs/research/02-champion-dossiers.md`.

---

## 4. Shards and summon rates

**Base rates** `[LIKELY]` — widely and consistently reported, not read from Plarium primary
source:

| Shard | Common | Uncommon | Rare | Epic | Legendary | Mythical |
|---|---|---|---|---|---|---|
| **Mystery** | 74.2% | 24.4% | 1.4% | — | — | — |
| **Ancient** | — | — | 91.5% | 8.0% | 0.5% | — |
| **Void** | — | — | 91.5% | 8.0% | 0.5% | — |
| **Sacred** | — | — | — | 94% | 6% | — |
| **Primal** | — | — | 82.5% | 16% | 1% | **0.5%** |

- **Void Shards summon Void-affinity champions exclusively** — no other source `[CONFIRMED]`
- **Primal Shards are the only shard that can summon Mythicals** `[CONFIRMED]`

### Mercy / pity system `[LIKELY]`
- Applies to **Ancient, Void, Sacred, Primal**. **Mystery Shards are excluded** `[CONFIRMED]`
- **Each shard type has its own independent counter** `[CONFIRMED]`
- Within Ancient/Void, **Epic and Legendary counters are tracked separately** `[CONFIRMED]`
- Increases are **additive**, not multiplicative `[CONFIRMED]`

| Shard | Epic mercy | Legendary mercy | Mythical mercy |
|---|---|---|---|
| Ancient | after 20, +2%/shard | after 200, +5%/shard | — |
| Void | after 20, +2%/shard | after 200, +5%/shard | — |
| Sacred | — | after 12, +2%/shard | — |
| Primal | — | after 75, +1%/shard (**guaranteed by 174**) | after 200, +10%/shard |

### Summon Boosts — the most important misunderstanding in the game
Patch 11.75 raised regular Summon Boosts **10× → 15×**, and Progressive Chance Event boosts
**15×/20×/25× → 20×/25×/30×** `[CONFIRMED]`.

**Critically: these boosts do NOT increase your base chance of a Legendary or Epic. They only
increase the chance that, when you do hit that rarity, it is the featured champion.**
`[CONFIRMED]`

Believing otherwise is one of the most common new-player errors, and it causes people to open
shards at the wrong times for the wrong reasons.

### Your shard policy
**Never open Ancient / Void / Sacred / Primal outside a 2× Summon Boost or a relevant event.**
`[CONFIRMED as consensus]` Hoard between events. This is free value and costs only patience.

---

## 5. Relics (Patch 10.00 — Dec 2024, still current)

A **separate equipment slot** beyond artifacts and accessories `[CONFIRMED]`.

- **One Relic per champion**; grants stat bonuses **plus a unique Ability** `[CONFIRMED]`
- Rarities Rare → Mythical; higher rarity = higher starting Rank and more Gemstone Sockets
  (Rare = Rank 1 … Mythical = Rank 4) `[CONFIRMED]`
- **Crafted in the Forge with Ocular Masses, which come from fighting the Chimera**
  `[CONFIRMED]`
- Levelled with **Starstones**; Ranked up by sacrificing Relics or spending **Basalt**
  `[CONFIRMED]`
- **Coalescence Relics** (new, 11.70) — all-Legendary Relics with **faction-specific
  abilities** on top of their main ability `[CONFIRMED]`

**What this means for you:** Relics are gated behind Chimera, which is gated behind account
level 33 *and* a competent clan. They are **not accessible in your first 30 days**. Noted so
you recognise the system, and so you understand one more reason clan quality matters.

---

## 6. Gear: what is new, and what is out of reach

### Mythical Artifacts & Accessories — how you actually get them `[CONFIRMED]`
1. **Classic Arena Platinum chests** (Top 500 / Top 20 / Top 3)
2. **Hard Mode Dungeons, Stage 26+** — **this is a hard cutoff, not a scaling rate. Stages
   1–25 on Hard drop ZERO Mythical gear no matter how long you farm.**
3. **Hydra Chests** (Mythical Stoneskin and Protection)
4. **Chimera Trials** (Mythical *relic* materials)

That stage-26 cutoff is worth internalising — people waste months farming Hard 20–25 expecting
Mythical drops that cannot happen.

### Anomalous Accessories (new, 11.70) `[CONFIRMED]`
From **Proving Ground Chests only**. They keep their parent set bonus, but the usual flat
HP/ATK/DEF substats are replaced with **situational bonuses**: increased damage in
PvP / PvE / Dungeons / vs Bosses, and decreased damage taken from the same categories.

### Champion Proving Grounds (new, 11.70) `[CONFIRMED]`
- **Unlocks at Player Level 60**
- 27 dual-boss stages, played with Proving Keys / Rematch Keys
- **No per-stage rewards** — pure star accumulation toward milestones
- Scoring depends on clear speed, but is dominated by **champion multipliers**: each rotation
  has a **Primary Pool (9×)** and **Secondary Pool (1.5×)**; everyone else scores flat.
  **The mode rewards roster breadth**, which is exactly what a fresh account lacks
- 28-day rotations with leaderboards

### Gear Slot Expansion (11.70) `[CONFIRMED]`
Artifact and accessory storage each expanded by **2,200 slots**. Genuinely relevant to you:
it removes the inventory pressure that used to force new players to sell gear prematurely.

---

## 7. Super Raids

An **opt-in toggle** on the team selection screen `[CONFIRMED]`:
- **2× energy for 2× XP and 2× rewards**, in the time of one run
- Works with **Multi-Battle**
- **Risk: a failed run can cost you the doubled runs**
- **Permanent in Potion Keeps** `[LIKELY]`; otherwise event-gated

**Relevance: high and immediate.** This roughly halves wall-clock levelling time when active,
and it makes farmer *reliability* an economic decision rather than a perfectionist one. Build
the farmer to be boring and bulletproof.

---

## 8. Arena modes in 2026

| Mode | What it gives you | Confidence |
|---|---|---|
| **Classic** | Great Hall medals, **Magisteel** (Forge material) per Offence win | `[CONFIRMED]` |
| **Tag Team** | **Gold Bars** → Skill Tomes, Champion Fragments, Forge Materials | `[CONFIRMED]` |
| **Live** | **35 wins → chest with Primal Quartz** + Impulse/Zeal artifacts. **1 Legendary Skill Tome per month regardless of tier** | `[CONFIRMED]` |
| **Shadow Arena** | Introduced patch 10.60 | `[NOT CONFIRMED]` — mechanics not established |

**Two things worth acting on:**
- **Live Arena gives 1 Legendary Tome per month regardless of tier.** For an account holding
  12 Legendary Tomes and no obvious way to get more, that is a meaningful recurring source.
- **100 Primal Quartz crafts into 1 Primal Shard** `[LIKELY]`, and Live Arena is a F2P Quartz
  source. Sources are blunt, however, that **packs are the most reliable Primal source** — so
  set expectations honestly: **a 30-day F2P account should expect zero additional Mythicals.**

---

## 9. Progress Missions — your actual north star `[CONFIRMED]`

The single most important F2P reward track in the game:

| Part | Missions | Reward |
|---|---|---|
| Part 1 | 76 | **300 Gems** |
| Part 2 | 75 | **1 Sacred Shard** |
| Part 3 | 75 | **2 Legendary Skill Tomes** |
| Part 4 | 60 | **Arbiter** |

**Arbiter** is a Void Legendary whose aura is **+30% SPD in all areas** — the single best F2P
champion reward in the game, and a permanent upgrade to every team you will ever build.

Parallel chains reward **Ramantu Drakesblood** and **Marius the Gallant**. Note Marius's chain
requires **Mythical artifacts**, i.e. Hard Stage 26+ `[CONFIRMED]` — so that one is far away.

**This is the correct answer to "what am I working toward?" for the next several months.**

---

## 10. Faction Guardians — why your duplicates are not junk `[CONFIRMED]`

Assign **duplicate** Rare/Epic/Legendary champions as Guardians to boost the stats of **all
champions of that same rarity and faction**.

- Per faction: tiers of Rare / Epic / Legendary
- Each tier has **5 Chambers**, each Chamber has **2 slots**
- **Both slots must be filled** for the bonus to activate, and **each Chamber requires two
  copies of the same champion**
- Bonuses are **global and always-on**, like Great Hall bonuses

**Consequence, and it is a big one: feeding duplicate Rares away permanently destroys future
Faction Guardian value.** This is a major new-player mistake and it is irreversible. Buy
Common/Uncommon champions from the Market for food instead.

---

## 11. The three things that actually changed for a new player

1. **The gear ceiling rose dramatically.** Mythical artifacts, 9-piece Variable sets, Relics
   and Anomalous Accessories mean endgame builds now hit numbers that were impossible before.
   **Do not benchmark your day-30 gear against a content creator's showcase build.** This is
   the number one reason new players conclude their account is bad and quit.

2. **Clan quality became a hard progression gate, not a social preference.** Chimera requires
   10+ level-33 clanmates with 50 weekly activity stars. Relics come from Chimera. Hydra
   requires a clan. **A bad clan now costs you an entire equipment axis.** Joining an active
   clan is free and is a top-5 priority.

3. **Mythical rarity reset the tier lists.** Champions that were S-tier in 2022 are now mid.
   The counterweight that matters to you: **Starsage Galathir is a genuine top-of-the-game
   champion**, and a fresh account holding a Mythical is in an unusual and strong position.

---

## 12. Sources

- [AyumiLove — Patch Notes 2026](https://ayumilove.net/raid-shadow-legends-patch-notes-2026/)
- [AyumiLove — Relics and Gemstones Guide](https://ayumilove.net/raid-shadow-legends-relics-and-gemstones-guide/)
- [AyumiLove — Mercy System Explained](https://ayumilove.net/raid-shadow-legends-mercy-system-explained/)
- [AyumiLove — Loot Table and Drop Rates](https://ayumilove.net/raid-shadow-legends-loot-table-and-drop-rates/)
- [HellHades — RAID Patch 10.0: Chimera, Relics and Rebalances](https://hellhades.com/raid-patch-10-0-chimera-relics-and-rebalances/)
- [HellHades — Update 10.20 Highlights](https://hellhades.com/update-10-20-highlights-raid-shadow-legends/)
- [HellHades — Introducing Super Raids](https://hellhades.com/introducing-super-raids/)
- [HellHades — 2× Primal Shard Event](https://hellhades.com/2x-primal-shard-event-double-chance-at-mythicals/)
- [BlueStacks — Mythical Champions update](https://www.bluestacks.com/blog/updates/raid-shadow-legends/rsl-latest-update-en.html)
- [BlueStacks — Patch 10.00](https://www.bluestacks.com/blog/game-guides/raid-shadow-legends/rsl-new-patch-en.html)
- [BlueStacks — Patch 10.60](https://www.bluestacks.com/blog/updates/raid-shadow-legends/rsl-patch-10-60-en.html)
- [BlueStacks — Hard Mode Dungeons & Mythical Artifacts](https://www.bluestacks.com/blog/updates/raid-shadow-legends/rsl-hardmode-dungeons-en.html)
- [BlueStacks — Live Arena & Great Hall area bonuses](https://www.bluestacks.com/blog/updates/raid-shadow-legends/rsl-live-arena-game-mode-en.html)
- [Plarium — Update 10.00 Highlights](https://forum.plarium.com/raid-shadow-legends/843_news/43129_update-highlights-10-00/)
- [Plarium — Update 10.70 Highlights](https://forum.plarium.com/raid-shadow-legends/843_news/43392_update-highlights-10-70-0/)
- [Plarium — Guide: Progressive Chance Event](https://raid-support.plarium.com/hc/en-us/articles/14032655740572-Guide-Progressive-Chance-Event)
- [Plarium — Gear Overview](https://raid-support.plarium.com/hc/en-us/articles/360014657140-Basic-Guide-Gear-Overview)
- [RAID Wiki (Fandom) — Primal Shard](https://raidshadowlegends.fandom.com/wiki/Primal_Shard)
- [RAID Wiki (Fandom) — Artifact Sets](https://raidshadowlegends.fandom.com/wiki/Artifact_Sets)
- [RAID official — Hard Mode Dungeons](https://raidshadowlegends.com/news/hard-mode-dungeons/)
