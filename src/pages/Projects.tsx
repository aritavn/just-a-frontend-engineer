import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../components';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projects } from '../data/projects';
import { SEO } from '../seo';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <SEO
        title={t('seo.projects.title')}
        description={t('seo.projects.description')}
        keywords={t('seo.projects.keywords')}
        path="/projects"
      />

      <SectionHeader
        sectionHighlightText={t('pages.projects.sectionHighlight')}
        sectionLabelText={t('pages.projects.sectionTitle')}
        sectionTitleText={t('pages.projects.title')}
      />

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
