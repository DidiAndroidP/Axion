import React, { useState } from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import logoAxion from '../../assets/logo-axion.png';
import TermsModal from '../molecules/TermsModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoAxion} 
              alt="Axion Logo" 
              className="h-8 md:h-15 w-auto mb-2 object-contain dark:brightness-110" 
            />
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              Software Dev • {currentYear}
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://wa.me/5219214899742" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#25D366] hover:opacity-70 transition-opacity"
            >
              <MessageCircle size={28} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61586166486301" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#1877F2] hover:opacity-70 transition-opacity"
            >
              <Facebook size={28} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#E4405F] hover:opacity-70 transition-opacity"
            >
              <Instagram size={28} />
            </a>
          </div>

          <div className="flex gap-8 text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            <button className="hover:text-axion-purple transition-colors cursor-pointer">
              Privacidad
            </button>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="hover:text-axion-purple transition-colors cursor-pointer"
            >
              Términos
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[9px] text-gray-300 dark:text-gray-600 uppercase tracking-[0.3em]">
            Desarrollado con pasión por Axion Team
          </p>
        </div>
      </div>

      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};

export default Footer;