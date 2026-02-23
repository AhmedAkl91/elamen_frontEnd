import { useState, useEffect } from 'react';

import { useGetFeaturesListQuery } from 'src/redux/api/front/api-feature';

import ExperianCard from './experian-card';

export default function ExperianCardsSection() {
  const [datafeatures, setDatafeatures] = useState([]);

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
    <div className="container mx-auto grid gap-8 py-16 px-4 w-[100vw] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {datafeatures.map((feature) => (
        <ExperianCard experian={feature} key={feature.id} />
      ))}
    </div>
  );
}
