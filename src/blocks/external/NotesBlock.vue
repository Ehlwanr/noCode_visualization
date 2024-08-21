<script setup lang="ts">
import NotesEditor from '@/components/NotesEditor/NotesEditor.vue'

import type { NotesBlockInfo } from '@/types/block'

const props = defineProps<{
  blockInfo: NotesBlockInfo
}>()
</script>

<template>
  <div class="notes">
    <NotesEditor :NotesBlockInfo="props.blockInfo" />
  </div>
</template>

<style scoped>
.notes {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
}
</style>
