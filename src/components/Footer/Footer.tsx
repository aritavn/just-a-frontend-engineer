import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="site-footer">
      <h2 className="footer-title">{t('footer.footerTitle')}</h2>
      <p className="footer-subtitle">{t('footer.footerSubtitle')}</p>
      <div className="footer-links">
        <a href="mailto:anaritavn+portfolio@gmail.com">
          {t('footer.footerLinks.email')}
        </a>
        <a
          href="https://github.com/aritavn"
          target="_blank">
          {t('footer.footerLinks.github')}
        </a>
        <a
          href="https://www.linkedin.com/in/a-rita-v-nunes/"
          target="_blank">
          {t('footer.footerLinks.linkedin')}
        </a>
      </div>
      <p className="copyright">{t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer;
