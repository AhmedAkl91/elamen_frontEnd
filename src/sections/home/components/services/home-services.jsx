import { useState, useEffect } from 'react';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';
import { useGetServicesListQuery } from 'src/redux/api/front/api-service';

import ServiceCard from './components/service-card';

export default function HomeServices({ dataAbout, title3, title2 }) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  const [dataServices, setDataServices] = useState([]);
  const { data: services, isLoading } = useGetServicesListQuery();
  useEffect(() => {
    const check = () => {
      if (services) {
        setDataServices(services.services.services);
      }
    };
    check();
  }, [services]);
  return (
    <section className="bg-white relative pb-30 max-sm:pb-3 ">
      {/* <ServiceSectionTitle /> */}
      <div
        className="relative text-center bg-cover bg-center bg-no-repeat h-[50vh]"
        style={{ backgroundImage: `url(${`${URL_IMAGE}/${dataAbout?.image4} `})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm " />

        <div className="relative z-10 top-[20%]">
          <p className="text-white uppercase tracking-wide text-xl font-bold">{title2}</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white max-sm:text-2xl">
            {title3}{' '}
          </h2>
        </div>
      </div>

      <div
        className="container mx-auto grid gap-4 px-4 w-[100vw]
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                   relative -mt-16 md:-mt-24 lg:-mt-32"
      >
        {dataServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service?.translations[currentLang.value]}
            id={service.id}
          />
        ))}
      </div>
    </section>
  );
}
