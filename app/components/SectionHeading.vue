<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="grid gap-5 md:grid-cols-12 md:gap-8">
    <p class="eyebrow md:col-span-3">
      {{ eyebrow }}
    </p>
    <div class="md:col-span-8 md:col-start-5">
      <h2 class="text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="body-copy mt-5"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
