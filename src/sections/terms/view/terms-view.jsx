'use client';

import { useState, useEffect } from 'react';
import { useTranslate } from 'src/locales';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import TermsContent from '../components/terms';
import { useGetConfigQuery } from 'src/redux/api/front/api-config';

export default function TermsView() {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  const { data } = useGetConfigQuery(currentLang.value);

  const config = data?.data || {};

  return (
    <>
      <PageBreadcrumb title="page.terms" home="/" text="page.terms.text" />
      <div className="w-full bg-white text-gray-800">
        <TermsContent dataAr={config?.terms_conditions_ar} dataEn={config?.terms_conditions_en} />
      </div>
    </>
  );
}
