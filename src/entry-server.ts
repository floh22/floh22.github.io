import { renderToString } from 'vue/server-renderer'
import { createApp } from './createApp'
import { contentFor } from './i18n'
import { pathFor, ROUTES, type Route } from './routes'

export { ROUTES, pathFor }

export async function render(route: Route) {
  const html = await renderToString(createApp(route))
  const c = contentFor(route.lang)
  const title = route.page === 'impressum' ? `${c.impressum.title} · Lars Eble` : c.meta.title
  return { html, title, description: c.meta.description }
}
