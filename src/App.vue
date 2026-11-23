<script setup lang="ts">
import { lang, t } from './i18n'
import { EMAIL, GITHUB, LINKEDIN } from './content/links'
import ImpressumPage from './ImpressumPage.vue'
import { pathFor, type Page } from './routes'

const props = withDefaults(defineProps<{ page?: Page }>(), { page: 'home' })
// Section anchors point back to the homepage from subpages
const home = props.page === 'home' ? '' : pathFor('home', lang.value)
const year = __BUILD_YEAR__

// Remember explicit language choice for the root redirect in index.html
function remember(l: 'en' | 'de') {
  try {
    localStorage.setItem('lang', l)
  } catch {}
}

const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'] as const
</script>

<template>
  <header class="topbar">
    <nav class="container nav">
      <a :href="`${home}#top`" class="brand">Lars Eble</a>
      <ul class="nav-links">
        <li v-for="id in sections" :key="id">
          <a :href="`${home}#${id}`">{{ t.nav[id] }}</a>
        </li>
      </ul>
      <div class="lang-switch" role="group" aria-label="Language">
        <a :href="pathFor(page, 'en')" hreflang="en" :aria-current="lang === 'en' ? 'true' : undefined" @click="remember('en')">EN</a>
        <a :href="pathFor(page, 'de')" hreflang="de" :aria-current="lang === 'de' ? 'true' : undefined" @click="remember('de')">DE</a>
      </div>
    </nav>
  </header>

  <main v-if="page === 'impressum'" class="container">
    <ImpressumPage />
  </main>

  <main v-else id="top" class="container">
    <section class="hero">
      <h1>Lars Eble</h1>
      <p class="headline">{{ t.hero.headline }}</p>
      <p class="summary">{{ t.hero.summary }}</p>
      <p class="muted">{{ t.hero.location }}</p>
      <div class="actions">
        <a class="button primary" :href="t.hero.cvHref" download>{{ t.hero.cvLabel }}</a>
        <a class="button" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
        <a class="button" :href="GITHUB" target="_blank" rel="noopener">GitHub</a>
        <a class="button" :href="LINKEDIN" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </section>

    <section id="about">
      <h2>{{ t.about.title }}</h2>
      <p v-for="(p, i) in t.about.paragraphs" :key="i">{{ p }}</p>
    </section>

    <section id="experience">
      <h2>{{ t.experience.title }}</h2>
      <article v-for="job in t.experience.jobs" :key="job.company" class="entry">
        <div class="entry-head">
          <h3>{{ job.role }}, {{ job.company }}</h3>
          <span class="muted">{{ job.period }}</span>
        </div>
        <p class="muted small">
          {{ job.location }}
          <template v-if="job.link">
            · <a :href="job.link.href" target="_blank" rel="noopener">{{ job.link.label }}</a>
          </template>
        </p>
        <ul>
          <li v-for="(b, i) in job.bullets" :key="i">{{ b }}</li>
        </ul>
      </article>
    </section>

    <section id="projects">
      <h2>{{ t.projects.title }}</h2>
      <div class="cards">
        <article v-for="p in t.projects.items" :key="p.name" class="card">
          <h3>{{ p.name }}</h3>
          <p class="tagline">{{ p.tagline }}</p>
          <p>{{ p.description }}</p>
          <ul class="tags">
            <li v-for="tag in p.tech" :key="tag">{{ tag }}</li>
          </ul>
          <p v-if="p.links.length" class="card-links">
            <a v-for="l in p.links" :key="l.href" :href="l.href" target="_blank" rel="noopener">{{ l.label }} ↗</a>
          </p>
        </article>
      </div>
    </section>

    <section id="skills">
      <h2>{{ t.skills.title }}</h2>
      <dl class="skills">
        <template v-for="g in t.skills.groups" :key="g.name">
          <dt>{{ g.name }}</dt>
          <dd>{{ g.items }}</dd>
        </template>
      </dl>
    </section>

    <section id="education">
      <h2>{{ t.education.title }}</h2>
      <div class="entry">
        <div class="entry-head">
          <h3>{{ t.education.school }}</h3>
          <span class="muted">{{ t.education.location }}</span>
        </div>
        <div v-for="d in t.education.degrees" :key="d.name" class="entry-head degree">
          <span>{{ d.name }}</span>
          <span class="muted">{{ d.date }}</span>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>{{ t.contact.title }}</h2>
      <p>{{ t.contact.text }}</p>
      <ul class="contact-list">
        <li><a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a></li>
        <li><a :href="LINKEDIN" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a :href="GITHUB" target="_blank" rel="noopener">github.com/floh22</a></li>
      </ul>
    </section>
  </main>

  <footer class="container footer muted small">
    © {{ year }} Lars Eble · {{ t.footer }} · <a :href="pathFor('impressum', lang)">{{ t.impressum.link }}</a>
  </footer>
</template>
