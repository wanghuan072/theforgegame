<template>
  <div class="home-view">
    <main>
      <!-- Hero Section -->
      <section class="hero hero-background">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <p class="badge">THE FORGE</p>
              <h1 class="hero-title">Welcome to The Forge Game HQ</h1>
              <p class="hero-subtitle">
                The ultimate community wiki, database, and toolkit for <strong>The Forge Game</strong> on Roblox. Master crafting, combat, and progression with our comprehensive guides and tools.
              </p>
              <div class="hero-actions">
                <router-link to="/codes" class="btn-hero btn-primary">
                  <span>🔥 Get Active Codes</span>
                </router-link>
                <router-link to="/calculator" class="btn-hero btn-secondary">
                  <span>🧮 Open Calculator</span>
                </router-link>
              </div>
              <div class="hero-stats">
                <div class="stat">
                  <p class="label">Release Date</p>
                  <p class="value">November 2025</p>
                </div>
                <div class="stat">
                  <p class="label">Genre</p>
                  <p class="value">RPG Simulation</p>
                </div>
                <div class="stat">
                  <p class="label">Platform</p>
                  <p class="value">Roblox</p>
                </div>
              </div>
            </div>
            <div class="hero-video">
              <div class="video-player">
                <div class="video-thumbnail" v-if="!isVideoPlaying">
                  <img
                    src="/images/video-bg.webp"
                    alt="The Forge Gameplay"
                    class="video-bg-image"
                  />
                  <div class="video-mask">
                    <span>THE FORGE GAMEPLAY</span>
                  </div>
                  <div class="play-button" @click="playVideo">▶</div>
                </div>
                <div class="video-iframe" v-else>
                  <iframe
                    src="https://www.youtube.com/embed/VnVHoQbx704"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="video-frame"
                  ></iframe>
                  <button class="close-video" @click="closeVideo">×</button>
                </div>
                <div class="video-info">
                  <div class="video-header">
                    <span>The Forge Community</span>
                    <span class="dot"></span>
                    <span>Gameplay Trailer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Master the Forge Section -->
      <section class="master-forge-section">
        <div class="container">
          <div class="master-card">
            <div class="master-card-visual">
              <img src="/images/about-img.webp" alt="The Forge Guides" />
            </div>
            <div class="master-card-text">
              <p class="eyebrow-label">Community Guides</p>
              <h2 class="section-title">Master the Forge Game with Our Guides</h2>
              <p class="section-subtitle">
                Welcome to TheForgeGame.com, your comprehensive source for everything related to <strong>The Forge Game</strong> on Roblox. Whether you are a beginner looking for <router-link to="/guides/the-forge-roblox-beginner-guide" class="inline-link">leveling guides</router-link> or a veteran searching for the best <router-link to="/wiki/weapons" class="inline-link">weapon builds</router-link>, our wiki has you covered. We provide real-time updates on working <router-link to="/codes" class="inline-link">codes</router-link>, detailed crafting recipes, and damage calculation tools to help you dominate <strong>The Forge Game</strong>.
              </p>
              <div class="feature-pills">
                <span class="pill">Real-time codes</span>
                <span class="pill">Leveling routes</span>
                <span class="pill">Weapon builds</span>
                <span class="pill">Crafting recipes</span>
                <span class="pill">Damage calculator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Calculator Preview Section -->
      <section class="calculator-preview">
        <div class="container">
          <div class="calculator-preview-content">
            <div class="calculator-preview-text">
              <p class="calc-eyebrow">Build Simulator</p>
              <h2 class="section-title">The Forge Game Calculator</h2>
              <p class="section-subtitle">
                Planning your next gear set in <strong>The Forge Game</strong>? Use our exclusive <router-link to="/calculator" class="inline-link">calculator</router-link> to check crafting costs and simulate damage output. Perfect your builds before you craft.
              </p>
              <div class="calculator-features-compact">
                <div class="feature-item-compact">
                  <div class="feature-icon">🧪</div>
                  <div class="feature-content">
                    <h4>Alloy Multiplier</h4>
                    <p>Weighted average calculation with dilution warnings</p>
                  </div>
                </div>
                <div class="feature-item-compact">
                  <div class="feature-icon">✨</div>
                  <div class="feature-content">
                    <h4>Trait Activation</h4>
                    <p>Track progress at 10% and 30% thresholds</p>
                  </div>
                </div>
                <div class="feature-item-compact">
                  <div class="feature-icon">🎯</div>
                  <div class="feature-content">
                    <h4>Type & Damage</h4>
                    <p>Probability odds and damage range preview</p>
                  </div>
                </div>
              </div>
              <router-link to="/calculator" class="btn-hero btn-primary">
                <span>Open the Calculator</span>
              </router-link>
            </div>
            <div class="calculator-preview-image">
              <div class="calculator-image">
                <img src="/images/calculator-img.webp" alt="The Forge Calculator" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Wiki Categories Section -->
      <section class="wiki-categories-section">
        <div class="container">
          <h2 class="section-title">The Forge Game Wiki</h2>
          <div class="wiki-categories-grid">
            <router-link to="/wiki/ores" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/ores-image.webp" alt="Ores" />
              </div>
              <span class="category-name">Ores</span>
            </router-link>
            <router-link to="/wiki/weapons" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/weapons-image.webp" alt="Weapons" />
              </div>
              <span class="category-name">Weapons</span>
            </router-link>
            <router-link to="/wiki/armor" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/armors-image.webp" alt="Armor" />
              </div>
              <span class="category-name">Armor</span>
            </router-link>
            <router-link to="/wiki/pickaxes" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/pickaxes-image.webp" alt="Pickaxes" />
              </div>
              <span class="category-name">Pickaxes</span>
            </router-link>
            <router-link to="/wiki/enemies" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/enemies-image.webp" alt="Enemies" />
              </div>
              <span class="category-name">Enemies</span>
            </router-link>
            <router-link to="/wiki/locations" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/locations-image.webp" alt="Locations" />
              </div>
              <span class="category-name">Locations</span>
            </router-link>
            <router-link to="/wiki/mechanics" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/mechanics-image.webp" alt="Mechanics" />
              </div>
              <span class="category-name">Mechanics</span>
            </router-link>
            <router-link to="/wiki/npcs" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/npcs-image.webp" alt="NPCs" />
              </div>
              <span class="category-name">NPCs</span>
            </router-link>
            <router-link to="/wiki/potions" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/potions-image.webp" alt="Potions" />
              </div>
              <span class="category-name">Potions</span>
            </router-link>
            <router-link to="/wiki/quests" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/quests-image.webp" alt="Quests" />
              </div>
              <span class="category-name">Quests</span>
            </router-link>
            <router-link to="/wiki/races" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/races-image.webp" alt="Races" />
              </div>
              <span class="category-name">Races</span>
            </router-link>
            <router-link to="/wiki/runes" class="wiki-category-card">
              <div class="category-image">
                <img src="/images/wiki/runes-image.webp" alt="Runes" />
              </div>
              <span class="category-name">Runes</span>
            </router-link>
          </div>
        </div>
      </section>

      <!-- Latest Guides Section -->
      <section class="latest-guides">
        <div class="container">
          <h2 class="section-title">The Forge Game Latest Updates & Guides</h2>
          <div
            class="guides-preview-grid guides-grid-3"
            v-if="!guidesLoading && homeGuides.length > 0"
          >
            <div
              v-for="guide in homeGuides"
              :key="guide.id"
              class="guide-preview-card"
              @click="goToGuide(guide.addressBar)"
            >
              <div class="guide-preview-image" v-if="guide.imageUrl">
                <img :src="guide.imageUrl" :alt="guide.imageAlt || guide.title" />
              </div>
              <div class="guide-preview-content">
                <h3 class="guide-preview-title">{{ guide.title }}</h3>
                <p class="guide-preview-description">{{ guide.description }}</p>
                <div class="guide-preview-tags" v-if="guide.tags && guide.tags.length > 0">
                  <span v-for="tag in guide.tags.slice(0, 2)" :key="tag" class="tag-small">{{
                    tag
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="guidesLoading" class="loading-state">
            <p>Loading guides...</p>
          </div>
          <div class="guides-button-wrapper" v-if="!guidesLoading && homeGuides.length > 0">
            <router-link to="/guides" class="btn-view-all-guides">View All Guides</router-link>
          </div>
        </div>
      </section>

      <!-- Player Reviews Section -->
      <section class="player-reviews">
        <div class="container">
          <div class="player-reviews-content">
            <h2 class="section-title">The Forge Game Player Reviews</h2>
            <div class="reviews-grid">
              <div class="review-card">
                <div class="review-header">
                  <div class="review-avatar">A</div>
                  <div class="review-author-info">
                    <p class="review-author">Alex</p>
                    <div class="review-stars">★★★★★</div>
                  </div>
                </div>
                <p class="review-text">
                  "This wiki has been incredibly helpful for understanding the forging system. The
                  guides are detailed and easy to follow! I've learned so much about ore
                  combinations, weapon crafting, and trait activation. The comprehensive database
                  makes it easy to plan my builds and optimize my gameplay."
                </p>
              </div>
              <div class="review-card">
                <div class="review-header">
                  <div class="review-avatar">B</div>
                  <div class="review-author-info">
                    <p class="review-author">Blake</p>
                    <div class="review-stars">★★★★★</div>
                  </div>
                </div>
                <p class="review-text">
                  "The codes section is always up to date. I've gotten so many free items thanks to
                  this site! The team does an amazing job verifying codes daily and keeping the
                  community informed. This has saved me countless hours of grinding and helped me
                  progress much faster in the game."
                </p>
              </div>
              <div class="review-card">
                <div class="review-header">
                  <div class="review-avatar">C</div>
                  <div class="review-author-info">
                    <p class="review-author">Chris</p>
                    <div class="review-stars">★★★★★</div>
                  </div>
                </div>
                <p class="review-text">
                  "Great resource for weapon stats and crafting recipes. The calculator tool is a
                  game changer! I use it before every major crafting session to plan my ore
                  combinations and predict outcomes. The trait activation calculations are spot-on
                  and have helped me create some amazing builds."
                </p>
              </div>
              <div class="review-card">
                <div class="review-header">
                  <div class="review-avatar">D</div>
                  <div class="review-author-info">
                    <p class="review-author">Diana</p>
                    <div class="review-stars">★★★★★</div>
                  </div>
                </div>
                <p class="review-text">
                  "The guides section is fantastic! As a new player, I found the beginner guides
                  extremely helpful. The step-by-step tutorials on mining, forging, and combat
                  mechanics helped me understand the game quickly. The advanced strategies have also
                  improved my end-game performance significantly."
                </p>
              </div>
              <div class="review-card">
                <div class="review-header">
                  <div class="review-avatar">E</div>
                  <div class="review-author-info">
                    <p class="review-author">Ethan</p>
                    <div class="review-stars">★★★★☆</div>
                  </div>
                </div>
                <p class="review-text">
                  "The wiki database is incredibly comprehensive. I love how everything is organized
                  by categories - ores, weapons, armor, enemies, locations. Each entry has detailed
                  stats and information that's actually useful in-game. The images and descriptions
                  make it easy to identify items and plan my strategy."
                </p>
              </div>
              <div class="review-card">
                <div class="review-header">
                  <div class="review-avatar">F</div>
                  <div class="review-author-info">
                    <p class="review-author">Felix</p>
                    <div class="review-stars">★★★★★</div>
                  </div>
                </div>
                <p class="review-text">
                  "Best The Forge resource site out there! The calculator alone is worth visiting
                  daily. Being able to calculate alloy multipliers and equipment probabilities
                  before crafting has saved me so many resources. The site is well-maintained, fast,
                  and the information is always accurate. Highly recommend to all players!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq">
        <div class="container">
          <div class="faq-content">
            <h2 class="section-title">The Forge Game Frequently Asked Questions</h2>
            <div class="faq-list">
              <div class="faq-item">
                <h3>What is The Forge Game?</h3>
                <p>
                  <strong>The Forge Game</strong> is a skill-based forging game on Roblox where players mine <router-link to="/wiki/ores" class="inline-link">ores</router-link>, craft
                  <router-link to="/wiki/weapons" class="inline-link">weapons</router-link>, and battle enemies. It features a unique forging system, multiple <router-link to="/wiki/races" class="inline-link">races</router-link>
                  with unique buffs, and extensive weapon customization through <router-link to="/wiki/runes" class="inline-link">runes</router-link> and
                  enhancements.
                </p>
              </div>
              <div class="faq-item">
                <h3>How do I use codes in The Forge?</h3>
                <p>
                  Enter the game and click the gear icon (Settings) in the top-left corner. Scroll
                  down to find the Code input box at the bottom of the settings menu. Enter the code
                  (case-sensitive, usually all uppercase) and press Enter/Redeem.
                </p>
              </div>
              <div class="faq-item">
                <h3>What information is available in the Wiki?</h3>
                <p>
                  Our Wiki contains 12 comprehensive categories covering Ores, Weapons, Armor,
                  Pickaxes, Enemies, Locations, Mechanics, NPCs, Potions, Quests, Races, and Runes. Each entry includes detailed stats, images, and practical information.
                </p>
              </div>
              <div class="faq-item">
                <h3>How does the Calculator work?</h3>
                <p>
                  Our calculator helps you plan your weapon or armor builds by calculating alloy
                  multipliers (weighted average), trait activation at 10% and 30% thresholds,
                  equipment type probabilities based on ore combinations, and final damage/defense
                  ranges with quality bonuses.
                </p>
              </div>
              <div class="faq-item">
                <h3>Where can I find guides?</h3>
                <p>
                  Visit our
                  <router-link to="/guides" class="inline-link">Guides section</router-link> for
                  comprehensive tutorials, strategies, and tips. Check out our <router-link to="/guides/the-forge-roblox-beginner-guide" class="inline-link">beginner's guide</router-link> for getting started with <strong>The Forge Game</strong>, or explore our <router-link to="/guides/the-forge-roblox-tomo-cat-quest" class="inline-link">quest walkthroughs</router-link> for completing challenging objectives.
                </p>
              </div>
              <div class="faq-item">
                <h3>How often is the content updated?</h3>
                <p>
                  We regularly update our Wiki, Codes, and Guides sections as new content is
                  released in the game. All codes are manually verified before being added, and wiki
                  entries are updated to reflect the latest game mechanics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Game Link Section -->
      <section class="game-link">
        <div class="container">
          <div class="game-link-grid">
            <div class="game-link-content">
              <p class="eyebrow-label">Play Now</p>
              <h2 class="section-title">Play The Forge Game on Roblox</h2>
              <p class="section-subtitle">
                Ready to start forging? Jump into the game, gather ores, craft weapons, and test your builds in real combat.
              </p>
              <div class="game-link-pills">
                <span class="pill">Live beta</span>
                <span class="pill">Forge & combat</span>
                <span class="pill">Co-op friendly</span>
              </div>
              <ul class="game-link-bullets">
                <li>🌋 Explore Stonewake, Iron Valley, and the Forgotten Kingdom</li>
                <li>⚔️ Craft and enhance weapons with runes & traits</li>
                <li>🛡️ Team up to clear tougher enemies and bosses</li>
              </ul>
              <a
                href="https://www.roblox.com/games/76558904092080/The-Forge-BETA"
                target="_blank"
                class="btn-game-link"
                rel="noopener noreferrer nofollow"
              >
                Play The Forge on Roblox
              </a>
            </div>
            <div class="game-link-visual">
              <img src="/images/link-img.webp" alt="Play The Forge on Roblox" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGuideData } from '../composables/useGuideData'

const router = useRouter()
const { guides, loading: guidesLoading, loadHomeGuidesOnly } = useGuideData()

const isVideoPlaying = ref(false)

const playVideo = () => {
  isVideoPlaying.value = true
}

const closeVideo = () => {
  isVideoPlaying.value = false
}

const goToGuide = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(`/guides${path}`)
}

