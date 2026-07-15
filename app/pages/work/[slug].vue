<script setup lang="ts">
import { projects } from '~/data/portfolio'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const project = projects.find(item => item.slug === slug)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}

useSeoMeta({
  title: project.title,
  description: project.summary,
  ogTitle: `${project.title} — Vux`,
  ogDescription: project.summary
})
</script>

<template>
  <article class="page-shell py-14 sm:py-20 lg:py-28">
    <NuxtLink
      to="/work"
      class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-copy-muted hover:text-ink"
    >
      <UIcon
        name="i-lucide-arrow-left"
        class="size-4"
      />
      All work
    </NuxtLink>

    <header class="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
      <div class="md:col-span-8">
        <p class="eyebrow">
          {{ project.kicker }}
        </p>
        <h1 class="page-title mt-5 text-ink">
          {{ project.title }}
        </h1>
        <p class="body-copy mt-7">
          {{ project.summary }}
        </p>
      </div>
      <div class="md:col-span-4 md:flex md:justify-end">
        <UButton
          :to="project.repository"
          target="_blank"
          rel="noreferrer"
          label="View repository"
          icon="i-simple-icons-github"
          trailing-icon="i-lucide-arrow-up-right"
          size="lg"
        />
      </div>
    </header>

    <div class="my-14 border-y border-line py-10 lg:my-20 lg:py-14">
      <SystemTrace />
    </div>

    <MotionReveal>
      <section class="grid gap-8 md:grid-cols-12">
        <p class="eyebrow md:col-span-3">
          Context
        </p>
        <div class="md:col-span-8 md:col-start-5">
          <p class="text-2xl leading-relaxed tracking-[-0.025em] text-ink sm:text-3xl">
            {{ project.lead }}
          </p>
        </div>
      </section>
    </MotionReveal>

    <div class="section-space grid gap-12 border-b border-line md:grid-cols-2">
      <MotionReveal>
        <section>
          <p class="eyebrow">
            What it explores
          </p>
          <ul class="mt-7 space-y-4">
            <li
              v-for="item in project.focus"
              :key="item"
              class="flex gap-3 border-t border-line pt-4 text-ink"
            >
              <UIcon
                name="i-lucide-check"
                class="mt-1 size-4 shrink-0 text-accent"
              />
              {{ item }}
            </li>
          </ul>
        </section>
      </MotionReveal>

      <MotionReveal :delay="0.05">
        <section>
          <p class="eyebrow">
            Stack
          </p>
          <div class="mt-7 flex flex-wrap gap-2">
            <span
              v-for="technology in project.stack"
              :key="technology"
              class="rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs text-copy-muted"
            >
              {{ technology }}
            </span>
          </div>
        </section>
      </MotionReveal>
    </div>

    <MotionReveal>
      <footer class="section-space grid gap-7 md:grid-cols-12 md:items-end">
        <div class="md:col-span-8">
          <p class="eyebrow">
            Source of truth
          </p>
          <h2 class="mt-5 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
            Read the implementation, not invented numbers.
          </h2>
          <p class="body-copy mt-5">
            This case study intentionally avoids fabricated performance metrics.
            The repository contains the code and setup needed to inspect the design directly.
          </p>
        </div>
        <div class="md:col-span-4 md:flex md:justify-end">
          <UButton
            :to="project.repository"
            target="_blank"
            rel="noreferrer"
            label="Open on GitHub"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-arrow-up-right"
          />
        </div>
      </footer>
    </MotionReveal>
  </article>
</template>
