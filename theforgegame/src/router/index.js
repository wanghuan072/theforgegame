import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'The Forge Roblox Wiki, Codes & Calculator - TheForgeGame',
        description: 'The #1 Wiki for The Forge Roblox. Get the latest active codes, crafting recipes, weapon stats & use our exclusive build calculator. Updated daily!',
        keywords: 'The Forge Roblox, The Forge codes, The Forge wiki, Roblox guides, crafting calculator, weapon tier list, The Forge game map.'
      }
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: () => import('../views/wiki/WikiView.vue'),
      meta: {
        title: 'The Forge Roblox Wiki Database - TheForgeGame',
        description: 'Explore the full The Forge Roblox Wiki. Browse categories for Weapons, Armor, Ores, Skills, Runes, Enemies & more. Click to view detailed stats for every item.',
        keywords: 'The Forge Roblox wiki, weapon list, armor, ores, pickaxes, enemies, locations, mechanics, npcs, potions, quests, races, runes'
      }
    },
    {
      path: '/wiki/ores',
      name: 'wiki-ores',
      component: () => import('../views/wiki/WikiOresView.vue'),
      meta: {
        title: 'The Forge Roblox Ores: Locations & Prices - TheForgeGame',
        description: 'Find all Ores in The Forge. Check mining locations, pickaxe power requirements, sell values, and respawn times for every resource.',
        keywords: 'The Forge Roblox ores, mining locations, ore value, mining level, copper, iron, mithril, ore map'
      }
    },
    {
      path: '/wiki/weapons',
      name: 'wiki-weapons',
      component: () => import('../views/wiki/WikiWeaponsView.vue'),
      meta: {
        title: 'The Forge Roblox Weapons List & Stats - TheForgeGame',
        description: 'Complete database of Weapons in The Forge. View damage stats, attack speed, durability, and crafting recipes for every sword and bow.',
        keywords: 'The Forge Roblox weapons, weapon damage, dps, swords, bows, crafting recipes, weapon tier list'
      }
    },
    {
      path: '/wiki/armor',
      name: 'wiki-armor',
      component: () => import('../views/wiki/WikiArmorView.vue'),
      meta: {
        title: 'The Forge Roblox Armor Sets & Stats - TheForgeGame',
        description: 'All Armor sets in The Forge Roblox. Compare defense stats, set bonuses, crafting requirements, and materials needed for upgrades.',
        keywords: 'The Forge Roblox armor, armor sets, defense stats, crafting armor, best armor, equipment'
      }
    },
    {
      path: '/wiki/pickaxes',
      name: 'wiki-pickaxes',
      component: () => import('../views/wiki/WikiPickaxesView.vue'),
      meta: {
        title: 'The Forge Roblox Pickaxes List & Stats - TheForgeGame',
        description: 'Upgrade your mining speed. List of all Pickaxes with mining power stats, durability, and crafting recipes to mine better ores.',
        keywords: 'The Forge Roblox pickaxes, mining power, pickaxe recipes, mining speed, best pickaxe'
      }
    },
    {
      path: '/wiki/enemies',
      name: 'wiki-enemies',
      component: () => import('../views/wiki/WikiEnemiesView.vue'),
      meta: {
        title: 'The Forge Roblox Enemies & Drop Tables - TheForgeGame',
        description: 'List of all Monsters and Bosses. View HP stats, XP rewards, damage, and complete item drop tables for farming rare materials.',
        keywords: 'The Forge Roblox enemies, boss drops, monster hp, enemy locations, mob drops, xp farming'
      }
    },
    {
      path: '/wiki/locations',
      name: 'wiki-locations',
      component: () => import('../views/wiki/WikiLocationsView.vue'),
      meta: {
        title: 'The Forge Roblox Locations & Map Guide - TheForgeGame',
        description: 'Explore the world of The Forge. Guide to all map zones, unlock requirements, resource spawns, and hidden areas you can visit.',
        keywords: 'The Forge Roblox map, locations guide, secret areas, zone requirements, spawn points'
      }
    },
    {
      path: '/wiki/mechanics',
      name: 'wiki-mechanics',
      component: () => import('../views/wiki/WikiMechanicsView.vue'),
      meta: {
        title: 'The Forge Roblox Game Mechanics Guide - TheForgeGame',
        description: 'Master the game systems. Detailed explanation of smithing, combat logic, durability, trading, and leveling mechanics in The Forge.',
        keywords: 'The Forge Roblox mechanics, smithing guide, combat system, durability, how to play, beginner guide'
      }
    },
    {
      path: '/wiki/npcs',
      name: 'wiki-npcs',
      component: () => import('../views/wiki/WikiNpcsView.vue'),
      meta: {
        title: 'The Forge Roblox NPCs: Locations & Quests - TheForgeGame',
        description: 'Find every NPC in The Forge. List of quest givers, shop merchants, and trainers with their map coordinates and available services.',
        keywords: 'The Forge Roblox npcs, npc locations, merchants, quest givers, trainers, shop list'
      }
    },
    {
      path: '/wiki/potions',
      name: 'wiki-potions',
      component: () => import('../views/wiki/WikiPotionsView.vue'),
      meta: {
        title: 'The Forge Roblox Potions & Recipes - TheForgeGame',
        description: 'All Potion recipes and effects. Learn how to brew buffs, healing items, and speed boosts to enhance your gameplay and combat.',
        keywords: 'The Forge Roblox potions, potion recipes, brewing guide, buffs, healing, alchemy'
      }
    },
    {
      path: '/wiki/quests',
      name: 'wiki-quests',
      component: () => import('../views/wiki/WikiQuestsView.vue'),
      meta: {
        title: 'The Forge Roblox Quests List & Rewards - TheForgeGame',
        description: 'Complete walkthrough for all Quests. Check objectives, NPC locations, level requirements, and gold/XP rewards for completion.',
        keywords: 'The Forge Roblox quests, quest guide, quest rewards, walkthrough, how to complete quests'
      }
    },
    {
      path: '/wiki/races',
      name: 'wiki-races',
      component: () => import('../views/wiki/WikiRacesView.vue'),
      meta: {
        title: 'The Forge Roblox Races & Stat Bonuses - TheForgeGame',
        description: 'Choose the best race. Comparison of all Races, including stat multipliers, innate abilities, buffs, and how to reroll your race.',
        keywords: 'The Forge Roblox races, race stats, best race, race reroll, race bonuses'
      }
    },
    {
      path: '/wiki/runes',
      name: 'wiki-runes',
      component: () => import('../views/wiki/WikiRunesView.vue'),
      meta: {
        title: 'The Forge Roblox Runes List & Effects - TheForgeGame',
        description: 'Enhance your gear with Runes. List of all Runes, their stat bonuses, slot requirements, and how to obtain or craft them.',
        keywords: 'The Forge Roblox runes, weapon enchantment, rune effects, rune crafting, gear upgrades'
      }
    },
    {
      path: '/wiki/:category/:id',
      name: 'wiki-detail',
      component: () => import('../views/wiki/WikiDetailView.vue'),
      meta: {
        title: 'The Forge Wiki Article',
        description: 'Detailed wiki article about The Forge game mechanics, features, and strategies.',
        keywords: 'The Forge wiki, The Forge guide, The Forge information, The Forge game mechanics'
      }
    },
    {
      path: '/codes',
      name: 'codes',
      component: () => import('../views/CodesView.vue'),
      meta: {
        title: 'The Forge Roblox Codes (December 2025) - Free Rewards',
        description: 'Updated daily! Redeem latest The Forge Roblox codes for Free Coins, Gems & Mining Boosts. Check our full list of active and expired codes.',
        keywords: 'The Forge Roblox codes, The Forge redeem codes, active codes, promo codes, gift codes, working codes, free rewards, The Forge wiki codes, roblox codes 2025'
      }
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../views/CalculatorView.vue'),
      meta: {
        title: 'The Forge Roblox Calculator & Build Simulator - TheForgeGame',
        description: 'Optimize your gameplay with our The Forge Roblox Calculator. Simulate builds, calculate crafting costs, check DPS stats, and plan your upgrades perfectly.',
        keywords: 'The Forge Roblox calculator, build simulator, crafting cost calculator, dps checker, stat optimizer, resource calculator, build planner'
      }
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import('../views/GuidesView.vue'),
      meta: {
        title: 'The Forge Roblox Guides, Tips & Strategies - TheForgeGame',
        description: 'Master The Forge on Roblox with our expert guides. Find fast leveling strategies, gold farming tips, boss walkthroughs, and ultimate crafting tutorials.',
        keywords: 'The Forge Roblox guides, beginner guide, leveling guide, gold farming, crafting tutorial, boss walkthrough, tips and tricks, The Forge strategy'
      }
    },
    {
      path: '/guides/:id',
      name: 'guide-detail',
      component: () => import('../views/GuideDetailView.vue'),
      meta: {
        title: 'The Forge Guide',
        description: 'Detailed guide about The Forge game strategies, tips, and techniques.',
        keywords: 'The Forge guide, The Forge strategy, The Forge tips, The Forge tutorial, The Forge walkthrough'
      }
    },
    {
      path: '/pickaxes-tier-list',
      name: 'tier-list-pickaxes',
      component: () => import('../views/tier-list/PickaxesTierListView.vue'),
      meta: {
        title: 'The Forge Roblox Pickaxe Tier List - TheForgeGame',
        description: 'Complete The Forge Roblox Pickaxe Tier List. Find the best pickaxes ranked by power, luck, and value. Save gold by choosing the right pickaxe for your needs.',
        keywords: 'The Forge Roblox pickaxe tier list, best pickaxe, pickaxe ranking, mining tools, The Forge pickaxes'
      }
    },
    {
      path: '/races-tier-list',
      name: 'tier-list-races',
      component: () => import('../views/tier-list/RacesTierListView.vue'),
      meta: {
        title: 'The Forge Roblox Race Tier List - TheForgeGame',
        description: 'Complete The Forge Roblox Race Tier List. Rank all races by damage, survivability, mobility, and economy. Find the best race for your playstyle.',
        keywords: 'The Forge Roblox race tier list, best race, race ranking, class tier list, The Forge races'
      }
    },
    {
      path: '/weapons-tier-list',
      name: 'tier-list-weapons',
      component: () => import('../views/tier-list/WeaponsTierListView.vue'),
      meta: {
        title: 'The Forge Roblox Weapons Tier List - TheForgeGame',
        description: 'Complete The Forge Roblox Weapons Tier List. Rank all weapons by damage, attack speed, range, and versatility. Find the best weapon for combat.',
        keywords: 'The Forge Roblox weapons tier list, best weapon, weapon ranking, combat weapons, The Forge weapons'
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/legal/PrivacyPolicyView.vue'),
      meta: {
        title: 'Privacy Policy - The Forge Game - theforgegame.com',
        description: 'Privacy Policy for The Forge Game Community. Learn how we collect, use, and protect your personal information when you visit our website.',
        keywords: 'privacy policy, The Forge game, data protection, privacy'
      }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/legal/TermsOfServiceView.vue'),
      meta: {
        title: 'Terms of Service - The Forge Game - theforgegame.com',
        description: 'Terms of Service for The Forge Game Community. Read our terms and conditions for using our website and services.',
        keywords: 'terms of service, The Forge game, terms and conditions, user agreement'
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('../views/legal/CopyrightView.vue'),
      meta: {
        title: 'Copyright - The Forge Game - theforgegame.com',
        description: 'Copyright information for The Forge Game Community. Learn about our copyright policies and intellectual property rights.',
        keywords: 'copyright, The Forge game, intellectual property, DMCA, fair use'
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/legal/AboutUsView.vue'),
      meta: {
        title: 'About Us - The Forge Game - theforgegame.com',
        description: 'Learn about The Forge Game Community, an unofficial community resource for The Forge game. Discover our mission, what we offer, and how we help players.',
        keywords: 'about The Forge Game Community, The Forge game community, The Forge resources, The Forge fan site'
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/legal/ContactUsView.vue'),
      meta: {
        title: 'Contact Us - The Forge Game - theforgegame.com',
        description: 'Contact The Forge Game Community. Get in touch with us for questions, suggestions, feedback, or inquiries about our website and services.',
        keywords: 'contact The Forge Game Community, The Forge game support, The Forge community contact'
      }
    }
  ],
})

export default router
