<script setup lang="ts">
import {
  expertise,
  experiences,
  identity,
  plannedArticles,
  projects
} from '~/data/portfolio'

useSeoMeta({
  title: 'Software Engineer',
  description: 'Vux builds secure, observable backend systems with Go, distributed infrastructure, and clear operational signals.',
  ogTitle: 'Vux — Software Engineer',
  ogDescription: 'Secure backend systems, distributed workloads, model-serving infrastructure, and observability.'
})
</script>

<template>
  <div>
    <section class="page-shell grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
      <div class="lg:col-span-7">
        <p class="eyebrow">
          {{ identity.role }} · {{ identity.location }}
        </p>
        <h1 class="display-title mt-6 max-w-[11ch] text-ink">
          I build secure systems that stay
          <span class="text-accent">understandable.</span>
        </h1>
        <p class="body-copy mt-7 max-w-[60ch]">
          I’m Vux. I work across backend services, model-serving infrastructure,
          distributed workloads, and observability—with a focus on reliability
          and clear operational signals.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-5">
          <UButton
            to="/work"
            label="View selected work"
            trailing-icon="i-lucide-arrow-right"
            size="lg"
          />
          <a
            :href="identity.github"
            target="_blank"
            rel="noreferrer"
            class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-copy-muted hover:text-ink"
          >
            GitHub
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4"
            />
          </a>
        </div>
      </div>

      <div class="lg:col-span-5">
        <SystemTrace />
      </div>
    </section>

    <section class="border-y border-line">
      <MotionReveal>
        <div class="page-shell section-space grid gap-7 md:grid-cols-12">
          <p class="eyebrow md:col-span-3">
            Profile
          </p>
          <div class="md:col-span-8 md:col-start-5">
            <h2 class="text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
              Building from the signal backward.
            </h2>
            <p class="body-copy mt-6">
              My background began where embedded systems and IoT meet real-world
              data, then moved through backend engineering, cloud infrastructure,
              and distributed systems. That path still shapes how I work: follow
              the full data flow, make failure visible, and keep the system easy
              to reason about.
            </p>
          </div>
        </div>
      </MotionReveal>
    </section>

    <section class="page-shell section-space">
      <MotionReveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Small systems, explored deeply."
          description="Personal projects where I study boundaries that become difficult in production: visibility, asynchronous work, device data, and reliable event delivery."
        />
      </MotionReveal>

      <div class="mt-12 lg:mt-16">
        <ProjectRow
          v-for="(project, index) in projects"
          :key="project.slug"
          :project="project"
          :index="index"
        />
      </div>

      <div class="mt-4 flex justify-end">
        <UButton
          to="/work"
          label="See all project details"
          color="neutral"
          variant="ghost"
          trailing-icon="i-lucide-arrow-right"
        />
      </div>
    </section>

    <section class="border-y border-line bg-surface">
      <div class="page-shell section-space">
        <MotionReveal>
          <SectionHeading
            eyebrow="What I work on"
            title="Useful in production, not just correct on paper."
          />
        </MotionReveal>

        <div class="mt-14 grid border-t border-line md:grid-cols-2">
          <MotionReveal
            v-for="(item, index) in expertise"
            :key="item.title"
            :delay="index * 0.04"
          >
            <article class="border-b border-line py-8 md:min-h-64 md:p-9 md:odd:border-r">
              <UIcon
                :name="item.icon"
                class="size-6 text-accent"
              />
              <h3 class="mt-10 text-2xl font-semibold tracking-[-0.035em] text-ink">
                {{ item.title }}
              </h3>
              <p class="mt-4 max-w-[44ch] leading-7 text-copy-muted">
                {{ item.description }}
              </p>
            </article>
          </MotionReveal>
        </div>
      </div>
    </section>

    <section
      id="experience"
      class="page-shell section-space scroll-mt-20"
    >
      <MotionReveal>
        <SectionHeading
          eyebrow="Experience"
          title="Working closer to the system over time."
          description="My work has moved from engineering and IoT environments into backend, security, model-serving, and distributed infrastructure."
        />
      </MotionReveal>

      <div class="mt-12 lg:mt-16">
        <ExperienceItem
          v-for="(item, index) in experiences"
          :key="item.company"
          :item="item"
          :index="index"
        />
      </div>
    </section>

    <section class="border-y border-line">
      <div class="page-shell section-space">
        <MotionReveal>
          <SectionHeading
            eyebrow="Field notes"
            title="Writing through the systems I build."
            description="The first notes are in progress. These are working topics—not published articles yet."
          />
        </MotionReveal>

        <div class="mt-12">
          <MotionReveal
            v-for="(article, index) in plannedArticles"
            :key="article.title"
            :delay="index * 0.04"
          >
            <article class="grid gap-4 border-t border-line py-7 md:grid-cols-12 md:items-start">
              <div class="md:col-span-3">
                <UBadge
                  label="Planned"
                  color="neutral"
                  variant="soft"
                  size="sm"
                />
              </div>
              <div class="md:col-span-8 md:col-start-5">
                <h3 class="text-xl font-semibold tracking-[-0.03em] text-ink">
                  {{ article.title }}
                </h3>
                <p class="mt-3 leading-7 text-copy-muted">
                  {{ article.description }}
                </p>
              </div>
            </article>
          </MotionReveal>
        </div>

        <div class="mt-6 flex justify-end">
          <UButton
            to="/writing"
            label="Browse writing"
            color="neutral"
            variant="ghost"
            trailing-icon="i-lucide-arrow-right"
          />
        </div>
      </div>
    </section>

    <section class="page-shell section-space">
      <MotionReveal>
        <div class="grid gap-8 md:grid-cols-12 md:items-end">
          <div class="md:col-span-8">
            <p class="eyebrow">
              Get in touch
            </p>
            <h2 class="mt-5 text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
              Have an interesting system to untangle?
            </h2>
          </div>
          <div class="md:col-span-4">
            <p class="leading-7 text-copy-muted">
              Backend infrastructure, observability, developer tooling, or a difficult failure mode—I’d be glad to hear about it.
            </p>
            <a
              :href="`mailto:${identity.email}`"
              class="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-accent pb-1 font-medium text-ink hover:text-accent"
            >
              {{ identity.email }}
              <UIcon
                name="i-lucide-arrow-up-right"
                class="size-4"
              />
            </a>
          </div>
        </div>
      </MotionReveal>
    </section>
  </div>
</template>
