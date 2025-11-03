import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const typedRef = useRef<HTMLSpanElement>(null);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let textIndex: number = 0;
    let charIndex: number = 0;
    let isDeleting: boolean = false;
    const sentences = [
      t('homepage.hero.typingSubtitle.sentence1'),
      t('homepage.hero.typingSubtitle.sentence2'),
      t('homepage.hero.typingSubtitle.sentence3'),
      t('homepage.hero.typingSubtitle.sentence4'),
      t('homepage.hero.typingSubtitle.sentence5'),
    ];
    const typedEl = typedRef.current;
    if (!typedEl) return;
    typedEl.textContent = '';

    function tick() {
      const element = typedRef.current;
      if (!element) return;

      const currentText = sentences[textIndex];

      charIndex = isDeleting
        ? Math.max(0, charIndex - 1)
        : Math.min(currentText.length, charIndex + 1);

      element.textContent = currentText.substring(0, charIndex);

      // Completed typing whole word
      if (!isDeleting && charIndex === currentText.length) {
        typingTimerRef.current = setTimeout(() => {
          isDeleting = true;
          tick();
        }, 2000);
        return;
      }

      // Completed deleting
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % sentences.length;
        typingTimerRef.current = setTimeout(tick, 400);
        return;
      }

      const typingSpeed = isDeleting ? 45 : 90;
      typingTimerRef.current = setTimeout(tick, typingSpeed);
    }

    // start typing loop
    typingTimerRef.current = setTimeout(tick, 500);

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [t]);

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
          <span
            id="typed-text"
            ref={typedRef}></span>
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
