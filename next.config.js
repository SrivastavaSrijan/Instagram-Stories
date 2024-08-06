const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      '/api/home': [path.join(__dirname, 'public/json/data.json')],
    },
  },
};

module.exports = nextConfig;
