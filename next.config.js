const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'via.placeholder.com',
      'developers.google.com',
    ],
  },
  webpack: (config) => {
    config.cache = false
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/us',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:country/:sitemap.xml',
        destination: '/:country/sitemap/:sitemap.xml',
      },
    ]
  },
}

module.exports = withNextIntl(config)
