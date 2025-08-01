<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';
</script>

<template>
  <DefaultLayout variation="secondary" hide-top-padding>
    <template #title>
      <h3>Formação</h3>
      <p>Onde aprendi a aprender.</p>
    </template>

    <template #content>
      <ol class="flex flex-col border-l-2 border-line pl-6 pt-6 ml-3 relative">
        <div class="border-line h-[1px] w-4 absolute border -left-2.25 bottom-0"></div>
        <li v-for="n in 2" class="relative mb-6">
          <div class="bg-highlight h-2.5 w-2.5 absolute -left-7.5 top-2 rounded-full shadow-[0_0_0_8px_#fff]" />
          <div>
            <div class="flex flex-col mb-4 gap-1">
              <span class="text-xs">2015 - 2019</span>
              <h4>Faculdade de Tecnologia do Estado de São Paulo</h4>
              <h5 class="font-medium text-sm text-secondary-text">Graduação, Análise e Desenvolvimento de Sistemas</h5>
              <span class="text-xs">Praia Grande, SP</span>
            </div>
            <p>
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