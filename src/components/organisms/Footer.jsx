import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import logoAxion from '../../assets/logo-axion.png'; // Asegúrate de que el nombre coincida con tu archivo
import Text from '../atoms/Text';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <div className="mb-6">
              <img 
                src={logoAxion} 
                alt="Axion Logo" 
                className="h-18 w-auto object-contain dark:brightness-110 transition-all" 
              />
            </div>
            <Text type="p" className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Tecnología que impulsa tu proyecto. Soluciones digitales modernas y a la medida para empresas con visión de futuro.
            </Text>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <Text type="h3" className="text-sm uppercase tracking-widest mb-6 text-gray-400 dark:text-gray-500 font-bold">
              SÍGUENOS
            </Text>
            <div className="flex gap-6">
              <a 
                href="https://wa.me/5219214899742" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-all transform hover:scale-110"
              >
                <MessageCircle size={26} />
              </a>

              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-all transform hover:scale-110"
              >
                <Facebook size={26} />
              </a>

              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-all transform hover:scale-110"
              >
                <Instagram size={26} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {currentYear} Axion Software Dev. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-xs text-gray-400 dark:text-gray-500">
            <a href="#" className="hover:text-axion-purple transition-colors">Privacidad</a>
            <a href="#" className="hover:text-axion-purple transition-colors">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;