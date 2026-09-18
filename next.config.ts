import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.plasmic.app",
      },
    ],
  },
};

export default nextConfig;
