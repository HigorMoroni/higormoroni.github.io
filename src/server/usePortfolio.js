export function usePortfolio() {
  const portfolioData = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const loadPortfolioData = async () => {
    try {
      loading.value = true
      const response = await fetch('/data/portfolio.json')
      
      if (!response.ok) {
        throw new Error('Erro ao carregar dados do portfolio')
      }
      
      portfolioData.value = await response.json()
    } catch (err) {
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