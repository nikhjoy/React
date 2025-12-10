// src/components/Footer.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { texts } from "../text";
import { getLocaleFromPath } from "../utils/locale";

export default function Footer() {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname, "fr");
  const t = texts[locale]?.footer || texts.fr.footer || {};

  const toLocalePath = (page = "") => (page ? `/${locale}/${page}` : `/${locale}`);

  return (
    <>
      <div className="footer-green-top">
        <div className="footer-green-inner">
          <h2 className="footer-banner-title">
            {t.bannerTitleLine1 || "Fournisseurs de services innovants et fiables"}<br />
            <span>{t.bannerTitleLine2 || "PRS International"}</span>
          </h2>
          <div className="footer-banner-underline" />
        </div>
      </div>

      <footer className="prs-footer">
        <div className="prs-footer-container">
          <div className="footer-col">
            <img src={logo} alt={t.logoAlt || "Power Refurbishment Solutions"} className="prs-footer-logo" />
          </div>

          <div className="footer-col footer-contact left-align">
            <a href={`mailto:${t.email || "info@prsint.fr"}`} className="footer-email">{t.email || "info@prsint.fr"}</a>

            <div className="footer-address">
              <strong>PRS International SAS</strong><br/>
              224 boulevard du Moulin de la Tour<br/>
              92140 Clamart, France
            </div>
          </div>

          <div className="footer-col footer-links">
            <Link to={toLocalePath()} className="footer-link">{t.about || "À propos de nous"}</Link>
            <Link to={toLocalePath("services")} className="footer-link active">{t.services || "Nos services"}</Link>
            <div className="footer-menu-icon">⋮</div>
          </div>
        </div>

        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>
      </footer>
    </>
  );
}
