'use client';

import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetServicesQuery } from 'src/redux/api/front/api-services';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import TechnicalSupport from './TechnicalSupport';
import { SplashScreen } from 'src/components/loading-screen';
// ----------------------------------------------------------------------
export function ServicesView({ id }) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();
  const [dataServices, setDataServices] = useState([]);
  const { data: services, isLoading } = useGetServicesQuery(currentLang.value);
  useEffect(() => {
    if (services?.data) {
      setDataServices(services.data);
    }
  }, [services]);

  const servicesData = dataServices?.services ?? [];
  const faqData = dataServices?.faqs ?? [];

  const sectorsList = dataServices?.services || [];

  const service = sectorsList.find((cat) => cat?.id === Number(id));

  if (isLoading) {
    return <SplashScreen />;
  }

  console.log('tesxt');

  //----------------------------------------------------------------------
  return (
    <>
      <PageBreadcrumb title={service?.title1} text={service?.title2} />

      <section className="py-5">
        <div className="max-w-7xl mx-auto  grid md:grid-cols-3 gap-2">
          {service?.items?.map((item) => (
            <div
              key={item.title}
              className="shadow-lg rounded-2xl px-3 py-5 border-1 border-[#dadada] "
            >
              <h3 className="font-semibold  uppercase text-lg ">{item.title}</h3>
              <div className="mt-2 h-[2px] w-5 bg-red-500" />
              <p className="mt-3 text-lg text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <TechnicalSupport serviceImage={servicesData?.image} faqs={faqData} />
      {/* <FilterServicesAccordion /> */}
    </>
  );
}
