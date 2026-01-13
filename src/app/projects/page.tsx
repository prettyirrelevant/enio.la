import { ProjectCard } from '@/components/project-card';
import type { Metadata } from 'next';

const projects = [
  {
    title: 'neuron',
    description:
      "students' attendance system using bluetooth low energy with esp32",
    role: 'creator',
    period: 'aug 2024',
    href: 'https://github.com/prettyirrelevant/final-year-project',
  },
  {
    title: 'wrapped-naira',
    description:
      'proof of concept fiat-to-crypto ramp for converting naira to stablecoin with p2p exchange',
    role: 'backend & smart contracts',
    period: 'may 2024',
    href: 'https://github.com/prettyirrelevant/wrapped-naira',
  },
  {
    title: 'gistrunner',
    description:
      'sandbox environment for executing code snippets from github gists',
    role: 'creator',
    period: 'jan 2024',
    href: 'https://github.com/prettyirrelevant/gistrunner',
  },
  {
    title: 'bridgebloc',
    description: 'token bridge across evm compatible chains',
    role: 'backend',
    period: 'aug 2023',
    href: 'https://github.com/prettyirrelevant/bridgebloc',
  },
  {
    title: 'decodify',
    description:
      "browser extension that decodes etherscan transactions using rotki's decoder",
    role: 'creator',
    period: 'jun 2023',
    href: 'https://github.com/prettyirrelevant/decodify',
  },
  {
    title: 'waakye',
    description:
      'playlist converter for spotify, youtube music, and deezer',
    role: 'creator',
    period: 'apr 2023',
    href: 'https://github.com/prettyirrelevant/waakye',
  },
];

export default function ProjectsPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl mb-12 text-primary">projects</h1>

      <div className="divide-y divide-border">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: 'https://enio.la/og/home/projects',
      },
    ],
  },
};
