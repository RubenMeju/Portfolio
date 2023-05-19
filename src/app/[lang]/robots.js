export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: 'https://www.rubenyanez.com/es/sitemap.xml'
  }
}
