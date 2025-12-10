<template>
  <div class="calculator-view page-container">
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">The Forge Roblox Build Calculator & Optimizer</h1>
          <p class="page-subtitle">
            Test your build before you craft. <strong>The Forge Roblox Calculator</strong> helps you simulate weapon stats, calculate costs, and maximize your DPS. Use this tool to plan your <router-link to="/wiki/weapons" class="inline-link">weapon</router-link> and <router-link to="/wiki/armor" class="inline-link">armor</router-link> builds before forging.
          </p>
        </div>
      </div>
    </section>

    <section class="calculator-section">
      <div class="container">
        <!-- Mode Selection -->
        <div class="mode-selector">
          <button
            @click="currentMode = 'weapon'"
            :class="['mode-button', { active: currentMode === 'weapon' }]"
          >
            <span class="mode-icon">⚔️</span>
            <span>Weapon</span>
          </button>
          <button
            @click="currentMode = 'armor'"
            :class="['mode-button', { active: currentMode === 'armor' }]"
          >
            <span class="mode-icon">🛡️</span>
            <span>Armor</span>
          </button>
        </div>

        <!-- Main Calculator Section -->
        <div class="main-calculator-section">
          <h2 class="main-section-title">Calculator</h2>
          <p v-if="selectedOres.length > 0" class="section-count">{{ totalOreCount }} ores</p>
        </div>

        <div class="calculator-layout">
          <!-- Left: Ore Selection -->
          <div class="ore-selection-panel">
            <div class="panel-header">
              <h3 class="panel-title">Select Ores</h3>
              <span class="ore-count-badge">{{ selectedOres.length }}/4</span>
            </div>
            
            <div class="ore-search">
              <input
                type="text"
                v-model="oreSearch"
                placeholder="Search..."
                class="search-input"
              />
            </div>

            <div class="ore-list">
              <button
                v-for="ore in filteredOres"
                :key="ore.id"
                @click="addOre(ore)"
                :class="['ore-button', {
                  'selected': isOreSelected(ore.id),
                  'disabled': !isOreSelected(ore.id) && selectedOres.length >= 4
                }]"
                :disabled="!isOreSelected(ore.id) && selectedOres.length >= 4"
              >
                <div class="ore-info">
                  <span class="ore-name">{{ ore.name }}</span>
                  <span class="ore-multiplier">{{ ore.multiplier }}x</span>
                </div>
                <span class="ore-rarity" :class="ore.rarity.toLowerCase()">{{ ore.rarity }}</span>
              </button>
            </div>
          </div>

          <!-- Right: Results Panel -->
          <div class="results-panel">
            <!-- Selected Ores & Stats -->
            <div class="result-card compact">
              <div class="card-header">
                <h3 class="result-title">Selected Ores</h3>
                <div class="quick-stats" v-if="selectedOres.length > 0">
                  <span class="stat-badge">Total: {{ totalOreCount }}</span>
                  <span class="stat-badge highlight">Multiplier: {{ alloyMultiplier.toFixed(2) }}x</span>
                </div>
              </div>
              <div v-if="selectedOres.length === 0" class="empty-state">
                <p>Add ores to begin</p>
              </div>
              <div v-else class="selected-ores-list">
                <div
                  v-for="(item, index) in selectedOres"
                  :key="item.ore.id"
                  class="selected-ore-item"
                >
                  <div class="selected-ore-info">
                    <span class="selected-ore-name">{{ item.ore.name }}</span>
                    <span class="selected-ore-multiplier">{{ item.ore.multiplier }}x</span>
                  </div>
                  <div class="quantity-controls">
                    <button @click="decreaseQuantity(index)" class="qty-btn" :disabled="item.quantity <= 1">-</button>
                    <input
                      type="number"
                      v-model.number="item.quantity"
                      min="1"
                      max="999"
                      class="qty-input"
                    />
                    <button @click="increaseQuantity(index)" class="qty-btn">+</button>
                  </div>
                  <button @click="removeOre(index)" class="remove-btn" title="Remove">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div class="multiplier-warning" v-if="hasDilution">
                  ⚠️ Low-tier ores diluting multiplier
                </div>
              </div>
            </div>

            <!-- Trait Activation -->
            <div v-if="selectedOres.length > 0" class="result-card compact">
              <h3 class="result-title">Traits</h3>
              <div v-if="traitResults.length > 0" class="traits-section">
                <div
                  v-for="trait in traitResults"
                  :key="trait.name"
                  class="trait-item"
                >
                  <div class="trait-header">
                    <span class="trait-name">{{ trait.name }}</span>
                    <span class="trait-status" :class="trait.status">{{ trait.statusText }}</span>
                  </div>
                  <div class="trait-progress">
                    <div class="trait-bar-container">
                      <div 
                        class="trait-bar" 
                        :style="{ width: trait.percentage + '%' }"
                        :class="trait.status"
                      ></div>
                    </div>
                    <div class="trait-details">
                      <span>{{ trait.percentage.toFixed(1) }}%</span>
                      <span>{{ trait.effectPercentage.toFixed(0) }}% effect</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="traits-empty">
                <p>No traits</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Weapon/Armor Type Probabilities -->
        <div v-if="selectedOres.length > 0" class="probabilities-section">
          <div class="section-header">
            <h2 class="section-title">Type Probabilities</h2>
            <p class="section-count">{{ totalOreCount }} ores</p>
          </div>
          
          <div class="probabilities-grid">
            <div
              v-for="prob in typeProbabilities"
              :key="prob.id"
              class="probability-card"
              :class="{ 'highest': prob.isHighest }"
            >
              <div class="prob-header">
                <span class="prob-name">{{ prob.name }}</span>
                <span class="prob-percentage">{{ prob.probability }}%</span>
              </div>
              <div class="prob-bar-container">
                <div 
                  class="prob-bar" 
                  :style="{ width: prob.probability + '%' }"
                ></div>
              </div>
              <div class="prob-stats">
                <div class="stat-item">
                  <span class="stat-label">Base:</span>
                  <span class="stat-value">{{ prob.baseStat }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Range:</span>
                  <span class="stat-value highlight">{{ prob.minDamage.toFixed(0) }}-{{ prob.maxDamage.toFixed(0) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="info-section">
          <h2 class="info-title">About The Forge Roblox Calculator</h2>
          <div class="info-content">
            <p>
              <strong>The Forge Roblox Calculator</strong> is an essential tool designed to help players optimize their forging strategies in The Forge game. 
              Instead of manually calculating which <router-link to="/wiki/ores" class="inline-link">ore</router-link> combinations will grant you the best modifiers, or determining how many ores 
              are needed to obtain the highest percentages of their corresponding traits, simply use <strong>The Forge Roblox Calculator</strong> to process your 
              inputs and present the results in real time. Check out our <router-link to="/wiki" class="inline-link">wiki</router-link> for detailed information about all game items and mechanics.
            </p>
            <div class="info-features">
              <div class="feature-item">
                <span class="feature-icon">📊</span>
                <div class="feature-content">
                  <h3>Alloy Multiplier Calculation</h3>
                  <p><strong>The Forge Roblox Calculator</strong> calculates the average multiplier of your ore combination. The game uses weighted averages, not simple addition, so mixing low-tier ores with high-tier ones will dilute your multiplier. Learn more about <router-link to="/wiki/ores" class="inline-link">ore properties</router-link> in our wiki.</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎯</span>
                <div class="feature-content">
                  <h3>Equipment Type Probabilities</h3>
                  <p>Based on your total ore count, see the probability of forging each weapon or armor type. More ores generally mean heavier/larger equipment types.</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">⚡</span>
                <div class="feature-content">
                  <h3>Trait Activation System</h3>
                  <p>Understand trait activation thresholds: 10% minimum to activate, 30% for maximum effect. Effects scale linearly between these thresholds.</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📈</span>
                <div class="feature-content">
                  <h3>Final Stat Range</h3>
                  <p>See the potential damage/defense range based on your alloy multiplier and quality bonus (0.8x for poor quality to 1.3x for masterwork).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="faq-section">
          <h2 class="faq-title">Frequently Asked Questions</h2>
          <div class="faq-list">
            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>How does the alloy multiplier work?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  <strong>The Forge Roblox Calculator</strong> calculates the alloy multiplier as the weighted average of all ores: <strong>(Sum of ore multiplier × quantity) / Total ore count</strong>. 
                  This means mixing low-tier ores (like Stone at 0.2x) with high-tier ores (like Demonite at 5.5x) will significantly reduce your final multiplier. 
                  For example, 1 Demonite + 9 Stone = (5.5 + 1.8) / 10 = 0.73x, which is much worse than using pure Demonite. Browse our <router-link to="/wiki/ores" class="inline-link">ore database</router-link> to find the best combinations.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>How are equipment type probabilities determined?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  <strong>The Forge Roblox Calculator</strong> determines equipment type primarily by your <strong>total ore count</strong>. Fewer ores (3-5) favor lighter equipment like Daggers, 
                  while more ores (20+) favor heavier equipment like Colossal Swords or Heavy Armor. The calculator uses probability distributions 
                  based on these thresholds to show you the likelihood of each type. Check our <router-link to="/wiki/weapons" class="inline-link">weapons wiki</router-link> for detailed stats on each weapon type.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>How do traits activate?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  Traits have two key thresholds:
                </p>
                <ul>
                  <li><strong>&lt; 10%</strong>: Trait is inactive (0% effect)</li>
                  <li><strong>10% - 30%</strong>: Trait effect scales linearly from 0% to 100%</li>
                  <li><strong>≥ 30%</strong>: Trait is maxed (100% effect)</li>
                </ul>
                <p>
                  For example, if you have 10 total ores and 2 Fireite (20%), the trait effect will be 50% of maximum. 
                  To get 100% effect, you need at least 3 Fireite (30%).
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>What does the final stat range mean?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  The final stat range shows the potential damage (weapons) or defense (armor) based on:
                </p>
                <ul>
                  <li><strong>Base Stat</strong>: The base value for that equipment type</li>
                  <li><strong>Alloy Multiplier</strong>: Your calculated average multiplier</li>
                  <li><strong>Quality Bonus</strong>: 0.8x (poor) to 1.3x (masterwork) based on your forging minigame performance</li>
                </ul>
                <p>
                  The range represents the minimum (poor quality) to maximum (masterwork) possible values.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>Can I use more than 4 ore types?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  No, The Forge game limits forging to a maximum of <strong>4 different ore types</strong> per craft. 
                  However, you can use any quantity of each ore type. <strong>The Forge Roblox Calculator</strong> enforces this limit to match the in-game mechanics. For more tips and strategies, visit our <router-link to="/guides" class="inline-link">guides section</router-link> or check out <router-link to="/codes" class="inline-link">active codes</router-link> for free rewards.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>Why is my multiplier lower than expected?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  This is likely due to <strong>dilution</strong>. If you're mixing high-tier ores with low-tier ores, the average multiplier 
                  will be pulled down. The calculator will show a warning when this happens. To maximize your multiplier, use only high-tier ores, 
                  or at least ensure low-tier ores don't dominate the mix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const currentMode = ref('weapon')
const oreSearch = ref('')
const selectedOres = ref([]) // [{ ore: {...}, quantity: 1 }, ...]

// 武器类型（基于基础伤害）
const weaponTypes = [
  { id: 'dagger', name: 'Dagger', baseDamage: 10 },
  { id: 'sword', name: 'Sword', baseDamage: 25 },
  { id: 'greatsword', name: 'Greatsword', baseDamage: 40 },
  { id: 'colossal-sword', name: 'Colossal Sword', baseDamage: 60 }
]

// 盔甲类型（基于基础防御）
const armorTypes = [
  { id: 'light', name: 'Light Armor', baseDefense: 15 },
  { id: 'medium', name: 'Medium Armor', baseDefense: 30 },
  { id: 'heavy', name: 'Heavy Armor', baseDefense: 50 }
]

// 矿石数据
const ores = ref([
  // Common
  { id: 1, name: 'Stone', multiplier: 0.2, rarity: 'Common' },
  { id: 2, name: 'Sandstone', multiplier: 0.25, rarity: 'Common' },
  { id: 3, name: 'Copper', multiplier: 0.3, rarity: 'Common' },
  { id: 4, name: 'Iron', multiplier: 0.35, rarity: 'Common' },
  { id: 5, name: 'Tin', multiplier: 0.42, rarity: 'Common' },
  // Uncommon
  { id: 6, name: 'Silver', multiplier: 0.5, rarity: 'Uncommon' },
  { id: 7, name: 'Gold', multiplier: 0.65, rarity: 'Uncommon' },
  { id: 8, name: 'Mushroomite', multiplier: 0.8, rarity: 'Uncommon' },
  { id: 9, name: 'Platinum', multiplier: 0.8, rarity: 'Uncommon' },
  // Rare
  { id: 10, name: 'Bananaite', multiplier: 0.85, rarity: 'Rare' },
  { id: 11, name: 'Cardboardite', multiplier: 0.7, rarity: 'Rare' },
  { id: 12, name: 'Aite', multiplier: 1.1, rarity: 'Rare' },
  { id: 13, name: 'Poopite', multiplier: 1.2, rarity: 'Rare' },
  { id: 14, name: 'Cobalt', multiplier: 1.0, rarity: 'Rare' },
  { id: 15, name: 'Titanium', multiplier: 1.15, rarity: 'Rare' },
  { id: 16, name: 'Boneite', multiplier: 1.2, rarity: 'Rare' },
  // Epic
  { id: 17, name: 'Volcanic Rock', multiplier: 1.55, rarity: 'Epic' },
  { id: 18, name: 'Lapis Lazuli', multiplier: 1.3, rarity: 'Epic' },
  { id: 19, name: 'Quartz', multiplier: 1.5, rarity: 'Epic' },
  { id: 20, name: 'Amethyst', multiplier: 1.65, rarity: 'Epic' },
  { id: 21, name: 'Topaz', multiplier: 1.75, rarity: 'Epic' },
  { id: 22, name: 'Dark Boneite', multiplier: 2.25, rarity: 'Epic' },
  { id: 23, name: 'Slimeite', multiplier: 2.25, rarity: 'Epic' },
  // Legendary
  { id: 24, name: 'Diamond', multiplier: 2.0, rarity: 'Legendary' },
  { id: 25, name: 'Sapphire', multiplier: 2.25, rarity: 'Legendary' },
  { id: 26, name: 'Cuprite', multiplier: 2.43, rarity: 'Legendary' },
  { id: 27, name: 'Obsidian', multiplier: 2.35, rarity: 'Legendary' },
  { id: 28, name: 'Emerald', multiplier: 2.55, rarity: 'Legendary' },
  { id: 29, name: 'Ruby', multiplier: 2.95, rarity: 'Legendary' },
  { id: 30, name: 'Magenta Crystal', multiplier: 3.1, rarity: 'Legendary' },
  { id: 31, name: 'Crimson Crystal', multiplier: 3.3, rarity: 'Legendary' },
  { id: 32, name: 'Green Crystal', multiplier: 3.2, rarity: 'Legendary' },
  { id: 33, name: 'Orange Crystal', multiplier: 3.0, rarity: 'Legendary' },
  { id: 34, name: 'Blue Crystal', multiplier: 3.4, rarity: 'Legendary' },
  // Mythic
  { id: 35, name: 'Rivalite', multiplier: 3.33, rarity: 'Mythic' },
  { id: 36, name: 'Uranium', multiplier: 3.0, rarity: 'Mythic' },
  { id: 37, name: 'Mythril', multiplier: 3.5, rarity: 'Mythic' },
  { id: 38, name: 'Eye Ore', multiplier: 4.0, rarity: 'Mythic' },
  { id: 39, name: 'Fireite', multiplier: 4.5, rarity: 'Mythic' },
  { id: 40, name: 'Magmaite', multiplier: 5.0, rarity: 'Mythic' },
  { id: 41, name: 'Lightite', multiplier: 4.6, rarity: 'Mythic' },
  { id: 42, name: 'Darkryte', multiplier: 6.3, rarity: 'Mythic' },
  { id: 43, name: 'Demonite', multiplier: 5.5, rarity: 'Mythic' },
  { id: 44, name: 'Rainbow Crystal', multiplier: 5.25, rarity: 'Mythic' },
  { id: 45, name: 'Arcane Crystal', multiplier: 7.5, rarity: 'Mythic' }
])

// 特性数据（带特性的矿石）
const traits = {
  weapon: [
    { name: 'Eye Ore Trait', oreName: 'Eye Ore', maxEffect: 100 },
    { name: 'Rivalite Trait', oreName: 'Rivalite', maxEffect: 100 },
    { name: 'Fireite Trait', oreName: 'Fireite', maxEffect: 100 },
    { name: 'Magmaite Trait', oreName: 'Magmaite', maxEffect: 100 }
  ],
  armor: [
    { name: 'Darkryte Trait', oreName: 'Darkryte', maxEffect: 100 },
    { name: 'Demonite Trait', oreName: 'Demonite', maxEffect: 100 },
    { name: 'Arcane Crystal Trait', oreName: 'Arcane Crystal', maxEffect: 100 },
    { name: 'Mythril Trait', oreName: 'Mythril', maxEffect: 100 }
  ]
}

const filteredOres = computed(() => {
  if (!oreSearch.value) return ores.value
  const search = oreSearch.value.toLowerCase()
  return ores.value.filter(ore => 
    ore.name.toLowerCase().includes(search) ||
    ore.rarity.toLowerCase().includes(search)
  )
})

const isOreSelected = (oreId) => {
  return selectedOres.value.some(item => item.ore.id === oreId)
}

const addOre = (ore) => {
  if (selectedOres.value.length >= 4 && !isOreSelected(ore.id)) {
    return
  }
  
  const existingIndex = selectedOres.value.findIndex(item => item.ore.id === ore.id)
  if (existingIndex > -1) {
    selectedOres.value[existingIndex].quantity++
  } else {
    selectedOres.value.push({ ore, quantity: 1 })
  }
}

const removeOre = (index) => {
  selectedOres.value.splice(index, 1)
}

const increaseQuantity = (index) => {
  selectedOres.value[index].quantity++
}

const decreaseQuantity = (index) => {
  if (selectedOres.value[index].quantity > 1) {
    selectedOres.value[index].quantity--
  }
}

// 计算总矿石数量
const totalOreCount = computed(() => {
  return selectedOres.value.reduce((sum, item) => sum + item.quantity, 0)
})

// 计算合金平均倍率（核心公式）
const alloyMultiplier = computed(() => {
  if (selectedOres.value.length === 0 || totalOreCount.value === 0) return 0
  
  // 公式：所有矿石倍率之和 / 矿石总数
  let totalWeighted = 0
  let totalCount = 0
  
  selectedOres.value.forEach(item => {
    totalWeighted += item.ore.multiplier * item.quantity
    totalCount += item.quantity
  })
  
  return totalWeighted / totalCount
})

// 检查是否有稀释（混入低倍率矿石）
const hasDilution = computed(() => {
  if (selectedOres.value.length === 0) return false
  
  const maxMultiplier = Math.max(...selectedOres.value.map(item => item.ore.multiplier))
  const minMultiplier = Math.min(...selectedOres.value.map(item => item.ore.multiplier))
  
  // 如果最高和最低倍率差距很大，且平均值明显低于最高值，说明有稀释
  return maxMultiplier > 2 && alloyMultiplier.value < maxMultiplier * 0.6
})

// 计算特性激活（基于10%和30%阈值）
const traitResults = computed(() => {
  if (selectedOres.value.length === 0 || totalOreCount.value === 0) return []
  
  const modeTraits = traits[currentMode.value] || []
  const result = []
  
  modeTraits.forEach(trait => {
    const oreItem = selectedOres.value.find(item => item.ore.name === trait.oreName)
    if (oreItem) {
      const percentage = (oreItem.quantity / totalOreCount.value) * 100
      let effectPercentage = 0
      let status = 'inactive'
      let statusText = 'Inactive'
      
      if (percentage < 10) {
        // 小于10%：未激活
        effectPercentage = 0
        status = 'inactive'
        statusText = 'Inactive (< 10%)'
      } else if (percentage >= 30) {
        // 大于等于30%：100%效果
        effectPercentage = 100
        status = 'maxed'
        statusText = 'Maxed (≥ 30%)'
      } else {
        // 10%-30%之间：线性增长
        // 公式：(占比 - 0.1) / (0.3 - 0.1)
        effectPercentage = ((percentage / 100 - 0.1) / (0.3 - 0.1)) * 100
        status = 'active'
        statusText = 'Active (10-30%)'
      }
      
      result.push({
        name: trait.name,
        percentage,
        effectPercentage,
        status,
        statusText,
        maxEffect: trait.maxEffect
      })
    }
  })
  
  return result
})

// 计算装备类型概率（基于矿石总数）
const typeProbabilities = computed(() => {
  if (selectedOres.value.length === 0) return []
  
  const types = currentMode.value === 'weapon' ? weaponTypes : armorTypes
  const count = totalOreCount.value
  const probabilities = []
  
  types.forEach(type => {
    let probability = 0
    
    if (currentMode.value === 'weapon') {
      // 武器概率分布（基于文档逻辑）
      if (type.id === 'dagger') {
        if (count < 5) probability = 90
        else if (count < 10) probability = 50
        else if (count < 15) probability = 20
        else probability = 5
      } else if (type.id === 'sword') {
        if (count < 5) probability = 10
        else if (count < 10) probability = 50
        else if (count < 15) probability = 60
        else if (count < 20) probability = 30
        else probability = 10
      } else if (type.id === 'greatsword') {
        if (count < 10) probability = 0
        else if (count < 15) probability = 20
        else if (count < 20) probability = 50
        else if (count < 25) probability = 40
        else probability = 20
      } else if (type.id === 'colossal-sword') {
        if (count < 15) probability = 0
        else if (count < 20) probability = 0
        else if (count < 25) probability = 30
        else probability = 65
      }
    } else {
      // 盔甲概率分布
      if (type.id === 'light') {
        if (count < 8) probability = 80
        else if (count < 15) probability = 30
        else probability = 10
      } else if (type.id === 'medium') {
        if (count < 8) probability = 20
        else if (count < 15) probability = 60
        else if (count < 20) probability = 40
        else probability = 20
      } else if (type.id === 'heavy') {
        if (count < 15) probability = 0
        else if (count < 20) probability = 10
        else probability = 70
      }
    }
    
    // 计算最终伤害/防御范围（基于品质加成）
    const baseStat = currentMode.value === 'weapon' ? type.baseDamage : type.baseDefense
    const minStat = baseStat * alloyMultiplier.value * 0.8 // Poor quality
    const maxStat = baseStat * alloyMultiplier.value * 1.3 // Masterwork quality
    
    probabilities.push({
      id: type.id,
      name: type.name,
      probability,
      baseStat,
      minDamage: minStat,
      maxDamage: maxStat
    })
  })
  
  // 标记最高概率
  const maxProb = Math.max(...probabilities.map(p => p.probability))
  probabilities.forEach(p => {
    p.isHighest = p.probability === maxProb && p.probability > 0
  })
  
  // 按概率排序
  return probabilities.sort((a, b) => b.probability - a.probability)
})

// 监听模式切换，清空选择
watch(currentMode, () => {
  selectedOres.value = []
})
</script>

<style scoped>
.calculator-view {
  min-height: 100vh;
  padding-bottom: 40px;
}

.calculator-section {
  padding: 0 0 40px;
}

.mode-selector {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  justify-content: center;
}

.mode-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(25, 20, 15, 0.8);
  border: 2px solid rgba(255, 140, 66, 0.3);
  border-radius: 8px;
  color: var(--text-soft);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mode-button:hover {
  border-color: rgba(255, 140, 66, 0.5);
  color: var(--text);
  background: rgba(255, 140, 66, 0.1);
}

.mode-button.active {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  border-color: var(--accent);
  color: #1a0a00;
}

.mode-icon {
  font-size: 1.2rem;
}

.main-calculator-section {
  margin-bottom: 16px;
}

.main-section-title {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 8px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 140, 66, 0.3);
  position: relative;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-count {
  font-size: 0.9rem;
  color: var(--text-soft);
  margin: 0 0 20px 0;
}

.calculator-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.ore-selection-panel,
.results-panel {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  padding: 16px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.panel-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  padding-left: 16px;
  position: relative;
}

.panel-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  border-radius: 2px;
}

.ore-count-badge {
  padding: 4px 10px;
  background: rgba(255, 140, 66, 0.2);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
}

.ore-search {
  margin-bottom: 12px;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  background: rgba(20, 15, 10, 0.6);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 6px;
  color: var(--text);
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent);
  background: rgba(255, 140, 66, 0.05);
  box-shadow: 0 0 0 3px rgba(255, 140, 66, 0.1);
}

.ore-list {
  display: grid;
  gap: 6px;
  max-height: 450px;
  overflow-y: auto;
  padding-right: 6px;
}

.ore-list::-webkit-scrollbar {
  width: 6px;
}

.ore-list::-webkit-scrollbar-track {
  background: rgba(20, 15, 10, 0.3);
  border-radius: 3px;
}

.ore-list::-webkit-scrollbar-thumb {
  background: rgba(255, 140, 66, 0.3);
  border-radius: 3px;
}

.ore-list::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 140, 66, 0.5);
}