// 加载首页指南
onMounted(() => {
  loadHomeGuidesOnly()
})

// 首页指南（isHome: true）
const homeGuides = computed(() => {
  return guides.value.slice(0, 3)
})
</script>

<style scoped>
.home-view {
  min-height: 100vh;
}

/* Section Styles - 仅用于首页 */
section {
  padding: 40px 0;
  position: relative;
  z-index: 1;
}

.hero {
  z-index: 2;
}

.section-title {
  font-size: 2.5rem;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 40px;
  color: var(--text);
  font-weight: 700;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 140, 66, 0.3);
  position: relative;
}

.section-subtitle {
  text-align: center;
  color: var(--text-soft);
  font-size: 1rem;
  margin-bottom: 10px;
  line-height: 1.8;
}

/* Shared CTA Buttons */
.btn-hero {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: #1a0a00;
  box-shadow: 0 8px 24px rgba(255, 140, 66, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(255, 140, 66, 0.5);
}

.btn-secondary {
  border: 1px solid rgba(255, 140, 66, 0.5);
  color: var(--text);
  background: rgba(255, 140, 66, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 140, 66, 0.2);
  border-color: var(--accent);
  transform: translateY(-2px);
}

/* Hero Section */
.hero {
  padding: 40px 0;
  position: relative;
  overflow: hidden;
}

/* Master the Forge Section */
.master-forge-section {
  background: linear-gradient(180deg, rgba(30, 20, 10, 0.5), rgba(20, 12, 6, 0.4));
}

.master-forge-section .master-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  padding: 32px;
  border-radius: 20px;
  border: 1px solid rgba(255, 140, 66, 0.25);
  background: rgba(15, 10, 6, 0.75);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
}

