import { useTranslation } from 'react-i18next';
import './CookiePolicy.css';

const CookiePolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="cookie-policy">
      <div className="cookie-policy-inner">
        <div className="cookie-policy-header">
          <span className="cookie-policy-label">
            // {t('cookiePolicy.label')}
          </span>
          <h1 className="cookie-policy-title">{t('cookiePolicy.title')}</h1>
          <p className="cookie-policy-updated">
            {t('cookiePolicy.lastUpdated')}
          </p>
        </div>

        <div className="cookie-policy-content">
          <section className="cookie-policy-section">
            <h2 className="cookie-policy-section-title">
              {t('cookiePolicy.whatAreCookies.heading')}
            </h2>
            <p>{t('cookiePolicy.whatAreCookies.body')}</p>
          </section>

          <section className="cookie-policy-section">
            <h2 className="cookie-policy-section-title">
              {t('cookiePolicy.howWeUse.heading')}
            </h2>
            <p>{t('cookiePolicy.howWeUse.body')}</p>
            <table className="cookie-policy-table">
              <thead>
                <tr>
                  <th>{t('cookiePolicy.table.name')}</th>
                  <th>{t('cookiePolicy.table.purpose')}</th>
                  <th>{t('cookiePolicy.table.duration')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>cookie-consent</code>
                  </td>
                  <td>{t('cookiePolicy.table.rows.consent.purpose')}</td>
                  <td>{t('cookiePolicy.table.rows.consent.duration')}</td>
                </tr>
                <tr>
                  <td>
                    <code>portfolio-theme</code>
                  </td>
                  <td>{t('cookiePolicy.table.rows.theme.purpose')}</td>
                  <td>{t('cookiePolicy.table.rows.theme.duration')}</td>
                </tr>
                <tr>
                  <td>
                    <code>_ga, _ga_*</code>
                  </td>
                  <td>{t('cookiePolicy.table.rows.ga.purpose')}</td>
                  <td>{t('cookiePolicy.table.rows.ga.duration')}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="cookie-policy-section">
            <h2 className="cookie-policy-section-title">
              {t('cookiePolicy.thirdParty.heading')}
            </h2>
            <p>{t('cookiePolicy.thirdParty.body')}</p>
          </section>

          <section className="cookie-policy-section">
            <h2 className="cookie-policy-section-title">
              {t('cookiePolicy.yourChoices.heading')}
            </h2>
            <p>{t('cookiePolicy.yourChoices.body')}</p>
          </section>

          <section className="cookie-policy-section">
            <h2 className="cookie-policy-section-title">
              {t('cookiePolicy.contact.heading')}
            </h2>
            <p>{t('cookiePolicy.contact.body')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
