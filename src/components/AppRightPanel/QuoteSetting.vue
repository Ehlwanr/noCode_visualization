<script setup lang="ts">
// import { useFieldArray, useForm } from 'vee-validate'
// import { watch } from 'vue'

import type { QuoteBlockInfo, QuoteBlockStatus } from '@/types/block'
import SegmentedControl from '@/ui/SegmentedControl/SegmentedControl.vue'

const props = defineProps<{
  blockInfo: QuoteBlockInfo
}>()

const emit = defineEmits<{ (event: 'change', block: QuoteBlockInfo): void }>()


const data = [
  {
    label: 'success',
    value: 'success'
  },
  {
    label: 'warning',
    value: 'warning'
  },
  {
    label: 'error',
    value: 'error'
  }
]

// const { values, defineInputBinds } = useForm({
//   initialValues: {
//     content: props.blockInfo.props.content
//   }
// })
// const { fields, push } = useFieldArray('blocks')

// const content = defineInputBinds('content')

// watch([values], ([newValues]) => {
//   emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
// })

</script>

<template>
  <div class="quote-setting">
    <div>
      {{ props.blockInfo.type }}
    </div>
    <input class="content-input" v-model="props.blockInfo.props.content" />
    <segmented-control 
      :data="data" 
      :blockInfo="blockInfo" 
      @input="(val) => {
        emit('change', {
          ...props.blockInfo,
          props: { ...props.blockInfo.props, status: val as QuoteBlockStatus }
        })

      }"
    />
    <!-- <input v-for="field in fields" :key="field.key" class="content-input" v-model="field.value" /> -->

    <!-- <button class="add-button" @click="push(new Date().toLocaleTimeString())">添加</button> -->

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
</style>
