import React from 'react';

const AxionLogo = ({ className = "h-10 w-auto" }) => {
  return (
    <svg 
      viewBox="0 0 160 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Definición del Gradiente Axion */}
      <defs>
        <linearGradient id="axion-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0070f3" />
          <stop offset="100%" stopColor="#7928ca" />
        </linearGradient>
      </defs>

      {/* Texto principal "Axion" */}
      <text 
        x="0" 
        y="30" 
        className="font-sans font-bold fill-slate-900 dark:fill-white transition-colors duration-300"
        style={{ fontSize: '32px', letterSpacing: '-0.05em' }}
      >
        A
        <tspan>x</tspan>
        {/* El cuerpo de la 'i' sin el punto */}
        <tspan dx="2">ı</tspan>
        <tspan dx="2">on</tspan>
      </text>

      {/* Detalle de circuito en la 'x' */}
      <circle cx="48" cy="12" r="2.5" fill="url(#axion-grad)" />
      <path d="M38 22 L48 12" stroke="url(#axion-grad)" strokeWidth="2" strokeLinecap="round" />

      {/* El punto de la 'i' como cuadrado con gradiente */}
      <rect 
        x="63.5" 
        y="8" 
        width="7" 
        height="7" 
        rx="1.5" 
        fill="url(#axion-grad)" 
      />
      
      {/* Punto final de la marca */}
      <circle cx="125" cy="30" r="3" fill="#7928ca" />
    </svg>
  );
};

export default AxionLogo;