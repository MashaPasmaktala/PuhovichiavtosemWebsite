import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Zap, Shield, Award, CheckCircle, TrendingUp, Package, Droplets, Box, Clock, Truck, Users, Star } from 'lucide-react';

const services = [
  {
    image: '/images/zakalka.jpg', 
    icon: Flame,
    title: 'Закалка стекла',
    description: 'Термическое упрочнение стекла. Повышение прочности в 5-7 раз.',
    features: ['ГОСТ 30698-2014', 'Толщина 4-19 мм', 'До 3210×2550 мм']
  },
  {
    image: '/images/rexka.jpg',
    icon: Zap,
    title: 'Обработка и резка',
    description: 'Высокоточная резка и обработка кромки с точностью до 0.1 мм.',
    features: ['Передовая технология', 'Фацет, полировка', 'Любая форма']
  },
  {
    image: '/images/kabina.jpg',
    icon: Shield,
    title: 'Душевые кабины',
    description: 'Изготовление и доставка перегородок из закаленного стекла.',
    features: ['Стекло 4-19 мм', 'Премиум фурнитура', 'Гарантия 5 лет']
  },
];

const stats = [
  { value: '5+', label: 'Лет опыта', icon: Award },
  { value: '1000+', label: 'Проектов', icon: CheckCircle },
  { value: '5 лет', label: 'Гарантия качества', icon: TrendingUp },
  { value: '100%', label: 'Соблюдение договора', icon: Star },
];

const process = [
  { step: '01', title: 'Консультация', desc: 'Бесплатная консультация менеджера', icon: CheckCircle },
  { step: '02', title: 'Расчет', desc: 'Точная смета от наших специалистов', icon: Award },
  { step: '03', title: 'Производство', desc: 'Контроль на каждом этапе', icon: Flame },
  { step: '04', title: 'Быстрая доставка', desc: 'В срок по договору', icon: Package },
];

const categories = [
  { title: 'Закалённое стекло', icon: Flame, link: '/catalog/tempered-glass' },
  { title: 'Стеклянные двери', icon: Shield, link: '/catalog/glass-doors' },
  { title: 'Триплекс', icon: Box, link: '/catalog/triplex' },
  { title: 'Комплектующие', icon: Droplets, link: '/catalog/accessories' }
];

const additionalStats = [
  { value: '>1000', label: 'Довольных клиентов', desc: 'С момента начала работы', icon: Package },
  { value: '100%', label: 'Точность', desc: 'Соблюдение размеров', icon: Award },
  { value: '0.1 мм', label: 'Допуск', desc: 'Точность обработки', icon: CheckCircle },
  { value: '3-7 дней', label: 'Сроки', desc: 'Среднее время производства', icon: Clock },
];

