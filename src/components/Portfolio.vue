<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';

import ecoleta from '@/assets/images/portfolio/ecoleta.png';
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
          class="bg-primary-content-background relative block overflow-hidden transition-all duration-150"
        >
          <img :src="ecoleta" alt="" class="hover:opacity-20 hover:ease-in-out hover:duration-800 hover:scale-102" />
          <div class="text-overlay-text absolute top-0 left-0 w-full max-w-sm opacity-0 p-6 duration-600 ease-in-out hover:opacity-100">
            <h3>
              Ecoleta
            </h3>
            <hr class="c-image-overlay__deco-line  t-image-overlay__deco-line" />
            <p>
              Projeto completo de um sistema Web e Mobile de coleta de resíduos.
            </p>
          </div>
        </a>
      </div>
    </template>
  </DefaultLayout>
</template>