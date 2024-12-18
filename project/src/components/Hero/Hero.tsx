import React from 'react';
import { CTAButton } from '../Button/CTAButton';

export const Hero: React.FC = () => {
  const handleGetStarted = () => {
    window.location.href = 'mailto:business@heliverse.com?subject=Get%20Started%20Inquiry';
  };

  return (
    <div 
      className="relative h-[400px] bg-cover bg-center rounded-t-xl"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)'
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70 rounded-t-xl">
        <div className="h-full flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Innovative IT Solutions, Tailored for You
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            From concept to execution, we deliver flawless digital solutions
          </p>
          <CTAButton onClick={handleGetStarted}>Get Started</CTAButton>
        </div>
      </div>
    </div>
  );
};