<template>
  <div class="wiki-view">
    <!-- Header Section -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">The Forge Roblox Wiki Database</h1>
          <p class="page-subtitle">
            Your comprehensive <strong>The Forge Roblox Wiki</strong> guide to everything in The Forge. Learn about <router-link to="/wiki/ores" class="inline-link">ores</router-link>, <router-link to="/wiki/weapons" class="inline-link">weapons</router-link>, <router-link to="/wiki/armor" class="inline-link">armor</router-link>, enemies, locations, and all game mechanics.
          </p>
        </div>
      </div>
    </section>

    <!-- Wiki Categories -->
    <section class="articles-section">
      <div class="container">
        <!-- Section Title -->
        <h2 class="section-title">Wiki Categories</h2>
        
        <!-- Categories Grid -->
        <div class="articles-grid">
          <router-link
            to="/wiki/ores"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/ores-image.webp" alt="Ores" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Ores</h3>
              <p class="card-description">Complete guide to all ores in The Forge. Learn about ore types, properties, and where to find them.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/weapons"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/weapons-image.webp" alt="Weapons" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Weapons</h3>
              <p class="card-description">Complete guide to all weapons in The Forge. Learn about weapon types, stats, crafting requirements, and best weapon builds.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/armor"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/armors-image.webp" alt="Armor" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Armor</h3>
              <p class="card-description">Complete guide to all armor in The Forge. Learn about armor types, stats, and crafting requirements.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/pickaxes"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/pickaxes-image.webp" alt="Pickaxes" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Pickaxes</h3>
              <p class="card-description">Complete guide to all pickaxes in The Forge. Learn about pickaxe types, mining efficiency, and crafting requirements.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/enemies"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/enemies-image.webp" alt="Enemies" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Enemies</h3>
              <p class="card-description">Complete guide to all enemies in The Forge. Learn about enemy types, stats, and strategies to defeat them.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/locations"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/locations-image.webp" alt="Locations" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Locations</h3>
              <p class="card-description">Complete guide to all locations in The Forge. Learn about different areas, their features, and what to expect.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/mechanics"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/mechanics-image.webp" alt="Mechanics" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Mechanics</h3>
              <p class="card-description">Complete guide to all game mechanics in The Forge. Learn how different systems work and how to master them.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/npcs"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/npcs-image.webp" alt="NPCs" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">NPCs</h3>
              <p class="card-description">Complete guide to all NPCs in The Forge. Learn about different NPCs, their roles, and what services they provide.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/potions"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/potions-image.webp" alt="Potions" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Potions</h3>
              <p class="card-description">Complete guide to all potions in The Forge. Learn about different potion types, effects, and how to craft them.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/quests"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/quests-image.webp" alt="Quests" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Quests</h3>
              <p class="card-description">Complete guide to all quests in The Forge. Learn about different quest types, objectives, and rewards.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/races"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/races-image.webp" alt="Races" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Races</h3>
              <p class="card-description">Complete guide to all races in The Forge. Learn about different race types, their abilities, and bonuses.</p>
            </div>
          </router-link>

          <router-link
            to="/wiki/runes"
            class="article-card"
          >
            <div class="card-image-container">
              <img src="/images/wiki/runes-image.webp" alt="Runes" class="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">Runes</h3>
              <p class="card-description">Complete guide to all runes in The Forge. Learn about different rune types, their effects, and how to use them.</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="info-section">
      <div class="container">
          <h2 class="info-title">About The Forge Roblox Wiki</h2>
        <div class="info-content">
          <p>
            Welcome to <strong>The Forge Roblox Wiki</strong>, your ultimate comprehensive guide to everything in The Forge game on Roblox. Our <strong>The Forge Roblox Wiki</strong> serves as a centralized knowledge base, constantly updated with the latest information about ores, weapons, armor, enemies, locations, game mechanics, and all aspects of the game world. Whether you're looking for <router-link to="/" class="inline-link">codes</router-link>, <router-link to="/calculator" class="inline-link">build calculators</router-link>, or detailed item databases, this wiki has you covered.
          </p>
          <p>
            Whether you're a new player looking to understand the basics of forging and combat, or an experienced forger seeking advanced strategies and optimization tips, <strong>The Forge Roblox Wiki</strong> has something for everyone. We've organized thousands of pieces of information into easily navigable categories, making it simple to find exactly what you need to enhance your gameplay experience. Check out our <router-link to="/guides" class="inline-link">guides section</router-link> for step-by-step tutorials and strategies.
          </p>

          <h3 class="info-subtitle">What You'll Find Here</h3>
          <p>
            Our wiki is organized into <strong>12 main categories</strong>, each containing detailed information about specific aspects of The Forge:
          </p>
          <ul class="info-list">
            <li><strong>Ores</strong> - Complete guide to all ore types, their properties, rarity, and where to find them. Learn about common and rare ores, their uses in forging, and optimal mining strategies. Explore our <router-link to="/wiki/ores" class="inline-link">ores database</router-link> for detailed information.</li>
            <li><strong>Weapons</strong> - Extensive database of all weapons including swords, axes, and more. Find detailed stats, crafting requirements, damage values, and the best weapon builds for different playstyles. Browse our <router-link to="/wiki/weapons" class="inline-link">weapons collection</router-link> to plan your next build.</li>
            <li><strong>Armor</strong> - Comprehensive information about all armor types, from light to heavy armor. Discover defense stats, crafting materials, and optimal armor combinations for maximum protection.</li>
            <li><strong>Pickaxes</strong> - Guide to all mining tools, their efficiency ratings, durability, and upgrade paths. Learn which pickaxes are best for different ore types and mining locations.</li>
            <li><strong>Enemies</strong> - Detailed information about all enemies and bosses in the game. Find their stats, attack patterns, weaknesses, loot drops, and strategies to defeat them.</li>
            <li><strong>Locations</strong> - Complete map guide covering all areas in The Forge. Learn about safe zones, dangerous areas, resource locations, and what to expect in each region.</li>
            <li><strong>Mechanics</strong> - In-depth explanations of all game systems including crafting, combat, forging, and more. Master the game's core mechanics with our detailed guides.</li>
            <li><strong>NPCs</strong> - Information about all non-player characters, their roles, services, and quests. Find merchants, quest givers, and other important NPCs throughout the game world.</li>
            <li><strong>Potions</strong> - Complete guide to all potions, their effects, crafting recipes, and optimal usage strategies. Learn about healing potions, buff potions, and their durations.</li>
            <li><strong>Quests</strong> - Walkthroughs for all quests including tutorial quests and main storylines. Find objectives, rewards, and tips for completing every quest in the game.</li>
            <li><strong>Races</strong> - Detailed information about all playable races, their unique abilities, bonuses, and special traits. Learn which race is best for your preferred playstyle.</li>
            <li><strong>Runes</strong> - Comprehensive guide to all runes, their effects, activation requirements, and combinations. Discover elemental runes, defensive runes, and how to maximize their potential.</li>
          </ul>

          <h3 class="info-subtitle">Key Features</h3>
          <div class="info-features">
            <div class="feature-item">
              <div class="feature-icon">📚</div>
              <div class="feature-content">
                <h3>Comprehensive Database</h3>
                <p>Our wiki contains complete information about all items, enemies, locations, NPCs, and mechanics in The Forge. Every entry includes detailed descriptions, stats, images, and practical information to help you make informed decisions in-game.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🔄</div>
              <div class="feature-content">
                <h3>Regular Updates</h3>
                <p>We actively monitor game updates, patches, and new content releases to ensure our wiki stays current and accurate. Our team regularly verifies information and adds new entries as soon as new content becomes available.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🎯</div>
              <div class="feature-content">
                <h3>Easy Navigation</h3>
                <p>Our wiki is organized into clear, logical categories with intuitive navigation. Each category page displays items in organized tables grouped by type, making it easy to find exactly what you're looking for quickly.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">📖</div>
              <div class="feature-content">
                <h3>Detailed Guides</h3>
                <p>Every wiki article includes in-depth information with visual previews, detailed stats, crafting requirements, location data, and practical strategies. We provide not just data, but actionable insights to improve your gameplay.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🖼️</div>
              <div class="feature-content">
                <h3>Visual Previews</h3>
                <p>Each item, enemy, and location entry includes high-quality images and visual previews, helping you identify items in-game and understand their appearance before you encounter them.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <div class="feature-content">
                <h3>Fast Loading</h3>
                <p>Our wiki is optimized for fast loading times and smooth navigation. Whether you're on desktop or mobile, you'll have quick access to all the information you need without delays.</p>
              </div>
            </div>
          </div>

          <h3 class="info-subtitle">How to Use The Forge Roblox Wiki</h3>
          <p>
            Getting started with <strong>The Forge Roblox Wiki</strong> is simple:
          </p>
          <ol class="info-list">
            <li><strong>Browse Categories</strong> - Start by clicking on any category card above that interests you. Each category contains all related items organized in easy-to-read tables.</li>
            <li><strong>View Item Details</strong> - Click on any item in a category table to view its detailed information page, including full descriptions, stats, images, and additional context.</li>
            <li><strong>Use Type Filters</strong> - Each category page groups items by type (e.g., Common/Rare ores, Light/Heavy armor). Use these groupings to quickly find items of a specific type.</li>
            <li><strong>Explore Related Content</strong> - On each detail page, you'll find links to related items and content, helping you discover new information and connections.</li>
            <li><strong>Check Back Regularly</strong> - As the game evolves, so does our wiki. Check back frequently for new entries, updated information, and expanded guides.</li>
          </ol>

          <h3 class="info-subtitle">Our Commitment</h3>
          <p>
            We are committed to providing the most accurate, comprehensive, and up-to-date information about The Forge in <strong>The Forge Roblox Wiki</strong>. Our team of dedicated editors and researchers works tirelessly to ensure that every piece of information is verified and current. We understand how important reliable information is for your gaming experience, and we take that responsibility seriously. For additional resources, visit our <router-link to="/" class="inline-link">homepage</router-link> to access codes, calculators, and more.
          </p>
          <p>
            If you notice any outdated information, errors, or have suggestions for improvements, we encourage you to reach out to us. Your feedback helps us maintain the quality and accuracy of this resource for the entire The Forge community.
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
              <h3>How is the wiki organized?</h3>
            </div>
            <div class="faq-answer">
              <p>
                The wiki is organized into <strong>12 main categories</strong>: Ores, Weapons, Armor, Pickaxes, Enemies, Locations, Mechanics, NPCs, Potions, Quests, Races, and Runes. Each category contains detailed information about related items and topics.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>How often is the wiki updated?</h3>
            </div>
            <div class="faq-answer">
              <p>
                We strive to update the wiki as soon as new content is released in the game. Our team regularly monitors game updates, patches, and new releases to ensure all information is current and accurate.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>Can I contribute to the wiki?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Currently, the wiki is maintained by our team. However, if you notice any outdated information or have suggestions for improvements, please feel free to reach out to us through our contact channels.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>What information is available in each wiki article?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Each wiki article typically includes:
              </p>
              <ul>
                <li>Detailed description and overview</li>
                <li>Visual previews and images</li>
                <li>Stats and properties (where applicable)</li>
                <li>Crafting requirements (for items)</li>
                <li>Location information (for enemies and locations)</li>
                <li>Tips and strategies</li>
              </ul>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>How do I navigate to a specific wiki category?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Simply click on any category card on this page to view all items in that category. Each category page displays items in organized tables, grouped by type. Click on any item to view its detailed information page.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span class="faq-icon">Q</span>
              <h3>What if I can't find what I'm looking for?</h3>
            </div>
            <div class="faq-answer">
              <p>
                If you can't find the information you need, try browsing through related categories. Some items may be cross-referenced in multiple categories. You can also use the search functionality (if available) or check back later as we continue to expand our wiki content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 第一层页面：显示所有wiki分类
