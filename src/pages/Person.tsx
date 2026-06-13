import { useTranslation } from 'react-i18next';
import { Interests, PhotoSlider, SectionHeader } from '../components';

const Person = () => {
  const { t } = useTranslation();

  return (
    <section id="person">
      <SectionHeader
        sectionHighlightText={t('pages.person.sectionHighlight')}
        sectionLabelText={t('pages.person.sectionTitle')}
        sectionTitleText={t('pages.person.title')}
      />

      <Interests />

      <div
        className="section-label"
        aria-label={t('pages.person.sectionLabel')}
        style={{ paddingLeft: '20px' }}
      >
        <span aria-hidden="true">/</span>
        <span aria-hidden="true">/</span> {t('pages.person.lifeInMotion')}
      </div>

      <PhotoSlider />
    </section>
  );
};

export default Person;
