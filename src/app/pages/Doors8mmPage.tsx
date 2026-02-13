import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X, ShoppingCart, Phone, Shield, Zap, Sparkles, Check, Droplet } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  type: 'clear' | 'matt';
  baseImage: string;
  colors: ColorOption[];
  description: string;
  sizes: string[];
  features: string[];
}

interface ColorOption {
  id: string;
  name: string;
  image: string;
  type: 'clear' | 'matt' | 'both';
  colorCode: string; // Код цвета для отображения
  textColor: string; // Цвет текста
}

// Базовые цены по ширине (высота фиксирована 2000 мм) - 11 размеров
const BASE_PRICES: Record<string, number> = {
  '60x180 мм': 300,
  '60x190 мм': 280,
  '70x170 мм': 270,
  '70x180 мм': 270,
  '70x190 мм': 270,
  '70x200 мм': 280,
  '70x210 мм': 350,
  '80x180 мм': 270,
  '80x190 мм': 280,
  '80x200 мм': 280,
  '80x210 мм': 400,
};

// Цвета для прозрачных дверей с реалистичными цветовыми кодами
const CLEAR_COLORS: ColorOption[] = [
  { 
    id: 'clear-bronze', 
    name: 'Бронза', 
    image: '/images/8mm-bronze.jpg', 
    type: 'clear',
    colorCode: 'linear-gradient(145deg, #CD7F32, #B87333)',
    textColor: '#FFFFFF'
  },
  { 
    id: 'clear-graphite', 
    name: 'Графит', 
    image: '/images/8mm-graphite.jpg', 
    type: 'clear',
    colorCode: 'linear-gradient(145deg, #36454F, #2C3E50)',
    textColor: '#FFFFFF'
  },
];

// Цвета для матовых дверей с реалистичными цветовыми кодами
const MATT_COLORS: ColorOption[] = [
  { 
    id: 'matt-bronze', 
    name: 'Бронза матовая', 
    image: '/images/8mm-matt-bronze.jpg', 
    type: 'matt',
    colorCode: 'linear-gradient(145deg, #B87333, #8B4513)',
    textColor: '#FFFFFF'
  },
  { 
    id: 'matt-graphite', 
    name: 'Графит матовый', 
    image: '/images/8mm-matt-graphite.jpg', 
    type: 'matt',
    colorCode: 'linear-gradient(145deg, #2C3E50, #1E2B36)',
    textColor: '#FFFFFF'
  },
  { 
    id: 'matt-satin', 
    name: 'Сатин', 
    image: '/images/8mm-matt-satin.jpg', 
    type: 'matt',
    colorCode: 'linear-gradient(145deg, #C0C0C0, #A9A9A9)',
    textColor: '#000000'
  },
];

