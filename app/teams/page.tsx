import { TeamView } from "@/components/team-view";
import { GENERAL_STAT_FLOORS } from "@/lib/data/content";
import { Card } from "@/components/ui";

export default function TeamsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-1">Teams</h1>
        <p className="text-sm muted">
          Nine content types. Every slot states the rating or mechanic behind it. Readiness is
          computed from the build state you record on each champion page.
        </p>
      </div>

      <Card>
        <p className="text-xs muted mb-2">Accuracy gates most PvE failures</p>
        <div className="space-y-1">
          {GENERAL_STAT_FLOORS.map((f) => (
            <p key={f.target} className="text-sm">
              <span className="muted">{f.target}:</span> <strong>{f.floor}</strong>
            </p>
          ))}
        </div>
        <p className="text-xs muted mt-2">
          Use the HellHades Stages Tool for exact per-stage numbers rather than guessing.
        </p>
      </Card>

      <TeamView />
    </div>
  );
}
