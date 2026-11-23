<script setup lang="ts">
import { t } from './i18n'
import { ADDRESS, EMAIL } from './content/links'
</script>

<template>
  <section class="legal">
    <h1>{{ t.impressum.title }}</h1>
    <p class="muted">{{ t.impressum.legalBasis }}</p>
    <address>
      <template v-for="line in ADDRESS" :key="line">{{ line }}<br /></template>
    </address>

    <h3>{{ t.impressum.contactHeading }}</h3>
    <p>E-Mail: <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a></p>

    <p><a href="/">{{ t.impressum.back }}</a></p>
  </section>
</template>
