<template>
  <div class="wiki-enemies-view page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">The Forge Roblox Enemies</h1>
        <p class="page-subtitle">
          Complete guide to all enemies in The Forge. Learn about enemy types, stats, and strategies to defeat them.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading enemies...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading enemies: {{ error }}</p>
      </div>

      <div v-if="!loading && !error">
        <div
          v-for="section in enemySections"
          :key="section.key"
          class="table-section"
        >
          <div class="section-header">
            <h2 class="section-title">{{ section.label }}</h2>
            <span class="section-count">{{ section.items.length }} items</span>
          </div>
          <div class="table-container">
            <table class="wiki-table">
              <thead>
                <tr>
                  <th class="preview-col">Preview</th>
                  <th class="name-col">Name</th>
                  <th class="stats-col">Stats</th>
                  <th class="drops-col">Drops</th>
                  <th class="type-col">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in section.items"
                  :key="item.id"
                  @click="onItemClick(item)"
                  class="table-row"
                >
                  <td class="preview-cell">
                    <img
                      v-if="item.imageUrl"
                      :src="item.imageUrl"
                      :alt="item.imageAlt || item.title"
                      class="preview-thumb"
                      loading="lazy"
                    />
                    <span v-else>—</span>
                  </td>
                  <td class="name-cell">
                    <div class="name-primary">{{ item.title }}</div>
                  </td>
                  <td class="stats-col">
                    <span v-if="item.stats" v-html="item.stats"></span>
                    <span v-else>—</span>
                  </td>
                  <td class="drops-col">
                    <span v-if="item.drops" v-html="item.drops"></span>
                    <span v-else>—</span>
                  </td>
                  <td class="type-cell">
                    <span class="type-pill" v-if="item.type">{{ typeLabels[item.type] || item.type }}</span>
                    <span v-else>—</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Introduction Section -->
      <section class="enemies-intro-section">
        <div class="intro-content">
          <h2 class="intro-title">About Enemies in The Forge</h2>
          <p class="intro-text">
            As you explore the caves and various locations throughout The Forge, you'll encounter numerous hostile creatures blocking your path. While these enemies pose a threat to your survival, they also present valuable opportunities for progression.
          </p>
          <p class="intro-text">
            When defeated, enemies drop valuable resources including <a href="/wiki/ores" class="inline-link">ores</a>, items, and most importantly, <strong>Essence</strong>. Essence is a crucial material used to enhance your <a href="/wiki/weapons" class="inline-link">weapons</a> and <a href="/wiki/armor" class="inline-link">armor</a> at the Enhancer stand, making enemy encounters essential for improving your equipment's stats and overall combat effectiveness.
          </p>
          <p class="intro-text">
            Different enemies are found in various locations, with stronger foes typically appearing in more advanced areas like the <a href="/wiki/locations" class="inline-link">Forgotten Kingdom</a>. Understanding enemy patterns, attack behaviors, and drop rates can help you plan your farming routes and maximize your resource gathering efficiency.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useWikiData } from '../../composables/useWikiData'

const router = useRouter()
const { data: wikiData, loading, error, loadData } = useWikiData('enemies')

const normalizeType = (value) => String(value || '').trim().toLowerCase()

const typeLabels = {
  iron_valley: 'Iron Valley',
  forgotten_kingdom: 'Forgotten Kingdom'
}

const enemySections = computed(() => {
  const data = wikiData.value || []
  return Object.entries(typeLabels)
    .map(([key, label]) => ({
      key,
      label,
      items: data.filter((item) => normalizeType(item.type) === key)
    }))
    .filter((section) => section.items.length > 0)
})

const onItemClick = (item) => {
  if (item.showDetail === false) {
    return
  }
  if (item.addressBar) {
    const slug = String(item.addressBar).replace(/^\//, '')
    router.push(`/wiki/enemies/${slug}`)
  }
}

onMounted(() => {
  loadData('enemies')
})
</script>

<style scoped>
.stats-col {
  width: 200px;
  text-align: left;
}

.drops-col {
  width: 220px;
  text-align: left;
}

/* Introduction Section */
.enemies-intro-section {
  margin: 40px 0 60px;
}

.intro-content {
  padding: 32px;
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.intro-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: var(--text);
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro-text {
  font-size: 1rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin: 0 0 16px 0;
}

.intro-text:last-child {
  margin-bottom: 0;
}

.intro-text strong {
  color: var(--accent);
  font-weight: 600;
}

/* Inline Link Styles */
.inline-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.inline-link:hover {
  color: var(--accent-soft);
  border-bottom-color: var(--accent-soft);
  text-decoration: none;
}

.inline-link:active {
  color: var(--accent-gold);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .enemies-intro-section {
    margin: 30px 0 40px;
  }

  .intro-content {
    padding: 24px;
  }

  .intro-title {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  .intro-text {
    font-size: 0.9rem;
  }
}
</style>

