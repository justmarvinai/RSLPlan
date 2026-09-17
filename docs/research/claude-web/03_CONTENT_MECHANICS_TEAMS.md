# 03 — Content mechanics and proposed teams

Mechanics are paraphrased from HellHades' per-stage boss strategy text (pulled live on 2026-09-17), Ayumilove's Hydra and Chimera guides (updated 2026-09-16) and Ayumilove's 2026 patch notes. Team compositions are analysis by Claude, built from those mechanics plus the ratings in 01.

## The core five

Starsage Galathir, Ultimate Deathknight, Artak, Ninja, Rathalos Blademaster.

Why these five and not a mix of your Epics: rarity determines starting rank, and starting rank determines how much food a champion eats. Mythicals start at rank 6, Legendaries at rank 5, Epics at rank 4, Rares at rank 3, and each rank-up consumes copies at the current rank (5 rank-5 feeders for 5→6, 4 rank-4 feeders for 4→5, and so on). So Starsage costs no feeders at all, each Legendary costs five rank-5 feeders, and every Epic costs four rank-4 feeders on top of that. The five above also carry Clan Boss, Spider, Dragon and Ice Golem simultaneously, so one gear investment serves four game modes.

Roles inside the core five: Decrease ATK from UDK (A2, AoE 50%) and Artak (A2, AoE 50%); Decrease DEF from Ninja (A1, 60%) and Rathalos (A1, 60%, cannot be resisted when the target is a boss); HP Burn placement from Artak (A3) and Ninja (A2); burn activation from Artak (A2) and Ninja (A2 against bosses); sustain from UDK (shield + continuous heal) and Starsage (cleanse, Block Debuffs, AoE revive, turn-meter fill).

## Demon Lord (daily Clan Boss)

Mechanics that matter (HellHades): the boss opens on Void affinity and switches to Force, Magic or Spirit at 50% HP; A1 and A2 are AoE attacks scaling off the boss's ATK, which is why Decrease ATK is the top priority debuff; A3 is a single-target hit scaling off the target's HP, so the champion who soaks it wants high DEF and comparatively low HP; the cap is 10 debuffs on the boss at a time; poisons plus Warmaster/Giant Slayer procs are the main damage sources for a young account; everything early runs in Lifesteal gear.

**Team:** UDK (leader, +30% DEF in all battles), Starsage, Ninja, Artak, Rathalos.

**Notes.** Run it as an untuned "speed team" first — HellHades explicitly recommends this for early accounts, with Apothecary or High Khatun swapped in as speed boosters once they are built. Do not chase a 2:1 or 4:3 speed tune yet; that needs the DeadwoodJedi calculator and champions with the right cooldowns. Progression path is Normal → Hard → Brutal as your damage and survival allow, and beating a difficulty outright doubles everyone's chest, so it is better to kill a lower difficulty than to scratch a higher one.

**Later upgrades.** Godseeker Aniri (HellHades Demon Lord 9) extends your ally buffs and revives with full cooldown reset; Tagoar and High Khatun are the speed-tune enablers; Turvold (Demon Lord 10) is a purpose-built damage dealer once you can keep him alive and buffed.

## Chimera (weekly clan boss, unlocks at level 33)

Mechanics (HellHades + Ayumilove): five champions, 65 turns, four forms cycling Ultimate → Ram → Ultimate → Lion → Ultimate → Viper, five boss turns per form. Unlike most bosses the Chimera can be hit with Decrease SPD. Trials make the Ultimate form significantly stronger, so ignore them early and just farm the weekly chest. Quick Battle became available for Chimera in July 2026 once you have claimed the final reward chest on a difficulty.

- **Ultimate form:** A3 removes all your buffs and hits 10% harder per buff removed; A2 does 10% more damage per debuff on the boss and gives him Increase SPD (Block Buffs stops this); A1 places Provoke and Decrease SPD (Block Debuffs stops it). Do not stack buffs right before he swaps back into this form.
- **Ram form:** Duel lands on the champion with the *lowest* C.DMG%, Hunter's Gaze (Lion) lands on the *highest* DEF champion — both are under your control through gear. The Ram reflects 50% of the damage you deal and ignores 50% DEF against anyone under Veil, Perfect Veil or Taunt. That is a direct warning for this roster: Starsage's A3 grants Perfect Veil to allies and Ninja's A2 grants it to himself.
- **Lion form:** its A3 removes Decrease ATK / C.RATE / C.DMG and hits harder per debuff removed, so re-apply Decrease ATK *after* that attack; never remove Hunter's Gaze, it triggers an extra AoE.
- **Viper form:** where new players wipe. Necrosis stacks per dead ally, the first revive attempt in the form is blocked, and it steals buffs, applies poisons plus Poison Sensitivity, and spreads debuffs via Hex / Heal Reduction. It is vulnerable to Block Active Skills, which locks it down to its A1.

