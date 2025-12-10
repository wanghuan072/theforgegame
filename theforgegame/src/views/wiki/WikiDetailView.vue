<template>
  <div class="wiki-detail-view page-container">
    <!-- Wiki Detail Header -->
    <section class="wiki-detail-header" v-if="wiki">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/wiki" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            Wiki
          </router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <router-link :to="`/wiki/${category}`" class="breadcrumb-link">{{ categoryTitle }}</router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">{{ wiki.title }}</span>
        </div>

        <div class="wiki-detail-content">
          <div class="wiki-detail-text">
            <h1 class="wiki-title">{{ wiki.title }}</h1>

            <div class="wiki-detail-meta">
              <div class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span class="meta-text">{{ formatDate(wiki.publishDate) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wiki Content -->
    <section class="wiki-content" v-if="wiki">
      <div class="container">
        <div class="content-layout">
          <!-- Left Content -->
          <div class="left-content">
            <div class="detail-article" ref="contentRef" v-html="wiki.detailsHtml"></div>
          </div>

          <!-- Right Sidebar -->
          <div class="right-sidebar">
            <div class="wiki-info-box">
              <div class="info-box-header">
                <h3 class="info-box-title">{{ wiki?.title }}</h3>
              </div>

              <!-- Wiki Image -->
              <div class="wiki-image" v-if="wiki.imageUrl">
                <img :src="wiki.imageUrl" :alt="wiki.imageAlt || wiki.title" class="wiki-image-img">
              </div>

              <!-- Wiki Meta Info -->
              <div class="wiki-meta">
                <div class="meta-item">
                  <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  <span class="meta-text">{{ formatDate(wiki?.publishDate) }}</span>
                </div>
              </div>
            </div>

            <!-- Other Wiki Entries -->
            <div class="wiki-navigation" v-if="otherWikis && otherWikis.length > 0">
              <h4 class="nav-title">Other {{ categoryTitle }}</h4>
              <div class="nav-grid">
                <router-link
                  v-for="item in otherWikis"
                  :key="item.id"
                  :to="`/wiki/${category}/${(item.addressBar || '').replace('/', '')}`"
                  class="nav-card"
                >
                  <div class="nav-card-title">{{ item.title }}</div>
                  <div class="nav-card-meta">
                    <span>{{ formatDate(item.publishDate) }}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Not Found -->
    <section class="wiki-content" v-else>
      <div class="container">
        <div class="not-found">
          <h2>Wiki Article Not Found</h2>
          <p>The wiki article you're looking for doesn't exist or has been removed.</p>
          <router-link :to="`/wiki/${category}`" class="btn-hero btn-secondary">Back to {{ categoryTitle }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useWikiData } from '../../composables/useWikiData'

const route = useRoute()
const category = computed(() => route.params.category || '')
const idSlug = computed(() => route.params.id || '')
const { data: wikiData, loadData, findByAddress, getOtherWikis } = useWikiData(category.value)
const wiki = ref(null)
const contentRef = ref(null)

// 获取分类标题
const categoryTitle = computed(() => {
  const titles = {
    ores: 'Ores',
    weapons: 'Weapons',
    armor: 'Armor',
    pickaxes: 'Pickaxes',
    enemies: 'Enemies',
    locations: 'Locations',
    mechanics: 'Mechanics',
    npcs: 'NPCs',
    potions: 'Potions',
    quests: 'Quests',
    races: 'Races',
    runes: 'Runes',
    skills: 'Skills'
  }
  return titles[category.value] || category.value
})

// 初始化加载数据并查找 wiki
const initWiki = async () => {
  await nextTick()
  const currentCategory = category.value
  if (!currentCategory) return
  
  await loadData(currentCategory)
  wiki.value = findByAddress(currentCategory, idSlug.value)
}

onMounted(async () => {
  await initWiki()
})

// 监听路由参数变化，更新当前 wiki
watch([() => route.params.category, () => route.params.id], async () => {
  await nextTick()
  const currentCategory = category.value
  if (!currentCategory) return
  
  await loadData(currentCategory)
  wiki.value = findByAddress(currentCategory, idSlug.value)
})

const otherWikis = computed(() => {
  if (!wiki.value) return []
  return getOtherWikis(wiki.value.id)
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.wiki-detail-view {
  min-height: 100vh;
}

/* Wiki Detail Header */
.wiki-detail-header {
  padding: 80px 0 40px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 0.875rem;
  color: var(--text-soft);
}

.breadcrumb-link {
  color: var(--text-soft);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: var(--accent);
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
}

.breadcrumb-arrow {
  width: 16px;
  height: 16px;
  opacity: 0.6;
}

.breadcrumb-current {
  color: var(--text);
  font-weight: 500;
}

/* Wiki Title (H1) */
.wiki-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 24px 0;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.wiki-detail-text {
  max-width: 800px;
}

.wiki-detail-meta {
  margin-bottom: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-soft);
  font-size: 0.9rem;
}

.meta-icon {
  width: 16px;
  height: 16px;
  color: var(--accent);
}

.meta-text {
  font-weight: 500;
}

/* Wiki Content */
.wiki-content {
  padding: 0 0 80px;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  margin: 0 auto;
}

/* Left Content */
.left-content {
  background: rgba(25, 20, 15, 0.8);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 140, 66, 0.2);
  backdrop-filter: blur(10px);
}

/* Right Sidebar */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wiki-info-box {
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.info-box-header {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  padding: 16px;
}

.info-box-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a0a00;
  margin: 0;
  text-align: center;
}

.wiki-image {
  width: 100%;
  overflow: hidden;
}

.wiki-image-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}

.wiki-meta {
  padding: 16px;
}

/* Navigation */
.wiki-navigation {
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.nav-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 16px 0;
}

.nav-grid {
  display: grid;
  gap: 12px;
}

.nav-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--text);
  background: rgba(255, 140, 66, 0.05);
  border: 1px solid rgba(255, 140, 66, 0.15);
  transition: all 0.3s ease;
}

