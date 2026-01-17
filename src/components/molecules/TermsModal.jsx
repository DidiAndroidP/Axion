import React from 'react';
import { X } from 'lucide-react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <Text type="h3" className="text-xl font-bold dark:text-white">Términos y Condiciones</Text>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-sm text-slate-600 dark:text-slate-400 space-y-4">
          <section>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">1. Aceptación de los Términos</h4>
            <p>Al solicitar los servicios de Axion Software Dev, el cliente acepta cumplir con los siguientes términos. Estos términos rigen la relación entre el desarrollador y el cliente.</p>
          </section>

          <section>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">2. Propiedad Intelectual</h4>
            <p>Una vez finalizado el pago total del proyecto, Axion transfiere los derechos de uso del software al cliente. Sin embargo, Axion se reserva el derecho de mostrar el trabajo en su portafolio profesional.</p>
          </section>

          <section>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">3. Proceso de Pago</h4>
            <p>Se requiere un anticipo del 50% para iniciar cualquier proyecto. El saldo restante deberá liquidarse antes de la entrega final y despliegue en producción.</p>
          </section>

          <section>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">4. Garantía y Soporte</h4>
            <p>Axion ofrece 30 días de garantía técnica tras la entrega para corregir errores de código (bugs). Modificaciones adicionales después de la entrega final tendrán un costo extra.</p>
          </section>

          <section>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">5. Confidencialidad</h4>
            <p>Ambas partes se comprometen a no divulgar información sensible, bases de datos o estrategias de negocio compartidas durante el desarrollo del proyecto.</p>
          </section>
        </div>

        <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <Button variant="primary" onClick={onClose}>
            He leído y acepto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;