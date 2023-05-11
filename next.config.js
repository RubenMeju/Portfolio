/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/projects': { page: '/projects' },
      '/projects/[slug]': { page: '/projects/[slug]' },
      '/about': { page: '/about' }
    }
  }
}

module.exports = nextConfig
