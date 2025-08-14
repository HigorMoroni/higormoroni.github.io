<script setup lang="ts">
import { useStore } from '@/composables/useStore';
import DefaultLayout from '@/layouts/default.vue';

const { socials } = useStore();
</script>

<template>
  <DefaultLayout :title="socials.title" :subtitle="socials.subtitle">
    <template #content>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <a
          v-for="media in socials.items"
          :key="media.title"
          :href="media.url"
          target="_blank"
          class="hover:text-inherit!"
        >
          <div class="flex gap-3">
            <ion-icon :name="`logo-${media.title}`" size="large" class="mt-1" />
            <div class="flex flex-col gap-1">
              <h3 class="text-highlight! hover:text-highlight-hover!">{{ media.title }}</h3>
              <p>{{ media.description }}</p>
            </div>
          </div>
        </a>
      </div>
    </template>
  </DefaultLayout>
</template>
