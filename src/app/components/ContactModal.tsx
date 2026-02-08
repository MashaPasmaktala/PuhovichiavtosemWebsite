import { useState } from 'react';
import { X, Phone, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Наш менеджер свяжется с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Получить консультацию</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Contact Info */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-3">Или свяжитесь с нами напрямую:</p>
            <div className="space-y-2">
              <a
                href="tel:+375447256683"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <Phone size={16} />
                <span>+375 (44) 725 66 83</span>
              </a>
              <a
                href="mailto:info@stekloplus-mg.ru"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <Mail size={16} />
                <span>3955366@tut.by</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="+375(ХХ)ХХХ ХХ ХХ"
              />
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="ivan@example.com"
              />
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2">
                Сообщение
              </label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                placeholder="Расскажите о вашем проекте..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
