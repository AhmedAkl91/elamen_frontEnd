'use client';

import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetAboutQuery } from 'src/redux/api/front/api-about';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import Teams from '../components/teams';
import Vision from '../components/vision';
import Experts from '../components/experts';

export default function AboutView() {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();
  const [dataFetch, setDataFetch] = useState([]);
  const { data, isLoading } = useGetAboutQuery(currentLang.value);
  useEffect(() => {
    if (data) {
      setDataFetch(data);
    }
  }, [data]);

  return (
    <>
      <PageBreadcrumb title="page.about" home="/" text="page.about.company.text" />
      <div className="w-full bg-white text-gray-800">
        <Vision data={dataFetch?.about?.visions} />
        <Experts data={dataFetch?.about?.main} />
        <Teams data={dataFetch?.employees} />
      </div>
    </>
  );
}
