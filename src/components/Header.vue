<script setup lang="ts">
import { useStore } from '@/composables/useStore';

const { personal, socials, contact } = useStore();

const fullName = computed(() => `${personal.firstName} ${personal.lastName}`);
</script>

<template>
  <header class="h-screen min-h-214 sm:min-h-170 md:min-h-160 lg:min-h-0 flex flex-col justify-center items-center bg-primary-background">
    <section class="w-full p-6 flex flex-col justify-center items-center lg:flex-row md:p-12 lg:p-0 lg:gap-0 lg:h-full">
      <div class="w-full flex justify-center items-center lg:bg-primary-title-background lg:h-full lg:w-3/10">
        <figure>
          <img class="rounded-full w-38 md:w-50 xl:w-60" :src="personal.avatar" :alt="fullName">
        </figure>
      </div>

      <div class="w-full flex flex-col lg:h-full lg:w-7/10 lg:p-12 xl:p-16">
        <div class="w-full flex flex-col gap-5 items-center py-5 lg:h-full lg:justify-center lg:items-start lg:gap-10 xl:gap-6">
          <h1 class="flex flex-col items-center text-5xl/14 lg:items-start xl:text-7xl/20">
            <span class="font-light">{{ personal.firstName }}</span>
            <span class="text-highlight uppercase font-bold">{{ personal.lastName }}</span>
          </h1>

          <h2 class="font-light xl:text-2xl">
            {{ personal.title }}
          </h2>

          <div class="w-full flex flex-col gap-2 items-center text-2xl lg:items-start">
            <ul class="flex gap-2">
              <li>
                <a href="#">
                  <span class="fi fi-br rounded" />
                </a>
              </li>
              <li>
                <a href="#" class="grayscale hover:grayscale-0 transition-all duration-500">
                  <span class="fi fi-us rounded" />
                </a>
              </li>
              <li>
                <a href="#" class="grayscale hover:grayscale-0 transition-all duration-500">
                  <span class="fi fi-es rounded" />
                </a>
              </li>
            </ul>

            <div class="w-full flex justify-center lg:justify-between items-center">
              <ul class="flex gap-2">
                <li><a><ion-icon name="sunny-outline" class="active" /></a></li>
                <li><a><ion-icon name="moon-outline" /></a></li>
              </ul>

              <ul class="hidden gap-2 lg:flex">
                <li v-for="(url, name) in socials" :key="name">
                  <a :href="url" target="_blank">
                    <ion-icon :name="`logo-${name}`" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-7 border-t-2 border-line pt-7">
          <div v-for="method in contact.items" :key="method.title" class="flex flex-col gap-3 items-center lg:items-start">
            <strong>{{ method.title }}</strong>
            <span>{{ method.content }}</span>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>
