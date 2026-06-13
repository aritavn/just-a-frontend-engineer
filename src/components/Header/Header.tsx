import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import MenuIcon from './MenuIcon';

const Header = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  function toggle(): void {
    setOpen((o) => !o);
  }

  function close(): void {
    setOpen(false);
  }

  return (
    <header id="header">
      <Link
        className="title"
        to="/"
        aria-label={t('header.nav.home')}
        onClick={close}
      >
        {t('header.title')}
      </Link>

      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-label={open ? t('header.nav.closeMenu') : t('header.nav.openMenu')}
        aria-expanded={open}
        onClick={toggle}
      >
        <MenuIcon />
      </button>

      <nav
        className={`nav-links ${open ? 'open' : ''}`}
        aria-label={t('header.primaryNav')}
      >
        <ul>
          <li>
            <NavLink
              to="/skills"
              onClick={close}
            >
              {t('header.nav.skills')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              onClick={close}
            >
              {t('header.nav.experience')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              onClick={close}
            >
              {t('header.nav.education')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/person"
              onClick={close}
            >
              {t('header.nav.person')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
