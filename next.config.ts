import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['skillicons.dev'], // image domain
    dangerouslyAllowSVG: true,    // allows SVGs
  },
};

export default nextConfig;
