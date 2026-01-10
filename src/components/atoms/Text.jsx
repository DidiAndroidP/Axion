import React from 'react';

const Text = ({ children, type = 'p', className = '' }) => {
  const styles = {
    h1: "text-4xl md:text-6xl font-bold tracking-tight text-gray-900",
    h2: "text-3xl md:text-4xl font-bold text-gray-800",
    h3: "text-xl font-semibold text-gray-700",
    p: "text-lg text-gray-600 leading-relaxed",
    span: "text-sm font-medium uppercase tracking-widest text-axion-blue"
  };

  const Tag = type;

  return <Tag className={`${styles[type]} ${className}`}>{children}</Tag>;
};

export default Text;