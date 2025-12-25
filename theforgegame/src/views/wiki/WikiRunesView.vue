<template>
  <div class="wiki-runes-view page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">The Forge Roblox Runes</h1>
        <p class="page-subtitle">
          Complete guide to all runes in The Forge. Learn about different rune types, their effects, and how to use them.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Loading runes...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-state">
        <p>Error loading runes: {{ error }}</p>
      </div>

      <div v-if="!loading && !error">
        <div
          v-for="section in runeSections"
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
                  <th class="effects-col">Effects</th>
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
                  <td class="effects-cell">
                    <span v-if="item.effects" v-html="item.effects"></span>
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
      <section class="runes-intro-section">
        <div class="intro-content">
          <h2 class="intro-title">About Runes in The Forge</h2>
          <p class="intro-text">
            Runes are special items in The Forge that can be placed into equipment sockets called Rune Slots. These powerful enhancements can significantly improve your <a href="/wiki/weapons" class="inline-link">weapons</a>, <a href="/wiki/armor" class="inline-link">armor</a>, and <a href="/wiki/pickaxes" class="inline-link">pickaxes</a>, providing both functional benefits and visual customization.
          </p>
          <p class="intro-text">
            Most equipment requires enhancement to +3 to unlock the first Rune Slot. However, some pickaxes come with Rune Slots already unlocked, making them immediately ready for rune attachment.
          </p>

          <h3 class="intro-subtitle">Rune Effects</h3>
          <p class="intro-text">
            Slotting runes into your equipment provides various benefits:
          </p>
          <ul class="intro-list">
            <li><strong>Increased Stats or Extra Traits:</strong> Many runes boost your equipment's stats, such as increasing ore yield or luck when mining, enhancing weapon damage, or improving armor defenses. These stat bonuses can make a significant difference in combat effectiveness and resource gathering.</li>
            <li><strong>Visual Effects:</strong> Some runes alter your equipment's appearance when applied. For example, attaching a Flame Spark Rune to a weapon will give it a fiery visual effect, allowing you to customize your gear's aesthetics while gaining functional benefits.</li>
          </ul>
          <p class="intro-text">
            Unwanted runes can be sold to the <a href="/wiki/npcs" class="inline-link">Greedy Cey NPC</a> for gold, so even runes you don't need can contribute to your economy.
          </p>

          <h3 class="intro-subtitle">Acquiring Runes</h3>
          <p class="intro-text">
            Runes are primarily obtained by defeating <a href="/wiki/enemies" class="inline-link">enemies</a> throughout the game. To see which enemies drop specific runes and their drop chances, open your Index menu and navigate to the Enemies tab. This will show you detailed information about each enemy's loot table, including rune drop rates.
          </p>
          <p class="intro-text">
            If you haven't unlocked all enemies in your Index yet, you can check our <a href="/wiki/enemies" class="inline-link">enemies page</a> to see which enemies drop which runes and plan your farming routes accordingly.
          </p>

          <h3 class="intro-subtitle">Attaching Runes</h3>
          <p class="intro-text">
            To attach runes to your equipment, you'll need to visit the <strong>Runemaker NPC</strong>, who can be found at his shop in <a href="/wiki/locations" class="inline-link">Stonewake's Cross</a> or the <a href="/wiki/locations" class="inline-link">Forgotten Kingdom</a>. The Runemaker charges a fee for his services, so make sure you have enough gold before visiting.
          </p>
          <p class="intro-text">
            The attachment process is straightforward:
          </p>
          <ol class="intro-list ordered">
            <li>Interact with the Runemaker NPC to open the "Equipment Selection" screen</li>
            <li>Select the piece of equipment you want to enhance (it must be enhanced to +3 to unlock the first Rune Slot)</li>
            <li>Choose which rune you'd like to attach from your inventory</li>
            <li>Click the "Attach" button to bind the rune to your equipment</li>
          </ol>
          <p class="intro-text">
            Once attached, the rune's effects will be active, and you'll see any visual changes immediately. You can attach multiple runes to equipment that has multiple Rune Slots unlocked through further enhancement.
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
const { data: wikiData, loading, error, loadData } = useWikiData('runes')

const normalizeType = (value) => String(value || '').trim().toLowerCase()

const typeLabels = {
  rune: 'Runes',
  trait: 'Traits'
}

const runeSections = computed(() => {
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
    router.push(`/wiki/runes/${slug}`)
  }
}

onMounted(() => {
  loadData('runes')
})
</script>

<style scoped>
.effects-col {
  width: 500px;
}

/* Introduction Section */
.runes-intro-section {
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
  .runes-intro-section {
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

