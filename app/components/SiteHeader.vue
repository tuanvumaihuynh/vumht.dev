<script setup lang="ts">
import { identity } from '~/data/portfolio'
</script>

<template>
  <header class="page-shell pt-14 sm:pt-16">
    <div class="flex items-center justify-between gap-5">
      <NuxtLink
        to="/"
        aria-label="Vux — Home"
        class="text-[0.95rem] font-medium tracking-[-0.02em] text-ink"
      >
        Vux
      </NuxtLink>

      <nav
        aria-label="Primary"
        class="flex items-center gap-5 text-[0.875rem] text-copy-muted"
      >
        <NuxtLink
          to="/about"
          class="transition-colors hover:text-ink"
          active-class="text-ink"
        >
          About
        </NuxtLink>
        <a
          :href="identity.github"
          target="_blank"
          rel="noreferrer"
          class="transition-colors hover:text-ink"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
</template>
