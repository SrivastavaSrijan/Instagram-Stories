const path = require('path');
/** @type {import('next').NextConfig} */
const dataFilePath = path.join(process.cwd(), 'public', 'json', 'data.json');
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      '/api/home': [dataFilePath],
    },
  },
};

module.exports = nextConfig;
