import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  role: string;
  period?: string;
  achievements: string[];
  technologies: string[];
  href: string;
};

export function ProjectCard({
  title,
  description,
  role,
  period,
  achievements,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <div className="group border border-vesper-border p-6 transition-colors hover:border-accent/50">
      <Link href={href} target="_blank">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-vesper-text group-hover:text-accent transition-colors">
            {title}
          </h2>
          <ArrowUpRight className="w-5 h-5 text-vesper-muted group-hover:text-accent transition-colors" />
        </div>
      </Link>

      <p className="text-sm text-vesper-muted mb-4">
        {role} {period && `(${period})`}
      </p>

      <p className="text-vesper-fg mb-6">{description}</p>

      <div className="space-y-6">
        <div>
          <h3 className="text-vesper-subtle font-semibold mb-2">achievements</h3>
          <ul className="list-disc list-inside space-y-1 text-vesper-fg">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-vesper-subtle font-semibold mb-2">technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm text-vesper-muted bg-vesper-border/50 rounded"
              >
                {tech.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
