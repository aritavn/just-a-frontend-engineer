import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceCard, SectionHeader } from '../components';
import { experiences, type ExperienceItem } from '../data/experiences';
import { SEO } from '../seo';

const Experience = () => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    experiences.reduce(
      (acc, e) => ({ ...acc, [e.id]: false }),
      {} as Record<string, boolean>
    )
  );
  const containerRef = useRef(null);
  const panelRefs = useRef<Record<string, HTMLElement | null>>({});

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section id="experience">
      <SEO
        title={t('seo.experience.title')}
        description={t('seo.experience.description')}
        keywords={t('seo.experience.keywords')}
        path="/experience"
      />

      <SectionHeader
        sectionHighlightText={t('pages.experience.sectionHighlight')}
        sectionLabelText={t('pages.experience.sectionTitle')}
        sectionTitleText={t('pages.experience.title')}
      />

      <div
        className="experience-container"
        ref={containerRef}
      >
        {experiences.map((experience: ExperienceItem) => {
          const isOpen = !!expanded[experience.id];

          return (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isOpen={isOpen}
              onToggle={() => toggle(experience.id)}
              panelRef={(el) => {
                panelRefs.current[experience.id] = el;
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
