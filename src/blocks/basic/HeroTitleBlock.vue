<script setup lang="ts">
import type { HeroTitleBlockInfo } from '@/types/block';

const props = defineProps<{
  blockInfo: HeroTitleBlockInfo
}>()
</script>

<template>
  <h1 class="hero-title">{{ props.blockInfo.props.content }}</h1>
</template>

<style scoped>
.hero-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-orange);
}

.hero-title:hover {
  text-decoration: underline wavy var(--color-green-dark);
}
</style>
