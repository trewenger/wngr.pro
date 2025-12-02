/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Netlify-specific configuration
  // The Next.js plugin for Netlify handles most configuration automatically
  output: 'standalone',
}

module.exports = nextConfig
