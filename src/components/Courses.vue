<script setup lang="ts">
import { useStore } from '@/composables/useStore';
import DefaultLayout from '@/layouts/default.vue';

const { courses } = useStore();
</script>

<template>
  <DefaultLayout variation="secondary" :title="courses.title" :subtitle="courses.subtitle">
    <template #content>
      <ul class="flex gap-6 flex-wrap">
        <li v-for="course in courses.items" :key="course.name">
          <img
            :src="course.image"
            :alt="course.name"
            :title="course.name"
            class="w- transition-all duration-1000 ease-in-out grayscale hover:grayscale-0"
          >
        </li>
      </ul>
    </template>
  </DefaultLayout>
</template>
