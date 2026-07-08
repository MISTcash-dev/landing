import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Development-specific optimizations
  ...(process.env.NODE_ENV === 'development' && {
    // Disable problematic features in dev
    experimental: {
      optimizePackageImports: [],
    },
    // Ensure proper dev server behavior
    eslint: {
      ignoreDuringBuilds: false,
    },
  }),

  // Universal settings
  reactStrictMode: true,
};

export default nextConfig;
