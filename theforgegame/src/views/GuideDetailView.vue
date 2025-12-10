<template>
  <div class="guide-detail-view page-container">
    <!-- Guide Detail Header -->
    <section class="guide-detail-header" v-if="guide">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/guides" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            Guides
          </router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">{{ guide.title }}</span>
        </div>

        <div class="guide-detail-content">
          <div class="guide-detail-text">
            <h1 class="guide-title">{{ guide.title }}</h1>

            <div class="guide-detail-meta">
              <div class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span class="meta-text">{{ formatDate(guide.publishDate) }}</span>
              </div>
            </div>

            <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
              <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide Content -->
    <section class="guide-content" v-if="guide">
      <div class="container">
        <div class="content-layout">
          <!-- Left Content -->
          <div class="left-content">
            <div class="detail-article" ref="contentRef" v-html="guide.detailsHtml"></div>
          </div>

          <!-- Right Sidebar -->
          <div class="right-sidebar">
            <div class="guide-info-box">
              <div class="info-box-header">
                <h3 class="info-box-title">{{ guide?.title }}</h3>
              </div>

              <!-- Guide Image -->
              <div class="guide-image" v-if="guide.imageUrl">
                <img :src="guide.imageUrl" :alt="guide.imageAlt || guide.title" class="guide-image-img">
              </div>

              <!-- Guide Meta Info -->
              <div class="guide-meta">
                <div class="meta-item">
                  <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  <span class="meta-text">{{ formatDate(guide?.publishDate) }}</span>
                </div>
              </div>

              <!-- Guide Tags -->
              <div class="guide-tags" v-if="guide?.tags && guide.tags.length > 0">
                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <!-- Other Guides -->
            <div class="guide-navigation" v-if="otherGuides && otherGuides.length > 0">
              <h4 class="nav-title">Other Guides</h4>
              <div class="nav-grid">
                <router-link
                  v-for="item in otherGuides"
                  :key="item.id"
                  :to="`/guides${item.addressBar}`"
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
    <section class="guide-content" v-else>
      <div class="container">
        <div class="not-found">
          <h2>Guide Not Found</h2>
          <p>The guide you're looking for doesn't exist or has been removed.</p>
          <router-link to="/guides" class="btn-hero btn-secondary">Back to Guides</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useGuideData } from '../composables/useGuideData'

const route = useRoute()
const idSlug = computed(() => route.params.id || '')
const { guides, loadData, findGuideByAddressBar } = useGuideData()
const guide = ref(null)
const contentRef = ref(null)

// 初始化加载数据并查找 guide
const initGuide = async () => {
  await nextTick()
  await loadData()
  guide.value = findGuideByAddressBar(`/${idSlug.value}`)
}

onMounted(async () => {
  await initGuide()
})

// 监听路由参数变化，更新当前 guide
watch(() => route.params.id, async () => {
  await nextTick()
  await loadData()
  guide.value = findGuideByAddressBar(`/${idSlug.value}`)
})

const otherGuides = computed(() => {
  if (!guide.value) return []
  return guides.value.filter(g => g.id !== guide.value.id).slice(0, 5)
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
.guide-detail-view {
  min-height: 100vh;
}

/* Guide Detail Header */
.guide-detail-header {
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

.breadcrumb-icon {
  width: 16px;
  height: 16px;
  color: var(--accent);
}

.breadcrumb-arrow {
  width: 16px;
  height: 16px;
  color: var(--text-soft);
}

.breadcrumb-link {
  color: var(--text-soft);
  text-decoration: none;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.breadcrumb-link:hover {
  color: var(--accent);
}

.breadcrumb-current {
  color: var(--text);
  font-weight: 500;
}

.guide-detail-content {
  max-width: 1200px;
  margin: 0 auto;
}

.guide-detail-text {
  max-width: 800px;
}

/* Guide Title (H1) */
.guide-title {
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

.guide-detail-meta {
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

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(255, 140, 66, 0.1);
  color: var(--accent-soft);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 140, 66, 0.3);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(255, 140, 66, 0.2);
  transform: translateY(-1px);
}

/* Guide Content */
.guide-content {
  padding: 0 0 80px;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
}

/* Left Content */
.left-content {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 140, 66, 0.2);
}

/* Right Sidebar */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.guide-info-box {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  overflow: hidden;
}

.info-box-header {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  padding: 16px;
}

.info-box-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a0a00;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.guide-image {
  padding: 16px;
  text-align: center;
}

.guide-image-img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(255, 140, 66, 0.2);
}

.guide-meta {
  padding: 16px;
  border-top: 1px solid rgba(255, 140, 66, 0.1);
}

.guide-navigation {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  padding: 20px;
}

.nav-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 16px 0;
}

.nav-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-card {
  padding: 12px;
  background: rgba(255, 140, 66, 0.05);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.nav-card:hover {
  background: rgba(255, 140, 66, 0.1);
  border-color: rgba(255, 140, 66, 0.4);
  transform: translateX(4px);
}

.nav-card-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 6px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.nav-card-meta {
  font-size: 0.75rem;
  color: var(--text-soft);
}

.not-found {
  text-align: center;
  padding: 60px 20px;
}

.not-found h2 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 16px;
}

.not-found p {
  color: var(--text-soft);
  margin-bottom: 24px;
}

.btn-hero {
  display: inline-block;
  padding: 12px 24px;
  background: var(--accent);
  color: #1a0a00;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-hero:hover {
  background: var(--accent-soft);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 140, 66, 0.2);
  color: var(--accent);
  border: 1px solid rgba(255, 140, 66, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 140, 66, 0.3);
}

/* 移动端响应式 */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .right-sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .guide-detail-header {
    padding: 60px 0 30px;
  }

  .guide-title {
    font-size: 2rem;
  }

  .left-content {
    padding: 20px;
  }

  .guide-info-box,
  .guide-navigation {
    padding: 16px;
  }
}
</style>

