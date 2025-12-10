// src/pages/ServicesPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { texts } from "../text";

/**
 * Services page: shows long, readable text sections.
 * - prefers texts[locale].services.long (array of { heading, paragraph, bullets })
 * - if missing, falls back to texts[locale].services.cards -> converted to sections
 */
export default function ServicesPage() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  const locale = parts[0] || "fr";

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
          <h1>{title}</h1>
          {intro && <p className="services-intro" dangerouslySetInnerHTML={{ __html: intro }} />}
        </header>

        <article className="services-content">
          {sections.length ? (
            sections.map((sec, idx) => (
              <section key={idx} className="services-section">
                {sec.heading && <h2 className="services-section-title">{sec.heading}</h2>}
                {sec.paragraph && <p className="services-paragraph">{sec.paragraph}</p>}
                {Array.isArray(sec.bullets) && sec.bullets.length > 0 && (
                  <ul className="services-bullets">
                    {sec.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </section>
            ))
          ) : (
            <section className="services-section">
              <p className="services-paragraph">No service details available.</p>
            </section>
          )}
        </article>
      </div>
    </main>
  );
}
