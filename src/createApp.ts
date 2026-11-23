import { createSSRApp } from 'vue'
import App from './App.vue'
import { lang } from './i18n'
import type { Route } from './routes'

export function createApp(route: Route) {
  lang.value = route.lang
  return createSSRApp(App, { page: route.page })
}
