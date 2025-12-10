<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" alt="The Forge Game" class="logo-image">
            <span class="logo-text">The Forge Game</span>
          </div>
          <p class="footer-text">
            Comprehensive The Forge game resources including guides, wiki, codes database, and calculators to help you master the forge.
          </p>
        </div>
        <div class="link-column">
          <h2>Navigate</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/wiki">Wiki</a></li>
            <li><a href="/codes">Codes</a></li>
            <li><a href="/calculator">Calculator</a></li>
            <li><a href="/guides">Guides</a></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>Legal</h2>
          <ul>
            <li><a href="/privacy-policy" rel="noopener noreferrer nofollow">Privacy Policy</a></li>
            <li><a href="/terms-of-service" rel="noopener noreferrer nofollow">Terms of Service</a></li>
            <li><a href="/copyright" rel="noopener noreferrer nofollow">Copyright</a></li>
            <li><a href="/about-us" rel="noopener noreferrer nofollow">About Us</a></li>
            <li><a href="/contact-us" rel="noopener noreferrer nofollow">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 theforgegame.com. All rights reserved.</p>
        <p>theforgegame.com is not affiliated with, endorsed by, or connected to The Forge or its developers. This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  padding: 40px 0 20px 0;
  background: rgba(10, 10, 10, 0.95);
  border-top: 1px solid rgba(255, 140, 66, 0.2);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.logo-image {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--accent);
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(255, 140, 66, 0.6);
}

.footer-text {
  color: var(--text-soft);
  margin-bottom: 16px;
  line-height: 1.6;
}

.link-column h2 {
  color: var(--accent);
  font-size: 1.2rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-column a {
  color: var(--text-soft);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-column a:hover {
  color: var(--accent);
}

.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid rgba(255, 140, 66, 0.1);
  padding-top: 20px;
  color: var(--text-soft);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

/* 平板端 */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

/* 移动端 */
@media (max-width: 768px) {
  .site-footer {
    padding: 30px 0 20px 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-text {
    font-size: 0.9rem;
  }

  .link-column h2 {
    font-size: 1.1rem;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}
</style>