const createSparks = () => {
  const sparks = [];
  for (let i = 0; i < 60; i++) {
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

export function Home() {
  return (
  <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-gradient-to-b from-[#0a0000] via-[#1a0000] to-[#0a0000]">
  <div className="w-screen">
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden mb-16 md:mb-24">
        {/* Fire Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-[400px] overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#8b0000]/40 via-[#600000]/25 to-transparent animate-flame-wave-1"></div>
            <div className="absolute bottom-0 left-0 w-full h-[280px] bg-gradient-to-t from-[#600000]/35 via-[#8b0000]/20 to-transparent animate-flame-wave-2"></div>
            <div className="absolute bottom-0 left-0 w-full h-[320px] bg-gradient-to-t from-[#b22222]/25 via-[#8b0000]/15 to-transparent animate-flame-wave-3"></div>
            <div className="absolute bottom-0 left-0 w-full h-[260px] bg-gradient-to-t from-[#8b0000]/40 via-[#600000]/20 to-transparent animate-flame-wave-4"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-[300px] h-[500px] bg-gradient-to-tr from-[#8b0000]/45 via-[#600000]/25 to-transparent animate-flame-left blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[500px] bg-gradient-to-tl from-[#600000]/45 via-[#8b0000]/25 to-transparent animate-flame-right blur-2xl"></div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-[#b22222]/35 via-[#8b0000]/20 to-transparent animate-flame-center blur-3xl"></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a0000]/10 to-[#1a0000]/15"></div>
          
          {sparks.map(spark => (
            <div
              key={spark.id}
              className="absolute rounded-full"
              style={{
                left: spark.left,
                bottom: '0',
                width: spark.size,
                height: spark.size,
                background: `linear-gradient(to top, #b22222, #8b0000, #600000)`,
                boxShadow: `0 0 ${12 * spark.intensity}px ${6 * spark.intensity}px rgba(139, 0, 0, ${0.5 + spark.intensity * 0.5})`,
                animation: `spark-rise ${spark.duration} ease-out infinite`,
                animationDelay: spark.delay,
                opacity: 0,
                transform: `translateX(${spark.directionX}px)`
              }}
            />
          ))}
          
          <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-[#b22222] rounded-full animate-fire-flash opacity-0 blur-sm"></div>
          <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-[#8b0000] rounded-full animate-fire-flash-delayed opacity-0 blur-sm"></div>
          <div className="absolute bottom-16 left-1/2 w-5 h-5 bg-[#600000] rounded-full animate-fire-flash-slow opacity-0 blur-sm"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center w-full">
          {/* Company Name */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#b50202] via-[#b50202] to-[#b50202] ">
  ПУХОВИЧИАВТОСЕМЬ
</h1>

{/* Slogan */}
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ffd93d] via-[#ff9f1a] to-[#ff7f00] drop-shadow-[0_0_15px_rgba(255,159,26,0.5)]">
  ОТ ОГНЯ ДО НАДЕЖНОСТИ - ОДИН ЦИКЛ
</h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-semibold">
              Премиум качество с 2020 года
            </p>
          </div>

          {/* Fire Divider */}
          <div className="flex items-center justify-center gap-4 my-8 md:my-12">
            <div className="h-0.5 w-32 md:w-48 bg-gradient-to-r from-transparent via-[#8b0000] to-[#600000] animate-pulse"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#8b0000] blur-md animate-ping"></div>
              <Flame className="w-10 h-10 md:w-12 md:h-12 text-[#8b0000] animate-burn relative" />
            </div>
            <div className="h-0.5 w-32 md:w-48 bg-gradient-to-l from-transparent via-[#8b0000] to-[#600000] animate-pulse"></div>
          </div>

          {/* Single Prominent CTA */}
          <Link
            to="/catalog"
            className="group relative inline-flex items-center gap-3 md:gap-4 px-10 md:px-16 py-4 md:py-6 bg-gradient-to-r from-[#8b0000] to-[#600000] rounded-2xl overflow-hidden shadow-2xl shadow-[#600000]/60 hover:shadow-[#600000]/80 transition-all duration-500 hover:scale-105 mb-12 md:mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#b22222] to-[#8b0000] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            
            <Flame className="relative w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
            <span className="relative text-white font-black text-xl md:text-2xl tracking-wide">
              КАТАЛОГ
            </span>
            <ArrowRight className="relative w-6 h-6 md:w-8 md:h-8 text-white group-hover:translate-x-2 transition-transform duration-500" />
          </Link>

          {/* Categories */}
          <div className="mt-8 md:mt-12 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.slice(0, 4).map((category, idx) => (
                <Link
                  key={idx}
                  to={category.link}
                  className="group relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] backdrop-blur-sm border-2 border-[#300000] rounded-xl p-6 hover:border-[#8b0000]/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8b0000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <div className="relative flex flex-col items-center text-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#8b0000]/25 to-[#600000]/25 rounded-xl border border-[#8b0000]/30">
                      <category.icon className="w-8 h-8 md:w-10 md:h-10 text-[#b22222] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-slate-300 group-hover:text-white transition-colors">
                      {category.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0000] to-transparent pointer-events-none"></div>
      </section>

      {/* Stats Section - Full Width */}
      <section className="relative py-12 md:py-16 mb-16 md:mb-24">
        <div className="text-center mb-12 md:mb-16 fade-in-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            В ЦИФРАХ
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium">
            Наш опыт и достижения
          </p>
        </div>

        {/* Статистика занимает всю ширину */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="relative group fade-in-scroll w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b0000]/35 to-[#600000]/35 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-[#1a0000]/80 backdrop-blur-md border-2 border-[#300000] rounded-2xl p-4 md:p-6 hover:border-[#8b0000]/50 transition-all h-full w-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#b22222] mb-4" />
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg md:text-xl text-slate-300 font-bold mb-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-12 md:py-16 mb-16 md:mb-24">
        <div className="text-center mb-12 md:mb-16 fade-in-scroll">
          <div className="inline-flex items-center gap-3 px-5 py-3 mb-6 bg-gradient-to-r from-[#1a0000] to-[#300000] border border-[#8b0000]/30 rounded-full">
            <Zap className="w-6 h-6 md:w-7 md:h-7 text-[#b22222]" />
            <span className="text-base md:text-lg font-bold text-[#b22222] uppercase tracking-wider">
              Наши услуги
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Полный цикл обработки стекла
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium">
            От термической обработки до финальной установки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="group relative h-full fade-in-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#8b0000] to-[#600000] rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                
                <div className="relative h-full flex flex-col bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-3xl overflow-hidden hover:border-[#8b0000]/50 transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative h-64 md:h-72 flex-shrink-0 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/60 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#8b0000]/50 rounded-2xl blur-lg"></div>
                        <div className="relative p-3 bg-gradient-to-br from-[#8b0000] to-[#600000] rounded-2xl">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-400 mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span key={i} className="px-3 md:px-4 py-2 bg-[#300000] border border-[#400000] rounded-lg text-sm md:text-base text-slate-300 font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-[#b22222] hover:text-[#ff0000] font-bold group/link mt-auto text-base md:text-lg"
                    >
                      Подробнее
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-10 py-4 md:px-12 md:py-5 bg-gradient-to-r from-[#8b0000] to-[#600000] rounded-xl text-white font-black hover:shadow-2xl hover:shadow-[#600000]/60 transition-all hover:scale-105 text-lg md:text-xl"
          >
            Все услуги
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative py-12 md:py-16 mb-16 md:mb-24">
        <div className="text-center mb-12 md:mb-16 fade-in-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            КАК МЫ РАБОТАЕМ
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium">
            Прозрачный процесс от заявки до доставки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {process.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group fade-in-scroll h-full" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b0000]/35 to-[#600000]/35 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-[#1a0000]/80 backdrop-blur-md border-2 border-[#300000] rounded-2xl p-6 md:p-8 hover:border-[#8b0000]/50 transition-all h-full">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#b22222] mb-4 md:mb-6" />
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#b22222] to-[#8b0000] mb-4 md:mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-base md:text-lg text-slate-400">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Stats Section */}
      <section className="relative py-12 md:py-16 mb-16 md:mb-24">
        <div className="text-center mb-12 md:mb-16 fade-in-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            ПОЧЕМУ МЫ?
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium">
            Наши преимущества в цифрах и фактах
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {additionalStats.map((item, idx) => (
            <div key={idx} className="relative group fade-in-scroll">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b0000]/35 to-[#600000]/35 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-[#1a0000]/80 backdrop-blur-md border-2 border-[#300000] rounded-2xl p-4 md:p-6 hover:border-[#8b0000]/50 transition-all h-full text-center">
                <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#b22222] mb-4 mx-auto" />
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2">{item.value}</div>
                <div className="text-base md:text-lg font-bold text-slate-300 mb-2">{item.label}</div>
                <div className="text-sm text-slate-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-12 md:py-16 overflow-hidden mb-16 md:mb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#000000]"></div>
        
        <div className="relative text-center fade-in-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-md rounded-full mb-4 md:mb-6 border-2 border-[#8b0000]/30">
            <Flame className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4 drop-shadow-2xl">
            ГОТОВЫ НАЧАТЬ ПРОЕКТ?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 font-medium">
            Свяжитесь с нами для бесплатной консультации и точного расчета
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <a
              href="tel:+375296694444"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#8b0000] rounded-xl font-black text-base sm:text-lg md:text-xl hover:bg-red-50 transition-all hover:scale-105 shadow-2xl w-full sm:w-auto"
            >
              Связаться с менеджером
            </a>
            <Link
              to="/contacts"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white rounded-xl font-bold text-base sm:text-lg md:text-xl hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Все контакты
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
      <style>{`
        @keyframes fire-pulse {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.6; }
          50% { transform: scale(1.1) translateY(-10px); opacity: 0.8; }
        }
        
        @keyframes burn {
          0%, 100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
          33% { transform: scale(1.1) rotate(5deg); filter: brightness(1.5); }
          66% { transform: scale(0.9) rotate(-5deg); filter: brightness(1.2); }
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
        
        @keyframes flame-wave-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes flame-wave-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes flame-wave-3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes flame-wave-4 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        @keyframes flame-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-10px); }
        }
        @keyframes flame-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        @keyframes flame-center {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes fire-flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fire-pulse {
          animation: fire-pulse 4s ease-in-out infinite;
        }
        
        .animate-burn {
          animation: burn 2s ease-in-out infinite;
        }
        
        .animate-flame-wave-1 {
          animation: flame-wave-1 2s ease-in-out infinite;
        }
        
        .animate-flame-wave-2 {
          animation: flame-wave-2 2.5s ease-in-out infinite;
        }
        
        .animate-flame-wave-3 {
          animation: flame-wave-3 3s ease-in-out infinite;
        }
        
        .animate-flame-wave-4 {
          animation: flame-wave-4 3.5s ease-in-out infinite;
        }
        
        .animate-flame-left {
          animation: flame-left 3s ease-in-out infinite;
        }
        
        .animate-flame-right {
          animation: flame-right 3s ease-in-out infinite;
        }
        
        .animate-flame-center {
          animation: flame-center 4s ease-in-out infinite;
        }
        
        .animate-fire-flash {
          animation: fire-flash 1s ease-in-out infinite;
        }
        
        .animate-fire-flash-delayed {
          animation: fire-flash 1.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-fire-flash-slow {
          animation: fire-flash 2s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
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