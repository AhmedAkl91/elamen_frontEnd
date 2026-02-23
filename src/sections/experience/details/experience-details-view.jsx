'use client';

import { useTranslate } from 'src/locales';
// import { PageBreadcrumbMedia } from 'src/layouts/main/components/breadcrumb-media';

import { useState, useEffect } from 'react';

import { useGetFeaturesListQuery } from 'src/redux/api/front/api-feature';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import { ExperienceContent } from './Experience-content';

// ----------------------------------------------------------------------
export function ExperienceDetailsView({ id }) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();
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

  const experience = datafeatures.find((el) => el.id == id);

  //----------------------------------------------------------------------
  return (
    <>
      {/* <PageBreadcrumbMedia title={`${t('page.media')}`} /> */}
      <PageBreadcrumb
        parent={`${t('page.experience')}`}
        url="/experience"
        title={experience?.translations[currentLang.value].title}
      />

      <ExperienceContent id={id} experian={experience?.translations[currentLang.value]} />
    </>
  );
}
