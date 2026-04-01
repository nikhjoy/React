// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoHome from "../assets/images/prs_05.png";
import logoInner from "../assets/images/prs_07.png";
import { texts } from "../text";
import { getLocaleFromPath, changeLocaleInPath } from "../utils/locale";

export default function Header({ variant = "default" }) {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname, "fr");
  const t = texts[locale]?.header || texts.fr.header;
  const [menuOpen, setMenuOpen] = useState(false);

  const toLocalePath = (page = "") =>
    page ? `/${locale}/${page}` : `/${locale}`;

  // 🔑 HEADER VARIANT LOGIC
  const headerClass = [
    "prs-header",
    variant === "home" ? "prs-header--home" : "prs-header--default",
    menuOpen ? "menu-open" : ""
  ].join(" ");

  const logoSrc = variant === "home" ? logoHome : logoInner;

  return (
    <header className={headerClass}>
      <div className="container">

        {/* LOGO */}
        <div className="logo">
          <Link to={toLocalePath()} onClick={() => setMenuOpen(false)}>
            <img src={logoSrc} alt={t.logoAlt || "PRS International"} />
          </Link>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* NAVIGATION */}
        <nav className="nav-menu">
          <Link
            to={toLocalePath()}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {t.navHome}
          </Link>

          <Link
            to={toLocalePath("services")}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {t.navServices}
          </Link>

          <Link
            to={toLocalePath("network")}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {t.navNetwork}
          </Link>

          <Link
            to={toLocalePath("contact")}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {t.navContact}
          </Link>

          {/* LANGUAGE SWITCH */}
          <div className="lang-switch">
            <Link to={changeLocaleInPath(pathname, "fr")} className="lang">
              FR
            </Link>
            <Link to={changeLocaleInPath(pathname, "en")} className="lang">
              EN
            </Link>
            <Link to={changeLocaleInPath(pathname, "esp")} className="lang">
              ESP
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
