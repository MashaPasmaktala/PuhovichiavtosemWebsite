import { useState } from 'react';
import { TrendingDown, X, Sparkles } from 'lucide-react';

export function BestPriceButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-28 right-6 z-40 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full blur-lg opacity-40 group-hover:opacity-75 transition-opacity"></div>
        
        <div className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-600/90 to-green-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg hover:shadow-emerald-900/50 transition-all duration-300 group-hover:scale-105 border border-emerald-400/20">
          <TrendingDown className="relative w-4 h-4" />
          <span className="relative hidden sm:inline font-bold text-sm">Нашли дешевле?</span>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative bg-gradient-to-b from-slate-900 to-black rounded-3xl shadow-2xl max-w-md w-full p-8 border border-slate-800">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mb-4">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-white mb-2">Нашли дешевле?</h2>
              <p className="text-slate-400">
                Оставьте заявку, и мы предложим лучшую цену!
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="Иван"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="+375 (44) 000-00-00"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Ссылка на предложение
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="https://..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl font-bold transform hover:scale-105"
              >
                Отправить заявку
              </button>
            </form>

            <p className="text-xs text-slate-500 text-center mt-4">
              Мы свяжемся с вами в течение 15 минут
            </p>
          </div>
        </div>
      )}
    </>
  );
}