import React, { useState } from 'react';
import { Phone, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer id="contacts" className="bg-choco-950 text-cream-100 pt-16 sm:pt-20 pb-12 border-t border-gold-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-gold-500/20">
          
          {/* Brand & Social Column */}
          <div className="md:col-span-5 space-y-4">
            {!logoFailed ? (
              <img
                src="images/logo.png"
                alt="Патисьер"
                onError={() => setLogoFailed(true)}
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-md"
              />
            ) : (
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-gold-400">
                  ПАТИСЬЕР®
                </span>
                <span className="text-[9px] tracking-[0.25em] text-cream-200/70 uppercase">
                  МАГАЗИН-КОНДИТЕРСКАЯ
                </span>
              </div>
            )}

            <p className="text-xs text-cream-200/80 max-w-sm leading-relaxed font-light">
              «Патисьер. Свой мир. Без аналогов». Высокое кондитерское искусство на страже чистоты вкуса и семейных традиций.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="cut-corner-btn px-3 h-10 bg-choco-900 border border-gold-500/30 flex items-center justify-center gap-1.5 text-gold-400 hover:bg-gold-500 hover:text-choco-950 transition text-xs font-semibold"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>

              <a
                href="https://max.ru/"
                target="_blank"
                rel="noreferrer"
                className="cut-corner-btn px-3.5 h-10 bg-choco-900 border border-gold-500/30 flex items-center justify-center text-xs font-bold text-gold-400 hover:bg-gold-500 hover:text-choco-950 transition"
                title="Max"
              >
                MAX
              </a>

              <a
                href="tel:+79789114855"
                className="cut-corner-btn px-4 h-10 bg-choco-900 border border-gold-500/30 flex items-center justify-center gap-1.5 text-xs font-semibold text-gold-400 hover:bg-gold-500 hover:text-choco-950 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+7 (978) 911-48-55</span>
              </a>
            </div>
          </div>

          {/* Locations summary Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-bold text-gold-400">г. Симферополь</h4>
            <ul className="space-y-3 text-xs text-cream-200/90">
              <li className="flex items-start gap-2">
                <span className="text-gold-400 font-bold">•</span>
                <div>
                  <strong>Евпаторийское шоссе, 5б</strong>
                  <span className="block text-[11px] text-gold-300">
                    Кондитерский цех и Главный магазин (самовывоз)
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-400 font-bold">•</span>
                <div>
                  <strong>ул. Шполянской, 6</strong>
                  <span className="block text-[11px] text-cream-200/70">
                    Магазин-кондитерская
                  </span>
                </div>
              </li>
            </ul>
            <p className="text-[11px] text-cream-200/60 pt-2 font-light">
              Прием онлайн-заказов: ежедневно с 09:00 до 20:00
            </p>
          </div>

          {/* Legal Requisites Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-gold-400">О предприятии</h4>
            <div className="text-xs text-cream-200/80 space-y-1.5 font-light">
              <p><strong>ИП:</strong> Воробьева Анастасия Андреевна</p>
              <p><strong>Юр. адрес:</strong> 295047, РК, г. Симферополь, Евпаторийское шоссе, 5б</p>
              <p><strong>ОГРН:</strong> 321911200092192</p>
              <p><strong>ИНН:</strong> 910202897673</p>
            </div>
            <div className="pt-2 flex flex-col space-y-1 text-[11px] text-gold-300/80">
              <a href="#" className="hover:text-white transition">
                Политика конфиденциальности (152-ФЗ)
              </a>
              <a href="#" className="hover:text-white transition">
                Публичная оферта и условия доставки
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-cream-200/50 gap-4">
          <div>© 2026 Кондитерская «Патисьер». Все права защищены.</div>
          <div>Серверная база данных размещена в РФ по 152-ФЗ.</div>
        </div>

      </div>
    </footer>
  );
};