.master-forge-section .master-card-text .section-title {
  text-align: left;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 140, 66, 0.2);
}

.master-forge-section .master-card-text .section-subtitle {
  text-align: left;
  margin-bottom: 10px;
}

.master-forge-section .eyebrow-label {
  display: inline-flex;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 140, 66, 0.35);
  background: rgba(255, 140, 66, 0.12);
  color: var(--accent);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.master-forge-section .feature-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0 20px;
}

.master-forge-section .feature-pills .pill {
  padding: 5px 10px;
  border-radius: 12px;
  background: rgba(255, 140, 66, 0.14);
  border: 1px solid rgba(255, 140, 66, 0.25);
  color: var(--text);
  font-size: 0.8rem;
}

.master-forge-section .master-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.master-forge-section .master-card-visual img {
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  aspect-ratio: 5 / 3;
  border: 1px solid rgba(255, 140, 66, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

/* Hero Section */
.hero .hero-background {
  position: relative;
}

.hero .hero-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero .hero-text {
  text-align: left;
}

.hero .badge {
  display: inline-flex;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid rgba(255, 140, 66, 0.4);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--accent);
  margin-bottom: 10px;
  background: rgba(255, 140, 66, 0.1);
  text-transform: uppercase;
  font-weight: 600;
}

.hero .hero-title {
  font-size: 3.5rem;
  color: var(--text);
  margin-bottom: 10px;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hero .hero-subtitle {
  font-size: 1rem;
  color: var(--text-soft);
  margin-bottom: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero .hero-actions {
  display: flex;
  gap: 10px;
  justify-content: left;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.hero .hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
}

.hero .stat {
  padding: 20px;
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  background: rgba(25, 20, 15, 0.6);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.hero .stat:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(255, 140, 66, 0.2);
}

.hero .stat .label {
  font-size: 0.85rem;
  color: var(--text-soft);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero .stat .value {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--accent);
}

.hero .hero-video {
  display: flex;
  justify-content: center;
}

.hero .hero-video .video-player {
  background: rgba(20, 15, 10, 0.9);
  border: 1px solid rgba(255, 140, 66, 0.25);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 600px;
}

.hero .video-thumbnail {
  aspect-ratio: 16 / 9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}

.hero .video-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero .video-thumbnail::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 5, 0, 0.5), rgba(15, 10, 5, 0.7));
  z-index: 1;
  pointer-events: none;
}

