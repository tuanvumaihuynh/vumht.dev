<script setup lang="ts">
import type { Project } from '~/data/portfolio'

const props = defineProps<{
  project: Project
  index: number
}>()
</script>

<template>
  <MotionReveal :delay="props.index * 0.035">
    <a
      :href="project.repository"
      target="_blank"
      rel="noreferrer"
      class="editorial-row editorial-row-link group block transition-colors duration-150"
    >
      <h3 class="font-medium tracking-[-0.018em] text-ink">
        {{ project.title }}
      </h3>
      <p class="mt-1.5 text-[0.92rem] leading-6 text-copy-muted">
        {{ project.summary }}
      </p>
      <p class="mt-3 font-mono text-[0.68rem] leading-5 text-copy-muted">
        {{ project.kicker }}
      </p>
    </a>
  </MotionReveal>
</template>
