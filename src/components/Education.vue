<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';
</script>

<template>
  <DefaultLayout hide-top-padding>
    <template #title>
      <h3>Formação</h3>
      <p>Onde aprendi a aprender.</p>
    </template>

    <template #content>
      <ol class="flex flex-col border-l-2 border-line pl-6 py-8 ml-3 relative gap-8 md:py-12">
        <div class="border-line h-[1px] w-4 absolute border -left-2.25 bottom-0"></div>
        <li v-for="n in 2" class="relative">
          <div class="bg-highlight h-2.5 w-2.5 absolute -left-7.5 top-2 rounded-full shadow-[0_0_0_8px_#fff]" />
          <div class="flex flex-col gap-1 md:flex-row md:gap-12">
            <div class="md:w-4/10">
              <span class="text-xs">2015 - 2019</span>
              <h4>Faculdade de Tecnologia do Estado de São Paulo</h4>
              <h5 class="font-medium text-sm text-secondary-text">Graduação, Análise e Desenvolvimento de Sistemas</h5>
              <span class="text-xs">Praia Grande, SP</span>
            </div>
            <p class="md:w-6/10">
              Monitor Acadêmico: Algoritmos e Lógica de Programação;
              TCC: BateVolta - Sistema de Gerenciamento de Viagens;
              Participação em eventos acadêmicos e palestras;
              Desenvolvimento de projetos práticos com foco em soluções tecnológicas.
            </p>
          </div>
        </li>
      </ol>
    </template>
  </DefaultLayout>
</template>