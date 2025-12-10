<template>
  <div class="codes-view page-container">
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">The Forge Roblox Codes (December 2025)</h1>
          <p class="page-subtitle">
            Last Updated: <span class="date">Today</span> | Status: <span class="active">✅ Updated & Tested</span>
            <br />
            <span style="font-size: 0.9rem; color: var(--text-soft);">Get the latest <strong>The Forge Roblox Codes</strong> for free rewards. Check our <router-link to="/" class="inline-link">homepage</router-link> for more resources and <router-link to="/wiki" class="inline-link">wiki guides</router-link>.</span>
          </p>
        </div>
      </div>
    </section>

    <section class="codes-section">
      <div class="container">
        <!-- Active Codes -->
        <div class="codes-group">
          <h2 class="group-title">Active Codes</h2>
          <p class="group-description">These <strong>The Forge Roblox Codes</strong> are currently confirmed working. Codes are case-sensitive (usually all caps). Use these codes to get free rerolls, coins, and other rewards in <router-link to="/" class="inline-link">The Forge Game</router-link>:</p>
          <div class="codes-grid">
            <div
              v-for="code in activeCodes"
              :key="code.id"
              class="code-card active"
            >
              <div class="code-header">
                <div class="code-badge active">
                  <span>✓ Active</span>
                </div>
                <div class="code-value" @click="copyCode(code.code)">
                  <span class="code-text">{{ code.code }}</span>
                  <button class="copy-btn" title="Click to copy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="code-content">
                <div class="code-rewards">
                  <div class="reward-item">
                    <span class="reward-icon">🎲</span>
                    <span class="reward-text">{{ code.reward }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recently Expired Codes -->
        <div class="codes-group" v-if="recentlyExpiredCodes.length > 0">
          <h2 class="group-title">⚠️ Recently Expired (Worth a Try)</h2>
          <p class="group-description">These codes worked in the past few days. Some players report they may be expired, but you can still try:</p>
          <div class="codes-grid">
            <div
              v-for="code in recentlyExpiredCodes"
              :key="code.id"
              class="code-card recently-expired"
            >
              <div class="code-header">
                <div class="code-badge recently-expired">
                  <span>⚠️ Recently Expired</span>
                </div>
                <div class="code-value" @click="copyCode(code.code)">
                  <span class="code-text">{{ code.code }}</span>
                  <button class="copy-btn" title="Click to copy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="code-content">
                <div class="code-rewards">
                  <div class="reward-item">
                    <span class="reward-icon">🎲</span>
                    <span class="reward-text">{{ code.reward }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Expired Codes -->
        <div class="codes-group" v-if="expiredCodes.length > 0">
          <h2 class="group-title">❌ Expired Codes</h2>
          <p class="group-description">The following codes are confirmed expired—no need to try them:</p>
          <div class="expired-codes-list">
            <div
              v-for="code in expiredCodes"
              :key="code.id"
              class="expired-code-item"
            >
              <span class="expired-code-text">{{ code.code }}</span>
              <span v-if="code.reward" class="expired-code-reward">{{ code.reward }}</span>
            </div>
          </div>
        </div>

        <!-- How to Use -->
        <div class="how-to-use">
          <h2 class="section-title">💡 How to Use Codes</h2>
          <div class="steps-list">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <p>Launch the game.</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <p>Click the <strong>gear icon (Settings)</strong> at the top-left of the screen.</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <p>Scroll to the bottom of the Settings menu and find the <strong>Code</strong> input box.</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <p>Enter the code and press <strong>Enter/Redeem</strong>.</p>
              </div>
            </div>
          </div>
          <div class="tip-box">
            <p class="tip-text">
              <strong>Tip:</strong> Many <strong>The Forge Roblox Codes</strong> grant Race Rerolls. If you already have a rare race (e.g., Construct, Dragonborn), use rerolls cautiously to avoid losing it. Learn more about <router-link to="/wiki/races" class="inline-link">races</router-link> in our wiki or check out our <router-link to="/guides" class="inline-link">guides</router-link> for strategies.
            </p>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="faq-section">
          <h2 class="faq-title">Frequently Asked Questions</h2>
          <div class="faq-list">
            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>Are codes case-sensitive?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  Yes. Most <strong>The Forge Roblox Codes</strong> are <strong>case-sensitive</strong> and usually <strong>all caps</strong>. Enter them exactly as shown, including punctuation and exclamation marks. Make sure you're entering the code correctly to redeem your rewards.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>Why is my code not working?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  Common reasons:
                </p>
                <ul>
                  <li>The code is expired (check the Expired list).</li>
                  <li>Input format error (case or punctuation mismatch).</li>
                  <li>Usage limit reached for the code.</li>
                  <li>Your account has already redeemed it.</li>
                  <li>The code may have just expired (try the Recently Expired list).</li>
                </ul>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>What are Race Rerolls?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  Race Rerolls let you rerandomize your character's race. If you dislike your current race, you can reroll for a new one. <strong>Rerolling replaces your current race</strong>; if you already have a rare race (e.g., Construct, Dragonborn), be careful not to lose it.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>How often are codes updated?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  We update <strong>The Forge Roblox Codes</strong> as soon as new codes drop—often around events, milestones, or major patches. Check back regularly to grab the latest working codes. You can also visit our <router-link to="/wiki" class="inline-link">wiki</router-link> for game information or use our <router-link to="/calculator" class="inline-link">calculator</router-link> to plan your builds.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>Can I redeem the same code multiple times?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  No. Each code is typically <strong>one-time use</strong> per account. Reusing it will show invalid/already redeemed.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>Are “Recently Expired” codes worth trying?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  They worked recently but might be down now. Some may still work on certain servers or time windows—try if you have a moment, but don’t count on it.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span class="faq-icon">Q</span>
                <h3>Where do I enter codes?</h3>
              </div>
              <div class="faq-answer">
                <p>
                  Steps:
                </p>
                <ol>
                  <li>Open the game and click the <strong>gear icon (Settings)</strong> in the top-left.</li>
                  <li>Scroll to the bottom to find the <strong>Code</strong> input box.</li>
                  <li>Enter the code (case-sensitive).</li>
                  <li>Press <strong>Enter</strong> or <strong>Redeem</strong>.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 代码数据
const codes = ref([
  // Active Codes
  {
    id: 1,
    code: 'PEAK!',
    reward: '10 Rerolls',
    status: 'recently-expired'
  },
  // Recently Expired Codes
  {
    id: 2,
    code: '400K!',
    reward: '8 Rerolls',
    status: 'recently-expired'
  },
  {
    id: 3,
    code: 'SORRYFORSHUTDOWN',
    reward: '5 Rerolls',
    status: 'recently-expired'
  },
  // Expired Codes
  {
    id: 4,
    code: '300K!',
    reward: null,
    status: 'expired'
  },
  {
    id: 5,
    code: '100KLIKES',
    reward: null,
    status: 'expired'
  },
  {
    id: 6,
    code: '200K!',
    reward: null,
    status: 'expired'
  },
  {
    id: 7,
    code: '100K!',
    reward: null,
    status: 'expired'
  },
  {
    id: 8,
    code: '40KLIKES',
    reward: null,
    status: 'expired'
  },
  {
    id: 9,
    code: '20KLIKES',
    reward: null,
    status: 'expired'
  },
  {
    id: 10,
    code: '15KLIKES',
    reward: null,
    status: 'expired'
  },
  {
    id: 11,
    code: '10KLIKES',
    reward: null,
    status: 'expired'
  },
  {
    id: 12,
    code: '5KLIKES',
    reward: null,
    status: 'expired'
  },
  {
    id: 13,
    code: 'BETARELEASE!',
    reward: null,
    status: 'expired'
  },
  {
    id: 14,
    code: 'POSTRELEASEQNA',
    reward: null,
    status: 'expired'
  },
  {
    id: 15,
    code: 'RELEASE',
    reward: null,
    status: 'expired'
  },
  {
    id: 16,
    code: 'FREESPINS',
    reward: "freespins",
    status: 'active'
  }
])

const activeCodes = computed(() => {
  return codes.value.filter(code => code.status === 'active')
})

const recentlyExpiredCodes = computed(() => {
  return codes.value.filter(code => code.status === 'recently-expired')
})

const expiredCodes = computed(() => {
  return codes.value.filter(code => code.status === 'expired')
})

const copyCode = async (code) => {
  try {
    await navigator.clipboard.writeText(code)
    // 可以添加一个提示消息
    alert(`Code "${code}" copied to clipboard!`)
  } catch (err) {
    console.error('Failed to copy code:', err)
    // 降级方案：使用传统方法
    const textArea = document.createElement('textarea')
    textArea.value = code
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert(`Code "${code}" copied to clipboard!`)
  }
}
</script>

<style scoped>
.codes-view {
  min-height: 100vh;
  padding-bottom: 80px;
}

.codes-section {
  padding: 0 0 80px;
}

.codes-group {
  margin-bottom: 40px;
}

.group-title {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 12px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 140, 66, 0.3);
  position: relative;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.group-description {
  font-size: 0.95rem;
  color: var(--text-soft);
  margin: 0 0 20px 0;
  line-height: 1.6;
}

.codes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.code-card {
  background: rgba(25, 20, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.code-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 8px 24px rgba(255, 140, 66, 0.15);
}

.code-card.active {
  border-color: rgba(76, 175, 80, 0.4);
}

.code-card.active:hover {
  box-shadow: 0 8px 24px rgba(76, 175, 80, 0.2);
}

.code-card.recently-expired {
  border-color: rgba(255, 152, 0, 0.4);
}

.code-card.recently-expired:hover {
  box-shadow: 0 8px 24px rgba(255, 152, 0, 0.2);
}

.code-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.code-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
}

.code-badge.active {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.code-badge.recently-expired {
  background: rgba(255, 152, 0, 0.2);
  color: #ff9800;
  border: 1px solid rgba(255, 152, 0, 0.3);
}

.code-value {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: rgba(20, 15, 10, 0.6);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.code-value:hover {
  background: rgba(255, 140, 66, 0.1);
  border-color: var(--accent);
}

.code-text {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: var(--accent);
  letter-spacing: 2px;
}

.copy-btn {
  background: transparent;
  border: none;
  color: var(--text-soft);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.copy-btn:hover {
  color: var(--accent);
  background: rgba(255, 140, 66, 0.1);
}

.copy-btn svg {
  width: 18px;
  height: 18px;
}

.code-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.code-rewards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.reward-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: rgba(255, 140, 66, 0.1);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 6px;
}

.reward-icon {
  font-size: 1.2rem;
}

.reward-text {
  font-size: 0.95rem;
  color: var(--text);
  font-weight: 500;
}

.status-text {
  font-size: 0.85rem;
  color: var(--text-soft);
  font-style: italic;
}

.expired-codes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
  background: rgba(20, 15, 10, 0.6);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 12px;
}

.expired-code-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(158, 158, 158, 0.1);
  border: 1px solid rgba(158, 158, 158, 0.2);
  border-radius: 6px;
  font-size: 0.9rem;
}

.expired-code-text {
  font-family: 'Courier New', monospace;
  color: #9e9e9e;
  text-decoration: line-through;
  font-weight: 600;
  letter-spacing: 1px;
}

.expired-code-reward {
  font-size: 0.8rem;
  color: rgba(158, 158, 158, 0.7);
}

.how-to-use {
  margin-top: 60px;
  padding: 32px;
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 24px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 140, 66, 0.3);
  position: relative;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}

.step-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.step-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: #1a0a00;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
  padding-top: 6px;
}

