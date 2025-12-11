<template>
  <div class="tier-list-view page-container">
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">The Forge Roblox Pickaxe Tier List</h1>
          <p class="page-subtitle">
            The Forge Pickaxe Tier List helps you save your hard-earned gold by buying only the best pickaxes from each region.
          </p>
        </div>
      </div>
    </section>

    <section class="tier-list-section">
      <div class="container">
        <div class="intro-content">
          <p>
            In <strong>The Forge Roblox</strong> game the pickaxe is the most indispensable tool. You can use it to mine ores and then forge the ores into various weapons and armor. Therefore, we have compiled the following <strong>The Forge Roblox Pickaxe Tier List</strong>, with a total of 14 pickaxes available in the game. Most pickaxes can be purchased in the shops of both worlds using gold, but some need to be found deep within caves.
          </p>
        </div>

        <!-- Tier List -->
        <div v-for="tierGroup in tierGroups" :key="tierGroup.tier" class="tier-group">
          <div class="tier-header">
            <h2 class="tier-title" :class="`tier-${tierGroup.tier.toLowerCase().replace('+', 'plus')}`">
              {{ tierGroup.tier }} Tier
            </h2>
            <p class="tier-description">{{ tierGroup.description }}</p>
          </div>
          
          <div v-for="item in tierGroup.items" :key="item.id" class="detail-item">
            <div class="detail-item-header">
              <div class="detail-item-image" v-if="item.imageUrl">
                <img :src="item.imageUrl" :alt="item.imageAlt || item.name" />
              </div>
              <h3 class="detail-item-name">{{ item.name }}</h3>
            </div>
            
            <div class="detail-stats">
              <div class="detail-stat">
                <strong>Mine Power:</strong> {{ item.minePower }}
              </div>
              <div class="detail-stat" v-if="item.mineSpeed">
                <strong>Mine Speed:</strong> {{ item.mineSpeed }}
              </div>
              <div class="detail-stat">
                <strong>Luck:</strong> {{ item.luck }}
              </div>
              <div class="detail-stat" v-if="item.cost">
                <strong>Costs:</strong> {{ item.cost }}
              </div>
              <div class="detail-stat" v-if="item.runeSlots > 0">
                <strong>Rune Slots:</strong> {{ item.runeSlots }}
              </div>
            </div>

            <div class="detail-suggested-runes" v-if="item.suggestedRunes && item.suggestedRunes.length > 0">
              <strong>Suggested Runes:</strong>
              <div class="rune-tags">
                <span v-for="rune in item.suggestedRunes" :key="rune" class="rune-tag">{{ rune }}</span>
              </div>
            </div>

            <div class="pros-cons">
              <div class="pros" v-if="item.pros && item.pros.length > 0">
                <strong>Pros:</strong>
                <ul>
                  <li v-for="(pro, index) in item.pros" :key="index">{{ pro }}</li>
                </ul>
              </div>
              <div class="cons" v-if="item.cons && item.cons.length > 0">
                <strong>Cons:</strong>
                <ul>
                  <li v-for="(con, index) in item.cons" :key="index">{{ con }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="info-section">
          <h2 class="info-title">About The Forge Roblox Pickaxe Tier List</h2>
          <div class="info-content">
            <p>
              <strong>The Forge Roblox Pickaxe Tier List</strong> is designed to help players make informed decisions when purchasing or upgrading their mining tools. Each pickaxe is ranked based on its overall effectiveness, considering factors such as mining power, luck bonuses, cost-effectiveness, and availability of rune slots.
            </p>
            <p>
              Understanding the tier system is crucial for optimizing your gameplay. Higher-tier pickaxes offer better stats but come with higher costs. The <strong>The Forge Roblox Pickaxe Tier List</strong> helps you balance your budget with performance needs, ensuring you get the best value for your gold investment.
            </p>

            <h3 class="info-subtitle">How to Use This Tier List</h3>
            <ul class="info-list">
              <li><strong>S+ Tier</strong> - The absolute best pickaxes in the game. These are end-game tools with exceptional stats, but they come with premium prices. Recommended for players who have accumulated significant wealth.</li>
              <li><strong>S Tier</strong> - Excellent pickaxes suitable for end-game content. These offer great balance between power and cost, making them ideal for serious players.</li>
              <li><strong>A Tier</strong> - Solid mid-game options that provide good value. These pickaxes are great for players progressing through the Forgotten Kingdom and beyond.</li>
              <li><strong>B Tier</strong> - Good early to mid-game pickaxes. These are affordable options that will serve you well during the early stages of your journey.</li>
              <li><strong>C Tier</strong> - Basic pickaxes that should be replaced as soon as possible. While functional, they lack the stats needed for efficient mining.</li>
              <li><strong>D Tier</strong> - Starter pickaxes. These are the weakest options and should be upgraded immediately when you have the resources.</li>
            </ul>

            <h3 class="info-subtitle">Key Factors to Consider</h3>
            <p>
              When choosing a pickaxe from <strong>The Forge Roblox Pickaxe Tier List</strong>, consider:
            </p>
            <ul class="info-list">
              <li><strong>Mining Power</strong> - Determines how quickly you can break rocks and ores. Higher power means faster mining.</li>
              <li><strong>Luck Bonus</strong> - Increases your chances of finding rare ores. Essential for farming valuable resources.</li>
              <li><strong>Mine Speed</strong> - Some pickaxes offer speed bonuses that make mining even faster.</li>
              <li><strong>Rune Slots</strong> - Allows you to attach runes for additional bonuses. More slots mean more customization options.</li>
              <li><strong>Cost-Effectiveness</strong> - Balance the price with the stats. Sometimes a lower-tier pickaxe with good runes can outperform a higher-tier one.</li>
            </ul>

            <h3 class="info-subtitle">Tips for Maximizing Your Pickaxe</h3>
            <p>
              To get the most out of your pickaxe from <strong>The Forge Roblox Pickaxe Tier List</strong>:
            </p>
            <ul class="info-list">
              <li>Use suggested runes to enhance your pickaxe's performance. Check our <router-link to="/wiki/runes" class="inline-link">runes wiki</router-link> for detailed information.</li>
              <li>Consider your current progression stage. Don't overspend on an S+ tier pickaxe if you're still in early game.</li>
              <li>Save up for quality upgrades. It's better to save for a good A or S tier pickaxe than to waste gold on multiple lower-tier options.</li>
              <li>Check our <router-link to="/wiki/pickaxes" class="inline-link">pickaxes wiki</router-link> for detailed stats and locations of each pickaxe.</li>
              <li>Use our <router-link to="/calculator" class="inline-link">calculator</router-link> to plan your resource allocation before making purchases.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import pickaxesData from '../../data/tier-list/pickaxes.js'

const pageConfig = {
  tierDescriptions: {
    'S+': 'Best Pickaxe in The Forge',
    'S': 'Pickaxes that are viable for mining in end-game areas.',
    'A': 'Decent pickaxes that can be used while grinding for some of the S-tier options.',
    'B': 'Good for grinding early on.',
    'C': 'These should generally be avoided as they are not worth the little amount of gold you have to pay to get them.',
    'D': 'Starter pickaxes - replace as soon as possible.'
  },
  tiers: ['S+', 'S', 'A', 'B', 'C', 'D']
}

const tierGroups = computed(() => {
  return pageConfig.tiers.map(tier => ({
    tier,
    description: pageConfig.tierDescriptions[tier] || '',
    items: pickaxesData.filter(item => item.tier === tier)
  })).filter(group => group.items.length > 0)
})
</script>

<style scoped>
.tier-list-view {
  min-height: 100vh;
  padding-bottom: 80px;
}

.tier-list-section {
  padding: 0 0 80px;
}

.intro-content {
  max-width: 900px;
  margin: 0 auto 40px;
  padding: 24px;
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.intro-content p {
  font-size: 1rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin: 0;
}

.tier-group {
  margin-bottom: 60px;
}

.tier-header {
  margin-bottom: 24px;
  text-align: center;
}

.tier-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  padding: 16px 32px;
  border-radius: 12px;
  display: inline-block;
}

.tier-splus {
  background: linear-gradient(135deg, #ff6b6b, #ff8c42);
  color: #1a0a00;
}

.tier-s {
  background: linear-gradient(135deg, #ff8c42, #ffb366);
  color: #1a0a00;
}

.tier-a {
  background: linear-gradient(135deg, #4caf50, #66bb6a);
  color: #fff;
}

.tier-b {
  background: linear-gradient(135deg, #42a5f5, #64b5f6);
  color: #fff;
}

.tier-c {
  background: linear-gradient(135deg, #ffa726, #ffb74d);
  color: #1a0a00;
}

.tier-d {
  background: linear-gradient(135deg, #9e9e9e, #bdbdbd);
  color: #1a0a00;
}

.tier-description {
  font-size: 1rem;
  color: var(--text-soft);
  margin: 0 0 24px 0;
}

.detail-item {
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.detail-item:hover {
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 4px 16px rgba(255, 140, 66, 0.1);
}

.detail-item-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.detail-item-image {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 140, 66, 0.1);
  border: 1px solid rgba(255, 140, 66, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
}

.detail-item-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
  flex: 1;
}

.detail-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.detail-stat {
  font-size: 0.95rem;
  color: var(--text-soft);
}

.detail-stat strong {
  color: var(--accent);
  margin-right: 8px;
}

.detail-suggested-runes {
  margin-bottom: 20px;
}

.detail-suggested-runes strong {
  color: var(--accent);
  display: block;
  margin-bottom: 8px;
}

.rune-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.rune-tag {
  background: rgba(255, 140, 66, 0.1);
  border: 1px solid rgba(255, 140, 66, 0.3);
  color: var(--accent-soft);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
}

.pros-cons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.pros,
.cons {
  font-size: 0.95rem;
}

.pros strong {
  color: #4caf50;
  display: block;
  margin-bottom: 8px;
}

.cons strong {
  color: #ff6b6b;
  display: block;
  margin-bottom: 8px;
}

.pros ul,
.cons ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pros li,
.cons li {
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
  line-height: 1.6;
  color: var(--text-soft);
}

.pros li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4caf50;
  font-weight: bold;
}

.cons li::before {
  content: '✗';
  position: absolute;
  left: 0;
  color: #ff6b6b;
  font-weight: bold;
}

/* About Section */
.info-section {
  margin-top: 80px;
  padding: 40px 0 0;
}

.info-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 2px solid rgba(255, 140, 66, 0.3);
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.info-content {
  max-width: 1000px;
  margin: 0 auto;
}

.info-content > p {
  font-size: 1rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin: 0 0 20px 0;
  text-align: left;
}

.info-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin: 32px 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 140, 66, 0.2);
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.info-list li {
  font-size: 0.95rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
}

.info-list li::before {
  content: '•';
  color: var(--accent);
  font-weight: bold;
  position: absolute;
  left: 0;
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

/* 移动端响应式 */
@media (max-width: 768px) {
  .tier-title {
    font-size: 2rem;
    padding: 12px 24px;
  }

  .detail-item {
    padding: 20px;
  }

  .detail-item-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .detail-item-image {
    width: 60px;
    height: 60px;
  }

  .detail-stats {
    grid-template-columns: 1fr;
  }

  .pros-cons {
    grid-template-columns: 1fr;
  }

  .info-section {
    margin-top: 40px;
    padding: 30px 0 0;
  }

  .info-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
    padding-bottom: 12px;
  }

  .info-content > p {
    font-size: 0.9rem;
    text-align: left;
  }

  .info-subtitle {
    font-size: 1.25rem;
    margin: 24px 0 12px 0;
    padding-bottom: 10px;
  }

  .info-list li {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }
}
</style>


