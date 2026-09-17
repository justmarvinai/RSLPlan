import type { ContentKey } from "@/lib/schemas";

/**
 * TIER 2 — mechanics, from docs/research/03-content-mechanics.md (research pack,
 * retrieved 2026-09-17). Descriptions are the requirement each fight imposes,
 * not champion assignments.
 */
export interface ContentDef {
  key: ContentKey;
  name: string;
  teamSize: number;
  /** What the fight actually demands. */
  demands: string[];
  /** Accuracy / speed / resistance floors where the pack gives them. */
  statFloors?: string[];
  gate?: string;
  affinityNote?: string;
}

export const CONTENT: ContentDef[] = [
  {
    key: "campaign", name: "Campaign Farming", teamSize: 4,
    demands: [
      "AoE damage and self-sustain — one farmer plus three food champions",
      "Brutal 12-3 is the target: best XP per energy, and shields there sell for the most silver",
      "Energy per run: Normal 4 · Hard 6 · Brutal 8 · Nightmare 16",
    ],
  },
  {
    key: "demonLord", name: "Demon Lord (Clan Boss)", teamSize: 5,
    demands: [
      "Decrease ATK is the top-priority debuff — the boss's A1 and A2 are AoE attacks scaling off its own ATK",
      "Its A3 is single-target scaling off the TARGET's HP, so the soaker wants high DEF and comparatively low HP",
      "Cap of 10 debuffs on the boss at once",
      "Opens Void, switches to Force/Magic/Spirit at 50% HP",
      "Run untuned first — a real 2:1 or 4:3 speed tune needs the DeadwoodJedi calculator",
    ],
    gate: "Clan",
  },
  {
    key: "chimera", name: "Chimera (Clan Boss)", teamSize: 5,
    demands: [
      "65 turns. Forms cycle Ultimate → Ram → Ultimate → Lion → Ultimate → Viper, five boss turns each",
      "Ram places Duel on the LOWEST C.DMG champion; Lion places Hunter's Gaze on the HIGHEST DEF champion — both chosen by your gear",
      "Ram reflects 50% of your damage and ignores 50% DEF against anyone under Veil, Perfect Veil or Taunt",
      "Viper is where teams wipe — but it is vulnerable to Block Active Skills",
      "Unusually, the Chimera can be hit with Decrease SPD",
      "Only source of Ocular Masses, and therefore of Relics",
    ],
    gate: "Account level 33",
  },
  {
    key: "hydra", name: "Hydra (Clan Boss)", teamSize: 6,
    demands: [
      "Three keys a week, and those six champions are locked out for the rest of the week",
      "Head of Blight's Poison Cloud blocks all poison damage — HP Burn cancels it",
      "Head of Decay applies Heal Reduction to the team",
      "Head of Mischief steals buffs with high ACC — one champion is built as the RES target",
      "Head of Wrath triggers Vengeance after 15 hits it has taken — a 300% AoE",
    ],
    statFloors: ["Normal: >210 SPD", "~215 ACC", "355 RES on the Mischief target"],
    gate: "Account level 45",
  },
  {
    key: "spider", name: "Spider's Den", teamSize: 5,
    demands: [
      "Spiderlings spawn 6 at start, 2 each of your turns, 4 after each Spider turn, cap 10",
      "The Spider devours them for a 3% heal and +10% ATK each, up to +100% ATK",
      "Stages 21-25 cap Enemy Max HP damage and halve turn-meter reduction — HP Burn plus activation becomes the damage route",
      "Stage 10 drops unusually generous gear for its energy cost",
    ],
  },
  {
    key: "dragon", name: "Dragon's Lair", teamSize: 5,
    demands: [
      "The boss charges Scorch; poison damage lands before it acts, so poisons cancel Scorch",
      "It reduces incoming poison damage by 60% — you need many poisons, not a few",
      "Immune to ALL turn-meter and speed manipulation — leave Alure and High Khatun's tricks out",
      "Stages 21-25 cap Enemy Max HP damage to 10% per hit",
    ],
    affinityNote: "Stage 25 is Force affinity (owner-confirmed) — Magic champions are disadvantaged there.",
  },
  {
    key: "fireKnight", name: "Fire Knight's Castle", teamSize: 5,
    demands: [
      "The shield is the whole fight, and it scales: 5 hits at stages 1-6, 7 at 7-9, 10 at 10-20, 12 at 21-25",
      "While up, the boss is immune to debuffs and turn-meter effects and takes 80% less damage",
      "On his turn he heals and fully regenerates the shield",
      "After stage 20, turn-meter reduction is halved",
      "Hit COUNT matters, not hit damage — multi-hit A1s strip the shield",
    ],
  },
  {
    key: "iceGolem", name: "Ice Golem's Peak", teamSize: 5,
    demands: [
      "Klyssus counter-attacks at HP thresholds",
      "With both allies alive that counter ignores defence entirely and can Freeze",
      "If the allies are dead, the counter revives them instead — which is what Block Revive answers",
      "His allies apply Heal Reduction and Decrease DEF",
      "AoE Decrease ATK is close to mandatory",
    ],
    affinityNote: "Stage 25 is Magic affinity (owner-confirmed) — Force champions are advantaged there.",
  },
  {
    key: "arena", name: "Classic Arena", teamSize: 4,
    demands: [
      "Decided by turn order before it is decided by damage",
      "Feeds Great Hall medals, which are permanent account-wide stats by affinity",
      "Speed aura matters more than anything else at this stage",
    ],
  },
];

export const GENERAL_STAT_FLOORS = [
  { target: "Dungeon stages 10-16", floor: "~150-180 ACC" },
  { target: "Dungeon stage 20+", floor: "220+ ACC" },
  { target: "Hydra Normal", floor: ">210 SPD · ~215 ACC · 355 RES on the Mischief target" },
];

export function getContent(key: ContentKey): ContentDef | undefined {
  return CONTENT.find((c) => c.key === key);
}
