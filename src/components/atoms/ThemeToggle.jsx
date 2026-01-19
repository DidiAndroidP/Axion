import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-sm"
      aria-label={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={theme === 'dark' ? "Modo claro" : "Modo oscuro"}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;