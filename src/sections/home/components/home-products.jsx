import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import { useTranslate } from 'src/locales';

import { TitleSide } from 'src/sections/utils';

import ExperianCard from './experience/components/experian-card';

export default function HomeProducts({
  products = [],
  title8,
  title1,
  slides = 4,
  id, // category id
}) {
  const { i18n } = useTranslate();
  const dir = i18n.dir();
  const swiperRef = useRef(null);

  const currentProducts = products?.filter((product) => {
    const { category } = product;
    return category?.id === id;
  });
  return (
    <section className="pb-8 md:pb-16 sm:pb-12 h-fill text-gray-900 bg-[#2e3740] py-10 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <TitleSide
          sectionName={title1}
          sectionHeaderText={title8}
          swiperRef={swiperRef}
          showNavigationButtons
        />

        <Swiper
          dir={dir}
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: slides },
          }}
          grabCursor
        >
          {currentProducts.map((el, index) => (
            <SwiperSlide key={el.id || index} className="min-h-[270px]">
              <ExperianCard product={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
