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
</style>

