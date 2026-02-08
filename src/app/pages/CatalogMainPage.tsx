import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Zap, Shield, Award, CheckCircle, Clock, Box, Droplets } from 'lucide-react';

const categories = [
  {
    id: 'tempered-glass',
    name: 'Закаленное стекло',
    description: 'Термически обработанное стекло повышенной прочности для душевых кабин, перегородок и фасадов',
    image: '/images/zakalka.jpg',
    path: '/catalog/tempered-glass',
    icon: Flame
  },
  {
    id: 'triplex',
    name: 'Триплекс',
    description: 'Многослойное безопасное стекло с противоударной пленкой повышенной безопасности',
    image: '/images/triplex.png',
    path: '/catalog/triplex',
    icon: Shield
  },
  {
    id: 'glass-doors',
    name: 'Стеклянные двери RichDoors',
    description: 'Стильные и прочные двери из закаленного стекла для офисов, бань, домов и коммерческих помещений',
    image: '/images/rich.jpg',
    path: '/catalog/glass-doors',
    icon: Box
  },
  {
    id: 'accessories',
    name: 'Комплектующие',
    description: 'Качественная фурнитура для монтажа стеклянных конструкций любой сложности',
    image: '/images/komplekt.jpg',
    path: '/catalog/accessories',
    icon: Droplets
  },
];

