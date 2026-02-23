'use client';

import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetProductsQuery } from 'src/redux/api/front/api-products';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import { Iconify } from 'src/components/iconify';

import PrimaryButton from '../utils/PrimaryButtton';
// ----------------------------------------------------------------------
export function TechnologyView() {
  const [flipped, setFlipped] = useState(false);
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();
  const [dataProducts, setDataProducts] = useState([]);
  const { data, isLoading } = useGetProductsQuery(currentLang.value);
  useEffect(() => {
    if (data) {
      setDataProducts(data.data);
    }
  }, [data]);
  if (isLoading || !dataProducts) {
    return null; // or loader component
  }
  const tecnologyProdcuts = dataProducts?.filter((product) => product.is_tecnology == 1) || [];
  //----------------------------------------------------------------------
  return (
    <>
      <PageBreadcrumb title={`${t('page.services')}`} url />
      <div className="max-w-7xl px-5  mx-auto py-10">
        <div className="flex flex-wrap  ">
          {tecnologyProdcuts?.map((el) => (
            <div className="w-1/3 px-2 py-2">
              <div className="bg-transparent  shadow overflow-hidden cursor-pointer">
                <div
                  className="h-[320px] cursor-pointer group [perspective:1000px]"
                  onClick={() => setFlipped(!flipped)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]
                             ${flipped ? '[transform:rotateY(180deg)]' : ''}
                             md:group-hover:[transform:rotateY(180deg)]`}
                  >
                    <div className="absolute inset-0  overflow-hidden shadow-md [backface-visibility:hidden] pointer-events-auto group-hover:pointer-events-none">
                      {el.main_image && (
                        <img
                          src={el.main_image}
                          alt={el.name}
                          className="w-full  object-cover grayscale"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center px- py-6 z-10 gap-4">
                        <div className="w-4 h4 sm:w-7 sm:h-7 bg-transparent border-1 border-[#ffffffbd] rounded-full flex items-center justify-center shadow-md">
                          {/* <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> */}
                          <Iconify icon="weui:arrow-outlined" width={40} color="#ffffffbd" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0  shadow-md bg-white flex flex-col gap-4 justify-center px-4 py-6 [transform:rotateY(180deg)] [backface-visibility:hidden] pointer-events-none group-hover:pointer-events-auto">
                      <h4 className="text-xl font-bold text-center leading-tight text-[var(--thm-base)]">
                        {el.name}
                      </h4>
                      <p className="line-clamp-3">{el.description}</p>
                      <div className="mx-auto">
                        <PrimaryButton link={`/products/${el.id}`} text={t('btn.read.more')} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center bg-red-600 text-white font-semibold">{el.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
