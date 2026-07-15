<script setup lang="ts">
import { identity } from '~/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line py-10">
    <div class="page-shell grid gap-8 text-sm text-copy-muted sm:grid-cols-2 sm:items-end">
      <div>
        <p class="font-medium text-ink">
          Designed and built by Vux.
        </p>
        <p class="mt-1">
          Nuxt SSR · Vercel ready · © {{ year }}
        </p>
      </div>

      <div class="flex flex-wrap gap-x-5 gap-y-3 sm:justify-end">
        <a
          :href="identity.github"
          target="_blank"
          rel="noreferrer"
          class="hover:text-ink"
        >GitHub</a>
        <a
          :href="identity.linkedin"
          target="_blank"
          rel="noreferrer"
          class="hover:text-ink"
        >LinkedIn</a>
        <a
          :href="`mailto:${identity.email}`"
          class="hover:text-ink"
        >Email</a>
      </div>
    </div>
  </footer>
</template>
