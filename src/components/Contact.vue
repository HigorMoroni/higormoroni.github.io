<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';
</script>

<template>
  <DefaultLayout>
    <template #title>
      <h3>Contato</h3>
      <p>Me chama.</p>
    </template>

    <template #content>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 border-b-2 border-line pb-7">
        <div class="flex flex-col gap-3">
          <strong>Cidade Atual</strong>
          <span>Santos, SP</span>
        </div>
        <div class="flex flex-col gap-3">
          <strong>Telefone</strong>
          <a>(13) 98868-5814</a>
        </div>
        <div class="flex flex-col gap-3">
          <strong>Site</strong>
          <a>www.higor.dev</a>
        </div>
        <div class="flex flex-col gap-3">
          <strong>E-mail</strong>
          <a>moroni@higor.dev</a>
        </div>
      </div>
      <div class="flex justify-between mt-16 sm:mt-24 xl:mt-32">
        <h1 class="flex flex-col text-5xl/14">
          <span class="font-light">Higor</span>
          <span class="text-highlight uppercase font-bold">Moroni</span>
        </h1>
        <ul class="self-end hidden gap-2 text-2xl lg:flex">
          <li>
            <a href="https://github.com/HigorMoroni" target="_blank">
              <ion-icon name="logo-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/higormoroni/" target="_blank">
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/moroni.higor" target="_blank">
              <ion-icon name="logo-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </template>
  </DefaultLayout>
</template>
