import { ref } from 'vue'

/**
 * Wiki 数据 composable
 * 每个wiki分类是一个数据文件，包含该分类下的多个条目
 */
export function useWikiData(initialCategory) {
  const wikiData = ref([])
  const loading = ref(false)
  const error = ref(null)
  const categoryRef = ref(initialCategory || '')

  /**
   * 加载指定分类的wiki数据
   * @param {string} category - 分类名称（如 'controls', 'weapons', 'forging'）
   */
  const loadData = async (category = categoryRef.value) => {
    categoryRef.value = category
    loading.value = true
    error.value = null
    try {
      if (!category) {
        wikiData.value = []
        return
      }

      const module = await import(`../data/wiki/${category}.js`)
      const data = module.default || []
      wikiData.value = Array.isArray(data) ? data : []
    } catch (err) {
      error.value = err.message || `Failed to load wiki data for category: ${category}`
      wikiData.value = []
      console.error(`Error loading wiki data for category: ${category}`, err)
    } finally {
      loading.value = false
    }
  }

  /**
   * 根据addressBar查找wiki条目
   * @param {string} category - 分类名称
   * @param {string} idSlug - addressBar的slug（去掉开头的/）
   */
  const findByAddress = (category, idSlug) => {
    const list = wikiData.value || []
    return list.find((item) => {
      if (!item || !item.addressBar) return false
      const slug = String(item.addressBar).replace(/^\//, '')
      return slug === idSlug
    })
  }

  /**
   * 根据id查找wiki条目
   */
  const findById = (id) => {
    return wikiData.value.find(item => item.id === id) || null
  }

  /**
   * 获取其他wiki条目（排除当前项）
   */
  const getOtherWikis = (currentId) => {
    return wikiData.value.filter(item => item.id !== currentId).slice(0, 10)
  }

  return {
    data: wikiData,
    loading,
    error,
    loadData,
    findByAddress,
    findById,
    getOtherWikis
  }
}

