import Link from "next/link";
import type { Champion } from "@/lib/schemas";

export function Chip({
  children, tone = "muted", title,
}: {
  children: React.ReactNode;
  tone?: "muted" | "hh" | "ay" | "ok" | "warn" | "stop" | "accent";
  title?: string;
}) {
  const map = {
    muted: ["var(--surface-2)", "var(--muted)"],
    hh: ["var(--hh-soft)", "var(--hh)"],
    ay: ["var(--ay-soft)", "var(--ay)"],
    ok: ["var(--ok-soft)", "var(--ok)"],
    warn: ["var(--warn-soft)", "var(--warn)"],
    stop: ["var(--stop-soft)", "var(--stop)"],
    accent: ["var(--accent-soft)", "var(--accent)"],
  } as const;
  const [bg, fg] = map[tone];
  return (
    <span className="chip" style={{ background: bg, color: fg }} title={title}>
      {children}
    </span>
  );
}

/**
 * The two rating scales are ALWAYS rendered separately and labelled.
 * Merging or averaging them is forbidden — see CLAUDE.md 2.8.
 */
export function RatingPair({
  hh, ay, label,
}: {
  hh: number | undefined;
  ay: number | undefined;
  label?: string;
}) {
  if (hh === undefined && ay === undefined) {
    return <span className="text-xs muted">not rated</span>;
  }
  return (
    <span className="inline-flex items-center gap-1">
      {label && <span className="text-xs muted mr-0.5">{label}</span>}
      {hh !== undefined && (
        <Chip tone="hh" title={`HellHades ${hh}/10 — retrieved 2026-09-17`}>HH {hh}</Chip>
      )}
      {ay !== undefined && (
        <Chip tone="ay" title={`Ayumilove ${ay}/5 stars — retrieved 2026-09-17`}>AY {ay}★</Chip>
      )}
    </span>
  );
}

export function Card({
  children, className = "",
}: { children: React.ReactNode; className?: string }) {
  return <div className={`card p-4 ${className}`}>{children}</div>;
}

export function SectionTitle({
  children, sub,
}: { children: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="mb-3">
      <h2 className="text-lg font-semibold tracking-tight">{children}</h2>
      {sub && <p className="text-sm muted mt-0.5">{sub}</p>}
    </div>
  );
}

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg px-3 py-2 text-sm border"
      style={{ background: "var(--stop-soft)", borderColor: "var(--stop)", color: "var(--text)" }}
    >
      {children}
    </div>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg px-3 py-2 text-sm border"
      style={{ background: "var(--warn-soft)", borderColor: "var(--warn)", color: "var(--text)" }}
    >
      {children}
    </div>
  );
}

const RARITY_TONE = {
  Mythical: "stop", Legendary: "warn", Epic: "ay", Rare: "hh",
  Uncommon: "ok", Common: "muted",
} as const;

export function ChampionLink({ c, showRarity = true }: { c: Champion; showRarity?: boolean }) {
  return (
    <Link href={`/roster/${c.id}`} className="inline-flex items-center gap-1.5 hover:underline">
      <span className="font-medium">{c.name}</span>
      {showRarity && <Chip tone={RARITY_TONE[c.rarity]}>{c.rarity.slice(0, 4)}</Chip>}
    </Link>
  );
}

export { RARITY_TONE };
