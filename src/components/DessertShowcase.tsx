import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { handleImageError } from '../utils/imageFallback';

interface DessertShowcaseProps {
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'Все' },
  { id: 'classic', label: 'Классика' },
  { id: 'chocolate', label: 'Шоколадные' },
  { id: 'nuts', label: 'Ореховые' },
  { id: 'berries', label: 'Ягодные' },
  { id: 'cheesecake', label: 'Чизкейки' },
];

export const DessertShowcase: React.FC<DessertShowcaseProps> = ({
  onOpenProductDetail,
  onAddToCart,
}) => {
  // 3D Carousel state
  const carouselProducts = PRODUCTS.slice(0, 6);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Category filter and catalog expansion state
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFullCatalogExpanded, setIsFullCatalogExpanded] = useState(false);

  // Touch swipe support for mobile
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const totalCarousel = carouselProducts.length;

  const handlePrevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + totalCarousel) % totalCarousel);
  };

  const handleNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % totalCarousel);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNextSlide();
    } else if (diff < -45) {
      handlePrevSlide();
    }
  };

  // Filter products for catalog grid
  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categories.includes(selectedCategory));

  const displayedCatalogProducts = isFullCatalogExpanded
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <section id="catalog" className="py-20 sm:py-24 bg-choco-950 border-b border-gold-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <div className="h-[1px] w-12 bg-gold-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full border border-gold-400 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-gold-400"></div>
            </div>
            <div className="h-[1px] w-12 bg-gold-500/50"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-cream-50 font-normal tracking-wider uppercase">
            Витрина десертов
          </h2>
          <p className="text-xs sm:text-sm text-cream-200/80 mt-2.5 font-light tracking-wider">
            Выберите тот, за которым захочется вернуться
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setIsFullCatalogExpanded(false);
                }}
                className={`cut-corner-btn px-4 sm:px-6 py-2 text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gold-500 text-choco-950 shadow-md scale-105'
                    : 'bg-choco-900/60 border border-gold-500/20 text-cream-200/80 hover:text-gold-300 hover:border-gold-500/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ================= TRUE 3D ROTATING CAROUSEL ================= */}
        <div className="relative max-w-5xl mx-auto py-6 sm:py-8 px-2 sm:px-6 mb-16 select-none">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevSlide}
            aria-label="Предыдущий торт"
            className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-choco-950/90 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-choco-950 flex items-center justify-center shadow-2xl transition transform hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextSlide}
            aria-label="Следующий торт"
            className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-choco-950/90 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-choco-950 flex items-center justify-center shadow-2xl transition transform hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 3D Carousel Stage */}
          <div
            className="relative h-[480px] sm:h-[530px] flex items-center justify-center overflow-visible"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {carouselProducts.map((item, index) => {
              // Calculate offset relative to carouselIndex (-1: left, 0: center, +1: right)
              let offset = (index - carouselIndex + totalCarousel) % totalCarousel;
              if (offset > totalCarousel / 2) {
                offset -= totalCarousel;
              }

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Hide other slides
              if (!isCenter && !isLeft && !isRight) {
                return null;
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isCenter) {
                      onOpenProductDetail(item);
                    } else if (isLeft) {
                      handlePrevSlide();
                    } else if (isRight) {
                      handleNextSlide();
                    }
                  }}
                  className={`absolute top-4 cut-corner-card bg-choco-900 flex flex-col cursor-pointer transition-all duration-500 ease-out select-none ${
                    isCenter
                      ? 'z-30 w-[84%] max-w-[280px] sm:max-w-[340px] h-[450px] sm:h-[490px] border-2 border-gold-500 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(197,160,89,0.35)] scale-100 sm:scale-105 opacity-100 translate-x-0'
                      : isLeft
                      ? 'z-20 w-[74%] max-w-[240px] sm:max-w-[290px] h-[410px] sm:h-[450px] border border-gold-500/35 hover:border-gold-500/70 shadow-2xl opacity-75 sm:opacity-85 -translate-x-[62%] sm:-translate-x-[75%] scale-90'
                      : 'z-20 w-[74%] max-w-[240px] sm:max-w-[290px] h-[410px] sm:h-[450px] border border-gold-500/35 hover:border-gold-500/70 shadow-2xl opacity-75 sm:opacity-85 translate-x-[62%] sm:translate-x-[75%] scale-90'
                  }`}
                >
                  {/* Fixed-height Image Container */}
                  <div className={`relative overflow-hidden bg-choco-950 flex-shrink-0 ${
                    isCenter ? 'h-48 sm:h-56' : 'h-40 sm:h-48'
                  }`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => handleImageError(e, 'napoleon')}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isCenter ? 'scale-105 brightness-100' : 'brightness-90 hover:scale-105'
                      }`}
                    />

                    {/* Cut-corner Tag Badge */}
                    <span
                      className={`cut-corner-btn absolute top-3 right-3 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider shadow-md ${
                        isCenter
                          ? 'bg-gold-500 text-choco-950'
                          : 'bg-choco-950/90 text-gold-300 border border-gold-500/40'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Fixed Card Body Container */}
                  <div className="p-3.5 sm:p-5 text-center flex-1 flex flex-col justify-between bg-choco-900 overflow-hidden">
                    <div>
                      {/* Fixed height title area */}
                      <div className="h-11 sm:h-12 flex items-center justify-center">
                        <h3 className={`font-serif font-bold text-cream-50 leading-tight line-clamp-2 ${
                          isCenter ? 'text-base sm:text-xl' : 'text-sm sm:text-lg text-cream-100'
                        }`}>
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-[11px] sm:text-xs text-cream-200/70 mt-1 line-clamp-2 font-light leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Price & Action Button */}
                    <div className="pt-2.5 sm:pt-3 border-t border-gold-500/20 flex flex-col items-center gap-2">
                      <span className="font-serif text-base sm:text-xl font-bold text-gold-400">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isCenter) {
                            onOpenProductDetail(item);
                          } else {
                            onAddToCart(item);
                          }
                        }}
                        className={`cut-corner-btn w-full py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition cursor-pointer ${
                          isCenter
                            ? 'bg-gold-500 hover:bg-gold-400 text-choco-950 shadow-md'
                            : 'bg-choco-950 text-gold-300 hover:bg-gold-500 hover:text-choco-950 border border-gold-500/30'
                        }`}
                      >
                        {isCenter ? 'В Ы Б Р А Т Ь' : 'В корзину'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
            {carouselProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                aria-label={`Слайд ${i + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  carouselIndex === i
                    ? 'w-6 h-1.5 bg-gold-400 rounded-full'
                    : 'w-2 h-1.5 bg-gold-500/30 rounded-full hover:bg-gold-400/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= LOWER ROW: MAIN SHOWCASE GRID (4 ITEMS ON MOBILE 2x2, 4 ON DESKTOP 1x4) ================= */}
        <div className="mb-4">
          {/* Grid layout: strictly 2 columns on mobile (grid-cols-2), 4 columns on desktop (lg:grid-cols-4) */}
          <div
            id="main-catalog-grid"
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {displayedCatalogProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onOpenProductDetail(product)}
                className="cut-corner-card bg-choco-850/90 border border-gold-500/25 hover:border-gold-500 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-40 sm:h-56 overflow-hidden bg-choco-950 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => handleImageError(e, 'cake')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="cut-corner-btn absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-0.5 sm:py-1 bg-choco-950/90 text-gold-300 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider border border-gold-500/30">
                    {product.tag}
                  </span>
                </div>

                {/* Content Container */}
                <div
                  className="p-3 sm:p-5 flex-1 flex flex-col justify-between"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    onClick={() => onOpenProductDetail(product)}
                    className="cursor-pointer"
                  >
                    <h3 className="font-serif text-sm sm:text-lg font-bold text-cream-50 group-hover:text-gold-400 transition leading-tight line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-cream-200/60 mt-1 line-clamp-1 font-light">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 mt-2 sm:mt-3 border-t border-gold-500/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <span className="font-serif text-base sm:text-xl font-bold text-gold-400">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="cut-corner-btn w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-gold-500 hover:bg-gold-400 text-choco-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>В корзину</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Expand/Collapse Button */}
        {filteredProducts.length > 4 && (
          <div className="mt-12 flex flex-col items-center text-center">
            <button
              id="toggle-full-catalog-btn"
              onClick={() => setIsFullCatalogExpanded(!isFullCatalogExpanded)}
              className="cut-corner-btn inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 bg-gold-500 hover:bg-gold-400 text-choco-950 font-bold tracking-[0.16em] text-xs uppercase shadow-xl shadow-gold-500/25 transition transform hover:scale-105 cursor-pointer"
            >
              <span>
                {isFullCatalogExpanded
                  ? 'Свернуть витрину'
                  : 'Смотреть всю витрину'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-cream-200/70 mt-3 font-light tracking-wider">
              Свежие десерты каждый день • Заказ за 24 часа
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
