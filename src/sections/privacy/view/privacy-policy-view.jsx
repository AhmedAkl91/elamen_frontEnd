'use client';

import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetAboutQuery } from 'src/redux/api/front/api-about';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import PrivacyPolicyContent from '../components/privacy';
import { useGetConfigQuery } from 'src/redux/api/front/api-config';

export default function PrivacyPolicyView() {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  const { data } = useGetConfigQuery(currentLang.value);

  const config = data?.data || {};

  return (
    <>
      <PageBreadcrumb title="page.privacy" home="/" text="page.privacy.text" />
      <div className="w-full bg-white text-gray-800">
        <PrivacyPolicyContent
          dataAr={config?.privacy_policy_ar}
          dataEn={config?.privacy_policy_en}
          t={t}
        />
      </div>
    </>
  );
}
