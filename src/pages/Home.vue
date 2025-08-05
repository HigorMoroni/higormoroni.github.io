<script setup lang="ts">
import About from '@/components/About.vue';
import Education from '@/components/Education.vue';
import Experience from '@/components/Experience.vue';
import Header from '@/components/Header.vue';
import Portfolio from '@/components/Portfolio.vue';
import Skills from '@/components/Skills.vue';
import Social from '@/components/Social.vue';
</script>

<template>
  <main class="max-w-[1920px] mx-auto">
    <Header />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Portfolio />
    <Social />
  </main>
</template>