.ore-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(20, 15, 10, 0.6);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 6px;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.ore-button:hover:not(.disabled) {
  background: rgba(255, 140, 66, 0.1);
  border-color: rgba(255, 140, 66, 0.4);
  transform: translateX(4px);
}

.ore-button.selected {
  background: rgba(255, 140, 66, 0.2);
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(255, 140, 66, 0.2);
}

.ore-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ore-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ore-name {
  font-weight: 600;
  color: var(--text);
}

.ore-multiplier {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 700;
}

.ore-rarity {
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
}

.ore-rarity.common {
  background: rgba(158, 158, 158, 0.2);
  color: #9e9e9e;
}

.ore-rarity.uncommon {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}

.ore-rarity.rare {
  background: rgba(33, 150, 243, 0.2);
  color: #2196f3;
}

.ore-rarity.epic {
  background: rgba(156, 39, 176, 0.2);
  color: #9c27b0;
}

.ore-rarity.legendary {
  background: rgba(255, 152, 0, 0.2);
  color: #ff9800;
}

.ore-rarity.mythic {
  background: rgba(244, 67, 54, 0.2);
  color: #f44336;
}

.result-card {
  margin-bottom: 12px;
  padding: 12px;
  background: rgba(20, 15, 10, 0.6);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 8px;
}

