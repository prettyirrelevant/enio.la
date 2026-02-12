import { promises as fs } from 'fs'
import path from 'path'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://enio.la'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articlesDirectory = path.join(process.cwd(), 'app', 'writings', '_articles')
  const articles = await fs.readdir(articlesDirectory)

  const posts = []
  for (const article of articles) {
    if (!article.endsWith('.mdx')) continue
    const module = await import('./writings/_articles/' + article)
    if (!module.metadata || module.metadata.draft) continue
    posts.push({
      url: `${BASE_URL}/writings/${article.replace(/\.mdx$/, '')}`,
      lastModified: new Date(module.metadata.date.replaceAll('.', '-')),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })
  }

  const routes = ['', '/writings', '/projects'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes, ...posts]
}
