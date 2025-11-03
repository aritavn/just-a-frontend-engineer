import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('header.nav.skills')}</h1>
    </main>
  );
};

export default Skills;
