# Portfolio site

Vue 3 + Vite static site, hosted on GitHub Pages.

- Content: `src/content/en.ts`, `src/content/de.ts`, shared links in `src/content/links.ts`
- CV PDFs: `public/cv/`
- Routes: `src/routes.ts`
- Impressum: `src/ImpressumPage.vue`, address in `src/content/links.ts`
- URLs: English at `/`, German at `/de/`; `/` redirects German browsers to `/de/` unless EN was chosen
- Build prerenders all routes to static HTML (`scripts/prerender.mjs`), plus `sitemap.xml` and `robots.txt`

## Develop

    npm install
    npm run dev

## Deploy

Pushing to `main` builds and deploys via GitHub Actions (`.github/workflows/deploy.yml`).
Repo setting required: Settings → Pages → Source: GitHub Actions.
