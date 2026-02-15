import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Shield, Layers, Lock, Phone, Zap, CheckCircle, Sun, Eye, Palette, Wind, Maximize2 } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Стандартный триплекс',
    description: '2 стекла и 1 слой полимера. Базовая защита для окон и дверей.',
    icon: Layers,
    image: '/images/triplex/standard.jpg',
    features: ['Два слоя стекла', 'PVB пленка', 'Базовый уровень защиты']
  },
  {
    id: 2,
    title: 'Двойной триплекс',
    description: '3 слоя стекла и 2 слоя полимера. Усиленная конструкция.',
    icon: Layers,
    image: '/images/triplex/double.jpg',
    features: ['Тройной слой стекла', 'Двойная ламинация', 'Повышенная прочность']
  },
  {
    id: 3,
    title: 'Триплекс Optiwhite',
    description: 'Из осветленного стекла оптивайт. Максимальная прозрачность.',
    icon: Sun,
    image: '/images/triplex/optiwhite.jpg',
    features: ['Без зеленого оттенка', 'Идеальная прозрачность', 'Премиум качество']
  },
  {
    id: 4,
    title: 'Триплекс тонированный',
    description: 'Декоративное стекло в цветах бронза, графит и другие.',
    icon: Palette,
    image: '/images/triplex/toned.jpg',
    features: ['Цвет: бронза, графит', 'Декоративный эффект', 'Солнцезащита']
  },
  {
    id: 6,
    title: 'Триплекс флоат-стекло',
    description: 'Из обычного флоат-стекла. Оптимальное соотношение цены и качества.',
    icon: Eye,
    image: '/images/triplex/float.png',
    features: ['Стандартная оптика', 'Доступная цена', 'Универсальность']
  }
];

