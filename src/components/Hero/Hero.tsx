import { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const typedRef = useRef<HTMLSpanElement>(null);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const typingSentences = useMemo(
    () => [
      t('homepage.hero.typingSubtitle.sentence1'),
      t('homepage.hero.typingSubtitle.sentence2'),
      t('homepage.hero.typingSubtitle.sentence3'),
      t('homepage.hero.typingSubtitle.sentence4'),
      t('homepage.hero.typingSubtitle.sentence5'),
    ],
    [t]
  );

  const longestTypingSentence = useMemo(
    () =>
      typingSentences.reduce(
        (longest, sentence) =>
          sentence.length > longest.length ? sentence : longest,
        ''
      ),
    [typingSentences]
  );

  useEffect(() => {
    if (!typedRef.current) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sentences = typingSentences;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function clearTypingTimer() {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    }

    function setStaticText() {
      clearTypingTimer();
      const element = typedRef.current;
      if (!element) return;
      element.textContent = sentences[0] ?? '';
    }

    function tick() {
      const element = typedRef.current;
      if (!element) return;

      const currentText = sentences[textIndex];

      charIndex = isDeleting
        ? Math.max(0, charIndex - 1)
        : Math.min(currentText.length, charIndex + 1);

      element.textContent = currentText.substring(0, charIndex);

      if (!isDeleting && charIndex === currentText.length) {
        typingTimerRef.current = setTimeout(() => {
          isDeleting = true;
          tick();
        }, 2000);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % sentences.length;
        typingTimerRef.current = setTimeout(tick, 400);
        return;
      }

      const typingSpeed = isDeleting ? 45 : 90;
      typingTimerRef.current = setTimeout(tick, typingSpeed);
    }

    function startTyping() {
      clearTypingTimer();
      const element = typedRef.current;
      if (!element) return;
      textIndex = 0;
      charIndex = 0;
      isDeleting = false;
      element.textContent = '';
      typingTimerRef.current = setTimeout(tick, 500);
    }

    function applyMotionPreference() {
      if (motionQuery.matches) {
        setStaticText();
      } else {
        startTyping();
      }
    }

    applyMotionPreference();
    motionQuery.addEventListener('change', applyMotionPreference);

    return () => {
      clearTypingTimer();
      motionQuery.removeEventListener('change', applyMotionPreference);
    };
  }, [typingSentences]);

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
        <div className="hero-subtext">
          <div className="typing-effect">
            <span
              className="typing-effect__sizer"
              aria-hidden="true"
            >
              {longestTypingSentence}
              <span className="typing-cursor">|</span>
            </span>
            <span className="typing-effect__content">
              <span
                id="typed-text"
                ref={typedRef}
              ></span>
              <span className="typing-cursor">|</span>
            </span>
          </div>
          <div className="cta-area">
            <a
              href="mailto:anaritavn+portfolio@gmail.com"
              className="btn btn-secondary"
              aria-label={t('homepage.hero.contactAriaLabel')}
            >
              {t('homepage.hero.contactButton')}
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <div className="scroll-text">{t('homepage.hero.scroll')}</div>
      </div>
    </section>
  );
};

export default Hero;
