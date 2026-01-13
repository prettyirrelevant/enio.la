import { getPosts } from '@/lib/blog';
import { formatDateShort } from '@/lib/utils';
import Link from 'next/link';

const posts = getPosts().slice(0, 4);

export function BlogSection() {
  return (
    <section className="mb-20">
      <h2 className="text-xl mb-8 text-primary">writing</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.slug} className="flex justify-between items-baseline">
            <Link
              href={`/blog/${post.slug}`}
              className="text-secondary hover:text-accent transition-colors"
            >
              {post.metadata.title.toLowerCase()}
            </Link>
            <span className="text-sm text-muted">
              {formatDateShort(post.metadata.date)}
            </span>
          </div>
        ))}
      </div>
      <Link href="/blog" className="inline-block mt-4 text-sm text-muted hover:text-accent transition-colors">
        all posts
      </Link>
    </section>
  );
}
