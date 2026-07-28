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
    :initial="false"
    :while-in-view="{ y: [4, 0] }"
    :viewport="{ once: true, amount: 0.12 }"
    :transition="{
      type: 'tween',
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
      delay: props.delay
    }"
  >
    <slot />
  </motion.div>
</template>
