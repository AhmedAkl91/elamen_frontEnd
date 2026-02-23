import FsLightbox from 'fslightbox-react';
import { useState, useEffect } from 'react';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';
import { useGetCountersListQuery } from 'src/redux/api/front/api-counter';

import { Iconify } from 'src/components/iconify';

// import cover from '../assets/images/cover.webp';
// import { useGetCountersQuery } from '../Api/CounterApi';

const CounterBox = ({ number, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / number));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= number) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="flex flex-col justify-center items-center text-center border-2 border-white/30 p-6 max-sm:p-2 aspect-square min-w-[140px] sm:min-w-[160px] md:min-w-[200px] rounded-3xl">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {count}
        {number >= 0 ? '+' : ''}
      </h2>
      <p className="text-white text-xs sm:text-sm md:text-lg">{title}</p>
    </div>
  );
};

const HomeCounter = ({ dataAbout, title7 }) => {
  const [DataCounters, setDataCounters] = useState([]);
  const [toggler, setToggler] = useState(false);

  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  const [isOpen, setIsOpen] = useState(false);
  const { data: counters } = useGetCountersListQuery();

  useEffect(() => {
    const check = () => {
      if (counters) {
        setDataCounters(counters.counters.counters);
      }
    };
    check();
  }, [counters]);

  return (
    <>
      {dataAbout && <FsLightbox toggler={toggler} sources={[dataAbout?.link_video]} />}
      <section className="relative py-8 sm:py-8 md:py-8 max-sm:py-2">
        <div className="container mx-auto flex justify-center items-center">
          <div
            style={{ backgroundImage: `url(${`${URL_IMAGE}/${dataAbout?.image3}`})` }}
            className="
            bg-cover bg-center bg-no-repeat 
            w-full lg:w-[90%] 
            mx-auto 
            px-4 sm:px-6 md:px-10 
            py-8 sm:py-8 md:py-8 
            rounded-none lg:rounded-3xl bg-black/40 
            flex flex-col items-center text-center space-y-7
          "
          >
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4 w-full">
              {DataCounters?.map((item) => (
                <CounterBox
                  key={item.id}
                  number={item.number}
                  title={item?.translations[currentLang.value].title}
                />
              ))}
            </div>

            <div className="h-px bg-white/25 w-full max-w-3xl" />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center w-full gap-6 px-2 sm:px-6 md:px-12">
              <div className="text-white text-center md:text-start text-sm sm:text-lg md:text-lg font-semibold sm:px-6 ">
                {title7}
              </div>

              <div className="hidden md:flex justify-center px-4">
                <div className="w-px h-20 bg-white/25" />
              </div>

              <div className="flex justify-center md:justify-start items-center gap-5">
                <button
                  onClick={() => setToggler(!toggler)}
                  className="flex items-center justify-center rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-b from-[var(--thm-base)] via-[var(--thm-base-dark)] to-[var(--thm-base-light)] text-black hover:brightness-110 transition"
                >
                  <Iconify icon="solar:play-bold" width={20} color="#ffffff" />
                </button>
                <span className="text-white text-sm sm:text-xl font-semibold whitespace-nowrap pl-2">
                  {t('watch.vedio')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 bg-[#b57b513b] absolute bottom-0 left-0 z-[-1]" />
      </section>
    </>
  );
};

export default HomeCounter;
