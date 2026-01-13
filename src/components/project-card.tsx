import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  role: string;
  period?: string;
  impact?: string;
  href: string;
};

export function ProjectCard({
  title,
  description,
  role,
  period,
  impact,
  href,
}: ProjectCardProps) {
  return (
    <article className="py-8 border-t border-border first:border-t-0">
      <Link href={href} target="_blank" className="group">
        <h2 className="text-xl text-primary group-hover:text-accent transition-colors">
          {title}
        </h2>
        <p className="text-sm text-muted mt-1">
          {role}
          {period && ` / ${period}`}
        </p>
        <p className="text-secondary mt-3">{description}</p>
        {impact && <p className="text-secondary mt-2 italic">{impact}</p>}
      </Link>
    </article>
  );
}
