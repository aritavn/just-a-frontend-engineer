import { useTranslation } from 'react-i18next';
import { EducationCard, SectionHeader } from '../components';
import { education } from '../data/education';
import { SEO } from '../seo';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education">
      <SEO
        title={t('seo.education.title')}
        description={t('seo.education.description')}
        keywords={t('seo.education.keywords')}
        path="/education"
      />

      <SectionHeader
        sectionHighlightText={t('pages.education.sectionHighlight')}
        sectionLabelText={t('pages.education.sectionTitle')}
        sectionTitleText={t('pages.education.title')}
      />

      <div className="education-container">
        {education.map((ed, idx) => EducationCard(ed, idx))}
      </div>
    </section>
  );
};

export default Education;
