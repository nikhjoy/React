// src/components/Services.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import defaultEiffel from "../assets/images/eiffel.svg";
import defaultEngineering from "../assets/images/engineering.svg";
import defaultStore from "../assets/images/store.svg";

export default function Services({ text = {} }) {
  const { eyebrow, title, description, cards } = text;

  const fallbackCards = [
    { icon: defaultEiffel, title: "Gestion de projet", desc: "Planification complète..." },
    { icon: defaultEngineering, title: "Ingénierie Avancée", desc: "Solutions d'ingénierie..." },
    { icon: defaultStore, title: "Construction / Installation", desc: "Construction d'infrastructures..." }
  ];

  const raw = Array.isArray(cards) && cards.length ? cards : fallbackCards;
  const list = raw.slice(0, 3); // always show 3 tiles (Home)

  // correct locale detection: first segment after basename (/prs)
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  // expected path: /prs/<locale>/... so locale is parts[1] if basename '/prs' is present.
  // but to be robust handle both cases: if first is 'prs' then locale is 2nd, else first.
  let locale = "fr";
  if (parts[0] === "prs") locale = parts[1] || "fr";
  else locale = parts[0] || "fr";

  return (
    <section className="prs-services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="services-left">
            <h2 className="services-title">{title || (locale === "fr" ? "Portefeuille de services" : "Service Portfolio")}</h2>
          </div>

          <div className="services-right">
            {description || "Notre équipe expérimentée de spécialistes utilise une technologie de pointe..."}
          </div>
        </div>

        <div className="services-grid">
          {list.map((c, i) => {
            const cardDesc = (c && (c.desc || c.description)) || description || "";
            // icon resolution: if c.icon is an imported asset, use as-is; else fallback
            const iconSrc = c.icon || [defaultEiffel, defaultEngineering, defaultStore][i];
            return (
              <div className="service-card" key={i}>
                <img src={iconSrc} alt={c.title} className="service-icon" />
                <h3 className="service-title">{c.title}</h3>
                <p className="service-desc" style={{ whiteSpace: "pre-line" }}>{cardDesc}</p>

                {/* localized More link */}
                <Link to={`/${locale}/services`} className="service-more-btn" aria-label={`More about ${c.title}`}>
                  {locale === "fr" ? "En savoir plus →" : locale === "esp" ? "Más →" : "More →"}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
