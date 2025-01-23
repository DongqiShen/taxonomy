import("./env.mjs")

const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // 跳过 TypeScript 类型检查
  },
}

module.exports = withContentlayer(nextConfig)
