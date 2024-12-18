import React from 'react';
import { Code, Users, LineChart } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => (
  <div className="px-8 py-12 bg-gray-50">
    <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
      Our Services
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      <ServiceCard 
        icon={Code}
        title="Software Development"
        description="Custom software solutions built with cutting-edge technologies"
      />
      <ServiceCard 
        icon={Users}
        title="Staff Augmentation"
        description="Expert tech talent to strengthen your development team"
      />
      <ServiceCard 
        icon={Code}
        title="White Label Development"
        description="Seamless development services under your brand"
      />
      <ServiceCard 
        icon={LineChart}
        title="SEO & PPC Marketing"
        description="Data-driven digital marketing strategies"
      />
    </div>
  </div>
);