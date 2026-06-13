import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Header.css';
import MenuIcon from './MenuIcon';

const Header = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const navItems = [
    { to: '/skills', label: 'header.nav.skills' },
    { to: '/experience', label: 'header.nav.experience' },
    { to: '/education', label: 'header.nav.education' },
    { to: '/person', label: 'header.nav.person' },
  ];

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
        type="button"
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-controls="header-nav"
        aria-label={open ? t('header.nav.closeMenu') : t('header.nav.openMenu')}
        aria-expanded={open}
        onClick={toggle}
      >
        <MenuIcon />
      </button>

      <nav
        id="header-nav"
        className={`nav-links ${open ? 'open' : ''}`}
        aria-label={t('header.primaryNav')}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={close}
              >
                {t(item.label)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <ThemeSwitcher />
    </header>
  );
};

export default Header;
