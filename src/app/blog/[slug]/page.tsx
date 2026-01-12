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
    <section className="animate-fade-in-up">
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

      <h1 className="text-4xl font-bold mb-4 text-vesper-text">
        <span className="text-accent mr-2">*</span>
        {post.metadata.title}
      </h1>

      <div className="mb-8 flex items-center justify-between text-sm text-vesper-fg">
        <span>{formatDate(post.metadata.date)}</span>
      </div>

      <article className="prose prose-invert max-w-none prose-headings:text-vesper-text prose-a:text-vesper-text hover:prose-a:underline">
        <MDX code={post.code} />
      </article>
    </section>
  );
}
