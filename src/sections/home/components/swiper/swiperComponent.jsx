import { memo } from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const SwiperComponent = ({
  children,
  title,
  Slides,
  phoneSlides,
  space,
  className,
  dir,
  delay,
  spaceBetween = 50,
}) => (
  <div className={`projects rounded-t-3xl flex flex-col items-center relative ${className}`}>
    <div className="flex items-center justify-between w-full">
      <div>{title}</div>
      <div className="flex items-center" dir="rtl">
        <div className="swiper-button-next swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg ml-2" />
        <div className="swiper-button-prev swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg" />
      </div>
    </div>
    <div className={`w-full mx-auto ${space}`} dir={dir}>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={Slides}
        loop
        className="w-full px-10"
        speed={1300}
        autoplay={{ delay: delay || 3000 }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          320: {
            slidesPerView: phoneSlides,
          },
          640: {
            slidesPerView: phoneSlides,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: Slides,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  </div>
);

export default memo(SwiperComponent);
