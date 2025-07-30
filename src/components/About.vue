<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';
</script>

<template>
  <DefaultLayout variation="secondary">
    <template #title>
      <h3 class="uppercase font-bold text-lg">Sobre mim</h3>
      <p>Apenas um resumo.</p>
    </template>

    <template #content>
      <article class="flex flex-col gap-3 md:text-lg">
        <p>
          Analista Desenvolvedor de Sistemas, graduado em 2019 pela Faculdade de Tecnologia do Estado de São Paulo em Praia Grande, São Paulo. Enquanto acadêmico, atuei por 6 meses como monitor da disciplina de Algoritmos e Lógica de Programação, onde pude auxiliar os novos alunos a pensar logicamente e conhecer os conceitos fundamentais do desenvolvendo. Sou uma pessoa enérgica e bem focada, dedicada ao autoaperfeiçoamento; eu me concentro em aprender e aplicar habilidades de maneira rápida e eficiente, se houver algo para aprender e colocar em prática no processo de uma empresa, eu o faço; minha intenção é sempre dar um mergulho produtivo na empresa em que trabalho. Encontro-me estudando tecnologias JavaScript para desenvolvimento Full-stack, além de práticas de desenvolvendo web e mobile.
        </p>
        <p class="text-highlight font-bold">
          Atualmente estou em busca de uma oportunidade como Desenvolvedor Júnior ou Trainee para me aperfeiçoar e iniciar minha carreira profissional.
        </p>
        <p>
          Meu desejo é aplicar meus conhecimentos para a resolução de problemas e ajudar na entrega de projetos com alta qualidade, além de desenvolver tais conhecimentos ao obter mais experiência. Gostaria de trabalhar com metodologias ágeis e entender o ciclo de um projeto empresarial.
        </p>
      </article>
    </template>
  </DefaultLayout>
</template>