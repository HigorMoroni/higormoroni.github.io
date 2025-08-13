<script setup lang="ts">
import { useStore } from '@/composables/useStore';
import DefaultLayout from '@/layouts/default.vue';

const { about } = useStore();
</script>

<template>
  <DefaultLayout variation="secondary">
    <template #title>
      <h3>{{ about.title }}</h3>
      <p>{{ about.subtitle }}</p>
    </template>

    <template #content>
      <article class="flex flex-col gap-3 text-sm/7 md:text-lg" v-html="about.content" />
    </template>
  </DefaultLayout>
</template>
