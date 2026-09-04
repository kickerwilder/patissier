import React from 'react';
import { handleImageError } from '../utils/imageFallback';
import { FlourishDivider } from './FlourishDivider';

interface PhilosophyProps {
  onSelectCake: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onSelectCake }) => {
  return (
    <section
      id="manifesto"
      className="bg-choco-950 border-b border-gold-500/20 relative overflow-hidden py-3 sm:py-6"
    >
      {/* 1. TOP BLOCK: Left Text Zone + Right 1:1 Natural Photo (Mobile & Desktop) */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-6 md:mb-8 min-h-[300px] sm:min-h-[340px] md:min-h-[420px] lg:min-h-[460px] flex items-center bg-choco-950">
        
        {/* Content Container aligned with site grid max-w-7xl */}
        <div className="max-w-7xl mx-auto w-full px-3.5 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex items-center justify-between">
          
          {/* Left Column: Text sitting in its clean zone with heading boldly extending onto photo */}
          <div className="w-[54%] sm:w-[50%] md:w-[52%] lg:w-[50%] pr-1 sm:pr-4 md:pr-6 py-2 text-left flex flex-col justify-center z-20">
            {/* Title: Bold & expressive, 'Делаем для других' on line 1 extending onto photo, 'как для себя' on line 2 */}
            <h2 className="font-serif font-bold text-[19px] sm:text-[27px] md:text-3xl lg:text-[40px] text-cream-50 leading-[1.14] drop-shadow-[0_2px_8px_rgba(0,0,0,0.98)] z-20">
              <span className="whitespace-nowrap inline-block -mr-6 sm:-mr-12 md:-mr-16 lg:-mr-20">
                Делаем для <span className="relative z-20">других</span>,
              </span>
              <br />
              <span className="whitespace-nowrap inline-block">
                как для себя
              </span>
            </h2>

            {/* Authentic Monogram Flourish under heading */}
            <div className="my-1.5 sm:my-2.5 flex items-center gap-1">
              <div className="h-[1px] w-4 sm:w-10 bg-gradient-to-r from-transparent via-gold-500/80 to-gold-400"></div>
              <svg
                viewBox="0 0 54 14"
                className="w-6 sm:w-8 h-2 sm:h-2.5 text-gold-400 flex-shrink-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left horizontal line */}
                <line x1="2" y1="7" x2="18.6" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                {/* Left curve connecting into flower */}
                <path d="M18.6 7C22.6 7 24.6 9 27 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                {/* Center 4-petal royal floral knot */}
                <path
                  d="M27 7C25.3 4.8 25.3 1.8 27 1.8C28.7 1.8 28.7 4.8 27 7ZM27 7C25.3 9.2 25.3 12.2 27 12.2C28.7 12.2 28.7 9.2 27 7ZM27 7C24.8 5.3 21.8 5.3 21.8 7C21.8 8.7 24.8 8.7 27 7ZM27 7C29.2 5.3 32.2 5.3 32.2 7C32.2 8.7 29.2 8.7 27 7Z"
                  fill="currentColor"
                  className="text-gold-400"
                />
                {/* Central shining dot */}
                <circle cx="27" cy="7" r="1.1" fill="#FFF9E6" />
                {/* Right curve connecting from flower */}
                <path d="M27 9C29.4 9 31.4 7 35.4 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                {/* Right horizontal line */}
                <line x1="35.4" y1="7" x2="52" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <div className="h-[1px] w-4 sm:w-10 bg-gradient-to-l from-transparent via-gold-500/80 to-gold-400"></div>
            </div>

            {/* Manifesto Text: STRICT 6 LINES, NO WORD WRAP, SAME FONT SIZE AS LOWER CARDS */}
            <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-cream-100/90 leading-[1.38] font-normal tracking-wide space-y-0.5 sm:space-y-1">
              <div className="whitespace-nowrap">Мы убеждены: то, что создаётся</div>
              <div className="whitespace-nowrap">для людей, должно соответствовать</div>
              <div className="whitespace-nowrap">стандартам, которые мы предъявляем</div>
              <div className="whitespace-nowrap">сами себе. Поэтому мы не ищем</div>
              <div className="whitespace-nowrap">лёгких путей там, где они ухудшают</div>
              <div className="whitespace-nowrap">итоговый результат.</div>
            </div>
          </div>

          {/* Right Column: Natural 1:1 square photo framed within site grid on desktop, full-height edge overlay on mobile */}
          <div className="w-[64%] sm:w-[58%] md:w-[48%] lg:w-[46%] absolute right-0 top-0 bottom-0 md:relative md:inset-auto md:flex md:items-center md:justify-end z-0 md:z-10 pointer-events-none select-none overflow-hidden">
            <div className="relative w-full h-full md:h-auto md:w-[400px] lg:md:w-[440px] xl:w-[460px] md:aspect-square flex items-center justify-end">
              <img
                src="images/philosophy-video.jpg"
                alt="Натюрморт Патисьер"
                onError={(e) => handleImageError(e, 'philosophy')}
                className="w-full h-full object-cover object-[center_center] filter brightness-105 contrast-105"
              />
              {/* Seamless edge-only feathering: gradual fade into dark chocolate background */}
              <div className="absolute inset-y-0 left-0 w-[24%] md:w-[28%] bg-gradient-to-r from-choco-950 from-0% via-choco-950/80 via-[30%] via-choco-950/25 via-[65%] to-transparent to-[100%] pointer-events-none"></div>
              {/* Top & bottom subtle fusions */}
              <div className="absolute inset-x-0 top-0 h-4 md:h-6 bg-gradient-to-b from-choco-950 to-transparent pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-4 md:h-6 bg-gradient-to-t from-choco-950 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>

      </div>

      {/* 2. LOWER SECTION: Two Cards + Lowered Action Button */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 xl:px-12 w-full pb-6 sm:pb-10">

        {/* TWO LOWER FRAMED CARDS */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
          
          {/* Card 1: Без заменителей и компромиссов */}
          <div className="cut-corner-card bg-choco-900 border border-gold-500/20 p-2.5 sm:p-4 md:p-6 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-xs sm:text-base md:text-xl lg:text-2xl text-cream-50 leading-tight uppercase tracking-wider mb-1 sm:mb-2">
                БЕЗ ЗАМЕНИТЕЛЕЙ
                <br />
                И КОМПРОМИССОВ
              </h3>

              {/* Flourish Divider */}
              <div className="my-1 sm:my-2">
                <FlourishDivider lineWidth="w-4 sm:w-10" />
              </div>

              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-cream-100/90 font-normal leading-relaxed">
                Никакого маргарина, растительных сливок или дешёвых смесей. Мы
                используем только настоящее сливочное масло 82,5%, бельгийский
                шоколад и натуральные сливки.
              </p>
            </div>
          </div>

          {/* Card 2: Создано в Патисьер */}
          <div className="cut-corner-card bg-choco-900 border border-gold-500/20 p-2.5 sm:p-4 md:p-6 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-xs sm:text-base md:text-xl lg:text-2xl text-cream-50 leading-tight uppercase tracking-wider mb-1 sm:mb-2">
                СОЗДАНО
                <br />В ПАТИСЬЕР
              </h3>

              {/* Flourish Divider */}
              <div className="my-1 sm:my-2">
                <FlourishDivider lineWidth="w-4 sm:w-10" />
              </div>

              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-cream-100/90 font-normal leading-relaxed">
                Каждый бисквит, крем, ягодное конфи и декор готовятся вручную
                нашими мастерами с нуля в кондитерской по собственным
                проверенным рецептурам.
              </p>
            </div>
          </div>

        </div>

        {/* Lowered Action Button "ВЫБРАТЬ ДЕСЕРТ" */}
        <div className="flex flex-col items-center text-center mt-2 sm:mt-4">
          <button
            onClick={onSelectCake}
            className="cut-corner-btn inline-flex items-center justify-center px-6 sm:px-10 py-2.5 sm:py-3.5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-choco-950 font-bold tracking-[0.16em] text-xs sm:text-sm uppercase shadow-lg shadow-gold-500/20 transition transform hover:scale-105 cursor-pointer rounded"
          >
            В Ы Б Р А Т Ь &nbsp; Д Е С Е Р Т
          </button>

          {/* Slogan with center golden dot */}
          <div className="mt-2 sm:mt-3 flex items-center justify-center gap-2 text-center">
            <span className="text-[10px] sm:text-xs md:text-sm text-cream-100 font-light tracking-wide">
              Натуральные ингредиенты
            </span>
            <div className="w-1 h-1 rounded-full bg-gold-400"></div>
            <span className="text-[10px] sm:text-xs md:text-sm text-cream-100 font-light tracking-wide">
              Ручная работа
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
