import { useState } from 'react';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';

import PrimaryButton from 'src/sections/utils/PrimaryButtton';

export default function ExperianCard({ experian: { image, title, description }, id, icon }) {
  const { t, i18n } = useTranslate();
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[320px] cursor-pointer group [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]
             ${flipped ? '[transform:rotateY(180deg)]' : ''}
             md:group-hover:[transform:rotateY(180deg)]`}
      >
        <div className="absolute inset-0 rounded-lg overflow-hidden shadow-md [backface-visibility:hidden] pointer-events-auto group-hover:pointer-events-none">
          {image && (
            <img
              src={`${URL_IMAGE}/${image}`}
              alt={title}
              className="w-full h-full object-cover grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px- py-6 z-10 gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--thm-base)] rounded-full flex items-center justify-center shadow-md">
              {/* <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> */}

              <Iconify icon={icon} width={30} color="#fff" />
            </div>
            <h4 className="text-xl font-bold text-center leading-tight text-white">{title}</h4>
          </div>
        </div>

        <div className="absolute inset-0 rounded-lg shadow-md bg-white flex flex-col gap-4 justify-center px-4 py-6 [transform:rotateY(180deg)] [backface-visibility:hidden] pointer-events-none group-hover:pointer-events-auto">
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: description }}
            className="line-clamp-5"
          />
          <PrimaryButton link={`/experience/${id}`} text={t('btn.read.more')} />
        </div>
      </div>
    </div>
  );
}
