import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { URL_IMAGE } from 'src/config';
import bg from 'src/assets/about-4-1.png';
import { useTranslate } from 'src/locales';
import { useGetSchedulesListQuery } from 'src/redux/api/front/api-schedules';

export default function MissionSection({ title1, title2, text }) {
  const [dataSchedules, setDataSchedules] = useState([]);
  const { i18n } = useTranslation();
  const { currentLang, t } = useTranslate();
  const dir = i18n.dir();
  const { data: schedules } = useGetSchedulesListQuery();
  useEffect(() => {
    const check = () => {
      if (schedules) {
        setDataSchedules(schedules.schedules.schedules);
      }
    };
    check();
  }, [schedules]);

  // ---------------------------------------------------------------------

  return (
    <section className="bg-white py-10 md:py-20 flex justify-center items-center mt-5">
      {' '}
      <div className="container mx-auto">
        <div className="px-5 md:px-14">
          <div
            className={`relative w-full h-[85vh] lg:h-[85vh] max-sm:h-full overflow-hidden bg-cover ${dir === 'rtl' ? 'bg-[right_top]' : 'bg-[left_top]'} bg-no-repeat rounded-[40px]`}
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
            data-aos="fade-left"
          >
            {/* Black overlay */}
            {/* <div className="absolute -bottom-1 left-0 w-full h-[60%] bg-gradient-to-t from-black to-transparent" /> */}

            <div className="md:text-2xl text-xl text-[var(--thm-base)] mr-1 mt-8 flex items-center gap-2 font-bold ">
              <span className="inline-block h-[2px] w-4 bg-[var(--thm-base)] " />
              {title1?.translations[currentLang.value].name}
              <span className="text-[#ff6900]">{title2?.translations[currentLang.value].name}</span>
              {/* {dir === 'rtl' ? <ArrowRtlBlack /> : <ArrowLtrBlack />} */}
            </div>
            <div className="container mx-auto pt-20 items-center ">
              {/* Left Column */}
              <div className="mx-auto  grid md:grid-cols-2 gap-20   px-12 py-16  items-center justify-center  ">
                <div>
                  <p className="text-black text-2xl max-sm:text-sm mb-8 leading-relaxed">
                    {text?.description8}
                  </p>
                </div>

                {/* Right Column */}
                <div className="space-y-10">
                  {dataSchedules.map((el, index) => (
                    <div className="flex items-center gap-2 md:gap-4" key={index}>
                      <div className="flex items-center gap-2 justify-center ">
                        <div className="bg-[var(--thm-base)] text-white p-3 ml-2 rounded-full shadow-lg flex items-center justify-center md:w-12 w-12 md:h-12 h-12 flex-shrink-0">
                          {/* Dynamically render icons, or fix them individually if you prefer */}
                          <img
                            src={`${URL_IMAGE}/${el?.translations[currentLang.value].image}`}
                            alt="icon"
                            className="w-10 h-10"
                          />
                        </div>
                      </div>

                      <div
                        className={`items-center justify-center mx-1 ${
                          dir === 'rtl'
                            ? 'text-[10px] md:text-md lg:text-[16px] text-[#000] '
                            : 'text-[10px] md:text-md lg:text-[16px] text-[#000]'
                        }`}
                        style={{ textAlign: 'initial' }}
                        // eslint-disable-next-line react/no-danger
                      >
                        {el?.translations[currentLang.value].name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
