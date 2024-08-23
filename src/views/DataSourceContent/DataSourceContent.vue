<script setup lang="ts">
import { applyPureReactInVue } from 'veaury'

// @ts-ignore
import ReactDataSource from './react_app/ReactDataSource'
import { useRoute } from 'vue-router'
const route = useRoute()
const RDataSource = applyPureReactInVue(ReactDataSource)

function processId(id: string | string[]): string | undefined {
  if (Array.isArray(id)) {
    // 如果id是一个数组，选择第一个元素或者处理它以返回一个单一的值
    return id.length > 0 ? id[0] : undefined;
  }
  return id; // 当id已经是字符串时直接返回
}
</script>
<template>
  <div class="data-source-content-wrapper">
    <div  class="data-source-render">
      <r-dataSource :key="processId(route.params.id)"/>
    </div>
  </div>
</template>

<style scoped>
.data-source-content-wrapper {
  width: 100%;
  background-color: var(--color-gray-100);
}

.data-source-render {
  height: calc(100% - 40px);
  margin: 20px;
  padding: 12px;
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
}
</style>
