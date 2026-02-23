// import { Autoplay, EffectFlip, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import s1 from 'src/assets/s-1.jpg';
import s2 from 'src/assets/s-2.jpg';
import { useTranslate } from 'src/locales';

import { SliderItem } from './slide-item';

export function SliderLayers({ slider }) {
  const { currentLang, t } = useTranslate();
  const { i18n } = useTranslation();
  const dir = i18n.dir();
  const Sliders = [
    {
      id: 1,
      title: 'A particulate air filter is a device',
      text: 'A particulate air filter is a device composed of fibrous,or porous materials that removes solid particulates such as dust, pollen',
      image: s1,
    },
    {
      id: 2,
      title: 'A particulate air filter is a device',
      text: 'A particulate air filter is a device composed of fibrous,or porous materials that removes solid particulates such as dust, pollen',
      image: s2,
    },
  ];
  return (
    <div className="">
      <div className=" flex-col @md:flex-row ">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          speed={1300}
          className="w-full h-[70vh]  max-sm:h-auto"
          // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={false}
          navigation={{
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
          }}
        >
          <div className="relative w-full">
            {slider?.map((item, index) => (
              <SwiperSlide key={index}>
                <SliderItem item={item} key={index} />
              </SwiperSlide>
            ))}
          </div>
          <div
            className={`flex items-center mb-5 max-sm:mb-3 ml-3 max-sm:ml-0  absolute bottom-0 ${
              dir === 'rtl'
                ? 'left-[calc(10%-150px)] max-sm:left-[calc(50%-50px)]'
                : 'right-[calc(10%-150px)] max-sm:right-[calc(50%-50px)]'
            }`}
          >
            <div className="swiper-button-prev slider-prev hero-prev" />
            <div className="swiper-button-next slider-next hero-next  " />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
