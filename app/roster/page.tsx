import { champions, byRarity } from "@/lib/data/roster";
import { RosterTable } from "@/components/roster-table";
import { SectionTitle } from "@/components/ui";

export default function RosterPage() {
  const sorted = [...champions].sort(byRarity);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-1">Roster</h1>
        <p className="text-sm muted">
          {champions.length} champions. Ratings from HellHades (0–10) and Ayumilove (1–5 stars),
          retrieved 2026-09-17 — shown separately, never merged.
        </p>
      </div>
      <SectionTitle sub="Starting rank drives food cost: a Mythical needs no feeders, a Rare needs three rank-ups.">
        All champions
      </SectionTitle>
      <RosterTable champions={sorted} />
    </div>
  );
}
