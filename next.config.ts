import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
