import 'swiper/css';
import Link from 'next/link';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { m, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import { useResponsive } from 'src/hooks/use-responsive';

import { useTranslate } from 'src/locales';
import { useGetSlidersListQuery } from 'src/redux/api/front/api-slider';
import { useGetConfigSettingQuery } from 'src/redux/api/front/api-config-setting';

import { Iconify } from 'src/components/iconify';

import SlideImageMobile from './components/slide-image-mobile ';
import SlideImageDesktop from './components/slide-image-desktop';

export default function HomeHero() {
  const [DataSliders, setDataSliders] = useState([]);
  const { data: sliders, isLoading } = useGetSlidersListQuery();

  const [dataSetting, setDataSetting] = useState(null);
  const { data: configuration } = useGetConfigSettingQuery();

  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  // ------------------------------
  // Load API data
  // ------------------------------
  useEffect(() => {
    if (sliders?.sliders?.sliders) {
      setDataSliders(sliders.sliders.sliders.filter((item) => item?.published));
    }

    if (configuration) {
      setDataSetting(configuration);
    }
  }, [sliders, configuration]);

  // ------------------------------
  // States
  // ------------------------------
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const progressInterval = useRef(null);

  // ------------------------------
  // Move to next slide
  // ------------------------------
  const moveToNextSlide = useCallback(() => {
    if (!DataSliders.length) return;
    const next = (activeSlide + 1) % DataSliders.length;
    setActiveSlide(next);
    swiperRef.current?.slideTo(next);
  }, [activeSlide, DataSliders.length]);

  // ------------------------------
  // Progress bar timer
  // ------------------------------
  useEffect(() => {
    if (!DataSliders.length) return;

    setProgress(0);
    if (progressInterval.current) clearInterval(progressInterval.current);

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          moveToNextSlide();
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval.current);
  }, [activeSlide, DataSliders.length, moveToNextSlide]);

  // ------------------------------
  // Manual slide change
  // ------------------------------
  const handleSlideChange = useCallback((swiper) => {
    setActiveSlide(swiper.activeIndex);
    setProgress(0);
  }, []);

  // ------------------------------
  // Dot click
  // ------------------------------
  const handleDotClick = useCallback((index) => {
    clearInterval(progressInterval.current);
    setActiveSlide(index);
    setProgress(0);
    swiperRef.current?.slideTo(index);
  }, []);

  const upMd = useResponsive('down', 'md');

  // ------------------------------
  // UI
  // ------------------------------
  return (
    <section className="relative h-[100vh] overflow-hidden bg-black">
      {isLoading ? (
        <p className="text-white text-center mt-20">Loading...</p>
      ) : !DataSliders.length ? (
        <p className="text-white text-center mt-20">No data found.</p>
      ) : (
        <>
          {/* SLIDER */}
          <Swiper
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            allowTouchMove={false}
            className="h-full"
            // eslint-disable-next-line no-return-assign
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={handleSlideChange}
          >
            {DataSliders.map((slide, index) => {
              const trans = slide?.translations?.[currentLang.value];
              return (
                <SwiperSlide key={slide.id}>
                  <div className="relative h-full w-full">
                    {!upMd ? (
                      <SlideImageDesktop
                        dir={dir}
                        slide={slide}
                        currentLang={currentLang}
                        activeSlide={activeSlide}
                        index={index}
                      />
                    ) : (
                      <SlideImageMobile
                        dir={dir}
                        slide={slide}
                        currentLang={currentLang}
                        activeSlide={activeSlide}
                        index={index}
                      />
                    )}

                    <div className="relative bottom-0 flex h-full items-center">
                      <div className="container mx-auto px-6 md:px-10">
                        <div className="max-w-2xl  max-sm:absolute bottom-10">
                          <AnimatePresence mode="wait">
                            {activeSlide === index && (
                              <m.h1
                                className="my-6 text-4xl font-bold text-[var(--thm-base-3)] md:text-6xl lg:text-6xl leading-10 max-sm:leading-5 max-sm:text-2xl"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ delay: 0.35, duration: 1 }}
                              >
                                {trans?.heading}
                              </m.h1>
                            )}
                          </AnimatePresence>

                          <AnimatePresence mode="wait">
                            {activeSlide === index && (
                              <m.p
                                className="mb-8 text-base text-gray-300 max-sm:text-white md:text-lg lg:text-xl"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                              >
                                {trans?.subject}
                              </m.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* BOTTOM CONTROLS */}
          <div className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 w-full">
            <div
              className={`container mx-auto px-6 md:px-10 flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4 pb-4 ${
                dir === 'ltr' ? 'md:pr-[10vw]' : 'md:pl-[10vw]'
              }`}
            >
              {/* DOTS */}
              <div className="flex flex-col space-y-0 md:space-y-2 max-sm:hidden">
                {DataSliders.map((slide, index) => {
                  const trans = slide.translations[currentLang.value];
                  return (
                    <m.div
                      key={slide.id}
                      className="flex items-center space-x-3 cursor-pointer"
                      onClick={() => handleDotClick(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="relative h-5 w-5">
                        <svg className="h-5 w-5 -rotate-90" viewBox="0 0 48 48">
                          <circle cx="24" cy="24" r="20" strokeWidth="2" fill="transparent" />

                          <m.circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="3"
                            fill="transparent"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 20}`}
                            strokeDashoffset={
                              activeSlide === index
                                ? `${2 * Math.PI * 20 * (1 - progress / 100)}`
                                : `${2 * Math.PI * 20}`
                            }
                            transition={{ duration: 0.1 }}
                          />
                        </svg>

                        <m.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{ scale: activeSlide === index ? 1.2 : 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className={`h-1 w-1 rounded-full ${
                              activeSlide === index ? 'bg-gray-300' : 'bg-white/50'
                            }`}
                          />
                        </m.div>
                      </div>

                      <m.p
                        className={`md:text-lg text-sm font-medium ${
                          activeSlide === index ? 'text-white' : 'text-white/60'
                        }`}
                        animate={{
                          x: activeSlide === index ? 0 : -10,
                          opacity: activeSlide === index ? 1 : 0.6,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {trans?.heading}
                      </m.p>
                    </m.div>
                  );
                })}
              </div>

              {/* CALL BUTTON */}
              <m.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                <m.a
                  href={`tel:${dataSetting?.configuration[currentLang.value].phone1}`}
                  className="flex items-center rounded-full bg-gradient-to-r from-[var(--thm-base)] to-[var(--thm-base-light)] px-2 py-1 md:px-4 md:py-1 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex gap-2 items-center md:text-lg text-sm">
                    <div className="w-5 h-5 md:h-9 md:w-9 bg-[linear-gradient(-55deg,var(--thm-base-dark)_0%,var(--thm-base)_51%,var(--thm-base)_100%)] rounded-full flex items-center justify-center">
                      <Iconify width={30} icon="ic:sharp-phone" />
                    </div>
                    <p className="font-medium opacity-90">{t('call_us')}:</p>
                    <Link
                      className="font-bold"
                      href={`tel:${dataSetting?.configuration[currentLang.value].phone1}`}
                    >
                      {dataSetting?.configuration[currentLang.value].phone1}
                    </Link>
                  </div>
                </m.a>
              </m.div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
