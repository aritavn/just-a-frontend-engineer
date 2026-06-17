const BASE_URL = 'https://justafrontendengineer.com';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  type?: 'website' | 'profile';
}

const BASE_KEYWORDS =
  'frontend engineer, frontend developer, React developer, Angular developer, TypeScript, JavaScript, web developer Lisbon, Rita Nunes';

const SEO = ({
  title,
  description,
  keywords,
  path = '',
  type = 'website',
}: SEOProps) => {
  const isHome = path === '' || path === '/';
  const fullTitle = isHome
    ? 'Rita Nunes | Frontend Engineer — Lisbon'
    : `${title} | Rita Nunes — Frontend Engineer`;
  const url = `${BASE_URL}${path}`;
  const allKeywords = keywords
    ? `${keywords}, ${BASE_KEYWORDS}`
    : BASE_KEYWORDS;

  return (
    <>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={allKeywords}
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
