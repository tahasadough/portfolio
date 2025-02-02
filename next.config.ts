import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    staleTimes: {
      static: 120,
      dynamic: 60,
    },
    reactCompiler: true,
  },
};

export default nextConfig;
