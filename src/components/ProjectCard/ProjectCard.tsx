import { useTranslation } from 'react-i18next';
import type { ProjectItem } from '../../data/projects';
import './ProjectCard.css';

type ProjectCardProps = {
  project: ProjectItem;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <article className="project-card">
      <div className="project-card-media">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.imageAlt ?? project.title}
          />
        ) : (
          <div className="project-card-placeholder">
            {t('pages.projects.imagePlaceholder')}
          </div>
        )}
      </div>

      <div className="project-card-content">
        <div className="project-card-header">
          <h2>{project.title}</h2>
          <div className="project-tech">{project.techStack}</div>
        </div>

        <p className="project-card-description">{project.description}</p>

        {project.highlights?.length ? (
          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}

        <div className="project-card-links">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('pages.projects.viewLive')}
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('pages.projects.viewCode')}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
