<script setup lang="ts">
import {
  bio,
  experiences,
  projects
} from '~/data/portfolio'

useSeoMeta({
  title: 'Vux',
  description: bio,
  ogTitle: 'Vux',
  ogDescription: bio
})
</script>

<template>
  <div class="page-shell reveal mt-20 sm:mt-24">
    <section>
      <h1 class="sr-only">
        Vux — Software Engineer
      </h1>
      <p class="max-w-[46ch] text-[0.975rem] leading-[1.68] tracking-[-0.012em] text-ink">
        {{ bio }}
      </p>
    </section>

    <section class="mt-16">
      <h2 class="mb-4 text-[0.84rem] font-normal text-copy-muted">
        Projects
      </h2>

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.url"
          :project="project"
        />
      </div>
    </section>

    <section
      id="experience"
      class="mt-16 scroll-mt-8"
    >
      <h2 class="mb-3 text-[0.84rem] font-normal text-copy-muted">
        Experience
      </h2>

      <ul class="group/list">
        <ExperienceItem
          v-for="item in experiences"
          :key="`${item.company}-${item.period}`"
          :item="item"
        />
      </ul>
    </section>
  </div>
</template>
