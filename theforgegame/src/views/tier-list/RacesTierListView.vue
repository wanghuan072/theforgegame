<template>
  <div class="tier-list-view page-container">
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">The Forge Roblox Race Tier List</h1>
          <p class="page-subtitle">
            Complete ranking of all races based on overall value including damage, survivability, mobility, and economy.
          </p>
        </div>
      </div>
    </section>

    <section class="tier-list-section">
      <div class="container">
        <div class="intro-content">
          <p>
            The Forge Race Tier List currently has 13 classes available for selection, but the final class obtained depends entirely on luck. Focus on overall value (damage, survivability, mobility, and economy) rather than purely on rarity. Each race is available—with higher-tier races generally being more efficient or more forgiving in most cases, they can be used with any build, which is why I have compiled this class strength ranking.
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
          <h2 class="info-title">About The Forge Roblox Race Tier List</h2>
          <div class="info-content">
            <p>
              <strong>The Forge Roblox Race Tier List</strong> helps you understand which races offer the best overall value for your playstyle. Each race is ranked based on damage output, survivability, mobility, and economic benefits.
            </p>
            <p>
              Understanding the tier system helps you make better decisions when rerolling your race. Higher-tier races generally provide better overall value, but remember that race selection depends on luck. Use <strong>The Forge Roblox Race Tier List</strong> to understand which races are worth keeping when you get them.
            </p>

            <h3 class="info-subtitle">How to Use This Tier List</h3>
            <ul class="info-list">
              <li><strong>S Tier</strong> - Meta-defining races that can carry almost any build with top-tier damage, utility and safety. These are the best races in the game.</li>
              <li><strong>A Tier</strong> - Extremely strong races with great stats or economy that shine in most builds. Excellent choices for any playstyle.</li>
              <li><strong>B Tier</strong> - Strong but situational races that feel great with the right playstyle, but have clearer weaknesses. Good if they match your build.</li>
              <li><strong>C Tier</strong> - Usable but niche races that work fine, yet are usually outclassed once you unlock better options. Consider rerolling if possible.</li>
              <li><strong>D Tier</strong> - Playable but weak races that get overshadowed quickly as you unlock better options. Should be replaced when possible.</li>
              <li><strong>F Tier</strong> - Starter race that works early on, but should be swapped out once you unlock anything else. Priority to reroll.</li>
            </ul>

            <h3 class="info-subtitle">Key Factors to Consider</h3>
            <p>
              When evaluating races from <strong>The Forge Roblox Race Tier List</strong>, consider:
            </p>
            <ul class="info-list">
              <li><strong>Damage Output</strong> - How much damage the race provides. Higher damage means faster kills and better farming efficiency.</li>
              <li><strong>Survivability</strong> - Health, defense, or defensive abilities that help you survive longer in combat.</li>
              <li><strong>Mobility</strong> - Movement speed, dash abilities, or other mobility bonuses that improve your gameplay experience.</li>
              <li><strong>Economy</strong> - Gold bonuses, resource generation, or other economic benefits that help you progress faster.</li>
              <li><strong>Build Compatibility</strong> - How well the race works with different weapon and armor builds. Higher-tier races are more versatile.</li>
            </ul>

            <h3 class="info-subtitle">Tips for Choosing Your Race</h3>
            <p>
              To make the best use of <strong>The Forge Roblox Race Tier List</strong>:
            </p>
            <ul class="info-list">
              <li>Race selection is based on luck, so use rerolls wisely. Check our <router-link to="/codes" class="inline-link">codes page</router-link> for free reroll codes.</li>
              <li>If you get an S or A tier race, consider keeping it even if it's not your preferred playstyle. Higher-tier races are versatile.</li>
              <li>Learn more about each race's abilities in our <router-link to="/wiki/races" class="inline-link">races wiki</router-link>.</li>
              <li>Focus on overall value rather than just rarity. A well-used B tier race can outperform a poorly-used S tier race.</li>
              <li>Consider your build when evaluating races. Some races work better with specific weapon or armor combinations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import racesData from '../../data/tier-list/races.js'

const pageConfig = {
  tierDescriptions: {
    'S': 'Meta-defining races that can carry almost any build with top-tier damage, utility and safety.',
    'A': 'Extremely strong races with great stats or economy that shine in most builds.',
    'B': 'Strong but situational races that feel great with the right playstyle, but have clearer weaknesses.',
    'C': 'Usable but niche races that work fine, yet are usually outclassed once you unlock better options.',
    'D': 'Playable but weak races that get overshadowed quickly as you unlock better options.',
    'F': 'Starter race that works early on, but should be swapped out once you unlock anything else.'
  },
  tiers: ['S', 'A', 'B', 'C', 'D', 'F']
}

const tierGroups = computed(() => {
  return pageConfig.tiers.map(tier => ({
    tier,
    description: pageConfig.tierDescriptions[tier] || '',
    items: racesData.filter(item => item.tier === tier)
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

.tier-f {
  background: linear-gradient(135deg, #616161, #757575);
  color: #fff;
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


