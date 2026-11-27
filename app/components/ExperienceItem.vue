<script setup lang="ts">
import type { ExperienceItem } from '~/data/portfolio'

defineProps<{
  item: ExperienceItem
}>()
</script>

<template>
  <li>
    <div class="flex flex-col gap-0.5 py-1.5 transition-opacity duration-200 group-hover/list:opacity-40 hover:!opacity-100 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div class="min-w-0 text-[0.9rem] leading-6">
        <span class="font-medium tracking-[-0.015em] text-ink">{{ item.company }}</span>
        <span class="ml-2 text-[0.86rem] text-copy-muted">{{ item.role }}</span>
      </div>
      <span class="shrink-0 text-[0.82rem] tabular-nums text-copy-faint">
        {{ item.period }}
      </span>
    </div>
  </li>
</template>