.hero .video-mask {
  position: relative;
  z-index: 2;
  border: 1px solid rgba(255, 140, 66, 0.3);
  padding: 30px 40px;
  text-align: center;
  letter-spacing: 0.3em;
  color: rgba(255, 200, 150, 0.8);
  font-size: 0.9rem;
  font-weight: 600;
}

.hero .play-button {
  position: absolute;
  z-index: 2;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 140, 66, 0.9);
  color: #1a0a00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 140, 66, 0.4);
}

.hero .play-button:hover {
  transform: scale(1.1);
  background: rgba(255, 140, 66, 1);
}

.hero .video-iframe {
  position: relative;
  aspect-ratio: 16 / 9;
}

.hero .video-frame {
  width: 100%;
  height: 100%;
  border: none;
}

.hero .close-video {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: background 0.3s ease;
  z-index: 10;
}

.hero .close-video:hover {
  background: rgba(0, 0, 0, 0.9);
}

.hero .video-info {
  padding: 20px;
  border-top: 1px solid rgba(255, 140, 66, 0.15);
  background: rgba(15, 10, 5, 0.5);
}

.hero .video-header {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 0.8rem;
  color: var(--text-soft);
}

.hero .video-header .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 140, 66, 0.6);
}

.hero .video-info p {
  color: var(--text-soft);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* Wiki Categories Section */
.wiki-categories-section {
  background: rgba(25, 20, 15, 0.4);
  border-top: 1px solid rgba(255, 140, 66, 0.1);
  border-bottom: 1px solid rgba(255, 140, 66, 0.1);
}

.wiki-categories-section .wiki-categories-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  margin: 0 auto;
}

