import { PlanChecklist } from "@/components/plan-checklist";

export default function PlanPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-1">30-Day Plan</h1>
        <p className="text-sm muted">
          Five phases, 33 steps. Built for an account at level 26 with banked resources — it
          builds champions in parallel rather than rationing. Ticks are stored in this browser.
        </p>
      </div>
      <PlanChecklist />
    </div>
  );
}