.result-card.compact {
  padding: 10px;
}

.result-card:last-child {
  margin-bottom: 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.result-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  padding-left: 16px;
  position: relative;
}

.result-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  border-radius: 2px;
}

.quick-stats {
  display: flex;
  gap: 8px;
}

.stat-badge {
  padding: 4px 8px;
  background: rgba(255, 140, 66, 0.1);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-soft);
}

.stat-badge.highlight {
  background: rgba(255, 140, 66, 0.2);
  color: var(--accent);
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-soft);
}

.selected-ores-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.selected-ore-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: rgba(255, 140, 66, 0.1);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 6px;
}

.selected-ore-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.selected-ore-name {
  font-weight: 600;
  color: var(--text);
}

.selected-ore-multiplier {
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 700;
}

.selected-ore-rarity {
  font-size: 0.7rem;
  padding: 3px 6px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
}

.selected-ore-rarity.common {
  background: rgba(158, 158, 158, 0.2);
  color: #9e9e9e;
}

.selected-ore-rarity.uncommon {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}

.selected-ore-rarity.rare {
  background: rgba(33, 150, 243, 0.2);
  color: #2196f3;
}

.selected-ore-rarity.epic {
  background: rgba(156, 39, 176, 0.2);
  color: #9c27b0;
}

.selected-ore-rarity.legendary {
  background: rgba(255, 152, 0, 0.2);
  color: #ff9800;
}

