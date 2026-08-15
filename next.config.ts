import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/images/**" },
      { pathname: "/og.svg" },
    ],
  },
};

export default nextConfig;
