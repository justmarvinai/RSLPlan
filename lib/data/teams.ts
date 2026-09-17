import type { ContentKey } from "@/lib/schemas";

/**
 * TIER 3 — ANALYSIS. Generated from docs/plan/12-teams-by-content.md.
 * Regenerate wholesale when the roster or account state changes; never patch
 * one team and leave the rest stale. See CLAUDE.md 2.9.
 */
export const TIER = 3 as const;
export const SOURCE_DOC = "docs/plan/12-teams-by-content.md";

export interface TeamSlot {
  championId: string;
  leader?: boolean;
  role: string;
  /** The rating or mechanic behind this pick. Required — a slot without a reason is not allowed. */
  why: string;
  alternatives?: string[];
}

export interface Team {
  content: ContentKey;
  name: string;
  size: number;
  slots: TeamSlot[];
  status: "available" | "level-gated";
  gate?: string;
  notes: string[];
  /** Hazards specific to this roster running this team. */
  warnings?: string[];
}

export const TEAMS: Team[] = [
  {
    content: "campaign", name: "Brutal 12-3 farm", size: 4, status: "available",
    slots: [
      { championId: "artak", leader: true, role: "Solo farmer",
        why: "HellHades ships a dedicated Solo Farm Build preset. All three skills are AoE and damage scales off HP — the cheapest gear to find." },
    ],
    notes: [
      "Slots 2-4 are food champions soaking XP.",
      "Gear in whatever Speed / Perception / Lifesteal you have; prioritise HP% and SPD.",
      "Sources disagree: Ayumilove rates Artak 4/5 for Campaign, below six champions at 5/5. He is chosen on gear-cost grounds, not rating grounds.",
      "Planned switch: Hurndig for Nightmare 12-3 (HellHades ships him a Campaign Farmer preset).",
    ],
  },
  {
    content: "demonLord", name: "Untuned speed team", size: 5, status: "available",
    slots: [
      { championId: "ultimate-deathknight", leader: true, role: "Decrease ATK + shields",
        why: "+30% Ally DEF aura in all battles. AoE 50% Decrease ATK at 80% chance — the top-priority debuff here, because the boss's A1 and A2 scale off its own ATK." },
      { championId: "starsage-galathir", role: "Cleanse, Block Debuffs, revive",
        why: "HellHades Demon Lord 8. Cleanse plus AoE revive keeps a thin team alive through the full fight." },
      { championId: "ninja", role: "Primary damage",
        why: "HellHades Demon Lord 10. Escalation ramps +20% ATK per cycle against bosses, and his A1 fills his own Turn Meter 15% vs bosses." },
      { championId: "artak", role: "Second Decrease ATK + burns",
        why: "HellHades Demon Lord 9. A second AoE 50% Decrease ATK stacks the survivability lever." },
      { championId: "rathalos-blademaster", role: "Boss damage",
        why: "HellHades Demon Lord 9. A1 Decrease DEF cannot be resisted against bosses; A2 ignores 100% of boss DEF." },
    ],
    notes: [
      "Run untuned. HellHades recommends an untuned speed team for early accounts.",
      "Killing the boss doubles every member's chest — clear a lower difficulty rather than scratch a higher one.",
      "Later upgrades: Godseeker Aniri (Demon Lord 9, revive with full cooldown reset), then Turvold (Demon Lord 10) once he can be kept buffed.",
    ],
  },
  {
    content: "chimera", name: "Weekly chest team", size: 5, status: "level-gated",
    gate: "Account level 33 (currently 26)",
    slots: [
      { championId: "starsage-galathir", leader: true, role: "Sustain + the Viper answer",
        why: "HellHades Chimera 10 in base form. +80 Ally RES aura. His ALTERNATE form's Eclipse Rend places Block Active Skills on all enemies — exactly the Viper's stated weakness." },
      { championId: "ninja", role: "Damage",
        why: "HellHades Chimera 10. Sustained boss damage across a 65-turn fight, and Escalation keeps ramping because the Chimera is always a boss target." },
      { championId: "uugo", role: "Block Buffs + Decrease DEF",
        why: "HellHades Chimera 8. Block Buffs stops the Ultimate form buffing itself." },
      { championId: "rathalos-blademaster", role: "Boss damage",
        why: "HellHades Chimera 8. His A2 ignores 100% of a boss's DEF, which is exactly the profile this fight rewards over a long attrition window." },
      { championId: "ultimate-deathknight", role: "Decrease ATK + shields",
        why: "Naturally your highest-DEF champion, so Hunter's Gaze lands on him by design.",
        alternatives: ["fenax"] },
    ],
    notes: [
      "Skip Trials — they strengthen the Ultimate form and only pay off in competitive Clash placement, which this clan does not contest.",
      "Run it for the weekly chest and the Ocular Masses, which are the only source of Relics.",
      "Plan: fight in base form, Metamorph when the Viper appears (it grants an Extra Turn), lock it with Block Active Skills, Metamorph back.",
      "Give Galathir more C.DMG% than UDK so the Ram's Duel lands on UDK.",
      "Never remove Hunter's Gaze — removal triggers an extra AoE.",
      "Re-apply Decrease ATK AFTER the Lion's A3, which strips it and hits harder per debuff removed.",
    ],
    warnings: [
      "RAM FORM reflects 50% of your damage and ignores 50% DEF against anyone under Perfect Veil. Galathir's A3 grants Perfect Veil to all allies, and Ninja's A2 grants it to himself — do not use either going into Ram form.",
    ],
  },
  {
    content: "hydra", name: "Six-champion team", size: 6, status: "level-gated",
    gate: "Account level 45 (currently 26)",
    slots: [
      { championId: "starsage-galathir", leader: true, role: "Sustain + RES aura",
        why: "HellHades Hydra 9. His +80 Ally RES aura directly serves the 355 RES the Mischief target needs." },
      { championId: "ultimate-deathknight", role: "Protection",
        why: "HellHades Hydra 9. Blocks a hit aimed at any ally and redirects it to himself." },
      { championId: "uugo", role: "Heal Reduction removal",
        why: "HellHades Hydra 9. Her A3 removes ALL Heal Reduction — the direct counter to Head of Decay. This is why HellHades calls her a Hydra MVP." },
      { championId: "artak", role: "HP Burn",
        why: "HellHades Hydra 10. HP Burn cancels Head of Blight's Poison Cloud, which otherwise blocks all poison damage and makes your hits weak." },
      { championId: "ninja", role: "Second HP Burn + activation",
        why: "HellHades Hydra 10. A second HP Burn source so Poison Cloud stays cancelled even when Artak is on cooldown, and his A2 detonates burns against bosses." },
      { championId: "rathalos-blademaster", role: "Primary damage",
        why: "HellHades Hydra 10. +50% damage against HP Burn targets — fed by Artak and Ninja." },
    ],
    notes: [
      "All six rate HellHades 9-10 for Hydra. This is the strongest alignment between this roster and any content type.",
      "Champion lock means you eventually need a second team, not just this one.",
    ],
    warnings: [
      "Head-of-Torment counterplay versus Galathir's Perfect Veil has NOT been researched. Verify before trusting this team at higher difficulties.",
    ],
  },
  {
    content: "spider", name: "Burn team", size: 5, status: "available",
    slots: [
      { championId: "artak", leader: true, role: "HP Burn engine",
        why: "HellHades Spider 10. Places AND activates HP Burn. HellHades names him a champion who can solo this boss with good gear." },
      { championId: "starsage-galathir", role: "Cleanse + revive",
        why: "HellHades Spider 10. Mass revive and Block Debuffs keep the team alive while spiderlings pile up and the boss ramps to +100% ATK." },
      { championId: "ultimate-deathknight", role: "Spiderling soak",
        why: "HellHades Spider 9. His passive blocks single-target hits aimed at allies and takes them himself — tailor-made for spiderlings." },
      { championId: "rathalos-blademaster", role: "Damage",
        why: "HellHades Spider 10. +50% damage against the burning targets Artak creates." },
      { championId: "ninja", role: "Second burn source",
        why: "HellHades Spider 8. A second HP Burn applier so the burn stays up on every spiderling wave.",
        alternatives: ["uugo", "high-khatun"] },
    ],
    notes: [
      "Stages 21-25 cap Enemy Max HP damage, which is why HP Burn plus activation becomes the damage route.",
      "Farm stage 10 during Spider tournaments — unusually generous gear for its energy cost.",
      "Endgame: Artak solo, or Artak + UDK as a duo.",
    ],
  },
  {
    content: "dragon", name: "Poison team", size: 5, status: "available",
    slots: [
      { championId: "gnishak-verminlord", leader: true, role: "Protected poisons",
        why: "HellHades Dragon 10. +30% Ally ATK aura in all battles. His bombs convert into PROTECTED poisons — exactly what a fight that reduces poison damage by 60% wants." },
      { championId: "starsage-galathir", role: "Cleanse + revive",
        why: "HellHades Dragon 10. Full cleanse and AoE revive cover the Scorch nuke when a rotation slips." },
      { championId: "ultimate-deathknight", role: "Decrease ATK + shields",
        why: "HellHades Dragon 10. AoE Decrease ATK blunts the Scorch hit, and his shield plus Continuous Heal carries an under-geared team." },
      { championId: "artak", role: "HP Burn pressure",
        why: "HellHades Dragon 10. HP Burn adds damage-over-time on top of Gnishak's poisons, and the Dragon reduces poison damage by 60% so you want both types." },
      { championId: "ninja", role: "Decrease DEF + damage",
        why: "HellHades Dragon 9. 60% Decrease DEF amplifies the whole team, and he fills his own Turn Meter 15% against bosses.",
        alternatives: ["kael"] },
    ],
    notes: [
      "Poison damage lands before the boss acts, which is why poisons cancel Scorch.",
      "Do NOT bring turn-meter or speed manipulation — the Dragon is immune to all of it.",
      "Stage 25 is Force affinity, so your Magic champions are disadvantaged there.",
      "Endgame: Gnishak solos it, and UDK solos it in a Toxic set — his HellHades preset is literally called Solo Drag & Ice Golem.",
    ],
  },
  {
    content: "fireKnight", name: "Multi-hit shield team", size: 5, status: "available",
    slots: [
      { championId: "alure", role: "Shield stripping + turn meter",
        why: "HellHades Fire Knight 10 and the named MVP of stages 21-25. 3-hit A1 removing 25% turn meter per CRITICAL hit, which matters most once TM reduction is halved after stage 20." },
      { championId: "high-khatun", leader: true, role: "Speed lead",
        why: "+19% Ally SPD aura in all battles. HellHades Fire Knight 8." },
      { championId: "apothecary", role: "Shield stripping + heal",
        why: "3-hit A1. HellHades Fire Knight 8, Ayumilove 5/5." },
      { championId: "ninja", role: "Damage",
        why: "HellHades Fire Knight 9 — the highest FK rating among the core five." },
      { championId: "gnishak-verminlord", role: "Shield stripping",
        why: "3-hit A1. HellHades Fire Knight 9.", alternatives: ["kael", "morag-bronzelock"] },
    ],
    notes: [
      "The shield scales: 5 hits at stages 1-6, 7 at 7-9, 10 at 10-20, 12 at 21-25.",
      "Alure + Apothecary + Gnishak already supply 9 A1 hits, which covers stages 1-9 outright.",
      "Build Alure to 100% C.RATE — her A1 only strips turn meter on a critical hit.",
      "Morag's A3 pulls two allies into a joint attack, stripping extra shield counters.",
      "The core five is weak here — UDK is rated 5. This is deliberately a different team.",
    ],
  },
  {
    content: "iceGolem", name: "Block Revive team", size: 5, status: "available",
    slots: [
      { championId: "ultimate-deathknight", leader: true, role: "Decrease ATK + shields",
        why: "HellHades Ice Golem 10. AoE Decrease ATK is close to mandatory here. Force affinity, so advantaged at stage 25 (Magic)." },
      { championId: "starsage-galathir", role: "Cleanse + Block Debuffs",
        why: "HellHades Ice Golem 10. Answers the Decrease ACC and Freeze the fight applies." },
      { championId: "fenax", role: "Block Revive",
        why: "HellHades Ice Golem 10, Ayumilove 5/5. His A1 kill-clause means enemies cannot be revived — the direct answer to the counter reviving Klyssus's allies. It needs NO Accuracy because it is a kill effect, not a debuff." },
      { championId: "artak", role: "Second Decrease ATK + burns", why: "HellHades Ice Golem 10." },
      { championId: "gnishak-verminlord", role: "Damage",
        why: "HellHades Ice Golem 10. Force affinity, advantaged at stage 25.",
        alternatives: ["ninja", "hurndig"] },
    ],
    notes: [
      "HellHades rates Artak, UDK, Gnishak, Hurndig and Fenax all 10 here — Ice Golem is this roster's deepest dungeon.",
      "Stage 25 is Magic affinity, so your four Force champions are advantaged.",
      "Endgame: UDK in Toxic and Gnishak are both listed as soloists.",
    ],
  },
  {
    content: "arena", name: "Go-first team", size: 4, status: "available",
    slots: [
      { championId: "skullcrown", leader: true, role: "Speed lead",
        why: "+23% Ally SPD in Arena. Classic Arena is decided by turn order before damage, and with a family clan Arena exists to farm Great Hall medals." },
      { championId: "starsage-galathir", role: "Control (alternate form)",
        why: "HellHades Arena 10 in BOTH forms. Dark Nebula gives allies +50% ACC and places 50% Decrease RES plus an AoE Stun without needing to attack." },
      { championId: "hurndig", role: "Decrease DEF + turn meter",
        why: "HellHades Arena 9. AoE 60% Decrease DEF, and his A3 fully depletes a turn meter." },
      { championId: "turvold", role: "Nuke",
        why: "HellHades Arena 9. Self-buffs +50% ATK / +30% C.RATE / +30% SPD, takes an Extra Turn, then nukes." },
    ],
    notes: [
      "Switch the lead to Hurndig (+35% Ally ATK in Arena) once your opening nuke reliably kills a defender.",
      "Defence options: UDK and Gnishak, both HellHades Arena 10.",
      "The pack proposed five names for this four-slot mode and flagged the composition as NOT validated against the live arena meta.",
    ],
  },
];

export function getTeam(content: ContentKey): Team | undefined {
  return TEAMS.find((t) => t.content === content);
}
