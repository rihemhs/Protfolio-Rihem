// Messages.jsx
import React from "react";

function Messages({ messages = [] }) {
  if (!messages.length) return <p>Aucun message pour l'instant.</p>;

  return (
    <div className="saved-messages">
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
  );
}

export default Messages;
