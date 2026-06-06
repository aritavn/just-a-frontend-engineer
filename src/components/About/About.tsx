import parse from 'html-react-parser';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import profileImage from '../../assets/profile-photo.webp';
import SectionHeader from '../SectionHeader/SectionHeader';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    el.classList.add('about-animate-init');

    const observer = new globalThis.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('about-animate');
        } else {
          el.classList.remove('about-animate');
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
    >
      <SectionHeader
        sectionLabelText={t('homepage.about.sectionTitle')}
        sectionTitleText={t('homepage.about.title')}
      />

      <div className="about-layout">
        <div className="about-content">
          <p>{parse(t('homepage.about.paragraph1'))}</p>
          <p>{parse(t('homepage.about.paragraph2'))}</p>
          <p>{parse(t('homepage.about.paragraph3'))}</p>
        </div>
        <figure
          className="about-photo-frame"
          aria-label={t('homepage.about.photoAlt')}
        >
          <div className="about-photo-accent" />
          <div
            className="about-photo-inner"
            style={{
              backgroundImage: `url(${profileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img
              src={profileImage}
              alt={t('homepage.about.photoAlt')}
              className="about-photo"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default About;
