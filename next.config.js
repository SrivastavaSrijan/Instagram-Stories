/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      '/api/home': ['./public/json/*'],
    },
  },
};

module.exports = nextConfig;
