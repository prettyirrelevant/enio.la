import { getPosts } from '@/lib/blog';
import { formatDateShort } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const posts = getPosts().slice(0, 4);

export function BlogSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-vesper-text">
        <span className="text-accent mr-2">*</span>
        blog
      </h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex justify-between items-center group"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-vesper-text hover:text-accent transition-colors duration-200"
            >
              {post.metadata.title.toLowerCase()}
            </Link>
            <span className="text-sm text-vesper-fg">
              {formatDateShort(post.metadata.date)}
            </span>
          </div>
        ))}
      </div>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 mt-6 text-accent hover:underline group"
      >
        all posts{' '}
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </section>
  );
}
