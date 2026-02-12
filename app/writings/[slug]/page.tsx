import { promises as fs } from 'fs'
import path from 'path'

export default async function Page(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const params = await props.params
  const { default: MDXContent } = await import(
    '../_articles/' + `${params.slug}.mdx`
  )

  return (
    <div lang='en'>
      <MDXContent />
    </div>
  )
}

export async function generateStaticParams() {
  const articles = await fs.readdir(
    path.join(process.cwd(), 'app', 'writings', '_articles')
  )

  return articles
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => ({
      params: {
        slug: name.replace(/\.mdx$/, ''),
      },
    }))
}

export async function generateMetadata(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const params = await props.params
  const metadata = (await import('../_articles/' + `${params.slug}.mdx`))
    .metadata
  return {
    title: metadata.title,
    description: metadata.description,
  }
}