const createSparks = () => {
  const sparks = [];
  for (let i = 0; i < 30; i++) {
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

export function CatalogMainPage() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-gradient-to-b from-[#0a0000] via-[#1a0000] to-[#0a0000]">
      <div className="w-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          {/* Hero Header Section with Sparks */}
          <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden mb-12 md:mb-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Fire Background */}
              <div className="absolute bottom-0 left-0 w-full h-[300px] overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#8b0000]/30 via-[#600000]/20 to-transparent animate-flame-wave-1"></div>
                <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#600000]/25 via-[#8b0000]/15 to-transparent animate-flame-wave-2"></div>
              </div>
              
              <div className="absolute bottom-0 left-1/4 w-[200px] h-[300px] bg-gradient-to-tr from-[#8b0000]/30 via-[#600000]/15 to-transparent animate-flame-left blur-2xl"></div>
              <div className="absolute bottom-0 right-1/4 w-[200px] h-[300px] bg-gradient-to-tl from-[#600000]/30 via-[#8b0000]/15 to-transparent animate-flame-right blur-2xl"></div>
              
              {/* Sparks */}
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

            {/* Main Content */}
            <div className="relative z-10 text-center w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 md:mb-4 leading-tight tracking-tight text-[#FFFFFF]">
                КАТАЛОГ ПРОДУКЦИИ
              </h1>
              
              <h2 className="text-base sm:text-lg md:text-xl text-white/80 mb-4 md:mb-6 font-medium">
                Выберите категорию для просмотра
              </h2>

              {/* Fire Divider with Zap icon */}
              <div className="flex items-center justify-center gap-4 my-6 md:my-8">
                <div className="h-0.5 w-20 md:w-32 bg-gradient-to-r from-transparent via-[#b50202] to-[#8b0000] animate-pulse"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#b50202] blur-lg animate-ping opacity-70"></div>
                  <Zap className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" />
                </div>
                <div className="h-0.5 w-20 md:w-32 bg-gradient-to-l from-transparent via-[#b50202] to-[#8b0000] animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* Categories Grid with FULL IMAGES */}
          <section className="relative mb-16 md:mb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.id}
                    to={category.path}
                    className="group relative flex flex-col"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                    
                    <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-3xl overflow-hidden hover:border-[#b50202]/50 transition-all duration-500 group-hover:scale-[1.03] h-full flex flex-col">
                      
                      {/* Image Container - FULL WIDTH, PROPORTIONAL HEIGHT */}
                      <div className="relative w-full pt-[75%] overflow-hidden"> {/* 4:3 Aspect Ratio */}
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/20 to-transparent"></div>
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 p-3 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-xl border border-[#b50202]/30 backdrop-blur-sm">
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#b50202]" />
                        </div>
                      </div>

                      {/* Content Below Image */}
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        {/* Category Name */}
                        <h3 className="text-lg sm:text-xl font-black text-white mb-3 group-hover:text-[#b50202] transition-colors text-center">
                          {category.name}
                        </h3>
                        
                        {/* Description */}
                        <div className="text-sm sm:text-base text-slate-400 mb-4 flex-grow text-center">
                          {category.description}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-auto">
                          <div className="group/btn relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all duration-500 inline-flex items-center justify-center gap-2 w-full text-sm sm:text-base">
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative">ПЕРЕЙТИ В РАЗДЕЛ</span>
                            <ArrowRight className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-full group-hover:w-3/4 transition-all duration-500"></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Features Grid */}
          <section className="relative mb-16 md:mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
                КАЧЕСТВО И НАДЕЖНОСТЬ
              </h2>
              <div className="text-xl md:text-2xl text-slate-400 font-medium">
                НАША ПРОДУКЦИЯ СООТВЕТСТВУЕТ САМЫМ ВЫСОКИМ СТАНДАРТАМ
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  title: "СЕРТИФИКАЦИЯ ГОСТ",
                  description: "Все изделия соответствуют государственным стандартам качества и безопасности",
                  icon: Award
                },
                {
                  title: "СОВРЕМЕННОЕ ОБОРУДОВАНИЕ",
                  description: "Производство на европейских станках с ЧПУ и точностью до 0.1 мм",
                  icon: CheckCircle
                },
                {
                  title: "ГАРАНТИЯ 5 лет",
                  description: "Официальная гарантия на всю продукцию и выполненные работы",
                  icon: Clock
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="relative group fade-in-scroll">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] backdrop-blur-sm border-2 border-[#300000] rounded-3xl p-8 hover:border-[#b50202]/50 transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center gap-6">
                        <div className="p-3 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-xl border border-[#b50202]/30">
                          <Icon className="w-8 h-8 text-[#b50202]" />
                        </div>
                        <h4 className="text-2xl font-black text-white">{feature.title}</h4>
                        <div className="text-lg text-slate-400">{feature.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Help Section */}
          <section className="relative mb-16 md:mb-24">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] via-[#8b0000] to-[#b50202] rounded-3xl blur opacity-30 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] border-2 border-[#300000] rounded-3xl p-8 sm:p-12 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50202]/10 via-[#8b0000]/10 to-[#b50202]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-black text-[#b50202] mb-6 drop-shadow-[0_0_10px_rgba(181,2,2,0.5)]">
                  ПОМОЖЕМ С ВЫБОРОМ
                </h2>
                
                <div className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                  Не знаете, какая продукция подойдет для вашего проекта? Наши специалисты проведут бесплатную консультацию
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+375447256683"
                    className="group/btn px-8 py-4 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-xl font-black hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all hover:scale-105 inline-flex items-center justify-center gap-3 text-lg"
                  >
                    <div>ПОЗВОНИТЬ КОНСУЛЬТАНТУ</div>
                  </a>
                  
                  <Link
                    to="/contacts"
                    className="px-8 py-4 bg-[#1a0000] border-2 border-[#300000] text-slate-300 rounded-xl font-bold hover:bg-[#b50202]/30 hover:text-white hover:border-[#b50202] transition-colors inline-flex items-center justify-center gap-3 text-lg"
                  >
                    <div>ВСЕ КОНТАКТЫ</div>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="text-base text-slate-500 mt-8">
                  Консультация бесплатно • Подбор материалов • Расчет стоимости • Выезд специалиста
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        @keyframes flame-wave-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes flame-wave-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes flame-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-10px); }
        }
        @keyframes flame-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
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
        
        .animate-flame-wave-1 {
          animation: flame-wave-1 2s ease-in-out infinite;
        }
        .animate-flame-wave-2 {
          animation: flame-wave-2 2.5s ease-in-out infinite;
        }
        .animate-flame-left {
          animation: flame-left 3s ease-in-out infinite;
        }
        .animate-flame-right {
          animation: flame-right 3s ease-in-out infinite;
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
      `}</style>
    </div>
  );
}