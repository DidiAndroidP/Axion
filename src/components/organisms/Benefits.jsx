import React from 'react';
import Text from '../atoms/Text';
import BenefitItem from '../molecules/BenefitItem';

const Benefits = () => {
  const benefits = [
    { title: "Código limpio", description: "Arquitectura mantenible y escalable." },
    { title: "Procesos automatizados", description: "Entregas eficientes y sin errores." },
    { title: "Ahorro de tiempo", description: "Enfoque ágil para resultados rápidos." },
    { title: "Soluciones claras", description: "Sin tecnicismos, solo resultados." }
  ];

  return (
    <section className="py-24 bg-blue-50 dark:bg-slate-900 border-y border-blue-200/50 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Text type="span" className="text-axion-orange font-bold uppercase tracking-widest mb-4 inline-block">¿Por qué Axion?</Text>
          <Text type="h2" className="mb-6 dark:text-white">Beneficios reales para tu negocio</Text>
          <Text type="p" className="dark:text-slate-300">Calidad técnica asegurada para que tu inversión sea sólida a largo plazo.</Text>
        </div>
        <div className="grid gap-4">
          {benefits.map((b, i) => <BenefitItem key={i} {...b} />)}
        </div>
      </div>
    </section>
  );
};

export default Benefits;