'use client';

import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetFeaturesListQuery } from 'src/redux/api/front/api-feature';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import ExperianCard from './experian-card';

// ----------------------------------------------------------------------
export function ExperienceView() {
  const { currentLang, t, i18n } = useTranslate();
  const [datafeatures, setDatafeatures] = useState([]);

  const { data: features } = useGetFeaturesListQuery();

  useEffect(() => {
    const check = () => {
      if (features) {
        setDatafeatures(features.features.features);
      }
    };
    check();
  }, [features]);
  //----------------------------------------------------------------------
  return (
    <>
      <PageBreadcrumb title={`${t('page.experience')}`} url />
      <div className="container mx-auto grid gap-8 py-16 px-4 w-[100vw] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {datafeatures.map((feature) => (
          <ExperianCard
            experian={feature?.translations[currentLang.value]}
            key={feature.id}
            id={feature.id}
            icon={feature.icon}
          />
        ))}
      </div>
    </>
  );
}
