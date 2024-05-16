/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dgpi9g6k6hezi.cloudfront.net'],
    remotePatterns: [
      { protocol: "https", hostname: "nextui-docs-v2.vercel.app" },
    ],
  },
};

module.exports = nextConfig;
