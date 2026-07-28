<script setup lang="ts">
import {
  expertise,
  experiences,
  identity,
  projects
} from '~/data/portfolio'

useSeoMeta({
  title: 'Software Engineer',
  description: 'Vux builds reliable backend systems with Go, distributed infrastructure, and observability.',
  ogTitle: 'Vux — Software Engineer',
  ogDescription: 'Secure backend systems, distributed workloads, model-serving infrastructure, and observability.'
})
</script>

<template>
  <div class="page-shell">
    <section class="mt-[clamp(5.5rem,12vw,7.5rem)]">
      <MotionReveal>
        <h1 class="section-label">
          Now
        </h1>
        <p class="mt-4 text-[0.92rem] leading-6 text-copy-muted">
          I build reliable backend systems at Qualgo. Currently learning Swift and applied LLM engineering.
        </p>
      </MotionReveal>
    </section>

    <section class="content-section">
      <MotionReveal>
        <h2 class="section-label">
          Projects
        </h2>
      </MotionReveal>

      <div class="mt-6">
        <ProjectRow
          v-for="(project, index) in projects"
          :key="project.repository"
          :project="project"
          :index="index"
        />
      </div>
    </section>

    <section
      id="experience"
      class="content-section scroll-mt-8"
    >
      <MotionReveal>
        <h2 class="section-label">
          Experience
        </h2>
      </MotionReveal>

      <div class="mt-6 space-y-4">
        <ExperienceItem
          v-for="(item, index) in experiences"
          :key="item.company"
          :item="item"
          :index="index"
        />
      </div>
    </section>

    <section class="content-section">
      <MotionReveal>
        <h2 class="section-label">
          Strengths
        </h2>
      </MotionReveal>

      <div class="mt-6 space-y-2">
        <MotionReveal
          v-for="(item, index) in expertise"
          :key="item.title"
          :delay="index * 0.035"
        >
          <article class="py-3">
            <h3 class="font-medium tracking-[-0.018em] text-ink">
              {{ item.title }}
            </h3>
            <p class="mt-1.5 text-[0.92rem] leading-6 text-copy-muted">
              {{ item.description }}
            </p>
          </article>
        </MotionReveal>
      </div>
    </section>

    <section class="content-section">
      <MotionReveal>
        <h2 class="section-label">
          Elsewhere
        </h2>
        <p class="body-copy mt-4">
          Find me on
          <a
            :href="identity.github"
            target="_blank"
            rel="noreferrer"
            class="text-link"
          >GitHub</a>,
          <a
            :href="identity.linkedin"
            target="_blank"
            rel="noreferrer"
            class="text-link"
          >LinkedIn</a>,
          or email
          <a
            :href="`mailto:${identity.email}`"
            class="text-link"
          >{{ identity.email }}</a>.
        </p>
      </MotionReveal>
    </section>
  </div>
</template>
