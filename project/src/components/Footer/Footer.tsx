import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:business@heliverse.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+918295084311';
  };

  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12 rounded-b-xl">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Mail className="w-5 h-5" />
          <button 
            onClick={handleEmailClick}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            business@heliverse.com
          </button>
          <span className="mx-2">|</span>
          <button 
            onClick={handlePhoneClick}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            +91 8295084311
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Trusted by global clients. Delivering excellence for 5+ years.
        </p>
      </div>
    </footer>
  );
};