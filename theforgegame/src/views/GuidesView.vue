<template>
  <div class="guides-view page-container">
    <!-- Guide Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">The Forge Roblox Strategy Guides & Walkthroughs</h1>
          <p class="page-subtitle">
            From beginner tips to endgame builds. Explore our collection of <strong>The Forge Roblox Guides</strong> on leveling, farming, and boss mechanics to master the game. Check out our <router-link to="/wiki" class="inline-link">wiki</router-link> for detailed game information.
          </p>
        </div>
      </div>
    </section>

    <!-- Guide List -->
    <section class="guides-section">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>Loading guides...</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>Error loading guides: {{ error }}</p>
        </div>
        
        <!-- All Guides -->
        <div class="guides-grid" v-if="!loading && !error && allGuides.length > 0">
          <div 
            v-for="guide in allGuides" 
            :key="guide.id" 
            class="guide-card"
            @click="goToGuide(guide.addressBar)"
          >
            <div class="guide-image-container" v-if="guide.imageUrl">
              <img 
                :src="guide.imageUrl" 
                :alt="guide.imageAlt || guide.title" 
                class="guide-image"
                loading="lazy"
              />
            </div>
            <div class="guide-card-content">
              <h3 class="guide-title">{{ guide.title }}</h3>
              <p class="guide-description">{{ guide.description }}</p>
              <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="guide-footer">
                <span class="update-date">{{ formatDate(guide.publishDate) }}</span>
                <span class="view-link">Read More →</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="!loading && !error && allGuides.length === 0" class="empty-state">
          <p>No guides available yet. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="info-section">
      <div class="container">
        <h2 class="info-title">About The Forge Roblox Guides</h2>
        <div class="info-content">
          <p>
            Welcome to <strong>The Forge Roblox Guides</strong>, your comprehensive resource for mastering The Forge game on Roblox. Our collection of <strong>The Forge Roblox Guides</strong> covers everything from beginner basics to advanced strategies, helping players at all skill levels improve their gameplay and achieve their goals faster.
          </p>
          <p>
            Whether you're just starting out and need help with the tutorial, or you're a veteran looking for optimization tips, <strong>The Forge Roblox Guides</strong> provide step-by-step walkthroughs, proven strategies, and expert insights. Each guide is carefully crafted to be clear, actionable, and up-to-date with the latest game mechanics.
          </p>

          <h3 class="info-subtitle">What You'll Find in Our Guides</h3>
          <ul class="info-list">
            <li><strong>Beginner Guides</strong> - Perfect for new players. Learn the fundamentals of forging, combat, mining, and progression. Our <router-link to="/guides/the-forge-roblox-beginner-guide" class="inline-link">beginner's guide</router-link> covers everything you need to get started in The Forge Game.</li>
            <li><strong>Quest Walkthroughs</strong> - Complete step-by-step solutions for all quests, including hidden objectives and secret rewards. Check out our <router-link to="/guides/the-forge-roblox-tomo-cat-quest" class="inline-link">quest guides</router-link> for detailed walkthroughs.</li>
            <li><strong>Farming Strategies</strong> - Learn the most efficient ways to farm resources, gold, and experience. Discover optimal mining locations and enemy farming routes.</li>
            <li><strong>Build Guides</strong> - Master weapon and armor builds. Learn which <router-link to="/wiki/weapons" class="inline-link">weapons</router-link> and <router-link to="/wiki/armor" class="inline-link">armor</router-link> combinations work best for different playstyles.</li>
            <li><strong>Advanced Tactics</strong> - Deep dives into game mechanics, optimization strategies, and endgame content for experienced players.</li>
          </ul>

          <h3 class="info-subtitle">How to Use The Forge Roblox Guides</h3>
          <ol class="info-list">
            <li><strong>Browse by Topic</strong> - Use the guide cards above to find guides relevant to your current needs. Each guide is tagged with relevant topics for easy discovery.</li>
            <li><strong>Follow Step-by-Step</strong> - Our guides are designed to be followed sequentially. Read through the entire guide first, then follow the steps in order.</li>
            <li><strong>Use Our Wiki</strong> - Cross-reference our <router-link to="/wiki" class="inline-link">wiki database</router-link> for detailed information about items, enemies, and mechanics mentioned in the guides.</li>
            <li><strong>Check the Calculator</strong> - Use our <router-link to="/calculator" class="inline-link">build calculator</router-link> to plan your equipment before following crafting guides.</li>
            <li><strong>Stay Updated</strong> - Check back regularly as we add new guides and update existing ones to reflect game changes.</li>
          </ol>

          <h3 class="info-subtitle">Our Commitment</h3>
          <p>
            We are committed to providing the most accurate, helpful, and up-to-date <strong>The Forge Roblox Guides</strong> possible. Our team regularly tests strategies, verifies information, and updates guides to ensure they remain relevant as the game evolves. We understand that your time is valuable, and we strive to make every guide as efficient and effective as possible.
          </p>
          <p>
            For additional resources, visit our <router-link to="/" class="inline-link">homepage</router-link> to access codes, calculators, and the complete wiki database. If you have suggestions for new guides or improvements to existing ones, we'd love to hear from you.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="faq-title">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>What topics do The Forge Roblox Guides cover?</h3>
            </div>
            <div class="faq-answer">
              <p>
                <strong>The Forge Roblox Guides</strong> cover a wide range of topics including beginner tutorials, quest walkthroughs, farming strategies, build optimization, combat mechanics, and advanced tactics. Whether you need help with the basics or want to master endgame content, we have guides to help you succeed.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>How often are the guides updated?</h3>
            </div>
            <div class="faq-answer">
              <p>
                We update <strong>The Forge Roblox Guides</strong> regularly to reflect game changes, new content, and improved strategies. When major updates are released, we review and update all relevant guides to ensure accuracy. Check back frequently for the latest information.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>Are the guides suitable for beginners?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Yes! Many of <strong>The Forge Roblox Guides</strong> are specifically designed for beginners. Our beginner guides start from the very basics and gradually introduce more advanced concepts. Even experienced players can find useful tips and strategies in our guides. Check out our <router-link to="/guides/the-forge-roblox-beginner-guide" class="inline-link">beginner's guide</router-link> to get started.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>Can I use the guides with the wiki and calculator?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Absolutely! <strong>The Forge Roblox Guides</strong> work perfectly with our other resources. Use our <router-link to="/wiki" class="inline-link">wiki</router-link> to look up detailed information about items and mechanics mentioned in guides. Use our <router-link to="/calculator" class="inline-link">calculator</router-link> to plan builds before following crafting guides. All our tools are designed to work together seamlessly.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>Do the guides include quest solutions?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Yes! <strong>The Forge Roblox Guides</strong> include comprehensive quest walkthroughs with step-by-step instructions, hidden objectives, and reward information. Our quest guides cover everything from tutorial quests to complex side quests like the <router-link to="/guides/the-forge-roblox-tomo-cat-quest" class="inline-link">Lost Cat quest</router-link>.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>How do I find a specific guide?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Browse the guide cards above to see all available <strong>The Forge Roblox Guides</strong>. Each guide has tags indicating its topics, making it easy to find guides relevant to your needs. You can also use the search functionality if available, or visit our <router-link to="/" class="inline-link">homepage</router-link> to see featured guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGuideData } from '../composables/useGuideData'

