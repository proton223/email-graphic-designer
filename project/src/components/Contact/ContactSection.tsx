import React from 'react';
import { CTAButton } from '../Button/CTAButton';

export const ContactSection: React.FC = () => {
  const handleContact = () => {
    window.location.href = 'mailto:business@heliverse.com?subject=Business%20Inquiry';
  };

  return (
    <div className="px-8 py-12 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Ready to Transform Your Business?
      </h2>
      <CTAButton onClick={handleContact}>Contact Us</CTAButton>
    </div>
  );
};