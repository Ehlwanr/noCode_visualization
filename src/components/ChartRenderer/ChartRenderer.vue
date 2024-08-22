<template>
  <component :is="renderer" class="chart-container" :block-info="blockInfo" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineAsyncComponent } from 'vue'

import type { ChartBlockInfo } from '@/types/block'

const props = defineProps<{
  blockInfo: ChartBlockInfo
}>()

const renderer = computed(() => {
  if (!props.blockInfo) return ''
  switch (props.blockInfo.props.chartType) {
    case 'echarts': {
      return defineAsyncComponent(()=> import('./EchartsRenderer/EchartsRenderer.vue'))
    }
    case 'zrender': {
      return defineAsyncComponent(()=> import( './ZRenderChartRenderer/ZRenderChartRenderer.vue'))
    }
    case 'svg': {
      return defineAsyncComponent(()=> import('./SVGChartRenderer/SVGChartRenderer.vue'))
    }
    default:
      return ''
  }
})
</script>

<!-- <style scoped></style> -->
