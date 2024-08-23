<script setup lang="ts">
import BlocksRenderer from '@/blocks/BlocksRenderer.vue'
</script>

<template>
  <div>
    <div class="content-navigator"></div>
    <div class="content-title-wrapper">
      <div class="content-title">Visualization</div>
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
/* gggg */
.content-navigator {
  height: 25px;
  background-color: var(--color-primary);
  border-bottom: 1px solid rgb(31 41 55 / 8%);
}

.content-title-wrapper {
  position: sticky;
  top: 0;
  z-index: 2;
}

.content-title {
  display: flex;
  height: 50px;
  align-items: center;
  padding: 0 12px;
  font-size: 18px;
  font-weight: var(--font-weight-bolder);
  color: var(--color-white);
  background-color: var(--color-primary);
}


.render-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px 32px;
}
</style>
