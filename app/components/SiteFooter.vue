<script setup lang="ts">
import { identity } from '~/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="page-shell pb-12 pt-24 sm:pt-28">
    <div class="border-t border-line pt-5 text-[0.78rem] leading-6 text-copy-faint sm:flex sm:items-start sm:justify-between sm:gap-8">
      <div>
        <p class="flex items-center gap-2 text-ink">
          <UIcon
            name="i-simple-icons-spotify"
            class="size-3.5 text-[#1DB954]"
          />
          <span>Not Listening - Spotify</span>
        </p>
        <p class="mt-1">
          © {{ year }} Vux
        </p>
      </div>

      <div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-copy-muted sm:mt-0 sm:justify-end">
        <a
          :href="identity.github"
          target="_blank"
          rel="noreferrer"
          class="text-link"
        >GitHub</a>
        <a
          :href="identity.x"
          target="_blank"
          rel="noreferrer"
          class="text-link"
        >X</a>
        <a
          :href="identity.linkedin"
          target="_blank"
          rel="noreferrer"
          class="text-link"
        >LinkedIn</a>
        <a
          :href="`mailto:${identity.email}`"
          class="text-link"
        >Email</a>
      </div>
    </div>
  </footer>
</template>
