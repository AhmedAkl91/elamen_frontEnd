'use client';

import { useEffect, useCallback } from 'react';

import { useTranslate } from 'src/locales';
import { useGetConfigQuery } from 'src/redux/api/front/api-config';
import { useGetCategoriesQuery } from 'src/redux/api/front/api-categories';

import { SplashScreen } from 'src/components/loading-screen';
import { useSettingsContext } from 'src/components/settings';

import { Header } from './header';
import { Footer } from './footer';
import { useGetServicesQuery } from 'src/redux/api/front/api-services';

// ----------------------------------------------------------------------

export function MainLayout({ children }) {
  const { currentLang } = useTranslate();
  const settings = useSettingsContext();

  const checkDirection = useCallback(() => {
    if (currentLang.value === 'ar') {
      settings.onUpdateField('direction', 'rtl');
    } else {
      settings.onUpdateField('direction', 'ltr');
    }
  }, [currentLang.value, settings]);

  useEffect(() => {
    checkDirection();
  }, []);

  console.log('test');

  const { categories, isLoadingCategories } = useGetCategoriesQuery(currentLang.value, {
    selectFromResult: ({ data, isLoading }) => ({
      categories: data?.data ?? [],
      isLoadingCategories: isLoading,
    }),
  });

  const { data: services } = useGetServicesQuery(currentLang.value);

  const { config, isLoadingConfig } = useGetConfigQuery(currentLang.value, {
    selectFromResult: ({ data, isLoading }) => ({
      config: data ?? {},
      isLoadingConfig: isLoading,
    }),
  });

  if (isLoadingCategories || isLoadingConfig) {
    return <SplashScreen />;
  }

  return (
    <>
      <Header categories={categories} services={services?.data.services} />
      {children}
      <Footer configSetting={config?.data || {}} />
    </>
  );
}