**Team:** Starsage (leader, +80 RES in all battles), Ninja, Uugo, Rathalos, and UDK early / Fenax later.

**The Starsage trick.** His alternate form's A2 (Eclipse Rend) places Block Active Skills on all enemies, which is exactly the Viper's stated weakness, and his Metamorph costs a skill but grants an extra turn. Plan: fight in base form for the cleanse, Block Debuffs and AoE revive, metamorph when the Viper appears, lock it, then metamorph back. Give Starsage more C.DMG% than UDK so the Ram's Duel lands on UDK, who is also the natural Hunter's Gaze target as your highest-DEF champion.

## Hydra (weekly clan boss, unlocks at level 45)

Mechanics (Ayumilove + HellHades): six champions, three keys a week, and those six champions are locked out for the rest of the week. Four heads are active with two on the bench; when a head dies it becomes an Exposed Neck taking 200% damage for a few turns, and the replacement head arrives with Serpent's Will (−75% damage taken). Chests are awarded on cumulative weekly damage thresholds, doubled if the clan kills the Hydra. Fragments for Mithrala Lifebane come from here.

Key interactions for this roster:
- **Poison Cloud** (Head of Blight) blocks all poison damage and turns your attacks into Weak Hits — and **HP Burn cancels it**. Artak and Ninja are your answer.
- **Head of Decay** applies Heal Reduction; Uugo's A3 removes Heal Reduction from the whole team, which is exactly why HellHades lists her as a Hydra MVP.
- **Head of Mischief** steals buffs with high ACC, so one champion with very high RES is built as the "Mischief target"; Starsage's +80 RES aura plus his own RES scaling helps the whole team here.
- **Head of Wrath** triggers Vengeance after 15 hits it has taken — a 300% damage AoE — so many-hit teams need to plan around it.
- Normal difficulty stat guide from HellHades: >210 SPD, ~215 ACC, 355 RES on the Mischief target.

**Team:** Starsage, UDK, Uugo, Artak, Ninja, Rathalos — HellHades rates all six between 9 and 10 for Hydra.

## Spider's Den

Mechanics: spiderlings spawn constantly (six at the start, two at the start of each of your turns, four after each Spider turn, capped at 10) and the Spider devours them for a 3% heal and +10% ATK each — up to +100% ATK for the fight. Stage 14–20 you can no longer kill them fast enough, so the answer is crowd control, a spiderling tank, healing and turn-meter control on the boss. Stages 21–25 add a cap on Enemy Max HP damage and halve turn-meter reduction, which makes HP Burn plus burn activation the main damage route. HellHades notes stage 10 drops unusually generous gear for its energy cost, which makes it the stage to farm during Spider tournaments before you can clear 20.

**Team:** core five (Artak, Starsage, UDK, Rathalos, Ninja), with Uugo or High Khatun swapped in for more Decrease DEF or turn-meter control.

**Endgame:** HellHades names Artak as a champion who can solo this boss with good enough gear, or run as a duo with a healer such as Ultimate Deathknight — both of which you own. UDK's passive also blocks single-target hits aimed at allies and redirects them to himself, which is tailor-made for spiderlings.

## Dragon's Lair

Mechanics: the boss charges Scorch, showing a purple portion of its HP bar; deal enough damage before its next turn and it uses a weaker attack instead. Poison damage lands before the boss acts, which is why poisons cancel Scorch. The boss reduces incoming poison damage by 60%, so you need many poisons rather than a few. Dragon bosses are immune to all turn-meter and speed manipulation, so leave Alure and High Khatun's turn-meter tricks out of this dungeon. Stages 21–25 cap Enemy Max HP damage to 10% per hit.

**Team:** core five early; add Gnishak Verminlord as the dedicated Dragon specialist (his bombs convert into protected poisons that cannot be removed), and Kael as a cheap extra poisoner if you build him.

