import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCart: () => void;
  totalCartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCart,
  totalCartCount,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Sticky Header with Luxury Dark Chocolate Styling */}
      <header
        id="navbar"
        className="sticky top-0 z-40 bg-choco-950/95 backdrop-blur-md border-b border-gold-500/20 transition-all duration-300 relative w-full"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-20 sm:h-22 flex items-center justify-between gap-2 relative">
          {/* Left: Hamburger & Phone (phone always visible on desktop, phone icon on mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 z-10 min-w-[120px] sm:min-w-[180px] md:min-w-[220px]">
            <button
              id="menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Открыть меню"
              className="flex items-center justify-center text-gold-400 hover:text-gold-300 focus:outline-none p-1 sm:p-1.5 transition cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>

            <a
              id="header-phone-link"
              href="tel:+79789114855"
              className="inline-flex items-center gap-1.5 sm:gap-2.5 text-gold-300 hover:text-gold-200 transition group whitespace-nowrap py-1"
              title="Позвонить: +7 (978) 911-48-55"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-choco-900 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 transition flex-shrink-0">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400" />
              </div>
              <span className="hidden md:inline-block text-xs md:text-[13px] lg:text-sm font-bold tracking-wider leading-none whitespace-nowrap text-cream-50">
                +7 (978) 911-48-55
              </span>
            </a>
          </div>

          {/* Center: Brand Logo - MAXIMALLY LARGE & CENTERED */}
          <div className="flex-1 flex items-center justify-center min-w-0 z-10 px-1 sm:px-4">
            <a
              id="header-brand-logo-link"
              href="#"
              className="flex items-center justify-center py-1 group max-w-full"
            >
              {!logoFailed ? (
                <img
                  id="header-logo-image"
                  src="images/logo.png"
                  alt="Патисьер — Магазин-кондитерская"
                  className="h-13 sm:h-14 md:h-16 lg:h-18 w-auto max-w-[260px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[480px] object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] filter brightness-105 group-hover:scale-105 transition-transform"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <div className="text-center py-1">
                  <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-300 tracking-[0.25em] font-bold block leading-none drop-shadow-md">
                    ПАТИСЬЕР
                  </span>
                  <span className="text-[9px] sm:text-[10px] md:text-xs text-gold-400/80 tracking-[0.3em] uppercase block mt-1">
                    Магазин-кондитерская
                  </span>
                </div>
              )}
            </a>
          </div>

          {/* Right: Cart Button - matching width with left column for mathematical centering */}
          <div className="flex items-center justify-end flex-shrink-0 z-10 min-w-[120px] sm:min-w-[180px] md:min-w-[220px]">
            <button
              id="header-open-cart-btn"
              onClick={onOpenCart}
              className="inline-flex items-center gap-1.5 sm:gap-2.5 text-gold-300 hover:text-gold-200 transition group whitespace-nowrap py-1 cursor-pointer"
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
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-50 flex"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            id="mobile-menu-backdrop"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Side Drawer Panel */}
          <div
            id="mobile-menu-panel"
            className="relative w-full max-w-xs bg-choco-950 text-cream-100 h-full shadow-2xl flex flex-col z-10 border-r border-gold-500/20"
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gold-500/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-gold-400 flex items-center justify-center text-gold-300 font-serif font-bold text-xs bg-choco-900">
                  П
                </div>
                <div>
                  <div className="font-serif text-gold-300 text-sm tracking-wider font-bold">
                    ПАТИСЬЕР
                  </div>
                  <div className="text-[8px] text-cream-200/60 uppercase tracking-widest">
                    Магазин-кондитерская
                  </div>
                </div>
              </div>
              <button
                id="close-mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-gold-400 hover:text-gold-300 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-1">
              {[
                { name: 'Витрина десертов', href: '#catalog' },
                { name: 'О кондитерской', href: '#manifesto' },
                { name: 'Популярное', href: '#features' },
                { name: 'Отзывы гостей', href: '#reviews' },
                { name: 'Адрес и контакты', href: '#contacts' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg text-cream-100 hover:text-gold-300 hover:bg-choco-900/50 transition text-sm font-medium border-b border-gold-500/10"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-gold-500/40" />
                </a>
              ))}
            </nav>

            {/* Drawer Footer Contact Info */}
            <div className="p-4 sm:p-5 border-t border-gold-500/20 bg-choco-900/40 space-y-3">
              <a
                href="tel:+79789114855"
                className="flex items-center gap-3 text-gold-300 font-bold text-sm hover:text-gold-200"
              >
                <div className="w-7 h-7 rounded-full bg-choco-900 border border-gold-500/30 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <span>+7 (978) 911-48-55</span>
              </a>
              <div className="text-[11px] text-cream-200/70 leading-relaxed">
                г. Симферополь, проспект Кирова, 32/1
                <br />
                Ежедневно с 09:00 до 21:00
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
