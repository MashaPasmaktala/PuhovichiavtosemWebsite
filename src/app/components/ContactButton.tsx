// src/app/components/ContactButton.tsx
import { useState } from 'react';
import { Phone, Flame } from 'lucide-react';
import { ContactModal } from './ContactModal';

export function ContactButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 group"
      >
        {/* Fire Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500 animate-fire-pulse-glow"></div>
        
        {/* Main button */}
        <div className="relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 group-hover:scale-110 border border-red-500/30">
          {/* Fire Icon with animation */}
          <Flame className="relative w-4 h-4 animate-fire-flicker" />
          <Phone className="relative w-4 h-4" />
          <span className="relative hidden sm:inline font-bold text-sm tracking-wider">Консультация</span>
        </div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-red-600/20 animate-ping-slow opacity-0 group-hover:opacity-100"></div>
      </button>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>{`
        @keyframes fire-flicker {
          0%, 100% { opacity: 1; transform: scale(1); }
          25% { opacity: 0.9; transform: scale(1.1); }
          50% { opacity: 1; transform: scale(1); }
          75% { opacity: 0.8; transform: scale(1.15); }
        }
        
        @keyframes fire-pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes ping-slow {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        .animate-fire-flicker {
          animation: fire-flicker 2s ease-in-out infinite;
        }
        
        .animate-fire-pulse-glow {
          animation: fire-pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}