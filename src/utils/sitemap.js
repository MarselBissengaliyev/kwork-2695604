import { datef } from './date'

const { ROUTER } = require('@/app/router')

export const generateSitemapUrl = ({ domain, path }) => {
  if (domain.endsWith('/')) domain = domain.slice(0, domain.length - 1)
  if (path.startsWith('/')) path = path.slice(1, path.length)

  const loc = `https://${domain}/${path}`
  const lastmod = datef().format('YYYY-MM-DD')

  return {
    loc,
    lastmod,
  }
}

export const generateSitemap = ({ urls }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ loc, lastmod }) => `
    <url>
      <loc>${loc}</loc>
      <lastmod>${lastmod}</lastmod>
    </url>`
      )
      .join('')}
  </urlset>`

  return sitemap.trim()
}

export const generateSitemapIndex = ({ sitemaps }) => {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemaps
      ?.map(
        ({ loc, lastmod }) => `
    <sitemap>
      <loc>${loc}</loc>
      <lastmod>${lastmod}</lastmod>
    </sitemap>`
      )
      .join('')}
  </sitemapindex>`

  return sitemapIndex.trim()
}
