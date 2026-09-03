import React, { useState } from 'react';
import { X, CheckCircle, Shield } from 'lucide-react';
import { CartItem, OrderFormData } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    date: '',
    pickupMethod: 'Самовывоз: Евпаторийское ш., 5б (Цех и магазин)',
    wishes: '',
    pdnConsent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.pdnConsent) {
      alert('Для оформления заявки необходимо дать согласие на обработку персональных данных (152-ФЗ РФ).');
      return;
    }

    setIsSubmitted(true);
  };

  const handleFinish = () => {
    setIsSubmitted(false);
    onOrderSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="cut-corner-card bg-choco-900 max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-gold-500/40 my-8">
        
        {!isSubmitted ? (
          <>
            <div className="flex justify-between items-center mb-6 border-b border-gold-500/20 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                  Симферополь
                </span>
                <h3 className="font-serif text-2xl font-bold text-cream-50">
                  Оформление предзаказа
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-gold-400 hover:text-white p-1 transition cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Order summary pill */}
            <div className="bg-choco-950 p-3.5 border border-gold-500/20 cut-corner-btn mb-5 flex justify-between items-center text-xs">
              <span className="text-cream-200/80">
                Позиций в заказе: <strong>{cart.reduce((s, i) => s + i.qty, 0)} шт.</strong>
              </span>
              <span className="font-serif text-base font-bold text-gold-400">
                {totalPrice.toLocaleString('ru-RU')} ₽
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gold-400 uppercase tracking-wider mb-1">
                  Ваше Имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Анастасия"
                  className="cut-corner-btn w-full px-4 py-3 border border-gold-500/30 bg-choco-950 text-cream-100 text-sm focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gold-400 uppercase tracking-wider mb-1">
                  Телефон для связи *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (978) 000-00-00"
                  className="cut-corner-btn w-full px-4 py-3 border border-gold-500/30 bg-choco-950 text-cream-100 text-sm focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gold-400 uppercase tracking-wider mb-1">
                    Дата получения *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="cut-corner-btn w-full px-4 py-3 border border-gold-500/30 bg-choco-950 text-cream-100 text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gold-400 uppercase tracking-wider mb-1">
                    Способ получения
                  </label>
                  <select
                    value={formData.pickupMethod}
                    onChange={(e) => setFormData({ ...formData, pickupMethod: e.target.value })}
                    className="cut-corner-btn w-full px-3 py-3 border border-gold-500/30 bg-choco-950 text-cream-100 text-xs focus:border-gold-400 focus:outline-none"
                  >
                    <option value="Самовывоз: Евпаторийское ш., 5б (Цех и магазин)">
                      Самовывоз: Евпаторийское ш., 5б
                    </option>
                    <option value="Самовывоз: ул. Шполянской, 6 (Магазин)">
                      Самовывоз: ул. Шполянской, 6
                    </option>
                    <option value="Курьерская доставка по Симферополю">
                      Курьерская доставка по Симферополю
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gold-400 uppercase tracking-wider mb-1">
                  Пожелания или надпись на торте
                </label>
                <textarea
                  rows={2}
                  value={formData.wishes}
                  onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                  placeholder="Например: надпись «С Днем Рождения, Мама!»"
                  className="cut-corner-btn w-full px-4 py-2.5 border border-gold-500/30 bg-choco-950 text-cream-100 text-sm focus:border-gold-400 focus:outline-none"
                />
              </div>

              {/* 152-FZ Consent checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="pdn-consent-check"
                  required
                  checked={formData.pdnConsent}
                  onChange={(e) => setFormData({ ...formData, pdnConsent: e.target.checked })}
                  className="mt-1 accent-gold-500 w-4 h-4 cursor-pointer"
                />
                <label
                  htmlFor="pdn-consent-check"
                  className="text-[11px] text-cream-200/80 leading-snug cursor-pointer"
                >
                  Согласен на обработку персональных данных в соответствии с <strong>152-ФЗ РФ</strong> и условиями публичной оферты.
                </label>
              </div>

              <button
                type="submit"
                className="cut-corner-btn w-full py-4 bg-gold-500 hover:bg-gold-400 text-choco-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 mt-4 cursor-pointer transition"
              >
                Подтвердить и отправить заявку
              </button>
            </form>
          </>
        ) : (
          /* Order confirmation success state */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center mx-auto text-gold-400">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-cream-50">
              Спасибо за заказ!
            </h3>
            <p className="text-sm text-cream-200/90 leading-relaxed max-w-sm mx-auto font-light">
              Ваш предзаказ принят шеф-кондитером «Патисьер». Менеджер свяжется с Вами по телефону <strong>{formData.phone}</strong> в течение 15 минут для уточнения деталей.
            </p>

            <div className="p-4 bg-choco-950 border border-gold-500/20 cut-corner-card text-left text-xs space-y-1.5 text-cream-200/80">
              <div><strong>Получатель:</strong> {formData.name}</div>
              <div><strong>Способ:</strong> {formData.pickupMethod}</div>
              <div><strong>Дата получения:</strong> {formData.date}</div>
              <div><strong>Сумма:</strong> {totalPrice.toLocaleString('ru-RU')} ₽</div>
            </div>

            <div className="pt-3">
              <button
                onClick={handleFinish}
                className="cut-corner-btn w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-choco-950 font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
              >
                Вернуться на сайт
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
