'use client';

import { t } from 'i18next';
import { SplashScreen } from 'src/components/loading-screen';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import { useTranslate } from 'src/locales';
import { useGetProductDetailsQuery } from 'src/redux/api/front/api-product-details';
import { useGetSectorsQuery } from 'src/redux/api/front/api-sectors';

export default function SectorDetailsView({ id }) {
  const { currentLang } = useTranslate();
  const { i18n } = useTranslate();
  const dir = i18n.dir();

  const { data, isLoading } = useGetSectorsQuery(currentLang.value);

  const sectorsList = data?.data || [];

  const sector = sectorsList.find((cat) => cat?.id === Number(id));

  if (isLoading) {
    return <SplashScreen />;
  }

  const { title_ar, title_en, desc_ar, desc_en, image } = sector;

  return (
    <>
      <PageBreadcrumb
        title={dir === 'rtl' ? title_ar : title_en}
        text={t('sectors.text')}
        url="/sectors"
        parent="page.sectors"
      />
      <div className="w-full bg-white text-gray-700">
        {/* HERO */}
        <section className=" text-black bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-3 gap-5">
              <img src={image} className="" />
              <div className="col-span-2">
                <h2 className="text-xl font-semibold border-b border-red-500 pb-2">
                  {dir === 'rtl' ? title_ar : title_en}
                </h2>
                <p className="mt-4 text-sm text-black max-w-4xl">
                  {dir === 'rtl' ? desc_ar : desc_en}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
