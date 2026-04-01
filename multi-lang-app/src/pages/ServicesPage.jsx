// src/pages/ServicesPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { texts } from "../text";
import servicesIcon from "../assets/images/serv1.svg";
import FloatingContactButton from "../components/FloatingContactButton";
/**
 * Services page: shows long, readable text sections.
 * - prefers texts[locale].services.long (array of { heading, paragraph, bullets })
 * - if missing, falls back to texts[locale].services.cards -> converted to sections
 */
export default function ServicesPage() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  const locale = parts[0] || "fr";
  const t = texts[locale] || texts.fr;

  const srv = texts[locale]?.services || {};
  const title = srv.title || "Our Services";
  const intro = srv.intro || srv.description || "";

  // preferred: structured long content
  const long = Array.isArray(srv.long) && srv.long.length ? srv.long : null;

  // fallback: convert cards -> sections (keeps content even if you didn't add long)
  const fallbackFromCards = Array.isArray(srv.cards) && srv.cards.length
    ? srv.cards.map((c) => {
      // try to split desc into paragraph + bullets heuristically (if desc contains newline with bullets)
      const raw = (c.desc || c.description || "").trim();
      // if raw contains "•" or newlines, split lines into bullets
      const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      const bullets = lines.filter(l => l.startsWith("•") || l.startsWith("-") || l.match(/^[\u2022\u2023]/));
      const paragraphLines = lines.filter(l => !bullets.includes(l));
      return {
        heading: c.title,
        paragraph: paragraphLines.join(" "),
        bullets: bullets.length ? bullets.map(b => b.replace(/^•\s?/, "").replace(/^-+\s?/, "")) : []
      };
    })
    : [];

  const sections = long || fallbackFromCards;

  return (
    <main className="services-page">
      <div className="container">
        <header className="services-page-header">
          <h1 className="services-page-title">
            <img
              src={servicesIcon}
              alt=""
              className="services-title-icon"
              aria-hidden="true"
            />
            <span>{title}</span>
          </h1>
          {intro && <p className="services-intro" dangerouslySetInnerHTML={{ __html: intro }} />}
        </header>

        <article className="services-content">
{sections.length ? (
  <>
    {/* 1 - FULL WIDTH */}
    <section className="services-section full-width">
      {sections[0]?.heading && <h2 className="services-section-title">{sections[0].heading}</h2>}
      {sections[0]?.paragraph && <p className="services-paragraph">{sections[0].paragraph}</p>}
      {Array.isArray(sections[0]?.bullets) && (
        <ul className="services-bullets">
          {sections[0].bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </section>

    {/* 2 + 3 BELOW */}
    <div className="services-row">
      {sections[1] && (
        <section className="services-section half-width">
          {sections[1].heading && <h2 className="services-section-title">{sections[1].heading}</h2>}
          {sections[1].paragraph && <p className="services-paragraph">{sections[1].paragraph}</p>}
          {Array.isArray(sections[1].bullets) && (
            <ul className="services-bullets">
              {sections[1].bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}
        </section>
      )}

      {sections[2] && (
        <section className="services-section half-width">
          {sections[2].heading && <h2 className="services-section-title">{sections[2].heading}</h2>}
          {sections[2].paragraph && <p className="services-paragraph">{sections[2].paragraph}</p>}
          {Array.isArray(sections[2].bullets) && (
            <ul className="services-bullets">
              {sections[2].bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}
        </section>
      )}
    </div>
  </>
) : (
  <section className="services-section">
    <p className="services-paragraph">No service details available.</p>
  </section>
)}
        </article>

         <FloatingContactButton text={t.hero} />
      </div>
    </main>
  );
}
