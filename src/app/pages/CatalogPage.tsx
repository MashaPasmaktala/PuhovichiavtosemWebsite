import { useState } from 'react';
import { ShoppingCart, Info } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  type: string;
  image: string;
  thickness: string;
  maxSize: string;
  standard: string;
  price: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Стекло закаленное ClearVision',
    type: 'Закаленное',
    image: 'https://images.unsplash.com/photo-1737216155207-6775db75f625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wZXJlZCUyMGdsYXNzJTIwcGFuZWxzJTIwbW9kZXJufGVufDF8fHx8MTc2OTUxNjc0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    thickness: '6-19 мм',
    maxSize: '2000×3000 мм',
    standard: 'ГОСТ Р 54162-2010',
    price: 'от 1 850 руб./м²',
    description: 'Прозрачное закаленное стекло повышенной прочности',
  },
  {
    id: 2,
    name: 'Триплекс SafeGlass',
    type: 'Триплекс',
    image: 'https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZ2xhc3MlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3Njk1MTY3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thickness: '6-12 мм',
    maxSize: '2400×3600 мм',
    standard: 'ГОСТ Р 54162-2010',
    price: 'от 3 200 руб./м²',
    description: 'Многослойное безопасное стекло с пленкой PVB',
  },
  {
    id: 3,
    name: 'Стекло тонированное Bronze',
    type: 'Тонированное',
    image: 'https://images.unsplash.com/photo-1630048911157-66276d027a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGZhY2FkZSUyMGFyY2hpdGVjdHVyZSUyMGJsdWV8ZW58MXx8fHwxNzY5NTE2NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    thickness: '4-10 мм',
    maxSize: '2000×3000 мм',
    standard: 'ГОСТ 111-2014',
    price: 'от 1 450 руб./м²',
    description: 'Тонированное в массе стекло бронзового цвета',
  },
  {
    id: 4,
    name: 'Стекло матовое Satin',
    type: 'Матовое',
    image: 'https://images.unsplash.com/photo-1762012591460-e7c0d71b0dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc2OTUxNjc0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    thickness: '4-12 мм',
    maxSize: '2000×3000 мм',
    standard: 'ГОСТ 111-2014',
    price: 'от 1 650 руб./м²',
    description: 'Матированное пескоструйной обработкой стекло',
  },
  {
    id: 5,
    name: 'Стеклопакет двухкамерный',
    type: 'Стеклопакет',
    image: 'https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMHdpbmRvd3MlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3Njk1MTY3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thickness: '32-40 мм',
    maxSize: '1800×2500 мм',
    standard: 'ГОСТ 24866-2014',
    price: 'от 2 800 руб./м²',
    description: 'Энергосберегающий стеклопакет с аргоном',
  },
  {
    id: 6,
    name: 'Узорчатое стекло Delta',
    type: 'Узорчатое',
    image: 'https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGN1dHRpbmclMjBtYWNoaW5lcnklMjBwcmVjaXNpb258ZW58MXx8fHwxNzY5NTE2NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thickness: '4-6 мм',
    maxSize: '1600×2400 мм',
    standard: 'ГОСТ 5533-86',
    price: 'от 980 руб./м²',
    description: 'Декоративное стекло с рельефным рисунком',
  },
];

const categories = ['Все', 'Закаленное', 'Триплекс', 'Тонированное', 'Матовое', 'Стеклопакет', 'Узорчатое'];

export function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === 'Все'
      ? products
      : products.filter((product) => product.type === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Decorative glass effect elements */}
      <div className="fixed top-40 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            КАТАЛОГ ПРОДУКЦИИ
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-900">Каталог </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">продукции</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Широкий ассортимент стекла и стеклопакетов. Все изделия сертифицированы и соответствуют
            требованиям ГОСТ
          </p>
        </div>

        {/* Filter Tabs with glass effect */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category
                  ? 'text-white'
                  : 'text-gray-700 hover:text-blue-600 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200'
              }`}
            >
              {activeCategory === category && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg"></span>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Glass reflection effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Type badge with glassmorphism */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-blue-600 text-sm rounded-full shadow-lg border border-white/50 font-medium">
                    {product.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Specifications with glass effect */}
                <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Толщина:</span>
                    <span className="font-medium text-gray-900 px-2 py-1 bg-blue-50 rounded">{product.thickness}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Макс. размер:</span>
                    <span className="font-medium text-gray-900 px-2 py-1 bg-blue-50 rounded">{product.maxSize}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Стандарт:</span>
                    <span className="font-medium text-gray-900 px-2 py-1 bg-blue-50 rounded">{product.standard}</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                      {product.price}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="group/btn px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all text-sm flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <ShoppingCart size={16} className="group-hover/btn:rotate-12 transition-transform" />
                    Заказать
                  </button>
                </div>
              </div>
              
              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Информация о заказе
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Цены указаны ориентировочные и могут меняться в зависимости от объема заказа,
                сложности обработки и срочности. Для точного расчета стоимости свяжитесь с нашими
                менеджерами. Минимальный заказ — 1 м². Срок изготовления — от 3 рабочих дней.
              </p>
            </div>
          </div>
        </div>

        {/* Modal for product details */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">Заказать расчет</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Вы выбрали: <strong>{selectedProduct.name}</strong>
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Наш менеджер свяжется с вами для уточнения деталей и расчета точной стоимости
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      alert('Спасибо! Мы свяжемся с вами в ближайшее время');
                      setSelectedProduct(null);
                    }}
                    className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Отправить заявку
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Отмена
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}