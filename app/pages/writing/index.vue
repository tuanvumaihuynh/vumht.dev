<script setup lang="ts">
import { plannedArticles } from '~/data/portfolio'

useSeoMeta({
  title: 'Writing',
  description: 'Planned field notes from Vux on observability, distributed delivery, and IoT architecture.'
})
</script>

<template>
  <div class="page-shell py-16 sm:py-20 lg:py-28">
    <header class="grid gap-8 md:grid-cols-12">
      <div class="md:col-span-8">
        <p class="eyebrow">
          Writing
        </p>
        <h1 class="page-title mt-6 text-ink">
          Notes from building and debugging systems.
        </h1>
        <p class="body-copy mt-7">
          Practical write-ups on observability, distributed delivery, backend
          architecture, and the lessons that appear after the happy path ends.
        </p>
      </div>
    </header>

    <MotionReveal>
      <div class="mt-16 rounded-[1.5rem] border border-line bg-surface p-7 sm:p-10">
        <div class="flex size-11 items-center justify-center rounded-full bg-accent-subtle text-accent">
          <UIcon
            name="i-lucide-notebook-pen"
            class="size-5"
          />
        </div>
        <h2 class="mt-8 text-2xl font-semibold tracking-[-0.035em] text-ink">
          First notes are in progress.
        </h2>
        <p class="mt-4 max-w-[60ch] leading-7 text-copy-muted">
          I’m turning recent project experiments into concise, implementation-focused articles. Everything below is clearly labeled as planned until it is published.
        </p>
      </div>
    </MotionReveal>

    <div class="mt-14 border-t border-line">
      <MotionReveal
        v-for="(article, index) in plannedArticles"
        :key="article.title"
        :delay="index * 0.04"
      >
        <article class="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-8">
          <div class="md:col-span-3">
            <UBadge
              label="Planned"
              color="neutral"
              variant="soft"
            />
          </div>
          <div class="md:col-span-8 md:col-start-5">
            <h2 class="text-2xl font-semibold tracking-[-0.035em] text-ink">
              {{ article.title }}
            </h2>
            <p class="mt-3 leading-7 text-copy-muted">
              {{ article.description }}
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="topic in article.topics"
                :key="topic"
                class="font-mono text-xs text-accent"
              >{{ topic }}</span>
            </div>
          </div>
        </article>
      </MotionReveal>
    </div>
  </div>
</template>
