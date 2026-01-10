import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-axion-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-axion-purple/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-axion-purple/20 blur-[100px] rounded-full -mr-20 -mt-20" />
          <div className="relative z-10">
            <Text type="h2" className="text-white mb-6">¿Tienes una idea en mente?</Text>
            <Text type="p" className="text-slate-300 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Hablemos hoy mismo y hagamos realidad tu proyecto tecnológico.
            </Text>
            <Button 
              variant="primary" 
              className="!bg-white !text-axion-dark hover:!bg-slate-100 px-10 py-4 text-lg"
              href="https://wa.me/5219214899742"
            >
              Hablemos por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;