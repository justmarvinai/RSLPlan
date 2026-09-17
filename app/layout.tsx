import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSLPlan",
  description: "A researched progression plan for one RAID: Shadow Legends account.",
};

const NAV = [
  { href: "/", label: "Now" },
  { href: "/roster", label: "Roster" },
  { href: "/teams", label: "Teams" },
  { href: "/plan", label: "30-Day Plan" },
  { href: "/tomes", label: "Tomes" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header
          className="sticky top-0 z-20 border-b backdrop-blur"
          style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
        >
          <div className="mx-auto max-w-5xl px-4">
            <div className="flex items-center gap-2 h-14">
              <Link href="/" className="font-bold tracking-tight text-lg shrink-0">
                RSL<span style={{ color: "var(--accent)" }}>Plan</span>
              </Link>
              <nav className="flex gap-1 overflow-x-auto ml-auto -mr-1">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="px-2.5 py-1.5 rounded-md text-sm whitespace-nowrap hover:opacity-100 opacity-75 transition-opacity"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-6 sm:py-8">{children}</main>

        <footer className="border-t mt-8">
          <div className="mx-auto max-w-5xl px-4 py-6 text-xs muted space-y-2">
            <p>
              Champion data, ratings, mastery presets and boss mechanics are sourced from{" "}
              <a href="https://hellhades.com/" className="underline" style={{ color: "var(--hh)" }}>
                HellHades
              </a>{" "}
              and{" "}
              <a href="https://ayumilove.net/" className="underline" style={{ color: "var(--ay)" }}>
                Ayumilove
              </a>
              , retrieved 2026-09-17. Values are cached and dated; nothing is scraped or hotlinked
              at runtime.
            </p>
            <p>
              HellHades rates 0–10, Ayumilove rates 1–5 stars. The two scales are independent
              judgements and are never merged. Private planning tool for a single account.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
