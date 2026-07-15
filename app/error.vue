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
    <main class="page-shell grid min-h-[100dvh] place-items-center py-16">
      <div class="max-w-2xl text-center">
        <p class="eyebrow">
          Error {{ error.statusCode || 500 }}
        </p>
        <h1 class="page-title mt-6 text-ink">
          This path does not resolve.
        </h1>
        <p class="body-copy mx-auto mt-6">
          {{ error.statusMessage || error.message || 'The requested page could not be found.' }}
        </p>
        <UButton
          label="Return home"
          icon="i-lucide-arrow-left"
          size="lg"
          class="mt-9"
          @click="goHome"
        />
      </div>
    </main>
  </UApp>
</template>
