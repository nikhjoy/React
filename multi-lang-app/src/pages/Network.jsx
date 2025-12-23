// src/pages/Network.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { texts } from "../text"; // your texts index export

// Bulk import all images from src/assets/logos using Vite
// NOTE: path is relative to this file. Adjust if your folder structure differs.
const modules = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg}', { eager: true });

// Build map: filename -> resolved URL
const logosMap = Object.fromEntries(
  Object.keys(modules).map((p) => {
    const parts = p.split('/');
    const filename = parts[parts.length - 1];
    return [filename, modules[p].default || modules[p]];
  })
);

// Small placeholder (optional) — create this file or change path if you want a different fallback
const PLACEHOLDER = "/assets/logos/placeholder.png";

export default function Network() {
  const { locale = "fr" } = useParams();
  const t = (texts[locale] && texts[locale].network) ? texts[locale].network : defaultNetwork();

  // resolve a logo entry to an <img> src URL
  const resolveLogoSrc = (logo) => {
    if (!logo) return null;

    // 1) If language data provided full public path -> use as-is
    if (logo.src && typeof logo.src === "string" && logo.src.startsWith("/")) {
      return logo.src;
    }

    // 2) If language file uses 'file' (just filename in src/assets/logos)
    if (logo.file && logosMap[logo.file]) {
      return logosMap[logo.file];
    }

    // 3) If language file provided src path but without leading slash (or relative) attempt to find file by basename
    if (logo.src && typeof logo.src === "string") {
      const basename = logo.src.split("/").pop();
      if (basename && logosMap[basename]) return logosMap[basename];
    }

    // 4) Try by alt/name fallback (not guaranteed)
    if (logo.alt) {
      // try alt -> replace spaces with - and lowercase (optional heuristic)
      const candidate = logo.alt.toLowerCase().replace(/\s+/g, "");
      const found = Object.keys(logosMap).find(k => k.toLowerCase().includes(candidate));
      if (found) return logosMap[found];
    }

    // 5) not found
    return null;
  };

  return (
    <main className="network-page">
      <div className="container">

        {/* Page header */}
        <header className="network-header">
          <h1 className="network-title"></h1>
          {t.intro && <p
  className="network-intro"
  dangerouslySetInnerHTML={{ __html: t.intro }}
></p>
}
        </header>

        {/* Sections (dynamic) */}
        {Array.isArray(t.sections) && t.sections.map((section, si) => (
          <section className="network-section" key={si} id={section.id || `section-${si}`}>
            <div className="section-head">
              <h2 className="section-title">{section.title}</h2>
              {section.description && <p className="section-desc">{section.description}</p>}
            </div>

            {/* logos grid */}
            <div className="network-grid">
              {Array.isArray(section.logos) && section.logos.map((logo, li) => {
                const src = resolveLogoSrc(logo);
                return (
                  <div className="logo-item" key={li}>
                    {src ? (
                      <img
                        src={src}
                        alt={logo.alt || `partner-${li}`}
                        onError={(e) => {
                          console.warn("logo failed to load:", src);
                          // show placeholder if available; else hide
                          if (PLACEHOLDER) e.currentTarget.src = PLACEHOLDER;
                          else e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      // fallback visual if not found
                      <div className="logo-missing" title={logo.alt || logo.file || ""}>
                        {logo.alt || logo.file || "logo"}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

      </div>
    </main>
  );
}

/* fallback placeholder if network text not provided in texts files */
function defaultNetwork() {
  return {
    pageTitle: "Our Network",
    intro: "We work with trusted partners across multiple categories.",
    sections: [
      {
        id: "distribution",
        title: "Matériel de ligne de distribution électrique",
        description: "En matière de ligne de distribution électrique, nous collaborons avec des partenaires de confiance...",
        logos: [
          { file: "APC.png", alt: "APC" },
          { file: "sicame.png", alt: "Sicame" },
          { file: "ensto.png", alt: "Ensto" }
        ]
      },
      {
        id: "cables",
        title: "Câbles électriques",
        description: "Nous sélectionnons pour nos câbles électriques des partenaires leaders ...",
        logos: [
          { file: "generalcavi.png", alt: "General Cavi" },
          { file: "prysmian.png", alt: "Prysmian" }
        ]
      }
    ]
  };
}
