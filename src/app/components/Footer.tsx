import { MessageCircle, Send, Flame, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 text-slate-300 border-t border-red-900/30">
      {/* Декоративная верхняя полоса */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      
      {/* Main Footer Content - РАСТЯГИВАЕМ НА ВСЮ ШИРИНУ */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Company Info - КРУПНЕЕ */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/70 rounded-xl blur-xl"></div>
                <div className="relative p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-2xl shadow-red-900/50">
                  <Flame className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  ПУХОВИЧИАВТОСЕМЬ
                </h3>
                <p className="text-sm text-red-400 font-bold uppercase tracking-wider mt-1">
                  ЗАКАЛКА • РЕЗКА • ОБРАБОТКА
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
              Полный цикл производства от закалки стекла до доставки готовых изделий. 
              Профессиональное оборудование и гарантия качества.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Send, href: 'https://t.me/', label: 'Telegram' },
                { icon: () => (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                  </svg>
                ), href: 'https://www.instagram.com/stekloplus_mg/', label: 'Instagram' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-b from-gray-900 to-black rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 transition-all duration-300 group border-2 border-gray-800 hover:border-red-500"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - КРУПНЕЕ */}
          <div>
            <h4 className="text-white font-black text-xl mb-8 pb-3 border-b border-red-900/50">
              НАВИГАЦИЯ
            </h4>
            <div className="space-y-4">
              {[
                { path: '/', label: 'Главная' },
                { path: '/services', label: 'Услуги' },
                { path: '/catalog', label: 'Каталог' },
                { path: '/portfolio', label: 'Наши работы' },
                { path: '/partners', label: 'Партнеры' },
                { path: '/about', label: 'О компании' },
                { path: '/contacts', label: 'Контакты' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-base md:text-lg hover:text-red-400 transition-colors duration-200 font-semibold group/nav flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity"></div>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacts - КРУПНЕЕ */}
          <div>
            <h4 className="text-white font-black text-xl mb-8 pb-3 border-b border-red-900/50">
              КОНТАКТЫ
            </h4>
            <div className="space-y-6">
              <a href="tel:+375447256683" className="flex items-start gap-4 hover:text-red-400 transition-colors duration-200 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600/30 rounded-lg blur-sm"></div>
                  <Phone className="w-6 h-6 relative text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-black text-white text-lg md:text-xl">+375 (44) 725 66 83</div>
                  <div className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3" />
                    Пн-Пт: 9:00-18:00
                  </div>
                </div>
              </a>
              
              <a href="tel:+375296694444" className="flex items-start gap-4 hover:text-red-400 transition-colors duration-200 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600/30 rounded-lg blur-sm"></div>
                  <Phone className="w-6 h-6 relative text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-black text-white text-lg md:text-xl">+375 (29) 669 44 44</div>
                  <div className="text-sm text-slate-500">Бесплатная консультация</div>
                </div>
              </a>
              
              <a href="mailto:info@stekloplus.by" className="flex items-start gap-4 hover:text-red-400 transition-colors duration-200 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600/30 rounded-lg blur-sm"></div>
                  <Mail className="w-6 h-6 relative text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-white">3955366@tut.by</div>
                  <div className="text-sm text-slate-500">Отправьте нам ваш проект</div>
                </div>
              </a>
              
              <div className="flex items-start gap-4 pt-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600/30 rounded-lg blur-sm"></div>
                  <MapPin className="w-6 h-6 relative text-red-500" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-white">пос.Дружный, Беларусь</div>
                  <div className="text-sm text-slate-500 mt-1">Производство</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details - САМЫЙ КРУПНЫЙ */}
          <div>
            <h4 className="text-white font-black text-xl mb-8 pb-3 border-b border-red-900/50">
              РЕКВИЗИТЫ
            </h4>
            <div className="space-y-6">
              <div>
                <div className="text-sm text-slate-500 font-medium mb-2">Полное название:</div>
                <div className="text-white font-bold text-lg leading-tight">
                  ООО "Пуховичиавтосемь"
                </div>
              </div>
              
              <div>
                <div className="text-sm text-slate-500 font-medium mb-2">УНП:</div>
                <div className="text-white font-black text-xl">691932757</div>
              </div>
              
              {/* Банковские реквизиты */}
              <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl p-4 border border-gray-800">
                <div className="text-red-400 font-bold text-sm mb-3 uppercase tracking-wider">
                  ЗАО "Альфа-Банк"
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Расчетный счет:</div>
                    <div className="text-white font-mono text-sm break-all">
                      BY05ALFA30122G18320010270000
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Код банка:</div>
                    <div className="text-white font-semibold">ALFABYY2X</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl p-4 border border-gray-800">
                <div className="text-red-400 font-bold text-sm mb-3 uppercase tracking-wider">
                  ОАО "Белагропромбанк"
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Расчетный счет:</div>
                    <div className="text-white font-mono text-sm break-all">
                      BY11BAPB30123627500100000000
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Код банка:</div>
                    <div className="text-white font-semibold">BAPBBY2X</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - РАСТЯГИВАЕМ */}
      <div className="border-t border-red-900/30 bg-black/90">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-base text-slate-400">
            <p className="text-center md:text-left font-medium">
              © {currentYear} ООО "Пуховичиавтосемь". Все права защищены.
              <span className="block text-sm text-slate-600 mt-1">
                Закалка и обработка стекла любой сложности
              </span>
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-red-400 transition-colors duration-200 font-semibold">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-red-400 transition-colors duration-200 font-semibold">
                Карта сайта
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративная нижняя полоса */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </footer>
  );
}