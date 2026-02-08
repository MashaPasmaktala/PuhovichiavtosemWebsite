import { Link } from 'react-router-dom';
import { ArrowLeft, Flame, Shield, Zap, Phone } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 3,
    name: 'Закаленное стекло.Crystalvision',
    image: '/images/crystal.jpg',
    desc: '3210×2550 мм, толщина от 4 до 19 мм',
    features: ['ГОСТ 30698-2014', 'Высокий индекс цветопередачи', 'Без оттенка']
  },
  {
    id: 8,
    name: 'Закаленное стекло',
    image: '/images/basic.jpg',
    desc: '3210×2550 мм, толщина от 4 до 19 мм',
    features: ['ГОСТ 30698-2014','Термообработка 680°C', 'Прочность ×5', 'Без оттенка']
  },
  {
    id: 1,
    name: 'Закаленное стекло.Бронза',
    image: '/images/bronz.jpg',
    desc: '3210×2550 мм, толщина от 4 до 19 мм',
    features: ['ГОСТ 30698-2014', 'Термообработка 680°C', 'Прочность ×5']
  },
  {
    id: 2,
    name: 'Закаленное стекло.Графит',
    image: '/images/grafit.jpg',
    desc: '3210×2550 мм, толщина от 4 до 19 мм',
    features: ['ГОСТ 30698-2014', 'Термообработка 680°C', 'Прочность ×5']
  },
  {
    id: 4,
    name: 'Закаленное стекло.Мателюкс сатин, бронза',
    image: '/images/matbronze.jpg',
    desc: '3210×2550 мм, толщина от 4 до 19 мм',
    features: ['ГОСТ 30698-2014', 'Матовое, полупрозрачное стекло']
  },
  {
    id: 7,
    name: 'Закаленное стекло.Мателюкс сатин',
    image: '/images/matsat.jpg',
    desc: '3210×2550 мм, толщина от 4 до 19 мм',
    features: ['ГОСТ 30698-2014', 'Матовое, полупрозрачное стекло']
  },
  {
    id: 6,
    name: 'Закаленное стекло. Мателюкс сатин, графит',
    image: '/images/matgraf.jpg',
    desc: '3210×2550 мм, толщина от 4 до 19 мм',
    features: ['ГОСТ 30698-2014', 'Матовое, полупрозрачное стекло']
  }
];

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

export function TemperedGlassPage() {
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
      {/* Искры анимация как в каталоге */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Огонь фон */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#8b0000]/20 via-[#600000]/15 to-transparent"></div>
        </div>
      </div>

      <div className="w-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Кнопка "Назад в каталог" */}
          <div className="w-full mb-6 md:mb-8">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-3 text-gray-300 hover:text-[#b50202] font-medium group transition-colors text-base md:text-lg"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
              Назад в каталог
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8 md:mb-12 relative z-10">
            <div className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 mb-4 md:mb-6 bg-gradient-to-r from-[#b50202]/20 to-[#8b0000]/20 border border-[#b50202]/30 rounded-full backdrop-blur-sm">
              <Flame className="w-5 h-5 md:w-6 md:h-6 text-[#b50202] animate-pulse" />
              <span className="text-sm md:text-base font-bold text-[#b50202] uppercase tracking-wider">
                Закалка при 680°C
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
              Закаленное стекло
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-2 md:px-4 font-medium leading-relaxed">
              Термически упрочненное стекло с повышенной прочностью в 5-7 раз.
              Соответствует ГОСТ 30698-2014
            </p>
          </div>

          {/* Features - все по центру */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16 relative z-10">
            <div className="relative group fade-in-scroll">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 hover:border-[#b50202]/50 transition-all group text-center flex flex-col items-center justify-center">
                <Flame className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#b50202] mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">Термообработка</h3>
                <p className="text-slate-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xs">
                  Нагрев до 680°C с последующим быстрым охлаждением
                </p>
              </div>
            </div>

            <div className="relative group fade-in-scroll">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 hover:border-[#b50202]/50 transition-all group text-center flex flex-col items-center justify-center">
                <Shield className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#b50202] mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">Безопасность</h3>
                <p className="text-slate-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xs">
                  При разрушении образует безопасные тупые осколки
                </p>
              </div>
            </div>

            <div className="relative group fade-in-scroll">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 hover:border-[#b50202]/50 transition-all group text-center flex flex-col items-center justify-center">
                <Zap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#b50202] mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">Прочность ×5</h3>
                <p className="text-slate-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xs">
                  В 5-7 раз прочнее обычного стекла той же толщины
                </p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-24 relative z-10">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl overflow-hidden hover:border-[#b50202]/50 transition-all duration-300 group-hover:scale-[1.02] h-full flex flex-col">
                  
                  {/* Изображение */}
                  <div 
                    className="relative aspect-video overflow-hidden cursor-pointer flex-shrink-0"
                    onClick={() => handleImageClick(product.image, product.name)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                    
                    <div className="w-full h-full flex items-center justify-center bg-[#0a0000] p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%230a0000"/><text x="200" y="150" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="20" font-weight="bold">${product.name}</text></svg>';
                        }}
                      />
                    </div>
                    
                    <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 px-2 md:px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 whitespace-nowrap">
                      Кликните для увеличения
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col items-center text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 md:mb-3 group-hover:text-[#b50202] transition-colors leading-tight w-full">
                      {product.name}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 mb-3 md:mb-4 leading-relaxed max-w-xs">
                      {product.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-5 justify-center w-full">
                      {product.features.map((feature, i) => (
                        <span key={i} className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-[#300000]/50 border border-[#b50202]/20 text-slate-300 text-xs sm:text-sm rounded-md break-words max-w-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto w-full">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-full group-hover:w-3/4 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA секция */}
          <div className="mt-12 md:mt-16 lg:mt-20 text-center relative z-10">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] via-[#8b0000] to-[#b50202] rounded-xl md:rounded-2xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl lg:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#b50202]/10 via-[#8b0000]/10 to-[#b50202]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#b50202] mb-4 md:mb-6 drop-shadow-[0_0_10px_rgba(181,2,2,0.5)]">
                    НУЖНА КОНСУЛЬТАЦИЯ?
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                    Наши специалисты помогут подобрать оптимальное решение для вашего проекта и рассчитать стоимость
                  </p>
                  <a
                    href="tel:+375296694444"
                    className="group/btn relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white text-base sm:text-lg md:text-xl font-black rounded-lg md:rounded-xl hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all duration-500 inline-flex items-center justify-center gap-3 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative" />
                    <span className="relative whitespace-nowrap">Свяжитесь с нашим менеджером</span>
                  </a>
                  <p className="text-slate-400 mt-4 md:mt-6 text-sm md:text-base lg:text-lg">
                    Звоните с 9:00 до 18:00
                  </p>
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
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

        /* Адаптивное соотношение сторон */
        .aspect-video {
          aspect-ratio: 16/9;
        }

        @media (max-width: 640px) {
          .aspect-video {
            aspect-ratio: 4/3;
          }
        }
      `}</style>
    </div>
  );
}