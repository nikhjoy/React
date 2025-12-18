import React, { useState } from "react";
import "../styles/ContactPage.css";

export default function ContactPage({ localeTexts }) {
  const texts = localeTexts || {
    title: "Contacts",
    subtitle: "CONTACT DETAILS",
    description:
      "We endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.",
    emailLabel: "info@prsint.fr",
    form: {
      name: "Name",
      phone: "Phone",
      email: "Email Address",
      subject: "Subject",
      message: "How can we help you? Feel free to get in touch!",
      submit: "Get In Touch",
    },
  };

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

  // basic validation
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

  // email format check
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
              {/* NAME */}
              <label className="field">
                <span className="field-icon">
                  <UserIcon />
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={texts.form.name}
                  aria-label={texts.form.name}
                  className="field-input"
                  required
                />
              </label>

              {/* PHONE */}
              <label className="field">
                <span className="field-icon">
                  <PhoneIcon />
                </span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={texts.form.phone}
                  aria-label={texts.form.phone}
                  className="field-input"
                  required
                />
              </label>

              {/* EMAIL */}
              <label className="field">
                <span className="field-icon">
                  <MailIcon />
                </span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={texts.form.email}
                  aria-label={texts.form.email}
                  className="field-input"
                  required
                />
              </label>

              {/* SUBJECT */}
              <label className="field">
                <span className="field-icon">
                  <InfoIcon />
                </span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={texts.form.subject}
                  aria-label={texts.form.subject}
                  className="field-input"
                  required
                />
              </label>

              {/* MESSAGE */}
              <label className="field field-textarea">
                <span className="field-icon">
                  <PenIcon />
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={texts.form.message}
                  aria-label={texts.form.message}
                  className="field-input textarea"
                  rows="4"
                  required
                />
              </label>

              <button type="submit" className="btn-submit">
                <SendIcon />
                {texts.form.submit}
              </button>

              {sent && <p className="sent-msg">Message has been sent ✓</p>}
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ICONS */

function UserIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 8c0-4 4-6 8-6s8 2 8 6"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75 12.2 12.2 0 0 0 .7 2.69 1 1 0 0 1-.24 1L8.91 9.91a16 16 0 0 0 6.18 6.18l1.47-1.64a1 1 0 0 1 1-.24 12.2 12.2 0 0 0 2.69.7 1 1 0 0 1 .75 1z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        d="M3 7.5L12 13l9-5.5V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.5z"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path fill="none" stroke="currentColor" strokeWidth="1.4" d="M12 8v8M12 6h.01" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        d="M3 21l3-1 11-11 1-3-3 1L4 20z"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeWidth="1.4" d="M22 2L11 13" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        d="M22 2L15 22l-4-9-9-4 20-7z"
      />
    </svg>
  );
}
