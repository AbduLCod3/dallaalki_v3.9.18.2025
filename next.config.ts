import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This enables static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Set base path if your repo name is not the root domain
  // basePath: '/dallaalki_v3.9.18.2025'
};

export default nextConfig;
