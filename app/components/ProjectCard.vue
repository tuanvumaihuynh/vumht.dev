<script setup lang="ts">
import type { Project } from '~/data/portfolio'

const props = defineProps<{
  project: Project
}>()

const cardRef = ref<HTMLAnchorElement | null>(null)
let ambientTimer: ReturnType<typeof setTimeout> | undefined

function handlePointerMove(event: PointerEvent) {
  const el = cardRef.value
  if (!el) {
    return
  }

  const rect = el.getBoundingClientRect()
  el.style.setProperty('--x', `${event.clientX - rect.left}px`)
  el.style.setProperty('--y', `${event.clientY - rect.top}px`)
}

function activateAmbient() {
  if (typeof document === 'undefined') {
    return
  }

  clearTimeout(ambientTimer)
  const root = document.documentElement
  root.style.setProperty('--ambient', props.project.accent)
  root.dataset.ambient = ''
}

function deactivateAmbient() {
  if (typeof document === 'undefined') {
    return
  }

  clearTimeout(ambientTimer)
  ambientTimer = setTimeout(() => {
    const root = document.documentElement
    delete root.dataset.ambient
    root.style.removeProperty('--ambient')
  }, 120)
}

function handlePointerEnter(event: PointerEvent) {
  if (event.pointerType === 'mouse') {
    activateAmbient()
  }
}

onBeforeUnmount(() => {
  clearTimeout(ambientTimer)
  if (typeof document !== 'undefined') {
    const root = document.documentElement
    delete root.dataset.ambient
    root.style.removeProperty('--ambient')
  }
})
</script>

<template>
  <a
    ref="cardRef"
    :href="project.url"
    target="_blank"
    rel="noreferrer"
    :style="{ '--card-accent': project.accent }"
    class="project-card group relative isolate flex items-center gap-3.5 overflow-hidden rounded-xl border border-line bg-card/70 p-4 transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-card sm:flex-col sm:items-start sm:gap-4"
    @pointermove="handlePointerMove"
    @pointerenter="handlePointerEnter"
    @pointerleave="deactivateAmbient"
    @focus="activateAmbient"
    @blur="deactivateAmbient"
  >
    <img
      :src="project.icon"
      :alt="project.name"
      width="40"
      height="40"
      class="project-icon size-10 shrink-0 rounded-[10px]"
    >
    <div class="min-w-0">
      <div class="text-[0.9rem] font-medium leading-5 tracking-[-0.015em] text-ink">
        {{ project.name }}
      </div>
      <p class="mt-1 text-[0.84rem] leading-[1.5] text-copy-muted">
        {{ project.description }}
      </p>
    </div>
  </a>
</template>
