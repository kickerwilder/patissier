import React, { useState } from 'react';
import { X, ArrowLeft, ShoppingBag, Plus, Minus, Clock, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { handleImageError } from '../utils/imageFallback';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, qty: number) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onSelectProduct,
}) => {
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!product) return null;

  const currentImage = activeImage || product.image;
  const recommendations = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    onAddToCart(product, qty);
    setQty(1);
    onClose();
  };

  return (
    <div
      id="product-detail-modal"
      className="fixed inset-0 z-50 bg-choco-950/95 backdrop-blur-md overflow-y-auto flex flex-col"
    >
      <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col w-full">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-gold-500/20 pb-5 mb-8">
          <button
            onClick={onClose}
            className="cut-corner-btn inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-choco-850 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-choco-950 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад в каталог</span>
          </button>
          <span className="text-xs uppercase tracking-widest text-cream-200/50 hidden sm:inline">
            Карточка десерта • Кондитерская «Патисьер»
          </span>
          <button
            onClick={onClose}
            className="text-gold-400 hover:text-white p-1 transition cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-1 items-start">
          {/* Photos column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="cut-corner-card relative overflow-hidden bg-choco-950 border-2 border-gold-500/40 shadow-2xl h-[340px] sm:h-[460px]">
              <img
                src={currentImage}
                alt={product.name}
                onError={(e) => handleImageError(e, 'cake')}
                className="w-full h-full object-cover"
              />
              <span className="cut-corner-btn absolute top-4 left-4 px-3.5 py-1.5 bg-choco-950/90 text-gold-400 text-xs uppercase font-bold tracking-wider border border-gold-500/40">
                {product.tag}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveImage(product.image)}
                className={`cut-corner-btn w-20 h-20 bg-choco-950 overflow-hidden cursor-pointer ${
                  currentImage === product.image
                    ? 'border-2 border-gold-500'
                    : 'border border-gold-500/30 hover:border-gold-400 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => handleImageError(e, 'cake')}
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveImage('images/napoleon-macro.jpeg')}
                className={`cut-corner-btn w-20 h-20 bg-choco-950 overflow-hidden cursor-pointer ${
                  currentImage === 'images/napoleon-macro.jpeg'
                    ? 'border-2 border-gold-500'
                    : 'border border-gold-500/30 hover:border-gold-400 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src="images/napoleon-macro.jpeg"
                  alt="Текстура десерта"
                  onError={(e) => handleImageError(e, 'napoleon')}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Details column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-1.5">
                Коллекция «Патисьер» • Симферополь
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50">
                {product.name}
              </h2>
              <div className="flex items-center gap-4 mt-3">
                <span className="font-serif text-3xl font-bold text-gold-400">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
                <span className="text-xs text-cream-200/80 bg-choco-850 px-3 py-1 border border-gold-500/20 cut-corner-btn">
                  Вес: {product.weight}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed font-light">
              {product.story}
            </p>

            {/* Ingredients & Nutritional details */}
            <div className="space-y-3 pt-2">
              <div className="cut-corner-card bg-choco-850 p-4 border border-gold-500/25">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block mb-1">
                  Честный состав (0% маргарина):
                </span>
                <p className="text-xs text-cream-200/80 leading-relaxed font-light">
                  {product.composition}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="cut-corner-card bg-choco-850 p-3.5 border border-gold-500/20">
                  <span className="text-[11px] font-bold text-gold-400 uppercase block mb-0.5">
                    КБЖУ:
                  </span>
                  <span className="text-xs text-cream-200/70">{product.nutrition}</span>
                </div>
                <div className="cut-corner-card bg-choco-850 p-3.5 border border-gold-500/20">
                  <span className="text-[11px] font-bold text-gold-400 uppercase block mb-0.5">
                    Аллергены:
                  </span>
                  <span className="text-xs text-cream-200/70">{product.allergens}</span>
                </div>
              </div>

              <div className="cut-corner-card bg-choco-850 p-3.5 border border-gold-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-cream-200/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>
                    <strong>Срок годности:</strong> 72 часа при температуре +2...+6°C
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-gold-300 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>Предзаказ за 24 ч</span>
                </div>
              </div>
            </div>

            {/* Quantity and Add to cart */}
            <div className="pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3 bg-choco-850 px-4 py-2.5 cut-corner-btn border border-gold-500/30">
                <span className="text-xs text-cream-200/60 uppercase">Кол-во:</span>
                <button
                  onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                  className="w-7 h-7 bg-choco-950 text-gold-300 font-bold hover:bg-gold-500 hover:text-choco-950 transition cut-corner-btn flex items-center justify-center cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-serif text-lg font-bold text-cream-50 w-6 text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="w-7 h-7 bg-choco-950 text-gold-300 font-bold hover:bg-gold-500 hover:text-choco-950 transition cut-corner-btn flex items-center justify-center cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="cut-corner-btn flex-1 w-full py-4 bg-gold-500 hover:bg-gold-400 text-choco-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-gold-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  Добавить в корзину • {(product.price * qty).toLocaleString('ru-RU')} ₽
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-16 pt-8 border-t border-gold-500/20">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50 mb-6 text-center sm:text-left">
            Вам также может понравиться:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                onClick={() => {
                  setActiveImage(null);
                  setQty(1);
                  onSelectProduct(rec);
                }}
                className="cut-corner-card bg-choco-850 p-4 border border-gold-500/20 hover:border-gold-400 cursor-pointer transition flex items-center gap-4 group"
              >
                <img
                  src={rec.image}
                  alt={rec.name}
                  onError={(e) => handleImageError(e, 'cake')}
                  className="w-16 h-16 object-cover cut-corner-btn bg-choco-950 flex-shrink-0"
                />
                <div>
                  <h4 className="font-serif font-bold text-cream-50 group-hover:text-gold-400 transition text-sm">
                    {rec.name}
                  </h4>
                  <p className="text-xs text-gold-400 font-semibold mt-0.5">
                    {rec.price.toLocaleString('ru-RU')} ₽
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
