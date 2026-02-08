import { Building2, Handshake, Sparkles, Flame, Award, Users, Mail, Phone, ChevronRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

const partners = [
  {
    name: 'ООО "Avansum"',
    description: 'Крупнейший производитель изделий из ПВХ и алюминия',
    image: '/images/avansum.jpg' 
  },
  {
    name: 'ЧП "Юркас"',
    description: 'Премиальные интерьерные решения',
    image: '/images/urkas.png'
  },
  {
    name: 'OOO "Плит-мар"',
    description: 'Поставщик строительных и мебельных материалов',
    image: '/images/plitmar.png'
  },
  {
    name: 'Эрада',
    description: 'Современные решения в остеклении и строительстве',
    image: '/images/erada.png'
  },
  {
    name: 'ЧТПУП "Виндкомфорт"',
    description: 'Качественные окна ПВХ в Могилеве',
    image: '/images/wind.png'
  },
   {
    name: 'ООО "КомфортПром"',
    description: 'Печи для бани из стали и чугуна',
    image: '/images/comfort.png'
  }
];

const benefits = [
  {
    icon: Building2,
    title: 'Надежность',
    description: 'Работаем с крупными компаниями на постоянной основе',
    color: 'from-red-500 to-red-700'
  },
  {
    icon: Handshake,
    title: 'Партнерство',
    description: 'Гибкие условия сотрудничества для постоянных клиентов',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: Sparkles,
    title: 'Качество',
    description: 'Сертифицированная продукция с гарантией',
    color: 'from-red-600 to-amber-600'
  },
];

const partnerBenefits = [
  {
    icon: Shield,
    title: 'Гарантии',
    items: ['Гарантия 3 года', 'Полное сопровождение сделки']
  },
  {
    icon: Star,
    title: 'Преимущества',
    items: ['Скидки', 'Приоритетная обработка', 'Персональный менеджер']
  },
  {
    icon: Clock,
    title: 'Условия',
    items: ['Возможность отсрочки', 'Бесплатная доставка']
  },
];

export function PartnersPage() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      <div className="w-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          <PageHeader 
            title="НАШИ ПАРТНЕРЫ"
            subtitle="Мы гордимся и доверием нашим партнерам. Совместно строим долгосрочные отношения на основе качества и надежности"
            icon={Handshake}
          />

          {/* Fire Divider */}
          <div className="flex items-center justify-center gap-4 my-12 md:my-16">
            <div className="h-0.5 w-32 md:w-40 bg-gradient-to-r from-transparent via-red-600 to-red-800 animate-pulse"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 blur-md animate-ping"></div>
              <Flame className="w-10 h-10 md:w-12 md:h-12 text-red-500 animate-burn relative" />
            </div>
            <div className="h-0.5 w-32 md:w-40 bg-gradient-to-l from-transparent via-red-600 to-red-800 animate-pulse"></div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative fade-in-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500`}></div>
                  
                  <div className="relative bg-gradient-to-b from-slate-900 to-black border-2 border-slate-800 rounded-3xl p-8 hover:border-red-600/50 transition-all duration-500 h-full group-hover:scale-[1.02]">
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className={`absolute inset-0 ${benefit.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-30 rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                        <div className={`relative p-5 bg-gradient-to-br ${benefit.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">
                      {benefit.title}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-400 text-center leading-relaxed font-medium">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Partners Grid Header */}
          <div className="text-center mb-8 md:mb-12 fade-in-scroll">
            <div className="inline-flex items-center gap-3 px-5 py-3 mb-6 bg-gradient-to-r from-red-900/20 to-red-950/20 border border-red-700/30 rounded-full">
              <Users className="w-6 h-6 md:w-7 md:h-7 text-red-500" />
              <span className="text-base md:text-lg font-bold text-red-400 uppercase tracking-wider">
                Наши партнеры
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              ПРОВЕРЕННЫЕ ВРЕМЕНЕМ
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-medium">Компании, которые доверяют нам уже много лет</p>
          </div>

          {/* Partners Grid - КОМПАКТНЫЕ РАВНОМЕРНЫЕ КАРТОЧКИ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 md:mb-24">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative fade-in-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
                
                <div className="relative bg-gradient-to-b from-slate-900 to-slate-800/10 border border-slate-700/50 rounded-lg p-4 hover:border-red-500/50 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-red-900/20">
                  
                  {/* КОМПАКТНОЕ СОДЕРЖИМОЕ КАРТОЧКИ */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Изображение партнера - чуть больше */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-red-500/10 rounded-md blur-sm group-hover:blur transition-all"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-md overflow-hidden border border-red-600/30 group-hover:border-red-500/50 transition-colors">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="%231f2937"/><text x="32" y="32" text-anchor="middle" fill="%23dc2626" font-family="Arial" font-size="14" font-weight="bold" dy=".3em">${partner.name.charAt(0)}</text></svg>`;
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Текстовое содержимое - крупнее */}
                    <div className="flex-grow min-w-0">
                      <h3 className="font-bold text-white mb-1 text-lg group-hover:text-red-300 transition-colors truncate">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-slate-300 leading-snug line-clamp-2">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Индикатор статуса - компактный */}
                  <div className="mt-auto pt-3 border-t border-slate-700/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-slate-400 font-medium">
                          Активный партнер
                        </span>
                      </div>
                      <div className="text-xs text-red-400 font-semibold bg-red-900/20 px-2 py-1 rounded">
                        Сотрудничество
                      </div>
                    </div>
                  </div>
                  
                  {/* Тонкая линия внизу при наведении */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Benefits Header */}
          <div className="text-center mb-8 md:mb-12 fade-in-scroll">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-red-500">
                ПРЕИМУЩЕСТВА ПАРТНЕРСТВА
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium">Что получают наши партнеры при сотрудничестве</p>
          </div>

          {/* Partner Benefits - тоже компактнее */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 md:mb-24">
            {partnerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-slate-900/70 to-black/50 border border-slate-700 rounded-lg p-4 hover:border-red-500/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-red-900/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-md border border-red-600/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-base font-bold text-white">{benefit.title}</h3>
                  </div>
                  
                  <ul className="space-y-2 pl-1">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-slate-300 font-medium leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA for Partners - тоже компактнее */}
          <div className="relative fade-in-scroll max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-lg blur opacity-30 animate-fire-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 border border-slate-700 rounded-lg p-5 md:p-6 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-700/5 to-red-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-md group-hover:scale-110 transition-transform">
                    <Handshake className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg font-black text-red-400 tracking-wider">
                    СТАНЬТЕ ПАРТНЕРОМ
                  </h2>
                </div>
                
                <p className="text-sm text-slate-300 mb-4 font-medium">
                  Выгодные условия сотрудничества для любых компаний и заказчиков
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                  <a
                    href="tel:+375296694444"
                    className="group/btn px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md font-semibold hover:from-red-700 hover:to-red-800 transition-all hover:scale-105 inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    СВЯЗАТЬСЯ С МЕНЕДЖЕРОМ
                  </a>
                  
                  <div className="text-slate-500 text-xs font-medium">или</div>
                  
                  <a
                    href="mailto:3955366@tut.by"
                    className="px-5 py-2.5 bg-slate-800/30 border border-slate-600 text-slate-200 rounded-md font-semibold hover:bg-red-900/30 hover:text-white hover:border-red-600 transition-colors inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    3955366@tut.by
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 fade-in-scroll">
            <div className="text-center">
              <Link
                to="/contacts"
                className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold text-sm group/link"
              >
                Все способы связи
                <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <style>{`
        @keyframes fire-pulse {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.6; }
          50% { transform: scale(1.1) translateY(-10px); opacity: 0.8; }
        }
        @keyframes fire-pulse-delayed {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.5; }
          50% { transform: scale(1.15) translateY(-15px); opacity: 0.7; }
        }
        @keyframes fire-pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        @keyframes burn {
          0%, 100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
          33% { transform: scale(1.1) rotate(5deg); filter: brightness(1.5); }
          66% { transform: scale(0.9) rotate(-5deg); filter: brightness(1.2); }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fire-pulse {
          animation: fire-pulse 4s ease-in-out infinite;
        }
        .animate-fire-pulse-delayed {
          animation: fire-pulse-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-fire-pulse-slow {
          animation: fire-pulse-slow 6s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-burn {
          animation: burn 2s ease-in-out infinite;
        }
        .animate-scan {
          animation: scan 3s linear infinite;
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
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          line-clamp: 2;
        }
      `}</style>
    </div>
  );
}