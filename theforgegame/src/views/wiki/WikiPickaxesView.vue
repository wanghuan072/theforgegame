<template>
  <div class="wiki-pickaxes-view page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">The Forge Roblox Pickaxes</h1>
        <p class="page-subtitle">
          Complete guide to all pickaxes in The Forge. Learn about pickaxe types, mining efficiency, and crafting requirements.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading pickaxes...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading pickaxes: {{ error }}</p>
      </div>

      <div v-if="!loading && !error">
        <div
          v-for="section in pickaxeSections"
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
                  <th class="stats-col">Price & Stats</th>
                  <th class="source-col">Location</th>
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
                    <span v-if="item.priceAndStats" v-html="item.priceAndStats"></span>
                    <span v-else>—</span>
                  </td>
                  <td class="source-col">
                    <span v-if="item.location" v-html="item.location"></span>
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
      <section class="pickaxes-intro-section">
        <div class="intro-content">
          <h2 class="intro-title">About Pickaxes in The Forge</h2>
          <p class="intro-text">
            Pickaxes are essential tools in The Forge, serving as the primary equipment for mining and gathering <a href="/wiki/ores" class="inline-link">ores</a> needed to forge <a href="/wiki/weapons" class="inline-link">weapons</a> and <a href="/wiki/armor" class="inline-link">armor</a>. Without a proper pickaxe, players cannot progress through the game's crafting system.
          </p>
          <p class="intro-text">
            Players can obtain pickaxes by visiting Miner Fred's Pickaxe Shop or by finding and purchasing them at specific locations throughout the game world. Each pickaxe offers different capabilities and is suited for different stages of progression.
          </p>

          <h3 class="intro-subtitle">Understanding Pickaxe Stats</h3>
          <p class="intro-text">
            To mine certain rocks effectively, players need pickaxes with sufficient power. Two key stats determine a pickaxe's effectiveness:
          </p>
          <ul class="intro-list">
            <li><strong>Mining Power:</strong> Represents the damage a pickaxe deals to rocks. Higher mining power allows you to break tougher rocks that lower-tier pickaxes cannot handle. This stat is crucial for accessing advanced mining locations and gathering rare materials.</li>
            <li><strong>Luck Boost:</strong> The additional luck stat added to your base luck. Pickaxes with higher luck bonuses increase your chances of finding higher rarity ores while mining. This makes them valuable for players focused on gathering premium crafting materials.</li>
          </ul>

          <h3 class="intro-subtitle">Choosing the Right Pickaxe</h3>
          <p class="intro-text">
            The pickaxe you choose should match your current progression stage and mining goals. Early-game pickaxes are affordable but limited in power, while end-game options offer exceptional stats at premium prices. Consider your budget, current location, and the types of ores you need when selecting a pickaxe. For detailed comparisons and recommendations, check out our <a href="/pickaxes-tier-list" class="inline-link">pickaxe tier list</a>.
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
const { data: wikiData, loading, error, loadData } = useWikiData('pickaxes')

const normalizeType = (value) => String(value || '').trim().toLowerCase()

const typeLabels = {
  stonewake: "Stonewake's Cross",
  forgotten_kingdom: 'Forgotten Kingdom'
}

const pickaxeSections = computed(() => {
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
    router.push(`/wiki/pickaxes/${slug}`)
  }
}

onMounted(() => {
  loadData('pickaxes')
})
</script>

<style scoped>
.stats-col {
  width: 200px;
  text-align: left;
}

.source-col {
  width: 220px;
  text-align: left;
}

/* Introduction Section */
.pickaxes-intro-section {
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

.intro-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin: 32px 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 140, 66, 0.2);
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

.intro-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.intro-list li {
  font-size: 1rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 12px;
  padding-left: 24px;
  position: relative;
}

.intro-list li::before {
  content: '•';
  color: var(--accent);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.intro-list li:last-child {
  margin-bottom: 0;
}

.intro-list strong {
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
  .pickaxes-intro-section {
    margin: 30px 0 40px;
  }

  .intro-content {
    padding: 24px;
  }

  .intro-title {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  .intro-subtitle {
    font-size: 1.25rem;
    margin: 24px 0 12px 0;
    padding-bottom: 10px;
  }

  .intro-text {
    font-size: 0.9rem;
  }

  .intro-list li {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
}
</style>

