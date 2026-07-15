<script setup lang="ts">
import { motion, useReducedMotion } from 'motion-v'

const prefersReducedMotion = useReducedMotion()

const dotAnimation = computed(() => prefersReducedMotion.value
  ? { cx: 54, opacity: 1 }
  : {
      cx: [54, 160, 266, 374],
      opacity: [0, 1, 1, 1, 0]
    })

const dotTransition = computed(() => prefersReducedMotion.value
  ? { duration: 0 }
  : {
      duration: 6.2,
      repeat: Infinity,
      repeatDelay: 1.4,
      times: [0, 0.2, 0.52, 0.82, 1],
      ease: 'easeInOut'
    })

const events = [
  'request.received',
  'signal.normalized',
  'signal.classified',
  'decision.emitted'
]
</script>

<template>
  <div class="rounded-[1.5rem] border border-line bg-surface p-5 shadow-[0_18px_60px_rgba(23,34,29,0.06)] sm:p-7">
    <div class="flex items-center justify-between gap-4 border-b border-line pb-4">
      <div class="flex items-center gap-2">
        <UIcon
          name="i-lucide-git-branch"
          class="size-4 text-accent"
        />
        <span class="font-mono text-xs font-medium text-ink">request path</span>
      </div>
      <span class="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-copy-muted">concept sketch</span>
    </div>

    <svg
      viewBox="0 0 428 164"
      role="img"
      aria-labelledby="trace-title trace-description"
      class="mt-4 h-auto w-full"
    >
      <title id="trace-title">Conceptual backend request path</title>
      <desc id="trace-description">A request moves through receive, normalize, classify, observe, and decide stages.</desc>

      <g
        fill="none"
        stroke="var(--vux-line)"
        stroke-width="2"
      >
        <path d="M54 73H374" />
        <path
          d="M266 73V126H333"
          stroke-dasharray="5 6"
        />
      </g>

      <g
        v-for="(node, index) in ['Receive', 'Normalize', 'Classify', 'Decide']"
        :key="node"
      >
        <circle
          :cx="54 + (index * 106.67)"
          cy="73"
          r="17"
          fill="var(--vux-surface)"
          stroke="var(--vux-line)"
          stroke-width="2"
        />
        <circle
          :cx="54 + (index * 106.67)"
          cy="73"
          r="4"
          fill="var(--vux-accent)"
        />
        <text
          :x="54 + (index * 106.67)"
          y="35"
          text-anchor="middle"
          fill="var(--vux-muted)"
          font-family="Geist Mono, monospace"
          font-size="10"
        >{{ node }}</text>
      </g>

      <circle
        cx="333"
        cy="126"
        r="14"
        fill="var(--vux-accent-subtle)"
        stroke="var(--vux-accent)"
        stroke-width="1.5"
      />
      <text
        x="333"
        y="153"
        text-anchor="middle"
        fill="var(--vux-muted)"
        font-family="Geist Mono, monospace"
        font-size="10"
      >Observe</text>

      <motion.circle
        cx="54"
        cy="73"
        r="6"
        fill="var(--vux-accent)"
        :initial="false"
        :animate="dotAnimation"
        :transition="dotTransition"
      />
    </svg>

    <div class="grid gap-x-4 gap-y-2 border-t border-line pt-4 sm:grid-cols-2">
      <div
        v-for="event in events"
        :key="event"
        class="flex items-center gap-2 font-mono text-[0.7rem] text-copy-muted"
      >
        <span class="size-1.5 rounded-full bg-accent" />
        {{ event }}
      </div>
    </div>
  </div>
</template>