const products: Product[] = [
  {
    id: 1,
    name: 'Дверь стеклянная прозрачная 8 мм',
    type: 'clear',
    baseImage: '/images/8mm.jpg',
    colors: CLEAR_COLORS,
    description: 'Усиленная дверь из закаленного прозрачного стекла 8 мм.',
    sizes: Object.keys(BASE_PRICES),
    features: [
      'Закаленное стекло 8 мм',
      'Повышенная прочность',
      'Гарантия 5 лет',
    ]
  },
  {
    id: 2,
    name: 'Дверь стеклянная матовая 8 мм',
    type: 'matt',
    baseImage: '/images/8mm-matt.jpg',
    colors: MATT_COLORS,
    description: 'Усиленная дверь с матовым стеклом 8 мм. Максимальная приватность.',
    sizes: Object.keys(BASE_PRICES),
    features: [
      'Матовое закаленное стекло',
      'Защита от взгляда',
      'Премиум качество',
      'Тихое закрывание',
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-2 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] bg-black rounded-xl sm:rounded-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 sm:p-3 bg-black/70 hover:bg-[#b50202] text-white rounded-full transition-colors duration-200"
        >
          <X className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        
        <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230a0000"/><text x="400" y="300" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="24" font-weight="bold">Изображение не найдено</text></svg>';
            }}
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-6">
          <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white text-center line-clamp-2">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export function Doors8mmPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isNonStandard, setIsNonStandard] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const sparks = createSparks();

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0]);
    setIsNonStandard(false);
    setSelectedColor(product.colors[0]);
  };

  const getCurrentPrice = () => {
    if (!selectedSize) return 0;
    let price = BASE_PRICES[selectedSize] || 0;
    if (selectedProduct?.type === 'matt') {
      price += 20;
    }
    if (isNonStandard) price += 50;
    return price;
  };

  const formatPrice = (price: number) => {
    return `${price} BYN`;
  };

  const getMinPrice = (product: Product) => {
    const prices = Object.values(BASE_PRICES);
    const minPrice = Math.min(...prices);
    return product.type === 'matt' ? minPrice + 20 : minPrice;
  };

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-gradient-to-b from-[#0a0000] via-[#1a0000] to-[#0a0000]">
      {/* Искры анимация - отключаем на мобильных */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute bottom-0 left-0 w-full h-[200px] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#8b0000]/20 via-[#600000]/15 to-transparent"></div>
        </div>
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
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
          
          {/* Хлебные крошки */}
          <div className="w-full mb-4 sm:mb-6 md:mb-8">
            <Link
              to="/catalog/glass-doors"
              className="inline-flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-[#b50202] font-medium group transition-colors text-sm sm:text-base md:text-lg"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
              <span className="whitespace-nowrap">Назад к дверям</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative z-10">
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-[#b50202]/20 to-[#8b0000]/20 border border-[#b50202]/30 rounded-full backdrop-blur-sm">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#b50202] animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#b50202] uppercase tracking-wider whitespace-nowrap">
                Усиленные двери 8 мм
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
              ДВЕРИ 8 ММ
            </h1>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto px-2 sm:px-4 font-medium">
              Усиленные стеклянные двери из закаленного стекла толщиной 8 мм
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16 lg:mb-20 relative z-10">
            {[
              {
                title: "Максимальная прочность",
                description: "Толщина 8 мм обеспечивает повышенную надежность",
                icon: Shield
              },
              {
                title: "Усиленная конструкция",
                description: "Дополнительная прочность для интенсивного использования",
                icon: Zap
              },
              {
                title: "Премиум качество",
                description: "Только высококачественные материалы",
                icon: Sparkles
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="relative group fade-in-scroll">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-[#b50202]/50 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4">
                      <div className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-br from-[#b50202]/20 to-[#8b0000]/20 rounded-lg sm:rounded-xl border border-[#b50202]/30">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#b50202]" />
                      </div>
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white">{feature.title}</h4>
                      <div className="text-xs sm:text-sm md:text-base text-slate-400 line-clamp-2">{feature.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16 lg:mb-20 relative z-10 max-w-5xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="group relative flex flex-col">
                <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-b from-[#1a0000] to-[#0a0000] border-2 border-[#300000] rounded-2xl sm:rounded-3xl overflow-hidden hover:border-[#b50202]/50 transition-all duration-500 group-hover:scale-[1.02] sm:group-hover:scale-[1.03] h-full flex flex-col">
                  
                  {/* Image - открывает фото */}
                  <div 
                    className="relative pt-[75%] overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleImageClick(product.baseImage, product.name);
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0000] p-2 sm:p-4">
                      <img
                        src={product.baseImage}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%230a0000"/><text x="200" y="150" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="20" font-weight="bold">' + product.name + '</text></svg>';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/20 to-transparent"></div>
                    <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-0.5 sm:py-1 bg-black/80 backdrop-blur-sm text-white text-[10px] sm:text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap hidden sm:block">
                      👆 Увеличить фото
                    </div>
                  </div>

                  {/* Content - открывает параметры двери */}
                  <div 
                    className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow cursor-pointer"
                    onClick={() => handleSelectProduct(product)}
                  >
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white mb-2 sm:mb-3 group-hover:text-[#b50202] transition-colors text-center line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="text-xs sm:text-sm md:text-base text-slate-400 mb-3 sm:mb-4 flex-grow text-center line-clamp-2">
                      {product.description}
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 justify-center">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#300000]/50 border border-[#b50202]/20 text-slate-300 text-[10px] sm:text-xs rounded-md">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Colors preview - УЛУЧШЕННАЯ ВЕРСИЯ */}
                    <div className="flex flex-wrap gap-2 justify-center mb-3 sm:mb-4">
                      {product.colors.map((color) => (
                        <div
                          key={color.id}
                          className="relative group/color"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div 
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-[#b50202]/30 border-2 border-transparent hover:border-[#b50202]"
                            style={{ 
                              background: color.colorCode,
                              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageClick(color.image, `${product.name} - ${color.name}`);
                            }}
                            title={color.name}
                          >
                            <div className="w-full h-full rounded-full flex items-center justify-center">
                              <span className="sr-only">{color.name}</span>
                            </div>
                          </div>
                          {/* Подпись цвета при наведении */}
                          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap z-20 border border-[#b50202]/30">
                            {color.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="mb-2 sm:mb-3 md:mb-4 text-center">
                        <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Цена от:</p>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-[#b50202]">
                          {getMinPrice(product)} BYN
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectProduct(product);
                        }}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-lg font-bold hover:shadow-lg hover:shadow-[#8b0000]/40 transition-all duration-300 inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base group/btn"
                      >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                        <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 relative" />
                        <span className="relative whitespace-nowrap">Выбрать параметры</span>
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#b50202] to-[#8b0000] rounded-full group-hover:w-2/3 sm:group-hover:w-3/4 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20">
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#b50202] via-[#8b0000] to-[#b50202] rounded-2xl sm:rounded-3xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] border-2 border-[#300000] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b50202]/10 via-[#8b0000]/10 to-[#b50202]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-[#b50202] mb-3 sm:mb-4 md:mb-6 drop-shadow-[0_0_10px_rgba(181,2,2,0.5)]">
                  НУЖНА КОНСУЛЬТАЦИЯ?
                </h2>
                <div className="text-xs sm:text-sm md:text-base lg:text-xl text-slate-300 mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-2xl mx-auto px-2">
                  Специалисты помогут выбрать размер и цвет для ваших дверей
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-2">
                  <a
                    href="tel:+375296694444"
                    className="group/btn relative px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-lg md:rounded-xl font-bold hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all duration-500 inline-flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 text-xs sm:text-sm md:text-base"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 relative" />
                    <span className="relative whitespace-nowrap">+375 (29) 669 44 44</span>
                  </a>
                  <Link
                    to="/contacts"
                    className="px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-[#1a0000] border-2 border-[#300000] text-slate-300 rounded-lg md:rounded-xl font-bold hover:bg-[#b50202]/30 hover:text-white hover:border-[#b50202] transition-colors inline-flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base"
                  >
                    <span className="whitespace-nowrap">Помощь с выбором</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-slate-500 mt-4 sm:mt-5 md:mt-6 lg:mt-8 px-2">
                  Консультация бесплатно • Подбор материалов • Расчет стоимости •   Доставка
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage || ''}
        title={selectedTitle}
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
      />

      {/* Product Detail Modal - УЛУЧШЕННАЯ ВЕРСИЯ С ЦВЕТАМИ */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
          <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full border-2 border-[#300000] my-4 sm:my-8">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 sm:p-3 bg-black/70 hover:bg-[#b50202] text-white rounded-full transition-colors duration-200"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {/* Image */}
                <div>
                  <div 
                    className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer mb-3 sm:mb-4"
                    onClick={() => handleImageClick(
                      selectedColor?.image || selectedProduct.baseImage, 
                      selectedColor ? `${selectedProduct.name} - ${selectedColor.name}` : selectedProduct.name
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0000] p-2 sm:p-4">
                      <img
                        src={selectedColor?.image || selectedProduct.baseImage}
                        alt={selectedProduct.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%230a0000"/><text x="200" y="200" text-anchor="middle" fill="%23b50202" font-family="Arial" font-size="20" font-weight="bold">' + selectedProduct.name + '</text></svg>';
                        }}
                      />
                    </div>
                  </div>

                  {/* Color Gallery - УЛУЧШЕННАЯ ВЕРСИЯ */}
                  <div className="bg-[#300000]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                    <h3 className="font-bold text-white mb-2 sm:mb-3 text-sm sm:text-base">Доступные цвета:</h3>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {selectedProduct.colors.map((color) => (
                        <div
                          key={color.id}
                          className="relative group/color"
                        >
                          <button
                            onClick={() => setSelectedColor(color)}
                            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                              selectedColor?.id === color.id 
                                ? 'ring-4 ring-[#b50202] ring-offset-2 ring-offset-[#0a0000] scale-110' 
                                : 'hover:ring-2 hover:ring-[#b50202]/50'
                            }`}
                            style={{ 
                              background: color.colorCode,
                              boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.4)'
                            }}
                          >
                            <span className="sr-only">{color.name}</span>
                          </button>
                          {/* Название цвета при наведении */}
                          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap z-20 border border-[#b50202]/30">
                            {color.name}
                          </span>
                          {/* Галочка выбора */}
                          {selectedColor?.id === color.id && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-[#b50202] text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                              <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-3 sm:mt-4">
                      👆 Нажмите на цвет, чтобы увидеть дверь в этом исполнении
                    </p>
                  </div>

                  {/* Характеристики */}
                  <div className="bg-[#300000]/20 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <h3 className="font-bold text-white mb-2 sm:mb-3 text-sm sm:text-base">Характеристики:</h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-slate-400">Производитель:</span>
                        <span className="font-semibold text-[#b50202]">RichDoors</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-slate-400">Толщина стекла:</span>
                        <span className="font-semibold text-white">8 мм</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-slate-400">Вид защёлки:</span>
                        <span className="font-semibold text-white">Магнитная/роликовая</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-slate-400">Ручка:</span>
                        <span className="font-semibold text-white">Прямоугольная/под ваш заказ</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-slate-400">Цвет петель:</span>
                        <span className="font-semibold text-white">Хром/серые</span>
                      </div>
                      {selectedColor && (
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-slate-400">Выбранный цвет:</span>
                          <span className="font-semibold text-[#b50202]">{selectedColor.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 line-clamp-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                    {selectedProduct.description}
                  </p>

                  {/* Sizes */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="font-bold text-white mb-2 sm:mb-3 text-sm sm:text-base">Выберите размер:</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-1.5 sm:px-2 text-xs sm:text-sm rounded-lg border transition-all ${
                            selectedSize === size
                              ? 'bg-[#b50202] text-white border-[#b50202]'
                              : 'bg-[#300000]/30 text-slate-300 border-[#300000] hover:bg-[#300000]/50'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Non-standard */}
                  <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <input
                      type="checkbox"
                      id="nonStandard"
                      checked={isNonStandard}
                      onChange={(e) => setIsNonStandard(e.target.checked)}
                      className="w-4 h-4 sm:w-5 sm:h-5 accent-[#b50202] rounded"
                    />
                    <label htmlFor="nonStandard" className="text-xs sm:text-sm text-slate-300">
                      Нестандартный проём <span className="text-[#b50202] font-bold">+50 BYN</span>
                    </label>
                  </div>

                  {/* Price */}
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#300000]/30 rounded-lg sm:rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-slate-400">Итого:</span>
                      <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#b50202]">
                        {formatPrice(getCurrentPrice())}
                      </span>
                    </div>
                  </div>

                  {/* Order Button */}
                  <div className="mt-auto">
                    <a
                      href="tel:+375296694444"
                      className="block w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#b50202] to-[#8b0000] text-white rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-[#8b0000]/60 transition-all duration-500 font-bold text-center transform hover:scale-105 text-sm sm:text-base"
                    >
                      Заказать: +375 (29) 669 44 44
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #300000;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #b50202;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #8b0000;
        }

        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 2px;
          }
        }
      `}</style>
    </div>
  );
}