import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const phoneNumber = '+21652113008'; // Votre numéro WhatsApp
  const message = 'Bonjour! Je vous contacte depuis votre portfolio.'; // Message par défaut
  
  const handleClick = () => {
    // Créer le lien WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button-container">
      <button 
        className="whatsapp-button"
        onClick={handleClick}
        aria-label="Contact WhatsApp"
        title="Contactez-moi sur WhatsApp"
      >
        <BsWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-pulse"></span>
      </button>
    </div>
  );
}

export default WhatsAppButton;
