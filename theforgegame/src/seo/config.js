// SEO配置文件
export const seoConfig = {
  // 域名配置
  domain: 'theforgegame.com',
  fullDomain: 'https://theforgegame.com',
  protocol: 'https://',

  // 社交媒体配置
  social: {
    twitter: '@theforgegame',
    facebook: 'theforgegame',
    instagram: 'theforgegame',
    discord: 'theforgegame'
  },

  // 默认SEO设置
  defaults: {
    title: 'The Forge Game - Wiki, Codes & Strategy Guides',
    description: 'Your comprehensive source for everything related to The Forge on Roblox. Get working codes, crafting recipes, weapon builds, and expert strategies.',
    keywords: 'The Forge, The Forge game, Roblox, The Forge codes, The Forge wiki, The Forge guides, The Forge calculator, The Forge strategies',
    author: 'The Forge Game Community',
    image: 'https://theforgegame.com/images/logo.webp',
    type: 'website'
  },

  // 页面优先级设置
  priorities: {
    home: 1.0,
    wiki: 0.9,
    'wiki-ores': 0.8,
    'wiki-weapons': 0.8,
    'wiki-armor': 0.8,
    'wiki-pickaxes': 0.8,
    'wiki-enemies': 0.8,
    'wiki-locations': 0.8,
    'wiki-mechanics': 0.8,
    'wiki-npcs': 0.8,
    'wiki-potions': 0.8,
    'wiki-quests': 0.8,
    'wiki-races': 0.8,
    'wiki-runes': 0.8,
    'wiki-skills': 0.8,
    'wiki-detail': 0.7,
    codes: 0.9,
    calculator: 0.8,
    guides: 0.9,
    'guide-detail': 0.8,
    'tier-list-pickaxes': 0.8,
    'tier-list-races': 0.8,
    'tier-list-weapons': 0.8,
    'privacy-policy': 0.3,
    'terms-of-service': 0.3,
    'copyright': 0.3,
    'about-us': 0.6,
    'contact-us': 0.6
  },

  // 更新频率设置
  changefreq: {
    home: 'weekly',
    wiki: 'weekly',
    'wiki-ores': 'weekly',
    'wiki-weapons': 'weekly',
    'wiki-armor': 'weekly',
    'wiki-pickaxes': 'weekly',
    'wiki-enemies': 'weekly',
    'wiki-locations': 'weekly',
    'wiki-mechanics': 'weekly',
    'wiki-npcs': 'weekly',
    'wiki-potions': 'weekly',
    'wiki-quests': 'weekly',
    'wiki-races': 'weekly',
    'wiki-runes': 'weekly',
    'wiki-skills': 'weekly',
    'wiki-detail': 'monthly',
    codes: 'daily',
    calculator: 'monthly',
    guides: 'weekly',
    'guide-detail': 'monthly',
    'tier-list-pickaxes': 'monthly',
    'tier-list-races': 'monthly',
    'tier-list-weapons': 'monthly',
    'privacy-policy': 'yearly',
    'terms-of-service': 'yearly',
    'copyright': 'yearly',
    'about-us': 'monthly',
    'contact-us': 'monthly'
  }
}

