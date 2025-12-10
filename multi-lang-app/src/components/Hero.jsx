import React from "react";
import heroImg from "../assets/images/e1.jpg";

export default function Hero({ text }) {
  return (
    <section className="prs-hero-section">
      <div className="container">
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            <h1>{text.title}</h1>
            <p>{text.description}</p>
            <a href="#" className="hero-button">{text.button}</a>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <img src={heroImg} alt="hero visual" />
          </div>

        </div>
      </div>
    </section>
  );
}
