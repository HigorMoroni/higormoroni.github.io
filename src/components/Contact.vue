<script setup lang="ts">
import { useStore } from '@/composables/useStore';
import DefaultLayout from '@/layouts/default.vue';

const { contact, personal, socials } = useStore();
</script>

<template>
  <DefaultLayout :title="contact.title" :subtitle="contact.subtitle">
    <template #content>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 border-b-2 border-line pb-7">
        <div v-for="item in contact.items" :key="item.title" class="flex flex-col gap-3">
          <strong>{{ item.title }}</strong>
          <span>{{ item.content }}</span>
        </div>
      </div>
      <div class="flex justify-between mt-16 sm:mt-24 xl:mt-32">
        <h1 class="flex flex-col text-5xl/14">
          <span class="font-light">{{ personal.firstName }}</span>
          <span class="text-highlight uppercase font-bold">{{ personal.lastName }}</span>
        </h1>
        <ul class="self-end hidden gap-2 text-2xl lg:flex">
          <li v-for="social in socials.items" :key="social.title">
            <a :href="social.url" target="_blank">
              <ion-icon :name="`logo-${social.title.toLowerCase()}`" />
            </a>
          </li>
        </ul>
      </div>
    </template>
  </DefaultLayout>
</template>
