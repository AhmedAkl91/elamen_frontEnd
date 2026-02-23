import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';

import { useTranslate } from 'src/locales';
import { useGetTestimonialsListQuery } from 'src/redux/api/front/api-testimonial';

import { TitleSide } from 'src/sections/utils';

import TestimonialsItem from './components/testimonials-item';

export default function HomeTestimonials({ title5, title4 }) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  const [dataTestimonials, setDatatestimonials] = useState([]);
  const swiperRef = useRef(null);

  const { data: testimonials } = useGetTestimonialsListQuery();
  // if (isLoading) return <div className="text-center text-white">Loading testimonials...</div>;
  // if (isError) return <div className="text-center text-red-500">Failed to load data.</div>;
  useEffect(() => {
    const check = () => {
      if (testimonials) {
        setDatatestimonials(testimonials.testimonials.testimonials);
      }
    };
    check();
  }, [testimonials]);

  return (
    <section className="container py-16 sm:py-6 text-gray-900 mx-auto px-4 pr-[20px] max-sm:py-5">
      {/* <SliderSectionHeader
       
      /> */}

      <TitleSide
        secionName={title4}
        sectionHeaderText={title5}
        swiperRef={swiperRef}
        showNavigationButtons
      />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        grabCursor
      >
        {dataTestimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="pt-[50px]">
            <TestimonialsItem testimonial={testimonial?.translations[currentLang.value]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
