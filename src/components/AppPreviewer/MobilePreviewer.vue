<script setup lang="ts">
import BlocksRenderer from '@/blocks/BlocksRenderer.vue'

// import StatusBar from '../AppEditorRenderer/StatusBar.vue'
</script>

<template>
  <div class="content">
    <div class="layout-runner-content-navigator"></div>
    <div class="navigator-wrapper">
      <div class="navigator">Visualization</div>
    </div>

    <div class="render-content">
      <BlocksRenderer />
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
}

.layout-runner-content-navigator {
  height: 20px;
  font-size: var(--font-size-normal);
  align-items: center;
  padding: 0 16px;
  background-color: var(--color-primary);
  border-bottom: 1px solid rgb(31 41 55 / 8%);
}

.navigator-wrapper {
  position: sticky;
  top: 0;
  z-index: 2;
}

.navigator {
  display: flex;
  height: 56px;
  align-items: center;
  padding: 0 12px;
  font-size: 18px;
  font-weight: var(--font-weight-bolder);
  color: var(--color-white);
  background-color: var(--color-primary);
  border-bottom: 1px solid rgb(31 41 55 / 8%);
}

.title {
  height: 90px;
  background-color: var(--color-primary);
}

.render-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px 32px;
  flex: 1;
}
</style>
