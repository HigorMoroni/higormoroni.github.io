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

import { usePortfolio } from '../hooks/usePortfolio';

const { loading, error, portfolioData, loadPortfolioData } = usePortfolio();

loadPortfolioData();

if (error.value) {
  console.error('Error loading portfolio data:', error.value);
}

</script>

<template>
  <main class="max-w-[1920px] mx-auto">
    <div class="loader" v-if="loading" />
    <template v-else>
      <Header
        :personal-data="portfolioData?.personal"
        :socials-data="portfolioData?.socials"
        :contact-data="portfolioData?.contact"
      />
      <About :content="portfolioData?.about" />
      <Skills :content="portfolioData?.skills" />
      <Experience :content="portfolioData?.experience" />
      <Education :content="portfolioData?.education" />
      <Portfolio :content="portfolioData?.projects" />
      <Social :content="portfolioData?.socials" />
      <Courses :content="portfolioData?.courses" />
      <Contact :content="portfolioData?.contact" />
    </template>
  </main>
</template>