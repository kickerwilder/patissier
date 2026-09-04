import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { handleImageError } from '../utils/imageFallback';
import { FlourishDivider } from './FlourishDivider';

interface DessertShowcaseProps {
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const CATEGORIES = [\
  { id: 'all', label: 'Все' },
  { id: 'classic', label: 'Классика' },
  { id: 'chocolate', label: 'Шоколадные' },
  { id: 'nuts', label: 'Ореховые' },
  { id: 'berries', label: 'Ягодные' },
  { id: 'cheesecake', label: 'Чизкейки' },
];

export const DessertShowcase: React.FC<DessertShowcaseProps> = ({
  onOpenProductDetail,
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

  // Default: 2 cards on mobile (<768px), 4 cards on desktop in one row. Full list when expanded.
  const displayedCatalogProducts = isFullCatalogExpanded
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <section
      id="catalog"
      className="pt-2 sm:pt-4 pb-6 sm:pb-10 bg-choco-950 border-b border-gold-500/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Authentic Monogram Flourish at top of showcase */}
        <div className="max-w-2xl mx-auto mb-1.5 sm:mb-2.5">
          <FlourishDivider lineWidth="w-16 sm:w-36" />
        </div>

        {/* Section Header: Compact & elegant */}
        <div className="text-center max-w-2xl mx-auto mb-2 sm:mb-2.5">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream-50 font-normal tracking-[0.16em] uppercase">
            Витрина десертов
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm text-cream-200/85 mt-0.5 font-light tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
            Выберите тот торт, за которым хочется вернуться
          </p>
        </div>

        {/* Category Filter: ALL 6 CATEGORIES IN ONE CONTINUOUS ROW WITHOUT WRAP */}
        <div className="flex items-center justify-center gap-0.5 sm:gap-1.5 md:gap-2 overflow-x-auto no-scrollbar py-0.5 px-0.5 mb-2 sm:mb-3 select-none flex-nowrap">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setIsFullCatalogExpanded(false);
                }}
                className={`text-[8.5px] sm:text-[11px] md:text-xs tracking-normal sm:tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap px-1 sm:px-2 md:px-2.5 py-0.5 flex-shrink-0 ${
                  isActive
                    ? 'rounded-full border border-gold-400/80 text-gold-300 font-medium bg-gold-500/10 shadow-sm'
                    : 'text-cream-200/75 hover:text-gold-300 font-normal border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ================= 3D ROTATING CAROUSEL (Photo occupies 65-70%, text block is tightly packed) ================= */}
        <div className="relative max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto py-1 sm:py-2 md:py-4 px-1 sm:px-6 mb-3 sm:mb-5 select-none">
          
          {/* Left Arrow */}
          <button
            onClick={handlePrevSlide}
            aria-label="Предыдущий торт"
            className="absolute left-0 sm:-left-2 md:-left-4 top-1/2 -translate-y-1/2 z-40 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-choco-950/90 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-choco-950 flex items-center justify-center shadow-lg transition transform hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextSlide}
            aria-label="Следующий торт"
            className="absolute right-0 sm:-right-2 md:-right-4 top-1/2 -translate-y-1/2 z-40 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-choco-950/90 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-choco-950 flex items-center justify-center shadow-lg transition transform hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* 3D Carousel Stage */}
          <div
            className="relative h-[325px] sm:h-[365px] md:h-[430px] lg:h-[450px] flex items-center justify-center overflow-visible"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {carouselProducts.map((item, index) => {
              let offset = (index - carouselIndex + totalCarousel) % totalCarousel;
              if (offset > totalCarousel / 2) {
                offset -= totalCarousel;
              }

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

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
                  className={`absolute top-1 cut-corner-card bg-choco-900 flex flex-col cursor-pointer transition-all duration-500 ease-out select-none ${
                    isCenter
                      ? 'z-30 w-[76%] max-w-[245px] sm:max-w-[275px] md:max-w-[340px] lg:max-w-[360px] h-[315px] sm:h-[355px] md:h-[415px] lg:h-[435px] border border-gold-500/35 hover:border-gold-500/70 shadow-[0_12px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(197,160,89,0.25)] scale-100 sm:scale-105 md:scale-100 opacity-100 translate-x-0'
                      : isLeft
                      ? 'z-20 w-[68%] max-w-[210px] sm:max-w-[235px] md:max-w-[280px] lg:max-w-[300px] h-[280px] sm:h-[315px] md:h-[370px] lg:h-[390px] border border-gold-500/15 hover:border-gold-500/40 shadow-lg opacity-70 sm:opacity-80 -translate-x-[56%] sm:-translate-x-[68%] md:-translate-x-[72%] lg:-translate-x-[76%] scale-90'
                      : 'z-20 w-[68%] max-w-[210px] sm:max-w-[235px] md:max-w-[280px] lg:max-w-[300px] h-[280px] sm:h-[315px] md:h-[370px] lg:h-[390px] border border-gold-500/15 hover:border-gold-500/40 shadow-lg opacity-70 sm:opacity-80 translate-x-[56%] sm:translate-x-[68%] md:translate-x-[72%] lg:translate-x-[76%] scale-90'
                  }`}
                >
                  {/* Image Container with Tag Badge: Occupies majority (65-70%) of card */}
                  <div
                    className={`relative overflow-hidden bg-choco-950 flex-shrink-0 ${
                      isCenter
                        ? 'h-[195px] sm:h-[225px] md:h-[265px] lg:h-[280px]'
                        : 'h-[170px] sm:h-[195px] md:h-[235px] lg:h-[250px]'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      onError={(e) => handleImageError(e, 'napoleon')}
                      className={`w-full h-full object-cover transition-transform duration-700 text-transparent select-none ${
                        isCenter ? 'scale-105 brightness-100' : 'brightness-90 hover:scale-105'
                      }`}
                    />

                    {/* Seamless gradient fade from photo down into the card's dark brown background */}
                    <div className="absolute inset-x-0 bottom-0 h-10 sm:h-12 md:h-14 bg-gradient-to-t from-choco-900 via-choco-900/60 to-transparent pointer-events-none"></div>

                    {/* Classic Rectangular Cut-corner Tag Badge */}
                    <span
                      className={`cut-corner-btn absolute top-2 right-2 px-2 sm:px-2.5 md:px-3 py-0.5 md:py-1 text-[8px] sm:text-[9px] md:text-[10px] uppercase font-bold tracking-wider shadow-md z-10 ${
                        isCenter
                          ? 'bg-gold-500 text-choco-950'
                          : 'bg-choco-950/90 text-gold-300 border border-gold-500/40'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Compact Body tightly packed: Name -> Subtitle -> Divider -> Price -> Button */}
                  <div className="relative z-10 px-2 sm:px-3 py-1.5 md:py-2 text-center flex flex-col items-center justify-between bg-choco-900 overflow-hidden flex-1">
                    
                    {/* Title & Subtitle in pure delicate white */}
                    <div className="w-full">
                      <h3
                        className={`font-serif font-bold text-cream-50 leading-tight uppercase tracking-wider line-clamp-1 ${
                          isCenter ? 'text-xs sm:text-sm md:text-base' : 'text-[11px] sm:text-xs text-cream-50'
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p className="text-[8.5px] sm:text-[9.5px] md:text-xs text-cream-50/90 mt-0.5 line-clamp-1 font-light">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Thin Line with Golden Dot */}
                    <div className="flex items-center justify-center gap-1.5 my-0.5 sm:my-1 w-full">
                      <div className="h-[1px] w-6 sm:w-10 md:w-14 bg-gold-500/35"></div>
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gold-400"></div>
                      <div className="h-[1px] w-6 sm:w-10 md:w-14 bg-gold-500/35"></div>
                    </div>

                    {/* Price & Action Button: Classic white linear font, noticeably larger */}
                    <div className="w-full flex flex-col items-center gap-0.5 sm:gap-1">
                      <div className="font-sans font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-cream-50 leading-none tracking-normal tabular-nums">
                        {item.price.toLocaleString('ru-RU')} ₽ <span className="text-[9.5px] sm:text-[11px] md:text-xs font-sans font-normal text-cream-100/90">/ порция</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenProductDetail(item);
                        }}
                        className="cut-corner-btn w-full max-w-[115px] sm:max-w-[130px] md:max-w-[160px] py-1 md:py-1.5 px-2 md:px-3 border border-gold-500/40 hover:bg-gold-500 hover:text-choco-950 text-gold-300 text-[8.5px] sm:text-[9.5px] md:text-[11px] font-bold uppercase tracking-widest transition cursor-pointer mt-0.5"
                      >
                        В Ы Б Р А Т Ь
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-2 sm:mt-2.5 md:mt-4">
            {carouselProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                aria-label={`Слайд ${i + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  carouselIndex === i
                    ? 'w-5 sm:w-6 h-1 sm:h-1.5 bg-gold-400 rounded-full'
                    : 'w-1.5 h-1 sm:h-1.5 bg-gold-500/30 rounded-full hover:bg-gold-400/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= LOWER ROW: COMPACT TILES (2 on mobile, 4 on desktop) ================= */}
        <div className="mt-1 sm:mt-2 md:mt-4">
          <div
            id="main-catalog-grid"
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3.5 md:gap-5 lg:gap-6 max-w-7xl mx-auto"
          >
            {displayedCatalogProducts.map((product, idx) => (
              <div
                key={product.id}
                onClick={() => onOpenProductDetail(product)}
                className={`cut-corner-card bg-choco-900 border border-gold-500/15 hover:border-gold-500/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer ${
                  !isFullCatalogExpanded && idx >= 2 ? 'hidden md:flex' : 'flex'
                }`}
              >
                {/* Image Container with tag */}
                <div className="relative h-32 sm:h-42 md:h-52 lg:h-56 overflow-hidden bg-choco-950 flex-shrink-0">
                  <img
                    src={product.image}
                    alt=""
                    aria-hidden="true"
                    onError={(e) => handleImageError(e, 'cake')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent select-none"
                  />
                  {/* Seamless gradient fade from photo down into the card's dark brown background */}
                  <div className="absolute inset-x-0 bottom-0 h-10 sm:h-12 md:h-14 bg-gradient-to-t from-choco-900 via-choco-900/60 to-transparent pointer-events-none"></div>

                  <span className="cut-corner-btn absolute top-1.5 left-1.5 md:top-2 md:left-2 px-1.5 md:px-2.5 py-0.5 bg-choco-950/90 text-gold-300 text-[8px] md:text-[9.5px] uppercase font-bold tracking-wider border border-gold-500/30 z-10">
                    {product.tag}
                  </span>
                </div>

                {/* Compact Content: Name -> Subtitle -> Line with dot -> Price -> ВЫБРАТЬ */}
                <div
                  className="relative z-10 px-2 sm:px-3 md:px-4 py-1.5 md:py-2.5 flex-1 flex flex-col justify-between items-center text-center bg-choco-900"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    onClick={() => onOpenProductDetail(product)}
                    className="cursor-pointer w-full"
                  >
                    <h3 className="font-serif text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-cream-50 leading-snug line-clamp-1 uppercase tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-[8.5px] sm:text-[9.5px] md:text-xs text-cream-50/90 mt-0.5 line-clamp-1 font-light">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Line with center dot */}
                  <div className="flex items-center justify-center gap-1.5 my-0.5 sm:my-1 w-full">
                    <div className="h-[1px] w-5 sm:w-8 md:w-12 bg-gold-500/35"></div>
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gold-400"></div>
                    <div className="h-[1px] w-5 sm:w-8 md:w-12 bg-gold-500/35"></div>
                  </div>

                  {/* Price & Action Button: Classic white linear font, noticeably larger */}
                  <div className="w-full flex flex-col items-center gap-0.5 sm:gap-1">
                    <div className="font-sans font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-cream-50 leading-none tracking-normal tabular-nums">
                      {product.price.toLocaleString('ru-RU')} ₽ <span className="text-[9.5px] sm:text-[11px] md:text-xs font-sans font-normal text-cream-100/90">/ порция</span>
                    </div>
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="cut-corner-btn w-full max-w-[115px] sm:max-w-[130px] md:max-w-[160px] py-1 md:py-1.5 px-2 md:px-3 border border-gold-500/40 hover:bg-gold-500 hover:text-choco-950 text-gold-300 text-[8.5px] sm:text-[9.5px] md:text-[11px] font-bold uppercase tracking-wider transition cursor-pointer mt-0.5"
                    >
                      В Ы Б Р А Т Ь
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Expand / Collapse Button & Slogan */}
        {filteredProducts.length > 2 && (
          <div className="mt-4 sm:mt-5 flex flex-col items-center text-center">
            <button
              id="toggle-full-catalog-btn"
              onClick={() => setIsFullCatalogExpanded(!isFullCatalogExpanded)}
              className="cut-corner-btn inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-choco-950 font-bold tracking-[0.16em] text-[11px] sm:text-xs uppercase shadow-lg shadow-gold-500/15 transition transform hover:scale-105 cursor-pointer rounded"
            >
              <span>
                {isFullCatalogExpanded
                  ? 'Свернуть витрину'
                  : 'Смотреть всю витрину'}
              </span>
              <ArrowRight
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isFullCatalogExpanded ? '-rotate-90' : ''
                }`}
              />
            </button>
            
            {/* Centered Golden Leaf & Slogan */}
            <div className="mt-2.5 sm:mt-3 flex items-center justify-center gap-1.5 text-center">
              {/* Botanical Golden Leaf */}
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Leaf outer contour with subtle gold fill */}
                <path
                  d="M19.5 4.5C14.5 4.5 9 8 7 13.5C5.8 16.8 6.5 19.5 8 20.5C9.5 21.5 13 21 16.5 18C20.5 14.5 20.5 8.5 19.5 4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="fill-gold-500/20"
                />
                {/* Center stem vein */}
                <path
                  d="M7 13.5C10.5 12.5 14.5 9.5 19.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                {/* Secondary side veins */}
                <path
                  d="M10.5 12.5C12 14.2 14.5 15.5 16.5 18"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
                <path
                  d="M13.5 10C15 11.5 17 12.5 18.5 13"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                {/* Lower base stem */}
                <path
                  d="M5 21C6 19.5 7 17.5 7 13.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[11px] sm:text-xs text-cream-100 font-light tracking-wide">
                Свежие десерты каждый день
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
