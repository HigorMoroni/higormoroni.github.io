<script setup lang="ts">
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Courses from '@/components/Courses.vue';
import Education from '@/components/Education.vue';
import Experience from '@/components/Experience.vue';
import Header from '@/components/Header.vue';
import Portfolio from '@/components/Portfolio.vue';
import Skills from '@/components/Skills.vue';
import Social from '@/components/Social.vue';

import { usePortfolio } from '@/composables/usePortfolio';

const { loading, error, loadPortfolioData } = usePortfolio();

loadPortfolioData();

if (error.value) {
  console.error('Error loading portfolio data:', error.value);
}
</script>

<template>
  <main class="max-w-[1920px] mx-auto">
    <div v-if="loading" class="loader" />
    <template v-else>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Social />
      <Courses />
      <Contact />
    </template>
  </main>
</template>
