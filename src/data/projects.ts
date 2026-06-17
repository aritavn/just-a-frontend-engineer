export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string;
  imageUrl?: string;
  imageAlt?: string;
  liveUrl?: string;
  repoUrl?: string;
  highlights?: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 'portfolio-site',
    title: 'Portfolio Website',
    description:
      'A responsive portfolio built with React, TypeScript, and modern frontend architecture to showcase projects, experience, and skills.',
    techStack: 'React • TypeScript • CSS',
    imageUrl: 'just-a-frontend-engineer.webp',
    imageAlt: 'Portfolio website preview',
    repoUrl: 'https://github.com/aritavn/just-a-frontend-engineer',
    highlights: [
      'Accessibility-first design and keyboard navigation',
      'Responsive layouts across devices',
      'SEO-friendly metadata and fast performance',
    ],
  },
  {
    id: 'distinct-sardine',
    title: 'Distinct Sardine',
    description:
      'A modern IT consultancy website built to showcase software development services. Designed with a focus on performance, accessibility, and thoughtful user experiences.',
    techStack: 'React • TypeScript • Tailwind',
    imageUrl: 'distinct-sardine.webp',
    imageAlt: 'Distinct Sardine website preview',
    liveUrl: 'https://distinctsardine.com/',
    repoUrl: '',
    highlights: [
      'Design-conscious development with a focus on clarity, usability, and polished user experiences',
      'Modern, responsive interfaces built with accessibility and performance in mind',
    ],
  },
  {
    id: 'florist-estarreja',
    title: 'Florista Pétala',
    description:
      'A WordPress-based website for a family-run florist shop. The site showcases floral services along with products.',
    techStack: 'WordPress • PHP',
    imageUrl: 'florista-petala.webp',
    imageAlt: 'Florist website preview',
    liveUrl: 'https://floristapetala.com/',
    highlights: [
      'Conversion-focused design with strong emphasis on orders and contact',
      'Dedicated service pages',
      'Simple contact form for quotes and custom requests',
      'Easy-to-manage WordPress structure for ongoing updates',
    ],
  },
];
