<script setup lang="ts">
import { motion } from 'motion-v'

const props = withDefaults(defineProps<{
  delay?: number
}>(), {
  delay: 0
})
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y: 10 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :viewport="{ once: true, amount: 0.16 }"
    :transition="{
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: props.delay
    }"
  >
    <slot />
  </motion.div>
</template>
