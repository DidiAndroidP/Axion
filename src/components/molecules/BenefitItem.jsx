import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Text from '../atoms/Text';

const BenefitItem = ({ title, description }) => {
  return (
    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all group">
      <div className="mt-1">
        <CheckCircle2 className="text-axion-orange group-hover:scale-110 transition-transform" size={24} />
      </div>
      <div>
        <Text type="h3" className="text-lg mb-1 dark:text-white">{title}</Text>
        <Text type="p" className="text-sm dark:text-slate-400">{description}</Text>
      </div>
    </div>
  );
};

export default BenefitItem;