.selected-ore-rarity.mythic {
  background: rgba(244, 67, 54, 0.2);
  color: #f44336;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  width: 28px;
  height: 28px;
  background: rgba(255, 140, 66, 0.2);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 4px;
  color: var(--accent);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-btn:hover:not(:disabled) {
  background: rgba(255, 140, 66, 0.3);
  border-color: var(--accent);
}

.qty-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qty-input {
  width: 60px;
  padding: 6px 8px;
  background: rgba(20, 15, 10, 0.6);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 4px;
  color: var(--text);
  font-size: 0.9rem;
  text-align: center;
}

.qty-input:focus {
  outline: none;
  border-color: var(--accent);
}

.remove-btn {
  background: transparent;
  border: none;
  color: var(--text-soft);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.remove-btn:hover {
  color: var(--accent);
  background: rgba(255, 140, 66, 0.1);
}

.remove-btn svg {
  width: 18px;
  height: 18px;
}

.total-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 140, 66, 0.15);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 8px;
  margin-top: 8px;
}

.total-label {
  font-weight: 600;
  color: var(--text);
}

.total-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent);
}

.multiplier-section {
  text-align: center;
}

.multiplier-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px;
}

.multiplier-value {
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent);
  text-shadow: 0 0 20px rgba(255, 140, 66, 0.5);
}

