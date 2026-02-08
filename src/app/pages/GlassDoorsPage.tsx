import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Flame, Sparkles, Zap, Phone } from 'lucide-react';
import { useState } from 'react';

const doorCategories = [
  {
    id: '6mm',
    name: 'Двери 6 мм',
    description: 'Стеклянные двери RichDoors толщиной 6 мм для межкомнатных проемов',
    image: '/images/6mm.jpg',
    path: '/catalog/glass-doors/6mm'
  },
  {
    id: '8mm',
    name: 'Двери 8 мм',
    description: 'Усиленные стеклянные двери RichDoors толщиной 8 мм',
    image: '/images/8mm.jpg',
    path: '/catalog/glass-doors/8mm'
  },
  {
    id: 'hamon',
    name: 'Двери для бани серии Хамам',
    description: 'Специальные двери RichDoors из закаленного стекла для бань и саун',
    image: '/images/dveri.jpg',
    path: '/catalog/glass-doors/hamon'
  },
];

const createSparks = () => {
  const sparks = [];
  for (let i = 0; i < 20; i++) {
    sparks.push({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 3}s`,
      size: `${1 + Math.random() * 4}px`,
      intensity: Math.random(),
      directionX: (Math.random() - 0.5) * 40
    });
  }
  return sparks;
};

const sparks = createSparks();

interface ImageModalProps {
  image: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, title, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] bg-black rounded-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 bg-black/70 hover:bg-[#b50202] text-white rounded-full transition-colors duration-200"
        >
          ✕
        </button>
        
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230a0000"/><text x="400" y="300" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="24" font-weight="bold">Изображение не найдено</text></svg>';
            }}
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export function GlassDoorsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-gradient-to-b from-[#0a0000] via-[#1a0000] to-[#0a0000]">
      {/* Искры анимация */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Огонь фон */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#8b0000]/20 via-[#600000]/15 to-transparent"></div>
        </div>
        
        {/* Искры */}
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
              transform: `translateX(${spark.directionX}px)`
            }}
          />
        ))}
      </div>

      <div className="w-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          {/* Кнопка "Назад в каталог" */}
          <div className="w-full mb-6 md:mb-8">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-3 text-slate-400 hover:text-[#b50202] font-medium group transition-colors text-base md:text-lg"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
              Назад в каталог
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16 relative z-10">
            <div className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 mb-4 md:mb-6 bg-gradient-to-r from-[#b50202]/20 to-[#8b0000]/20 border border-[#b50202]/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#b50202] animate-pulse" />
              <span className="text-sm md:text-base font-bold text-[#b50202] uppercase tracking-wider">
                Стеклянные двери
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
              СТЕКЛЯННЫЕ ДВЕРИ
            </h1>
            
            <div className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-2 md:px-4 font-medium">
              Выберите толщину и тип двери. Закаленное стекло, различные варианты обработки
            </div>
          </div>

          {/* Fire Divider */}
          <div className="flex items-center justify-center gap-4 my-8 md:my-12 relative z-10">
            <div className="h-0.5 w-20 md:w-32 bg-gradient-to-r from-transparent via-[#b50202] to-[#8b0000]"></div>
            <Flame className="w-6 h-6 md:w-8 md:h-8 text-[#b50202]" />
            <div className="h-0.5 w-20 md:w-32 bg-gradient-to-l from-transparent via-[#b50202] to-[#8b0000]"></div>
          </div>

          {/* Categories Grid - FIXED IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20 relative z-10">
            {doorCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleImageClick(category.image, category.name)}
                className="group relative flex flex-col cursor-pointer"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-3xl overflow-hidden hover:border-[#b50202]/50 transition-all duration-500 group-hover:scale-[1.03] h-full flex flex-col">
                  
                  {/* Image Container - FIXED HEIGHT */}
                  <div className="relative pt-[75%] overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0000] p-4">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%230a0000"/><text x="200" y="150" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="20" font-weight="bold">${category.name}</text></svg>';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/20 to-transparent"></div>
                    
                    {/* Click hint */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                      Кликните для увеличения
                    </div>
                  </div>

                  {/* Content */}
                  <Link to={category.path} className="p-5 md:p-6 flex flex-col flex-grow no-underline">
                    <h3 className="text-lg sm:text-xl font-black text-white mb-3 group-hover:text-[#b50202] transition-colors text-center">
                      {category.name}
                    </h3>
                    
                    <div className="text-sm md:text-base text-slate-400 mb-4 flex-grow text-center">
                      {category.description}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <div className="group/btn relative px-4 py-2.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-lg font-bold hover:shadow-lg hover:shadow-[#8b0000]/40 transition-all duration-300 inline-flex items-center justify-center gap-2 w-full text-sm md:text-base">
                        <span className="relative">Смотреть варианты</span>
                        <ArrowRight className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-full group-hover:w-3/4 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="relative mb-12 md:mb-16 lg:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Закаленное стекло",
                  description: "Повышенной прочности, безопасное при разрушении",
                  icon: Flame
                },
                {
                  title: "Качественная фурнитура",
                  description: "Хромированная и матовая фурнитура премиум-класса",
                  icon: Zap
                },
                {
                  title: "Различная обработка",
                  description: "Матирование, тонирование, фацет и другие виды обработки",
                  icon: Sparkles
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="relative group fade-in-scroll">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-[#b50202]/50 transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                        <div className="p-2 md:p-3 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-xl border border-[#b50202]/30">
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#b50202]" />
                        </div>
                        <h4 className="text-lg md:text-xl font-black text-white">{feature.title}</h4>
                        <div className="text-sm md:text-base text-slate-400">{feature.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative mt-12 md:mt-16 lg:mt-20">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] via-[#8b0000] to-[#b50202] rounded-3xl blur opacity-30 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] border-2 border-[#300000] rounded-3xl p-6 sm:p-8 md:p-12 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50202]/10 via-[#8b0000]/10 to-[#b50202]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#b50202] mb-4 md:mb-6 drop-shadow-[0_0_10px_rgba(181,2,2,0.5)]">
                  НУЖНА КОНСУЛЬТАЦИЯ ПО ДВЕРЯМ?
                </h2>
                
                <div className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                  Наши специалисты помогут выбрать оптимальный вариант и рассчитают стоимость
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+375(29)6694444"
                    className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-lg md:rounded-xl font-bold hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all duration-500 inline-flex items-center justify-center gap-3 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative" />
                    <span className="relative">Связаться с менеджером</span>
                  </a>
                  
                  <Link
                    to="/contacts"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1a0000] border-2 border-[#300000] text-slate-300 rounded-lg md:rounded-xl font-bold hover:bg-[#b50202]/30 hover:text-white hover:border-[#b50202] transition-colors inline-flex items-center justify-center gap-3"
                  >
                    <span>Помощь с расчетом стоимости</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
                
                <div className="text-sm md:text-base text-slate-500 mt-6 md:mt-8">
                  Консультация бесплатно • Подбор материалов • Расчет стоимости • Изготовление и доставка
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <ImageModal
        image={selectedImage || ''}
        title={selectedTitle}
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
      />

      <style>{`
        @keyframes spark-rise {
          0% {
            bottom: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            bottom: 100%;
            opacity: 0;
            transform: translateX(var(--spark-x));
          }
        }
        
        .fade-in-scroll {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}