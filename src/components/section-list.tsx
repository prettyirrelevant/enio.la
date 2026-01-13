import Link from 'next/link';

export type Item = {
  title: string;
  href: string;
  role: string;
  period?: string;
  description: string;
};

type SectionListProps = {
  title: string;
  items: Item[];
  viewAllHref?: string;
  viewAllText?: string;
};

export function SectionList({
  title,
  items,
  viewAllHref,
  viewAllText,
}: SectionListProps) {
  return (
    <section className="mb-20">
      <h2 className="text-xl mb-8 text-primary">{title}</h2>
      <div className="space-y-10">
        {items.map((item) => (
          <article key={item.title} className="group">
            <Link href={item.href} target="_blank">
              <h3 className="text-lg text-primary group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {item.role}
                {item.period && ` / ${item.period}`}
              </p>
              <p className="text-secondary mt-2">{item.description}</p>
            </Link>
          </article>
        ))}
      </div>
      {viewAllHref && (
        <Link href={viewAllHref} className="inline-block mt-8 text-accent hover:underline">
          {viewAllText}
        </Link>
      )}
    </section>
  );
}