.multiplier-label {
  font-size: 1rem;
  color: var(--text-soft);
}

.multiplier-warning {
  margin-top: 8px;
  padding: 6px 10px;
  background: rgba(244, 67, 54, 0.1);
  border: 1px solid rgba(244, 67, 54, 0.3);
  border-radius: 6px;
  color: #f44336;
  font-size: 0.75rem;
  text-align: center;
}

.traits-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.traits-empty {
  text-align: center;
  padding: 12px;
  color: var(--text-soft);
  font-style: italic;
  font-size: 0.85rem;
}

.trait-item {
  padding: 8px 10px;
  background: rgba(255, 140, 66, 0.05);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 6px;
}

.trait-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.trait-name {
  font-weight: 600;
  color: var(--text);
}

.trait-status {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
}

.trait-status.inactive {
  background: rgba(158, 158, 158, 0.2);
  color: #9e9e9e;
}

.trait-status.active {
  background: rgba(33, 150, 243, 0.2);
  color: #2196f3;
}

.trait-status.maxed {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}

.trait-progress {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.trait-bar-container {
  width: 100%;
  height: 8px;
  background: rgba(20, 15, 10, 0.6);
  border-radius: 4px;
  overflow: hidden;
}

.trait-bar {
  height: 100%;
  border-radius: 6px;
  transition: width 0.5s ease;
}

.trait-bar.inactive {
  background: rgba(158, 158, 158, 0.5);
}

.trait-bar.active {
  background: linear-gradient(90deg, #2196f3, #64b5f6);
}

.trait-bar.maxed {
  background: linear-gradient(90deg, #4caf50, #81c784);
}

.trait-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-soft);
}

.probabilities-section {
  margin-top: 16px;
  padding: 16px;
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.section-header {
  margin-bottom: 12px;
}

.section-header .section-count {
  margin-bottom: 0;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 8px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 140, 66, 0.3);
  position: relative;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.probabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.probability-card {
  padding: 12px;
  background: rgba(255, 140, 66, 0.05);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.probability-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 8px 24px rgba(255, 140, 66, 0.15);
}

.probability-card.highest {
  background: rgba(255, 140, 66, 0.15);
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(255, 140, 66, 0.3);
}

.prob-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.prob-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}

.prob-percentage {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
}

.prob-bar-container {
  width: 100%;
  height: 6px;
  background: rgba(20, 15, 10, 0.6);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}

.prob-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-soft));
  border-radius: 5px;
  transition: width 0.5s ease;
}

