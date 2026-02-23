import Link from 'next/link';
import { useState, useEffect } from 'react';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';

export default function HomeBanner({ dataAbout, title6, title9, title10 }) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`absolute z-20 transform -translate-x-1/4 lg:-translate-x-1/2  ${dir === 'ltr' ? 'left-1/3 sm:left-1/3 md:left-1/5 lg:left-1/6' : 'right-1/3 sm:right-1/3 md:right-1/5 lg:right-1/6'}  translate-y-20 sm:-translate-y-1/2 top:0`}
      >
        <img
          src={`${URL_IMAGE}/${dataAbout?.image5}`}
          alt="Lady Justice"
          className="w-30 object-contain max-sm:hidden rounded-2xl"
        />
      </div>

      <section className="relative w-full h-[70vh] sm:h-[70vh] lg:h-[60vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-[250vh] lg:h-[160vh] bg-center bg-cover"
          style={{
            backgroundImage: `url(${`${URL_IMAGE}/${dataAbout?.image6}`})`,
            transform: `translateY(-${offset * 0.4}px)`,
          }}
        />

        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="relative w-full h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center h-full max-sm:h-auto">
            <div />

            <div className="text-white space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {title6}
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#b57b51]">
                {/* {headings?.choose || 'Why Clients Choose Us?'} */}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 text-justify">
                {title9}
              </p>
              <Link
                href="/services"
                className="inline-block bg-[var(--thm-base-light)] text-white hover:bg-white hover:text-black 
                  px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold transition"
              >
                {title10}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
