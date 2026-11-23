import { computed, ref } from 'vue'
import en from './content/en'
import de from './content/de'
import type { Content, Lang } from './content/types'

const contents: Record<Lang, Content> = { en, de }

// Set once per render (prerender) or from the URL (client)
export const lang = ref<Lang>('en')
export const t = computed(() => contents[lang.value])

export function contentFor(l: Lang): Content {
  return contents[l]
}
