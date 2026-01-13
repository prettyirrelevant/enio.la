import type { MDXFileData } from '@/lib/blog';
import { formatDateShort } from '@/lib/utils';
import Link from 'next/link';

type PostItemProps = {
  post: MDXFileData;
  isSelected?: boolean;
};

export function PostItem({ post, isSelected }: PostItemProps) {
  return (
    <div
      className={`flex justify-between items-baseline py-2 ${
        isSelected ? 'bg-accent/5' : ''
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        prefetch={true}
        className="text-primary hover:text-accent transition-colors"
      >
        {post.metadata.title.toLowerCase()}
      </Link>
      <span className="text-sm text-muted shrink-0">
        {formatDateShort(post.metadata.date)}
      </span>
    </div>
  );
}
