<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref } from 'vue'

import { isMobileTablet } from '@/utils/detect'

import LaptopPreviewer from '../AppPreviewer/LaptopPreviewer.vue'
import MobilePreviewer from '../AppPreviewer/MobilePreviewer.vue'

provide('editable', false)

const device = ref<'laptop' | 'mobile'>('laptop')

const resize = () => {
  const isMobile = isMobileTablet()

  if (isMobile) {
    device.value = 'mobile'
  } else {
    device.value = 'laptop'
  }
}

onMounted(() => {
  const isMobile = isMobileTablet()

  if (isMobile) {
    device.value = 'mobile'
  }

  window.addEventListener('resize', resize, false)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize, false)
})
</script>

<template>
  <LaptopPreviewer v-memo="[device === 'laptop']" v-if="device === 'laptop'" />
  <MobilePreviewer v-memo="[device === 'mobile']" v-if="device === 'mobile'" />
</template>

<style scoped></style>