.wiki-categories-section .wiki-category-card {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  padding: 0;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.wiki-categories-section .wiki-category-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 8px 24px rgba(255, 140, 66, 0.2);
}

.wiki-categories-section .category-image {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(20, 15, 10, 0.8);
}

.wiki-categories-section .category-image img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.wiki-categories-section .wiki-category-card:hover .category-image img {
  transform: scale(1.05);
}

.wiki-categories-section .category-name {
  padding: 12px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}

/* Latest Guides Section */
.latest-guides {
  background: rgba(25, 20, 15, 0.2);
}

.latest-guides .guides-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 0;
}

.latest-guides .guides-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.latest-guides .guide-preview-card {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.latest-guides .guide-preview-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 15px 35px rgba(255, 140, 66, 0.2);
}

.latest-guides .guide-preview-image {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: rgba(20, 15, 10, 0.8);
}

.latest-guides .guide-preview-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.latest-guides .guide-preview-card:hover .guide-preview-image img {
  transform: scale(1.05);
}

.latest-guides .guide-preview-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.latest-guides .guide-preview-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 12px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.latest-guides .guide-preview-description {
  color: var(--text-soft);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.latest-guides .guide-preview-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.latest-guides .tag-small {
  background: rgba(255, 140, 66, 0.1);
  border: 1px solid rgba(255, 140, 66, 0.3);
  color: var(--accent-soft);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.latest-guides .loading-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-soft);
}

