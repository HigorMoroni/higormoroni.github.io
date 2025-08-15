<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

import Home from '@/pages/Home.vue';

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>

<template>
  <Home />
</template>
