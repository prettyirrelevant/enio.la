import { getPostBySlug, getPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { MDX } from './mdx';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return;
  }

  const publishedTime = formatDate(post.metadata.date);

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      publishedTime,
      type: 'article',
      url: `https://enio.la/blog/${post.slug}`,
      images: [
        {
          url: `https://enio.la/og/blog/${post.slug}`,
        },
      ],
    },
    twitter: {
      title: post.metadata.title,
      description: post.metadata.description,
      card: 'summary_large_image',
      creator: '@eniolawtf',
      images: [`https://enio.la/og/blog/${post.slug}`],
    },
  };
}

export default async function Post({ params }: PageProps) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <section className="animate-fade-in">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.description,
            image: `https://enio.la/og/blog/${post.slug}`,
            url: `https://enio.la/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Isaac Adewumi',
            },
          }),
        }}
      />

      <h1 className="text-3xl mb-4 text-primary">{post.metadata.title}</h1>

      <p className="text-sm text-muted mb-12">{formatDate(post.metadata.date)}</p>

      <article className="prose prose-sm sm:prose-base prose-invert max-w-none prose-headings:text-primary prose-p:text-secondary prose-li:text-secondary prose-a:text-accent hover:prose-a:underline">
        <MDX code={post.code} />
      </article>
    </section>
  );
}
