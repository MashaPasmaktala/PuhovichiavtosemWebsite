// src/app/components/ContactModal.tsx
import { useState } from 'react';
import { X, Phone, User, MessageSquare, Send, Clock, MapPin, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Fire Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl blur-xl opacity-40 animate-fire-pulse"></div>
        
        {/* Modal Content */}
        <div className="relative bg-gradient-to-b from-slate-900 to-black border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Свяжитесь с нами
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Left Side - Contact Info */}
            <div className="md:col-span-2 p-6 bg-gradient-to-b from-slate-900/50 to-black/50">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Контактная информация</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-600/30 shrink-0">
                        <Phone className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <p className="text-xs text-red-300 mb-1">Телефон</p>
                        <a href="tel:+375296694444" className="text-white hover:text-red-400 transition-colors text-sm font-medium">
                          +375 (29) 669 44 44
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-600/30 shrink-0">
                        <Mail className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <p className="text-xs text-red-300 mb-1">Email</p>
                        <a href="mailto:3955366@tut.by" className="text-white hover:text-red-400 transition-colors text-sm">
                          3955366@tut.by
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-600/30 shrink-0">
                        <MapPin className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <p className="text-xs text-red-300 mb-1">Адрес</p>
                        <p className="text-white text-sm">
                          Минская обл., г.Марьина горка<br />
                          ул. Октябрьская, д.46
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-600/30 shrink-0">
                        <Clock className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <p className="text-xs text-red-300 mb-1">Режим работы</p>
                        <p className="text-white text-sm">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-slate-500 text-xs">Сб-Вс: выходной</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-3">Мессенджеры</h4>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://wa.me/375296694444"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-green-600/20 border border-green-600/30 text-green-400 rounded-lg hover:bg-green-600/30 hover:text-green-300 transition-colors inline-flex items-center gap-2 text-xs"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://t.me/stekloplus_mg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-sky-600/20 border border-sky-600/30 text-sky-400 rounded-lg hover:bg-sky-600/30 hover:text-sky-300 transition-colors inline-flex items-center gap-2 text-xs"
                    >
                      Telegram
                    </a>
                    <a
                      href="viber://chat?number=%2B375296694444"
                      className="px-3 py-1.5 bg-purple-600/20 border border-purple-600/30 text-purple-400 rounded-lg hover:bg-purple-600/30 hover:text-purple-300 transition-colors inline-flex items-center gap-2 text-xs"
                    >
                      Viber
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:col-span-3 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Быстрая связь</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-red-300 mb-1.5">
                    Ваше имя *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-4 h-4 text-slate-500" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition text-sm"
                      placeholder="Иван Иванов"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-red-300 mb-1.5">
                    Телефон *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="w-4 h-4 text-slate-500" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition text-sm"
                      placeholder="+375 (29) 669 44 44"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-red-300 mb-1.5">
                    Сообщение
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                      <MessageSquare className="w-4 h-4 text-slate-500" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-red-600 focus:ring-2 focus:ring-red-600/50 outline-none transition text-sm resize-none"
                      placeholder="Кратко опишите ваш вопрос..."
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm"
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    className="flex-1 group relative px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-2xl hover:shadow-red-900/50 transition-all hover:scale-[1.02] font-medium text-sm inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fire-pulse {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.4; }
          50% { transform: scale(1.05) translateY(-5px); opacity: 0.6; }
        }
        .animate-fire-pulse {
          animation: fire-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}