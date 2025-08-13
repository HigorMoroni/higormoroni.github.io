<script setup lang="ts">
import { useStore } from '@/composables/useStore';
import DefaultLayout from '@/layouts/default.vue';

const { projects } = useStore();
</script>

<template>
  <DefaultLayout variation="secondary" :title="projects.title" :subtitle="projects.subtitle">
    <template #content>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 relative">
        <a
          v-for="item in projects.items"
          :key="item.name"
          :href="item.repoUrl"
          target="_blank"
          class="portfolio__project bg-primary-content-background relative block overflow-hidden transition-all duration-150"
        >
          <img :src="item.image" :alt="item.name" class="transition-all duration-800 ease-in-out grayscale">
          <div class="project__content w-full h-full text-overlay-text p-6 absolute top-0 left-0 opacity-0 transition-all duration-800 ease-in-out">
            <h3>{{ item.name }}</h3>
            <hr class="w-0 my-3 transition-width duration-650 ease-out">
            <p>{{ item.description }}</p>
          </div>
        </a>
      </div>
    </template>
  </DefaultLayout>
</template>

<style lang="postcss" scoped>
  .portfolio__project:hover {
    img {
      opacity: 0.2;
      transform: scale(1.02);
    }
    .project__content {
      opacity: 1;

      hr {
        width: 15%;
      }
    }
  }
</style>