.latest-guides .guides-button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.latest-guides .btn-view-all-guides {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  font-size: 1rem;
  border: 1px solid rgba(255, 140, 66, 0.5);
  color: var(--text);
  background: rgba(255, 140, 66, 0.1);
}

.latest-guides .btn-view-all-guides:hover {
  background: rgba(255, 140, 66, 0.2);
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 140, 66, 0.2);
}

/* Calculator Preview Section */
.calculator-preview {
  background: radial-gradient(circle at 20% 20%, rgba(255, 140, 66, 0.12), transparent 35%),
    radial-gradient(circle at 80% 10%, rgba(255, 200, 150, 0.1), transparent 35%),
    rgba(25, 20, 15, 0.4);
  border-top: 1px solid rgba(255, 140, 66, 0.1);
  border-bottom: 1px solid rgba(255, 140, 66, 0.1);
}

.calculator-preview .calculator-preview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.calculator-preview .calculator-preview-text {
  text-align: left;
}

.calculator-preview .calc-eyebrow {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 140, 66, 0.35);
  background: rgba(255, 140, 66, 0.12);
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.calculator-preview .calculator-preview-text .section-title {
  text-align: left;
  margin-bottom: 10px;
}

.calculator-preview .calculator-preview-text .section-subtitle {
  text-align: left;
  margin-bottom: 10px;
  max-width: 640px;
}

.calculator-preview .calculator-features-compact {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 20px;
  padding: 24px;
  background: rgba(20, 15, 10, 0.5);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.calculator-preview .feature-item-compact {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.calculator-preview .feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255, 140, 66, 0.2), rgba(255, 140, 66, 0.1));
  border: 1px solid rgba(255, 140, 66, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  transition: all 0.3s ease;
}

.calculator-preview .feature-item-compact:hover .feature-icon {
  transform: translateY(-2px);
  border-color: rgba(255, 140, 66, 0.5);
  box-shadow: 0 4px 12px rgba(255, 140, 66, 0.2);
}

.calculator-preview .feature-content h4 {
  margin: 0 0 6px 0;
  color: var(--text);
  font-size: 1rem;
  font-weight: 600;
}

.calculator-preview .feature-content p {
  margin: 0;
  color: var(--text-soft);
  line-height: 1.5;
  font-size: 0.85rem;
}

.calculator-preview .calculator-preview-image {
  display: flex;
  justify-content: center;
}

