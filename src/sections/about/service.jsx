import { m } from 'framer-motion';
import { useState, useEffect } from 'react';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';
import { useGetServicesListQuery } from 'src/redux/api/front/api-service';

export default function Services({ titleBold, title, subTitle }) {
  const { t, currentLang, i18n } = useTranslate();
  const dir = i18n.dir();
  const [fetchData, setFetchData] = useState([]);
  const { data } = useGetServicesListQuery();
  useEffect(() => {
    const check = () => {
      if (data) {
        setFetchData(data.services.services);
      }
    };
    check();
  }, [data]);

  const [activeIndex, setActiveIndex] = useState(Math.floor(fetchData.length / 2));

  return (
    <section className="bg-gray-900 pt-7.5 pb-10 px-4 md:px-12 lg:px-20">
      {/* Section heading */}
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <div className="text-center mb-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[2px] bg-[var(--thm-base)] w-6" />
            <span className="text-4xl max-sm:text-xl capitalize text-[var(--thm-base)] font-black">
              {titleBold?.translations[currentLang.value].name}
            </span>
            <span className="text-4xl capitalize text-[#fff] font-extrabold max-sm:text-xl">
              {title?.translations[currentLang.value].name}
            </span>
            <div className="h-[2px] bg-[var(--thm-base)] w-6" />
          </div>
          <p className="text-xl text-gray-300 mt-2 max-sm:text-sm">
            {subTitle?.translations[currentLang.value].name}
          </p>
        </div>
      </m.div>

      {/* Responsive grid/slider */}
      <div className="flex flex-col md:flex-row justify-center gap-7 overflow-hidden">
        {fetchData.map((proj, idx) => {
          const isActive = idx === activeIndex;
          return (
            <m.div
              key={idx}
              layout
              className={`relative group h-[180px] md:h-[420px] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                isActive ? 'md:w-[380px] h-[300px] w-full' : 'md:w-[200px] w-full'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: proj.delay }}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
            >
              {/* Image */}
              <m.img
                src={`${URL_IMAGE}/${proj.translations[currentLang.value].image}`}
                alt={proj.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Orange gradient overlay */}
              {!isActive && (
                <m.div
                  className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-600/40 to-transparent"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}

              {/* Vertical text (inactive state) */}
              {!isActive && (
                <m.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-5 left-2/7 xl:left-1/2 xl:-translate-x-1/2 translate-x-[-50%] text-white text-center max-sm:left-4/8 "
                >
                  <h4 className="text-2xl flex flex-col items-start font-bold xl:[writing-mode:vertical-rl] xl:rotate-180 whitespace-nowrap max-sm:text-justify">
                    {proj.translations[currentLang.value].title}
                  </h4>
                </m.div>
              )}

              {/* Active / Hover content */}
              {isActive && (
                <m.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] bg-white rounded-lg flex items-center justify-between px-6 py-3 shadow-lg"
                >
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg md:text-2xl leading-tight">
                      <span className="flex items-center gap-2 text-orange-500 font-semibold mb-3">
                        <span className="block w-6 h-[2px] bg-orange-500" />
                        {proj.translations[currentLang.value].title}
                      </span>
                    </h4>

                    <div
                      className="text-justify   relative leading-4"
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{
                        __html: proj.translations[currentLang.value].content,
                      }}
                    />
                  </div>
                </m.div>
              )}
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
