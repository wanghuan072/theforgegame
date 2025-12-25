<template>
  <div class="wiki-armor-view page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">The Forge Roblox Armor</h1>
        <p class="page-subtitle">
          Complete guide to all armor in The Forge. Learn about armor types, stats, and crafting requirements.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading armor...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading armor: {{ error }}</p>
      </div>

      <div v-if="!loading && !error">
        <div
          v-for="section in armorSections"
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
                  <th class="chance-col">Chance to Craft</th>
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
                  <td class="chance-col">
                    <span class="type-pill" v-if="item.chanceToCraft">{{ item.chanceToCraft }}</span>
                    <span v-else>—</span>
                  </td>
                  <td class="type-col">
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
      <section class="armor-intro-section">
        <div class="intro-content">
          <h2 class="intro-title">Understanding Armor in The Forge</h2>
          <p class="intro-text">
            Equipping the right armor is essential for surviving combat encounters in The Forge. The game features three distinct armor categories—Light, Medium, and Heavy—each providing different defensive capabilities and unique stat bonuses to complement various playstyles.
          </p>

          <h3 class="intro-subtitle">Crafting Your Armor</h3>
          <p class="intro-text">
            Creating armor follows a similar process to weapon forging. Start by mining <a href="/wiki/ores" class="inline-link">ores</a> from various locations throughout the game world. Once you've gathered the materials you need, head to the forge station.
          </p>
          <p class="intro-text">
            At the forge interface, navigate to the Armor tab (found at the bottom of the crafting menu). Place your collected ores into the forge slots, then complete three sequential minigames to successfully craft your armor piece. For detailed forging mechanics and tips, visit our <a href="/wiki/mechanics" class="inline-link">mechanics guide</a>.
          </p>
          <p class="intro-text">
            The visual appearance of your crafted armor directly reflects the ores used in its creation—different ore types and colors will produce unique armor designs. If you need help planning your armor builds and calculating crafting chances, use our <a href="/calculator" class="inline-link">build calculator</a>.
          </p>

          <h3 class="intro-subtitle">Upgrading Your Armor</h3>
          <p class="intro-text">
            After crafting your armor, you can further improve it at the Enhancer stand located in the village. This enhancement process requires Essence, which can be obtained from defeated enemies or found while mining. Enhancing your armor increases its base stats and overall value, making it more effective in combat and more valuable when sold.
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
const { data: wikiData, loading, error, loadData } = useWikiData('armor')

const normalizeType = (value) => String(value || '').trim().toLowerCase()

const typeLabels = {
  light: 'Light Armor',
  medium: 'Medium Armor',
  heavy: 'Heavy Armor'
}

const armorSections = computed(() => {
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
    router.push(`/wiki/armor/${slug}`)
  }
}

onMounted(() => {
  loadData('armor')
})
</script>

<style scoped>
.chance-col {
  width: 140px;
  text-align: center;
}

.stats-col {
  width: 180px;
  text-align: left;
}

/* Introduction Section */
.armor-intro-section {
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
  .armor-intro-section {
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
}
</style>

