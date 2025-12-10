import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://theforgegame.com'
}

// 基础路由配置
const baseRoutes = [
  { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
  { path: '/wiki', name: 'wiki', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki/ores', name: 'wiki-ores', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/weapons', name: 'wiki-weapons', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/armor', name: 'wiki-armor', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/pickaxes', name: 'wiki-pickaxes', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/enemies', name: 'wiki-enemies', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/locations', name: 'wiki-locations', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/mechanics', name: 'wiki-mechanics', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/npcs', name: 'wiki-npcs', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/potions', name: 'wiki-potions', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/quests', name: 'wiki-quests', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/races', name: 'wiki-races', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/runes', name: 'wiki-runes', priority: 0.8, changefreq: 'weekly' },
  { path: '/codes', name: 'codes', priority: 0.9, changefreq: 'daily' },
  { path: '/calculator', name: 'calculator', priority: 0.8, changefreq: 'monthly' },
  { path: '/guides', name: 'guides', priority: 0.9, changefreq: 'weekly' },
  { path: '/tier-list/pickaxes', name: 'tier-list-pickaxes', priority: 0.8, changefreq: 'monthly' },
  { path: '/tier-list/races', name: 'tier-list-races', priority: 0.8, changefreq: 'monthly' },
  { path: '/tier-list/weapons', name: 'tier-list-weapons', priority: 0.8, changefreq: 'monthly' },
  { path: '/privacy-policy', name: 'privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', name: 'terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/copyright', name: 'copyright', priority: 0.3, changefreq: 'yearly' },
  { path: '/about-us', name: 'about-us', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact-us', name: 'contact-us', priority: 0.6, changefreq: 'monthly' }
]

// Wiki 分类列表
const wikiCategories = [
  'ores',
  'weapons',
  'armor',
  'pickaxes',
  'enemies',
  'locations',
  'mechanics',
  'npcs',
  'potions',
  'quests',
  'races',
  'runes'
]

// 动态加载 Wiki 数据
async function loadWikiData(category) {
  try {
    const dataPath = path.join(__dirname, `../src/data/wiki/${category}.js`)
    if (!fs.existsSync(dataPath)) {
      return []
    }
    const module = await import(`../src/data/wiki/${category}.js`)
    return module.default || []
  } catch (error) {
    console.warn(`Warning: Failed to load wiki data for ${category}:`, error.message)
    return []
  }
}

// 动态加载 Guides 数据
async function loadGuidesData() {
  try {
    const dataPath = path.join(__dirname, '../src/data/guides.js')
    if (!fs.existsSync(dataPath)) {
      return []
    }
    const module = await import('../src/data/guides.js')
    return module.default || []
  } catch (error) {
    console.warn('Warning: Failed to load guides data:', error.message)
    return []
  }
}

// 生成 URL XML
function generateUrlXml(path, lastmod, priority, changefreq) {
  const roundedPriority = Math.round(priority * 10) / 10
  return `  <url>
    <loc>${seoConfig.fullDomain}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${roundedPriority}</priority>
  </url>`
}

// 生成站点地图
async function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0]

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // 生成基础路由
  baseRoutes.forEach(route => {
    sitemapXml += `\n${generateUrlXml(route.path, lastmod, route.priority, route.changefreq)}`
  })

  // 为 Wiki 详情页生成URL（过滤 showDetail === false 的项）
  for (const category of wikiCategories) {
    const items = await loadWikiData(category)
    items
      .filter(item => item && item.showDetail !== false && item.addressBar)
      .forEach(item => {
        const slug = String(item.addressBar).replace(/^\//, '')
        const wikiPath = `/wiki/${category}/${slug}`
        sitemapXml += `\n${generateUrlXml(wikiPath, item.publishDate || lastmod, 0.7, 'monthly')}`
      })
  }

  // 为 Guides 生成URL
  const guides = await loadGuidesData()
  guides.forEach(guide => {
    if (!guide || !guide.addressBar) return
    const guidePath = guide.addressBar.startsWith('/') 
      ? `/guides${guide.addressBar}` 
      : `/guides/${guide.addressBar}`
    sitemapXml += `\n${generateUrlXml(guidePath, guide.publishDate || lastmod, 0.8, 'monthly')}`
  })

  sitemapXml += `\n</urlset>`
  return sitemapXml
}

// 生成并保存站点地图
async function main() {
  try {
    console.log('📦 Loading data...')
    
    console.log('🗺️  Generating sitemap...')
    const sitemapContent = await generateSitemap()
    
    const publicPath = path.join(__dirname, '../public/sitemap.xml')
    const distPath = path.join(__dirname, '../dist/sitemap.xml')

    // 确保public目录存在
    const publicDir = path.dirname(publicPath)
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    fs.writeFileSync(publicPath, sitemapContent, 'utf8')
    console.log('✅ Generated sitemap.xml in public folder')

    // 如果dist目录存在，也复制一份
    if (fs.existsSync(path.join(__dirname, '../dist'))) {
      fs.writeFileSync(distPath, sitemapContent, 'utf8')
      console.log('✅ Generated sitemap.xml in dist folder')
    }

    const urlCount = (sitemapContent.match(/<url>/g) || []).length
    console.log(`✅ Total URLs in sitemap: ${urlCount}`)
    
    // 验证生成的站点地图
    const validation = sitemapContent.includes('<?xml') && 
                      sitemapContent.includes('<urlset') && 
                      sitemapContent.includes('</urlset>')
    
    if (validation) {
      console.log('\n✅ Sitemap validation passed')
    } else {
      console.warn('\n⚠️  Sitemap validation failed')
    }
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

main()

