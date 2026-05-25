import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/male-evolution-plan" : "",
  assetPrefix: isProd ? "/male-evolution-plan" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
