<script setup lang="ts">
import type { ExperienceItem } from '~/data/portfolio'

defineProps<{
  item: ExperienceItem
  index: number
}>()
</script>

<template>
  <MotionReveal :delay="index * 0.05">
    <article class="grid gap-5 border-t border-line py-8 md:grid-cols-12 md:gap-8 lg:py-10">
      <div class="md:col-span-3">
        <p class="font-mono text-xs text-copy-muted">
          {{ item.period }}
        </p>
      </div>
      <div class="md:col-span-8 md:col-start-5">
        <p class="text-sm font-medium text-accent">
          {{ item.company }}
        </p>
        <h3 class="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink">
          {{ item.role }}
        </h3>
        <p class="mt-1 text-sm text-copy-muted">
          {{ item.location }}
        </p>
        <p class="body-copy mt-5 text-base">
          {{ item.summary }}
        </p>
        <ul class="mt-5 space-y-3 text-sm leading-6 text-copy-muted">
          <li
            v-for="highlight in item.highlights"
            :key="highlight"
            class="flex gap-3"
          >
            <span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{{ highlight }}</span>
          </li>
        </ul>
        <p
          v-if="item.disclosure"
          class="mt-5 border-l-2 border-accent pl-4 font-mono text-[0.7rem] leading-5 text-copy-muted"
        >
          {{ item.disclosure }}
        </p>
      </div>
    </article>
  </MotionReveal>
</template>
