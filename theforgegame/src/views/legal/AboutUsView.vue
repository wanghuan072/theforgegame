<template>
  <div class="legal-page page-container">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">About Us</h1>
        <p class="page-date">Last Updated: December 9, 2025</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>Welcome to The Forge Game Community</h2>
            <p>
              The Forge Game Community is an unofficial community resource dedicated to The Forge game on Roblox. We are passionate fans who have created this website to help fellow players master the game.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide comprehensive, accurate, and up-to-date information about The Forge game. We archive game mechanics, item stats, codes, and strategies so players can improve their gaming experience and achieve their goals.
            </p>

            <h2>What We Offer</h2>
            <p>
              We provide a wide range of resources including:
            </p>
            <ul>
              <li>Comprehensive game guides and strategies</li>
              <li>Detailed wiki with game mechanics and features</li>
              <li>Complete database of ores, weapons, armor, and items</li>
              <li>Working codes and rewards</li>
              <li>Interactive calculator for crafting and planning</li>
              <li>Community-driven content and updates</li>
            </ul>

            <h2>Our Commitment</h2>
            <p>
              We are committed to maintaining the accuracy and quality of our content. Our team regularly updates information based on game updates, community feedback, and verified gameplay data.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The Forge Game Community is an independent, fan-operated website. We are not affiliated with, endorsed by, or connected to the official game developers. All game-related content is used for informational purposes only.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions, suggestions, or feedback, please feel free to contact us at <a href="mailto:wyong@theforgegame.com">wyong@theforgegame.com</a>. We appreciate your support and contributions to The Forge community.
            </p>

            <h2>Thank You</h2>
            <p>
              Thank you for visiting The Forge Game Community. We hope our resources help you master the art of forging and achieve greatness in The Forge!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '../../seo/composables.js'

const { setSEO } = useSEO()

setSEO({
  title: 'About Us - The Forge Game - theforgegame.com',
  description: 'Learn about The Forge Game Community, an unofficial community resource for The Forge game. Discover our mission, what we offer, and how we help players.',
  keywords: 'about The Forge Game Community, The Forge game community, The Forge resources, The Forge fan site'
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-header {
  padding: 60px 0 40px;
  background: linear-gradient(180deg, rgba(25, 20, 15, 0.4), transparent);
}

.page-title {
  font-size: 3rem;
  margin: 0 0 16px;
  color: var(--text);
  font-weight: 700;
  text-align: center;
}

.page-date {
  text-align: center;
  color: var(--text-soft);
  font-size: 0.9rem;
  margin: 0;
}

.legal-content {
  padding: 40px 0 80px;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.legal-text {
  color: var(--text-soft);
  line-height: 1.8;
}

.legal-text h2 {
  font-size: 1.8rem;
  color: var(--text);
  margin: 40px 0 16px;
  font-weight: 600;
}

.legal-text h2:first-child {
  margin-top: 0;
}

.legal-text p {
  font-size: 1rem;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text ul {
  margin: 20px 0;
  padding-left: 30px;
  list-style: disc;
}

.legal-text li {
  font-size: 1rem;
  margin-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text a {
  color: var(--accent);
  text-decoration: none;
}

.legal-text a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .legal-header {
    padding: 50px 0 30px;
  }

  .page-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .legal-header {
    padding: 40px 0 20px;
  }

  .page-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .page-date {
    font-size: 12px;
  }

  .legal-content {
    padding: 30px 0 60px;
  }

  .legal-text h2 {
    font-size: 20px;
    margin: 30px 0 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .legal-text p {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .legal-text ul {
    padding-left: 20px;
  }

  .legal-text li {
    font-size: 12px;
    margin-bottom: 8px;
  }
}
</style>

