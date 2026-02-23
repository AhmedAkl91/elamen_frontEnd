'use client';

import Link from 'next/link';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslate } from 'src/locales';
import bg from 'src/assets/servicios_slide.jpg'; // Use the correct image path

export function PageBreadcrumb({ title, page, parent, url, text }) {
  const { t, currentLang, i18n } = useTranslate();
  const dir = i18n.dir();
  const upMd = useResponsive('down', 'md');

  return (
    <>
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background image */}
        <img
          src={bg.src} // <-- replace with your image path
          alt="Industrial filter structure"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-2/3 bg-black/30 h-full py-20 px-3">
                <h1 className="text-white font-bold uppercase leading-tight tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                  {t(title)}
                </h1>

                <div className="mt-6 h-[2px] w-24 bg-red-600" />

                <p className="mt-6 max-w-2xl text-gray-200 text-base sm:text-lg">{t(text)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="text-xl font-semibold inline-block pb-2">
            {t('page.home')}
          </Link>

          {parent && (
            <>
              <span className="px-3">/</span>

              <Link href={url} className="text-xl font-semibold inline-block pb-2">
                {t(`${parent}`)}
              </Link>
            </>
          )}
          <span className="px-3">/</span>
          <h1 className="text-xl font-semibold inline-block pb-2">{t(title)}</h1>
        </div>
      </section>
    </>
  );
}
