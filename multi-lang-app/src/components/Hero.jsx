import React from "react";
import defaultBanner from "../assets/images/new-banner1.jpg";
import testBanner from "../assets/images/new-banner2.jpg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Hero({ text, variant = "default" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const lang = pathParts[0] || "en"; // fallback
  const bannerImage =
    variant === "test" ? testBanner : defaultBanner;

  return (
    <section
      className="prs-hero-section"
      style={{
        backgroundImage: `
          linear-gradient(to right,
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.15)
          ),
          url(${bannerImage})
        `
      }}
    >
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-left">
            <h1>{text.title}</h1>

            <p className="hero-description">
              {text.description}
            </p>

            <button className="hero-button"  onClick={() => navigate(`/${lang}/contact`)}>
              {text.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
