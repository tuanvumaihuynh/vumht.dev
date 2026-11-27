<script setup lang="ts">
useHead({
  titleTemplate: title => title && title !== 'Vux' ? `${title} — Vux` : 'Vux',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0f1110' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'dark'
  }
})

useSeoMeta({
  description: 'Personal site of Vux — software engineer building software and shipping small, focused products.',
  ogSiteName: 'Vux',
  ogType: 'website',
  twitterCard: 'summary'
})
</script>

<template>
  <UApp>
    <div
      class="ambient"
      aria-hidden="true"
    />

    <a
      href="#main-content"
      class="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white focus:translate-y-0"
    >
      Skip to content
    </a>

    <SiteHeader />

    <main id="main-content">
      <NuxtPage />
    </main>

    <SiteFooter />
  </UApp>
</template>
