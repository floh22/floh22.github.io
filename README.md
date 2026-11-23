# Portfolio site

Vue 3 + Vite, static build served by nginx in Docker.

- Content: `src/content/en.ts`, `src/content/de.ts`, shared links in `src/content/links.ts`
- CV PDFs: `public/cv/`
- Language: `?lang=en|de`, falls back to stored choice, then browser language

## Develop

    npm install
    npm run dev

## Deploy

    docker compose up -d --build

Serves on host port 8080 (see `docker-compose.yml`).