</script>

<style scoped>
.wiki-view {
  min-height: 100vh;
}


.articles-section {
  padding: 0 0 80px 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 40px 0;
  text-align: center;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin: 0 auto;
}

.article-card {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}

.article-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 15px 35px rgba(255, 140, 66, 0.2);
}

.card-image-container {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(20, 15, 10, 0.8);
}

.card-image {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .card-image {
  transform: scale(1.05);
}


.card-content {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.card-description {
  font-size: 0.9rem;
  color: var(--text-soft);
  text-align: center;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .articles-section {
    padding: 0 0 40px 0;
  }

  .section-title {
    font-size: 1.75rem;
    margin-bottom: 30px;
  }

  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .card-title {
    font-size: 1rem;
    padding: 12px 12px 6px;
  }

  .card-description {
    font-size: 0.85rem;
    padding: 0 12px 12px;
  }
}

/* Info Section */
.info-section {
  margin-top: 60px;
  padding: 40px 0;
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
  color: var(--text-soft);
  line-height: 1.6;
  margin: 0 auto;
}

.info-content > p {
  margin: 0 0 20px 0;
  font-size: 1rem;
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
  margin: 20px 0;
  padding-left: 24px;
  color: var(--text-soft);
  line-height: 1.8;
}

.info-list li {
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.info-list strong {
  color: var(--accent);
  font-weight: 600;
}

.info-content ol {
  margin: 20px 0;
  padding-left: 24px;
  color: var(--text-soft);
  line-height: 1.8;
}

.info-content ol li {
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.info-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 32px;
}

.feature-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  border-color: rgba(255, 140, 66, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 140, 66, 0.1);
}

.feature-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 8px 0;
}

.feature-content p {
  font-size: 0.9rem;
  color: var(--text-soft);
  margin: 0;
  line-height: 1.5;
}

/* FAQ Section */
.faq-section {
  margin-top: 60px;
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

.faq-answer ul,
.faq-answer ol {
  margin: 12px 0;
  padding-left: 24px;
  color: var(--text-soft);
}

.faq-answer li {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 8px;
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

  .info-list,
  .info-content ol {
    padding-left: 20px;
    margin: 16px 0;
  }

  .info-list li,
  .info-content ol li {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }

  .info-features {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;
  }

  .feature-item {
    padding: 16px;
    gap: 12px;
  }

  .feature-icon {
    font-size: 1.5rem;
  }

  .feature-content h3 {
    font-size: 1rem;
  }

  .feature-content p {
    font-size: 0.85rem;
  }

  .faq-section {
    margin-top: 40px;
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

  .faq-answer li {
    font-size: 0.85rem;
  }
}
</style>

