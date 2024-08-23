<script setup lang="ts">
import 'vue-json-pretty/lib/styles.css'

import { computed } from 'vue'

import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { useAppEditorStore } from '@/stores/appEditor'
import type { BlockInfo } from '@/types/block'

import ChartSetting from './ChartSetting.vue'
import QuoteSetting from './QuoteSetting.vue'
import ImageSetting from './ImageSetting.vue'
import SchemaExporter from './SchemaExporter.vue'
import ButtonSetting from './ButtonSetting.vue'
import HeroTitleSetting from './HeroTitleSetting.vue'
import { useEnvStore } from '@/stores/debug'

const appEditorStore = useAppEditorStore()
const envStore = useEnvStore()

const blocksMap = computed(() => {
  const { blocks } = appEditorStore
  return blocks.reduce<Record<string, (typeof blocks)[0]>>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
})

const currentBlockInfo = computed(() => {
  if (!appEditorStore.currentBlockId) return null
  return blocksMap.value[appEditorStore.currentBlockId]
})

const blockSetting = computed(() => {
  switch (currentBlockInfo.value?.type) {
    case 'quote': {
      return QuoteSetting
    }
    case 'chart': {
      return ChartSetting
    }
    case 'image': {
      return ImageSetting
    }
    case 'heroTitle': {
      return HeroTitleSetting
    }
    case 'button': {
      return ButtonSetting
    }
    default:
      return ''
  }
})
</script>

<template>
  <div class="app-right-panel-wrapper">
    <template v-if="currentBlockInfo">
      <div class="app-right-panel-header">
        {{ blocksBaseMeta[currentBlockInfo.type].label }}
      </div>
      <div v-show="envStore.debug" class="app-right-panel-content">
        <component
          :is="blockSetting"
          :blockInfo="currentBlockInfo"
          @change="(block: BlockInfo) => appEditorStore.updateBlock(block.id, block)"
        />
        <SchemaExporter :currentBlockInfo="currentBlockInfo" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.app-right-panel-wrapper {
  position: relative;
  z-index: 4;
  width: var(--panel-width);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-right-panel-header {
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bolder);
  height: 44px;
  line-height: 44px;
  padding: 0 16px 0 20px;
}

.app-right-panel-content {
  padding: 0 16px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
