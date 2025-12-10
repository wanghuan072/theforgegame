import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { seoConfig } from './config.js'

/**
 * 加载数据模块（用于 SEO）
 */
const loadDataForSEO = async (dataType, category = null) => {
  try {
    if (dataType === 'wiki' && category) {
      const module = await import(`../data/wiki/${category}.js`)
      return module.default || []
    } else if (dataType === 'guide') {
      const module = await import('../data/guides.js')
      return module.default || []
    } else {
      throw new Error(`Unknown data type: ${dataType}`)
    }
  } catch (error) {
    console.warn(`Failed to load data for SEO: ${dataType}${category ? `/${category}` : ''}`, error)
    return []
  }
}

// SEO composable
export function useSEO() {
  const route = useRoute()

  // 当前页面的SEO数据
  const currentSEO = ref({})

  // 获取当前页面路径
  const currentPath = computed(() => {
    return route.path
  })

  // 获取Canonical URL
  const canonicalUrl = computed(() => {
    return `${seoConfig.fullDomain}${currentPath.value}`
  })

  // 设置页面SEO数据
  const setSEO = (seoData) => {
    currentSEO.value = {
      ...seoConfig.defaults,
      ...seoData
    }
    updateMetaTags()
  }

  // 更新HTML meta标签
  const updateMetaTags = () => {
    if (typeof document === 'undefined') return

    const seo = currentSEO.value

    // 更新title
    document.title = seo.title || seoConfig.defaults.title

    // 更新或创建meta标签
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', seo.author)

    // Open Graph标签
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', seo.image, 'property')
    updateMetaTag('og:url', canonicalUrl.value, 'property')
    updateMetaTag('og:type', seo.type, 'property')
    updateMetaTag('og:site_name', 'The Forge Game Community', 'property')

    // Twitter Card标签
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', seo.image, 'name')
    updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')

    // Canonical URL
    updateCanonicalLink()
  }

  // 更新单个meta标签
  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return

    // 查找现有标签
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (tag) {
      // 如果标签存在，直接更新content
      tag.setAttribute('content', content)
    } else {
      // 如果标签不存在，创建新标签
      tag = document.createElement('meta')
      tag.setAttribute(attribute, name)
      tag.setAttribute('content', content)
      document.head.appendChild(tag)
    }
  }

  // 更新Canonical链接
  const updateCanonicalLink = () => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl.value)
  }

  // 生成结构化数据
  const generateStructuredData = (pageType = 'WebPage') => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': pageType,
      name: currentSEO.value.title,
      description: currentSEO.value.description,
      url: canonicalUrl.value,
      publisher: {
        '@type': 'Organization',
        name: 'The Forge Game Community',
        url: seoConfig.fullDomain,
        logo: {
          '@type': 'ImageObject',
          url: `${seoConfig.fullDomain}/images/logo.webp`
        },
        sameAs: [
          `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`,
          `https://facebook.com/${seoConfig.social.facebook}`,
          `https://instagram.com/${seoConfig.social.instagram}`,
          `https://discord.gg/${seoConfig.social.discord}`
        ]
      }
    }

    // 根据页面类型添加特定数据
    if (pageType === 'VideoGame') {
      baseData.genre = 'RPG Simulation'
      baseData.gamePlatform = ['Roblox']
      baseData.applicationCategory = 'Game'
    }

    if (pageType === 'Article') {
      baseData.author = {
        '@type': 'Organization',
        name: 'The Forge Game Community'
      }
      baseData.datePublished = new Date().toISOString()
      baseData.dateModified = new Date().toISOString()
    }

    return baseData
  }

  // 添加结构化数据到页面
  const addStructuredData = (data) => {
    if (typeof document === 'undefined') return

    // 移除现有的结构化数据
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // 添加新的结构化数据
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data, null, 2)
    document.head.appendChild(script)
  }

  return {
    currentSEO,
    currentPath,
    canonicalUrl,
    setSEO,
    updateMetaTags,
    generateStructuredData,
    addStructuredData
  }
}

// 动态路由名称集合（需要从数据加载 SEO 的路由）
const dynamicRouteNames = new Set([
  'guide-detail',
  'wiki-detail'
])

// 自动SEO composable - 监听路由变化自动设置SEO
export function useAutoSEO() {
  const { setSEO, generateStructuredData, addStructuredData } = useSEO()
  const route = useRoute()
  
  // 处理SEO的函数
  const handleSEO = async () => {
    const routeName = route.name
    let finalSEOData = {
      ...seoConfig.defaults
    }

    // 先从路由 meta 获取 TDK
    if (route.meta) {
      if (route.meta.title) {
        finalSEOData.title = route.meta.title
      }
      if (route.meta.description) {
        finalSEOData.description = route.meta.description
      }
      if (route.meta.keywords) {
        finalSEOData.keywords = route.meta.keywords
      }
      if (route.meta.image) {
        finalSEOData.image = route.meta.image
      }
      if (route.meta.type) {
        finalSEOData.type = route.meta.type
      }
    }

    // 处理动态路由（从数据加载 SEO）
    if (dynamicRouteNames.has(routeName)) {
      try {
        let item = null
        
        if (routeName === 'guide-detail') {
          // 加载 guide 数据
          const guides = await loadDataForSEO('guide')
          const searchId = route.params.id || ''
          const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
          
          item = guides.find(g => {
            if (!g.addressBar) return false
            const cleanAddressBar = g.addressBar.replace(/^\//, '').replace(/\/$/, '')
            return cleanAddressBar === cleanSearchId
          })
        } else if (routeName === 'wiki-detail') {
          // 加载 wiki 数据
          const category = route.params.category || 'ores'
          const items = await loadDataForSEO('wiki', category)
          const searchId = route.params.id || ''
          const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
          
          item = items.find(w => {
            if (!w.addressBar) return false
            const cleanAddressBar = w.addressBar.replace(/^\//, '').replace(/\/$/, '')
            return cleanAddressBar === cleanSearchId
          })
        }
        
        if (item) {
          if (item.seo) {
            finalSEOData = {
              ...finalSEOData,
              title: item.seo.title || item.title || finalSEOData.title,
              description: item.seo.description || item.description || finalSEOData.description,
              keywords: item.seo.keywords || finalSEOData.keywords,
              image: item.imageUrl || finalSEOData.image,
              type: 'article'
            }
          } else {
            finalSEOData = {
              ...finalSEOData,
              title: item.title ? `${item.title} - The Forge Game` : finalSEOData.title,
              description: item.description || finalSEOData.description,
              image: item.imageUrl || finalSEOData.image,
              type: 'article'
            }
          }
        }
      } catch (error) {
        console.warn('Failed to load dynamic SEO data:', error)
      }
    }

    // 设置 SEO
    setSEO(finalSEOData)
    
    // 添加结构化数据
    const structuredData = generateStructuredData(finalSEOData.type === 'article' ? 'Article' : 'WebPage')
    addStructuredData(structuredData)
  }
  
  // 监听路由变化
  watch(
    [() => route.fullPath, () => route.name],
    async () => {
      await handleSEO()
    },
    { immediate: true }
  )
}

