import React, { useState, useEffect } from 'react';

const CodeTerminal = () => {
  const lines = [
    "const project = new AxionProject();",
    "project.setGoal('Innovation');",
    "project.deploy({ scaling: true });",
    "// Solution delivered!"
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-gray-800 font-mono text-sm">
      <div className="bg-[#333] px-4 py-2 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      
      <div className="p-6 space-y-2">
        <p className="text-gray-500">$ comencemos</p>
        {lines.map((line, index) => (
          <p key={index} className={`overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-typing-${index} text-blue-400`}>
            <span className="text-purple-400 font-bold">{"> "}</span>
            {line}
          </p>
        ))}
        <div className="w-2 h-5 bg-axion-blue animate-pulse mt-2" />
      </div>
    </div>
  );
};

export default CodeTerminal;