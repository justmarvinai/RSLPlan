"use client";

import { useProgress, championProgress } from "@/lib/progress";
import { canBuyMasteries } from "@/lib/readiness";
import { Card, Chip } from "@/components/ui";

export function BuildTracker({
  championId, startRank,
}: { championId: string; startRank: number }) {
  const { state, loaded, setChampion } = useProgress();
  if (!loaded) return <Card><p className="text-sm muted">Loading…</p></Card>;

  const p = championProgress(state, championId);
  const canMastery = canBuyMasteries(p);

  return (
    <Card>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <label className="block">
          <span className="text-xs muted">Level</span>
          <input
            type="number" min={1} max={60} value={p.level}
            onChange={(e) =>
              setChampion(championId, {
                level: Math.max(1, Math.min(60, Number(e.target.value) || 1)),
              })
            }
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            style={{ background: "var(--surface-2)", borderColor: "var(--border)", color: "var(--text)" }}
          />
        </label>
        <label className="block">
          <span className="text-xs muted">Stars (starts at {startRank})</span>
          <input
            type="number" min={1} max={6} value={p.stars}
            onChange={(e) =>
              setChampion(championId, {
                stars: Math.max(1, Math.min(6, Number(e.target.value) || 1)),
              })
            }
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            style={{ background: "var(--surface-2)", borderColor: "var(--border)", color: "var(--text)" }}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        {([
          ["geared", "Geared"],
          ["booked", "Booked (full max)"],
          ["masteries", "Masteries"],
        ] as const).map(([key, label]) => (
          <label key={key} className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={p[key]}
              disabled={key === "masteries" && !canMastery}
              onChange={(e) => setChampion(championId, { [key]: e.target.checked })}
              className="size-4"
              style={{ accentColor: "var(--accent)" }}
            />
            <span className={key === "masteries" && !canMastery ? "muted" : ""}>{label}</span>
          </label>
        ))}
      </div>

      {!canMastery && (
        <p className="text-xs mt-3" style={{ color: "var(--warn)" }}>
          ⚠ Tier 6 masteries (Warmaster / Giant Slayer) require a <strong>6★</strong> champion —
          owner-confirmed. Rank up before spending 800 gems on a mastery set.
        </p>
      )}

      <div className="mt-3">
        {p.level >= 60 && p.stars >= 6 && p.geared && p.masteries ? (
          <Chip tone="ok">Built</Chip>
        ) : (
          <Chip tone="warn">In progress</Chip>
        )}
      </div>
    </Card>
  );
}