.prob-stats {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
}

.stat-label {
  color: var(--text-soft);
}

.stat-value {
  font-weight: 600;
  color: var(--text);
}

.stat-value.highlight {
  color: var(--accent);
  font-weight: 700;
}

/* Info Sections */
.info-section,
.faq-section {
  margin-top: 24px;
  padding: 20px;
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.info-title,
.faq-title {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 140, 66, 0.3);
  position: relative;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.info-content {
  color: var(--text-soft);
  line-height: 1.6;
}

.info-content > p {
  margin: 0 0 20px 0;
  font-size: 0.95rem;
}

.info-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.feature-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 140, 66, 0.05);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 8px;
}

.feature-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 6px 0;
}

.feature-content p {
  font-size: 0.85rem;
  color: var(--text-soft);
  margin: 0;
  line-height: 1.5;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: rgba(255, 140, 66, 0.05);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 4px 12px rgba(255, 140, 66, 0.1);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 140, 66, 0.1);
  cursor: pointer;
}

.faq-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent);
  color: #1a0a00;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.faq-question h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}

.faq-answer {
  padding: 16px 16px 16px 56px;
}

.faq-answer p {
  font-size: 0.9rem;
  color: var(--text-soft);
  margin: 0 0 12px 0;
  line-height: 1.6;
}