.calculator-preview .calculator-image {
  width: 100%;
  aspect-ratio: 5/3;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 140, 66, 0.2);
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);
}

.calculator-preview .calculator-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}


.calculator-preview:hover .calculator-image {
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 12px 32px rgba(255, 140, 66, 0.2);
}

.wiki-category-card.view-all {
  border: 2px dashed rgba(255, 140, 66, 0.3);
  background: rgba(255, 140, 66, 0.05);
}

.wiki-category-card.view-all:hover {
  border-color: rgba(255, 140, 66, 0.5);
  background: rgba(255, 140, 66, 0.1);
}

.wiki-category-card.view-all .category-image {
  opacity: 0.7;
}

.wiki-category-card.view-all:hover .category-image {
  opacity: 1;
}

.category-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  padding: 12px;
  text-align: center;
}

.inline-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 140, 66, 0.3);
  transition: all 0.3s ease;
}

.inline-link:hover {
  color: var(--accent-soft);
  border-bottom-color: var(--accent);
  text-shadow: 0 0 8px rgba(255, 140, 66, 0.5);
}

/* Latest Updates Section - Guide Cards */

.updates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.guide-card {
  background: rgba(25, 20, 15, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(255, 140, 66, 0.2);
  padding: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}

.guide-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 15px 35px rgba(255, 140, 66, 0.2);
}

.guide-card:hover::before {
  opacity: 1;
}

.guide-image-container {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(20, 15, 10, 0.8);
  position: relative;
}

.guide-image-placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background: rgba(30, 25, 20, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  transition: transform 0.3s ease;
}

.guide-card:hover .guide-image-placeholder {
  transform: scale(1.05);
}

.guide-card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.guide-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.guide-description {
  color: var(--text-soft);
  line-height: 1.6;
  margin-bottom: 12px;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.tag {
  background: transparent;
  border: 1px solid rgba(255, 140, 66, 0.3);
  color: var(--text-soft);
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.guide-card:hover .tag {
  border-color: rgba(255, 140, 66, 0.6);
  color: var(--accent);
}

.guide-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 140, 66, 0.1);
  margin-top: auto;
}

.update-date {
  color: var(--text-soft);
  font-size: 0.85rem;
}

.view-link {
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.guide-card:hover .view-link {
  color: var(--accent-soft);
  text-shadow: 0 0 8px rgba(255, 140, 66, 0.6);
}

/* Featured Tools Section */

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.tool-card {
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.tool-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent);
  box-shadow: 0 12px 32px rgba(255, 140, 66, 0.3);
}

.tool-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.tool-card h3 {
  color: var(--accent);
  margin-bottom: 12px;
  font-size: 1.3rem;
}

.tool-card p {
  color: var(--text-soft);
  margin-bottom: 20px;
  line-height: 1.6;
}

.tool-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.tool-link:hover {
  color: var(--accent-soft);
}

/* Key Features Section */

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.feature-item {
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-item:hover {
  border-color: var(--accent);
  box-shadow: 0 4px 16px rgba(255, 140, 66, 0.2);
  transform: translateY(-2px);
}

.feature-item h3 {
  color: var(--accent);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.feature-item p {
  color: var(--text-soft);
  line-height: 1.6;
}

/* Player Reviews Section */
.player-reviews .reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.player-reviews .review-card {
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.player-reviews .review-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.player-reviews .review-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: #1a0a00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  flex-shrink: 0;
}

.player-reviews .review-author-info {
  flex: 1;
}

.player-reviews .review-author {
  color: var(--text);
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 4px 0;
}

.player-reviews .review-stars {
  color: var(--accent-gold);
  font-size: 0.9rem;
  margin: 0;
}

.player-reviews .review-text {
  color: var(--text-soft);
  margin: 0;
  line-height: 1.6;
  font-style: italic;
}

/* FAQ Section */
.faq .faq-list {
  margin: 40px auto 0;
}

.faq .faq-item {
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.faq .faq-item:hover {
  border-color: var(--accent);
  box-shadow: 0 4px 16px rgba(255, 140, 66, 0.15);
}

.faq .faq-item h3 {
  color: var(--accent);
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.faq .faq-item p {
  color: var(--text-soft);
  line-height: 1.6;
}

/* Game Link Section */
.game-link {
  padding: 90px 0;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 20% 30%, rgba(255, 140, 66, 0.12), transparent 35%),
    radial-gradient(circle at 80% 10%, rgba(255, 200, 150, 0.1), transparent 35%),
    rgba(20, 14, 10, 0.55);
  border-top: 1px solid rgba(255, 140, 66, 0.1);
}

.game-link::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(255, 140, 66, 0.08), transparent 45%, rgba(255, 200, 150, 0.06));
}

.game-link .game-link-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: center;
  background: rgba(12, 8, 6, 0.65);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}

