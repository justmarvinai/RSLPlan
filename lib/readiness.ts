import type { Team, TeamSlot } from "@/lib/data/teams";
import type { ChampionProgress, ProgressState } from "@/lib/progress";
import { EMPTY_CHAMPION } from "@/lib/progress";

/**
 * Turns "here is a plan" into "here is exactly what is blocking you".
 * This is the point of the site; everything else is presentation.
 */
export type SlotStatus = "ready" | "needs-rank" | "needs-level" | "not-started";

export interface SlotReadiness {
  slot: TeamSlot;
  status: SlotStatus;
  /** Human-readable blockers, e.g. "level 42 → needs 60". */
  shortfall: string[];
}

export interface TeamReadiness {
  ready: number;
  total: number;
  slots: SlotReadiness[];
  /** Level gate from the content itself, independent of champion build state. */
  gateBlocked: boolean;
  gateReason?: string;
}

function progressFor(state: ProgressState, id: string): ChampionProgress {
  return state.champions[id] ?? EMPTY_CHAMPION;
}

export function slotReadiness(slot: TeamSlot, state: ProgressState): SlotReadiness {
  const p = progressFor(state, slot.championId);
  const shortfall: string[] = [];

  if (p.level < 60) shortfall.push(`level ${p.level} → needs 60`);
  if (p.stars < 6) shortfall.push(`${p.stars}★ → needs 6★`);
  if (!p.geared) shortfall.push("not geared");
  if (!p.masteries) shortfall.push("no masteries");

  let status: SlotStatus;
  if (p.level >= 60 && p.stars >= 6 && p.geared && p.masteries) status = "ready";
  else if (p.level >= 60 && p.stars < 6) status = "needs-rank";
  else if (p.level > 1) status = "needs-level";
  else status = "not-started";

  return { slot, status, shortfall };
}

export function teamReadiness(
  team: Team,
  state: ProgressState,
  accountLevel: number,
): TeamReadiness {
  const slots = team.slots.map((s) => slotReadiness(s, state));
  const ready = slots.filter((s) => s.status === "ready").length;

  let gateBlocked = false;
  let gateReason: string | undefined;
  if (team.status === "level-gated" && team.gate) {
    const match = /level (\d+)/i.exec(team.gate);
    const required = match?.[1] ? Number(match[1]) : undefined;
    if (required !== undefined && accountLevel < required) {
      gateBlocked = true;
      gateReason = `Account level ${accountLevel} → needs ${required}`;
    }
  }

  return { ready, total: team.slots.length, slots, gateBlocked, gateReason };
}

/** Tier-6 masteries (Warmaster / Giant Slayer) require Rank 6 — owner-confirmed. */
export function canBuyMasteries(p: ChampionProgress): boolean {
  return p.stars >= 6;
}
