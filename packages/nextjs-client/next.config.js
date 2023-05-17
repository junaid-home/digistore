/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ae01.alicdn.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
