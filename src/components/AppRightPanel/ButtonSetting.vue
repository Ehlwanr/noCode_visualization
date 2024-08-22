<script setup lang="ts">
import type { ButtonBlockInfo, flexJustifyType } from '@/types/block'
import SegmentedControl from '@/ui/SegmentedControl/SegmentedControl.vue'

const props = defineProps<{
  blockInfo: ButtonBlockInfo
}>()

const emit = defineEmits<{ (event: 'change', block: ButtonBlockInfo): void }>()

const data = [
  {
    label: '左',
    value: 'flex-start'
  },
  {
    label: '中',
    value: 'center'
  },
  {
    label: '右',
    value: 'flex-end'
  }
]

</script>

<template>
  <div class="button-setting">
    <div>
      {{ props.blockInfo.type }}
    </div>
    <segmented-control :data="data" :blockInfo="blockInfo" @input="(val) => {
      emit('change', {
        ...props.blockInfo,
        props: { ...props.blockInfo.props, flexJC: val as flexJustifyType }
      })
    }"
    />
  </div>
</template>

<style scoped></style>
