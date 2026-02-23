'use client';

import { t } from 'i18next';
import { SplashScreen } from 'src/components/loading-screen';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import { useTranslate } from 'src/locales';
import { useGetProductDetailsQuery } from 'src/redux/api/front/api-product-details';

export default function ProductDetailsView({ id }) {
  const { currentLang } = useTranslate();

  const { data, isLoading, isError } = useGetProductDetailsQuery(
    { id, lang: currentLang.value },
    { skip: !id }
  );

  const product = data?.data;

  if (isLoading) {
    return <SplashScreen />;
  }

  if (isError || !product) {
    return <SplashScreen />;
  }

  const {
    name,
    description,
    eco_description,
    finishes_description,
    features,
    images,
    pdf_open_plate,
    pdf_offset_hole,
    pdf_closed_plate,
  } = product;

  return (
    <>
      <PageBreadcrumb
        title={product?.name}
        text="category.products.text"
        url="/products"
        parent="page.products"
      />
      <div className="w-full bg-white text-gray-700">
        {/* HERO */}
        <section className=" text-black bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-lg font-semibold border-b border-red-500 pb-2">{name}</h2>
            <p className="mt-4 text-sm text-black max-w-4xl">{description}</p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="space-y-10">
            {features?.map((el, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg border-b border-red-500 pb-2">{el.title}</h3>
                <div
                  className="text-justify"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: el.description }}
                />
              </div>
            ))}

            <div>
              <h3 className="font-semibold text-lg border-b border-red-500 pb-2">
                {t('mechanical-finishes')}
              </h3>

              <div className="mt-4 space-y-3">
                {pdf_open_plate && (
                  <a
                    href={pdf_open_plate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-red-600 text-white py-2 text-sm text-center"
                  >
                    (PDF)1
                  </a>
                )}

                {pdf_offset_hole && (
                  <a
                    href={pdf_offset_hole}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-red-600 text-white py-2 text-sm text-center"
                  >
                    (PDF)2
                  </a>
                )}

                {pdf_closed_plate && (
                  <a
                    href={pdf_closed_plate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-red-600 text-white py-2 text-sm text-center"
                  >
                    (PDF) 3
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {Array.isArray(images) &&
              images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={name}
                  width={900}
                  height={600}
                  className="w-full object-cover"
                />
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
