import { Sparkles, Flame, ArrowRight, Award, Users, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { useState } from 'react';

const projects = [
  { 
    id: 1,
    image: '/images/dom1.jpg',
    title: 'Стеклянный фасад здания'
  },
  {
    id: 2,
    image: '/images/zerkalo1.jpg',
    title: 'Стекло с фотопечатью'
  },
  { 
    id: 3,
    image: '/images/peregor.jpg',
    title: 'Стеклянная перегородка'
  },
  {
    id: 9,
    image: '/images/dush1.jpg',
    title: 'Душевая кабина'
  },
  {
    id: 6,
    image: '/images/dush2.jpg',
    title: 'Душевая кабина'
  },
  {
    id: 7,
    image: '/images/dush3.jpg',
    title: 'Душевая кабина'
  },
  {
    id: 4,
    image: '/images/dush4.jpg',
    title: 'Душевая кабина'
  },
  {
    id: 5,
    image: '/images/dush5.jpg',
    title: 'Душевая кабина'
  },
  { 
    id: 8,
    image: '/images/peregor2.jpg',
    title: 'Стеклянная перегородка'
  },
   { 
    id: 9,
    image: '/images/rab1.jpg',
    title: 'Закаленное стекло'
  },
   { 
    id: 10,
    image: '/images/rab2.jpg',
    title: 'Двери для бани и сауны'
  },
   { 
    id: 11,
    image: '/images/rab4.jpg',
    title: 'Двери для бани и сауны'
  }
];

// Интерфейс для пропсов ImageModal
interface ImageModalProps {
  image: string | null;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

// Компонент модального окна для увеличенного изображения
const ImageModal = ({ image, title, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] bg-black rounded-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Кнопка закрыть */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 bg-black/70 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Контейнер для изображения */}
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231f2937"/><text x="400" y="300" text-anchor="middle" fill="%23dc2626" font-family="Arial" font-size="24" font-weight="bold">Изображение не найдено</text></svg>';
            }}
          />
        </div>
        
        {/* Название проекта */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
};

// Интерфейс для статистики
interface StatItem {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function PortfolioPage() {
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

  // Данные для статистики
  const stats: StatItem[] = [
    { value: '1000+', label: 'Выполненных проектов', icon: Award },
    { value: '100%', label: 'Довольных клиентов', icon: Users },
    { value: '5 лет', label: 'Гарантия на работы', icon: Sparkles },
    { value: '9.00-18.00', label: 'Поддержка клиентов', icon: ArrowRight },
  ];

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      <div className="w-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          {/* Используем PageHeader */}
          <PageHeader 
            title="НАШИ РАБОТЫ"
            subtitle="Реализованные проекты — примеры нашего профессионализма"
            icon={Award}
          />

          {}
          <div className="flex items-center justify-center gap-4 my-12 md:my-16">
            <div className="h-0.5 w-32 md:w-40 bg-gradient-to-r from-transparent via-red-600 to-red-800 animate-pulse"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 blur-md animate-ping"></div>
              <Flame className="w-10 h-10 md:w-12 md:h-12 text-red-500 animate-burn relative" />
            </div>
            <div className="h-0.5 w-32 md:w-40 bg-gradient-to-l from-transparent via-red-600 to-red-800 animate-pulse"></div>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative fade-in-scroll h-[450px] md:h-[500px]" // Увеличена высота
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-b from-slate-900 to-black border-2 border-slate-800 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
                  
                  {}
                  <div 
                    className="relative overflow-hidden cursor-pointer flex-grow h-[350px] md:h-[400px]" // Больше высота для изображения
                    onClick={() => handleImageClick(project.image, project.title)}
                  >
                    {}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    
                    {}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 bg-slate-900"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%231f2937"/><text x="200" y="150" text-anchor="middle" fill="%23dc2626" font-family="Arial" font-size="20" font-weight="bold">Изображение проекта</text></svg>';
                      }}
                    />
                    
                    {/* Инструкция для пользователя */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 whitespace-nowrap">
                      Кликните для увеличения
                    </div>
                  </div>

                  {/* Content - ТОЛЬКО ЗАГОЛОВОК ПО ЦЕНТРУ */}
                  <div className="relative p-6 flex items-center justify-center flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-400 transition-colors text-center">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full group-hover:w-3/4 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24 fade-in-scroll">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-slate-900/50 to-black/50 border-2 border-slate-800 rounded-2xl p-6 text-center hover:border-red-600/50 transition-all duration-300 h-full">
                    <div className="text-4xl md:text-5xl font-black text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">
                      {stat.value}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                      <div className="text-base md:text-lg text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium CTA */}
          <div className="relative fade-in-scroll">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl blur opacity-30 animate-fire-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 border-2 border-slate-800 rounded-3xl p-8 md:p-12 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-700/10 to-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-3 md:gap-4 mb-6">
                  <div className="p-3 md:p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-lg group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-red-500 tracking-wider">
                    ХОТИТЕ ТАК ЖЕ?
                  </h2>
                </div>
                
                <p className="text-lg md:text-xl text-slate-400 mb-8 font-medium leading-relaxed">
                  Свяжитесь с нашим менеджером и получите расчет стоимости вашего проекта
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                  <a
                    href="tel:+375296694444"
                    className="group/btn px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-black hover:from-red-700 hover:to-red-800 transition-all hover:scale-105 inline-flex items-center justify-center gap-3 text-lg md:text-xl"
                  >
                    <span>Связаться с менеджером</span>
                  </a>
                  
                  <Link
                    to="/services"
                    className="px-8 py-4 md:px-10 md:py-5 bg-slate-800/50 border-2 border-slate-700 text-slate-300 rounded-xl font-bold hover:bg-red-900/30 hover:text-white hover:border-red-700 transition-colors inline-flex items-center justify-center gap-3 text-lg md:text-xl"
                  >
                    <span>Все услуги</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </Link>
                </div>
                
                <p className="text-sm md:text-base text-slate-500 mt-8 font-medium">
                  Бесплатная консультация • Точный расчет • Гарантия качества
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 fade-in-scroll">
            <div className="text-center">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-3 text-red-400 hover:text-red-300 font-bold group/link text-lg md:text-xl"
              >
                Смотреть каталог продукции
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      {/* Модальное окно для увеличенного изображения */}
      <ImageModal
        image={selectedImage}
        title={selectedTitle}
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
      />

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
        
        .animate-fire-pulse {
          animation: fire-pulse 4s ease-in-out infinite;
        }
        
        .animate-burn {
          animation: burn 2s ease-in-out infinite;
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