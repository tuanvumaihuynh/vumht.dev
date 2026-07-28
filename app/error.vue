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
    <main class="page-shell flex min-h-[100dvh] items-center">
      <div class="max-w-lg py-16">
        <p class="eyebrow">
          Error {{ error.statusCode || 500 }}
        </p>
        <h1 class="page-title mt-5 text-ink">
          This path does not resolve.
        </h1>
        <p class="body-copy mt-5">
          {{ error.statusMessage || error.message || 'The requested page could not be found.' }}
        </p>
        <button
          type="button"
          class="text-link mt-6 text-sm"
          @click="goHome"
        >
          Return home
        </button>
      </div>
    </main>
  </UApp>
</template>
