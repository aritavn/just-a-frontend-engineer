import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-title">
          <div className="hero-sub">{t('homepage.hero.subtitle')}</div>
          <h1>
            {t('homepage.hero.title1')}
            <span className="accent">{t('homepage.hero.title2')}</span>
          </h1>
        </div>
        <div className="typing-effect">
          <span id="typed-text"></span>
          <span className="typing-cursor">|</span>
        </div>
        <div className="cta-area">
          <a
            href="mailto:anaritavn+portfolio@gmail.com"
            className="btn btn-secondary"
            aria-label={t('homepage.hero.contactAriaLabel')}>
            {t('homepage.hero.contactButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
