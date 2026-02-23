import { useState } from 'react';

import { useTranslate } from 'src/locales';
// import CardsDots from 'src/assets/cards-dots.webp';

import { Iconify } from 'src/components/iconify';

import PrimaryButton from 'src/sections/utils/PrimaryButtton';

export default function ExperianCard({ product: { main_image, name, description, id } }) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="bg-transparent  shadow overflow-hidden cursor-pointer">
      <div
        className="h-[320px] cursor-pointer group [perspective:1000px]"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]
          ${flipped ? '[transform:rotateY(180deg)]' : ''}
          md:group-hover:[transform:rotateY(180deg)]`}
        >
          <div className="absolute inset-0  overflow-hidden shadow-md [backface-visibility:hidden] pointer-events-auto group-hover:pointer-events-none">
            {main_image && (
              <img src={main_image} alt={name} className="w-full h-full object-cover grayscale" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px- py-6 z-10 gap-4">
              <div className="w-4 h4 sm:w-7 sm:h-7 bg-transparent border-1 border-[#ffffffbd] rounded-full flex items-center justify-center shadow-md">
                {/* <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> */}

                <Iconify icon="weui:arrow-outlined" width={40} color="#ffffffbd" />
              </div>
            </div>
          </div>

          <div className="absolute inset-0  shadow-md bg-white flex flex-col gap-4 justify-center px-4 py-6 [transform:rotateY(180deg)] [backface-visibility:hidden] pointer-events-none group-hover:pointer-events-auto">
            <h4 className="text-xl font-bold text-center leading-tight text-[var(--thm-base)]">
              {name}
            </h4>

            <p className="line-clamp-3">{description}</p>
            <div className="mx-auto">
              <PrimaryButton link={`products/${id}`} text={t('btn.read.more')} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-center bg-red-600 text-white font-semibold">{name}</div>
    </div>
  );
}
