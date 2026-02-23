import { useState, useEffect } from 'react';

import { useGetServicesListQuery } from 'src/redux/api/front/api-service';

import ServiceCard from './service-card';

export default function ServicesCardsSection() {
  const [dataServices, setDataServices] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
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
    <section className="bg-white relative pb-[100px]">
      {/* <ServiceSectionTitle /> */}
      <div
        className="container mx-auto grid gap-8 px-4 w-[100vw]
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                   relative -mt-16 md:-mt-24 lg:-mt-32"
      >
        {dataServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
