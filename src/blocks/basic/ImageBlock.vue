<script setup lang="ts">
import type { ImageBlockInfo } from '@/types/block';

const props = defineProps<{
  blockInfo: ImageBlockInfo
}>()
</script>

<template>
  <div class="image">
    <img
      :src="props.blockInfo.props.url"
    />
  </div>
</template>

<style scoped>
.image {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

img {
  width: 100%;
}
</style>
