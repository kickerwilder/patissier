import React, { useState } from 'react';

interface HeroProps {
  onSelectCake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCake }) => {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-between items-center overflow-hidden bg-choco-950 text-cream-50 pt-12 sm:pt-16 pb-12"
    >
      {/* Ambient Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70 scale-105 transition-all duration-700 filter brightness-95"
          poster="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80"
        >
          <source src="images/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Chocolate Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-choco-950/80 via-choco-950/50 to-choco-900"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-choco-950/40 to-choco-950/90"></div>
      </div>

      <div className="w-full"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center my-auto py-6">
        <div className="mb-6 sm:mb-8 w-full flex justify-center">
          {!logoFailed ? (
            <img
              id="hero-main-logo"
              src="images/logo.png"
              alt="Патисьер — Магазин-кондитерская"
              className="w-[290px] sm:w-[460px] md:w-[540px] h-auto object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] filter brightness-110"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] select-none">
              <div className="relative inline-flex items-center justify-center">
                <span className="font-serif text-3xl sm:text-6xl md:text-7xl font-bold tracking-[0.25em] text-gold-400 uppercase leading-tight pl-[0.25em]">
                  ПАТИСЬЕР
                </span>
                <span className="absolute -top-1 sm:-top-2 -right-4 sm:-right-6 text-sm sm:text-xl text-gold-400 font-sans font-normal pointer-events-none">®</span>
              </div>
              <span className="font-sans text-[10px] sm:text-sm md:text-base tracking-[0.4em] text-cream-200/90 uppercase mt-2 font-medium pl-[0.4em]">
                МАГАЗИН-КОНДИТЕРСКАЯ
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12 sm:w-16 bg-gold-500/60"></div>
          <div className="w-2.5 h-2.5 rounded-full border border-gold-400 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-gold-400"></div>
          </div>
          <div className="h-[1px] w-12 sm:w-16 bg-gold-500/60"></div>
        </div>

        <h1 className="font-serif text-base sm:text-2xl md:text-3xl font-normal tracking-[0.2em] sm:tracking-[0.25em] text-gold-300 uppercase drop-shadow-md whitespace-nowrap">
          Свой мир. Без аналогов.
        </h1>
      </div>

      {/* Action Button */}
      <div className="relative z-10 w-full flex justify-center pb-2 sm:pb-4">
        <button
          id="hero-select-cake-btn"
          onClick={onSelectCake}
          className="cut-corner-btn px-10 sm:px-14 py-4 sm:py-5 bg-gold-500 hover:bg-gold-400 text-choco-950 font-bold tracking-[0.22em] text-xs sm:text-sm uppercase shadow-2xl shadow-gold-500/30 transition transform hover:scale-105 cursor-pointer"
        >
          В Ы Б Р А Т Ь &nbsp; Т О Р Т
        </button>
      </div>
    </section>
  );
};
