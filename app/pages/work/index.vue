<script setup lang="ts">
import { projects } from '~/data/portfolio'

useSeoMeta({
  title: 'Selected Work',
  description: 'Observability, IoT, and distributed systems projects built by Vux.'
})
</script>

<template>
  <div class="page-shell py-16 sm:py-20 lg:py-28">
    <div class="grid gap-8 md:grid-cols-12">
      <div class="md:col-span-8">
        <p class="eyebrow">
          Selected work
        </p>
        <h1 class="page-title mt-6 text-ink">
          Systems I use to learn where the boundaries are.
        </h1>
        <p class="body-copy mt-7">
          These are focused, public projects—not a wall of repositories. Each one
          explores a production concern through a small system that can be run,
          inspected, and challenged.
        </p>
      </div>
    </div>

    <div class="mt-16 lg:mt-24">
      <ProjectRow
        v-for="(project, index) in projects"
        :key="project.slug"
        :project="project"
        :index="index"
      />
    </div>
  </div>
</template>
