import React, { useState } from 'react';
import { ShoppingCart, Layout, Zap, Calendar } from 'lucide-react'; // Cambiamos Cloud por Calendar
import Text from '../atoms/Text';
import ProductModal from '../molecules/ProductModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "E-commerce Pro",
      description: "Tienda online de alto rendimiento con todo lo necesario para vender.",
      icon: ShoppingCart,
      tag: "Más vendido",
      features: ["Pasarela de pagos (Stripe/PayPal)", "Panel de administración", "Gestión de Inventario", "Diseño Ultra-Responsivo", "Optimización SEO"],
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    {
      title: "Landing Page Elite",
      description: "Convierte tus visitas en clientes con una página de aterrizaje optimizada.",
      icon: Zap,
      tag: "Express",
      features: ["Secciones de Conversión", "Formularios de contacto", "Integración con Analytics", "Carga ultra rápida", "A/B Testing listo"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    {
      title: "Appointment Pro", // Nueva opción de Sistema de Reservas
      description: "Sistema de gestión de citas y reservas en tiempo real para negocios de servicios.",
      icon: Calendar,
      tag: "Gestión",
      features: ["Calendario Interactivo", "Notificaciones WhatsApp/Email", "Panel de Clientes", "Sincronización con Google Calendar", "Cobro de depósitos online"],
      images: [
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    {
      title: "Dashboard Admin",
      description: "Toma el control de tus datos con un panel interno a medida.",
      icon: Layout,
      tag: "Interno",
      features: ["Gráficos en tiempo real", "Gestión de usuarios", "Exportación de reportes", "Seguridad reforzada", "API Integration"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
      ]
    }
  ];

  return (
    <section id="productos" className="py-20 bg-slate-100 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Text type="span" className="text-axion-purple font-bold uppercase tracking-widest mb-2 inline-block">Catálogo</Text>
          <Text type="h2" className="dark:text-white">Soluciones Listas para Despegar</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-axion-purple/50 transition-all shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                <product.icon className="text-axion-purple" size={24} />
              </div>
              <Text type="h3" className="text-lg mb-3 dark:text-white">{product.title}</Text>
              <Text type="p" className="text-sm text-gray-500 mb-6">{product.description}</Text>
              
              <button 
                onClick={() => setSelectedProduct(product)}
                className="w-full py-3 rounded-xl border-2 border-axion-blue text-axion-blue font-bold text-xs hover:bg-axion-blue hover:text-white transition-all cursor-pointer"
              >
                Ver Demo
              </button>
            </div>
          ))}
        </div>
      </div>

      <ProductModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </section>
  );
};

export default Products;