**Endgame:** HellHades lists Gnishak among the reliable Dragon soloists, and Ultimate Deathknight solos it with a Toxic set (his own HellHades preset is called "Solo Drag & Ice Golem"). A Dragon soloist also lets you level four fodder champions per run.

## Fire Knight's Castle

Mechanics: the shield is the whole fight — 5 hits at stages 1–6, 7 hits at 7–9, 10 hits at 10–20, 12 hits at 21–25. While it is up, the boss is immune to debuffs and turn-meter effects and takes 80% less damage; when he takes a turn he heals and fully regenerates the shield. So: multi-hit attacks to strip it, then Decrease SPD, turn-meter reduction and Decrease DEF while it is down. HellHades calls Alure the MVP of stages 21–25 because her 3-hit A1 removes 25% turn meter per critical hit, and after stage 20 turn-meter reduction is halved, which is where her consistency wins.

**Team:** Alure, High Khatun (leader, +19% SPD in all battles), Apothecary, Ninja, and Gnishak or Kael.

**Notes.** This is the one area your core five is weak in — UDK is rated 5 here. Multi-hit A1s you own: Apothecary (3), Alure (3), Gnishak (3), Tagoar (2), Turvold (2), Morag (2). Morag's A3 pulls two allies into a joint attack, which strips extra shield counters. Build Alure to 100% C.RATE so every A1 hit removes turn meter.

## Ice Golem's Peak

Mechanics: Klyssus counter-attacks at HP thresholds. With both of his allies alive that counter ignores defence entirely and can wipe the team, and it can Freeze; if his allies are dead, the counter revives them instead. His allies apply Heal Reduction and Decrease DEF. So the checklist is AoE Decrease ATK (close to mandatory), crowd control, a cleanse or Block Debuffs for Decrease ACC and Freeze, a reviver, and ideally Block Revive so the allies stay dead — HellHades names Fenax for exactly this.

**Team:** Starsage, UDK, Fenax, Artak, and Ninja or Gnishak or Hurndig (HellHades rates Artak, UDK, Gnishak, Hurndig and Fenax all 10 here).

**Endgame:** a low-damage poisoner in Regeneration gear, or poison-activation teams. UDK in Toxic and Gnishak are both listed as soloists.

## Classic Arena

Aim early: win enough to farm medals for the Great Hall, which gives permanent stats by affinity across the whole game. Speed aura matters more than anything else at this stage.

**Team (draft, ratings-based):** Skullcrown (leader, +23% SPD in Arena), Starsage in alternate form, Hurndig, Ninja, Turvold.

Reasoning: Starsage's alternate-form A3 (Dark Nebula) gives allies +50% ACC and places Decrease RES plus an AoE Stun without needing to attack; Hurndig's A2 is an AoE Decrease DEF and his A3 fully depletes a turn meter; Ninja's A3 freezes the enemy team; Turvold self-buffs then nukes with an extra turn. HellHades arena ratings on this roster: Starsage 10, UDK 10, Gnishak 10, Turvold 9, Hurndig 9 (his aura is +35% ATK in Arena), Skullcrown 8, High Khatun 8, Morag 8, Fenax 8. UDK and Gnishak are the defence options. This composition has not been validated against the live arena meta.

## Campaign farming

Goal stage is 12-3 on Brutal — best XP per energy once you can clear it fast, and shields there sell for the most silver. Energy costs are 4 (Normal), 6 (Hard), 8 (Brutal), 16 (Nightmare). XP totals to max a champion: 963,806 to take a rank-5 champion to level 50; 2,010,669 for a rank-6 champion to 60.

**Farmer:** Artak first. HellHades ships a dedicated "Solo Farm Build" mastery preset for him, his damage scales off HP (cheap, plentiful gear for a new account), all three of his skills are AoE, and he doubles as your Spider, Hydra, Dragon and Ice Golem carry.

**Caveat from the other source:** Ayumilove rates Artak 4/5 for Campaign, while Gnishak, Hurndig, Rathalos, Skullcrown, Uugo, Aniri and Kael get 5/5. Those champions need more crit and attack stats to farm well, which an early account does not have; the switch worth planning is Hurndig later for Nightmare 12-3, which HellHades describes as a popular role for him.
