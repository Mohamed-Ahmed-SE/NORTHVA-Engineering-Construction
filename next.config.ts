import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/expertise",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

