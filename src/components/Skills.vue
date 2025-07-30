<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';

const skills = [
  { name: 'JavaScript ES6+', level: 75 },
  { name: 'HTML e CSS', level: 70 },
  { name: 'Git', level: 65 },
  { name: 'PHP', level: 65 },
  { name: 'Lógica de Programação', level: 96 },
  { name: 'Programação Funcional', level: 50 },
  { name: 'Hardware', level: 90 },
  { name: 'Excel Avançado e VBA', level: 90 },
];

</script>

<template>
  <DefaultLayout>
    <template #title>
      <h3 class="uppercase font-bold text-lg">Habilidades</h3>
      <p>Crescendo a cada dia.</p>
    </template>

    <template #content>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <li v-for="skill in skills">
          <div class="flex font-bold text-lg uppercase gap-3 mb-1">
            <span class="text-highlight">{{skill.level}}<small>%</small></span>
            <h4>{{skill.name}}</h4>
          </div>
          <div class="bg-line h-[5px]">
            <div class="bg-highlight h-[5px] transition-all duration-3000" :style="`width: ${skill.level}%;`"/>
          </div>
        </li>
      </ul>
    </template>
  </DefaultLayout>
</template>