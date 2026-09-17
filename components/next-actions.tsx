"use client";

import { PLAN_TASKS, PHASES } from "@/lib/data/plan";
import { useProgress } from "@/lib/progress";
import { Card, Chip } from "@/components/ui";
import Link from "next/link";

export function NextActions({ limit = 4 }: { limit?: number }) {
  const { state, loaded, toggleTask } = useProgress();

  if (!loaded) {
    return <Card><p className="text-sm muted">Loading your progress…</p></Card>;
  }

  const open = PLAN_TASKS.filter((t) => !state.completedTasks.includes(t.id));
  const done = PLAN_TASKS.length - open.length;
  const next = open.slice(0, limit);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm muted">
          {done} of {PLAN_TASKS.length} plan steps done
        </p>
        <Link href="/plan" className="text-sm underline" style={{ color: "var(--accent)" }}>
          Full plan →
        </Link>
      </div>

      {next.length === 0 ? (
        <Card>
          <p className="text-sm">
            Every step in the 30-day plan is ticked. Tell Claude where you have got to and the
            plan gets regenerated from there.
          </p>
        </Card>
      ) : (
        <div className="space-y-2">
          {next.map((t) => {
            const phase = PHASES.find((p) => p.id === t.phase);
            return (
              <Card key={t.id}>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 shrink-0 accent-current"
                    style={{ accentColor: "var(--accent)" }}
                    checked={false}
                    onChange={() => toggleTask(t.id)}
                    aria-label={`Mark "${t.title}" done`}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="font-medium">{t.title}</span>
                      <Chip>Days {t.days}</Chip>
                      {phase && <Chip tone="muted">{phase.name}</Chip>}
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
      )}
    </div>
  );
}
