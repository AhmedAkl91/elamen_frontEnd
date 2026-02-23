import { memo } from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';

const SwiperTeam = ({
  setActiveIndex,
  children,
  title,
  Slides,
  phoneSlides,
  space,
  NavigationBtns,
  className,
  delay,
  modules = [Autoplay, Navigation, EffectCoverflow],
}) => (
  <div
    className={`projects rounded-t-3xl flex flex-col items-center relative ${className}`}
    dir="rtl"
  >
    <div className="flex items-center justify-between w-full px-4 md:pt-10 mb-6">
      {title && <div>{title}</div>}
      {NavigationBtns && (
        <div className="flex items-center">
          <div className="swiper-button-next swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg ml-2" />
          <div className="swiper-button-prev swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg" />
        </div>
      )}
    </div>
    <div className={`w-[100vw] mx-auto ${space}`}>
      <Swiper
        modules={modules}
        effect="coverflow"
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1, // Use modifier 1 so the active slide is not enlarged
          slideShadows: false,
        }}
        spaceBetween={100}
        slidesPerView={Slides}
        loop
        speed={500}
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
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="w-full h-full"
      >
        {children}
      </Swiper>
    </div>
  </div>
);

export default memo(SwiperTeam);
