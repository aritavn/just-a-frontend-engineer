import { useTranslation } from 'react-i18next';
import { SEO } from '../seo';
import './AccessibilityStatement.css';

const AccessibilityStatement = () => {
  const { t } = useTranslation();

  return (
    <div className="accessibility-statement">
      <SEO
        title={t('seo.accessibilityStatement.title')}
        description={t('seo.accessibilityStatement.description')}
        path="/accessibility-statement"
      />

      <div className="accessibility-statement-inner">
        <div className="accessibility-statement-header">
          <span className="accessibility-statement-label">
            // {t('accessibilityStatement.label')}
          </span>
          <h1 className="accessibility-statement-title">
            {t('accessibilityStatement.title')}
          </h1>
          <p className="accessibility-statement-updated">
            {t('accessibilityStatement.lastUpdated')}
          </p>
        </div>

        <div className="accessibility-statement-content">
          <section className="accessibility-statement-section">
            <h2 className="accessibility-statement-section-title">
              {t('accessibilityStatement.intro.heading')}
            </h2>
            <p>{t('accessibilityStatement.intro.body')}</p>
          </section>

          <section className="accessibility-statement-section">
            <h2 className="accessibility-statement-section-title">
              {t('accessibilityStatement.standards.heading')}
            </h2>
            <p>{t('accessibilityStatement.standards.body')}</p>
          </section>

          <section className="accessibility-statement-section">
            <h2 className="accessibility-statement-section-title">
              {t('accessibilityStatement.features.heading')}
            </h2>
            <ul className="accessibility-statement-list">
              <li>{t('accessibilityStatement.features.keyboardNavigation')}</li>
              <li>
                {t('accessibilityStatement.features.screenReaderSupport')}
              </li>
              <li>
                {t('accessibilityStatement.features.contrastAndTypography')}
              </li>
              <li>{t('accessibilityStatement.features.responsiveDesign')}</li>
            </ul>
          </section>

          <section className="accessibility-statement-section">
            <h2 className="accessibility-statement-section-title">
              {t('accessibilityStatement.limitations.heading')}
            </h2>
            <p>{t('accessibilityStatement.limitations.body')}</p>
            <ul className="accessibility-statement-list">
              <li>
                {t('accessibilityStatement.limitations.examples.keyboard')}
              </li>
              <li>
                {t('accessibilityStatement.limitations.examples.screenReader')}
              </li>
              <li>{t('accessibilityStatement.limitations.examples.colors')}</li>
              <li>
                {t('accessibilityStatement.limitations.examples.spacing')}
              </li>
              <li>
                {t('accessibilityStatement.limitations.examples.animations')}
              </li>
            </ul>
          </section>

          <section className="accessibility-statement-section">
            <h2 className="accessibility-statement-section-title">
              {t('accessibilityStatement.feedback.heading')}
            </h2>
            <p>{t('accessibilityStatement.feedback.body')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
