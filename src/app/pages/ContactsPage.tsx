import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Flame, ArrowRight, Send, MessageSquare, Shield, Award } from "lucide-react";
import { PageHeader } from '@/app/components/PageHeader';

export function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Спасибо за обращение! Мы свяжемся с вами в ближайшее время.",
    );
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Используем новый компонент PageHeader с огненными волнами */}
      <PageHeader 
        title="КОНТАКТЫ"
        subtitle="Свяжитесь с нами удобным для вас способом"
        icon={Phone}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Contact Form */}
          <div className="relative fade-in-scroll">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-b from-slate-900 to-black border border-slate-800 rounded-3xl p-8 hover:border-red-600/50 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Напишите нам
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-red-300 mb-3"
                  >
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-red-300 mb-3"
                  >
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition"
                    placeholder="+375 (XX) XXX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-red-300 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-red-300 mb-3"
                  >
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition resize-none"
                    placeholder="Расскажите о вашем проекте или задайте вопрос..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-2xl hover:shadow-red-900/50 transition-all hover:scale-[1.02] font-bold"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                  <span className="relative">Отправить сообщение</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-scroll" style={{ animationDelay: "100ms" }}>
            {/* Contact Info Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-b from-slate-900 to-black border border-slate-800 rounded-3xl p-8 hover:border-red-600/50 transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Контактная информация
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group/item">
                    <div className="p-3 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-600/30 group-hover/item:border-red-500/50 transition-colors">
                      <MapPin className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-white mb-2">Адрес</p>
                      <p className="text-slate-400">
                        Минская область, Пуховичский район, г.Марьина горка
                        <br />
                        ул. Октябрьская, д.46
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="p-3 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-600/30 group-hover/item:border-red-500/50 transition-colors">
                      <Phone className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-white mb-2">Телефоны</p>
                      <a
                        href="tel:+375447256683"
                        className="text-red-400 hover:text-red-300 font-medium transition-colors group/link inline-flex items-center gap-2"
                      >
                        +375 (44) 725 66 83
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 translate-x-0 group-hover/link:translate-x-1 transition-all" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="p-3 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-600/30 group-hover/item:border-red-500/50 transition-colors">
                      <Mail className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-white mb-2">Email</p>
                      <a
                        href="mailto:3955366@tut.by"
                        className="text-red-400 hover:text-red-300 font-medium transition-colors group/link inline-flex items-center gap-2"
                      >
                        3955366@tut.by
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 translate-x-0 group-hover/link:translate-x-1 transition-all" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="p-3 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-600/30 group-hover/item:border-red-500/50 transition-colors">
                      <Clock className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-white mb-2">Режим работы</p>
                      <div className="space-y-1">
                        <p className="text-slate-400 text-sm">Понедельник - Пятница: 9:00 - 18:00</p>
                        <p className="text-slate-400 text-sm">Суббота: выходной</p>
                        <p className="text-slate-400 text-sm">Воскресенье: выходной</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-b from-slate-900 to-black border border-slate-800 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all duration-500">
                <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-red-600/20 rounded-full blur-xl"></div>
                    <div className="relative p-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <p className="text-lg font-bold text-white mb-2">Мы находимся здесь</p>
                  <p className="text-slate-400 text-center text-sm">
                    Минская область, Пуховичский район, г.Марьина горка
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="relative mb-20 fade-in-scroll" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl blur opacity-30 animate-fire-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 border border-slate-800 rounded-2xl p-8 text-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-700/10 to-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                <div className="text-left">
                  <h3 className="text-xl font-black text-red-500 mb-2">
                    НУЖНА СРОЧНАЯ КОНСУЛЬТАЦИЯ?
                  </h3>
                  <p className="text-slate-400">
                    Позвоните нам прямо сейчас — ответим в течение 15 минут
                  </p>
                </div>
                
                <a
                  href="tel:+375447256683"
                  className="group/btn px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-red-900/50 transition-all hover:scale-105 inline-flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>+375 (44) 725 66 83</span>
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-slate-800">
                <a
                  href="https://wa.me/79991234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600/20 border border-green-600/30 text-green-400 rounded-lg hover:bg-green-600/30 hover:text-green-300 transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp
                </a>
                <a
                  href="https://t.me/stekloplus_mg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-600/20 border border-sky-600/30 text-sky-400 rounded-lg hover:bg-sky-600/30 hover:text-sky-300 transition-colors inline-flex items-center gap-2"
                >
                  Telegram
                </a>
                <a
                  href="viber://chat?number=%2B375447256683"
                  className="px-4 py-2 bg-purple-600/20 border border-purple-600/30 text-purple-400 rounded-lg hover:bg-purple-600/30 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                >
                  Viber
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-scroll" style={{ animationDelay: "300ms" }}>
          {[
            {
              icon: Shield,
              title: "Гарантия ответа",
              desc: "Ответим на все вопросы в течение рабочего дня"
            },
            {
              icon: Award,
              title: "Бесплатный замер",
              desc: "Бесплатный выезд специалиста для точных замеров"
            },
            {
              icon: Clock,
              title: "Быстрый расчет",
              desc: "Точная смета проекта в течение 30 минут"
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-b from-slate-900/50 to-black/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-red-600/50 transition-all duration-300">
                  <div className="inline-flex p-3 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-600/30 mb-4">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

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
        @keyframes ember-float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-200px) translateX(20px); opacity: 0; }
        }
        @keyframes ember-float-delayed {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-250px) translateX(-30px); opacity: 0; }
        }
        @keyframes ember-float-slow {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-180px) translateX(15px); opacity: 0; }
        }
        @keyframes shimmer {
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
        .animate-ember-float {
          animation: ember-float 8s ease-out infinite;
        }
        .animate-ember-float-delayed {
          animation: ember-float-delayed 10s ease-out infinite;
          animation-delay: 2s;
        }
        .animate-ember-float-slow {
          animation: ember-float-slow 12s ease-out infinite;
          animation-delay: 4s;
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
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}