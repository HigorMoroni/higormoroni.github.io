import { ref, type Ref } from 'vue';

interface PortfolioData {
  about: object;
  contact: object;
  courses: object;
  education: object;
  experience: object;
  personal: object;
  projects: object;
  settings: object;
  skills: object;
  socials: object;
}

export function usePortfolio() {
  const portfolioData: Ref<PortfolioData | null> = ref(null)
  const loading: Ref<boolean> = ref(false)
  const error: Ref<string | null> = ref(null)

  const loadPortfolioData = async (): Promise<void> => {
    try {
      loading.value = true
      const response = await fetch('/data/portfolio.json')
      
      if (!response.ok) {
        throw new Error('Erro ao carregar dados do portfolio')
      }
      
      portfolioData.value = await response.json()
    } catch (err: any) {
      error.value = err.message
      console.error('Erro ao carregar portfolio:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    portfolioData,
    loading,
    error,
    loadPortfolioData
  }
}