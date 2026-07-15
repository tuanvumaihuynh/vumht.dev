<script setup lang="ts">
import {
  aboutStory,
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
  <div class="page-shell py-16 sm:py-20 lg:py-28">
    <header class="grid gap-10 md:grid-cols-12 md:items-end">
      <div class="md:col-span-8">
        <p class="eyebrow">
          About
        </p>
        <h1 class="page-title mt-6 text-ink">
          I care about systems I can reason about.
        </h1>
      </div>
      <p class="body-copy text-base md:col-span-4">
        I’m Vux, a software engineer in Ho Chi Minh City working across backend systems, infrastructure, and observability.
      </p>
    </header>

    <section class="section-space grid gap-8 border-b border-line md:grid-cols-12">
      <p class="eyebrow md:col-span-3">
        Story
      </p>
      <div class="space-y-7 md:col-span-8 md:col-start-5">
        <MotionReveal
          v-for="(paragraph, index) in aboutStory"
          :key="paragraph"
          :delay="index * 0.04"
        >
          <p class="text-xl leading-9 tracking-[-0.015em] text-ink sm:text-2xl sm:leading-10">
            {{ paragraph }}
          </p>
        </MotionReveal>
      </div>
    </section>

    <section class="section-space border-b border-line">
      <MotionReveal>
        <SectionHeading
          eyebrow="Principles"
          title="The defaults I try to bring to the work."
        />
      </MotionReveal>

      <div class="mt-14 grid border-t border-line md:grid-cols-2">
        <MotionReveal
          v-for="(principle, index) in principles"
          :key="principle.title"
          :delay="index * 0.04"
        >
          <article class="border-b border-line py-8 md:min-h-52 md:p-9 md:odd:border-r">
            <span class="font-mono text-xs text-accent">0{{ index + 1 }}</span>
            <h2 class="mt-8 text-2xl font-semibold tracking-[-0.035em] text-ink">
              {{ principle.title }}
            </h2>
            <p class="mt-4 max-w-[44ch] leading-7 text-copy-muted">
              {{ principle.description }}
            </p>
          </article>
        </MotionReveal>
      </div>
    </section>

    <section class="section-space grid gap-12 border-b border-line md:grid-cols-2">
      <MotionReveal>
        <div>
          <p class="eyebrow">
            Education
          </p>
          <h2 class="mt-5 text-2xl font-semibold tracking-[-0.035em] text-ink">
            {{ education.institution }}
          </h2>
          <p class="mt-2 text-accent">
            {{ education.program }}
          </p>
          <p class="mt-1 font-mono text-xs text-copy-muted">
            {{ education.period }}
          </p>
          <p class="mt-5 max-w-[52ch] leading-7 text-copy-muted">
            {{ education.summary }}
          </p>
        </div>
      </MotionReveal>

      <MotionReveal :delay="0.05">
        <div>
          <p class="eyebrow">
            Currently exploring
          </p>
          <h2 class="mt-5 text-2xl font-semibold tracking-[-0.035em] text-ink">
            Swift and LLM engineering.
          </h2>
          <p class="mt-5 max-w-[52ch] leading-7 text-copy-muted">
            Alongside deeper work in Go, cloud infrastructure, and distributed systems. Away from the terminal, I’m usually playing badminton, reading, or getting the sleep I postponed while debugging something.
          </p>
        </div>
      </MotionReveal>
    </section>

    <MotionReveal>
      <section class="section-space grid gap-8 md:grid-cols-12 md:items-end">
        <div class="md:col-span-8">
          <p class="eyebrow">
            Contact
          </p>
          <h2 class="mt-5 text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
            Let’s talk systems.
          </h2>
          <p class="body-copy mt-5">
            I’m always happy to meet people building thoughtful software or exploring a difficult engineering problem.
          </p>
        </div>
        <div class="md:col-span-4 md:flex md:justify-end">
          <UButton
            :to="`mailto:${identity.email}`"
            label="Send me an email"
            trailing-icon="i-lucide-arrow-up-right"
            size="lg"
          />
        </div>
      </section>
    </MotionReveal>
  </div>
</template>
