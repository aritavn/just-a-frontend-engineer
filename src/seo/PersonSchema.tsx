const PersonSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rita Nunes',
    jobTitle: 'Frontend Engineer',
    url: 'https://justafrontendengineer.com',
    email: 'anaritavn@gmail.com',
    sameAs: [
      'https://github.com/aritavn',
      'https://www.linkedin.com/in/a-rita-v-nunes/',
    ],
    knowsAbout: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Frontend Development',
      'Accessible UI Design',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisbon',
      addressCountry: 'PT',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default PersonSchema;
