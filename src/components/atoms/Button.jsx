import React from 'react';

const Button = ({ children, variant = 'primary', onClick, href, className = "" }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center cursor-pointer";
  
  const variants = {
    primary: "bg-axion-purple text-white hover:opacity-90 shadow-lg shadow-purple-500/30",
    outline: "border-2 border-axion-blue text-axion-blue hover:bg-axion-blue hover:text-white",
    ghost: "text-gray-600 hover:text-axion-purple"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isInternal = href.startsWith('#');

    return (
      <a 
        href={href} 
        target={isInternal ? "_self" : "_blank"} 
        rel={isInternal ? "" : "noopener noreferrer"} 
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;