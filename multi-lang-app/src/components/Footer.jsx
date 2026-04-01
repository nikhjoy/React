// src/components/Footer.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/prs_05.png";
import { texts } from "../text";
import { getLocaleFromPath } from "../utils/locale";
import footerBg from "../assets/images/section_bg_4.png";


export default function Footer() {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname, "fr");
  const t = texts[locale]?.footer || texts.fr.footer || {};

  const toLocalePath = (page = "") => (page ? `/${locale}/${page}` : `/${locale}`);

  return (
    <>
      <div className="footer-image-banner" style={{ backgroundImage: `url(${footerBg})` }}>
        <div className="footer-image-content">
          <h2 className="footer-banner-title">
            {t.bannerTitleLine1}
            <span className="footer-banner-brand">
              {t.bannerTitleLine2}
            </span>
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
          </div>

          <div className="footer-col footer-links">
            <Link to={toLocalePath()} className="footer-link">{t.about || "À propos de nous"}</Link>
            <Link to={toLocalePath("services")} className="footer-link">{t.services || "Nos services"}</Link>
            <div className="footer-menu">
              <div className="footer-menu-icon">⋮</div>

              <Link
                to={toLocalePath("contact")}
                className="footer-menu-dropdown"
              >
                {t.contact || "Contactez-nous"}
              </Link>
            </div>


          </div>
        </div>

        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>
      </footer>
    </>
  );
}
