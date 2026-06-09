// Contact.jsx
import React, { useState, useEffect } from "react";
import './Contact.css';

/**
 * Sanitize a string by stripping HTML tags and trimming whitespace.
 * Prevents stored-XSS if values are ever rendered outside React's auto-escaping.
 */
function sanitize(str) {
  if (typeof str !== "string") return "";
  return str.replace(/<[^>]*>/g, "").trim();
}

/** Basic email format validation */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Contact() {
  const [messages, setMessages] = useState([]);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("contactMessages");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setMessages(parsed);
        }
      }
    } catch {
      // Corrupted localStorage data — ignore silently
      localStorage.removeItem("contactMessages");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    const name = sanitize(e.target.name.value);
    const email = sanitize(e.target.email.value);
    const subject = sanitize(e.target.subject.value);
    const message = sanitize(e.target.message.value);

    // Validate
    if (!name || !email || !subject || !message) {
      setFormError("Tous les champs sont requis.");
      return;
    }
    if (!isValidEmail(email)) {
      setFormError("Adresse email invalide.");
      return;
    }
    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      setFormError("Un ou plusieurs champs dépassent la longueur maximale.");
      return;
    }

    const newMessage = { name, email, subject, message, date: new Date().toLocaleString() };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));

    e.target.reset();
    setFormSuccess("Message envoyé et enregistré localement !");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact</h1>

        {formError && <p className="form-error" role="alert">{formError}</p>}
        {formSuccess && <p className="form-success" role="status">{formSuccess}</p>}

        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name" placeholder="Votre nom" maxLength={100} required />
          <input name="email" type="email" placeholder="Votre email" maxLength={254} required />
          <input name="subject" placeholder="Sujet" maxLength={200} required />
          <textarea name="message" placeholder="Votre message" rows="5" maxLength={2000} required />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
