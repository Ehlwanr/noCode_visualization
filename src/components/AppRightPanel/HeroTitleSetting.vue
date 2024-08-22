<script setup lang="ts">
import type { HeroTitleBlockInfo } from '@/types/block'

const props = defineProps<{
  blockInfo: HeroTitleBlockInfo
}>()


</script>

<template>
  <div class="button-setting">
    <div>
      {{ props.blockInfo.type }}
    </div>
    <input class="content-input" v-model="props.blockInfo.props.content" />
  </div>
</template>

<style scoped>
.content-input {
  width: 100%;
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}
</style>
