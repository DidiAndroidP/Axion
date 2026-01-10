import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import CodeTerminal from '../atoms/CodeTerminal';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center bg-white dark:bg-slate-100 transition-colors">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-axion-blue/10 dark:bg-axion-blue/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-axion-purple/10 dark:bg-axion-purple/20 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <Text type="span" className="text-axion-blue font-bold tracking-widest uppercase mb-4 inline-block">Innovación & Desarrollo</Text>
          <Text type="h1" className="mb-6 leading-tight dark:text-white">
            Impulsamos ideas con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-axion-blue to-axion-purple">tecnología</span>
          </Text>
          <Text type="p" className="mb-10 text-gray-500 dark:text-gray-400 text-lg">
            Empresa pequeña de desarrollo de software que crea soluciones digitales modernas y a la medida.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="primary" href="https://wa.me/5219214899742">Contáctanos</Button>
            <Button variant="ghost" href="#servicios" className="dark:text-gray-300 dark:hover:text-white">Ver servicios</Button>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <CodeTerminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;