.faq-answer p:last-child {
  margin-bottom: 0;
}

.faq-answer ul {
  margin: 12px 0;
  padding-left: 20px;
  color: var(--text-soft);
}

.faq-answer li {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 6px;
}

.faq-answer strong {
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

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .calculator-layout {
    grid-template-columns: 1fr;
  }

  .probabilities-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .calculator-view {
    padding-bottom: 40px;
  }

  .calculator-section {
    padding: 0 0 40px;
  }

  .mode-selector {
    flex-direction: column;
  }

  .mode-button {
    width: 100%;
    justify-content: center;
  }

  .ore-selection-panel,
  .results-panel {
    padding: 16px;
  }

  .panel-title,
  .result-title {
    font-size: 16px;
  }

  .main-section-title {
    font-size: 20px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .ore-list {
    max-height: 400px;
  }

  .probabilities-section {
    padding: 20px;
    margin-top: 32px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .probabilities-grid {
    grid-template-columns: 1fr;
  }

  .multiplier-value {
    font-size: 2.5rem;
  }

  .info-section,
  .faq-section {
    padding: 16px;
    margin-top: 20px;
  }

  .info-title,
  .faq-title,
  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .info-features {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .faq-answer {
    padding: 12px 12px 12px 48px;
  }
}
</style>
