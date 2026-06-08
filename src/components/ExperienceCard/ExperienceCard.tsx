import type { RefCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExperienceItem } from '../../data/experiences';
import './ExperienceCard.css';
import ExperienceCardToggle from './ExperienceCardToggle';

type Props = {
  experience: ExperienceItem;
  isOpen: boolean;
  onToggle: () => void;
  panelRef: RefCallback<HTMLDivElement>;
};

const ExperienceCard = ({ experience, isOpen, onToggle, panelRef }: Props) => {
  const { t } = useTranslation();

  const panelId = `exp-panel-${experience.id}`;
  const btnId = `exp-btn-${experience.id}`;
  const responsibilitiesPreview = experience.responsibilities
    ? experience.responsibilities.slice(0, 2)
    : [];

  return (
    <article className={`exp-item ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="exp-date">{experience.date}</div>
      <div className="exp-head">
        <div>
          <h2 id={btnId}>{experience.title}</h2>
          <div className="exp-company">
            {experience.company} — {experience.location}
          </div>
          {experience.keywords && experience.keywords.length > 0 && (
            <div className="exp-keywords">
              {experience.keywords.map((kw) => (
                <span
                  key={kw}
                  className="exp-keyword-chip"
                >
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="exp-actions">
          <ExperienceCardToggle
            panelId={panelId}
            btnId={btnId}
            isOpen={isOpen}
            title={experience.title}
            onToggle={onToggle}
          />
        </div>
      </div>

      <div
        id={panelId}
        ref={panelRef}
        className={`exp-panel ${isOpen ? 'open' : 'collapsed'}`}
        aria-labelledby={btnId}
        style={{ overflow: 'hidden' }}
      >
        {experience.summary && (
          <div className="exp-summary-text">{experience.summary}</div>
        )}

        {experience.responsibilities && (
          <ul className="exp-responsibilities">
            {(isOpen
              ? experience.responsibilities
              : responsibilitiesPreview
            ).map((bullet) => (
              <li
                key={bullet.slice(0, 30)}
                className="exp-responsibility"
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {experience.projects && experience.projects.length > 0 && (
          <div className="exp-projects">
            <div className="exp-projects-label">
              {t('pages.experience.experienceCard.keyProjects')}
            </div>
            <ul className="exp-projects-list">
              {experience.projects.map((project) => (
                <li
                  key={project.name}
                  className="exp-project"
                >
                  <div className="exp-project-name">{project.name}</div>
                  <ul className="exp-project-bullets">
                    {(isOpen
                      ? project.bullets
                      : project.bullets.slice(0, 2)
                    ).map((bullet) => (
                      <li
                        key={project.name + bullet.slice(0, 25)}
                        className="exp-project-bullet"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.metrics && experience.metrics.length > 0 && (
          <div className="exp-metrics">
            <div className="exp-metrics-label">
              {t('pages.experience.experienceCard.metricsLabel')}
            </div>
            <ul className="exp-metrics-list">
              {(isOpen
                ? experience.metrics
                : experience.metrics.slice(0, 2)
              ).map((metric) => (
                <li
                  key={metric.slice(0, 40)}
                  className="exp-metric"
                >
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.events && experience.events.length > 0 && (
          <div className="exp-metrics exp-events">
            <div className="exp-metrics-label">
              {t('pages.experience.experienceCard.eventsHighlights')}
            </div>
            <ul className="exp-metrics-list">
              {(isOpen ? experience.events : experience.events.slice(0, 1)).map(
                (ev) => (
                  <li
                    key={ev.slice(0, 60)}
                    className="exp-metric"
                  >
                    {ev}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

export default ExperienceCard;
