import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-20 sm:py-24 bg-choco-900 border-t border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Симферополь
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-cream-50 mt-2">
            Кондитерский цех и магазины
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Main Workshop */}
          <div className="cut-corner-card bg-choco-850 p-8 border-2 border-gold-500 shadow-2xl relative flex flex-col justify-between">
            <div>
              <div className="cut-corner-btn inline-block bg-gold-500 text-choco-950 text-[10px] uppercase font-bold tracking-widest px-4 py-1 mb-4 shadow">
                Кондитерский цех и Главный магазин
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream-50 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>Евпаторийское шоссе, 5б</span>
              </h3>
              <p className="text-sm text-gold-400 font-semibold mt-1">
                Центральное производство и флагманский магазин
              </p>
              <p className="text-xs text-cream-200/80 mt-3 leading-relaxed font-light">
                Здесь расположен наш кондитерский цех, где выпекаются все торты, а также магазин со свежими десертами. <strong>Основная точка самовывоза предзаказов.</strong>
              </p>
            </div>
            <a
              href="https://yandex.ru/maps/?text=Симферополь+Евпаторийское+шоссе+5б"
              target="_blank"
              rel="noreferrer"
              className="cut-corner-btn inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-white mt-6 uppercase tracking-wider transition"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Построить маршрут &raquo;</span>
            </a>
          </div>

          {/* City Store */}
          <div className="cut-corner-card bg-choco-850/80 p-8 border border-gold-500/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="cut-corner-btn inline-block bg-choco-800 border border-gold-500/30 text-gold-300 text-[10px] uppercase font-bold tracking-widest px-4 py-1 mb-4">
                Магазин-кондитерская
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream-50 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>ул. Шполянской, 6</span>
              </h3>
              <p className="text-sm text-cream-200/70 font-medium mt-1">
                Фирменный магазин
              </p>
              <p className="text-xs text-cream-200/70 mt-3 leading-relaxed font-light">
                Уютный фирменный магазин кондитерских изделий в Симферополе. Витрина со свежими порционными десертами, авторский кофе и выдача предзаказов.
              </p>
            </div>
            <a
              href="https://yandex.ru/maps/?text=Симферополь+ул+Шполянской+6"
              target="_blank"
              rel="noreferrer"
              className="cut-corner-btn inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-white mt-6 uppercase tracking-wider transition"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Построить маршрут &raquo;</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
