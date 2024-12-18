import React from 'react';
import { Hero } from './Hero/Hero';
import { ServicesSection } from './Services/ServicesSection';
import { ContactSection } from './Contact/ContactSection';
import { Footer } from './Footer/Footer';

function EmailTemplate() {
  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default EmailTemplate;