const thicknessOptions = [
  '4 мм + 4 мм',
  '5 мм + 5 мм',
  '6 мм + 6 мм',
  '8 мм + 8 мм',
  '10 мм + 10 мм',
  'Индивидуальная толщина'
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
        className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-2xl overflow-hidden"
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
              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%230a0000"/><text x="200" y="150" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="16" font-weight="bold">Изображение не найдено</text></svg>';
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

export function TriplexPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const sparks = createSparks();

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
          
          {/* Хлебные крошки */}
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
              <Layers className="w-5 h-5 md:w-6 md:h-6 text-[#b50202] animate-pulse" />
              <span className="text-sm md:text-base font-bold text-[#b50202] uppercase tracking-wider">
                Многослойное безопасное стекло
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
              ТРИПЛЕКС
            </h1>
            
            <div className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-2 md:px-4 font-medium">
              Безопасное многослойное стекло с полимерными слоями. Индивидуальный подбор толщины и типа стекла под ваши задачи.
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20 relative z-10">
            {[
              {
                title: "Безопасность",
                description: "При разрушении осколки остаются на пленке, предотвращая травмы",
                icon: Shield
              },
              {
                title: "Многослойность",
                description: "От 2 до 3 слоев стекла с полимерными прослойками",
                icon: Layers
              },
              {
                title: "Комплексная защита",
                description: "УФ-защита 99%, шумоизоляция, антивандальные свойства",
                icon: Lock
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="relative group fade-in-scroll">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#b50202]/50 transition-all duration-300 h-full">
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

          {/* Типы триплекса - Заголовок */}
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
              ВИДЫ ТРИПЛЕКСА
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#b50202] to-[#8b0000] mx-auto rounded-full"></div>
          </div>

          {/* Services Grid - Типы триплекса с картинками */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="group relative flex flex-col h-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                  
                  <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-3xl overflow-hidden hover:border-[#b50202]/50 transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
                    
                    {/* Image Container - одинаковый размер для всех */}
                    <div 
                      className="relative pt-[56.25%] overflow-hidden cursor-pointer"
                      onClick={() => handleImageClick(service.image, service.title)}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-[#0a0000]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect width="400" height="225" fill="%23300"/><text x="200" y="112" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="14" font-weight="bold">' + service.title + '</text></svg>';
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-transparent to-transparent opacity-60"></div>
                      
                      {/* Иконка поверх изображения */}
                      <div className="absolute top-3 left-3 p-2 bg-black/60 backdrop-blur-sm rounded-lg border border-[#b50202]/30 z-10">
                        <Icon className="w-5 h-5 text-[#b50202]" />
                      </div>
                      
                      {/* Click hint */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                        Кликните для увеличения
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-black text-white mb-3 group-hover:text-[#b50202] transition-colors text-center">
                        {service.title}
                      </h3>
                      
                      <div className="text-sm md:text-base text-slate-400 mb-4 flex-grow text-center">
                        {service.description}
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {service.features.map((feature, i) => (
                          <span key={i} className="px-2 py-1 bg-[#300000]/50 border border-[#b50202]/20 text-slate-300 text-xs rounded-md">
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="mt-auto">
                        <a
                          href="tel:+375447256683"
                          className="w-full px-4 py-3 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-lg font-bold hover:shadow-lg hover:shadow-[#8b0000]/40 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base group/btn"
                        >
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                          <Phone className="w-4 h-4 md:w-5 md:h-5 relative" />
                          <span className="relative">Заказать</span>
                        </a>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-full group-hover:w-3/4 transition-all duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Возможности толщин */}
          <div className="relative z-10 mb-16">
            <div className="bg-gradient-to-br from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-3xl p-8 md:p-10">
              
              <div className="text-center mb-8">
                <Maximize2 className="w-12 h-12 text-[#b50202] mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  ЛЮБАЯ ТОЛЩИНА СТЕКЛА
                </h3>
                <p className="text-slate-400 text-lg">
                  Мы изготовим триплекс с индивидуальным подбором толщины стекол
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {thicknessOptions.map((option, index) => (
                  <div key={index} className="text-center p-3 bg-[#300000]/30 border border-[#b50202]/20 rounded-xl">
                    <span className="text-sm font-medium text-white">{option}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center text-slate-400 text-sm">
                * Возможно изготовление нестандартных размеров по вашему заданию
              </div>
            </div>
          </div>

          {/* Дополнительные возможности */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
            
            {/* Флоат-стекло */}
            <div className="bg-gradient-to-br from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-2xl p-6 hover:border-[#b50202]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-[#b50202]" />
                <h4 className="text-lg font-black text-white">Флоат-стекло</h4>
              </div>
              <p className="text-slate-400 text-sm">Обычное флоат-стекло для базовых решений</p>
            </div>

            {/* Optiwhite */}
            <div className="bg-gradient-to-br from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-2xl p-6 hover:border-[#b50202]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Sun className="w-6 h-6 text-[#b50202]" />
                <h4 className="text-lg font-black text-white">Осветленное Optiwhite</h4>
              </div>
              <p className="text-slate-400 text-sm">Максимальная прозрачность без зеленого оттенка</p>
            </div>

            {/* Тонированное */}
            <div className="bg-gradient-to-br from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-2xl p-6 hover:border-[#b50202]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="w-6 h-6 text-[#b50202]" />
                <h4 className="text-lg font-black text-white">Тонированное</h4>
              </div>
              <p className="text-slate-400 text-sm">Цвета: бронза, графит и другие оттенки</p>
            </div>

          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20 relative z-10">
            {[
              {
                title: "УФ-защита 99%",
                description: "Защита от вредного ультрафиолетового излучения",
                icon: Shield
              },
              {
                title: "Шумоизоляция",
                description: "Снижение уровня шума до 35 дБ",
                icon: Wind
              },
              {
                title: "Безопасность",
                description: "Сертификат соответствия ГОСТ",
                icon: CheckCircle
              },
              {
                title: "Долговечность",
                description: "Срок службы более 25 лет",
                icon: Layers
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl p-4 hover:border-[#b50202]/50 transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="p-2 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-lg border border-[#b50202]/30">
                        <Icon className="w-5 h-5 text-[#b50202]" />
                      </div>
                      <h4 className="text-sm font-black text-white">{benefit.title}</h4>
                      <div className="text-xs text-slate-400">{benefit.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="relative mt-12 md:mt-16 lg:mt-20">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] via-[#8b0000] to-[#b50202] rounded-3xl blur opacity-30 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] border-2 border-[#300000] rounded-3xl p-6 sm:p-8 md:p-12 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50202]/10 via-[#8b0000]/10 to-[#b50202]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#b50202] mb-4 md:mb-6 drop-shadow-[0_0_10px_rgba(181,2,2,0.5)]">
                  НУЖНА КОНСУЛЬТАЦИЯ ПО ТРИПЛЕКСУ?
                </h2>
                
                <div className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                  Наши специалисты помогут выбрать оптимальную толщину и тип триплекса для ваших задач
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+375447256683"
                    className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-lg md:rounded-xl font-bold hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all duration-500 inline-flex items-center justify-center gap-3 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative" />
                    <span className="relative">+375 (44) 725 66 83</span>
                  </a>
                  
                  <Link
                    to="/contacts"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1a0000] border-2 border-[#300000] text-slate-300 rounded-lg md:rounded-xl font-bold hover:bg-[#b50202]/30 hover:text-white hover:border-[#b50202] transition-colors inline-flex items-center justify-center gap-3"
                  >
                    <span>Заказать расчет</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
                
                <div className="text-sm md:text-base text-slate-500 mt-6 md:mt-8">
                  Консультация бесплатно • Подбор материалов • Расчет стоимости • Выезд специалиста
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно для просмотра изображения */}
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