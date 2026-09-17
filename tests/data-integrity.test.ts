import { describe, it, expect } from "vitest";
import { roster, champions, getChampion } from "@/lib/data/roster";
import { TEAMS } from "@/lib/data/teams";
import { TOME_BUDGETS, LEGENDARY_TOME_INELIGIBLE, TOME_UPGRADES_ARE_RANDOM } from "@/lib/data/tomes";
import { PLAN_TASKS, PHASES } from "@/lib/data/plan";
import { CONTENT } from "@/lib/data/content";

/**
 * These are DATA tests, not UI tests. The failure mode that actually hurts the
 * one person who uses this site is the site confidently showing wrong advice —
 * and that is a data problem.
 */

describe("roster (tier 1)", () => {
  it("validates against the schema and holds all 18 champions", () => {
    expect(roster.schemaVersion).toBe(2);
    expect(champions).toHaveLength(18);
  });

  it("gives every rating block a source, a scale and a retrieval date", () => {
    for (const c of champions) {
      for (const key of ["hellhades", "ayumilove"] as const) {
        const r = c.ratings[key];
        expect(r.source, `${c.name}.${key}.source`).toBeTruthy();
        expect(r.scale, `${c.name}.${key}.scale`).toBeTruthy();
        expect(r.retrieved, `${c.name}.${key}.retrieved`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    }
  });

  it("keeps the two rating scales separate and never merged", () => {
    for (const c of champions) {
      expect(c.ratings.hellhades.scale).toBe("0-10");
      expect(c.ratings.ayumilove.scale).toBe("1-5 stars");
      // There must be no combined/average field anywhere on the champion.
      const flat = JSON.stringify(c).toLowerCase();
      expect(flat).not.toContain('"combinedscore"');
      expect(flat).not.toContain('"averagerating"');
      expect(flat).not.toContain('"mergedscore"');
    }
  });

  it("stores Starsage Galathir's ratings per form", () => {
    const g = getChampion("starsage-galathir");
    expect(g).toBeDefined();
    expect(g!.ratings.hellhades.byForm).toBeDefined();
    expect(Object.keys(g!.ratings.hellhades.byForm!)).toEqual(["base", "alternate"]);
    expect(g!.ratings.hellhades.byContent).toBeUndefined();
  });

  it("records the owner-verified facts that the plan depends on", () => {
    const v = roster.accountState.ownerVerified;
    expect(v.tier6MasteriesRequireRank6).toBe(true);
    expect(v.dragon25Affinity).toBe("Force");
    expect(v.iceGolem25Affinity).toBe("Magic");
    expect(v.factionGuardianChamberNeedsTwoCopies).toBe(true);
    expect(v.chimeraAvailable).toBe(true);
  });

  it("applies the Warmaster / Giant Slayer rule by A1 hit count", () => {
    for (const c of champions) {
      const { a1HitCount, tier6Capstone } = c.masteries;
      if (tier6Capstone === "Giant Slayer") {
        expect(a1HitCount, `${c.name} takes Giant Slayer so must have a 3+ hit A1`)
          .toBeGreaterThanOrEqual(3);
      }
      if (tier6Capstone === "Warmaster") {
        expect(a1HitCount, `${c.name} takes Warmaster so must have a 1-2 hit A1`)
          .toBeLessThanOrEqual(2);
      }
    }
  });
});

describe("teams (tier 3)", () => {
  it("references only champions that exist", () => {
    for (const t of TEAMS) {
      for (const s of t.slots) {
        expect(getChampion(s.championId), `${t.name}: unknown champion ${s.championId}`)
          .toBeDefined();
      }
      for (const alt of t.slots.flatMap((s) => s.alternatives ?? [])) {
        expect(getChampion(alt), `${t.name}: unknown alternative ${alt}`).toBeDefined();
      }
    }
  });

  it("never exceeds the team size for its content type", () => {
    for (const t of TEAMS) {
      const content = CONTENT.find((c) => c.key === t.content);
      expect(content, `no content def for ${t.content}`).toBeDefined();
      expect(t.size).toBe(content!.teamSize);
      expect(t.slots.length, `${t.name} has more slots than the mode allows`)
        .toBeLessThanOrEqual(t.size);
    }
  });

  it("gives every slot a stated reason", () => {
    for (const t of TEAMS) {
      for (const s of t.slots) {
        expect(s.why.length, `${t.name}/${s.championId} has no reason`).toBeGreaterThan(20);
        expect(s.role.length).toBeGreaterThan(0);
      }
    }
  });

  it("has at most one leader per team", () => {
    for (const t of TEAMS) {
      expect(t.slots.filter((s) => s.leader).length).toBeLessThanOrEqual(1);
    }
  });

  it("covers all nine requested content types", () => {
    const keys = TEAMS.map((t) => t.content).sort();
    expect(keys).toEqual(
      ["arena", "campaign", "chimera", "demonLord", "dragon", "fireKnight", "hydra", "iceGolem", "spider"].sort(),
    );
  });

  it("supplies enough A1 hits for the Fire Knight shield at stages 10-20", () => {
    const fk = TEAMS.find((t) => t.content === "fireKnight")!;
    const hits = fk.slots.reduce(
      (sum, s) => sum + (getChampion(s.championId)?.masteries.a1HitCount ?? 0), 0,
    );
    // Shield is 10 hits at stages 10-20, 12 at 21-25.
    expect(hits).toBeGreaterThanOrEqual(10);
  });
});

describe("tome plan (tier 3)", () => {
  it("is built on random upgrades", () => {
    expect(TOME_UPGRADES_ARE_RANDOM).toBe(true);
    expect(roster.resources.tomeUpgradeIsRandom).toBe(true);
  });

  it("only ever allocates a FULL MAX — never a partial spend", () => {
    for (const b of TOME_BUDGETS) {
      for (const a of b.allocations) {
        const c = getChampion(a.championId);
        expect(c, `unknown champion ${a.championId}`).toBeDefined();
        expect(
          a.cost,
          `${c!.name}: allocation of ${a.cost} is not a full max (${c!.tomes.toMaxAllSkills})`,
        ).toBe(c!.tomes.toMaxAllSkills);
      }
    }
  });

  it("allocates the right tome rarity to each champion", () => {
    for (const b of TOME_BUDGETS) {
      for (const a of b.allocations) {
        expect(getChampion(a.championId)!.tomes.tomeRarity).toBe(b.tier);
      }
    }
  });

  it("never plans Legendary tomes for a Mythical champion", () => {
    const legendary = TOME_BUDGETS.find((b) => b.tier === "Legendary")!;
    for (const a of legendary.allocations) {
      expect(LEGENDARY_TOME_INELIGIBLE).not.toContain(a.championId);
      expect(getChampion(a.championId)!.rarity).not.toBe("Mythical");
    }
  });

  it("never spends more tomes than are held, and keeps running totals honest", () => {
    for (const b of TOME_BUDGETS) {
      const total = b.allocations.reduce((s, a) => s + a.cost, 0);
      expect(total, `${b.tier}: spend does not match allocations`).toBe(b.spend);
      expect(total, `${b.tier}: overspends`).toBeLessThanOrEqual(b.held);
      expect(b.spend + b.spare).toBe(b.held);

      let running = 0;
      for (const a of b.allocations) {
        running += a.cost;
        expect(a.running, `${b.tier} order ${a.order}: running total wrong`).toBe(running);
      }
    }
  });

  it("matches the tome counts held in the roster data", () => {
    const held = roster.resources.tomes;
    const byTier = Object.fromEntries(TOME_BUDGETS.map((b) => [b.tier, b.held]));
    expect(byTier["Rare"]).toBe(held.rare);
    expect(byTier["Epic"]).toBe(held.epic);
    expect(byTier["Legendary"]).toBe(held.legendary);
    expect(byTier["Mythical"]).toBe(held.mythical);
  });
});

describe("30-day plan (tier 3)", () => {
  it("references only real phases and has unique ids", () => {
    const phaseIds = PHASES.map((p) => p.id);
    const seen = new Set<string>();
    for (const t of PLAN_TASKS) {
      expect(phaseIds, `${t.id} has unknown phase ${t.phase}`).toContain(t.phase);
      expect(seen.has(t.id), `duplicate task id ${t.id}`).toBe(false);
      seen.add(t.id);
    }
  });

  it("flags every irreversible tome step with a warning", () => {
    for (const t of PLAN_TASKS.filter((t) => t.category === "tomes")) {
      expect(t.warning, `${t.id} spends tomes without a warning`).toBeTruthy();
      expect(t.warning!.toUpperCase()).toContain("IRREVERSIBLE");
    }
  });

  it("warns about the 6-star requirement on every gem mastery purchase", () => {
    for (const t of PLAN_TASKS.filter((t) => t.category === "gems")) {
      expect(t.warning, `${t.id} buys masteries without the 6★ warning`).toBeTruthy();
      expect(t.warning).toMatch(/6★/);
    }
  });
});
