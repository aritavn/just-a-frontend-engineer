import { useTranslation } from 'react-i18next';
import { About, Hero, HomepageCards } from '../components';
import { PersonSchema, SEO } from '../seo';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
        path="/"
      />

      <PersonSchema />
      <Hero />
      <About />
      <HomepageCards />
    </>
  );
};

export default Home;
