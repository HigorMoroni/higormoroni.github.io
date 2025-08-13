<script setup lang="ts">
import { useStore } from '@/composables/useStore';
import DefaultLayout from '@/layouts/default.vue';

const { education } = useStore();
</script>

<template>
  <DefaultLayout hide-top-padding :title="education.title" :subtitle="education.subtitle">
    <template #content>
      <ol class="flex flex-col border-l-2 border-line pl-6 py-8 ml-3 relative gap-8 md:py-12">
        <div class="border-line h-[1px] w-4 absolute border -left-2.25 bottom-0" />
        <li v-for="item in education.items" :key="item.degree" class="relative">
          <div class="bg-highlight h-2.5 w-2.5 absolute -left-7.5 top-2 rounded-full shadow-[0_0_0_8px_#fff]" />
          <div class="flex flex-col gap-1 md:flex-row md:gap-12">
            <div class="md:w-4/10">
              <span class="text-xs">{{ item.period }}</span>
              <h4>{{ item.institution }}</h4>
              <h5 class="font-medium text-sm text-secondary-text">
                {{ item.degree }}
              </h5>
              <span class="text-xs">{{ item.location }}</span>
            </div>
            <p class="md:w-6/10" v-html="item.description" />
          </div>
        </li>
      </ol>
    </template>
  </DefaultLayout>
</template>
