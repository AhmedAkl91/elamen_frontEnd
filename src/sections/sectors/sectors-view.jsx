'use client';

import { useState } from 'react';

import { useTranslate } from 'src/locales';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';
import { m, AnimatePresence } from 'framer-motion';

import { useGetSectorsQuery } from 'src/redux/api/front/api-sectors';
import Link from 'next/link';

export default function SectorsView({ id }) {
  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  const [hoveredCard, setHoveredCard] = useState(null);

  const { data, isLoading } = useGetSectorsQuery(currentLang.value);

  const sectors = data?.data || [];

  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div dir={dir}>
      {/* <PageBreadcrumb url="/products/product-category" parent="category.products" /> */}
      <PageBreadcrumb title={t('page.sectors')} text={t('sectors.text')} />

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors?.map((el) => (
              <m.div
                key={el.id}
                className="group cursor-pointer relative pb-16 px-2"
                onHoverStart={() => setHoveredCard(el.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Section */}
                <div className="relative h-50 overflow-hidden">
                  <img
                    src={el.image || 'https://placehold.co/500x700'}
                    alt={el.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover overlay with plus icon */}
                  <AnimatePresence>
                    {hoveredCard === el.id && (
                      <m.div
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '100%', opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="absolute inset-0 bg-black/20 bg-opacity-70 flex items-center justify-center z-10"
                      >
                        <m.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        />
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Card */}
                <m.div
                  animate={{
                    backgroundColor: hoveredCard === el.id ? '#1f2937' : '#ffffff',
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 rounded-lg shadow-lg border-2 border-white overflow-hidden z-20"
                  style={{ bottom: '2rem' }}
                >
                  <m.div
                    animate={{
                      height: hoveredCard === el.id ? 'auto' : '120px',
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5">
                      {/* Author and Comments */}

                      {/* Title */}
                      <div className="flex items-start gap-3 mb-4">
                        <Link href={`/products/product-category/${el.id}`}>
                          <m.h3
                            className="text-lg font-bold leading-tight"
                            animate={{
                              color: hoveredCard === el.id ? '#ffffff' : '#111827',
                            }}
                          >
                            {el.title_ar}
                          </m.h3>
                        </Link>
                      </div>

                      {/* Read More Button */}
                      <AnimatePresence>
                        {hoveredCard === el.id && (
                          <Link href={`/sectors/${el.id}`}>
                            <m.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              <m.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[var(--thm-base)] hover:bg-[var(--thm-light)] text-white px-4 py-1 text-sm font-medium flex items-center gap-2 transition-colors"
                              >
                                <span>{t('btn.more')}</span>
                              </m.button>
                            </m.div>
                          </Link>
                        )}
                      </AnimatePresence>
                    </div>
                  </m.div>
                </m.div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
