import { m } from 'framer-motion';

import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';
// import { Scale, ChevronLeft, ChevronRight } from 'lucide-react';
//  header animation (framermotion)
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
export function TitleSide({
  secionName = 'secondaryText',
  sectionHeaderText = 'mainText',
  swiperRef,
  showNavigationButtons = true,
  mobileHideNaviagationButtons = false,
  color = 'black',
}) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-4 gap-3 md:gap-0">
      {/* left text  */}
      <div className="flex-1" />
      {/* navigation arrows  */}
      {showNavigationButtons && (
        <div className={`${mobileHideNaviagationButtons ? 'hidden md:flex' : 'flex'} gap-2`}>
          <m.button
            onClick={() => swiperRef?.current?.slidePrev()}
            className="w-6 h-6 sm:w-7 sm:h-7 bg-white hover:bg-[var(--thm-base)] rounded-full flex items-center justify-center transition-all duration-300 group
            shadow-lg
            "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-black group-hover:text-gray-200 transition-colors" /> */}

            {dir === 'ltr' ? (
              <Iconify
                icon="si:arrow-left-line"
                width={30}
                className="w-4 sm:w-5 h-4 sm:h-5 text-black group-hover:text-gray-200 transition-colors"
              />
            ) : (
              <Iconify
                icon="si:arrow-right-line"
                width={30}
                className="w-4 sm:w-5 h-4 sm:h-5 text-black group-hover:text-gray-200 transition-colors"
              />
            )}
          </m.button>
          <m.button
            onClick={() => swiperRef?.current?.slideNext()}
            className="w-6 h-6 sm:w-7 sm:h-7 bg-white text-black hover:bg-[var(--thm-base)] rounded-full flex items-center justify-center transition-all duration-300 group
            
            shadow-lg
            "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-black group-hover:text-gray-200 transition-colors" /> */}

            {dir === 'ltr' ? (
              <Iconify
                icon="si:arrow-right-line"
                width={30}
                className="w-4 sm:w-5 h-4 sm:h-5 text-black group-hover:text-gray-200 transition-colors"
              />
            ) : (
              <Iconify
                icon="si:arrow-left-line"
                width={30}
                className="w-4 sm:w-5 h-4 sm:h-5 text-black group-hover:text-gray-200 transition-colors"
              />
            )}
          </m.button>
        </div>
      )}
    </div>
  );
}
