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
      className="pt-2 sm:pt-4 pb-4 sm:pb-6 bg-choco-950 border-b border-gold-500/20 relative overflow-hidden"
    >
      {/* Top divider under header with authentic flourish monogram */}
      <div className="max-w-7xl mx-auto px-4 mb-3 sm:mb-4">
        <FlourishDivider lineWidth="w-24 sm:w-64" />
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* 1. TOP WIDE FRAMELESS BLOCK: Text Left + Photo Right (Seamless transition) */}
        <div className="relative mb-3 sm:mb-4 min-h-[210px] sm:min-h-[240px] flex items-center overflow-hidden">
          
          {/* Right: Frameless Cake Photo with Left Gradient Fade starting from middle of text */}
          <div className="absolute right-0 top-0 bottom-0 w-[72%] sm:w-[70%] md:w-[68%] pointer-events-none select-none z-0">
            <div className="relative w-full h-full">
              <img
                src="images/philosophy-video.jpg"
                alt="Торт Патисьер"
                onError={(e) => handleImageError(e, 'philosophy')}
                className="w-full h-full object-cover object-[center_right] filter brightness-110 contrast-105"
              />
              {/* Left seamless fade gradient:
                  0-20%: solid choco-950 matching left background
                  20-45%: soft semi-transparent fade right under the right half of the text
                  >50%: fully clear and bright cake photo */}
              <div className="absolute inset-0 bg-gradient-to-r from-choco-950 from-0% via-choco-950/60 via-22% via-choco-950/20 via-42% to-transparent"></div>
              {/* Top & Bottom subtle fades */}
              <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-choco-950 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-choco-950 to-transparent"></div>
            </div>
          </div>

          {/* Left Column: Manifesto Text */}
          <div className="relative z-10 w-[58%] sm:w-[54%] md:w-[50%] pr-1 sm:pr-2 py-1 text-left flex flex-col justify-center">
            {/* Title: all one white color */}
            <h2 className="font-serif text-[16px] sm:text-2xl md:text-3xl text-cream-50 leading-[1.18] font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Делаем для других, <br />
              как для себя
            </h2>

            {/* Authentic Monogram Flourish under heading: round circles, dots inside, vertical bar */}
            <div className="my-1 sm:my-1.5 flex items-center gap-1">
              <div className="h-[1px] w-4 sm:w-10 bg-gradient-to-r from-transparent via-gold-500/80 to-gold-400"></div>
              <svg
                viewBox="0 0 54 14"
                className="w-6 sm:w-8 h-2 sm:h-2.5 text-gold-400 flex-shrink-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left horizontal line */}
                <line x1="2" y1="7" x2="18.6" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                {/* Left round circle with center dot */}
                <circle cx="22.8" cy="7" r="4.2" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="22.8" cy="7" r="1.3" fill="currentColor" />
                {/* Vertical perpendicular bar at junction, length equal to circle diameter (8.4) */}
                <line x1="27" y1="2.8" x2="27" y2="11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                {/* Right round circle with center dot */}
                <circle cx="31.2" cy="7" r="4.2" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="31.2" cy="7" r="1.3" fill="currentColor" />
                {/* Right horizontal line */}
                <line x1="35.4" y1="7" x2="52" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent via-gold-500/80 to-gold-400"></div>
            </div>

            {/* Manifesto text formatted in continuous 6 exact lines as requested, with crisp drop shadow */}
            <div className="text-[9px] sm:text-[11.5px] md:text-xs text-cream-50 leading-[1.38] sm:leading-[1.48] font-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
              <div>Мы убеждены, что создаётся</div>
              <div className="whitespace-nowrap">для людей, должно соответствовать</div>
              <div>стандартам, которые мы предъявляем</div>
              <div>сами себе, поэтому мы не ищем</div>
              <div className="whitespace-nowrap">лёгких путей там, где они ухудшают</div>
              <div>итоговый результат.</div>
            </div>
          </div>

        </div>

        {/* 2. TWO LOWER FRAMED CARDS - 2 COLUMNS IN ONE ROW */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
          
          {/* Card 1: Без заменителей и компромиссов (Leaf Icon, all white text, left-aligned paragraphs) */}
          <div className="rounded-lg bg-choco-950/85 p-2.5 sm:p-4 md:p-5 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 flex flex-col items-center justify-between shadow-lg">
            <div className="space-y-1 sm:space-y-1.5 w-full">
              {/* Elegant botanical leaf with stem & veins */}
              <div className="flex justify-center pb-0.5">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                  <path d="M11 13l3-2" />
                  <path d="M13 16l3-1.5" />
                </svg>
              </div>

              <h3 className="font-serif text-xs sm:text-base md:text-lg text-cream-50 font-normal leading-tight text-center">
                Без заменителей <br /> и компромиссов
              </h3>

              {/* Minimalist Divider: Line - Dot - Line */}
              <div className="flex items-center justify-center gap-1.5 py-0.5">
                <div className="h-[1px] w-5 sm:w-10 bg-gold-500/40"></div>
                <div className="w-1 h-1 rounded-full bg-gold-400"></div>
                <div className="h-[1px] w-5 sm:w-10 bg-gold-500/40"></div>
              </div>

              {/* All single white color for text, left-aligned without indent */}
              <p className="text-left text-[9px] sm:text-xs md:text-sm text-cream-50 leading-[1.3] sm:leading-relaxed font-light">
                Мы используем настоящее сливочное масло 82%, натуральные сливки, яйца, шоколад, орехи, ягоды и другие ингредиенты, которые формируют характер и вкус каждого торта.
              </p>

              {/* Center Golden Dot */}
              <div className="flex justify-center py-0.5">
                <div className="w-1 h-1 rounded-full bg-gold-400"></div>
              </div>

              {/* All single white color for text, left-aligned without indent */}
              <p className="text-left text-[8.5px] sm:text-[11px] md:text-xs text-cream-50 leading-[1.3] sm:leading-relaxed font-light">
                Мы не используем дешёвые заменители животных жиров, растительные сливки, улучшители, загустители, стабилизаторы и другие вредные ингредиенты.
              </p>
            </div>
          </div>

          {/* Card 2: Создано в Патисьер (Planetary Stand Mixer Icon, left-aligned paragraphs, gold final sentence) */}
          <div className="rounded-lg bg-choco-950/85 p-2.5 sm:p-4 md:p-5 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 flex flex-col items-center justify-between shadow-lg">
            <div className="space-y-1 sm:space-y-1.5 w-full">
              {/* Authentic Stand Mixer Icon */}
              <div className="flex justify-center pb-0.5">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Mixer base */}
                  <line x1="3" y1="21" x2="21" y2="21" />
                  {/* Stand pillar & head */}
                  <path d="M18 21v-8a1 1 0 0 0-1-1h-2" />
                  <path d="M6 7h11a2 2 0 0 1 2 2v2H6a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1z" />
                  {/* Speed dial knob */}
                  <circle cx="16" cy="9" r="0.75" fill="currentColor" />
                  {/* Whisk attachment */}
                  <path d="M9 11v3.5a2 2 0 0 1-1 1.5 2 2 0 0 0-1-1.5V11" />
                  <line x1="8" y1="11" x2="8" y2="15" />
                  {/* Mixing bowl with handle */}
                  <path d="M5 14h8a1 1 0 0 1 1 1v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2a1 1 0 0 1 1-1z" />
                </svg>
              </div>

              <h3 className="font-serif text-xs sm:text-base md:text-lg text-cream-50 font-normal leading-tight text-center">
                Создано <br /> в Патисьер
              </h3>

              {/* Minimalist Divider: Line - Dot - Line */}
              <div className="flex items-center justify-center gap-1.5 py-0.5">
                <div className="h-[1px] w-5 sm:w-10 bg-gold-500/40"></div>
                <div className="w-1 h-1 rounded-full bg-gold-400"></div>
                <div className="h-[1px] w-5 sm:w-10 bg-gold-500/40"></div>
              </div>

              {/* White text, left-aligned without indent */}
              <p className="text-left text-[9px] sm:text-xs md:text-sm text-cream-50 leading-[1.3] sm:leading-relaxed font-light">
                Наши торты создаются в собственной кондитерской. Мы контролируем весь процесс — от приготовления до момента, когда торт попадает на витрину.
              </p>

              {/* Center Golden Dot */}
              <div className="flex justify-center py-0.5">
                <div className="w-1 h-1 rounded-full bg-gold-400"></div>
              </div>

              {/* White text, left-aligned without indent */}
              <p className="text-left text-[8.5px] sm:text-[11px] md:text-xs text-cream-50 leading-[1.3] sm:leading-relaxed font-light">
                Мы не покупаем чужие торты для продажи и не продаём свои торты в других заведениях.
              </p>

              {/* Last line: ENTIRE sentence is gold as on reference */}
              <p className="text-left text-[8.5px] sm:text-[11px] md:text-xs text-gold-300 font-medium leading-[1.3] sm:leading-relaxed pt-0.5">
                Наши торты можно купить только в кондитерских Патисьер.
              </p>
            </div>
          </div>

        </div>

        {/* 3. WIDE ACTION BUTTON: "ВЫБРАТЬ ТОРТ" */}
        <div className="flex justify-center">
          <button
            id="philosophy-select-cake-btn"
            onClick={onSelectCake}
            className="w-full max-w-sm sm:max-w-md py-2.5 sm:py-3 px-6 sm:px-10 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-choco-950 font-bold uppercase tracking-[0.22em] text-[11px] sm:text-xs rounded shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            В Ы Б Р А Т Ь &nbsp; Т О Р Т
          </button>
        </div>

      </div>
    </section>
  );
};
