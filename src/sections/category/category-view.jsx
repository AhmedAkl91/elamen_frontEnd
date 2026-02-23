'use client';

import { useState } from 'react';

import { useTranslate } from 'src/locales';
import { useGetProductsQuery } from 'src/redux/api/front/api-products';
import { useGetCategoriesQuery } from 'src/redux/api/front/api-categories';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import { Iconify } from 'src/components/iconify';

import PrimaryButton from '../utils/PrimaryButtton';
import { SplashScreen } from 'src/components/loading-screen';

export default function CategoryView({ id }) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  const [flippedId, setFlippedId] = useState(null);

  const { data, isLoading } = useGetProductsQuery(currentLang.value);

  const products = data?.data || [];
  const { data: categoriesData } = useGetCategoriesQuery(currentLang.value);

  const categoriesList = categoriesData?.data || [];

  const category = categoriesList.find((cat) => cat?.id === Number(id));
  const currentProducts = products.filter((product) => product?.category?.id === Number(id));

  if (isLoading || !categoriesData) {
    return <SplashScreen />;
  }

  if (!currentProducts.length) {
    return <div className="text-center py-20">No products found</div>;
  }

  return (
    <div dir={dir}>
      <PageBreadcrumb
        title={category?.name}
        text={category?.description}
        url="/products/product-category"
        parent="category.products"
      />

      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((el) => {
            const isFlipped = flippedId === el.id;

            return (
              <div key={el.id} className="group">
                <div
                  className="relative h-[320px] cursor-pointer [perspective:1000px]"
                  onClick={() => setFlippedId(isFlipped ? null : el.id)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]
                    ${isFlipped ? '[transform:rotateY(180deg)]' : ''}
                    md:group-hover:[transform:rotateY(180deg)]`}
                  >
                    {/* FRONT */}
                    <div className="absolute inset-0 overflow-hidden shadow-md [backface-visibility:hidden]">
                      {el.main_image && (
                        <img
                          src={el.main_image}
                          alt={el.name}
                          className="w-full h-full object-cover grayscale"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center ">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 border border-white/70 rounded-full flex items-center justify-center">
                          <Iconify icon="weui:arrow-outlined" width={28} color="#ffffff" />
                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 bg-white shadow-md flex flex-col gap-4 justify-center px-5 py-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <h4 className="text-xl font-bold text-[var(--thm-base)]">{el.name}</h4>

                      <p className="line-clamp-3 text-sm text-gray-600">{el.description}</p>

                      <div className="mx-auto z-40">
                        <PrimaryButton link={`/products/${el.id}`} text={t('btn.read.more')} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* TITLE */}
                <div className="p-4 text-center bg-red-600 text-white font-semibold capitalize">
                  {el.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
