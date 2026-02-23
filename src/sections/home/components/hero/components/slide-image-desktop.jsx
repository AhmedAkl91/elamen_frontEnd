import { m } from 'framer-motion';

import { URL_IMAGE } from 'src/config';

export default function SlideImage({ dir, slide, currentLang, activeSlide, index }) {
  return (
    <>
      {dir === 'rtl' ? (
        <m.div className="absolute inset-0 overflow-hidden bg-neutral-900 ">
          {slide?.translations[currentLang.value].image ? (
            <m.img
              src={`${URL_IMAGE}/${slide.translations[currentLang.value].image}`}
              alt={slide.translations[currentLang.value].title}
              className="h-full w-full object-cover object-[20%_center] sm:object-center"
              initial={{
                y: '100%',
                clipPath: 'circle(20% at 35% 50%)',
                scale: 0.6,
              }}
              animate={{
                y: activeSlide === index ? '0%' : '100%',
                clipPath:
                  activeSlide === index ? 'circle(50% at 35% 50%)' : 'circle(20% at 35% 50%)',
                scale: activeSlide === index ? 1 : 0.6,
              }}
              transition={{
                y: { duration: 1.2, ease: 'easeOut' },
                clipPath: {
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: activeSlide === index ? 1.0 : 0,
                },
                scale: { duration: 1.5, ease: 'easeOut' },
              }}
            />
          ) : (
            <div className="bg-gray-800 h-full w-full flex items-center justify-center text-white text-lg">
              No Image
            </div>
          )}
        </m.div>
      ) : (
        <m.div className="absolute inset-0 overflow-hidden bg-neutral-900 ">
          {slide?.translations[currentLang.value].image ? (
            <m.img
              src={`${URL_IMAGE}/${slide.translations[currentLang.value].image}`}
              alt={slide.translations[currentLang.value].title}
              className="h-full w-full object-cover object-[20%_center] sm:object-center"
              initial={{
                y: '100%',
                clipPath: 'circle(20% at 65% 50%)',
                scale: 0.6,
              }}
              animate={{
                y: activeSlide === index ? '0%' : '100%',
                clipPath:
                  activeSlide === index ? 'circle(50% at 65% 50%)' : 'circle(20% at 65% 50%)',
                scale: activeSlide === index ? 1 : 0.6,
              }}
              transition={{
                y: { duration: 1.2, ease: 'easeOut' },
                clipPath: {
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: activeSlide === index ? 1.0 : 0,
                },
                scale: { duration: 1.5, ease: 'easeOut' },
              }}
            />
          ) : (
            <div className="bg-gray-800 h-full w-full flex items-center justify-center text-white text-lg">
              No Image
            </div>
          )}
        </m.div>
      )}
    </>
  );
}
