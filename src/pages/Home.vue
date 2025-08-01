<script setup lang="ts">
import About from '@/components/About.vue';
import Education from '@/components/Education.vue';
import Experience from '@/components/Experience.vue';
import Header from '@/components/Header.vue';
import Skills from '@/components/Skills.vue';
</script>

<template>
  <main class="max-w-[1920px] mx-auto">
    <Header />
    <About />
    <Skills />
    <Experience />
    <Education />
  </main>
</template>