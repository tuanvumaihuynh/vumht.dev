// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL ?? 'https://vumht.dev'

// Cloudflare Workers Builds sets WORKERS_CI_BRANCH; only main is production.
const isPreview = Boolean(process.env.WORKERS_CI_BRANCH)
  && process.env.WORKERS_CI_BRANCH !== 'main'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/seo',
    'motion-v/nuxt'
  ],

  ssr: true,

  devtools: {
    enabled: false
  },

  app: {
    pageTransition: false
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: siteUrl,
    indexable: !isPreview,
    name: 'Vux',
    description: 'Software engineer building software and shipping small, focused products.'
  },

  ui: {
    colorMode: false
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    // Pin static output: otherwise Nitro auto-detects Workers Builds, switches
    // to the cloudflare preset and redirects wrangler to a missing server entry.
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/sitemap.xml', '/robots.txt']
    }
  },

  vite: {
    optimizeDeps: {
      include: ['@unhead/schema-org/vue']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      { name: 'Geist', provider: 'google' },
      { name: 'Geist Mono', provider: 'google' }
    ]
  },

  ogImage: {
    enabled: false
  }
})
