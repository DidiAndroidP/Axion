import React from 'react';
import { Globe, Cpu, Zap, Layout } from 'lucide-react';
import Text from '../atoms/Text';
import ServiceCard from '../molecules/ServiceCard';

const Services = () => {
  const services = [
    { title: "Desarrollo Web", description: "Sitios modernos y optimizados para SEO.", icon: Globe, color: "blue" },
    { title: "Apps y Sistemas", description: "Aplicaciones móviles diseñadas para escalar.", icon: Layout, color: "purple" },
    { title: "Automatización", description: "Optimizamos flujos eliminando tareas repetitivas.", icon: Zap, color: "orange" },
    { title: "Soluciones a Medida", description: "Herramientas exactas que tu empresa necesita.", icon: Cpu, color: "blue" }
  ];

  return (
    <section id="servicios" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Text type="span" className="text-axion-blue font-bold uppercase tracking-widest mb-2 inline-block">Nuestros Servicios</Text>
          <Text type="h2" className="dark:text-white">Soluciones digitales reales</Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;