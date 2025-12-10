<template>
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <a href="/" class="logo" @click="closeMenu">
          <img src="/images/logo.webp" alt="The Forge Game" class="logo-image">
          <span class="logo-text">The Forge Game</span>
        </a>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
        </button>
        <div class="menu-overlay" :class="{ open: isMenuOpen }" @click="closeMenu"></div>
        <nav class="nav-links" :class="{ open: isMenuOpen }">
          <a href="/" @click="closeMenu">Home</a>
          <a href="/wiki" @click="closeMenu">Wiki</a>
          <a href="/codes" @click="closeMenu">Codes</a>
          <a href="/calculator" @click="closeMenu">Calculator</a>
          <a href="/guides" @click="closeMenu">Guides</a>
          <div class="nav-dropdown" @mouseenter="showTierDropdown = true" @mouseleave="showTierDropdown = false">
            <button class="nav-dropdown-toggle" :class="{ active: showTierDropdown }">
              Tier List
              <svg class="dropdown-arrow" :class="{ open: showTierDropdown }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="nav-dropdown-menu" :class="{ show: showTierDropdown }">
              <a href="/pickaxes-tier-list" @click="closeMenu">Pickaxes</a>
              <a href="/races-tier-list" @click="closeMenu">Races</a>
              <a href="/weapons-tier-list" @click="closeMenu">Weapons</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const showTierDropdown = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  showTierDropdown.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: linear-gradient(90deg, rgba(18, 10, 5, 0.95), rgba(30, 15, 8, 0.95));
  border-bottom: 1px solid rgba(255, 140, 66, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
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
  transition: all 0.3s ease;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 21;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: rgba(255, 200, 150, 0.8);
  transition: all 0.3s ease;
  border-radius: 2px;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translateY(7px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translateY(-7px);
}

.nav-links {
  display: flex;
  gap: 8px;
  font-size: 0.95rem;
}

.nav-links a {
  color: rgba(255, 200, 150, 0.7);
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #fff;
  border-color: rgba(255, 140, 66, 0.3);
  background: rgba(255, 140, 66, 0.15);
  box-shadow: 0 0 12px rgba(255, 140, 66, 0.25);
}

/* Dropdown Styles */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-toggle {
  color: rgba(255, 200, 150, 0.7);
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: inherit;
}

.nav-dropdown-toggle:hover,
.nav-dropdown-toggle.active {
  color: #fff;
  border-color: rgba(255, 140, 66, 0.3);
  background: rgba(255, 140, 66, 0.15);
  box-shadow: 0 0 12px rgba(255, 140, 66, 0.25);
}

.dropdown-arrow {
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: linear-gradient(180deg, rgba(18, 10, 5, 0.98), rgba(30, 15, 8, 0.95));
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 8px;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 100;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  padding: 8px 0;
}

.nav-dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-dropdown-menu a {
  display: block;
  padding: 12px 20px;
  color: rgba(255, 200, 150, 0.7);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  border: none;
  border-radius: 0;
  margin: 0;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-dropdown-menu a:hover {
  color: #fff;
  background: rgba(255, 140, 66, 0.15);
  border: none;
}

.nav-dropdown-menu a.coming-soon {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.badge {
  font-size: 0.7rem;
  padding: 2px 6px;
  background: rgba(255, 140, 66, 0.2);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 4px;
  color: var(--accent-soft);
}

.menu-overlay {
  display: none;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .nav-links {
    gap: 6px;
    font-size: 0.9rem;
  }

  .nav-links a {
    padding: 10px 14px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 19;
  }

  .menu-overlay.open {
    opacity: 1;
    visibility: visible;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: linear-gradient(180deg, rgba(18, 10, 5, 0.98), rgba(30, 15, 8, 0.95));
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 24px 24px;
    gap: 0;
    transition: right 0.3s ease;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
    z-index: 20;
    overflow-y: auto;
    backdrop-filter: blur(10px);
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links a {
    width: 100%;
    padding: 14px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
    border: 1px solid rgba(255, 140, 66, 0.2);
    font-size: 1rem;
  }

  .nav-links a:hover,
  .nav-links a.router-link-active {
    background: rgba(255, 140, 66, 0.2);
    border-color: rgba(255, 140, 66, 0.4);
  }

  .nav-dropdown {
    width: 100%;
  }

  .nav-dropdown-toggle {
    width: 100%;
    justify-content: space-between;
  }

  .nav-dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    margin-top: 0;
    margin-left: 16px;
    margin-bottom: 8px;
    border: none;
    background: transparent;
    box-shadow: none;
    padding: 0;
  }

  .nav-dropdown-menu a {
    padding: 12px 16px;
    border: 1px solid rgba(255, 140, 66, 0.2);
    border-radius: 8px;
    margin-bottom: 8px;
  }
}
</style>


