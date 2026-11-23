// Renders every route into dist/ as static HTML. Run after client and SSR builds.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const SITE = 'https://floh22.github.io'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, ROUTES, pathFor } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)
const template = await readFile(join(dist, 'index.html'), 'utf8')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const route of ROUTES) {
  const { html, title, description } = await render(route)
  const path = pathFor(route.page, route.lang)
  const head = [
    `<link rel="canonical" href="${SITE}${path}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE}${pathFor(route.page, 'en')}" />`,
    `<link rel="alternate" hreflang="de" href="${SITE}${pathFor(route.page, 'de')}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE}${pathFor(route.page, 'en')}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${SITE}${path}" />`,
    `<meta property="og:type" content="website" />`,
  ]
  if (route.page === 'impressum') head.push('<meta name="robots" content="noindex" />')

  const out = template
    .replace('<!--lang-->', route.lang)
    .replace('<!--title-->', escape(title))
    .replace('<!--description-->', escape(description))
    .replace('<!--head-->', head.join('\n    '))
    .replace('<!--app-->', html)

  const file = join(dist, path.endsWith('/') ? `${path}index.html` : path)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, out)
  console.log('prerendered', path)
}

const indexable = ROUTES.filter((r) => r.page !== 'impressum')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((r) => `  <url><loc>${SITE}${pathFor(r.page, r.lang)}</loc></url>`).join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`)
await rm(ssrDir, { recursive: true, force: true })
