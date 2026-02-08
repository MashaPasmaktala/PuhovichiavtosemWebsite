import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X, ShoppingCart, Phone, Shield, Zap, Sparkles, Flame } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  sizes: Array<{
    size: string;
    price: string;
  }>;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Дверь для бани "Хамон" прозрачная',
    image: '/images/hamon-clear.jpg',
    description: 'Специальное закаленное стекло для бань и саун. Выдерживает экстремальные температуры.',
    sizes: [
      { size: '700x1900 мм', price: '18 500 руб' },
      { size: '800x1900 мм', price: '20 500 руб' },
      { size: '800x2000 мм', price: '21 800 руб' },
    ],
    features: [
      'Термостойкое стекло 8 мм',
      'Выдерживает до +200°C',
      'Специальная обработка',
      'Гарантия 5 лет',
    ]
  },
  {
    id: 2,
    name: 'Дверь для сауны "Хамон" матовая',
    image: '/images/hamon-matt.jpg',
    description: 'Матовая дверь для бани с частичной приватностью. Премиум качество.',
    sizes: [
      { size: '700x1900 мм', price: '19 800 руб' },
      { size: '800x1900 мм', price: '22 000 руб' },
      { size: '800x2000 мм', price: '23 500 руб' },
    ],
    features: [
      'Матовое термостекло',
      'Устойчивость к пару',
      'Премиум фурнитура',
      'Безопасность',
    ]
  },
  {
    id: 3,
    name: 'Дверь для бани "Хамон" тонированная',
    image: '/images/hamon-tinted.jpg',
    description: 'Элитная тонированная дверь для бани. Дизайнерское решение.',
    sizes: [
      { size: '700x1900 мм', price: '22 500 руб' },
      { size: '800x1900 мм', price: '24 800 руб' },
      { size: '800x2000 мм', price: '26 500 руб' },
    ],
    features: [
      'Тонированное стекло',
      'Элитная серия',
      'Термостойкость',
      'Уникальный дизайн',
    ]
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

export function DoorsHamonPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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
        <div className="absolute bottom-0 left-0 w-full h-[300px] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#8b0000]/30 via-[#600000]/20 to-transparent animate-flame-wave-1"></div>
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#600000]/25 via-[#8b0000]/15 to-transparent animate-flame-wave-2"></div>
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
              to="/catalog/glass-doors"
              className="inline-flex items-center gap-3 text-slate-400 hover:text-[#b50202] font-medium group transition-colors text-base md:text-lg"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
              Назад к дверям
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16 relative z-10">
            <div className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 mb-4 md:mb-6 bg-gradient-to-r from-[#b50202]/30 to-[#8b0000]/30 border border-[#b50202]/40 rounded-full backdrop-blur-sm">
              <Flame className="w-5 h-5 md:w-6 md:h-6 text-[#b50202] animate-pulse" />
              <span className="text-sm md:text-base font-bold text-[#b50202] uppercase tracking-wider">
                Термостойкое стекло
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
              ДВЕРИ ДЛЯ БАНИ "ХАМОН"
            </h1>
            
            <div className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-2 md:px-4 font-medium">
              Специальное закаленное стекло для бань и саун. Выдерживает экстремальные температуры и влажность.
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20 relative z-10">
            {[
              {
                title: "Термостойкость +200°C",
                description: "Специальное закаливание для выдерживания экстремальных температур",
                icon: Flame
              },
              {
                title: "Защита от влажности",
                description: "Устойчивость к пару и высокой влажности помещений",
                icon: Shield
              },
              {
                title: "Повышенная прочность",
                description: "Термическая обработка повышает прочность в 5 раз",
                icon: Zap
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="relative group fade-in-scroll">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#b50202]/50 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-gradient-to-br from-[#b50202]/30 to-[#8b0000]/30 rounded-xl border border-[#b50202]/40">
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20 relative z-10">
            {products.map((product) => (
              <div key={product.id} className="group relative flex flex-col">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-3xl overflow-hidden hover:border-[#b50202]/50 transition-all duration-500 group-hover:scale-[1.03] h-full flex flex-col">
                  
                  {/* Image Container */}
                  <div 
                    className="relative pt-[75%] overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={() => handleImageClick(product.image, product.name)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0000] p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%230a0000"/><text x="200" y="150" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="20" font-weight="bold">${product.name}</text></svg>';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/20 to-transparent"></div>
                    
                    {/* Temperature Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#b50202]/90 backdrop-blur-sm rounded-full flex items-center gap-1 border border-[#b50202]/40">
                      <Flame className="w-3 h-3 text-white" />
                      <span className="text-xs font-bold text-white">+200°C</span>
                    </div>
                    
                    {/* Click hint */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                      Кликните для увеличения
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-black text-white mb-3 group-hover:text-[#b50202] transition-colors text-center">
                      {product.name}
                    </h3>
                    
                    <div className="text-sm md:text-base text-slate-400 mb-4 flex-grow text-center">
                      {product.description}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {product.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-[#300000]/50 border border-[#b50202]/20 text-slate-300 text-xs rounded-md">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price and Button */}
                    <div className="mt-auto">
                      <div className="mb-4 text-center">
                        <p className="text-sm text-slate-500 mb-1">Цена от:</p>
                        <p className="text-xl md:text-2xl font-black text-[#b50202]">
                          {product.sizes[0].price}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-lg font-bold hover:shadow-lg hover:shadow-[#8b0000]/40 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base group/btn"
                      >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 relative" />
                        <span className="relative">Выбрать размер</span>
                      </button>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-full group-hover:w-3/4 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section with Fire Effect */}
          <div className="relative mt-12 md:mt-16 lg:mt-20 mb-12 md:mb-16">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] via-[#8b0000] to-[#b50202] rounded-3xl blur opacity-40 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] border-2 border-[#300000] rounded-3xl p-8 md:p-12 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50202]/20 via-[#8b0000]/20 to-[#b50202]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <Flame className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-[#b50202] animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-black text-[#b50202] mb-4 drop-shadow-[0_0_10px_rgba(181,2,2,0.5)]">
                  Термостойкие двери для бани
                </h3>
                <p className="text-base md:text-lg text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                  Специальное закаленное стекло выдерживает температуры до +200°C и резкие перепады.
                  Безопасность и долговечность гарантированы.
                </p>
                <a
                  href="tel:+375447256683"
                  className="group/btn relative px-8 py-4 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-xl font-black hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all duration-500 inline-flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <Phone className="w-5 h-5 md:w-6 md:h-6 relative" />
                  <span className="relative">+375 (44) 725 66 83</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative mt-12 md:mt-16 lg:mt-20">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#b50202] via-[#8b0000] to-[#b50202] rounded-3xl blur opacity-30 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] border-2 border-[#300000] rounded-3xl p-6 sm:p-8 md:p-12 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50202]/10 via-[#8b0000]/10 to-[#b50202]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#b50202] mb-4 md:mb-6 drop-shadow-[0_0_10px_rgba(181,2,2,0.5)]">
                  НУЖНА КОНСУЛЬТАЦИЯ ПО ТЕРМОСТОЙКИМ ДВЕРЯМ?
                </h2>
                
                <div className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                  Наши специалисты помогут выбрать оптимальное решение для вашей бани или сауны
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
                    <span>Заказать замер</span>
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#300000]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-3 bg-black/70 hover:bg-[#b50202] text-white rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
              {/* Image */}
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(selectedProduct.image, selectedProduct.name)}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0000] p-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%230a0000"/><text x="200" y="200" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="20" font-weight="bold">${selectedProduct.name}</text></svg>';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-transparent to-transparent"></div>
                
                {/* Temperature Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#b50202]/90 backdrop-blur-sm rounded-full flex items-center gap-1 border border-[#b50202]/40">
                  <Flame className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">+200°C</span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <h2 className="text-xl md:text-2xl font-black text-white mb-4">
                  {selectedProduct.name}
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base">
                  {selectedProduct.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-bold text-white mb-3">Характеристики:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-2 bg-[#300000]/50 border border-[#b50202]/20 text-slate-300 text-sm rounded-lg">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sizes and Prices */}
                <div className="mb-8">
                  <h3 className="font-bold text-white mb-3">Размеры и цены:</h3>
                  <div className="space-y-2">
                    {selectedProduct.sizes.map((size, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center p-3 bg-[#300000]/30 rounded-xl hover:bg-[#300000]/50 transition-colors"
                      >
                        <span className="font-semibold text-slate-300 text-sm md:text-base">{size.size}</span>
                        <span className="font-black text-[#b50202] text-sm md:text-base">{size.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href="tel:+375447256683"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-xl hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all duration-500 font-bold text-center transform hover:scale-105 text-base"
                  >
                    Заказать: +375 (44) 725 66 83
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes flame-wave-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes flame-wave-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
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