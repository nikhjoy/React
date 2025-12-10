import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../constants/locales';

export default function LanguageSwitcher() {
  const loc = useLocation();
  const nav = useNavigate();

  // current full path, query and hash
  const { pathname, search, hash } = loc;

  // split path segments
  const parts = pathname.split('/').filter(Boolean); // e.g. ['fr','clients']
  const currentLocale = SUPPORTED_LOCALES.includes(parts[0]) ? parts[0] : DEFAULT_LOCALE;
  const rest = parts.slice(SUPPORTED_LOCALES.includes(parts[0]) ? 1 : 0).join('/');

  const go = (locale) => {
    // build new path preserving rest, query and hash
    const base = rest ? `/${locale}/${rest}` : `/${locale}`;
    nav(`${base}${search}${hash}`, { replace: false });
  };

  return (
    <div className="lang-switch">
      {SUPPORTED_LOCALES.map(loc => (
        <button
          key={loc}
          onClick={() => go(loc)}
          className={loc === currentLocale ? 'lang active' : 'lang'}
          aria-pressed={loc === currentLocale}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
