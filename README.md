# Portfolio site

Vue 3 + Vite static site, hosted on GitHub Pages.

- Content: `src/content/en.ts`, `src/content/de.ts`, shared links in `src/content/links.ts`
- CV PDFs: `public/cv/`
- Impressum: `src/ImpressumPage.vue`, address in `src/content/links.ts`
- Language: `?lang=en|de`, falls back to stored choice, then browser language

## Develop

    npm install
    npm run dev

## Deploy

Pushing to `main` builds and deploys via GitHub Actions (`.github/workflows/deploy.yml`).
Repo setting required: Settings → Pages → Source: GitHub Actions.
