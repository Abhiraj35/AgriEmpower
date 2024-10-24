// src/Chatbot.js
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create script tag for chatbot
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('chatbotId', 'Djs6ICT0C3fipCMT53kOq');
    script.setAttribute('domain', 'www.chatbase.co');

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible component needed
};

export default Chatbot;
