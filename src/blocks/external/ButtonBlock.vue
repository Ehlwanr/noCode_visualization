<script setup lang="ts">
import type { ButtonBlockInfo } from '@/types/block';

const props = defineProps<{
  blockInfo: ButtonBlockInfo
}>()
</script>

<template>
  <div class="button-wrapper" :style="{'justify-content': props.blockInfo.props.flexJC}">
    <div class="button">{{ props.blockInfo.props.content }}</div>
  </div>
</template>

<style scoped>
.button-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 30%;
  padding: 0 12px;
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  background-color: var(--color-primary);
}
</style>
