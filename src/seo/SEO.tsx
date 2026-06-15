const BASE_URL = 'https://justafrontendengineer.com';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'profile';
}

const SEO = ({ title, description, path = '', type = 'website' }: SEOProps) => {
  const fullTitle =
    path === '' || path === '/'
      ? 'Just a Frontend Engineer | Rita Nunes'
      : `${title} | Rita Nunes`;
  const url = `${BASE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={description}
      />
      <link
        rel="canonical"
        href={url}
      />

      <meta
        property="og:type"
        content={type}
      />
      <meta
        property="og:site_name"
        content="Just a Frontend Engineer | Rita Nunes"
      />
      <meta
        property="og:title"
        content={fullTitle}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:image"
        content={OG_IMAGE}
      />
      <meta
        property="og:locale"
        content="en_GB"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={fullTitle}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={OG_IMAGE}
      />
    </>
  );
};

export default SEO;
