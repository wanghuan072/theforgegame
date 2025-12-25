<template>
  <div class="wiki-races-view page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">The Forge Roblox Races</h1>
        <p class="page-subtitle">
          Complete guide to all races in The Forge. Learn about different race types, their abilities, and bonuses.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading races...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading races: {{ error }}</p>
      </div>

      <div v-if="!loading && !error">
        <div
          v-for="section in raceSections"
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
                  <th class="benefits-col">Benefits</th>
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
                  <td class="stats-cell">
                    <span v-if="item.stats" v-html="item.stats"></span>
                    <span v-else>—</span>
                  </td>
                  <td class="benefits-cell">
                    <span v-if="item.benefits" v-html="item.benefits"></span>
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
      <section class="races-intro-section">
        <div class="intro-content">
          <h2 class="intro-title">About Races in The Forge</h2>
          <p class="intro-text">
            Races in The Forge provide players with unique benefits and distinctive visual appearances. Each race offers different stat bonuses, abilities, and aesthetic styles that can significantly impact your gameplay experience and character customization.
          </p>
          <p class="intro-text">
            Currently, there are <strong>13 available races</strong> in the game, distributed across <strong>6 rarity tiers</strong>: Common, Uncommon, Rare, Epic, Legendary, and Mythical. Higher rarity races typically provide more significant stat bonuses and enhanced visual effects, but they are correspondingly more difficult to obtain due to their lower roll chances.
          </p>

          <h3 class="intro-subtitle">Race Rarity Tiers</h3>
          <p class="intro-text">
            Races are categorized into the following rarity levels:
          </p>
          <ul class="intro-list">
            <li><strong>Common</strong> - Most frequently obtained, basic benefits</li>
            <li><strong>Uncommon</strong> - Slightly better than common races</li>
            <li><strong>Rare</strong> - Moderate improvements over uncommon races</li>
            <li><strong>Epic</strong> - Significant stat bonuses and visual enhancements</li>
            <li><strong>Legendary</strong> - Powerful bonuses, highly sought after</li>
            <li><strong>Mythical</strong> - The rarest tier with the most powerful benefits</li>
          </ul>

          <h3 class="intro-subtitle">How to Change Your Race</h3>
          <p class="intro-text">
            You can reroll your race through the in-game Race Menu. To access it:
          </p>
          <ol class="intro-list ordered">
            <li>Press the <strong>[T]</strong> button to open the Menu</li>
            <li>Navigate to the <strong>"Shop"</strong> section</li>
            <li>Scroll right until you see the <strong>"Rerolls"</strong> tab</li>
            <li>Press the <strong>"Race Menu"</strong> button located at the bottom</li>
          </ol>
          <p class="intro-text">
            You can also obtain free rerolls by redeeming active <a href="/codes" class="inline-link">codes</a>. For detailed rankings and recommendations, check out our <a href="/races-tier-list" class="inline-link">race tier list</a> to see which races offer the best overall value.
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
const { data: wikiData, loading, error, loadData } = useWikiData('races')

const normalizeType = (value) => String(value || '').trim().toLowerCase()

const typeLabels = {
  race: 'Races'
}

const raceSections = computed(() => {
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
    router.push(`/wiki/races/${slug}`)
  }
}

onMounted(() => {
  loadData('races')
})
</script>

<style scoped>
.stats-col {
  width: 180px;
}

.benefits-col {
  width: 400px;
}

/* Introduction Section */
.races-intro-section {
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

.intro-text strong {
  color: var(--accent);
  font-weight: 600;
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

.intro-list.ordered {
  list-style: decimal;
  padding-left: 24px;
}

.intro-list.ordered li {
  padding-left: 8px;
}

.intro-list.ordered li::before {
  display: none;
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
  .races-intro-section {
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

  .intro-list.ordered {
    padding-left: 20px;
  }
}
</style>

