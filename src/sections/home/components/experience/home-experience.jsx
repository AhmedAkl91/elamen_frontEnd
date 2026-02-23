import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';

import { useTranslate } from 'src/locales';
import { useGetFeaturesListQuery } from 'src/redux/api/front/api-feature';

import { TitleSide } from 'src/sections/utils';

import ExperianCard from './components/experian-card';

export default function HomeExperience({ title8, title1 }) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();
  const [datafeatures, setDatafeatures] = useState([]);
  const swiperRef = useRef(null);

  const { data: features, isLoading, isError } = useGetFeaturesListQuery();

  useEffect(() => {
    const check = () => {
      if (features) {
        setDatafeatures(features.features.features);
      }
    };
    check();
  }, [features]);

  return (
    <section className="pb-8 md:pb-16 sm:pb-12 h-fill bg-[#b57b513b] text-gray-900">
      <div className="container mx-auto px-4">
        <TitleSide
          secionName={title1}
          sectionHeaderText={title8}
          swiperRef={swiperRef}
          showNavigationButtons
        />

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          grabCursor
        >
          {datafeatures.map((feature) => (
            <SwiperSlide key={feature.id} className="min-h-[270px]">
              <ExperianCard
                experian={feature?.translations[currentLang.value]}
                key={feature.id}
                id={feature.id}
                icon={feature.icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