.nav-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(255, 140, 66, 0.18);
  border-color: rgba(255, 140, 66, 0.35);
  background: rgba(255, 140, 66, 0.1);
}

.nav-card-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text);
}

.nav-card-meta {
  font-size: 0.75rem;
  color: var(--text-soft);
}

.not-found {
  text-align: center;
  padding: 80px 20px;
  color: var(--text-soft);
}

.not-found h2 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 16px;
}

.not-found p {
  margin-bottom: 24px;
  font-size: 1.1rem;
}

.btn-hero {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary {
  background: rgba(255, 140, 66, 0.1);
  color: var(--accent);
  border: 1px solid rgba(255, 140, 66, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 140, 66, 0.2);
  border-color: rgba(255, 140, 66, 0.5);
  transform: translateY(-2px);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .wiki-detail-header {
    padding: 40px 0 20px;
  }

  .wiki-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .content-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .right-sidebar {
    order: -1;
  }

  .wiki-info-box {
    max-width: 400px;
    margin: 0 auto;
  }

  .left-content {
    padding: 24px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .wiki-detail-header {
    padding: 20px 0;
  }

  .wiki-content {
    padding: 20px 0;
  }

  .wiki-title {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .breadcrumb {
    font-size: 0.75rem;
    gap: 6px;
    margin-bottom: 10px;
  }

  .breadcrumb-icon,
  .breadcrumb-arrow {
    width: 14px;
    height: 14px;
  }

  .content-layout {
    gap: 20px;
  }

  .left-content {
    padding: 20px;
  }

  .right-sidebar {
    gap: 20px;
  }

  .wiki-info-box {
    width: 100%;
  }

  .info-box-header {
    padding: 12px;
  }

  .info-box-title {
    font-size: 1.1rem;
  }

  .wiki-navigation {
    padding: 16px;
  }

  .nav-title {
    font-size: 1rem;
    margin-bottom: 12px;
  }

  .nav-card {
    padding: 12px;
  }

  .nav-card-title {
    font-size: 0.9rem;
  }
}
</style>

