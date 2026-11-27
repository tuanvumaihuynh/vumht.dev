<script setup lang="ts">
defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}>()

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <UApp>
    <div
      class="ambient"
      aria-hidden="true"
    />
    <main class="page-shell flex min-h-[100dvh] items-center">
      <div class="max-w-md py-16">
        <p class="font-mono text-[0.75rem] font-medium text-accent">
          Error {{ error.statusCode || 500 }}
        </p>
        <h1 class="mt-3 text-[1.5rem] font-medium leading-tight tracking-[-0.03em] text-ink">
          This path does not resolve.
        </h1>
        <p class="mt-3 text-[0.92rem] leading-6 text-copy-muted">
          {{ error.statusMessage || error.message || 'The requested page could not be found.' }}
        </p>
        <button
          type="button"
          class="text-link mt-6 cursor-pointer text-[0.875rem]"
          @click="goHome"
        >
          Return home
        </button>
      </div>
    </main>
  </UApp>
</template>
