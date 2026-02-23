import { m } from 'framer-motion';

import { useTranslate } from 'src/locales';
// import shap2 from 'src/assets/heroshapeBu.png';

export function SliderItem({ item, URL }) {
  console.log('item', item);
  // ----------------------------------------------------------------------
  const { currentLang, i18n, t } = useTranslate();
  const dir = i18n.dir();

  // ----------------------------------------------------------------------
  return (
    <>
      <img src={item.image} className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto h-full  px-6">
        <m.div
          className="bg-black/30 h-full w-1/2 flex flex-col justify-center px-5 "
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-extrabold w-full max-w-xl leading-tight">
            {item?.title}
          </h1>

          <p className="text-white/90 text-lg mt-4 max-w-xl">{item?.description}</p>
        </m.div>
      </div>
    </>
  );
}
