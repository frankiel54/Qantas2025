import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: 'unsplash.it',
    }],
  },
};

export default nextConfig;
