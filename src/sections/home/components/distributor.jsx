import { SwiperSlide } from 'swiper/react';
import SwiperComponent from './swiper/swiperComponent';
import TitleProducts from './title-products';
import { useTranslate } from 'src/locales';

export default function Distributor({ distributor }) {
  const { t } = useTranslate();

  return (
    <section className="bg-[#f7f7f7]  border-t pb-5">
      <div className="max-w-7xl mx-auto ">
        <div className="">
          <SwiperComponent
            phoneSlides={1}
            Slides={2}
            title={
              <section className="py-10">
                <div className="">
                  <h2 className="text-3xl font-bold text-gray-900 ">{t('client.title')}</h2>

                  <p
                    className=" mt-3 bg-linear-to-r from-[var(--thm-base)] to-transparent "
                    style={{ height: '1px' }}
                  />

                  <p className="text-gray-600 mt-2 max-w-3xl leading-relaxed">{t('client.text')}</p>
                </div>
              </section>
            }
            space=" px-5 md:px-0 container mx-auto"
            delay={5000}
          >
            {distributor?.map((el, index) => (
              <SwiperSlide key={index} className="swiper-slide-custom">
                <div className="shadow-lg rounded-2xl px-3 py-5 border-1 border-[#dadada]">
                  <h2 className="text-lg font-bold text-gray-900">{el.title}</h2>

                  <p className="text-sm  font-bold text-gray-600 mt-3 leading-relaxed">
                    {el.subtitle}
                  </p>
                  <p
                    className=" my-2 bg-linear-to-r from-[var(--thm-base)] to-transparent "
                    style={{ height: '1px' }}
                  />
                  <p>{el.description}</p>
                  <img src={el.image} alt="Pentair" className="h-16 mt-6 mx-auto md:mx-0" />
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </section>
  );
}
