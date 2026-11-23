import { computed, ref, watch } from 'vue'
import en from './content/en'
import de from './content/de'
import type { Content, Lang } from './content/types'

const contents: Record<Lang, Content> = { en, de }
const STORAGE_KEY = 'lang'

// Priority: ?lang= param, stored choice, browser language
function initialLang(): Lang {
  const param = new URLSearchParams(location.search).get('lang')
  if (param === 'en' || param === 'de') return param
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'de') return stored
  } catch {}
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export const lang = ref<Lang>(initialLang())
export const t = computed(() => contents[lang.value])

function applyDocument() {
  document.documentElement.lang = lang.value
  document.title = t.value.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', t.value.meta.description)
}

watch(
  lang,
  (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {}
    const url = new URL(location.href)
    url.searchParams.set('lang', value)
    history.replaceState(null, '', url)
    applyDocument()
  },
  { immediate: true },
)
