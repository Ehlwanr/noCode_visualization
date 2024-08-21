<script setup lang="ts">
import { h } from 'vue'
type Field = {
  id: string
  type: 'input' | 'select'
}
defineProps({
  title: {
    type: String,
    required: true
  },
  onClick: {
    type: Function,
    required: true
  }
})

const fieldMap = {
  input: h('input'),
  select: h('select')
}

const fields: Field[] = [
  {
    id: '1',
    type: 'input'
  },
  {
    id: '2',
    type: 'select'
  }
]
</script>

<template>
  <div class="form">
    <div class="form-item" v-for="field in fields" :key="field.id">
      <component :is="fieldMap[field.type]" />
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
</style>
