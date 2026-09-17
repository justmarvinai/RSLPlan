"use client";

import { useMemo, useState } from "react";
import type { Champion } from "@/lib/schemas";
import { Card, Chip, ChampionLink, RARITY_TONE } from "@/components/ui";
import { useProgress, championProgress } from "@/lib/progress";

type SortKey = "default" | "hellhades" | "ayumilove" | "tomeCost";

export function RosterTable({ champions }: { champions: Champion[] }) {
  const [q, setQ] = useState("");
  const [rarity, setRarity] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("default");
  const { state, loaded } = useProgress();

  const rows = useMemo(() => {
    let out = champions.filter((c) => {
      const hit =
        c.name.toLowerCase().includes(q.toLowerCase()) ||
        c.faction.toLowerCase().includes(q.toLowerCase()) ||
        c.affinity.toLowerCase().includes(q.toLowerCase());
      return hit && (rarity === "all" || c.rarity === rarity);
    });

    if (sort === "hellhades") {
      // Derived sort order, computed at render time and labelled as such.
      // The stored scales are never merged — see CLAUDE.md 2.8.
      out = [...out].sort(
        (a, b) => (b.ratings.hellhades.overall ?? 0) - (a.ratings.hellhades.overall ?? 0),
      );
    } else if (sort === "ayumilove") {
      const rank = (r: string | undefined) => ["SS", "S", "A", "B", "C", "D"].indexOf(r ?? "D");
      out = [...out].sort((a, b) => rank(a.ratings.ayumilove.rank) - rank(b.ratings.ayumilove.rank));
    } else if (sort === "tomeCost") {
      out = [...out].sort((a, b) => a.tomes.toMaxAllSkills - b.tomes.toMaxAllSkills);
    }
    return out;
  }, [champions, q, rarity, sort]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, faction, affinity…"
          className="flex-1 min-w-[12rem] rounded-lg border px-3 py-2 text-sm"
          style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
        />
        <select
          value={rarity}
          onChange={(e) => setRarity(e.target.value)}
          className="rounded-lg border px-3 py-2 text-sm"
          style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
        >
          {["all", "Mythical", "Legendary", "Epic", "Rare"].map((r) => (
            <option key={r} value={r}>{r === "all" ? "All rarities" : r}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="rounded-lg border px-3 py-2 text-sm"
          style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
        >
          <option value="default">Sort: rarity</option>
          <option value="hellhades">Sort: HellHades overall (derived)</option>
          <option value="ayumilove">Sort: Ayumilove rank (derived)</option>
          <option value="tomeCost">Sort: tome cost</option>
        </select>
      </div>

      {sort !== "default" && (
        <p className="text-xs muted">
          Sorted by a <strong>derived</strong> order from one source only. The two rating scales
          are never combined.
        </p>
      )}

      <div className="space-y-2">
        {rows.map((c) => {
          const p = loaded ? championProgress(state, c.id) : undefined;
          const built = p && p.level >= 60 && p.stars >= 6;
          return (
            <Card key={c.id}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <ChampionLink c={c} showRarity={false} />
                    <Chip tone={RARITY_TONE[c.rarity]}>{c.rarity}</Chip>
                    <Chip>{c.affinity}</Chip>
                    {built && <Chip tone="ok">built</Chip>}
                  </div>
                  <p className="text-xs muted mt-1">
                    {c.faction} · {c.role} · starts rank {c.startRank} ·{" "}
                    {c.tomes.toMaxAllSkills} {c.tomes.tomeRarity} tomes to max
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 shrink-0">
                  <span className="text-xs muted mr-0.5">overall</span>
                  {c.ratings.hellhades.overall !== undefined && (
                    <Chip
                      tone="hh"
                      title={`HellHades ${c.ratings.hellhades.overall}/10 — retrieved ${c.ratings.hellhades.retrieved}`}
                    >
                      HH {c.ratings.hellhades.overall}
                    </Chip>
                  )}
                  {c.ratings.ayumilove.rank && (
                    <Chip
                      tone="ay"
                      title={`Ayumilove rank ${c.ratings.ayumilove.rank} — retrieved ${c.ratings.ayumilove.retrieved}`}
                    >
                      AY {c.ratings.ayumilove.rank}
                    </Chip>
                  )}
                </span>
              </div>
              {c.aura && (
                <p className="text-xs mt-2" style={{ color: "var(--accent)" }}>
                  Aura: {c.aura.effect} · {c.aura.scope}
                </p>
              )}
            </Card>
          );
        })}
        {rows.length === 0 && (
          <Card><p className="text-sm muted">No champions match that filter.</p></Card>
        )}
      </div>
    </div>
  );
}