const router = useRouter()
const { guides, loading, error, loadData } = useGuideData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 所有指南
const allGuides = computed(() => {
  return guides.value || []
})

const goToGuide = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(`/guides${path}`)
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return `Updated ${date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })}`
}
</script>

<style scoped>
.guides-view {
  min-height: 100vh;
  padding-bottom: 80px;
}

.guides-section {
  padding: 0 0 80px 0;
}

.loading-state,
.error-state,
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-soft);
}

.error-state {
  color: #ff6b6b;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.guide-card {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  padding: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}

.guide-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 15px 35px rgba(255, 140, 66, 0.2);
}

.guide-image-container {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(20, 15, 10, 0.8);
}

.guide-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.guide-card:hover .guide-image {
  transform: scale(1.05);
}

.guide-card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.guide-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 12px 0;
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
  line-height: 1.5;
  margin: 0 0 16px 0;
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
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  background: rgba(255, 140, 66, 0.1);
  border: 1px solid rgba(255, 140, 66, 0.3);
  color: var(--accent-soft);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.guide-card:hover .tag {
  border-color: rgba(255, 140, 66, 0.5);
  background: rgba(255, 140, 66, 0.15);
}

.guide-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 140, 66, 0.1);
  margin-top: auto;
}

.update-date {
  color: var(--text-soft);
  font-size: 0.85rem;
}

.view-link {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.guide-card:hover .view-link {
  color: var(--accent-soft);
  transform: translateX(4px);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .guides-section {
    padding: 0 0 40px 0;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .guide-card-content {
    padding: 16px;
  }

  .guide-title {
    font-size: 1.1rem;
  }

  .guide-description {
    font-size: 0.9rem;
  }

  .tag {
    font-size: 0.75rem;
    padding: 3px 10px;
  }

  .update-date,
  .view-link {
    font-size: 0.8rem;
  }
}

/* About Section */
.info-section {
  margin-top: 60px;
  padding: 40px 0 60px;
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

.info-content ol {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  counter-reset: step-counter;
}

.info-content ol li {
  font-size: 0.95rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 16px;
  padding-left: 32px;
  position: relative;
  counter-increment: step-counter;
}

.info-content ol li::before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: #1a0a00;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.85rem;
}

/* FAQ Section */
.faq-section {
  margin-top: 40px;
  padding: 40px 0 80px;
}

.faq-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 32px 0;
  padding-bottom: 16px;
  border-bottom: 2px solid rgba(255, 140, 66, 0.3);
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
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
  gap: 16px;
  padding: 20px;
  background: rgba(255, 140, 66, 0.1);
  cursor: pointer;
}

.faq-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent);
  color: #1a0a00;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}

.faq-answer {
  padding: 20px 20px 20px 72px;
}

.faq-answer p {
  font-size: 0.95rem;
  color: var(--text-soft);
  margin: 0 0 12px 0;
  line-height: 1.6;
}

.faq-answer p:last-child {
  margin-bottom: 0;
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

/* 移动端响应式 */
@media (max-width: 768px) {
  .info-section {
    margin-top: 40px;
    padding: 30px 0;
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

  .info-list li,
  .info-content ol li {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }

  .faq-section {
    margin-top: 32px;
    padding: 30px 0 40px;
  }

  .faq-title {
    font-size: 1.5rem;
    margin-bottom: 24px;
    padding-bottom: 12px;
  }

  .faq-list {
    gap: 16px;
  }

  .faq-question {
    padding: 16px;
    gap: 12px;
  }

  .faq-icon {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  .faq-question h3 {
    font-size: 1rem;
  }

  .faq-answer {
    padding: 16px 16px 16px 56px;
  }

  .faq-answer p {
    font-size: 0.85rem;
  }
}
</style>
