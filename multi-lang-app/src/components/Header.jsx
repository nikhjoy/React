// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/prs_02.png";
import { texts } from "../text";
import { getLocaleFromPath, changeLocaleInPath } from "../utils/locale";

export default function Header() {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname, "fr");
  const t = texts[locale]?.header || texts.fr.header;

  // build locale-prefixed path (e.g. /fr, /fr/services)
  const toLocalePath = (page = "") => (page ? `/${locale}/${page}` : `/${locale}`);

  return (
    <header className="prs-header">
      <div className="container">
        <div className="logo">
          <Link to={toLocalePath()}>
            <img src={logo} alt={t.logoAlt || "PRS International"} />
          </Link>
        </div>

        <nav className="nav-menu">
          <Link to={toLocalePath()} className="nav-link">
            {t.navHome || "Accueil"}
          </Link>

          <Link to={toLocalePath("services")} className="nav-link">
            {t.navServices || "Services"}
          </Link>

          <Link to={toLocalePath("network")} className="nav-link">
            {t.navNetwork || "Network"}
          </Link>

          <Link to={toLocalePath("contact")} className="nav-link">
            {t.navContact || "Contact"}
          </Link>

          <div className="lang-switch">
            <Link
              to={changeLocaleInPath(pathname, "fr")}
              className={locale === "fr" ? "lang active" : "lang"}
            >
              FR
            </Link>
            <Link
              to={changeLocaleInPath(pathname, "en")}
              className={locale === "en" ? "lang active" : "lang"}
            >
              EN
            </Link>
            <Link
              to={changeLocaleInPath(pathname, "esp")}
              className={locale === "esp" ? "lang active" : "lang"}
            >
              ESP
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
