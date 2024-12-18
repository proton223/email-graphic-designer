import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="
    flex items-start space-x-4 p-4 rounded-lg 
    bg-white/50 backdrop-blur-sm
    hover:bg-white/80 hover:shadow-lg
    transform hover:-translate-y-1
    transition-all duration-200
    cursor-pointer
  ">
    <Icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);