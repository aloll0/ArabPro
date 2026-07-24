import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Demo covers are local, self-generated SVGs (scripts/generate-covers.mjs).
    // Safe to allow; remove if client projects use raster imagery only.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
