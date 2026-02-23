import { m } from 'framer-motion';
import { useState, useEffect } from 'react';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';
import { useGetChooseQuery } from 'src/redux/api/front/api-choose';
import { useGetConfigSettingQuery } from 'src/redux/api/front/api-config-setting';

import { Iconify } from 'src/components/iconify';

import PrimaryButton from 'src/sections/utils/PrimaryButtton';

export default function AboutHome({ dataAbout }) {
  // : { image, description1, sub_title, title }
  const [activeCard, setActiveCard] = useState(1);

  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();
  const { data: configuration, isLoading: loadingConfig } = useGetConfigSettingQuery();

  const [dataSetting, setDataSetting] = useState(null);

  useEffect(() => {
    setActiveCard(1); // First card active by default
  }, []);

  const [dataChoose, setDataChoose] = useState(null);
  const { data: choose } = useGetChooseQuery();

  // ----------------------------------------------------------------------
  useEffect(() => {
    const check = () => {
      if (choose) {
        setDataChoose(choose);
      }
      if (configuration) {
        setDataSetting(configuration);
      }
    };
    check();
  }, [choose, configuration]);

  const features = [
    {
      id: 1,
      title: t('our_vision'),
      description: `${dataChoose?.choose_us[currentLang.value]?.point_1}`,
      icon: `${dataChoose?.choose_us[currentLang.value]?.point_icon_1}`,
    },
    {
      id: 2,
      title: t('our_mission'),
      description: `${dataChoose?.choose_us[currentLang.value]?.point_2}`,
      icon: `${dataChoose?.choose_us[currentLang.value]?.point_icon_2}`,
    },
    {
      id: 3,
      title: t('our_value'),
      description: `${dataChoose?.choose_us[currentLang.value]?.point_3}`,
      icon: `${dataChoose?.choose_us[currentLang.value]?.point_icon_3}`,
    },
  ];

  return (
    <section
      className="px-4 py-4 bg-center md:bg-left bg-no-repeat"
      // style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl max-sm:w-full max-sm:px-1 mx-auto md:py-6 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h4 className="text-2xl max-sm:text-lg font-bold text-[var(--thm-base)">
                  {dataAbout?.title}
                </h4>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--thm-base-light)] max-sm:text-xl">
                {dataAbout?.sub_title}
              </h1>
              <div className="max-w-md flex items-center">
                <p
                  className="text-gray-700 leading-relaxed text-base
                line-clamp-3
                text-justify
                max-sm:line-clamp-10
                 max-sm:text-sm
                "
                >
                  {dataAbout?.description1}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 py-5 max-sm:p-2">
              <div
                className={` border-gray-300 ${dir === 'rtl' ? 'pl-4 border-l-2' : 'pr-4 border-r-2'} space-y-2"`}
              >
                <Iconify icon="fa:quote-left" width={60} className=" text-[var(--thm-base)] " />
              </div>
              <div>
                <p className="text-start mb-3"> {dataAbout?.title1}</p>

                <img src={`${URL_IMAGE}/${dataAbout?.image2}`} alt="icon" className="w-full " />
              </div>
              <br />
            </div>
            <PrimaryButton link="/about" text={t('btn.read.more')} />
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
            {/* Features */}
            <div className="grid lg:gap-0 gap-4 max-sm:gap-0">
              {features.map(({ id, title, description, icon }) => {
                const isActive = activeCard === id;
                return (
                  <m.div
                    key={id}
                    onMouseEnter={() => setActiveCard(id)}
                    className={`relative shadow-lg p-4 ${dir === 'rtl' ? 'pl-4' : 'pr-8'}  ${dir === 'rtl' ? 'md:pr-12' : 'md:pl-4'}  flex flex-col mb-1 shadow-sm justify-center gap-2 transition cursor-pointer ${
                      isActive
                        ? 'bg-[var(--thm-base)] text-white'
                        : 'bg-white hover:bg-[var(--thm-base)] hover:text-white'
                    }`}
                  >
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${dir === 'ltr' ? '-left-3' : '-right-4'} md:p-4 py-2 px-3 shadow-md rounded-full z-10 w-[44px] h-[44px] md:w-[56px] md:h-[56px] flex justify-center items-center transition-all duration-300 ${
                        isActive ? 'bg-white' : 'bg-[var(--thm-base)] group-hover:bg-white'
                      }`}
                    >
                      {/* <Icon className={`text-2xl ${isActive ? 'text-amber-700' : 'text-white'}`} /> */}
                      <Iconify
                        icon={icon}
                        width={30}
                        className={`text-2xl ${isActive ? 'text-[var(--thm-base)]' : 'text-white'}`}
                      />
                    </div>
                    <h5 className="text-base font-bold mb-1 text-lg md:text-lg">{title}</h5>
                    <p className="text-sm text-justify line-clamp-3">{description}</p>
                  </m.div>
                );
              })}
            </div>

            {/* Image with contact info */}
            <div className="relative w-full mx-auto flex flex-col overflow-hidden">
              <img
                src={`${URL_IMAGE}/${dataAbout?.image}`}
                alt="Lawfy"
                className="object-cover w-full shadow-md h-[300px] md:h-[calc(100%_-_120px)]  "
              />
              <div className="max-sm:relative max-sm:w-full   space-y-1 bg-[#505050d6] max-sm:bg-[var(--thm-base)] px-3 py-4  flex-1 flex flex-col justify-center w-[90%]">
                <a href="tel:01111193119" className="text-sm text-white font-semibold block">
                  {t('tel')}: {dataSetting?.configuration[currentLang.value].phone1}
                </a>
                <a
                  href="mailto:info@elkabbanylawfirm.com"
                  className="text-sm text-white font-semibold block"
                >
                  {t('mail')}: {dataSetting?.configuration[currentLang.value].email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
