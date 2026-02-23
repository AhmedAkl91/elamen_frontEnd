'use client';

import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';
import { useTranslate } from 'src/locales';
import { useGetCategoriesQuery } from 'src/redux/api/front/api-categories';
import Categories from '../home/components/categories';

export default function ProductView() {
  const { currentLang, t, i18n } = useTranslate();

  const { data } = useGetCategoriesQuery(currentLang.value);

  const categories = data?.data || [];

  return (
    <>
      <PageBreadcrumb title={t('page.products')} text={t('category.products.text')} />
      <Categories categories={categories} />
    </>
  );
}
