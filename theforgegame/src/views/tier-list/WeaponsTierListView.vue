<template>
  <div class="tier-list-view page-container">
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">The Forge Roblox Weapons Tier List</h1>
          <p class="page-subtitle">
            Complete ranking of all weapons based on overall value including damage, attack speed, range, and versatility.
          </p>
        </div>
      </div>
    </section>

    <section class="tier-list-section">
      <div class="container">
        <div class="intro-content">
          <p>
            Weapons is one of the core gameplay mechanics of The Forge, you need to first mine and collect ores and other minerals in the caves, then forge weapons in the smithy; if you need help with weapon forging, you can visit the The Forge Calculator. The Forge Weapons Tier List ranks all available weapons based on their overall effectiveness in combat. This ranking considers damage output, attack speed, range, versatility, and how well each weapon performs across different scenarios. Higher-tier weapons generally offer better stats and more reliable performance, making them ideal choices for most builds.
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
          <h2 class="info-title">About The Forge Roblox Weapons Tier List</h2>
          <div class="info-content">
            <p>
              <strong>The Forge Roblox Weapons Tier List</strong> helps you understand which weapons offer the best overall value for combat. Each weapon is ranked based on damage output, attack speed, range, versatility, and performance across different scenarios.
            </p>
            <p>
              Understanding the tier system helps you prioritize which weapons to forge first. Higher-tier weapons offer better combat effectiveness, but require more resources to craft. Use <strong>The Forge Roblox Weapons Tier List</strong> to plan your weapon progression and resource allocation.
            </p>

            <h3 class="info-subtitle">How to Use This Tier List</h3>
            <ul class="info-list">
              <li><strong>S Tier</strong> - Meta-defining weapons that excel in almost any situation with top-tier damage, speed, and versatility. These are the best weapons in the game and should be prioritized for crafting.</li>
              <li><strong>A Tier</strong> - Extremely strong weapons with great stats that shine in most builds and combat scenarios. Excellent choices that offer reliable performance.</li>
              <li><strong>B Tier</strong> - Strong weapons that feel great with the right playstyle, but have clearer weaknesses or situational use cases. Good options if they match your preferred combat style.</li>
              <li><strong>C Tier</strong> - Usable weapons that work fine, yet are usually outclassed once you unlock better options. Consider upgrading when you have the resources.</li>
              <li><strong>D Tier</strong> - Playable but weaker weapons that get overshadowed quickly as you unlock better options. Should be replaced as soon as possible.</li>
            </ul>

            <h3 class="info-subtitle">Key Factors to Consider</h3>
            <p>
              When choosing a weapon from <strong>The Forge Roblox Weapons Tier List</strong>, consider:
            </p>
            <ul class="info-list">
              <li><strong>Damage Output</strong> - How much damage the weapon deals per hit. Higher damage means faster enemy elimination.</li>
              <li><strong>Attack Speed</strong> - How quickly you can attack with the weapon. Faster attacks mean higher DPS (damage per second).</li>
              <li><strong>Range</strong> - The reach of your weapon. Longer range provides safety and better positioning options.</li>
              <li><strong>Versatility</strong> - How well the weapon performs in different combat scenarios. Versatile weapons are more reliable.</li>
              <li><strong>Crafting Requirements</strong> - The resources needed to forge the weapon. Consider if you have the necessary ores and materials.</li>
              <li><strong>Playstyle Fit</strong> - How well the weapon matches your preferred combat style. A weapon that fits your playstyle is more effective.</li>
            </ul>

            <h3 class="info-subtitle">Tips for Choosing Your Weapon</h3>
            <p>
              To make the best use of <strong>The Forge Roblox Weapons Tier List</strong>:
            </p>
            <ul class="info-list">
              <li>Weapons need to be forged using ores. Check our <router-link to="/wiki/ores" class="inline-link">ores wiki</router-link> to find the materials you need.</li>
              <li>Use our <router-link to="/calculator" class="inline-link">calculator</router-link> to plan your weapon forging and resource allocation.</li>
              <li>Higher-tier weapons generally offer better stats, but consider your playstyle. A weapon that fits your style is better than a higher-tier one that doesn't.</li>
              <li>Learn more about each weapon's stats and crafting requirements in our <router-link to="/wiki/weapons" class="inline-link">weapons wiki</router-link>.</li>
              <li>Consider weapon versatility. S and A tier weapons perform well in most situations, making them safer investments.</li>
              <li>Don't overlook B tier weapons if they match your playstyle. They can be very effective when used correctly.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import weaponsData from '../../data/tier-list/weapons.js'

const pageConfig = {
  tierDescriptions: {
    'S': 'Meta-defining weapons that excel in almost any situation with top-tier damage, speed, and versatility.',
    'A': 'Extremely strong weapons with great stats that shine in most builds and combat scenarios.',
    'B': 'Strong weapons that feel great with the right playstyle, but have clearer weaknesses or situational use cases.',
    'C': 'Usable weapons that work fine, yet are usually outclassed once you unlock better options.',
    'D': 'Playable but weaker weapons that get overshadowed quickly as you unlock better options.'
  },
  tiers: ['S', 'A', 'B', 'C', 'D']
}

const tierGroups = computed(() => {
  return pageConfig.tiers.map(tier => ({
    tier,
    description: pageConfig.tierDescriptions[tier] || '',
    items: weaponsData.filter(item => item.tier === tier)
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


