<template>
  <div class="wiki-npcs-view page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">The Forge Roblox NPCs</h1>
        <p class="page-subtitle">
          Complete guide to all NPCs in The Forge. Learn about different NPCs, their roles, and what services they provide.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading NPCs...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading NPCs: {{ error }}</p>
      </div>

      <div v-if="!loading && !error">
        <div
          v-for="section in npcSections"
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
                  <th class="info-col">Info</th>
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
                  <td class="info-col">
                    <span v-if="item.info" v-html="item.info"></span>
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
      <section class="npcs-intro-section">
        <div class="intro-content">
          <h2 class="intro-title">About NPCs in The Forge</h2>
          <p class="intro-text">
            Throughout your journey in The Forge, you'll encounter various non-player characters (NPCs) scattered across different <a href="/wiki/locations" class="inline-link">locations</a>. These characters play crucial roles in your progression, offering essential services and resources that help you advance through the game.
          </p>
          <p class="intro-text">
            NPCs serve multiple purposes: some provide new items and equipment, others explain game <a href="/wiki/mechanics" class="inline-link">mechanics</a> and systems, while many simply reward you with experience points (EXP) for completing tasks or engaging in dialogue. Understanding which NPCs offer what services can significantly streamline your gameplay experience.
          </p>
          <p class="intro-text">
            Key NPCs include shopkeepers who sell <a href="/wiki/pickaxes" class="inline-link">pickaxes</a> and equipment, enhancement specialists who can upgrade your gear, and quest givers who provide valuable rewards. Make sure to interact with NPCs in each new area you discover to unlock their services and benefits.
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
const { data: wikiData, loading, error, loadData } = useWikiData('npcs')

const normalizeType = (value) => String(value || '').trim().toLowerCase()

const typeLabels = {
  npc: 'NPCs'
}

const npcSections = computed(() => {
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
    router.push(`/wiki/npcs/${slug}`)
  }
}

onMounted(() => {
  loadData('npcs')
})
</script>

<style scoped>
.info-col {
  width: 240px;
  text-align: left;
}

.source-col {
  width: 200px;
  text-align: left;
}

/* Introduction Section */
.npcs-intro-section {
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
  .npcs-intro-section {
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

