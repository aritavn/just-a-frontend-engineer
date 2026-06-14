import { useTranslation } from 'react-i18next';
import { SectionHeader, SkillCard } from '../components';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills">
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
