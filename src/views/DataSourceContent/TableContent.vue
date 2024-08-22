<script setup lang="ts">
import { applyPureReactInVue } from 'veaury'

// @ts-ignore
import ReactTableContent from './react_app/TableContent'
const RTableContent = applyPureReactInVue(ReactTableContent)
</script>

<template>
  <div class="data-source-content-wrapper">
    <div class="data-source-render">
      <r-tableContent />
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
