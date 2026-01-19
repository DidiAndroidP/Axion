import React from 'react';
import Text from '../atoms/Text';

const AboutUs = () => {
  return (
    <section id="quienes-somos" className="py-24 bg-gray-100 dark:bg-slate-900 border-y border-gray-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Text type="span" className="text-axion-purple font-bold uppercase tracking-widest mb-4 inline-block">Nuestra esencia</Text>
        <Text type="h2" className="mb-6 dark:text-white">Cercanía, Claridad y Profesionalismo</Text>
        <Text type="p" className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-slate-300 leading-relaxed">
          Axion es una empresa pequeña de desarrollo de software enfocada en transformar ideas en soluciones reales. Trabajamos de forma cercana para que cada línea de código tenga un propósito.
        </Text>
      </div>
    </section>
  );
};

export default AboutUs;