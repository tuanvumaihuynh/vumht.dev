<script setup lang="ts">
import { motion } from 'motion-v'
import type { Project } from '~/data/portfolio'

const props = defineProps<{
  project: Project
  index: number
}>()
</script>

<template>
  <MotionReveal :delay="props.index * 0.05">
    <motion.article
      class="grid gap-8 border-t border-line py-10 md:grid-cols-12 md:items-center md:gap-10 lg:py-14"
      :while-hover="{ y: -3 }"
      :transition="{ type: 'spring', stiffness: 100, damping: 20 }"
    >
      <div
        class="md:col-span-7"
        :class="props.index % 2 === 1 ? 'md:order-2 md:col-start-6' : ''"
      >
        <p class="eyebrow">
          {{ project.kicker }}
        </p>
        <h3 class="mt-4 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl">
          <NuxtLink
            :to="`/work/${project.slug}`"
            class="group inline-flex items-center gap-3"
          >
            {{ project.title }}
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-5 text-copy-muted group-hover:text-accent"
            />
          </NuxtLink>
        </h3>
        <p class="body-copy mt-4">
          {{ project.summary }}
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="technology in project.stack.slice(0, 5)"
            :key="technology"
            class="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] text-copy-muted"
          >
            {{ technology }}
          </span>
        </div>
      </div>

      <div
        class="rounded-[1.5rem] border border-line bg-surface p-6 md:col-span-5"
        :class="props.index % 2 === 1 ? 'md:order-1 md:col-start-1' : 'md:col-start-8'"
        aria-hidden="true"
      >
        <div class="flex items-center justify-between">
          <span class="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-copy-muted">signal</span>
          <span class="font-mono text-xs text-accent">0{{ props.index + 1 }}</span>
        </div>
        <div class="my-10 flex items-center gap-3">
          <span class="size-3 rounded-full border-2 border-accent bg-accent-subtle" />
          <span class="h-px flex-1 bg-line" />
          <span class="size-2 rounded-full bg-accent" />
          <span class="h-px w-1/4 bg-line" />
          <span class="size-3 rounded-full border-2 border-accent bg-surface" />
        </div>
        <p class="font-mono text-sm text-ink">
          {{ project.signal }}
        </p>
      </div>
    </motion.article>
  </MotionReveal>
</template>
