import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ThemeSwitcher.css';

type DarkAccent = 'green' | 'magenta' | 'yellow';
type LightAccent = 'coral' | 'pink' | 'blue';
type Accent = DarkAccent | LightAccent;

const DARK_ACCENTS: DarkAccent[] = ['green', 'magenta', 'yellow'];
const LIGHT_ACCENTS: LightAccent[] = ['coral', 'pink', 'blue'];

const ThemeSwitcher = () => {
  const { t } = useTranslation();
  // Dropdown open/close state for mobile
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  // Toggle dropdown open/close
  function handleDropdownToggle(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setDropdownOpen((open) => !open);
  }

  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem('site-mode') || 'dark';
    } catch {
      return 'dark';
    }
  });

  // Maintain independent accent for each theme
  const [accentDark, setAccentDark] = useState(() => {
    try {
      return localStorage.getItem('site-accent-dark') || 'green';
    } catch {
      return 'green';
    }
  });

  const [accentLight, setAccentLight] = useState(() => {
    try {
      return localStorage.getItem('site-accent-light') || 'coral';
    } catch {
      return 'coral';
    }
  });

  const accent = mode === 'light' ? accentLight : accentDark;

  useEffect(() => {
    function normalizeAccent(current: Accent): Accent {
      const validAccents: Accent[] =
        mode === 'light' ? LIGHT_ACCENTS : DARK_ACCENTS;

      if (!validAccents.includes(current)) {
        const replacement = validAccents[0];
        if (mode === 'light') setAccentLight(replacement as LightAccent);
        else setAccentDark(replacement as DarkAccent);
        return replacement as Accent;
      }

      return current as Accent;
    }

    try {
      let current = accent as Accent;
      current = normalizeAccent(current);
      const html = document.documentElement;
      html.dataset.theme = mode === 'light' ? 'light' : current;
      html.dataset.accent = current;
      localStorage.setItem('site-mode', mode);

      if (mode === 'light') localStorage.setItem('site-accent-light', current);
      else localStorage.setItem('site-accent-dark', current);
    } catch {}
  }, [mode, accent]);

  const toggleMode = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  function selectAccent(p: Accent) {
    if (mode === 'light') setAccentLight(p);
    else setAccentDark(p);
  }

  return (
    <div
      className="theme-switcher"
      aria-label={t('header.themeSwitcher.ariaLabel')}
      style={{ gap: 10 }}
    >
      {/* Desktop: original controls */}
      <div className="theme-controls-desktop">
        <button
          onClick={toggleMode}
          className="theme-toggle-pill"
          aria-pressed={mode === 'light'}
          aria-label={t('header.themeSwitcher.activateTheme', {
            mode: t(`header.themeSwitcher.${mode}`),
          })}
          title={t('header.themeSwitcher.activateTheme', {
            mode: t(`header.themeSwitcher.${mode}`),
          })}
        >
          <span className="pill-track">
            <span
              className={`pill-label dark ${mode === 'dark' ? 'active' : ''}`}
            >
              {t('header.themeSwitcher.dark')}
            </span>
            <span
              className={`pill-label light ${mode === 'light' ? 'active' : ''}`}
            >
              {t('header.themeSwitcher.light')}
            </span>
            <span className={`pill-slider ${mode}`}></span>
          </span>
        </button>
        <div
          className="accent-group"
          aria-label={t('header.themeSwitcher.accentColor')}
        >
          {(mode === 'light' ? LIGHT_ACCENTS : DARK_ACCENTS).map((p) => (
            <button
              key={p}
              onClick={() => selectAccent(p)}
              className={`theme-btn ${p} ${p === accent ? 'active' : ''}`}
              aria-pressed={p === accent}
              aria-label={t('header.themeSwitcher.switchAccent', { accent: p })}
              title={t('header.themeSwitcher.switchAccent', { accent: p })}
              style={{ cursor: 'pointer', position: 'relative' }}
            />
          ))}
        </div>
      </div>

      {/* Mobile: compact dropdown */}
      <div className="theme-controls-mobile">
        <div
          className="theme-dropdown"
          ref={dropdownRef}
        >
          <button
            className="theme-dropdown-toggle"
            aria-label={t('header.themeSwitcher.ariaLabel')}
            title={t('header.themeSwitcher.ariaLabel')}
            aria-expanded={dropdownOpen}
            onClick={handleDropdownToggle}
          >
            <img
              src={import.meta.env.BASE_URL + 'theme.svg'}
              alt={t('header.themeSwitcher.themeIconAriaLabel')}
              style={{ width: 24, height: 24, display: 'block' }}
            />
          </button>
          {dropdownOpen && (
            <div className="theme-dropdown-menu">
              <button
                onClick={toggleMode}
                className="theme-toggle-pill"
                aria-pressed={mode === 'light'}
                aria-label={t('header.themeSwitcher.activateTheme', {
                  mode: t(`header.themeSwitcher.${mode}`),
                })}
                title={t('header.themeSwitcher.activateTheme', {
                  mode: t(`header.themeSwitcher.${mode}`),
                })}
                style={{ marginBottom: 8 }}
              >
                <span className="pill-track">
                  <span
                    className={`pill-label dark ${mode === 'dark' ? 'active' : ''}`}
                  >
                    {t('header.themeSwitcher.dark')}
                  </span>
                  <span
                    className={`pill-label light ${mode === 'light' ? 'active' : ''}`}
                  >
                    {t('header.themeSwitcher.light')}
                  </span>
                  <span className={`pill-slider ${mode}`}></span>
                </span>
              </button>
              <div
                className="accent-group compact"
                aria-label={t('header.themeSwitcher.accentColor')}
              >
                {(mode === 'light' ? LIGHT_ACCENTS : DARK_ACCENTS).map((p) => (
                  <button
                    key={p}
                    onClick={() => selectAccent(p)}
                    className={`theme-btn ${p} ${p === accent ? 'active' : ''}`}
                    aria-pressed={p === accent}
                    aria-label={t('header.themeSwitcher.switchAccent', {
                      accent: p,
                    })}
                    title={t('header.themeSwitcher.switchAccent', {
                      accent: p,
                    })}
                    style={{ width: 28, height: 28, margin: 2 }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;

