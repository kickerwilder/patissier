import React, { useState } from 'react';

interface PhilosophyProps {
  onSelectCake: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onSelectCake }) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="manifesto"
      className="py-16 sm:py-24 bg-gradient-to-b from-choco-900 via-choco-850 to-choco-800 border-t border-b border-gold-500/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Tag */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <div className="h-[1px] w-10 sm:w-14 bg-gold-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-gold-400"></div>
            <div className="h-[1px] w-10 sm:w-14 bg-gold-500/50"></div>
          </div>
          <span className="text-xs uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Философия
          </span>
        </div>

        {/* 1. TOP WIDE RECTANGULAR BLOCK (Slim Text left + Wide Bright Video right simultaneously) */}
        <div className="cut-corner-card relative overflow-hidden shadow-2xl border border-gold-500/30 bg-choco-950 mb-6 sm:mb-10">
          <div className="flex flex-row items-stretch min-h-[360px] sm:min-h-[420px] md:min-h-[460px]">
            
            {/* Left: Manifesto Text (Slim Column, Content stretches cleanly from top to bottom) */}
            <div className="w-[44%] sm:w-[38%] md:w-[32%] lg:w-[30%] p-3.5 sm:p-6 md:p-8 flex flex-col justify-between z-10 bg-choco-950 flex-shrink-0">
              {/* Top: Section Tag & Title */}
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-400/90 font-medium block">
                  Манифест чистоты
                </span>
                <h2 className="font-serif text-sm sm:text-2xl lg:text-3xl text-cream-50 leading-[1.16] font-normal">
                  Делаем для других, <br />
                  <span className="italic text-gold-300 font-light">как для себя</span>
                </h2>
              </div>

              {/* Middle: Divider & Main Paragraph */}
              <div className="py-2 space-y-2 sm:space-y-3">
                {/* Minimalist Divider: Line - Dot - Line */}
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-6 sm:w-10 bg-gold-500/60"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full border border-gold-400 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-gold-400"></div>
                  </div>
                  <div className="h-[1px] w-6 sm:w-10 bg-gold-500/60"></div>
                </div>

                <p className="text-[10px] sm:text-xs md:text-sm text-cream-100/90 leading-relaxed font-light">
                  Мы убеждены: то, что создаётся для людей, должно соответствовать стандартам, которые мы предъявляем самим себе. Поэтому мы не ищем лёгких путей там, где они ухудшают итоговый результат.
                </p>
              </div>

              {/* Bottom: Elegant Hallmark (matches 2 lower cards) */}
              <div className="pt-2 sm:pt-3 border-t border-gold-500/20">
                <span className="text-[8px] sm:text-[10px] text-gold-400/80 font-serif tracking-wider uppercase block">
                  Честный состав • Без компромиссов
                </span>
              </div>
            </div>

            {/* Right: Vertical Video Frame (Wide, Bright, Minimalist edge fade, NO heavy fog) */}
            <div className="w-[56%] sm:w-[62%] md:w-[68%] lg:w-[70%] relative bg-choco-950 flex items-center justify-center overflow-hidden">
              {/* Very narrow transition fade at the very edge */}
              <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-6 md:w-8 bg-gradient-to-r from-choco-950 to-transparent z-10 pointer-events-none"></div>

              {!videoError ? (
                <video
                  id="philosophy-vertical-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover object-center aspect-[9/16] transition-transform duration-700 hover:scale-105"
                  poster="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
                >
                  <source src="images/philosophy-video.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src="images/napoleon-macro.jpeg"
                  alt="Кондитерский процесс Патисьер"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover object-center aspect-[9/16]"
                />
              )}
            </div>

          </div>
        </div>

        {/* 2. TWO LOWER RECTANGULAR BLOCKS - STRICTLY 2 COLUMNS IN ONE ROW ON MOBILE AND DESKTOP */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-12">
          
          {/* Block 1: Без заменителей и компромиссов */}
          <div className="cut-corner-card bg-choco-950/70 p-4 sm:p-8 border border-gold-500/25 flex flex-col items-center text-center justify-between space-y-3 sm:space-y-4 hover:border-gold-500/60 transition shadow-lg">
            <div className="space-y-2 sm:space-y-3 w-full">
              <h3 className="font-serif text-base sm:text-2xl lg:text-3xl text-cream-50 font-normal leading-tight">
                Без заменителей <br className="hidden sm:inline" /> и компромиссов
              </h3>

              {/* Minimalist Divider: Line - Dot - Line */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 py-1">
                <div className="h-[1px] w-6 sm:w-10 bg-gold-500/50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400"></div>
                <div className="h-[1px] w-6 sm:w-10 bg-gold-500/50"></div>
              </div>

              <p className="text-[11px] sm:text-sm text-cream-200/85 leading-relaxed font-light">
                Мы используем настоящее сливочное масло 82.5%, натуральные сливки, яйца, шоколад, орехи и свежие ягоды, которые формируют богатый вкус торта.
              </p>
            </div>

            <div className="pt-2 border-t border-gold-500/15 w-full">
              <p className="text-[10px] sm:text-xs text-cream-200/70 leading-relaxed font-light">
                Без растительных сливок, пальмового масла, стабилизаторов и вредных загустителей.
              </p>
            </div>
          </div>

          {/* Block 2: Создано в Патисьер */}
          <div className="cut-corner-card bg-choco-950/70 p-4 sm:p-8 border border-gold-500/25 flex flex-col items-center text-center justify-between space-y-3 sm:space-y-4 hover:border-gold-500/60 transition shadow-lg">
            <div className="space-y-2 sm:space-y-3 w-full">
              <h3 className="font-serif text-base sm:text-2xl lg:text-3xl text-cream-50 font-normal leading-tight">
                Создано <br className="hidden sm:inline" /> в <span className="italic text-gold-300">Патисьер</span>
              </h3>

              {/* Minimalist Divider: Line - Dot - Line */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 py-1">
                <div className="h-[1px] w-6 sm:w-10 bg-gold-500/50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400"></div>
                <div className="h-[1px] w-6 sm:w-10 bg-gold-500/50"></div>
              </div>

              <p className="text-[11px] sm:text-sm text-cream-200/85 leading-relaxed font-light">
                Наши десерты создаются в собственном цехе в Симферополе. Мы лично контролируем весь путь — от первого взбивания крема до передачи заказа вам.
              </p>
            </div>

            <div className="pt-2 border-t border-gold-500/15 w-full">
              <p className="text-[10px] sm:text-xs text-gold-300 font-semibold leading-relaxed">
                Наши торты можно купить исключительно в кондитерских «Патисьер».
              </p>
            </div>
          </div>

        </div>

        {/* 3. Action Button */}
        <div className="flex justify-center">
          <button
            id="philosophy-select-cake-btn"
            onClick={onSelectCake}
            className="cut-corner-btn px-10 sm:px-16 py-3.5 sm:py-4 bg-gold-500 hover:bg-gold-400 text-choco-950 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase shadow-xl shadow-gold-500/25 transition transform hover:scale-105 cursor-pointer"
          >
            В Ы Б Р А Т Ь &nbsp; Т О Р Т
          </button>
        </div>

      </div>
    </section>
  );
};
