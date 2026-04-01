import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function FloatingContactButton({ text }) {
  const navigate = useNavigate();
  const location = useLocation();

  const lang = location.pathname.split("/").filter(Boolean)[0] || "en";

  return (
    <button
      className="floating-contact-btn"
      onClick={() => navigate(`/${lang}/contact`)}
      aria-label={text.button}
    >
      {text.button}
    </button>
  );
}
