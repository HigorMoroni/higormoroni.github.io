<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';

import ecoleta from '@/assets/images/portfolio/ecoleta.webp';
</script>

<template>
  <DefaultLayout variation="secondary">
    <template #title>
      <h3>Portfólio</h3>
      <p>Aqui as coisas começam a ficar interessantes.</p>
    </template>

    <template #content>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 relative">
        <a
          v-for="n in 10"
          target="_blank"
          href="https://github.com/HigorMoroni/Ecoleta"
          class="portfolio__project bg-primary-content-background relative block overflow-hidden transition-all duration-150"
        >
          <img :src="ecoleta" alt="Ecoleta" class="transition-all duration-800 ease-in-out grayscale" />
          <div class="project__content w-full h-full text-overlay-text p-6 absolute top-0 left-0 opacity-0 transition-all duration-800 ease-in-out">
            <h3>
              Ecoleta
            </h3>
            <hr class="w-0 my-3 transition-width duration-650 ease-out" />
            <p>
              Projeto completo de um sistema Web e Mobile de coleta de resíduos.
            </p>
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