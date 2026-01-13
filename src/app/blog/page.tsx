import { Posts } from '@/components/posts';
import { getPosts } from '@/lib/blog';
import type { Metadata } from 'next';

const posts = getPosts();

export default async function BlogPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl mb-12 text-primary">writing</h1>
      <Posts posts={posts} />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writings on programming, computer science, and more.',
  openGraph: {
    images: [
      {
        url: 'https://enio.la/og/home/blog',
      },
    ],
  },
};
