<script setup lang="ts">
import { socials } from '~/data/portfolio'

useSeoMeta({
  title: 'About',
  description: 'About Vux, a software engineer in Ho Chi Minh City building software and shipping small, focused products.'
})
</script>

<template>
  <div class="page-shell reveal mt-20 sm:mt-24">
    <header class="mb-8">
      <h1 class="text-[1.35rem] font-semibold leading-tight tracking-[-0.025em] text-ink">
        About
      </h1>
    </header>

    <div class="space-y-5 text-[0.94rem] leading-[1.7] text-ink/90">
      <p>
        I’m Vux, a software engineer based in Ho Chi Minh City, currently working at Qualgo.
      </p>
      <p>
        I build software across the stack and, outside of work, ship small, focused products like Runcoil and Stint. Away from the terminal, I’m usually playing badminton or basketball, reading, or catching up on sleep.
      </p>
    </div>

    <section class="mt-12">
      <h2 class="text-[1.05rem] font-semibold tracking-[-0.015em] text-ink">
        Social
      </h2>

      <ul class="mt-4 list-disc space-y-1.5 pl-5 text-[0.94rem] leading-7 text-ink/90 marker:text-copy-faint">
        <li
          v-for="item in socials"
          :key="item.url"
        >
          {{ item.label }}:
          <a
            :href="item.url"
            target="_blank"
            rel="noreferrer"
            class="text-link"
          >{{ item.handle }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>
