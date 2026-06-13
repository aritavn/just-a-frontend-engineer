import { useTranslation } from 'react-i18next';
import './SkipLink.css';

const SkipLink = () => {
  const { t } = useTranslation();

  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
      >
        {t('common.skipToMainContent')}
      </a>
      <a
        className="skip-link"
        href="#header-nav"
      >
        {t('common.skipToNavigation')}
      </a>
      <a
        className="skip-link"
        href="#site-footer"
      >
        {t('common.skipToFooter')}
      </a>
    </>
  );
};

export default SkipLink;
