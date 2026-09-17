import { TOME_BUDGETS, RANDOMNESS_RULE, LEGENDARY_TOME_INELIGIBLE } from "@/lib/data/tomes";
import { getChampion } from "@/lib/data/roster";
import { Card, Chip, SectionTitle, Warning } from "@/components/ui";
import Link from "next/link";

export default function TomesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-1">Tome Allocation</h1>
        <p className="text-sm muted">26 Rare · 110 Epic · 12 Legendary · 0 Mythical</p>
      </div>

      <Warning>
        <strong>Skill tome upgrades are random on this account.</strong> {RANDOMNESS_RULE}
      </Warning>

      {TOME_BUDGETS.map((b) => (
        <section key={b.tier}>
          <SectionTitle
            sub={
              b.allocations.length === 0
                ? "Nothing to spend yet"
                : `Spend ${b.spend} of ${b.held}${b.spare > 0 ? ` · ${b.spare} spare` : ""}`
            }
          >
            {b.tier} Tomes
          </SectionTitle>

          {b.allocations.length > 0 ? (
            <div className="space-y-2">
              {b.allocations.map((a) => {
                const c = getChampion(a.championId);
                return (
                  <Card key={a.championId}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm muted tabular-nums">{a.order}.</span>
                        {c ? (
                          <Link href={`/roster/${c.id}`} className="font-medium hover:underline">
                            {c.name}
                          </Link>
                        ) : (
                          <span className="font-medium muted">{a.championId} — not researched</span>
                        )}
                        <Chip tone="ok">full max</Chip>
                      </div>
                      <span className="text-sm tabular-nums">
                        <strong>{a.cost}</strong>
                        <span className="muted"> · running {a.running}</span>
                      </span>
                    </div>
                    <p className="text-sm muted">{a.buys}</p>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card>
              <p className="text-sm muted">
                {LEGENDARY_TOME_INELIGIBLE.map((id) => getChampion(id)?.name).join(", ")} needs
                these and you hold none.
              </p>
            </Card>
          )}

          <p className="text-sm muted mt-3">{b.note}</p>
        </section>
      ))}

      <Card>
        <p className="text-sm">
          <strong>Every allocation above is a full max.</strong> There are deliberately no
          partial spends — under random upgrades, a partial spend cannot guarantee the skill you
          want, and the whole point of a tome is the skill it improves.
        </p>
      </Card>
    </div>
  );
}
