'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function Navbar() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        event.target instanceof HTMLInputElement
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case 'h':
          router.push('/');
          break;
        case 'b':
          router.push('/blog');
          break;
        case 'p':
          router.push('/projects');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router]);

  return (
    <nav className="flex items-center text-sm text-secondary">
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-primary transition-colors">
          <u>h</u>ome
        </Link>
        <Link href="/blog" prefetch={true} className="hover:text-primary transition-colors">
          <u>b</u>log
        </Link>
        <Link href="/projects" className="hover:text-primary transition-colors">
          <u>p</u>rojects
        </Link>
      </div>
    </nav>
  );
}
