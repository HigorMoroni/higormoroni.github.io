<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';

const socials = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/higormoroni',
    description: 'Minha rede social profissional.'
  },
  {
    name: 'gitHub',
    url: 'https://github.com/HigorMoroni',
    description: 'Meus projetos de código-aberto para sua análise.'
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/moroni.higor',
    description: 'E também minha rede social pessoal.'
  }
];
</script>

<template>
  <DefaultLayout>
    <template #title>
      <h3>Minhas Redes</h3>
      <p>Sempre produzindo algo.</p>
    </template>

    <template #content>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          class="hover:text-inherit!"
        >
          <div class="flex gap-3">
            <div>
              <ion-icon :name="`logo-${social.name}`" size="large" class="mt-1" />
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="text-highlight! hover:text-highlight-hover!">{{ social.name }}</h3>
              <p>{{ social.description }}</p>
            </div>
          </div>
        </a>
      </div>
    </template>
  </DefaultLayout>
</template>