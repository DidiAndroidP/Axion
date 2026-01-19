import React from 'react';
import Text from '../atoms/Text';

const ServiceCard = ({ title, description, icon: Icon, color = 'blue' }) => {
  const colorClasses = {
    blue: {
      border: "border-axion-blue",
      bg: "bg-blue-50/50 dark:bg-blue-950/30",
      iconBg: "bg-white dark:bg-slate-800",
      iconColor: "text-axion-blue"
    },
    purple: {
      border: "border-axion-purple",
      bg: "bg-purple-50/50 dark:bg-purple-950/30",
      iconBg: "bg-white dark:bg-slate-800",
      iconColor: "text-axion-purple"
    },
    orange: {
      border: "border-axion-orange",
      bg: "bg-orange-50/50 dark:bg-orange-950/30",
      iconBg: "bg-white dark:bg-slate-800",
      iconColor: "text-axion-orange"
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`p-8 rounded-2xl border-b-4 ${colors.border} ${colors.bg} shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-slate-800/50 dark:border-slate-700`}>
      <div className={`mb-4 inline-block p-3 rounded-lg ${colors.iconBg} shadow-sm transition-colors`}>
        <Icon size={32} className={colors.iconColor} />
      </div>
      <Text type="h3" className="mb-2 dark:text-white">{title}</Text>
      <Text type="p" className="text-sm text-gray-500 dark:text-slate-400">{description}</Text>
    </div>
  );
};

export default ServiceCard;