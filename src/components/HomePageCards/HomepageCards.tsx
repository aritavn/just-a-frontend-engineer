import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './HomepageCards.css';

const HomepageCards = () => {
  const { t } = useTranslation();

  return (
    <div className="homepage-cards-grid centered-homepage-cards">
      <Link
        to="/skills"
        className="page-card homepage-card reveal-init"
      >
        <div className="page-card-content">
          <div className="page-card-headline">
            {t('homepage.cards.skills.section')}
          </div>
          <h2>
            {t('homepage.cards.skills.titleLine1')}
            <br />
            {t('homepage.cards.skills.titleLine2')}
          </h2>
          <div className="tech-stack">
            {t('homepage.cards.skills.techStack')}
          </div>
          <p>{t('homepage.cards.skills.description')}</p>
          <div className="page-card-link">
            <span className="project-link">
              {t('homepage.cards.skills.cta')}
            </span>
          </div>
        </div>
      </Link>
      <Link
        to="/experience"
        className="page-card homepage-card reveal-init"
      >
        <div className="page-card-content">
          <div className="page-card-headline">
            {t('homepage.cards.experience.section')}
          </div>
          <h2>
            {t('homepage.cards.experience.titleLine1')}
            <br />
            {t('homepage.cards.experience.titleLine2')}
          </h2>
          <div className="tech-stack">
            {t('homepage.cards.experience.techStack')}
          </div>
          <p>{t('homepage.cards.experience.description')}</p>
          <div className="page-card-link">
            <span className="project-link">
              {t('homepage.cards.experience.cta')}
            </span>
          </div>
        </div>
      </Link>
      <Link
        to="/education"
        className="page-card homepage-card reveal-init"
      >
        <div className="page-card-content">
          <div className="page-card-headline">
            {t('homepage.cards.education.section')}
          </div>
          <h2>
            {t('homepage.cards.education.titleLine1')}
            <br />
            {t('homepage.cards.education.titleLine2')}
          </h2>
          <div className="tech-stack">
            {t('homepage.cards.education.techStack')}
          </div>
          <p>{t('homepage.cards.education.description')}</p>
          <div className="page-card-link">
            <span className="project-link">
              {t('homepage.cards.education.cta')}
            </span>
          </div>
        </div>
      </Link>
      <Link
        to="/person"
        className="page-card homepage-card reveal-init"
      >
        <div className="page-card-content">
          <div className="page-card-headline">
            {t('homepage.cards.person.section')}
          </div>
          <h2>
            {t('homepage.cards.person.titleLine1')}
            <br />
            {t('homepage.cards.person.titleLine2')}
          </h2>
          <div className="tech-stack">
            {t('homepage.cards.person.techStack')}
          </div>
          <p>{t('homepage.cards.person.description')}</p>
          <div className="page-card-link">
            <span className="project-link">
              {t('homepage.cards.person.cta')}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomepageCards;

