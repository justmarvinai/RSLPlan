import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The plan and research live as markdown in docs/. The app reads data/roster.json
  // at build time via the typed data layer in lib/data — nothing is fetched at runtime.
  reactStrictMode: true,
};

export default nextConfig;
