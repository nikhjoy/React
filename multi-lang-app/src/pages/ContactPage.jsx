// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ContactPage.css";
import { texts as ALL_TEXTS } from "../text";
import { getLocaleFromPath } from "../utils/locale";

export default function ContactPage() {
  /* --------------------------------------------------
     Locale + texts (same pattern as other pages)
  -------------------------------------------------- */
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname, "fr");

  const texts =
    ALL_TEXTS[locale]?.contact ||
    ALL_TEXTS.fr.contact;

  /* --------------------------------------------------
     Form state
  -------------------------------------------------- */
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("https://softweb.in/prs/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send email: " + data.error);
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }
  }

  /* --------------------------------------------------
     Render
  -------------------------------------------------- */
  return (
    <main className="contact-root">
      <section className="contact-grid">
        {/* LEFT SIDE */}
        <aside className="contact-left">
          <p className="contact-subtitle">{texts.subtitle}</p>
          <h1 className="contact-title">{texts.title}</h1>
          <p className="contact-desc">{texts.description}</p>

          <div className="contact-email-row">
            <span className="email-badge">
              <MailIcon />
            </span>
            <a className="contact-email" href={`mailto:${texts.emailLabel}`}>
              {texts.emailLabel}
            </a>
          </div>
        </aside>

        {/* RIGHT SIDE */}
        <aside className="contact-right">
          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <Field
                icon={<UserIcon />}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={texts.form.name}
              />

              <Field
                icon={<PhoneIcon />}
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={texts.form.phone}
              />

              <Field
                icon={<MailIcon />}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={texts.form.email}
              />

              <Field
                icon={<InfoIcon />}
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder={texts.form.subject}
              />

              <label className="field field-textarea">
                <span className="field-icon">
                  <PenIcon />
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={texts.form.message}
                  className="field-input textarea"
                  rows="4"
                  required
                />
              </label>

              <button type="submit" className="btn-submit">
                <SendIcon />
                {texts.form.submit}
              </button>

              {sent && (
                <p className="sent-msg">
                  {locale === "fr"
                    ? "Message envoyé ✓"
                    : locale === "esp"
                    ? "Mensaje enviado ✓"
                    : "Message sent ✓"}
                </p>
              )}
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
}

/* --------------------------------------------------
   Small helper
-------------------------------------------------- */
function Field({ icon, ...props }) {
  return (
    <label className="field">
      <span className="field-icon">{icon}</span>
      <input className="field-input" required {...props} />
    </label>
  );
}

/* --------------------------------------------------
   ICONS (unchanged style)
-------------------------------------------------- */

function UserIcon() {
  return <Icon d="M12 12a4 4 0 1 0 0-8m-8 8c0-4 4-6 8-6s8 2 8 6" />;
}

function PhoneIcon() {
  return (
    <Icon d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09" />
  );
}

function MailIcon() {
  return <Icon d="M3 7.5L12 13l9-5.5V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />;
}

function InfoIcon() {
  return <Icon d="M12 8v8M12 6h.01" circle />;
}

function PenIcon() {
  return <Icon d="M3 21l3-1 11-11 1-3-3 1L4 20z" />;
}

function SendIcon() {
  return <Icon d="M22 2L11 13M22 2L15 22l-4-9-9-4z" />;
}

function Icon({ d, circle }) {
  return (
    <svg className="icon" viewBox="0 0 24 24">
      {circle && (
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      )}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        d={d}
      />
    </svg>
  );
}
