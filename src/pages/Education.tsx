import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('header.nav.education')}</h1>
    </main>
  );
};

export default Education;
