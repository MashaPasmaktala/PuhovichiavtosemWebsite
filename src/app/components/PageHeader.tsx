import { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
}

// Генератор искр - как на странице О компании
const createSparks = () => {
  const sparks = [];
  for (let i = 0; i < 40; i++) {
    sparks.push({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${0.5 + Math.random() * 1}s`,
      size: `${1 + Math.random() * 3}px`,
      intensity: Math.random(),
      directionX: Math.random() * 20 - 10
    });
  }
  return sparks;
};

const sparks = createSparks();

export function PageHeader({ title, subtitle, icon: Icon }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-b from-red-950/30 via-red-950/20 to-black py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Realistic Fire Background - более темный вишневый фон */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Огненные языки пламени - более темные вишневые тона */}
        <div className="absolute bottom-0 left-0 w-full h-[400px] overflow-hidden">
          {/* Множество слоев пламени для реалистичности */}
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-red-900/40 via-red-800/25 to-transparent animate-flame-wave-1"></div>
          <div className="absolute bottom-0 left-0 w-full h-[280px] bg-gradient-to-t from-red-950/35 via-red-900/20 to-transparent animate-flame-wave-2"></div>
          <div className="absolute bottom-0 left-0 w-full h-[320px] bg-gradient-to-t from-red-800/30 via-red-950/15 to-transparent animate-flame-wave-3"></div>
          <div className="absolute bottom-0 left-0 w-full h-[260px] bg-gradient-to-t from-red-900/35 via-red-950/20 to-transparent animate-flame-wave-4"></div>
        </div>
        
        {/* Языки пламени по бокам - темнее */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[500px] bg-gradient-to-tr from-red-900/50 via-red-950/25 to-transparent animate-flame-left blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[500px] bg-gradient-to-tl from-red-950/50 via-red-900/25 to-transparent animate-flame-right blur-2xl"></div>
        
        {/* Центральный огненный столб - темный вишневый */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-red-900/35 via-red-950/20 to-transparent animate-flame-center blur-3xl"></div>
        
        {/* Тепловые волны и свечение - темный вишневый оттенок */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-950/20 to-black/60"></div>
        
        {/* Искры от огня - летят вверх со дна */}
        {sparks.map(spark => (
          <div
            key={spark.id}
            className="absolute rounded-full"
            style={{
              left: spark.left,
              bottom: '0',
              width: spark.size,
              height: spark.size,
              background: `linear-gradient(to top, #fbbf24, #f97316, #dc2626)`,
              boxShadow: `0 0 ${12 * spark.intensity}px ${6 * spark.intensity}px rgba(255, 100, 0, ${0.4 + spark.intensity * 0.6})`,
              animation: `spark-rise ${spark.duration} ease-out infinite`,
              animationDelay: spark.delay,
              opacity: 0,
              '--spark-x': `${spark.directionX}px`
            } as React.CSSProperties}
          />
        ))}
        
        {/* Огненные вспышки */}
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-fire-flash opacity-0 blur-sm"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-orange-500 rounded-full animate-fire-flash-delayed opacity-0 blur-sm"></div>
        <div className="absolute bottom-16 left-1/2 w-5 h-5 bg-red-500 rounded-full animate-fire-flash-slow opacity-0 blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {Icon && (
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-full mb-4 sm:mb-6 border-2 border-red-600/30">
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
          </div>
        )}
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight tracking-tight px-4">
          <span className="text-white">
            {title}
          </span>
        </h1>
        
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto font-medium px-4">
            {subtitle}
          </p>
        )}
      </div>

      <style>{`
        @keyframes flame-wave-1 {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes flame-wave-2 {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-15px); opacity: 0.9; }
        }
        @keyframes flame-wave-3 {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-20px); opacity: 0.8; }
        }
        @keyframes flame-wave-4 {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-25px); opacity: 0.7; }
        }
        @keyframes flame-left {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes flame-right {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes flame-center {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes spark-rise {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
            box-shadow: 0 0 0px rgba(255, 100, 0, 0);
          }
          10% {
            transform: translateY(-10px) translateX(5px);
            opacity: 1;
            box-shadow: 0 0 15px rgba(255, 100, 0, 0.8);
          }
          30% {
            transform: translateY(-100px) translateX(15px);
            opacity: 0.9;
            box-shadow: 0 0 20px rgba(255, 100, 0, 1);
          }
          50% {
            transform: translateY(-200px) translateX(-10px);
            opacity: 0.8;
            box-shadow: 0 0 25px rgba(255, 50, 0, 1);
          }
          70% {
            transform: translateY(-300px) translateX(20px);
            opacity: 0.5;
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
          }
          90% {
            transform: translateY(-400px) translateX(-15px);
            opacity: 0.3;
            box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
          }
          100% {
            transform: translateY(-500px) translateX(0);
            opacity: 0;
            box-shadow: 0 0 0px rgba(255, 0, 0, 0);
          }
        }
        @keyframes fire-flash {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes fire-flash-delayed {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          25% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes fire-flash-slow {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          75% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes text-glow {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 20px rgba(220, 38, 38, 0.5)); }
          50% { filter: brightness(1.2) drop-shadow(0 0 30px rgba(220, 38, 38, 0.8)); }
        }
        @keyframes text-glow-soft {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 15px rgba(220, 38, 38, 0.3)); }
          50% { filter: brightness(1.1) drop-shadow(0 0 20px rgba(220, 38, 38, 0.5)); }
        }
        
        .animate-flame-wave-1 {
          animation: flame-wave-1 2s ease-in-out infinite;
        }
        .animate-flame-wave-2 {
          animation: flame-wave-2 2.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-flame-wave-3 {
          animation: flame-wave-3 3s ease-in-out infinite;
        }
        .animate-flame-wave-4 {
          animation: flame-wave-4 3.5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-flame-left {
          animation: flame-left 2s ease-in-out infinite;
        }
        .animate-flame-right {
          animation: flame-right 2s ease-in-out infinite;
        }
        .animate-flame-center {
          animation: flame-center 2s ease-in-out infinite;
        }
        .animate-fire-flash {
          animation: fire-flash 4s ease-in-out infinite;
        }
        .animate-fire-flash-delayed {
          animation: fire-flash-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-fire-flash-slow {
          animation: fire-flash-slow 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        .animate-text-glow-soft {
          animation: text-glow-soft 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}