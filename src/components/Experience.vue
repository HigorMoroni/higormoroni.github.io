<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';
</script>

<template>
  <DefaultLayout variation="secondary" hide-bottom-padding>
    <template #title>
      <h3>Experiência</h3>
      <p>Onde eu já contribuí e aprendi.</p>
    </template>

    <template #content>
      <ol class="flex flex-col border-l-2 border-line pl-6 pb-8 ml-3 relative gap-8 md:pb-12 mb:gap-12 xl:pb-16 xl:gap-16">
        <li v-for="n in 4" :key="n" class="relative">
          <div class="bg-highlight h-2.5 w-2.5 absolute -left-7.5 top-2 rounded-full shadow-[0_0_0_8px_#fff]" />
          <div class="flex flex-col gap-1 md:flex-row md:gap-12">
            <div class="md:w-4/10">
              <span class="text-xs">2017 - Presente</span>
              <h4>Prefeitura Municipal da Praia Grande</h4>
              <h5 class="font-medium text-sm text-secondary-text">
                Agente Administrativo
              </h5>
              <span class="text-xs">Praia Grande, SP</span>
            </div>
            <p class="md:w-6/10">
              Gerenciamento de rotina e atividades administrativas de média complexidade; resolução de problemas comuns ao exercício das atividades escolares; soluções básicas e intermediárias com Excel e VBA; controle e expedição de documentos e processos de acordo com os padrões de redação oficial; atendimento ao público e organização.
            </p>
          </div>
        </li>
      </ol>
    </template>
  </DefaultLayout>
</template>
