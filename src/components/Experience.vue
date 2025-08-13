<script setup lang="ts">
import { useStore } from '@/composables/useStore';
import DefaultLayout from '@/layouts/default.vue';

const { experience } = useStore();
</script>

<template>
  <DefaultLayout variation="secondary" hide-bottom-padding :title="experience.title" :subtitle="experience.subtitle">
    <template #content>
      <ol class="flex flex-col border-l-2 border-line pl-6 pb-8 ml-3 relative gap-8 md:pb-12 mb:gap-12 xl:pb-16 xl:gap-16">
        <li v-for="item in experience.items" :key="item.company" class="relative">
          <div class="bg-highlight h-2.5 w-2.5 absolute -left-7.5 top-2 rounded-full shadow-[0_0_0_8px_#fff]" />
          <div class="flex flex-col gap-1 md:flex-row md:gap-12">
            <div class="md:w-4/10">
              <span class="text-xs">{{ `${item.startDate} - ${item.endDate}` }}</span>
              <h4>{{ item.company }}</h4>
              <h5 class="font-medium text-sm text-secondary-text">
                {{ item.position }}
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
