<script setup lang="ts">
import { Error, Success, Wallet } from '@icon-park/vue-next'

import type { QuoteBlockInfo } from '@/types/block'
import { watch } from 'vue';

const STATUS_MAP = {
  success: {
    color: '#059669',
    bgColor: '#E4F2E9',
    icon: Success
  },
  warning: {
    color: '#E18F05',
    bgColor: '#F8ECEC',
    icon: Error
  },
  error: {
    color: '#DC2C26',
    bgColor: '#F8ECEC',
    icon: Wallet
  }
}

const props = defineProps<{
  blockInfo: QuoteBlockInfo
}>()

let { color, bgColor, icon } = STATUS_MAP[props.blockInfo.props.status]

watch(() => props.blockInfo.props.status, (status) => {
  const { color: _color, bgColor: _bgColor, icon: _icon } = STATUS_MAP[status]
  color = _color
  bgColor = _bgColor
  icon = _icon
})
</script>

<template>
  <div
    class="quote"
    :style="{ backgroundColor: bgColor, color}"
  >
    <component :is="icon" />
    <span class="quote-text">{{ props.blockInfo.props.content }}</span>
  </div>
</template>

<style scoped>
.quote {
  display: flex;
  align-items: center;
  flex: 1;
  font-size: var(--font-size-large);
  padding: 8px 18px;
  border-radius: 8px;

  /* background-color: ; */
}

.quote-text {
  margin-left: 6px;
}
</style>
