import { useTranslation } from 'react-i18next';
import type { EducationItem, EducationLink } from '../../data/education';
import './EducationCard.css';

const EducationCard = (education: EducationItem, idx: number) => {
  const { t } = useTranslation();

  return (
    <div
      className="edu-item"
      key={education.id}
    >
      <div className="edu-content">
        <div className="edu-date">{education.date}</div>

        <h2>{education.degree}</h2>

        <div className="edu-school">{education.school}</div>

        <div className="edu-location">{education.location}</div>

        {/** Custom rendering: for first item, insert bullets after first paragraph */}
        {idx === 0 ? (
          <>
            {education.paragraphs?.[0] && (
              <p key="first-paragraph">{education.paragraphs[0]}</p>
            )}
            {education.bullets && (
              <ul
                className="edu-bullets spaced-after"
                key="bullets-after-first-paragraph"
              >
                {education.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {education.paragraphs?.slice(1).map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </>
        ) : (
          <>
            {education.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {education.bullets && (
              <ul className="edu-bullets">
                {education.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </>
        )}

        {education.links && (
          <div className="edu-links">
            {education.links.map((link: EducationLink) => (
              <a
                className="edu-link"
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {education.activities && education.activities?.length > 0 && (
          <div className="edu-activities">
            <div className="edu-activities-label">
              {t('pages.education.volunteering')}
            </div>
            <ul className="edu-activities-list">
              {education.activities.map((act) => (
                <li
                  key={act}
                  className="edu-activity"
                >
                  {act}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
