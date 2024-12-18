import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  onClick,
  className = ''
}) => (
  <button 
    onClick={onClick}
    className={`
      bg-blue-600 text-white px-8 py-3 rounded-full font-medium 
      hover:bg-blue-700 active:bg-blue-800 
      transform hover:scale-105 active:scale-95
      transition-all duration-200 
      flex items-center space-x-2 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      ${className}
    `}
  >
    <span>{children}</span>
    <ArrowRight className="w-4 h-4" />
  </button>
);