/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;