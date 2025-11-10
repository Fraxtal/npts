import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProduction ? '/npts': '',
  reactCompiler: true,
  output: "export",
  distDir : "dist",
};

export default nextConfig;
