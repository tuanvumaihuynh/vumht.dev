<script setup lang="ts">
import { MotionConfig } from 'motion-v'

const colorMode = useColorMode()
const themeColor = computed(() => colorMode.value === 'dark' ? '#111713' : '#fafbf8')

useHead(() => ({
  titleTemplate: title => title ? `${title} — Vux` : 'Vux — Software Engineer',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: themeColor.value }
  ],
  link: [
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
}))

useSeoMeta({
  description: 'Portfolio of Vux, a software engineer building backend systems, distributed workloads, model-serving infrastructure, and observability tooling.',
  ogSiteName: 'Vux',
  ogType: 'website',
  twitterCard: 'summary'
})
</script>

<template>
  <UApp>
    <MotionConfig reduced-motion="user">
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
    </MotionConfig>
  </UApp>
</template>
