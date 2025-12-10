import { ref } from 'vue'

/**
 * Guide 数据 composable
 */
export function useGuideData() {
  const guidesData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async () => {
    loading.value = true
    error.value = null
    try {
      const module = await import('../data/guides.js')
      const guides = module.default || []
      guidesData.value = Array.isArray(guides) ? guides : []
    } catch (err) {
      error.value = err.message || 'Failed to load guide data'
      guidesData.value = []
      console.error('Error loading guide data:', err)
    } finally {
      loading.value = false
    }
  }

  /**
   * 仅加载首页需要的指南数据（isHome: true）
   */
  const loadHomeGuidesOnly = async () => {
    loading.value = true
    error.value = null
    try {
      const module = await import('../data/guides.js')
      const guides = module.default || []
      const allData = Array.isArray(guides) ? guides : []
      guidesData.value = allData.filter(guide => guide.isHome === true)
    } catch (err) {
      error.value = err.message || 'Failed to load home guides'
      guidesData.value = []
      console.error('Error loading home guides:', err)
    } finally {
      loading.value = false
    }
  }

  const findGuideByAddressBar = (addressBar) => {
    const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
    return guidesData.value.find(g => g.addressBar === path) || null
  }

  const findGuideById = (id) => {
    return guidesData.value.find(g => g.id === id) || null
  }

  return {
    guides: guidesData,
    loading,
    error,
    loadData,
    loadHomeGuidesOnly,
    findGuideByAddressBar,
    findGuideById
  }
}

