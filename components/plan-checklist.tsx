"use client";

import { PLAN_TASKS, PHASES, DAY_30_TARGETS } from "@/lib/data/plan";
import { useProgress } from "@/lib/progress";
import { Card, Chip, SectionTitle } from "@/components/ui";

const CATEGORY_TONE = {
  setup: "muted", building: "hh", tomes: "stop", gems: "accent",
  farming: "ok", dungeon: "ay", clan: "warn", pvp: "muted",
} as const;

export function PlanChecklist() {
  const { state, loaded, toggleTask, setAccountLevel, reset } = useProgress();
  const done = loaded ? state.completedTasks.length : 0;
  const pct = Math.round((done / PLAN_TASKS.length) * 100);

  return (
    <div className="space-y-8">
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs muted">Progress</p>
            <p className="text-xl font-semibold tabular-nums">
              {done} / {PLAN_TASKS.length} <span className="text-sm muted">({pct}%)</span>
            </p>
          </div>
          <label className="text-sm">
            <span className="muted mr-2">Account level</span>
            <input
              type="number" min={1} max={100}
              value={loaded ? state.accountLevel : 26}
              onChange={(e) => setAccountLevel(Number(e.target.value) || 26)}
              className="w-20 rounded-lg border px-2 py-1 text-sm"
              style={{ background: "var(--surface-2)", borderColor: "var(--border)", color: "var(--text)" }}
            />
          </label>
        </div>
        <div className="mt-3 h-2 rounded-full overflow-hidden" style={{ background: "var(--surface-2)" }}>
          <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: "var(--accent)" }} />
        </div>
      </Card>

      {PHASES.map((phase) => {
        const tasks = PLAN_TASKS.filter((t) => t.phase === phase.id);
        const phaseDone = tasks.filter((t) => loaded && state.completedTasks.includes(t.id)).length;
        return (
          <section key={phase.id}>
            <SectionTitle sub={`${phase.days} · ${phaseDone}/${tasks.length} done`}>
              {phase.name}
            </SectionTitle>
            <div className="space-y-2">
              {tasks.map((t) => {
                const isDone = loaded && state.completedTasks.includes(t.id);
                return (
                  <Card key={t.id} className={isDone ? "opacity-55" : ""}>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox" checked={isDone}
                        onChange={() => toggleTask(t.id)}
                        className="mt-1 size-4 shrink-0"
                        style={{ accentColor: "var(--accent)" }}
                        aria-label={`Mark "${t.title}" done`}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1">
                          <span className={`font-medium ${isDone ? "line-through" : ""}`}>
                            {t.title}
                          </span>
                          <Chip tone={CATEGORY_TONE[t.category]}>{t.category}</Chip>
                        </div>
                        <p className="text-sm muted">{t.detail}</p>
                        {t.warning && (
                          <p className="text-sm mt-1.5" style={{ color: "var(--stop)" }}>
                            ⚠ {t.warning}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}

      <section>
        <SectionTitle sub="Calibrated for this account's banked resources — far above a normal 30-day target.">
          Day-30 targets
        </SectionTitle>
        <div className="space-y-2">
          {DAY_30_TARGETS.map((t) => (
            <Card key={t.metric}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-medium">{t.metric}</span>
                <span className="text-sm">
                  {t.target}
                  {t.stretch !== "—" && <span className="muted"> · stretch: {t.stretch}</span>}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <button
        onClick={() => { if (confirm("Reset all tracked progress in this browser?")) reset(); }}
        className="text-xs underline muted"
      >
        Reset tracked progress
      </button>
    </div>
  );
}