.game-link .game-link-content {
  text-align: left;
}

.game-link .game-link-content .section-title {
  margin-bottom: 10px;
}

.game-link .game-link-content .section-subtitle {
  margin-bottom: 10px;
}

.game-link .game-link-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 16px;
}

.game-link .game-link-pills .pill {
  padding: 5px 10px;
  border-radius: 10px;
  background: rgba(255, 140, 66, 0.12);
  border: 1px solid rgba(255, 140, 66, 0.25);
  color: var(--text);
  font-size: 0.7rem;
  font-weight: 600;
}

.game-link .game-link-bullets {
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
  display: grid;
  gap: 10px;
}

.game-link .game-link-bullets li {
  color: var(--text-soft);
  font-size: 0.8rem;
  line-height: 1.5;
}

.game-link .btn-game-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 30px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: #1a0a00;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(255, 140, 66, 0.4);
  position: relative;
  overflow: hidden;
}

.game-link .btn-game-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.game-link .btn-game-link:hover::before {
  left: 100%;
}

.game-link .btn-game-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(255, 140, 66, 0.5);
}

.game-link .btn-game-link::after {
  content: '→';
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.game-link .btn-game-link:hover::after {
  transform: translateX(4px);
}

.game-link .game-link-visual {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 140, 66, 0.2);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);
}

.game-link .game-link-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 5 / 3;
}

.game-link .game-link-visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.35));
  pointer-events: none;
}

/* 响应式样式 */
@media (max-width: 1024px) {
  /* Hero Section */
  .hero .hero-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  /* Master the Forge Section */
  .master-forge-section .master-card {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 24px;
  }

  .master-forge-section .master-card-visual {
    order: -1;
  }

  /* Wiki Categories Section */
  .wiki-categories-section .wiki-categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Latest Guides Section */
  .latest-guides .guides-preview-grid.guides-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Calculator Preview Section */
  .calculator-preview .calculator-preview-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .calculator-preview .calculator-features-compact {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Game Link Section */
  .game-link .game-link-grid {
    grid-template-columns: 1fr;
  }

  /* Other Sections */
  .updates-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .quick-access-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  /* Hero Section */
  .hero .hero-text {
    text-align: center;
  }

  .hero .hero-title {
    font-size: 2.5rem;
  }

  .hero .hero-subtitle {
    font-size: 1rem;
  }

  .hero .hero-actions {
    flex-direction: column;
  }

  .hero .btn-hero {
    width: 100%;
  }

  .hero .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero .hero-video {
    order: -1;
  }

  /* Master the Forge Section */
  .master-forge-section .master-card-text .section-title,
  .master-forge-section .master-card-text .section-subtitle {
    text-align: center;
  }

  /* Wiki Categories Section */
  .wiki-categories-section .wiki-categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .wiki-categories-section .category-name {
    font-size: 0.8rem;
  }

  /* Latest Guides Section */
  .latest-guides .guides-preview-grid.guides-grid-3 {
    grid-template-columns: 1fr;
  }

  /* Calculator Preview Section */
  .calculator-preview .calculator-preview-text {
    text-align: center;
  }

  .calculator-preview .calculator-preview-text .section-title,
  .calculator-preview .calculator-preview-text .section-subtitle {
    text-align: center;
  }

  .calculator-preview .calculator-features-compact {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }

  /* Game Link Section */
  .game-link .game-link-grid {
    grid-template-columns: 1fr;
    padding: 28px 20px;
  }

  .game-link .game-link-visual {
    order: -1;
  }

  /* Player Reviews Section */
  .player-reviews .reviews-grid {
    grid-template-columns: 1fr;
  }

  /* FAQ Section */
  .faq .faq-list {
    max-width: 100%;
  }

  /* Other Sections */
  .master-forge-item {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .quick-access-grid {
    grid-template-columns: 1fr;
  }
}
</style>
