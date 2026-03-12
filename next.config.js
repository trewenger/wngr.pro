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

}

module.exports = nextConfig
