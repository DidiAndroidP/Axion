import React from 'react';
import logoAxion from '../../assets/logo-axion.png';
import Button from '../atoms/Button';
// Se eliminó la importación de ThemeToggle

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logoAxion} 
            alt="Axion" 
            className="h-8 md:h-20 w-auto object-contain dark:brightness-110" 
          />
        </div>

        {/* Navegación y Acciones */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Menú de Enlaces (Se oculta en móvil) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600 dark:text-gray-300 mr-4">
            <a href="#servicios" className="hover:text-axion-purple transition-colors">
              Servicios
            </a>
            <a href="#productos" className="hover:text-axion-purple transition-colors">
              Productos
            </a>
            <a href="#quienes-somos" className="hover:text-axion-purple transition-colors">
              Nosotros
            </a>
          </div>
          
          {/* Controles: Solo el botón de contacto */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button 
              variant="outline" 
              href="https://wa.me/5219214899742"
              className="px-3 py-1.5 text-xs sm:text-sm sm:px-5 sm:py-2"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;