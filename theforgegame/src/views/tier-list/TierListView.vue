<template>
  <div class="tier-list-view page-container">
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">{{ pageConfig.title }}</h1>
          <p class="page-subtitle">
            {{ pageConfig.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <section class="tier-list-section">
      <div class="container">
        <div class="intro-content">
          <p v-html="pageConfig.intro"></p>
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
            <h3 class="detail-item-name">{{ item.name }}</h3>
            
            <div class="detail-stats" v-if="tierListType === 'pickaxes'">
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
          <h2 class="info-title">{{ pageConfig.aboutTitle }}</h2>
          <div class="info-content">
            <p v-html="pageConfig.aboutContent"></p>
            <p v-if="tierListType === 'pickaxes'">
              Understanding the tier system is crucial for optimizing your gameplay. Higher-tier pickaxes offer better stats but come with higher costs. The <strong>The Forge Roblox Pickaxe Tier List</strong> helps you balance your budget with performance needs, ensuring you get the best value for your gold investment.
            </p>
            <p v-if="tierListType === 'races'">
              Understanding the tier system helps you make better decisions when rerolling your race. Higher-tier races generally provide better overall value, but remember that race selection depends on luck. Use <strong>The Forge Roblox Race Tier List</strong> to understand which races are worth keeping when you get them.
            </p>
            <p v-if="tierListType === 'weapons'">
              Understanding the tier system helps you prioritize which weapons to forge first. Higher-tier weapons offer better combat effectiveness, but require more resources to craft. Use <strong>The Forge Roblox Weapons Tier List</strong> to plan your weapon progression and resource allocation.
            </p>

            <h3 class="info-subtitle">How to Use This Tier List</h3>
            <ul class="info-list" v-if="tierListType === 'pickaxes'">
              <li><strong>S+ Tier</strong> - The absolute best pickaxes in the game. These are end-game tools with exceptional stats, but they come with premium prices. Recommended for players who have accumulated significant wealth.</li>
              <li><strong>S Tier</strong> - Excellent pickaxes suitable for end-game content. These offer great balance between power and cost, making them ideal for serious players.</li>
              <li><strong>A Tier</strong> - Solid mid-game options that provide good value. These pickaxes are great for players progressing through the Forgotten Kingdom and beyond.</li>
              <li><strong>B Tier</strong> - Good early to mid-game pickaxes. These are affordable options that will serve you well during the early stages of your journey.</li>
              <li><strong>C Tier</strong> - Basic pickaxes that should be replaced as soon as possible. While functional, they lack the stats needed for efficient mining.</li>
              <li><strong>D Tier</strong> - Starter pickaxes. These are the weakest options and should be upgraded immediately when you have the resources.</li>
            </ul>
            <ul class="info-list" v-if="tierListType === 'races'">
              <li><strong>S Tier</strong> - Meta-defining races that can carry almost any build with top-tier damage, utility and safety. These are the best races in the game.</li>
              <li><strong>A Tier</strong> - Extremely strong races with great stats or economy that shine in most builds. Excellent choices for any playstyle.</li>
              <li><strong>B Tier</strong> - Strong but situational races that feel great with the right playstyle, but have clearer weaknesses. Good if they match your build.</li>
              <li><strong>C Tier</strong> - Usable but niche races that work fine, yet are usually outclassed once you unlock better options. Consider rerolling if possible.</li>
              <li><strong>D Tier</strong> - Playable but weak races that get overshadowed quickly as you unlock better options. Should be replaced when possible.</li>
              <li><strong>F Tier</strong> - Starter race that works early on, but should be swapped out once you unlock anything else. Priority to reroll.</li>
            </ul>
            <ul class="info-list" v-if="tierListType === 'weapons'">
              <li><strong>S Tier</strong> - Meta-defining weapons that excel in almost any situation with top-tier damage, speed, and versatility. These are the best weapons in the game and should be prioritized for crafting.</li>
              <li><strong>A Tier</strong> - Extremely strong weapons with great stats that shine in most builds and combat scenarios. Excellent choices that offer reliable performance.</li>
              <li><strong>B Tier</strong> - Strong weapons that feel great with the right playstyle, but have clearer weaknesses or situational use cases. Good options if they match your preferred combat style.</li>
              <li><strong>C Tier</strong> - Usable weapons that work fine, yet are usually outclassed once you unlock better options. Consider upgrading when you have the resources.</li>
              <li><strong>D Tier</strong> - Playable but weaker weapons that get overshadowed quickly as you unlock better options. Should be replaced as soon as possible.</li>
            </ul>

            <h3 class="info-subtitle" v-if="tierListType === 'pickaxes'">Key Factors to Consider</h3>
            <p v-if="tierListType === 'pickaxes'">
              When choosing a pickaxe from <strong>The Forge Roblox Pickaxe Tier List</strong>, consider:
            </p>
            <ul class="info-list" v-if="tierListType === 'pickaxes'">
              <li><strong>Mining Power</strong> - Determines how quickly you can break rocks and ores. Higher power means faster mining.</li>
              <li><strong>Luck Bonus</strong> - Increases your chances of finding rare ores. Essential for farming valuable resources.</li>
              <li><strong>Mine Speed</strong> - Some pickaxes offer speed bonuses that make mining even faster.</li>
              <li><strong>Rune Slots</strong> - Allows you to attach runes for additional bonuses. More slots mean more customization options.</li>
              <li><strong>Cost-Effectiveness</strong> - Balance the price with the stats. Sometimes a lower-tier pickaxe with good runes can outperform a higher-tier one.</li>
            </ul>

            <h3 class="info-subtitle" v-if="tierListType === 'races'">Key Factors to Consider</h3>
            <p v-if="tierListType === 'races'">
              When evaluating races from <strong>The Forge Roblox Race Tier List</strong>, consider:
            </p>
            <ul class="info-list" v-if="tierListType === 'races'">
              <li><strong>Damage Output</strong> - How much damage the race provides. Higher damage means faster kills and better farming efficiency.</li>
              <li><strong>Survivability</strong> - Health, defense, or defensive abilities that help you survive longer in combat.</li>
              <li><strong>Mobility</strong> - Movement speed, dash abilities, or other mobility bonuses that improve your gameplay experience.</li>
              <li><strong>Economy</strong> - Gold bonuses, resource generation, or other economic benefits that help you progress faster.</li>
              <li><strong>Build Compatibility</strong> - How well the race works with different weapon and armor builds. Higher-tier races are more versatile.</li>
            </ul>

            <h3 class="info-subtitle" v-if="tierListType === 'weapons'">Key Factors to Consider</h3>
            <p v-if="tierListType === 'weapons'">
              When choosing a weapon from <strong>The Forge Roblox Weapons Tier List</strong>, consider:
            </p>
            <ul class="info-list" v-if="tierListType === 'weapons'">
              <li><strong>Damage Output</strong> - How much damage the weapon deals per hit. Higher damage means faster enemy elimination.</li>
              <li><strong>Attack Speed</strong> - How quickly you can attack with the weapon. Faster attacks mean higher DPS (damage per second).</li>
              <li><strong>Range</strong> - The reach of your weapon. Longer range provides safety and better positioning options.</li>
              <li><strong>Versatility</strong> - How well the weapon performs in different combat scenarios. Versatile weapons are more reliable.</li>
              <li><strong>Crafting Requirements</strong> - The resources needed to forge the weapon. Consider if you have the necessary ores and materials.</li>
              <li><strong>Playstyle Fit</strong> - How well the weapon matches your preferred combat style. A weapon that fits your playstyle is more effective.</li>
            </ul>

            <h3 class="info-subtitle" v-if="tierListType === 'pickaxes'">Tips for Maximizing Your Pickaxe</h3>
            <p v-if="tierListType === 'pickaxes'">
              To get the most out of your pickaxe from <strong>The Forge Roblox Pickaxe Tier List</strong>:
            </p>
            <ul class="info-list" v-if="tierListType === 'pickaxes'">
              <li>Use suggested runes to enhance your pickaxe's performance. Check our <router-link to="/wiki/runes" class="inline-link">runes wiki</router-link> for detailed information.</li>
              <li>Consider your current progression stage. Don't overspend on an S+ tier pickaxe if you're still in early game.</li>
              <li>Save up for quality upgrades. It's better to save for a good A or S tier pickaxe than to waste gold on multiple lower-tier options.</li>
              <li>Check our <router-link to="/wiki/pickaxes" class="inline-link">pickaxes wiki</router-link> for detailed stats and locations of each pickaxe.</li>
              <li>Use our <router-link to="/calculator" class="inline-link">calculator</router-link> to plan your resource allocation before making purchases.</li>
            </ul>

            <h3 class="info-subtitle" v-if="tierListType === 'races'">Tips for Choosing Your Race</h3>
            <p v-if="tierListType === 'races'">
              To make the best use of <strong>The Forge Roblox Race Tier List</strong>:
            </p>
            <ul class="info-list" v-if="tierListType === 'races'">
              <li>Race selection is based on luck, so use rerolls wisely. Check our <router-link to="/codes" class="inline-link">codes page</router-link> for free reroll codes.</li>
              <li>If you get an S or A tier race, consider keeping it even if it's not your preferred playstyle. Higher-tier races are versatile.</li>
              <li>Learn more about each race's abilities in our <router-link to="/wiki/races" class="inline-link">races wiki</router-link>.</li>
              <li>Focus on overall value rather than just rarity. A well-used B tier race can outperform a poorly-used S tier race.</li>
              <li>Consider your build when evaluating races. Some races work better with specific weapon or armor combinations.</li>
            </ul>

            <h3 class="info-subtitle" v-if="tierListType === 'weapons'">Tips for Choosing Your Weapon</h3>
            <p v-if="tierListType === 'weapons'">
              To make the best use of <strong>The Forge Roblox Weapons Tier List</strong>:
            </p>
            <ul class="info-list" v-if="tierListType === 'weapons'">
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
import { useRoute } from 'vue-router'
import pickaxesData from '../../data/tier-list/pickaxes.js'
import racesData from '../../data/tier-list/races.js'
import weaponsData from '../../data/tier-list/weapons.js'

const route = useRoute()

// 根据路由名称确定排名类型
const tierListType = computed(() => {
  if (route.name === 'tier-list-races') return 'races'
  if (route.name === 'tier-list-weapons') return 'weapons'
  return 'pickaxes' // 默认是 pickaxes
})

// 根据类型加载数据
const items = computed(() => {
  if (tierListType.value === 'races') return racesData
  if (tierListType.value === 'weapons') return weaponsData
  return pickaxesData
})

// 页面配置
const pageConfig = computed(() => {
  if (tierListType.value === 'races') {
    return {
      title: 'The Forge Roblox Race Tier List',
      subtitle: 'Complete ranking of all races based on overall value including damage, survivability, mobility, and economy.',
      intro: 'The Forge Race Tier List currently has 13 classes available for selection, but the final class obtained depends entirely on luck. Focus on overall value (damage, survivability, mobility, and economy) rather than purely on rarity. Each race is available—with higher-tier races generally being more efficient or more forgiving in most cases, they can be used with any build, which is why I have compiled this class strength ranking.',
      aboutTitle: 'About The Forge Roblox Race Tier List',
      aboutContent: '<strong>The Forge Roblox Race Tier List</strong> helps you understand which races offer the best overall value for your playstyle. Each race is ranked based on damage output, survivability, mobility, and economic benefits.',
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
  } else if (tierListType.value === 'weapons') {
    return {
      title: 'The Forge Roblox Weapons Tier List',
      subtitle: 'Complete ranking of all weapons based on overall value including damage, attack speed, range, and versatility.',
      intro: 'Weapons is one of the core gameplay mechanics of The Forge, you need to first mine and collect ores and other minerals in the caves, then forge weapons in the smithy; if you need help with weapon forging, you can visit the The Forge Calculator. The Forge Weapons Tier List ranks all available weapons based on their overall effectiveness in combat. This ranking considers damage output, attack speed, range, versatility, and how well each weapon performs across different scenarios. Higher-tier weapons generally offer better stats and more reliable performance, making them ideal choices for most builds.',
      aboutTitle: 'About The Forge Roblox Weapons Tier List',
      aboutContent: '<strong>The Forge Roblox Weapons Tier List</strong> helps you understand which weapons offer the best overall value for combat. Each weapon is ranked based on damage output, attack speed, range, versatility, and performance across different scenarios.',
      tierDescriptions: {
        'S': 'Meta-defining weapons that excel in almost any situation with top-tier damage, speed, and versatility.',
        'A': 'Extremely strong weapons with great stats that shine in most builds and combat scenarios.',
        'B': 'Strong weapons that feel great with the right playstyle, but have clearer weaknesses or situational use cases.',
        'C': 'Usable weapons that work fine, yet are usually outclassed once you unlock better options.',
        'D': 'Playable but weaker weapons that get overshadowed quickly as you unlock better options.'
      },
      tiers: ['S', 'A', 'B', 'C', 'D']
    }
  } else {
    return {
      title: 'The Forge Roblox Pickaxe Tier List',
      subtitle: 'The Forge Pickaxe Tier List helps you save your hard-earned gold by buying only the best pickaxes from each region.',
      intro: 'In <strong>The Forge Roblox</strong> game the pickaxe is the most indispensable tool. You can use it to mine ores and then forge the ores into various weapons and armor. Therefore, we have compiled the following <strong>The Forge Roblox Pickaxe Tier List</strong>, with a total of 14 pickaxes available in the game. Most pickaxes can be purchased in the shops of both worlds using gold, but some need to be found deep within caves.',
      aboutTitle: 'About The Forge Roblox Pickaxe Tier List',
      aboutContent: '<strong>The Forge Roblox Pickaxe Tier List</strong> is designed to help players make informed decisions when purchasing or upgrading their mining tools. Each pickaxe is ranked based on its overall effectiveness, considering factors such as mining power, luck bonuses, cost-effectiveness, and availability of rune slots.',
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
  }
})

const tierGroups = computed(() => {
  const config = pageConfig.value
  return config.tiers.map(tier => ({
    tier,
    description: config.tierDescriptions[tier] || '',
    items: items.value.filter(item => item.tier === tier)
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

.detail-item-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 20px 0;
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

