// Messages.jsx
import React, { useState, useEffect } from "react";

const AUTH_KEY = "messagesAuthenticated";

function Messages() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      try {
        const stored = localStorage.getItem("contactMessages");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setMessages(parsed);
          }
        }
      } catch {
        setMessages([]);
      }
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    // Use an environment variable for the admin password at build time.
    // Falls back to a default for development only.
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || "admin2024";
    if (password === adminPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, "true");
    } else {
      setError("Mot de passe incorrect.");
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="contact-section">
        <div className="contact-container">
          <h2>Accès protégé</h2>
          <p>Veuillez entrer le mot de passe administrateur pour voir les messages.</p>
          {error && <p className="form-error" role="alert">{error}</p>}
          <form onSubmit={handleLogin} className="contact-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
              autoComplete="current-password"
            />
            <button type="submit">Accéder</button>
          </form>
        </div>
      </section>
    );
  }

  if (!messages.length) {
    return (
      <section className="contact-section">
        <div className="contact-container">
          <p>Aucun message pour l'instant.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h3>Messages enregistrés :</h3>
        {messages.map((msg, idx) => (
          <div key={idx} className="message">
            <p><strong>Nom :</strong> {msg.name}</p>
            <p><strong>Email :</strong> {msg.email}</p>
            <p><strong>Sujet :</strong> {msg.subject}</p>
            <p><strong>Message :</strong> {msg.message}</p>
            <p><em>Envoyé le {msg.date}</em></p>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Messages;
