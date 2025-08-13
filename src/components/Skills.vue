<script setup lang="ts">
import { useStore } from '@/composables/useStore';
import DefaultLayout from '@/layouts/default.vue';

const { skills } = useStore();
</script>

<template>
  <DefaultLayout :title="skills.title" :subtitle="skills.subtitle">
    <template #content>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
        <li v-for="skill in skills" :key="skill.">
          <div class="flex font-bold text-lg uppercase gap-3 mb-1">
            <span class="text-highlight">{{ skill.level }}<small>%</small></span>
            <h4>{{ skill.name }}</h4>
          </div>
          <div class="bg-line h-[5px]">
            <div class="bg-highlight h-[5px] transition-all duration-3000" :style="`width: ${skill.level}%;`" />
          </div>
        </li>
      </ul>
    </template>
  </DefaultLayout>
</template>
