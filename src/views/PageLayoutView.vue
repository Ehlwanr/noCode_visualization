<script setup lang="ts">
import AppEditorRenderer from '@/components/AppEditorRenderer/AppEditorRenderer.vue'
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue'
import AppRightPanel from '@/components/AppRightPanel/AppRightPanel.vue'
</script>

<template>
  <div class="layout-wrapper">
    <AppLeftPanel />
    <AppEditorRenderer />
    <AppRightPanel />
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  height: 100%;
}
</style>
