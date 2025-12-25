<template>
  <div class="wiki-weapons-view page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">The Forge Roblox Weapons</h1>
        <p class="page-subtitle">
          Complete guide to all weapons in The Forge. Learn about weapon types, stats, crafting requirements, and best weapon builds.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading weapons...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading weapons: {{ error }}</p>
      </div>

      <!-- Weapon Tables by Type -->
      <div v-if="!loading && !error">
        <div
          v-for="section in weaponSections"
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
                <th class="chance-col">Chance to Craft</th>
                <th class="stats-col">Stats</th>
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
                  <td class="type-cell">
                    <span class="type-pill" v-if="item.chanceToCraft">{{ item.chanceToCraft }}</span>
                    <span v-else>—</span>
                  </td>
                  <td class="stats-col">
                    <span v-if="item.stats" v-html="item.stats"></span>
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
      <section class="weapons-intro-section">
        <div class="intro-content">
          <h2 class="intro-title">Understanding Weapons in The Forge</h2>
          <p class="intro-text">
            Weapons are among the most crucial elements in The Forge. They serve multiple purposes: engaging in combat within caves, completing quests, and generating income through sales. Choosing the right weapon and optimizing its stats can significantly impact your gameplay experience.
          </p>

          <h3 class="intro-subtitle">Crafting Your Weapons</h3>
          <p class="intro-text">
            Weapon forging stands as one of the core mechanics in The Forge. To create a weapon, you'll first need to venture into the caves and mine <a href="/wiki/ores" class="inline-link">ores</a> and other minerals. Once you've collected the necessary materials, head to the forge station and place your ores into the crafting interface.
          </p>
          <p class="intro-text">
            The actual forging process requires you to complete three sequential minigames. Successfully completing these challenges will result in your newly crafted weapon. For comprehensive details on forging mechanics, strategies, and tips, refer to our <a href="/wiki/mechanics" class="inline-link">forging mechanics guide</a>.
          </p>
          <p class="intro-text">
            The visual design of your weapon is directly influenced by the types and colors of ores used during crafting. Different ore combinations will produce unique weapon appearances, allowing for personalization of your arsenal. If you need assistance planning your weapon builds and calculating crafting probabilities, utilize our <a href="/calculator" class="inline-link">build calculator</a>.
          </p>

          <h3 class="intro-subtitle">Enhancing Your Weapons</h3>
          <p class="intro-text">
            After crafting a weapon, you can further improve it at the Enhancer stand located in the village. The enhancement process grants your weapon special bonuses, including increased base stats and higher sell value. To enhance a weapon, you'll need Essence, which can be obtained by defeating enemies or discovered while mining throughout the game world.
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
const { data: wikiData, loading, error, loadData } = useWikiData('weapons')

const normalizeType = (value) => String(value || '').trim().toLowerCase()

const typeLabels = {
  dagger: 'Daggers',
  great_sword: 'Great Swords',
  great_axe: 'Great Axes',
  katana: 'Katanas',
  straight_sword: 'Straight Swords',
  gauntlet: 'Gauntlets',
  colossal_sword: 'Colossal Swords'
}

const weaponSections = computed(() => {
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
    router.push(`/wiki/weapons/${slug}`)
  }
}

onMounted(() => {
  loadData('weapons')
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
.weapons-intro-section {
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
  .weapons-intro-section {
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

