import React from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Elementos decorativos de fondo (Blobs) */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none overflow-hidden w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-axion-purple rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-40 w-72 h-72 bg-axion-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        
        {/* COLUMNA IZQUIERDA: Texto y CTA */}
        <div className="flex flex-col items-start z-10">
          <Text type="span" className="text-axion-blue font-bold tracking-widest uppercase mb-4 text-sm">
            Innovación & Desarrollo
          </Text>
          
          <Text type="h1" className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Impulsamos ideas con <span className="text-transparent bg-clip-text bg-gradient-to-r from-axion-blue to-axion-purple">tecnología</span>
          </Text>
          
          <Text type="p" className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            Empresa de desarrollo de software que crea soluciones digitales modernas, escalables y a la medida de tu visión.
          </Text>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" href="https://wa.me/5219214899742" className="justify-center">
              Contáctanos
            </Button>
            <Button variant="outline" href="#servicios" className="justify-center">
              Ver servicios
            </Button>
          </div>
        </div>

        {/* COLUMNA DERECHA: Terminal (Agrandada) */}
        {/* CAMBIO PRINCIPAL: Añadimos 'w-full' y aumentamos el max-width para llenar el espacio rojo */}
        <div className="relative w-full flex justify-center lg:justify-end">
          
          <div className="w-full max-w-3xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
            
            {/* Barra de título de la terminal */}
            <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-slate-400 font-mono">axion-dev — bash</div>
            </div>

            {/* Contenido del código */}
            {/* Aumentamos el padding (p-8) y el tamaño de letra (text-sm md:text-base) para que se vea mas grande */}
            <div className="p-8 font-mono text-sm md:text-base text-slate-300 space-y-4 min-h-[300px] flex flex-col justify-center">
              
              <div className="flex">
                <span className="text-gray-500 mr-4">$</span>
                <p>comencemos</p>
              </div>

              <div className="flex">
                <span className="text-axion-purple mr-4 font-bold">{'>'}</span>
                <p>const <span className="text-axion-blue">project</span> = new <span className="text-yellow-400">AxionProject</span>();</p>
              </div>

              <div className="flex">
                <span className="text-axion-purple mr-4 font-bold">{'>'}</span>
                <p>project.<span className="text-blue-400">setGoal</span>(<span className="text-green-400">'Innovation'</span>);</p>
              </div>

              <div className="flex">
                <span className="text-axion-purple mr-4 font-bold">{'>'}</span>
                <p>project.<span className="text-blue-400">deploy</span>({'{'} <span className="text-orange-400">scaling</span>: <span className="text-axion-purple">true</span> {'}'});</p>
              </div>

              <div className="flex items-center gap-2 text-green-400 mt-4">
                 <span className="text-axion-purple font-bold">{'>'}</span>
                 <span>// Solution delivered!</span>
                 <span className="w-2.5 h-5 bg-axion-blue animate-pulse ml-1"></span>
              </div>

            </div>
          </div>

          <div className="absolute -inset-4 bg-gradient-to-r from-axion-blue to-axion-purple opacity-20 blur-2xl -z-10 rounded-[3rem]"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;