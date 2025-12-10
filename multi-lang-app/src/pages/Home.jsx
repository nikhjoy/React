import React from "react";
import { useParams } from "react-router-dom";
import { texts } from "../text";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FeatureHero from "../components/FeatureHero";

export default function Home() {
  const { locale = "fr" } = useParams();
  const t = texts[locale] || texts.fr;

  return (
    <div>
      <Hero text={t.hero} />
      <About text={t.about} />
      <Services text={t.services} />
      <FeatureHero text={t.featureHero} />
    </div>
  );
}
