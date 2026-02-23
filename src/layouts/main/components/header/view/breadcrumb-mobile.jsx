'use client';

import { useTranslate } from 'src/locales';

export function PageBreadcrumbMedia({ title, page, parent, url }) {
  const { t } = useTranslate();

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------
  return (
    <div
      className="
          relative w-full
          md:h-[60vh]
          h-[40vh]
          bg-cover
          bg-center bg-no-repeat
          flex items-end justify-start
     "
      style={
        {
          // backgroundImage: `url(${about.src})`,
        }
      }
    >
      {/* <div className="absolute -bottom-1 left-0 w-full h-96 bg-gradient-to-t from-[#6F6259CC] to-transparent"></div> */}

      <div className="absolute -bottom-1 left-0 w-full h-96 bg-gradient-to-t from-[var(--thm-base)] to-transparent" />

      <h1 className="mb-10 text-4xl md:text-7xl font-medium leading-tight text-white px-4 z-10 container mx-auto">
        {title}
      </h1>
    </div>
  );
}
