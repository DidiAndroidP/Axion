import React from 'react';
import Text from '../atoms/Text';

const ServiceCard = ({ title, description, icon: Icon, color = 'blue' }) => {
  // Mapeo de colores para bordes o detalles
  const colorClasses = {
    blue: "border-axion-blue bg-blue-50/50",
    purple: "border-axion-purple bg-purple-50/50",
    orange: "border-axion-orange bg-orange-50/50"
  };

  return (
    <div className={`p-8 rounded-2xl border-b-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 bg-white ${colorClasses[color]}`}>
      <div className="mb-4 inline-block p-3 rounded-lg bg-white shadow-sm text-gray-800">
        {/* Aquí irá un icono más adelante */}
        <Icon size={32} className={`text-axion-${color}`} />
      </div>
      <Text type="h3" className="mb-2">{title}</Text>
      <Text type="p" className="text-sm text-gray-500">{description}</Text>
    </div>
  );
};

export default ServiceCard;