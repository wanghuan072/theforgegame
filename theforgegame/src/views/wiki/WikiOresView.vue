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
</style>

