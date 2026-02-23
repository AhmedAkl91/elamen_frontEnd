import { m } from 'framer-motion';
import { useState, useEffect } from 'react';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';
import { useGetFeaturesListQuery } from 'src/redux/api/front/api-feature';

export default function Features({ titleBold, title, subTitle }) {
  // const { currentLang, t, i18n } = useTranslate();
  // const dir = i18n.dir();
  const { t, currentLang, i18n } = useTranslate();
  const dir = i18n.dir();
  const [fetchData, setFetchData] = useState([]);
  const { data } = useGetFeaturesListQuery();
  useEffect(() => {
    const check = () => {
      if (data) {
        setFetchData(data.features.features);
      }
    };
    check();
  }, [data]);

  const [activeFeature, setActiveFeature] = useState('');

  const idx = fetchData[0];
  useEffect(() => {
    const check = () => {
      if (idx) {
        setActiveFeature(idx.id);
      }
    };
    check();
  }, [idx]);

  const feature = fetchData.find((f) => f.id === activeFeature);
  return (
    <section className="">
      <div className="container mx-auto px-3 lg:px-5">
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[var(--thm-base)] uppercase font-semibold text-xs sm:text-sm md:text-base lg:text-lg mb-2">
            <span className="inline-block h-[2px] w-5 bg-[var(--thm-base)] " />
            <span className="text-4xl max-sm:text-2xl capitalize text-[var(--thm-base)]">
              {titleBold?.translations[currentLang.value].name}
            </span>
            <span className="text-4xl max-sm:text-2xl capitalize text-[var(--thm-base-dark)]">
              {title?.translations[currentLang.value].name}
            </span>
          </div>
          <p className="text-xl text-gray-600 mt-2 max-sm:text-sm">
            {subTitle?.translations[currentLang.value].name}
          </p>
        </div>
        {/* Content Grid */}
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-12 max-sm:gap-5 lg:gap-10  py-10 max-sm:py-3">
          {/* LEFT SIDE - Features */}
          <div className="flex flex-col gap-3 items-start">
            {fetchData.map((f, idx) => (
              <m.div
                key={f.id}
                onClick={() => setActiveFeature(f.id)}
                className={`p-1 transition-transform duration-300 ease-in-out shadow-md rounded-xl cursor-pointer w-full max-sm:px text-center ${
                  activeFeature === f.id
                    ? 'ring-2 ring-[var(--thm-base-dark)] bg-[var(--thm-base-dark)]'
                    : 'hover:bg-[var(--thm-base-dark)]'
                }`}
              >
                <m.div
                  initial={{ opacity: 0, x: dir ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center gap-4 py-3 max-sm:py-2 px-6 rounded-lg overflow-hidden group
                  text-center
                  "
                >
                  {/* Sliding Background */}
                  <span
                    className={`absolute inset-0 bg-[var(--thm-base)] rounded-xl transform 
                      
                      text-center
                      transition-transform duration-500 ease-in-out
                      
                     
                      ${
                        activeFeature === f.id
                          ? 'translate-x-0'
                          : dir
                            ? 'translate-x-full group-hover:translate-x-0'
                            : 'translate-x-full group-hover:translate-x-0'
                      }`}
                  />
                  {/* Icon */}
                  <span
                    className={`relative z-10 transition ${
                      activeFeature === f.id
                        ? 'text-white'
                        : 'text-orange-500 group-hover:text-white'
                    }`}
                  >
                    {f.icon}
                  </span>
                  {/* Title */}
                  <span
                    className={`font-semibold relative z-10 sm:text-xl transition ${
                      activeFeature === f.id ? 'text-white' : 'text-gray-800 group-hover:text-white'
                    }`}
                  >
                    {f.translations[currentLang.value].title}
                  </span>
                </m.div>
              </m.div>
            ))}
          </div>
          {/* RIGHT SIDE - Single Image */}
          <div className="relative overflow-hidden w-full  lg:col-span-2">
            {/* <img
              src={`${URL_IMAGE}/${feature?.translations[currentLang.value].image}`}
              alt={t('Property')}
              className="w-full h-full object-cover    max-sm:h-screen"
            /> */}
            <m.div
              key={feature?.id}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative inset-0 bg-gradient-to-t from-black/60 to-transparent flex justify-end items-end p-6
              max-sm:px-3
              bg-cover bg-center bg-no-repeat 
              min-h-[550px]
              rounded-2xl
              "
              style={{
                backgroundImage: `url(${URL_IMAGE}/${feature?.translations[currentLang.value].image}) `,
              }}
            >
              <div className=" absolute h-full w-full inset-0 bg-gradient-to-t from-black/60 to-transparent  max-sm:from-black/90     z-10" />
              <div className="text-white z-20">
                <h3 className="font-bold text-5xl sm:text-5xl text-start mb-6 text-[var(--thm-base)]">
                  {feature?.translations[currentLang.value].title}
                </h3>
                <div
                  className={`text-start  max-sm:text-sm 
                  ${dir === 'ltr' ? 'content-project ' : 'content-project-rtl'}
                  relative leading-4 `}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: feature?.translations[currentLang.value].content1,
                  }}
                />
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
