import { useState } from 'react';
import { Phone, Flame } from 'lucide-react';
import { ContactModal } from '@/app/components/ContactModal';

export function ContactButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 group"
      >
        {/* Fire Glow effect - менее яркий */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-lg opacity-40 group-hover:opacity-75 transition-opacity"></div>
        
        {/* Main button - более прозрачный */}
        <div className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-600/90 to-red-800/90 backdrop-blur-sm text-white rounded-xl shadow-lg hover:shadow-red-900/50 transition-all duration-300 group-hover:scale-105 border border-red-500/20">
          {/* Fire Icon */}
          <Flame className="relative w-4 h-4" />
          <Phone className="relative w-4 h-4" />
          <span className="relative hidden sm:inline font-bold text-sm">Консультация</span>
        </div>
      </button>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}