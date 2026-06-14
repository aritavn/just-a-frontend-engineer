export interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend-core',
    label: 'Frontend',
    items: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'React',
      'Next.js',
      'SAP Composable Storefront (Spartacus)',
      'Accessibility (WCAG)',
    ],
  },
  {
    id: 'ui-styling',
    label: 'UI & Styling',
    items: [
      'HTML5',
      'CSS3',
      'Sass',
      'Tailwind CSS',
      'Bootstrap',
      'React Aria Components',
      'Storybook',
      'Emotion',
      'PrimeNG',
      'Responsive Design',
    ],
  },
  {
    id: 'ai-productivity',
    label: 'AI & Developer Productivity',
    items: [
      'AI-assisted software development',
      'Prompt engineering',
      'Rapid prototyping with LLMs',
      'Agentic coding workflows',
      'AI-driven debugging and code generation',
      'AI-assisted test generation',
      'Code review and refactoring with LLMs',
      'Responsible AI usage and output validation',
    ],
  },
  {
    id: 'testing-quality',
    label: 'Testing & Quality',
    items: [
      'Unit Testing',
      'Vitest',
      'Playwright',
      'BDD Testing',
      'Cucumber',
      'Gherkin',
      'Visual Regression Testing (VRT)',
      'Accessibility Testing',
    ],
  },
  {
    id: 'analytics-optimization',
    label: 'Analytics & Optimization',
    items: [
      'Google Analytics 4 (GA4)',
      'A/B Testing',
      'Feature Flags',
      'SEO',
      'Structured Data',
      'Performance Optimization',
      'Event Tracking',
    ],
  },
  {
    id: 'tools-environments',
    label: 'Tools & Development',
    items: [
      'Git',
      'Cursor',
      'Claude',
      'Github Copilot',
      'Visual Studio Code',
      'Android Studio',
      'IntelliJ IDEA',
      'Eclipse',
      'Unity',
      'Visual Studio',
      'MySQL Workbench',
      'SQL Server',
    ],
  },
  {
    id: 'backend-integration',
    label: 'Backend',
    items: ['Java', 'C#', 'Microservices', 'Node.js', 'REST APIs', 'MySQL'],
  },
  {
    id: 'mobile-cross',
    label: 'Mobile & Cross-Platform',
    items: ['React Native', 'Android (Native)'],
  },
  {
    id: 'data-ai-vision',
    label: 'Data & Vision',
    items: [
      'Computer Vision',
      'OpenCV',
      'OCR',
      'Image Processing',
      'Machine Learning',
    ],
  },
  {
    id: 'domain-expertise',
    label: 'Domain Expertise',
    items: [
      'Marketplace Platforms',
      'Classified Marketplaces',
      'E-Commerce Platforms (B2C & B2B)',
      'SAP Commerce Cloud',
      'Multi-Market Rollouts',
      'Accessibility Compliance (WCAG)',
      'Analytics & Tracking (GA4)',
      'SEO & Structured Data Optimization',
      'Payment & Checkout Integrations',
      'Experimentation & A/B Testing',
      'Training / Learning Management Interfaces',
      'Internal Business Process Systems',
    ],
  },
  {
    id: 'soft-skills',
    label: 'Collaboration & Delivery',
    items: [
      'Agile Sprint Planning & Refinement',
      'Cross-Team Dependency Coordination',
      'Continuous Delivery Practices',
      'Mentoring / Knowledge Sharing',
    ],
  },
];

