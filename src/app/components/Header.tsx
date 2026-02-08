import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/catalog', label: 'Каталог' },
    { path: '/portfolio', label: 'Наши работы' },
    { path: '/partners', label: 'Партнеры' },
    { path: '/about', label: 'О компании' },
    { path: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-red-900/30 shadow-2xl">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Логотип - полностью заполняет контейнер */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4 group flex-shrink-0">
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
              {/* Эффект свечения */}
              <div className="absolute inset-0 bg-red-500/40 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              {/* Контейнер логотипа */}
              <div className="relative w-full h-full bg-gradient-to-br from-red-600 to-red-800 rounded-xl 
                            group-hover:scale-105 transition-transform duration-300 
                            shadow-lg shadow-red-900/60 border-2 border-red-400/30
                            flex items-center justify-center overflow-hidden">
                {/* Логотип - заполняет весь контейнер */}
                <img 
                  src="/images/logo.jpg" 
                  alt="Логотип ПуховичиАвтоСемь" 
                  className="w-full h-full object-cover" 
                  loading="eager"
                />
                
                {/* Дополнительный контрастный оверлей для темных логотипов */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-70"></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight whitespace-nowrap leading-tight">
                ПУХОВИЧИАВТОСЕМЬ
              </h1>
              <div className="text-xs sm:text-sm text-red-600 font-bold tracking-wider uppercase mt-0.5">
                ЗАКАЛКА СТЕКЛА
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-6 py-3.5 rounded-2xl font-bold text-lg transition-all whitespace-nowrap relative 
                    group/nav min-w-[120px] text-center
                    ${isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-red-700 to-red-900 shadow-2xl shadow-red-900/70 border-2 border-red-500/50 transform scale-105'
                      : 'text-slate-200 hover:text-white bg-gradient-to-b from-gray-900/80 to-black/80 border-2 border-transparent hover:border-red-500/30 hover:bg-gradient-to-r hover:from-red-900/40 hover:to-black/80'
                    }`}
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  
                  {isActive(item.path) && (
                    <div className="absolute inset-0 bg-red-600/20 rounded-2xl blur-md"></div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 rounded-2xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
                  
                  {isActive(item.path) && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-red-500 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3.5 rounded-2xl text-white bg-gradient-to-r from-gray-900 to-black border-2 border-gray-800 hover:border-red-500 transition-all duration-200 hover:scale-110"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-red-900/30 bg-black/95">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-2xl font-bold text-xl text-center transition-all relative
                    ${isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-red-700 to-red-900 shadow-2xl shadow-red-900/70 border-2 border-red-500/50'
                      : 'text-slate-200 hover:text-white bg-gradient-to-b from-gray-900 to-black border-2 border-gray-800 hover:border-red-500/50'
                    }`}
                >
                  <span className="relative z-10">
                    {item.label}
                    {isActive(item.path) && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    )}
                  </span>
                  
                  {isActive(item.path) && (
                    <div className="absolute inset-0 bg-red-600/20 rounded-2xl blur-md"></div>
                  )}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-red-900/30">
              <div className="text-center text-red-400 text-sm font-bold tracking-wider">
                ЗАКАЛКА • РЕЗКА • ОБРАБОТКА
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Декоративная полоса */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </header>
  );
}