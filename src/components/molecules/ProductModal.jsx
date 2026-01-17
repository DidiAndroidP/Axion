import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
          
          <div className="lg:w-3/5 relative bg-slate-200 dark:bg-slate-800 group h-64 lg:h-auto">
            <img 
              src={product.images[currentIndex]} 
              alt={`${product.title} demo`}
              className="w-full h-full object-cover"
            />
            
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-between overflow-y-auto">
            <div>
              <span className="text-[10px] font-bold bg-axion-purple/10 text-axion-purple px-3 py-1 rounded-full uppercase tracking-widest">
                {product.tag}
              </span>
              <Text type="h3" className="text-3xl font-bold mt-4 mb-4 dark:text-white">
                {product.title}
              </Text>
              <Text type="p" className="text-slate-500 dark:text-gray-400 mb-8 leading-relaxed">
                {product.description}
              </Text>

              <div className="space-y-4 mb-10">
                <Text type="span" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lo que incluye:</Text>
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={18} className="text-axion-blue shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button variant="primary" className="w-full py-4 rounded-2xl" href="https://wa.me/5219214899742">
                Quiero esta plantilla
              </Button>
              <Text type="p" className="text-[10px] text-center text-slate-400">
                * Entrega estimada: 3-5 días hábiles.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;