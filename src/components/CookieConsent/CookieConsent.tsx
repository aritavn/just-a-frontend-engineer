import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { loadGA } from '../../utils/analytics';
import './CookieConsent.css';

const STORAGE_KEY = 'cookie-consent';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === 'accepted') {
      loadGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    loadGA();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label={t('cookieConsent.ariaLabel')}
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <p className="cookie-banner-message">
            {t('common.cookieConsent.message')}{' '}
            <Link
              to="/cookie-policy"
              className="cookie-banner-link"
            >
              {t('common.cookieConsent.policyLink')}
            </Link>
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button
            className="cookie-banner-btn cookie-banner-btn--decline"
            onClick={handleDecline}
          >
            {t('common.cookieConsent.decline')}
          </button>
          <button
            className="cookie-banner-btn cookie-banner-btn--accept"
            onClick={handleAccept}
          >
            {t('common.cookieConsent.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
