const PersonSchema = () => {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rita Nunes',
    jobTitle: 'Frontend Engineer',
    description:
      'Frontend Engineer based in Lisbon, Portugal, specialising in React, Angular, TypeScript, and Next.js. Passionate about accessible, high-performance web interfaces and modern frontend architecture.',
    url: 'https://justafrontendengineer.com',
    email: 'anaritavn+portfolio@gmail.com',
    sameAs: [
      'https://github.com/aritavn',
      'https://www.linkedin.com/in/a-rita-v-nunes/',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Frontend Engineer',
      occupationLocation: {
        '@type': 'City',
        name: 'Lisbon',
      },
      skills:
        'React, Angular, TypeScript, JavaScript, Next.js, HTML5, CSS3, Accessibility (WCAG), Web Performance, Responsive Design',
    },
    knowsAbout: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Frontend Development',
      'Web Performance',
      'Accessible UI Design',
      'CSS',
      'HTML5',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisbon',
      addressCountry: 'PT',
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rita Nunes — Frontend Engineer',
    url: 'https://justafrontendengineer.com',
    description:
      'Portfolio of Rita Nunes, a Frontend Engineer based in Lisbon specialising in React, Angular, and TypeScript.',
    author: {
      '@type': 'Person',
      name: 'Rita Nunes',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
};

export default PersonSchema;
