<script setup lang="ts">

import type { ChartBlockInfo, ChartType } from '@/types/block'
import SegmentedControl from '@/ui/SegmentedControl/SegmentedControl.vue'

const props = defineProps<{
  blockInfo: ChartBlockInfo
}>()

const data = [
  {
    label: 'Echarts',
    value: 'echarts'
  },
  {
    label: 'ZRender',
    value: 'zrender'
  },
  {
    label: 'D3',
    value: 'svg'
  }
]

const emit = defineEmits<{ (event: 'change', block: ChartBlockInfo): void }>()

function changeTheme() {
  props.blockInfo.props.theme = props.blockInfo.props.theme === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div>
    {{ props.blockInfo.type }}
  </div>
  <segmented-control :data="data" :blockInfo="blockInfo" @input="(val) => {
    emit('change', {
      ...props.blockInfo,
      props: { ...props.blockInfo.props, chartType: val as ChartType }
    })
  }
    " />
  <div class="change-theme" v-show="props.blockInfo.props.chartType === 'echarts'">
    <div class="change-theme-text">Ecahrts主题为:</div>
    <button class="change-theme-button" @click="changeTheme">
      {{ props.blockInfo.props.theme }}
    </button>
  </div>
</template>

<style scoped>
.content-input {
  width: 100%;
  /* 在做组件库的时候，input 是有一个 size 属性，sm、md、lg */
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}
.change-theme{
  width: 80%;
  display: flex;
  justify-content: space-between ;
  align-self: center;  
}
.change-theme-text{
  flex: 1 1 200px;
}
.change-theme-button{
  width: 50px;
}
</style>
