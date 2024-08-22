<template>
  <div class="chart-wrapper" ref="chartRef">
    <v-chart class="chart" :option="option" ref="chartInstance" :theme="props.blockInfo.props.theme"/>
  </div>
</template>

<script setup lang="ts">
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  PolarComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { UniversalTransition } from 'echarts/features';

import VChart from 'vue-echarts'

import { inject, onBeforeUnmount, onMounted, provide, ref } from 'vue'
import type { ChartBlockInfo } from '@/types/block';

const props = defineProps<{
  blockInfo: ChartBlockInfo
}>()
// theme

use([
  TitleComponent,
  PolarComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

const data = [];
for (let i = 0; i <= 360; i++) {
  let t = (i / 180) * Math.PI;
  let r = Math.sin(2 * t) * Math.cos(2 * t);
  data.push([r, i]);
}

const option = ref({
  title: {
    text: 'Polar'
  },
  legend: {
    data: ['line']
  },
  polar: {
    center: ['50%', '54%']
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  angleAxis: {
    type: 'value',
    startAngle: 0
  },
  radiusAxis: {
    min: 0
  },
  series: [
    {
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      showSymbol: false,
      data: data
    }
  ],
  animationDuration: 2000
});

const chartInstance = ref<InstanceType<typeof VChart>>()
const chartRef = ref()

const resizeHandler = () => {
  chartInstance.value?.resize()
}

const resizeObserver = new ResizeObserver(entries => {
  // 处理大小变化的回调函数
  // for (const entry of entries) {
  //   console.log('元素大小已变化', entry.target);
  //   // 在这里执行你想要的操作，比如更新数据或触发其他事件
  // }
  resizeHandler()
});

onMounted(() => {
  window.addEventListener('resize', resizeHandler)
  resizeObserver.observe(chartRef.value);
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  chartInstance.value?.dispose()
})


</script>

<style scoped>
.chart {
  height: 360px;
}
.chart-wrapper{
  border-radius: 10px;
  overflow: hidden;
}
</style>