.step-content p {
  font-size: 0.95rem;
  color: var(--text-soft);
  margin: 0;
  line-height: 1.6;
}

.step-content strong {
  color: var(--text);
  font-weight: 600;
}

.tip-box {
  padding: 16px 20px;
  background: rgba(255, 140, 66, 0.1);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-left: 4px solid var(--accent);
  border-radius: 8px;
  margin-top: 20px;
}

.tip-text {
  font-size: 0.9rem;
  color: var(--text-soft);
  margin: 0;
  line-height: 1.6;
}

.tip-text strong {
  color: var(--accent);
  font-weight: 600;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .codes-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .codes-view {
    padding-bottom: 40px;
  }

  .codes-section {
    padding: 0 0 40px;
  }

  .codes-group {
    margin-bottom: 32px;
  }

  .group-title,
  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .group-description {
    font-size: 0.85rem;
    margin-bottom: 16px;
  }

  .codes-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .code-card {
    padding: 16px;
  }

  .code-text {
    font-size: 1.1rem;
  }

  .expired-codes-list {
    padding: 16px;
    gap: 8px;
  }

  .expired-code-item {
    padding: 6px 12px;
    font-size: 0.85rem;
  }

  .how-to-use {
    padding: 20px;
    margin-top: 40px;
  }

  .step-item {
    gap: 12px;
  }

  .step-number {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  .step-content p {
    font-size: 0.9rem;
  }

  .tip-box {
    padding: 12px 16px;
  }

  .tip-text {
    font-size: 0.85rem;
  }
}

/* FAQ Section */
.faq-section {
  margin-top: 40px;
  padding: 32px;
  background: rgba(25, 20, 15, 0.8);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.faq-title {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 24px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 140, 66, 0.3);
  position: relative;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: rgba(255, 140, 66, 0.05);
  border: 1px solid rgba(255, 140, 66, 0.2);
  border-radius: 8px;
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
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 140, 66, 0.1);
  cursor: pointer;
}

.faq-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent);
  color: #1a0a00;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.faq-question h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}

.faq-answer {
  padding: 16px 16px 16px 56px;
}

.faq-answer p {
  font-size: 0.9rem;
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
  padding-left: 20px;
  color: var(--text-soft);
}

.faq-answer li {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 6px;
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

/* 移动端 - 768px */
@media (max-width: 768px) {
  .faq-section {
    padding: 20px;
    margin-top: 32px;
  }

  .faq-title {
    font-size: 20px;
    margin-bottom: 16px;
    padding-bottom: 10px;
  }

  .faq-answer {
    padding: 12px 12px 12px 48px;
  }
}
</style>
