'use client';

import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetFeaturesListQuery } from 'src/redux/api/front/api-feature';

import MassageContent from './massage-content';

export function Massage({ title17 }) {
  const { t, currentLang } = useTranslate();

  const [dataFeature, setDataFeature] = useState(null);
  const { data: feature } = useGetFeaturesListQuery();

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------
  useEffect(() => {
    const check = () => {
      if (feature) {
        setDataFeature(feature.features.features);
      }
    };
    check();
  }, [feature]);

  // const TrSubTitle = fetchTranslations(currentLang.value, DataTransSubTitle);

  const slidesData = dataFeature?.map((el) => ({
    id: el.id,
    title: el.translations[currentLang.value].title,
    description: el.translations[currentLang.value].content1,
    image: el.translations[currentLang.value].image,
    pos: el.translations[currentLang.value].description,
  }));

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  return <MassageContent title17={title17} slidesData={slidesData || []} />;
}
