import React from 'react';
import logoAxion from '../../assets/logo-axion.png'; 
import Button from '../atoms/Button';
import ThemeToggle from '../atoms/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex items-center">
          <img 
            src={logoAxion} 
            alt="Axion Software Logo" 
            className="h-20 w-auto object-contain dark:brightness-110" 
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600 dark:text-gray-300">
            <a href="#servicios" className="hover:text-axion-purple transition-colors">Servicios</a>
            <a href="#quienes-somos" className="hover:text-axion-purple transition-colors">Quiénes somos</a>
          </div>
          
          <div className="flex items-center gap-4 border-l pl-4 border-gray-100 dark:border-slate-800">
            <ThemeToggle />
            <Button 
              variant="outline" 
              href="https://wa.me/5219214899742"
              className="hidden sm:flex"
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