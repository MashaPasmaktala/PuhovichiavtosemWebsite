import { PageHeader } from '../components/PageHeader';
import { Sparkles, Flame, ArrowRight, Phone, Mail, Award, Shield, Zap, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    image: '/images/zakalka.jpg',
    title: 'Закалка стекла',
    description: 'Термическое упрочнение стекла для повышения прочности и безопасности.',
    features: [
      'Толщина 4-19 мм',
      'Размер до 3210x2550 мм',
      'ГОСТ 30698-2014',
      'Высокая прочность'
    ]
  },
  {
    image: '/images/rexka.jpg',
    title: 'Обработка и резка стекла',
    description: 'Высокоточная резка и обработка на современном оборудовании.',
    features: [
      'Точность до 0,1 мм',
      'Полировка и фацет',
      'Сверление отверстий',
      'Индивидуальные размеры'
    ]
  },
  {
    image: '/images/skinali.jpg',
    title: 'Стеклянные скинали',
    description: 'Стеклянные фартуки для кухни с фотопечатью или однотонным покрытием.',
    features: [
      'Стекло 4-19 мм',
      'Фотопечать высокого качества',
      'Различные цвета по RAL',
      'Устойчивость к влаге'
    ]
  },
  {
    image: '/images/zerkalo1.jpg',
    title: 'Фотопечать на стекле',
    description: 'Печать высокого разрешения на стекле и зеркалах.',
    features: [
      'Высокое качество печати',
      'Устойчивость к влаге',
      'Не выгорает на солнце',
      'На стекле и зеркалах'
    ]
  },
  {
    image: '/images/dush2.jpg',
    title: 'Душевые кабины',
    description: 'Душевые кабины и ограждения из закаленного стекла.',
    features: [
      'Стекло до 19 мм',
      'Разная фурнитура',
      'Матовое/тонированное',
      'Профессиональный монтаж'
    ]
  },
  {
    image: '/images/peregor.jpg',
    title: 'Стеклянные перегородки',
    description: 'Офисные и межкомнатные перегородки из стекла.',
    features: [
      'Каркасные и бескаркасные',
      'Раздвижные системы',
      'Матирование/тонировка',
      'Быстрый монтаж'
    ]
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

export function ServicesPage() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-gradient-to-b from-[#0a0000] via-[#1a0000] to-[#0a0000]">
      <div className="w-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          {/* Hero Section with Sparks */}
          <section className="relative min-h-[30vh] md:min-h-[40vh] flex items-center justify-center overflow-hidden mb-12 md:mb-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Fire Background */}
              <div className="absolute bottom-0 left-0 w-full h-[200px] md:h-[300px] overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-[150px] md:h-[250px] bg-gradient-to-t from-[#8b0000]/30 via-[#600000]/20 to-transparent animate-flame-wave-1"></div>
                <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[200px] bg-gradient-to-t from-[#600000]/25 via-[#8b0000]/15 to-transparent animate-flame-wave-2"></div>
              </div>
              
              <div className="absolute bottom-0 left-1/4 w-[150px] md:w-[200px] h-[200px] md:h-[300px] bg-gradient-to-tr from-[#8b0000]/30 via-[#600000]/15 to-transparent animate-flame-left blur-xl md:blur-2xl"></div>
              <div className="absolute bottom-0 right-1/4 w-[150px] md:w-[200px] h-[200px] md:h-[300px] bg-gradient-to-tl from-[#600000]/30 via-[#8b0000]/15 to-transparent animate-flame-right blur-xl md:blur-2xl"></div>
              
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
            <div className="relative z-10 text-center w-full px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 md:mb-4 leading-tight tracking-tight text-[#FFFFFF] ">
                НАШИ УСЛУГИ
              </h1>
              
              {/* Small white text before divider */}
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-4 md:mb-6 font-medium">
                Полный цикл обработки стекла
              </h2>

              {/* Fire Divider */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 my-4 md:my-6">
                <div className="h-0.5 w-12 sm:w-16 md:w-20 lg:w-32 bg-gradient-to-r from-transparent via-[#b50202] to-[#8b0000] animate-pulse"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#b50202] blur-lg animate-ping opacity-70"></div>
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white relative z-10" />
                </div>
                <div className="h-0.5 w-12 sm:w-16 md:w-20 lg:w-32 bg-gradient-to-l from-transparent via-[#b50202] to-[#8b0000] animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="relative mb-16 md:mb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative fade-in-scroll h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur-lg sm:blur-xl transition-all duration-500"></div>
                  
                  <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-2xl sm:rounded-3xl overflow-hidden hover:border-[#b50202]/50 transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
                    {/* Image Container - УВЕЛИЧЕННАЯ ВЫСОТА для полного отображения */}
                    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] flex-shrink-0 overflow-hidden bg-[#0a0000]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                        style={{ objectPosition: 'center' }}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/40 to-transparent"></div>
                      
                      {/* Title overlay - ПОДНЯТ ВЫШЕ */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/80 to-transparent">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content - УМЕНЬШЕНЫ ОТСТУПЫ */}
                    <div className="flex-grow flex flex-col p-4 sm:p-5 md:p-6 lg:p-8">
                      <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-3 sm:mb-4 md:mb-5 leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-2"></span>
                            <span className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-tight">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-full group-hover:w-3/4 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section className="relative mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] leading-tight">
                НАШИ ПРЕИМУЩЕСТВА
              </h2>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 font-medium">
                ГАРАНТИЯ КАЧЕСТВА И ПРОФЕССИОНАЛИЗМА
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full">
              {[
                {
                  icon: Shield,
                  title: "ГАРАНТИЯ КАЧЕСТВА",
                  description: "Работы выполняются по ГОСТ"
                },
                {
                  icon: Clock,
                  title: "СОБЛЮДЕНИЕ СРОКОВ",
                  description: "Строгое выполнение договоренностей"
                },
                {
                  icon: Award,
                  title: "ОПЫТ 5+ ЛЕТ",
                  description: "Профессиональная команда специалистов"
                },
                {
                  icon: MapPin,
                  title: "СОБСТВЕННОЕ ПРОИЗВОДСТВО",
                  description: "Минская область, Пуховичский район"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="relative group fade-in-scroll h-full">
                    <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur-lg sm:blur-xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] backdrop-blur-sm border-2 border-[#300000] rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 hover:border-[#b50202]/50 transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6">
                        <div className="p-3 sm:p-3.5 md:p-4 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-lg sm:rounded-xl border border-[#b50202]/30">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#b50202]" />
                        </div>
                        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white leading-tight">{feature.title}</h4>
                        <div className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">{feature.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative mb-16 md:mb-24">
            <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-[#b50202] via-[#8b0000] to-[#b50202] rounded-2xl sm:rounded-3xl blur opacity-30 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] border-2 border-[#300000] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50202]/10 via-[#8b0000]/10 to-[#b50202]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#b50202] mb-4 sm:mb-5 md:mb-6 drop-shadow-[0_0_10px_rgba(181,2,2,0.5)] leading-tight">
                  НУЖНА КОНСУЛЬТАЦИЯ?
                </h2>
                
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
                  Наши специалисты помогут подобрать оптимальное решение для вашего проекта 
                  и рассчитают стоимость работ
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
                  <a
                    href="tel:+375296694444"
                    className="group/btn px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-xl font-black hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <div>ПОЗВОНИТЬ КОНСУЛЬТАНТУ</div>
                  </a>
                  
                  <Link
                    to="/contacts"
                    className="px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 bg-[#1a0000] border-2 border-[#300000] text-slate-300 rounded-xl font-bold hover:bg-[#b50202]/30 hover:text-white hover:border-[#b50202] transition-colors inline-flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <div>НАПИСАТЬ НАМ</div>
                  </Link>
                </div>
                
                <div className="text-xs sm:text-sm md:text-base text-slate-500 mt-6 sm:mt-7 md:mt-8 px-2 leading-relaxed">
                  Бесплатный расчет стоимости • Профессиональная консультация • Быстрое изготовление • Официальный договор
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

        /* Оптимизация для мобильных устройств */
        @media (max-width: 640px) {
          .fade-in-scroll {
            animation-duration: 0.6s;
          }
        }

        /* Улучшение производительности анимаций */
        @media (prefers-reduced-motion: reduce) {
          .animate-flame-wave-1,
          .animate-flame-wave-2,
          .animate-flame-left,
          .animate-flame-right,
          .group-hover\\:scale-\\[1\\.02\\],
          .group-hover\\:scale-110,
          .fade-in-scroll {
            animation: none;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}