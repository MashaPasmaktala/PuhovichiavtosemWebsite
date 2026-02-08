import { Award, Users, Building2, CheckCircle, Target, Lightbulb, Flame, ArrowRight, Shield, Zap, Phone, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Handshake } from "lucide-react";
import { useState } from 'react';

const stats = [
  {
    icon: Award,
    value: '5+',
    label: 'Лет на рынке',
  },
  {
    icon: Building2,
    value: '1000+',
    label: 'Проектов',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Довольных клиентов',
  },
  {
    icon: CheckCircle,
    value: '100%',
    label: 'Соблюдение сроков',
  },
];

const values = [
  {
    icon: Target,
    title: 'Качество',
    description: 'Используем только сертифицированные материалы и современное оборудование',
    color: 'from-[#b50202] to-[#8b0000]'
  },
  {
    icon: Lightbulb,
    title: 'Инновации',
    description: 'Внедряем передовые технологии закалки стекла',
    color: 'from-[#b50202] to-[#8b0000]'
  },
  {
    icon: Users,
    title: 'Клиентоориентированность',
    description: 'Индивидуальный подход к каждому проекту',
    color: 'from-[#b50202] to-[#8b0000]'
  },
];

// Массив с 5 фотографиями производства
const productionPhotos = [
  '/images/zakalka.jpg',
  '/images/p2.jpg',
  '/images/p3.jpg',
  '/images/p4.jpg',
  '/images/p5.jpg'
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

export function AboutPage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const sparks = createSparks();

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === productionPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? productionPhotos.length - 1 : prevIndex - 1
    );
  };

  const goToPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-gradient-to-b from-[#0a0000] via-[#1a0000] to-[#0a0000]">
      {/* Искры анимация */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Огонь фон */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#8b0000]/30 via-[#600000]/20 to-transparent animate-flame-wave-1"></div>
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#600000]/25 via-[#8b0000]/15 to-transparent animate-flame-wave-2"></div>
        </div>
        
        <div className="absolute bottom-0 left-1/4 w-[200px] h-[300px] bg-gradient-to-tr from-[#8b0000]/30 via-[#600000]/15 to-transparent animate-flame-left blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[200px] h-[300px] bg-gradient-to-tl from-[#600000]/30 via-[#8b0000]/15 to-transparent animate-flame-right blur-2xl"></div>
        
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
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-20 relative z-10">
            <div className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 mb-4 md:mb-6 bg-gradient-to-r from-[#b50202]/20 to-[#8b0000]/20 border border-[#b50202]/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#b50202] animate-pulse" />
              <span className="text-sm md:text-base font-bold text-[#b50202] uppercase tracking-wider">
                Познакомьтесь с нами
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
              О КОМПАНИИ
            </h1>
            
            <div className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-2 md:px-4 font-medium">
              ООО "Пуховичиавтосемь" — ваш надежный партнер в сфере закалки, обработки и резки стекла
            </div>
          </div>

          {/* Fire Divider */}
          <div className="flex items-center justify-center gap-4 my-8 md:my-12 relative z-10">
            <div className="h-0.5 w-20 md:w-32 bg-gradient-to-r from-transparent via-[#b50202] to-[#8b0000]"></div>
            <Flame className="w-6 h-6 md:w-8 md:h-8 text-[#b50202]" />
            <div className="h-0.5 w-20 md:w-32 bg-gradient-to-l from-transparent via-[#b50202] to-[#8b0000]"></div>
          </div>

          {/* О компании в две колонки */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 relative z-10">
            {/* Карусель с фотографиями производства */}
            <div className="relative group fade-in-scroll">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-3xl overflow-hidden hover:border-[#b50202]/50 transition-all duration-500 h-full">
                {/* Image Container */}
                <div className="relative pt-[75%] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0a0000]">
                    <img 
                      src={productionPhotos[currentPhotoIndex]} 
                      alt={`Наше производство - фото ${currentPhotoIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800';
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/40 to-transparent"></div>
                  
                  {/* Navigation Buttons */}
                  <button 
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/70 backdrop-blur-sm rounded-full border border-[#b50202]/30 hover:border-[#b50202] transition-all group/btn"
                    aria-label="Предыдущее фото"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#b50202] group-hover/btn:text-white" />
                  </button>
                  
                  <button 
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/70 backdrop-blur-sm rounded-full border border-[#b50202]/30 hover:border-[#b50202] transition-all group/btn"
                    aria-label="Следующее фото"
                  >
                    <ChevronRight className="w-5 h-5 text-[#b50202] group-hover/btn:text-white" />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {productionPhotos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToPhoto(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentPhotoIndex 
                            ? 'bg-[#b50202] scale-125' 
                            : 'bg-[#300000] hover:bg-[#b50202]/70'
                        }`}
                        aria-label={`Перейти к фото ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#b50202]/80 border border-[#b50202]/30 rounded-full text-white text-xs font-bold backdrop-blur-sm">
                      Галерея производства
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Наша история - ИСПРАВЛЕННЫЙ БЛОК */}
            <div className="relative fade-in-scroll">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-3xl opacity-0 hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-3xl p-6 md:p-8 hover:border-[#b50202]/50 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 flex-shrink-0">
                  <div className="p-2 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-xl border border-[#b50202]/30">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#b50202]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    НАША ИСТОРИЯ
                  </h2>
                </div>
                
                <div className="space-y-4 text-base md:text-lg text-slate-400 leading-relaxed flex-grow">
                  <p className="mb-4">
                    Наша компания присутствует на рынке производства и обработки материалов уже более 7 лет. 
                    Накопленный опыт и экспертиза позволили нам уверенно выйти на перспективный рынок обработки стекла, 
                    где мы успешно работаем уже год.
                  </p>
                  <p className="mb-4">
                    За это время мы смогли заслужить доверие и стать надежным поставщиком для ведущих игроков отрасли, 
                    включая таких партнеров, как «Эрада», «Юркас», «Плитмар» и «Авансум». Мы ценим это сотрудничество и стремимся предлагать решения, которые отвечают высоким стандартам качества и сроков, ожидаемым от профессионального производителя.
                  </p>
                  <p className="mb-4">
                    Наше производство оснащено современным европейским оборудованием для закалки, резки и обработки стекла. 
                    Мы предлагаем полный цикл работ — от консультации до производства готовых изделий.
                  </p>
                  <p>
                    Специализируемся на изготовлении душевых перегородок, банных дверей, стеклопакетов и
                    других изделий из стекла. Работаем как с типовыми, так и с индивидуальными проектами
                    любой сложности.
                  </p>
                </div>
                
                {/* Добавляем нижний акцент для баланса */}
                <div className="mt-6 pt-4 border-t border-[#300000] flex-shrink-0">
                  <div className="text-sm text-slate-500">
                    Более 7 лет опыта • Современное оборудование • Гарантия качества
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20 relative z-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="relative group fade-in-scroll">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                  
                  <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#b50202]/50 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-xl border border-[#b50202]/30">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#b50202]" />
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                      <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ценности */}
          <div className="relative mb-16 md:mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
                НАШИ ЦЕННОСТИ
              </h2>
              <div className="text-lg md:text-xl text-slate-400 font-medium">
                Принципы, на которых строится наша работа
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="relative group fade-in-scroll">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                    
                    <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] backdrop-blur-sm border-2 border-[#300000] rounded-3xl p-8 hover:border-[#b50202]/50 transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center gap-6">
                        <div className="p-3 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-xl border border-[#b50202]/30">
                          <Icon className="w-8 h-8 text-[#b50202]" />
                        </div>
                        <h4 className="text-2xl font-black text-white">{value.title}</h4>
                        <div className="text-lg text-slate-400">{value.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Наши возможности */}
          <div className="relative mb-16 md:mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
                НАШИ ВОЗМОЖНОСТИ
              </h2>
              <div className="text-lg md:text-xl text-slate-400 font-medium">
                Технологии и ресурсы для реализации ваших идей
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "СОБСТВЕННОЕ ПРОИЗВОДСТВО",
                  desc: "Полный контроль качества на всех этапах изготовления",
                  icon: Building2
                },
                {
                  title: "СОВРЕМЕННОЕ ОБОРУДОВАНИЕ",
                  desc: "Профессиональная резка, печь закалки, автоматизированные линии",
                  icon: Zap
                },
                {
                  title: "ОПЫТНЫЕ СПЕЦИАЛИСТЫ",
                  desc: "Команда профессионалов с большим опытом работы",
                  icon: Users
                },
                {
                  title: "ГАРАНТИЯ КАЧЕСТВА",
                  desc: "Официальная гарантия на все виды работ и изделия",
                  icon: Shield
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative group fade-in-scroll">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                    
                    <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-[#b50202]/50 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-lg border border-[#b50202]/30 flex-shrink-0">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#b50202]" />
                        </div>
                        <div>
                          <h4 className="font-black text-white mb-2 text-lg md:text-xl group-hover:text-[#b50202] transition-colors">
                            {item.title}
                          </h4>
                          <div className="text-sm md:text-base text-slate-400">{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative mt-12 md:mt-20">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] via-[#8b0000] to-[#b50202] rounded-3xl blur opacity-30 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] border-2 border-[#300000] rounded-3xl p-6 sm:p-8 md:p-12 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50202]/10 via-[#8b0000]/10 to-[#b50202]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <div className="flex flex-col items-center gap-3 md:gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-xl border border-[#b50202]/30">
                    <Handshake className="w-6 h-6 md:w-8 md:h-8 text-[#b50202]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#b50202] drop-shadow-[0_0_10px_rgba(181,2,2,0.5)]">
                    ГОТОВЫ К СОТРУДНИЧЕСТВУ?
                  </h2>
                </div>
                
                <div className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                  Свяжитесь с нами для обсуждения вашего проекта. Мы предложим оптимальное решение и рассчитаем стоимость
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+375447256683"
                    className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-lg md:rounded-xl font-bold hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all duration-500 inline-flex items-center justify-center gap-3 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative" />
                    <span className="relative">Связаться с менеджером</span>
                  </a>
                  
                  <Link
                    to="/services"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1a0000] border-2 border-[#300000] text-slate-300 rounded-lg md:rounded-xl font-bold hover:bg-[#b50202]/30 hover:text-white hover:border-[#b50202] transition-colors inline-flex items-center justify-center gap-3"
                  >
                    <span>Наши услуги</span>
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