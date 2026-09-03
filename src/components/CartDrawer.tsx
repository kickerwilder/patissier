import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { handleImageError } from '../utils/imageFallback';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const targetFreeShipping = 5000;
  const progressPercent = Math.min(100, Math.round((totalPrice / targetFreeShipping) * 100));
  const remainingForFreeShipping = Math.max(0, targetFreeShipping - totalPrice);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Cart Drawer Panel */}
      <div className="relative w-full max-w-md bg-choco-900 text-cream-100 shadow-2xl flex flex-col border-l border-gold-500/30 z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 bg-choco-950 text-cream-50 flex items-center justify-between border-b border-gold-500/30">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-gold-400" />
            <h3 className="font-serif text-xl font-bold text-cream-50">Ваша корзина</h3>
          </div>
          <button
            onClick={onClose}
            className="text-cream-200/80 hover:text-white p-1 transition cursor-pointer"
            aria-label="Закрыть корзину"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-choco-850 p-4 border-b border-gold-500/20">
          <div className="flex justify-between text-xs font-semibold text-cream-100 mb-1.5">
            <span>
              {remainingForFreeShipping > 0
                ? `До бесплатной доставки: ${remainingForFreeShipping.toLocaleString('ru-RU')} ₽`
                : '🎉 Бесплатная доставка по Симферополю!'}
            </span>
            <span className="text-gold-400">{progressPercent}%</span>
          </div>
          <div className="w-full bg-choco-950 rounded-full h-2 overflow-hidden border border-gold-500/20">
            <div
              className="bg-gradient-to-r from-gold-600 to-gold-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-cream-200/50 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-gold-400/30" />
              <p className="font-serif text-lg font-bold text-cream-100">Корзина пуста</p>
              <p className="text-xs text-cream-200/60 max-w-xs mx-auto">
                Выберите свежий праздничный десерт из витрины «Патисьер»
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="cut-corner-card flex items-center gap-3.5 bg-choco-850 p-3.5 border border-gold-500/20 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => handleImageError(e, 'cake')}
                  className="cut-corner-btn w-16 h-16 object-cover bg-choco-950 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-cream-50 text-sm truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gold-400 font-semibold mt-0.5">
                    {item.price.toLocaleString('ru-RU')} ₽
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="cut-corner-btn w-6 h-6 bg-choco-950 text-gold-300 flex items-center justify-center text-xs font-bold hover:bg-gold-500 hover:text-choco-950 transition cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-cream-50 w-4 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="cut-corner-btn w-6 h-6 bg-choco-950 text-gold-300 flex items-center justify-center text-xs font-bold hover:bg-gold-500 hover:text-choco-950 transition cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-cream-200/40 hover:text-red-400 p-1.5 transition cursor-pointer"
                  title="Удалить из корзины"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Controls */}
        <div className="p-6 bg-choco-950 border-t border-gold-500/20 space-y-3">
          <div className="flex justify-between items-center text-sm pb-1">
            <span className="text-cream-200">Итого к оплате:</span>
            <span className="font-serif text-2xl font-bold text-gold-400">
              {totalPrice.toLocaleString('ru-RU')} ₽
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            disabled={cart.length === 0}
            className="cut-corner-btn w-full py-4 bg-gold-500 hover:bg-gold-400 text-choco-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            Оформить предзаказ
          </button>

          <button
            onClick={onClose}
            className="cut-corner-btn w-full py-2.5 bg-transparent border border-gold-500/30 hover:border-gold-400 text-gold-300 hover:text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
          >
            Продолжить покупки
          </button>

          <p className="text-[11px] text-center text-cream-200/60 pt-1">
            Оплата после подтверждения заказа шеф-кондитером
          </p>
        </div>

      </div>
    </div>
  );
};
