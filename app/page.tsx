import Link from "next/link";
import { account, resources, champions } from "@/lib/data/roster";
import { TEAMS } from "@/lib/data/teams";
import { Card, Chip, SectionTitle, Warning, Note } from "@/components/ui";
import { NextActions } from "@/components/next-actions";

const fmt = (n: number) => n.toLocaleString("en-GB");

export default function Home() {
  const gated = TEAMS.filter((t) => t.status === "level-gated");

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold tracking-tight mb-1">What do I do right now?</h1>
        <p className="text-sm muted">
          Account level {account.level} · {champions.length} champions · no content cleared yet
        </p>
      </section>

      <section>
        <SectionTitle sub="Tick these off as you go. Your progress is stored in this browser.">
          Next steps
        </SectionTitle>
        <NextActions />
      </section>

      <section>
        <SectionTitle sub="Banked from years of daily logins. None of these is a constraint.">
          Resources
        </SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Energy", value: fmt(resources.energy), sub: "~11,800 Brutal 12-3 runs" },
            { label: "Silver", value: `${Math.round(resources.silver / 1_000_000)}M`, sub: "upgrade gear freely" },
            { label: "Gems", value: fmt(resources.gems), sub: "5 mastery sets at 800" },
            { label: "Mystery Shards", value: fmt(resources.shards.mystery), sub: "your food supply" },
          ].map((s) => (
            <Card key={s.label}>
              <p className="text-xs muted">{s.label}</p>
              <p className="text-xl font-semibold tabular-nums">{s.value}</p>
              <p className="text-xs muted mt-0.5">{s.sub}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionTitle>Two things that shape everything</SectionTitle>
        <Warning>
          <strong>Skill tome upgrades are random</strong> on this account — you cannot choose
          which skill improves. So the tome plan only ever spends a <strong>full max</strong>.
          Never dribble tomes into a champion you cannot finish.{" "}
          <Link href="/tomes" className="underline">Tome plan →</Link>
        </Warning>
        <Note>
          <strong>Rarity sets starting rank, and starting rank sets food cost.</strong> Starsage
          Galathir arrives at rank 6 and costs <strong>zero feeders</strong>; Kael and Apothecary
          are the <strong>most expensive</strong> champions on this account to six-star. That is
          why the build order starts where it does.
        </Note>
      </section>

      <section>
        <SectionTitle sub="Everything else is open now.">Waiting on account level</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-3">
          {gated.map((t) => (
            <Card key={t.content}>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{t.name}</span>
                <Chip tone="warn">{t.gate}</Chip>
              </div>
              <p className="text-sm muted">
                {t.content === "chimera"
                  ? "Available to your clan — the only gate is your account level. Only source of Ocular Masses, and therefore Relics."
                  : "Six of your champions rate HellHades 9–10 here."}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Where to look</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: "/roster", title: "Roster", body: "All 18 champions with both rating scales, auras, tome costs and mastery presets." },
            { href: "/teams", title: "Teams", body: "Nine content types, each slot with the rating or mechanic behind it, and what is blocking you." },
            { href: "/plan", title: "30-Day Plan", body: "33 steps across five phases, with day-30 targets." },
            { href: "/tomes", title: "Tomes", body: "26 Rare, 110 Epic, 12 Legendary, 0 Mythical — allocated as full maxes only." },
          ].map((l) => (
            <Link key={l.href} href={l.href}>
              <Card className="h-full hover:opacity-90 transition-opacity">
                <p className="font-medium mb-1">{l.title} →</p>
                <p className="text-sm muted">{l.body}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
