<script setup lang="ts">
const colorMode = useColorMode()

const colorModeIcon = computed(() => colorMode.value === 'dark'
  ? 'i-lucide-sun'
  : 'i-lucide-moon')

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="page-shell pt-12 sm:pt-16">
    <div class="flex items-center justify-between gap-5">
      <NuxtLink
        to="/"
        aria-label="Vux — Home"
        class="group block py-1"
      >
        <span class="block text-[0.95rem] font-medium leading-5 tracking-[-0.02em] text-ink">
          Vux
        </span>
        <span class="block text-[0.78rem] leading-5 text-copy-muted group-hover:text-ink">
          Software Engineer
        </span>
      </NuxtLink>

      <button
        type="button"
        class="grid size-11 shrink-0 place-items-center rounded-lg text-copy-muted transition-colors hover:bg-surface hover:text-ink"
        aria-label="Toggle color mode"
        :aria-pressed="colorMode.value === 'dark'"
        @click="toggleColorMode"
      >
        <UIcon
          :name="colorModeIcon"
          class="block size-4"
        />
      </button>
    </div>
  </header>
</template>
