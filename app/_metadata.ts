export const siteName = 'Isaac Adewumi'

export const siteOpenGraph = {
  description: 'Software engineer in Lagos, Nigeria',
  siteName,
  type: 'website' as const,
}

export function pageOpenGraph(title: string, path: string, description: string) {
  return {
    ...siteOpenGraph,
    title: `${title} - ${siteName}`,
    description,
    url: path,
  }
}
