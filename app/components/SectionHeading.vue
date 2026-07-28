<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <div>
    <p class="section-label">
      {{ eyebrow }}
    </p>
    <div class="mt-4">
      <h2 class="max-w-[30ch] text-[1.45rem] font-medium leading-8 tracking-[-0.03em] text-ink sm:text-[1.6rem]">
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="body-copy mt-3"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
