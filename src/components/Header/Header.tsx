import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header id="header">
      <Link
        className="title"
        to="/"
        aria-label={t('header.nav.home')}>
        {t('header.title')}
      </Link>

      <nav
        className="nav-links"
        aria-label={t('header.primaryNav')}>
        <ul>
          <li>
            <NavLink to="/skills">{t('header.nav.skills')}</NavLink>
          </li>
          <li>
            <NavLink to="/experience">{t('header.nav.experience')}</NavLink>
          </li>
          <li>
            <NavLink to="/education">{t('header.nav.education')}</NavLink>
          </li>
          <li>
            <NavLink to="/person">{t('header.nav.person')}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
