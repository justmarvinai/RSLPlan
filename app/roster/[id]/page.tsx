import { notFound } from "next/navigation";
import Link from "next/link";
import { champions, getChampion, hasMasteriesPurchased } from "@/lib/data/roster";
import { TEAMS } from "@/lib/data/teams";
import { CONTENT } from "@/lib/data/content";
import { LEGENDARY_TOME_INELIGIBLE } from "@/lib/data/tomes";
import { Card, Chip, RatingPair, SectionTitle, Note, Warning } from "@/components/ui";
import { BuildTracker } from "@/components/build-tracker";
import type { ContentKey } from "@/lib/schemas";

export function generateStaticParams() {
  return champions.map((c) => ({ id: c.id }));
}

export default async function ChampionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = getChampion(id);
  if (!c) notFound();

  const hh = c.ratings.hellhades;
  const ay = c.ratings.ayumilove;
  const inTeams = TEAMS.filter((t) => t.slots.some((s) => s.championId === c.id));
  const masteriesOwned = hasMasteriesPurchased(c.id);
  const isMythical = LEGENDARY_TOME_INELIGIBLE.includes(c.id);

  const contentRows = CONTENT.filter((ct) => ct.key !== "campaign" || ay.byContent?.campaign)
    .map((ct) => {
      const key = ct.key as ContentKey;
      const hhScore = hh.byForm ? hh.byForm["base"]?.[key] : hh.byContent?.[key];
      const ayScore = ay.byContent?.[key];
      return { ct, hhScore, ayScore };
    })
    .filter((r) => r.hhScore !== undefined || r.ayScore !== undefined);

  return (
    <div className="space-y-8">
      <div>
        <Link href="/roster" className="text-sm underline muted">← Roster</Link>
        <h1 className="text-2xl font-bold tracking-tight mt-2 mb-2">{c.name}</h1>
        <div className="flex flex-wrap gap-1.5">
          <Chip tone="accent">{c.rarity}</Chip>
          <Chip>{c.affinity}</Chip>
          <Chip>{c.faction}</Chip>
          <Chip>{c.role}</Chip>
          <Chip tone="muted">starts rank {c.startRank}</Chip>
          {masteriesOwned && <Chip tone="ok">masteries bought</Chip>}
        </div>
      </div>

      {isMythical && (
        <Warning>
          <strong>Legendary tomes cannot be used on a Mythical.</strong> {c.name} needs{" "}
          <strong>{c.tomes.toMaxAllSkills} Mythical Tomes</strong>, and you own zero. They come
          from Hero&apos;s Path events; there is no farmable source. Bank to{" "}
          {c.tomes.toMaxAllSkills}, then full-max.
        </Warning>
      )}

      <section>
        <SectionTitle>Your build</SectionTitle>
        <BuildTracker championId={c.id} startRank={c.startRank} />
      </section>

      <section className="grid sm:grid-cols-2 gap-3">
        <Card>
          <p className="text-xs muted mb-1">Aura</p>
          {c.aura ? (
            <p className="text-sm">
              <strong>{c.aura.effect}</strong> · {c.aura.scope}
            </p>
          ) : (
            <p className="text-sm muted">{c.auraNote ?? "None"}</p>
          )}
        </Card>
        <Card>
          <p className="text-xs muted mb-1">Food cost to 6★</p>
          <p className="text-sm"><strong>{c.feedersTo6Star}</strong></p>
        </Card>
        <Card>
          <p className="text-xs muted mb-1">Tomes to fully max</p>
          <p className="text-sm">
            <strong>{c.tomes.toMaxAllSkills} {c.tomes.tomeRarity}</strong>
            {c.tomes.ayumiloveHeaderSays !== undefined && (
              <span className="muted"> · page header says {c.tomes.ayumiloveHeaderSays}</span>
            )}
          </p>
          <p className="text-xs muted mt-1">
            HellHades book value {c.tomes.hellhadesBookValue}/10 · priority{" "}
            {c.tomes.hellhadesBookPriority.join(", ")}
          </p>
          {c.tomes.conflictNote && (
            <p className="text-xs mt-1" style={{ color: "var(--warn)" }}>{c.tomes.conflictNote}</p>
          )}
        </Card>
        <Card>
          <p className="text-xs muted mb-1">Masteries</p>
          <p className="text-sm">
            Preset: <strong>{c.masteries.firstPresetToCopy}</strong>
          </p>
          <p className="text-sm mt-0.5">
            Capstone:{" "}
            <strong>{c.masteries.tier6Capstone ?? "neither — support/defence trees"}</strong>
            <span className="muted"> · A1 hits {c.masteries.a1HitCount}×</span>
          </p>
          <p className="text-xs muted mt-1">{c.masteries.rule}</p>
        </Card>
      </section>

      <section>
        <SectionTitle sub="Two independent scales. HellHades rates 0–10, Ayumilove rates 1–5 stars. They are never combined.">
          Ratings by content
        </SectionTitle>
        {hh.byForm && (
          <Note>
            <strong>{c.name} has two forms.</strong> The table below shows <strong>base form</strong>{" "}
            HellHades scores. Alternate-form scores differ — notably Arena stays 10 in both forms,
            while Demon Lord drops from 8 to 4.
          </Note>
        )}
        <div className="mt-3 space-y-2">
          {contentRows.map(({ ct, hhScore, ayScore }) => (
            <Card key={ct.key}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{ct.name}</span>
                <RatingPair hh={hhScore} ay={ayScore} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid sm:grid-cols-2 gap-3">
        <Card>
          <p className="text-xs muted mb-1">PvE stat priority</p>
          <p className="text-sm">{c.gear.pveStats.join(" · ")}</p>
        </Card>
        <Card>
          <p className="text-xs muted mb-1">PvE sets</p>
          <p className="text-sm">{c.gear.pveSets.join(" · ")}</p>
        </Card>
      </section>

      {inTeams.length > 0 && (
        <section>
          <SectionTitle>Teams using {c.name}</SectionTitle>
          <div className="space-y-2">
            {inTeams.map((t) => {
              const slot = t.slots.find((s) => s.championId === c.id);
              return (
                <Card key={t.content}>
                  <div className="flex items-center gap-2 mb-1">
                    <Link href="/teams" className="font-medium hover:underline">{t.name}</Link>
                    {slot?.leader && <Chip tone="accent">leader</Chip>}
                    {t.status === "level-gated" && <Chip tone="warn">{t.gate}</Chip>}
                  </div>
                  {slot && (
                    <>
                      <p className="text-sm">{slot.role}</p>
                      <p className="text-sm muted mt-1">{slot.why}</p>
                    </>
                  )}
                </Card>
              );
            })}
          </div>
        </section>
      )}

      <p className="text-xs muted">
        Source: {c.gear.source}, retrieved {c.gear.retrieved}. Full verbatim skill text is in{" "}
        <code>docs/research/claude-web/01_ROSTER_DATA.md</code>.
      </p>
    </div>
  );
}
