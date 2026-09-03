import React from 'react';

export const DeliveryPayment: React.FC = () => {
  return (
    <section
      id="delivery-payment"
      className="py-20 sm:py-24 bg-gradient-to-b from-choco-950 via-choco-900 to-choco-850 border-b border-gold-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Условия сервиса
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-cream-50 mt-2">
            Оплата и доставка
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4"></div>
          <p className="text-xs sm:text-sm text-cream-200/70 mt-3 font-light">
            Бережно изготавливаем и доставляем премиальные десерты по Симферополю
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 01 */}
          <div className="cut-corner-card bg-choco-950/90 p-6 border border-gold-500/25 flex flex-col justify-between hover:border-gold-500/60 transition shadow-lg">
            <div>
              <div className="cut-corner-btn w-12 h-12 bg-choco-900 border border-gold-500/40 text-gold-400 font-serif font-bold text-xl flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-cream-50 mb-2">
                Предзаказ за 24 часа
              </h3>
              <p className="text-xs text-cream-200/80 leading-relaxed font-light">
                Мы не замораживаем торты впрок. Каждый десерт выпекается и собирается шеф-кондитером строго под дату и время вашего торжества.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gold-500/15 text-[11px] text-gold-400 font-semibold">
              100% свежесть гарантирована
            </div>
          </div>

          {/* Card 02 */}
          <div className="cut-corner-card bg-choco-950/90 p-6 border border-gold-500/25 flex flex-col justify-between hover:border-gold-500/60 transition shadow-lg">
            <div>
              <div className="cut-corner-btn w-12 h-12 bg-choco-900 border border-gold-500/40 text-gold-400 font-serif font-bold text-xl flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-cream-50 mb-2">
                Доставка в термобоксах
              </h3>
              <p className="text-xs text-cream-200/80 leading-relaxed font-light">
                Специальная автодоставка с контролем температуры: крем и декор сохраняют безупречный ресторанный вид.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gold-500/15 text-[11px] text-gold-300">
              <strong>Бесплатно</strong> при заказе от 5 000 ₽ <br />
              <span className="text-cream-200/60">(до 5 000 ₽ — 350 ₽ по городу)</span>
            </div>
          </div>

          {/* Card 03 */}
          <div className="cut-corner-card bg-choco-950/90 p-6 border border-gold-500/25 flex flex-col justify-between hover:border-gold-500/60 transition shadow-lg">
            <div>
              <div className="cut-corner-btn w-12 h-12 bg-choco-900 border border-gold-500/40 text-gold-400 font-serif font-bold text-xl flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-cream-50 mb-2">
                Бесплатный самовывоз
              </h3>
              <p className="text-xs text-cream-200/80 leading-relaxed font-light">
                Вы можете забрать готовый заказ в удобной брендовой коробке из нашего кондитерского цеха или магазина.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gold-500/15 text-[11px] text-cream-200/90">
              • Евпаторийское ш., 5б (Цех)<br />
              • ул. Шполянской, 6 (Магазин)
            </div>
          </div>

          {/* Card 04 */}
          <div className="cut-corner-card bg-choco-950/90 p-6 border border-gold-500/25 flex flex-col justify-between hover:border-gold-500/60 transition shadow-lg">
            <div>
              <div className="cut-corner-btn w-12 h-12 bg-choco-900 border border-gold-500/40 text-gold-400 font-serif font-bold text-xl flex items-center justify-center mb-4">
                04
              </div>
              <h3 className="font-serif text-xl font-bold text-cream-50 mb-2">
                Безопасная оплата
              </h3>
              <p className="text-xs text-cream-200/80 leading-relaxed font-light">
                Оформляйте заявку на сайте. Менеджер свяжется с вами, уточнит детали, надпись на торте и подтвердит бронь даты.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gold-500/15 text-[11px] text-gold-400 font-semibold">
              СБП • Перевод • Картой при получении
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
