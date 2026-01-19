import React from 'react';
import { Users, ShieldCheck, MessageSquare } from 'lucide-react';
import Text from '../atoms/Text';

const Values = () => {
  const values = [
    { 
      title: "Cercanía con el cliente", 
      icon: Users, 
      text: "Eres parte del equipo. Tu feedback guía cada paso del desarrollo." 
    },
    { 
      title: "Tecnología moderna", 
      icon: ShieldCheck, 
      text: "Usamos los frameworks más actuales para soluciones rápidas y seguras." 
    },
    { 
      title: "Comunicación clara", 
      icon: MessageSquare, 
      text: "Sin tecnicismos innecesarios. Hablamos de resultados y objetivos." 
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="mb-4 flex justify-center md:justify-start">
                <div className="w-12 h-12 bg-axion-blue/10 dark:bg-axion-blue/20 flex items-center justify-center rounded-2xl">
                  <v.icon className="text-axion-blue" size={24} />
                </div>
              </div>
              <Text type="h3" className="mb-2 dark:text-white">{v.title}</Text>
              <Text type="p" className="text-base text-gray-500 dark:text-slate-400">{v.text}</Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;