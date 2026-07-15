<script setup lang="ts">
import { identity, navigation } from '~/data/portfolio'

const route = useRoute()

const mobileItems = computed(() => [
  ...navigation.map(item => ({
    label: item.label,
    to: item.to,
    icon: item.label === 'Work'
      ? 'i-lucide-layers-3'
      : item.label === 'Writing'
        ? 'i-lucide-notebook-pen'
        : item.label === 'About'
          ? 'i-lucide-user-round'
          : 'i-lucide-briefcase-business'
  })),
  { type: 'separator' as const },
  {
    label: identity.email,
    to: `mailto:${identity.email}`,
    icon: 'i-lucide-mail'
  }
])

function isActive(to: string) {
  const path = to.split('#')[0] || '/'
  return path === '/' ? route.path === '/' : route.path.startsWith(path)
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md">
    <div class="page-shell flex h-16 items-center justify-between gap-5">
      <NuxtLink
        to="/"
        aria-label="Vux — Home"
        class="inline-flex min-h-11 items-center text-lg font-semibold tracking-[-0.035em] text-ink"
      >
        Vux<span class="text-accent">.</span>
      </NuxtLink>

      <nav
        aria-label="Primary navigation"
        class="hidden items-center gap-7 md:flex"
      >
        <NuxtLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.to"
          class="inline-flex min-h-11 items-center text-sm font-medium transition-colors"
          :class="isActive(item.to) ? 'text-ink' : 'text-copy-muted hover:text-ink'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-1">
        <UButton
          :to="`mailto:${identity.email}`"
          label="Email"
          color="neutral"
          variant="ghost"
          size="sm"
          class="hidden sm:inline-flex"
        />

        <UColorModeButton
          color="neutral"
          variant="ghost"
          aria-label="Toggle color mode"
        />

        <UDropdownMenu
          :items="mobileItems"
          :content="{ align: 'end' }"
          class="md:hidden"
        >
          <UButton
            icon="i-lucide-menu"
            color="neutral"
            variant="ghost"
            aria-label="Open navigation"
          />
        </UDropdownMenu>
      </div>
    </div>
  </header>
</template>
