import React from 'react';
import { handleImageError } from '../utils/imageFallback';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-choco-850 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="relative inline-block max-w-sm mx-auto">
              <div className="cut-corner-card relative overflow-hidden shadow-2xl border-2 border-gold-500/40 bg-choco-950">
                <img
                  src="images/anastasia.jpeg"
                  alt="Анастасия Воробьева"
                  onError={(e) => handleImageError(e, 'anastasia')}
                  className="w-full h-[440px] sm:h-[500px] object-cover object-top filter contrast-105"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-serif text-2xl font-bold text-gold-400">
                  Анастасия Воробьева
                </h4>
                <p className="text-xs uppercase tracking-widest text-cream-200/80 mt-0.5">
                  Основатель и шеф-кондитер «Патисьер»
                </p>
              </div>
            </div>
          </div>

          {/* Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="cut-corner-btn inline-block px-4 py-1.5 border border-gold-500/30 bg-choco-950 text-gold-300 text-xs uppercase tracking-widest">
              История создания
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-cream-50">
              «Здравствуйте, меня зовут Анастасия! <br />
              <span className="italic text-gold-300 font-light">
                Хочу поделиться с Вами своей историей…»
              </span>
            </h2>

            <div className="space-y-4 text-cream-200/90 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Идея создания тортов пришла в канун 90-го дня рождения моей бабушки. Я с детства помню её волшебный «Наполеон» со вкусом пломбира. Трудные были времена, когда за сливочным маслом нужно было стоять в очереди и приходилось экономить на всём, и наш любимый торт не был исключением.
              </p>
              <p className="font-serif text-lg italic text-gold-200 border-l-2 border-gold-400 pl-4 py-1 my-2">
                «Мне, как ребёнку, всегда хотелось побольше крема в бабушкином волшебстве».
              </p>
              <p>
                Готовясь к бабушкиному юбилею, хотелось её удивить и порадовать, хотя человека, пережившего войну, ничем не порадуешь, кроме своего звонка и приезда с внуками. К тому времени бабушка своим «Наполеоном» нас давно не баловала — уже тяжело было стоять целый день на кухне.
              </p>
              <p>
                И я решила приготовить бабушкин «Наполеон» и, конечно, воплотить свою детскую мечту: <strong>«Чтоб там было много крема»</strong>. Так появился наш фирменный «Наполеон» по семейному рецепту.
              </p>
            </div>

            <div className="pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-cream-200/70 font-light">
                С любовью к честному вкусу и традициям семьи.
              </div>
              <span className="font-serif text-xl italic text-gold-400">
                Анастасия Воробьева
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
