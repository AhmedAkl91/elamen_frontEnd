'use client';

import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetAboutQuery } from 'src/redux/api/front/api-about';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import CookiesPolicyContent from '../components/cookies';
import { useGetConfigQuery } from 'src/redux/api/front/api-config';

export default function CookiesPolicyView() {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  const { data } = useGetConfigQuery(currentLang.value);

  const config = data?.data || {};
  return (
    <>
      <PageBreadcrumb title="page.cookies" home="/" text="page.cookies.text" />
      <div className="w-full bg-white text-gray-800">
        <CookiesPolicyContent
          dataAr={config?.cookies_policy_ar}
          dataEn={config?.cookies_policy_en}
          t={t}
        />
      </div>
    </>
  );
}
