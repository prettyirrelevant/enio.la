import Link from 'next/link';

const links = [
  { title: 'email', href: 'mailto:hi@enio.la' },
  { title: 'x.com', href: 'https://x.com/eniolawtf' },
  { title: 'github', href: 'https://github.com/prettyirrelevant' },
  { title: 'linkedin', href: 'https://www.linkedin.com/in/isaac-adewumi' },
];

export function LinksSection() {
  return (
    <footer className="pt-16 border-t border-border">
      <div className="flex flex-wrap gap-6 text-sm text-muted">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hover:text-primary transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
