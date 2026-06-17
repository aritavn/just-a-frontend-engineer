import { useTranslation } from 'react-i18next';
import { SectionHeader, SkillCard } from '../components';
import { skillCategories } from '../data/skills';
import { SEO } from '../seo';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills">
      <SEO
        title={t('seo.skills.title')}
        description={t('seo.skills.description')}
        keywords={t('seo.skills.keywords')}
        path="/skills"
      />

      <SectionHeader
        sectionHighlightText={t('pages.skills.sectionHighlight')}
        sectionLabelText={t('pages.skills.sectionTitle')}
        sectionTitleText={t('pages.skills.title')}
      />

      <div className="skills-container">
        {skillCategories.map((cat, idx) => SkillCard(cat, idx))}
      </div>
    </section>
  );
};

export default Skills;
