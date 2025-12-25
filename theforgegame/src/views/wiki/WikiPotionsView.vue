<template>
  <div class="wiki-potions-view page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">The Forge Roblox Potions</h1>
        <p class="page-subtitle">
          Complete guide to all potions in The Forge. Learn about different potion types, effects, and how to craft them.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading potions...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading potions: {{ error }}</p>
      </div>

      <div v-if="!loading && !error">
        <div
          v-for="section in potionSections"
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
                  <th class="effect-col">Effect</th>
                  <th class="price-col">Price</th>
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
                  <td class="effect-cell">
                    <span v-if="item.effect" v-html="item.effect"></span>
                    <span v-else>—</span>
                  </td>
                  <td class="price-cell">
                    <span v-if="item.price">{{ item.price }}</span>
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
      <section class="potions-intro-section">
        <div class="intro-content">
          <h2 class="intro-title">About Potions in The Forge</h2>
          <p class="intro-text">
            Potions are special consumable items with magical properties, typically stored in glass vials. When consumed, these potions grant temporary effects that can provide significant advantages during combat, exploration, or resource gathering.
          </p>
          <p class="intro-text">
            Each potion offers unique benefits for a limited duration, making them valuable tools for challenging encounters or difficult situations. Strategic use of potions can turn the tide of battle or help you overcome obstacles that would otherwise be insurmountable.
          </p>
          <p class="intro-text">
            Potions can be purchased from <strong>Maria's Potion Shop</strong>, which has locations in both <a href="/wiki/locations" class="inline-link">Stonewake's Cross</a> and the <a href="/wiki/locations" class="inline-link">Forgotten Kingdom</a>. Make sure to stock up on useful potions before venturing into dangerous areas or facing powerful <a href="/wiki/enemies" class="inline-link">enemies</a>.
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
const { data: wikiData, loading, error, loadData } = useWikiData('potions')

const normalizeType = (value) => String(value || '').trim().toLowerCase()

const typeLabels = {
  potion: 'Potions'
}

const potionSections = computed(() => {
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
    router.push(`/wiki/potions/${slug}`)
  }
}

onMounted(() => {
  loadData('potions')
})
</script>

<style scoped>
.effect-col {
  width: 400px;
  text-align: left;
}

.price-col {
  width: 150px;
  text-align: left;
}

/* Introduction Section */
.potions-intro-section {
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
  .potions-intro-section {
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




