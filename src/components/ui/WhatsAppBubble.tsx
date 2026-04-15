// file: components/WhatsAppBubble.jsx (versión con Tailwind)
"use client";

import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';

const WhatsAppBubble = () => {
  const phoneNumber = '34603481165';
  const message = 'Hola, estoy interesado en tus servicios.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-6 right-6 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    >
      <IoLogoWhatsapp size={35} color="#fff" />
    </a>
  );
};

export default WhatsAppBubble;
