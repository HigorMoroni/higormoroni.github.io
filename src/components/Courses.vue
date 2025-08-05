<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';

import aws from '@/assets/images/courses/aws.svg';
import laravel from '@/assets/images/courses/laravel.svg';
import nosql from '@/assets/images/courses/nosql.svg';

const courses = [
  { name: 'AWS', img: aws },
  { name: 'Laravel', img: laravel },
  { name: 'NoSQL', img: nosql }
];
</script>

<template>
  <DefaultLayout variation="secondary">
    <template #title>
      <h3>Cursos em Andamento</h3>
      <p>Em breve desenvolvendo muito mais.</p>
    </template>

    <template #content>
      <ul class="flex gap-6 flex-wrap">
        <li
          v-for="course in courses"
          :key="course.name"
        >
          <img
            :src="course.img"
            :alt="course.name"
            :title="course.name"
            class="w- transition-all duration-1000 ease-in-out grayscale hover:grayscale-0"
          />
        </li>
      </ul>
    </template>
  </DefaultLayout>
</template>