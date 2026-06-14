import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const scrollToTop = () => globalThis.scrollTo({ top: 0, behavior: 'smooth' });

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function check() {
      setShowTop(globalThis.scrollY > 300);
    }
    globalThis.addEventListener('scroll', check);
    check();
    return () => globalThis.removeEventListener('scroll', check);
  }, []);

  useEffect(() => {
    globalThis.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <button
      aria-label={t('common.scrollToTop')}
      className={`scroll-top ${showTop ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
