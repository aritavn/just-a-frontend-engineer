export type ExperienceProject = {
  name: string;
  bullets: string[];
};

export type ExperienceItem = {
  id: string;
  date: string;
  title: string;
  company: string;
  location: string;
  summary?: string;
  responsibilities?: string[];
  metrics?: string[];
  keywords: string[];
  events?: string[];
  projects?: ExperienceProject[];
};

export const experiences: ExperienceItem[] = [
  {
    id: 'olx',
    date: '02/2026 - Present',
    title: 'Frontend Engineer',
    company: 'OLX',
    location: 'Lisbon, Portugal',
    summary:
      'Frontend Engineer building large-scale automotive marketplace platforms serving millions of users across Europe. I work in a large-scale Next.js app, delivering end-to-end features from data-layer to UI, with a strong focus on performance, quality, and scalable frontend architecture.',
    responsibilities: [
      'Design and build React features following Clean Architecture principles',
      'Ship A/B experiments and feature flag rollouts across multiple markets',
      'Instrument analytics and track events across page views, user interactions, and experiments',
      'Author Playwright BDD scenarios in Cucumber/Gherkin for critical user journeys',
      'Ensure UI stability through VRTs',
      'Build and document UI components in Storybook as part of the shared design system, and test them with Vitest',
      'Migrate components from Emotion to Tailwind CSS and build new accessible components using React Aria Components',
      'Integrate GraphQL APIs and manage server-side data fetching in a Next.js app',
      'Contribute to shared component libraries',
      'Leveraging AI-assisted development tools such as Cursor and Claude to speed up implementation and improve day-to-day engineering workflows',
    ],
    keywords: [
      'React',
      'Next.js',
      'TypeScript',
      'Cucumber',
      'Playwright',
      'Tailwind CSS',
      'Vitest',
      'Storybook',
      'GraphQL',
    ],
  },
  {
    id: 'essity',
    date: '08/2023 - 01/2026',
    title: 'Frontend Engineer',
    company: 'Essity',
    location: 'Lisbon, Portugal',
    summary:
      'As lead FE developer at Essity, I specialized in developing, configuring, and integrating solutions within SAP Commerce Cloud to drive digital transformation in the e-commerce space. Working within an agile team, I contributed to the development and enhancement of scalable, high-performing e-commerce platforms, ensuring a seamless user experience.',
    responsibilities: [
      'Develop and customize a SAP Composable Storefront application for an e-commerce solution',
      'Support the rollout of B2C and B2B e-commerce templates across multiple markets',
      "Ensure the application's adaptability and compliance with accessibility guidelines, following the European Accessibility Act",
      'Implement SEO optimizations (structured data, performance enhancements) to boost organic search visibility',
      'Build and maintain complex integrations with third-party services such as Adyen, PowerReviews, Loqate, and GA4',
      'Enhance and refine user journeys to improve the usability and navigation of the webshops',
      'Mentor junior developers fostering knowledge sharing within the team and improving overall code quality',
      'Collaborate with cross-functional teams to ensure applications meet business and technical requirements',
      'Conduct unit testing, troubleshoot errors, and ensure solutions adhere to best practices',
    ],
    metrics: [
      'Successfully rolled out 4 B2C e-commerce platforms across different regions',
      'Improved website accessibility scores by 24% to comply with the EAA',
    ],
    keywords: [
      'SAP Composable Storefront',
      'E-Commerce',
      'Angular',
      'Web Accessibility',
      'SEO',
    ],
    events: [
      'Organized and presented an internal IT breakfast: "Breaking Barriers to Accessibility" - practical demos shared with 20+ colleagues',
    ],
  },
  {
    id: 'syone',
    date: '09/2020 - 08/2023',
    title: 'Frontend Engineer',
    company: 'Syone',
    location: 'Lisbon, Portugal',
    projects: [
      {
        name: 'Training management platform',
        bullets: [
          'Define architecture, tech stack and UI libraries',
          'Build responsive layouts (web + mobile) using Angular 13',
          'Develop all front-end features based on functional specs and mockups',
          'Write unit tests to ensure component reliability',
        ],
      },
      {
        name: 'Integrated web-based system to support and reengineer all business processes',
        bullets: [
          'Develop new features and reusable components',
          'Deliver a responsive, intuitive user experience',
          'Collaborate closely with cross-functional teams to meet evolving business needs',
        ],
      },
    ],
    keywords: ['Angular', 'JavaScript', 'Responsive Design', 'User Experience'],
  },
  {
    id: 'agap2it',
    date: '09/2019 - 09/2020',
    title: 'Fullstack Engineer',
    company: 'agap2IT',
    location: 'Lisbon, Portugal',
    projects: [
      {
        name: 'Internal Time Logging System',
        bullets: [
          'Frontend development using Angular 9, TypeScript, Bootstrap, HTML, CSS',
        ],
      },
      {
        name: 'Automated Data Validation System',
        bullets: [
          'Develop microservices with Java 11 + Spring Boot, using event-driven architecture and Apache Kafka',
          'Use OpenCV and Tesseract OCR for document processing and data extraction',
        ],
      },
      {
        name: 'Public Sector Website',
        bullets: [
          'BE development with Java, JSP, Hibernate, MySQL',
          'FE development using HTML5, Sass, JS, jQuery, Bootstrap, AJAX',
        ],
      },
    ],
    keywords: ['Java', 'Microservices', 'OpenCV', 'HTML', 'CSS', 'TypeScript'],
  },
  {
    id: 'capgemini',
    date: '10/2016 - 07/2017',
    title: 'Software Engineer',
    company: 'Capgemini Engineering',
    location: 'Lisbon, Portugal',
    projects: [
      {
        name: 'Data processing system',
        bullets: [
          'Build and maintain functionalities that process data using Java EE, EJB, Hibernate, SQL and webservices',
        ],
      },
    ],
    keywords: ['Java EE', 'Hibernate', 'SQL', 'Webservices'],
  },
  {
    id: 'ongagement',
    date: '03/2016 - 06/2016',
    title: 'Intern Developer',
    company: 'Ongagement',
    location: 'Lisbon, Portugal',
    projects: [
      {
        name: 'Online marketing',
        bullets: [
          'Build a Java app for commercial use',
          'Build a PHP-based OCR application using Google’s OCR APIs',
        ],
      },
    ],
    keywords: ['Java', 'PHP', 'OCR'],
  },
];

