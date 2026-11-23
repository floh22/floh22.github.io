import type { Lang } from './content/types'

export type Page = 'home' | 'impressum'

export interface Route {
  page: Page
  lang: Lang
}

// URL scheme: English at root, German under /de/
export function pathFor(page: Page, lang: Lang): string {
  const prefix = lang === 'de' ? '/de/' : '/'
  return page === 'home' ? prefix : `${prefix}impressum.html`
}

export function parsePath(pathname: string): Route {
  const lang: Lang = pathname === '/de' || pathname.startsWith('/de/') ? 'de' : 'en'
  const page: Page = /\/impressum(\.html)?$/.test(pathname) ? 'impressum' : 'home'
  return { page, lang }
}

export const ROUTES: Route[] = [
  { page: 'home', lang: 'en' },
  { page: 'home', lang: 'de' },
  { page: 'impressum', lang: 'en' },
  { page: 'impressum', lang: 'de' },
]
