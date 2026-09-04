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
      <div className="relative w-full overflow-hidden mb-4 sm:mb-6 md:mb-8 min-h-[300px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] flex items-center bg-choco-950">
        
        {/* Right Photo Layer: Natural 1:1 square ratio preserved on desktop, no distorted macro zoom */}
        <div className="absolute right-0 top-0 bottom-0 w-[64%] sm:w-[58%] md:w-[52%] lg:w-[48%] xl:w-[45%] z-0 pointer-events-none select-none overflow-hidden flex items-center justify-end">
          <div className="relative w-full h-full md:aspect-square md:max-h-full flex items-center justify-end">
            <img
              src="images/philosophy-video.jpg"
              alt="Натюрморт Патисьер"
              onError={(e) => handleImageError(e, 'philosophy')}
              className="w-full h-full object-cover object-[center_center] filter brightness-105 contrast-105"
            />
            {/* Seamless edge-only feathering: gradual fade into dark chocolate background */}
            <div className="absolute inset-y-0 left-0 w-[24%] md:w-[26%] bg-gradient-to-r from-choco-950 from-0% via-choco-950/75 via-[25%] via-choco-950/20 via-[60%] to-transparent to-[100%] pointer-events-none"></div>
            {/* Top & bottom subtle fusions */}
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-choco-950 to-transparent pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-choco-950 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Content Container aligned with site grid */}
        <div className="max-w-6xl mx-auto w-full px-3.5 sm:px-6 lg:px-8 relative z-10 flex items-center">
          {/* Left Column: Text sitting in its clean zone with heading boldly extending onto photo */}
          <div className="w-[54%] sm:w-[50%] md:w-[50%] pr-1 sm:pr-4 py-2 text-left flex flex-col justify-center">
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
                {/* Left round circle with center dot */}
                <circle cx="22.8" cy="7" r="4.2" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="22.8" cy="7" r="1.3" fill="currentColor" />
                {/* Vertical perpendicular bar at junction */}
                <line x1="27" y1="2.8" x2="27" y2="11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                {/* Right round circle with center dot */}
                <circle cx="31.2" cy="7" r="4.2" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="31.2" cy="7" r="1.3" fill="currentColor" />
                {/* Right horizontal line */}
                <line x1="35.4" y1="7" x2="52" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent via-gold-500/80 to-gold-400"></div>
            </div>

            {/* Manifesto text: EXACT SAME font size as the two lower cards (text-[10.5px] sm:text-[13.5px] md:text-[15px] lg:text-base) */}
            <div className="text-[10px] min-[380px]:text-[10.5px] sm:text-[13.5px] md:text-[15px] lg:text-base text-cream-50 leading-[1.38] sm:leading-[1.5] font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
              <div className="whitespace-nowrap">Мы убеждены: то, что создаётся</div>
              <div className="whitespace-nowrap">для людей, должно соответствовать</div>
              <div className="whitespace-nowrap">стандартам, которые мы предъявляем</div>
              <div className="whitespace-nowrap">сами себе. Поэтому мы не ищем</div>
              <div className="whitespace-nowrap">лёгких путей там, где они ухудшают</div>
              <div className="whitespace-nowrap">итоговый результат.</div>
            </div>
          </div>
        </div>

      </div>

      {/* 2. LOWER SECTION: Two Cards + Lowered Action Button */}
      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8 w-full pb-6 sm:pb-10">

        {/* TWO LOWER FRAMED CARDS */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
          
          {/* Card 1: Без заменителей и компромиссов (Leaf Icon, all white text, left-aligned paragraphs) */}
          <div className="rounded-lg bg-choco-950/85 p-2 sm:p-3.5 md:p-5 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 flex flex-col items-center justify-between shadow-lg">
            <div className="space-y-1 sm:space-y-2 w-full">
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

              <h3 className="font-serif font-bold text-[15px] sm:text-xl md:text-2xl lg:text-[26px] text-cream-50 leading-tight text-center tracking-wide">
                Без заменителей <br /> и компромиссов
              </h3>

              {/* Minimalist Divider: Line - Dot - Line */}
              <div className="flex items-center justify-center gap-1.5 py-0.5">
                <div className="h-[1px] w-5 sm:w-10 bg-gold-500/40"></div>
                <div className="w-1 h-1 rounded-full bg-gold-400"></div>
                <div className="h-[1px] w-5 sm:w-10 bg-gold-500/40"></div>
              </div>

              {/* Maximized paragraph text */}
              <p className="text-left text-[10.5px] sm:text-[13.5px] md:text-[15px] lg:text-base text-cream-50 leading-[1.35] sm:leading-relaxed font-light">
                Мы используем настоящее сливочное масло 82%, натуральные сливки, яйца, шоколад, орехи, ягоды и другие ингредиенты, которые формируют характер и вкус каждого торта.
              </p>

              {/* Center Golden Dot */}
              <div className="flex justify-center py-0.5">
                <div className="w-1 h-1 rounded-full bg-gold-400"></div>
              </div>

              {/* Maximized paragraph text */}
              <p className="text-left text-[10px] sm:text-[12.5px] md:text-sm lg:text-[15px] text-cream-50 leading-[1.35] sm:leading-relaxed font-light">
                Мы не используем дешёвые заменители животных жиров, растительные сливки, улучшители, загустители, стабилизаторы и другие вредные ингредиенты.
              </p>
            </div>
          </div>

          {/* Card 2: Создано в Патисьер (Planetary Stand Mixer Icon, left-aligned paragraphs, gold final sentence) */}
          <div className="rounded-lg bg-choco-950/85 p-2 sm:p-3.5 md:p-5 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 flex flex-col items-center justify-between shadow-lg">
            <div className="space-y-1 sm:space-y-2 w-full">
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

              <h3 className="font-serif font-bold text-[15px] sm:text-xl md:text-2xl lg:text-[26px] text-cream-50 leading-tight text-center tracking-wide">
                Создано <br /> в Патисьер
              </h3>

              {/* Minimalist Divider: Line - Dot - Line */}
              <div className="flex items-center justify-center gap-1.5 py-0.5">
                <div className="h-[1px] w-5 sm:w-10 bg-gold-500/40"></div>
                <div className="w-1 h-1 rounded-full bg-gold-400"></div>
                <div className="h-[1px] w-5 sm:w-10 bg-gold-500/40"></div>
              </div>

              {/* Maximized paragraph text */}
              <p className="text-left text-[10.5px] sm:text-[13.5px] md:text-[15px] lg:text-base text-cream-50 leading-[1.35] sm:leading-relaxed font-light">
                Наши торты создаются в собственной кондитерской. Мы контролируем весь процесс — от приготовления до момента, когда торт попадает на витрину.
              </p>

              {/* Center Golden Dot */}
              <div className="flex justify-center py-0.5">
                <div className="w-1 h-1 rounded-full bg-gold-400"></div>
              </div>

              {/* Maximized paragraph text */}
              <p className="text-left text-[10px] sm:text-[12.5px] md:text-sm lg:text-[15px] text-cream-50 leading-[1.35] sm:leading-relaxed font-light">
                Мы не покупаем чужие торты для продажи и не продаём свои торты в других заведениях.
              </p>

              {/* Maximized gold final sentence */}
              <p className="text-left text-[10px] sm:text-[12.5px] md:text-sm lg:text-[15px] text-gold-300 font-medium leading-[1.35] sm:leading-relaxed pt-0.5">
                Наши торты можно купить только в кондитерских Патисьер.
              </p>
            </div>
          </div>

        </div>

        {/* 3. WIDE ACTION BUTTON: "ВЫБРАТЬ ТОРТ" - lowered with ample breathing room */}
        <div className="flex justify-center pt-1 pb-4 sm:pb-6">
          <button
            id="philosophy-select-cake-btn"
            onClick={onSelectCake}
            className="w-full max-w-sm sm:max-w-md py-3 sm:py-3.5 px-6 sm:px-10 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-choco-950 font-bold uppercase tracking-[0.22em] text-[11px] sm:text-xs rounded shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            В Ы Б Р А Т Ь &nbsp; Т О Р Т
          </button>
        </div>

      </div>
    </section>
  );
};
