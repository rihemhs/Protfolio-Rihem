// Contact.jsx
import React, { useState, useEffect } from "react";
import Messages from "./Messages";
import './Contact.css';

function Contact() {
  const [messages, setMessages] = useState([]);

  // Charger messages initiaux depuis JSON ou localStorage
  useEffect(() => {
    const stored = localStorage.getItem("contactMessages");
    if (stored) {
      setMessages(JSON.parse(stored)); // Messages sauvegardés côté client
    } else {
      fetch("/data/messages.json")
        .then(res => res.json())
        .then(data => setMessages(data))
        .catch(err => console.error("Erreur lecture JSON:", err));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      date: new Date().toLocaleString()
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));

    e.target.reset();
    alert("Message envoyé et enregistré localement !");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name" placeholder="Votre nom" required />
          <input name="email" type="email" placeholder="Votre email" required />
          <input name="subject" placeholder="Sujet" required />
          <textarea name="message" placeholder="Votre message" rows="5" required />
          <button type="submit">Envoyer</button>
        </form>
        <Messages messages={messages} />
      </div>
    </section>
  );
}

export default Contact;
