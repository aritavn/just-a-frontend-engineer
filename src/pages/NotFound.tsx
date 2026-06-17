import { useTranslation } from 'react-i18next';
import './NotFound.css';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section
      id="not-found"
      className="not-found"
    >
      <div className="not-found-content">
        <h1 className="not-found-code">{t('notFound.heading')}</h1>
        <h2 className="not-found-title">{t('notFound.title')}</h2>
        <p className="not-found-description">{t('notFound.description')}</p>
        <div className="not-found-actions">
          <a
            href="/"
            className="btn btn-primary"
          >
            <span>{t('notFound.homeButton')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
