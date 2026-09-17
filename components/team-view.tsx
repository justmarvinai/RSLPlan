"use client";

import { TEAMS } from "@/lib/data/teams";
import { CONTENT } from "@/lib/data/content";
import { getChampion } from "@/lib/data/roster";
import { useProgress } from "@/lib/progress";
import { teamReadiness } from "@/lib/readiness";
import { Card, Chip, SectionTitle, Warning } from "@/components/ui";
import Link from "next/link";

const STATUS_TONE = {
  ready: "ok", "needs-rank": "warn", "needs-level": "warn", "not-started": "muted",
} as const;

const STATUS_LABEL = {
  ready: "ready", "needs-rank": "needs 6★", "needs-level": "levelling", "not-started": "not started",
} as const;

export function TeamView() {
  const { state, loaded } = useProgress();

  return (
    <div className="space-y-8">
      {TEAMS.map((team) => {
        const content = CONTENT.find((c) => c.key === team.content);
        const r = loaded ? teamReadiness(team, state, state.accountLevel) : undefined;

        return (
          <section key={team.content}>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-lg font-semibold tracking-tight">{content?.name}</h2>
              {team.status === "level-gated" && <Chip tone="warn">{team.gate}</Chip>}
              {r && !r.gateBlocked && (
                <Chip tone={r.ready === r.total ? "ok" : "warn"}>
                  {r.ready}/{r.total} ready
                </Chip>
              )}
              {r?.gateBlocked && <Chip tone="stop">{r.gateReason}</Chip>}
            </div>
            <p className="text-sm muted mb-3">{team.name} · {team.size} champions</p>

            {team.warnings?.map((w, i) => (
              <div key={i} className="mb-3"><Warning>⚠ {w}</Warning></div>
            ))}

            <div className="space-y-2">
              {team.slots.map((slot) => {
                const c = getChampion(slot.championId);
                const sr = r?.slots.find((s) => s.slot.championId === slot.championId);
                if (!c) {
                  return (
                    <Card key={slot.championId}>
                      <p className="text-sm muted">
                        {slot.championId} — not yet researched
                      </p>
                    </Card>
                  );
                }
                return (
                  <Card key={slot.championId}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <Link href={`/roster/${c.id}`} className="font-medium hover:underline">
                          {c.name}
                        </Link>
                        {slot.leader && <Chip tone="accent">leader</Chip>}
                        <Chip>{c.affinity}</Chip>
                      </div>
                      {sr && (
                        <Chip tone={STATUS_TONE[sr.status]}>{STATUS_LABEL[sr.status]}</Chip>
                      )}
                    </div>
                    <p className="text-sm font-medium">{slot.role}</p>
                    <p className="text-sm muted mt-1">{slot.why}</p>
                    {sr && sr.shortfall.length > 0 && sr.status !== "ready" && (
                      <p className="text-xs mt-2" style={{ color: "var(--warn)" }}>
                        Blocking: {sr.shortfall.join(" · ")}
                      </p>
                    )}
                    {slot.alternatives && slot.alternatives.length > 0 && (
                      <p className="text-xs muted mt-1">
                        Alternatives:{" "}
                        {slot.alternatives
                          .map((a) => getChampion(a)?.name ?? a)
                          .join(", ")}
                      </p>
                    )}
                  </Card>
                );
              })}
            </div>

            {content && (
              <details className="mt-3">
                <summary className="text-sm cursor-pointer muted hover:opacity-80">
                  What this fight demands
                </summary>
                <ul className="mt-2 space-y-1 text-sm muted list-disc pl-5">
                  {content.demands.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
                {content.statFloors && (
                  <p className="text-sm mt-2" style={{ color: "var(--accent)" }}>
                    Stat floors: {content.statFloors.join(" · ")}
                  </p>
                )}
                {content.affinityNote && (
                  <p className="text-sm mt-2 muted">{content.affinityNote}</p>
                )}
              </details>
            )}

            {team.notes.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm muted list-disc pl-5">
                {team.notes.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}
