import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import './WhatsAppButton.css';
import { CONTACT } from '../constants/contactInfo';

function WhatsAppButton() {
  const message = 'Bonjour! Je vous contacte depuis votre portfolio.';
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
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
