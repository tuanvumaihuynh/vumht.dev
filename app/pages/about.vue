<script setup lang="ts">
import {
  education,
  identity,
  principles
} from '~/data/portfolio'

useSeoMeta({
  title: 'About',
  description: 'About Vux, a software engineer in Ho Chi Minh City working across backend systems, infrastructure, and observability.'
})
</script>

<template>
  <div class="page-shell page-stack">
    <MotionReveal>
      <header>
        <p class="section-label">
          About
        </p>
        <h1 class="page-title mt-5 text-ink">
          Software engineer building reliable backend systems.
        </h1>
        <p class="body-copy mt-5">
          I’m Vux, based in Ho Chi Minh City and currently working at Qualgo.
        </p>
      </header>
    </MotionReveal>

    <section class="content-section">
      <MotionReveal>
        <SectionHeading
          eyebrow="Principles"
          title="The defaults I try to bring to the work."
        />
      </MotionReveal>

      <div class="mt-8">
        <MotionReveal
          v-for="(principle, index) in principles"
          :key="principle.title"
          :delay="index * 0.035"
        >
          <article class="editorial-row border-t border-line">
            <div class="flex items-baseline justify-between gap-5">
              <h2 class="font-medium tracking-[-0.018em] text-ink">
                {{ principle.title }}
              </h2>
              <span class="font-mono text-[0.66rem] text-accent">0{{ index + 1 }}</span>
            </div>
            <p class="mt-1.5 text-[0.92rem] leading-6 text-copy-muted">
              {{ principle.description }}
            </p>
          </article>
        </MotionReveal>
      </div>
    </section>

    <section class="content-section">
      <MotionReveal>
        <h2 class="section-label">
          Education
        </h2>
        <h2 class="mt-4 font-medium tracking-[-0.018em] text-ink">
          {{ education.institution }}
        </h2>
        <p class="mt-1 text-[0.92rem] text-accent">
          {{ education.program }}
        </p>
        <p class="mt-1 font-mono text-[0.68rem] text-copy-muted">
          {{ education.period }}
        </p>
        <p class="body-copy mt-4">
          {{ education.summary }}
        </p>
      </MotionReveal>
    </section>

    <section class="content-section">
      <MotionReveal>
        <h2 class="section-label">
          Currently exploring
        </h2>
        <p class="lead-copy mt-4">
          Swift and applied LLM engineering, alongside deeper work in Go, cloud
          infrastructure, and distributed systems.
        </p>
        <p class="body-copy mt-4">
          Away from the terminal, I’m usually playing badminton, reading, or
          getting the sleep I postponed while debugging something.
        </p>
      </MotionReveal>
    </section>

    <section class="content-section">
      <MotionReveal>
        <h2 class="section-label">
          Contact
        </h2>
        <p class="body-copy mt-4">
          I’m always happy to meet people building thoughtful software or
          exploring a difficult engineering problem. Write to
          <a
            :href="`mailto:${identity.email}`"
            class="text-link"
          >{{ identity.email }}</a>.
        </p>
      </MotionReveal>
    </section>
  </div>
</template>
