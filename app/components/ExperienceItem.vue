<script setup lang="ts">
import type { ExperienceItem } from '~/data/portfolio'

defineProps<{
  item: ExperienceItem
  index: number
}>()
</script>

<template>
  <MotionReveal :delay="index * 0.035">
    <article class="py-2">
      <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 class="font-medium tracking-[-0.018em] text-ink">
          {{ item.role }} <span class="font-normal text-copy-muted">at {{ item.company }}</span>
        </h3>
        <p class="shrink-0 font-mono text-[0.68rem] text-copy-muted">
          {{ item.period }}
        </p>
      </div>
      <p class="mt-1 font-mono text-[0.68rem] leading-5 text-copy-muted">
        {{ item.location }}
      </p>
    </article>
  </MotionReveal>
</template>
