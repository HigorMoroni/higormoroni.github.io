import type { Ref } from 'vue';
import type { PortfolioState } from '@/store/types';
import { useStore } from '@/composables/useStore';

export function usePortfolio() {
  const portfolioData: Ref<PortfolioState | null> = ref(null);
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | null> = ref(null);

  const loadPortfolioData = async (): Promise<void> => {
    const store = useStore();

    try {
      loading.value = true;
      const response = await fetch('/data/portfolio.json');

      if (!response.ok) {
        throw new Error('Erro ao carregar dados do portfolio');
      }

      portfolioData.value = await response.json();

      if (portfolioData.value) {
        store.setAbout(portfolioData.value.about);
        store.setContact(portfolioData.value.contact);
        store.setCourses(portfolioData.value.courses);
        store.setEducation(portfolioData.value.education);
        store.setExperience(portfolioData.value.experience);
        store.setPersonal(portfolioData.value.personal);
        store.setProjects(portfolioData.value.projects);
        store.setSettings(portfolioData.value.settings);
        store.setSkills(portfolioData.value.skills);
        store.setSocials(portfolioData.value.socials);
      }
    }
    catch (err: any) {
      error.value = err.message;
      console.error('Erro ao carregar portfolio:', err);
    }
    finally {
      loading.value = false;
    }
  };

  return {
    portfolioData,
    loading,
    error,
    loadPortfolioData
  };
}
