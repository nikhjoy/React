import React from "react";
import heroBg from "../assets/images/sky.png";

export default function FeatureHero({ text = {} }) {
  const eyebrow = text.eyebrow || "POWER, OIL & GAS";
  const title = text.title || "Précision dans la démonstration de\nl'excellence dans l'énergie, le pétrole et le\ngaz";

  return (
    <section className="prs-feature-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="prs-feature-inner">
        <div className="feature-eyebrow">{eyebrow}</div>
        <h1 className="feature-title">{title}</h1>
      </div>
    </section>
  );
}
