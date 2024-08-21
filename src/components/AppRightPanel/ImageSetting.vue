<script setup lang="ts">
import type { ImageBlockInfo } from '@/types/block'
import { Copy } from '@icon-park/vue-next'
import copyText from 'copy-text-to-clipboard'

const props = defineProps<{
  blockInfo: ImageBlockInfo
}>()

const handleCopyText = () => {
  try {
    copyText('https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/paperwall_3.1vykvzt74b.webp')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="quote-setting">
    <div>
      {{ props.blockInfo.type }}
    </div>
    <input class="content-input" v-model="props.blockInfo.props.url" />
    <div class="copy-text">
      <div class="text">另一张图片地址</div>
      <copy class="icon" @click="handleCopyText" />
    </div>
  </div>
</template>

<style scoped>
.quote-setting {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  /* font-size: var(--font-size-large); */
  border-radius: 8px;
}

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

.add-button {
  margin-top: 6px;
  padding: 4px 12px;
  border-radius: 8px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  cursor: pointer;
}

.copy-text {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-gray-300);
  border-radius: 8px;
}

.text {
  margin-left: 15px;
  flex: 1;
}

.icon {
  margin-right: 15px;
  cursor: pointer;
}

.icon:hover {
  color: var(--color-primary);
}
</style>
