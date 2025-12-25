<template>
  <div class="wiki-ores-view page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">The Forge Roblox Ores</h1>
        <p class="page-subtitle">
          Complete guide to all ores in The Forge. Learn about ore types, properties, and where to find them.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading ores...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading ores: {{ error }}</p>
      </div>

      <div v-if="!loading && !error">
        <div
          v-for="section in oreSections"
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
                  <th class="desc-col">Description</th>
                  <th class="stats-col">Stats</th>
                  <th class="source-col">Source</th>
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
                  <td class="desc-col">
                    <span>{{ item.description && item.description.trim() ? item.description : '-' }}</span>
                  </td>
                  <td class="stats-col">
                    <span v-if="item.stats" v-html="item.stats"></span>
                    <span v-else>—</span>
                  </td>
                  <td class="source-col">
                    <span v-if="item.rocks" v-html="item.rocks"></span>
                    <span v-else-if="item.droppedBy" v-html="item.droppedBy"></span>
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
      <section class="ores-intro-section">
        <div class="intro-content">
          <h2 class="intro-title">About Ores in The Forge</h2>
          <p class="intro-text">
            Ores are valuable resources that players collect using <a href="/wiki/pickaxes" class="inline-link">pickaxes</a> throughout The Forge. These materials serve as the foundation for crafting both <a href="/wiki/weapons" class="inline-link">weapons</a> and <a href="/wiki/armor" class="inline-link">armor</a>, making them essential for progression in the game.
          </p>

          <h3 class="intro-subtitle">Understanding Ore Properties</h3>
          <p class="intro-text">
            Each ore in The Forge has several key attributes that determine its value and effectiveness:
          </p>
          <ul class="intro-list">
            <li><strong>Chance:</strong> A numerical value representing the ore's rarity level. Higher chance values indicate rarer ores that are more difficult to obtain.</li>
            <li><strong>Rarity:</strong> Indicates how uncommon an ore is in the game world. Rarer ores typically provide better bonuses when used in crafting.</li>
            <li><strong>Multiplier:</strong> Determines how much an ore enhances the base stats of forged weapons or armor. Higher multipliers result in more powerful crafted items.</li>
            <li><strong>Price:</strong> The sell value of the ore. Unwanted ores can be sold to the Greedy Cey NPC, located in front of the Cave Entrance, for gold.</li>
          </ul>

          <h3 class="intro-subtitle">Collecting Ores</h3>
          <p class="intro-text">
            To gather ores, players must use their pickaxes to mine rocks found in specific areas across the game world. The type and quality of ores you collect depends on several factors:
          </p>
          <ul class="intro-list">
            <li>The rarity distribution of ores in that location</li>
            <li>Your character's Luck stat</li>
            <li>The stats and quality of your equipped pickaxe</li>
          </ul>
          <p class="intro-text">
            Higher-quality pickaxes can break rocks faster and have better luck bonuses, making it easier to gather rare ores. Additionally, enhancing your pickaxe and equipping <a href="/wiki/runes" class="inline-link">runes</a> can significantly increase your luck stat or ore yield, improving your chances of finding valuable materials.
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
const { data: wikiData, loading, error, loadData } = useWikiData('ores')

const normalizeType = (value) => String(value || '').trim().toLowerCase()

const typeLabels = {
  stonewake: "Stonewake's Cross",
  forgotten_kingdom: 'Forgotten Kingdom',
  goblin_cave: 'Goblin Cave',
  enemy_drop: 'Dropped by Enemies'
}

const oreSections = computed(() => {
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
    router.push(`/wiki/ores/${slug}`)
  }
}

onMounted(() => {
  loadData('ores')
})
</script>

<style scoped>
.stats-col {
  width: 180px;
  text-align: left;
}

.source-col {
  width: 200px;
  text-align: left;
}

.desc-col {
  width: 220px;
  text-align: left;
}

/* Introduction Section */
.ores-intro-section {
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
  .ores-intro-section {
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

