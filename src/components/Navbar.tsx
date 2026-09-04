import React, { useState } from 'react';
import { Menu, Phone, ShoppingBag, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  onOpenCart,
  onNavigateToSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigateToSection(sectionId);
  };

  return (
    <>
      <header
        id="navbar"
        className="sticky top-0 z-40 bg-choco-950/95 backdrop-blur-md border-b border-gold-500/20 transition-all duration-300 relative w-full"
      >
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-1.5 sm:gap-2 relative">
          {/* Left: Hamburger & Phone */}
          <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0 z-10">
            <button
              id="menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Открыть меню"
              className="flex items-center justify-center text-gold-400 hover:text-gold-300 focus:outline-none p-1 sm:p-1.5 transition cursor-pointer"
            >
              <Menu className="w-6 h-6 sm:w-6 sm:h-6" />
            </button>

            <a
              id="header-phone-link"
              href="tel:+79789114855"
              className="inline-flex items-center gap-1 sm:gap-2 text-gold-300 hover:text-gold-200 transition group whitespace-nowrap py-1"
              title="Позвонить: +7 (978) 911-48-55"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-choco-900 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 transition flex-shrink-0">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="hidden xs:inline text-[10px] sm:text-xs md:text-sm font-bold tracking-wider leading-none whitespace-nowrap">
                +7 (978) 911-48-55
              </span>
            </a>
          </div>

          {/* Center: Brand Logo - MAXIMALLY LARGE on mobile and desktop */}
          <div className="flex-1 flex items-center justify-center min-w-0 z-10 px-0.5 sm:px-4">
            <a
              id="header-brand-logo-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex flex-col items-center justify-center group select-none w-full text-center py-0.5 cursor-pointer"
              title="Патисьер — Магазин-кондитерская"
            >
              {!logoFailed ? (
                <img
                  id="header-logo-image"
                  src="images/logo.png"
                  alt="Патисьер — Магазин-кондитерская"
                  className="h-13 sm:h-14 md:h-16 w-auto max-w-[260px] sm:max-w-[360px] md:max-w-[440px] object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] filter brightness-105 group-hover:scale-105 transition-transform"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center whitespace-nowrap w-full">
                  <div className="relative inline-flex items-center justify-center leading-none">
                    <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-[0.16em] sm:tracking-[0.22em] text-gold-400 font-bold leading-none uppercase pl-[0.16em] sm:pl-[0.22em] drop-shadow-md">
                      ПАТИСЬЕР
                    </span>
                    <span className="absolute -top-1 sm:-top-2 -right-3 sm:-right-4 text-[10px] sm:text-xs text-gold-400/80 font-sans font-normal pointer-events-none">
                      ®
                    </span>
                  </div>
                  <span className="text-[8px] sm:text-[9px] md:text-[11px] tracking-[0.28em] sm:tracking-[0.38em] text-cream-200/85 uppercase mt-0.5 sm:mt-1 font-medium pl-[0.28em] sm:pl-[0.38em] whitespace-nowrap">
                    МАГАЗИН-КОНДИТЕРСКАЯ
                  </span>
                </div>
              )}
            </a>
          </div>

          {/* Right: Cart Button */}
          <div className="flex items-center justify-end flex-shrink-0 z-10">
            <button
              id="header-open-cart-btn"
              onClick={onOpenCart}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-gold-300 hover:text-gold-200 transition group whitespace-nowrap py-1 cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                <span
                  id="navbar-cart-badge"
                  className="sm:hidden absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-gold-500 text-choco-950 text-[10px] font-bold flex items-center justify-center shadow-sm"
                >
                  {totalCartCount}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase hidden sm:inline">
                Корзина
              </span>
              <span className="hidden sm:inline-flex w-4 h-4 rounded-full bg-gold-500 text-choco-950 text-[10px] font-bold items-center justify-center shadow-sm">
                {totalCartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-4/5 max-w-sm bg-choco-950 text-cream-100 shadow-2xl flex flex-col border-r border-gold-500/30 z-10 animate-in slide-in-from-left duration-300">
            <div className="p-6 border-b border-gold-500/20 flex items-center justify-between">
              <span className="font-serif text-lg font-bold text-gold-400">
                Меню «Патисьер»
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gold-400 hover:text-white p-1 transition"
                aria-label="Закрыть меню"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 space-y-4 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <button
                onClick={() => handleNavClick('manifesto')}
                className="w-full text-left py-2.5 border-b border-gold-500/10 text-cream-100 hover:text-gold-400 transition"
              >
                Философия
              </button>
              <button
                onClick={() => handleNavClick('catalog')}
                className="w-full text-left py-2.5 border-b border-gold-500/10 text-cream-100 hover:text-gold-400 transition"
              >
                Витрина десертов
              </button>
              <button
                onClick={() => handleNavClick('delivery-payment')}
                className="w-full text-left py-2.5 border-b border-gold-500/10 text-cream-100 hover:text-gold-400 transition"
              >
                Оплата и доставка
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left py-2.5 border-b border-gold-500/10 text-cream-100 hover:text-gold-400 transition"
              >
                О нас
              </button>
              <button
                onClick={() => handleNavClick('locations')}
                className="w-full text-left py-2.5 border-b border-gold-500/10 text-cream-100 hover:text-gold-400 transition"
              >
                Адреса и цех
              </button>
              <button
                onClick={() => handleNavClick('contacts')}
                className="w-full text-left py-2.5 border-b border-gold-500/10 text-cream-100 hover:text-gold-400 transition"
              >
                Контакты
              </button>
            </nav>

            <div className="p-6 bg-choco-900 border-t border-gold-500/20 space-y-3">
              <div className="text-[10px] text-cream-200/60 uppercase tracking-wider text-center">
                Связь с шеф-кондитером:
              </div>
              <div className="flex gap-2">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="cut-corner-btn flex-1 py-2.5 bg-choco-850 border border-gold-500/30 text-gold-400 text-xs font-bold text-center flex items-center justify-center gap-1.5 hover:bg-gold-500 hover:text-choco-950 transition"
                >
                  Telegram
                </a>
                <a
                  href="https://max.ru/"
                  target="_blank"
                  rel="noreferrer"
                  className="cut-corner-btn flex-1 py-2.5 bg-choco-850 border border-gold-500/30 text-gold-400 text-xs font-bold text-center flex items-center justify-center gap-1.5 hover:bg-gold-500 hover:text-choco-950 transition"
                >
                  MAX
                </a>
              </div>
              <a
                href="tel:+79789114855"
                className="cut-corner-btn block w-full py-3 bg-gold-500 text-choco-950 font-bold text-xs uppercase tracking-wider text-center shadow-lg"
              >
                Позвонить: +7 (978) 911-48-55
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
