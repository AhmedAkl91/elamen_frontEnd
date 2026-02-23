'use client';

import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------
export function ExperienceContent({ experian }) {
  // ----------------------------------------------------------------------
  const { currentLang, i18n } = useTranslate();

  console.log('experian', experian);

  //----------------------------------------------------------------------
  return (
    <>
      <div
        className="space-y-8 leading-relaxed max-w-7xl m-auto px-4 py-8 relative -mt-20
      
     
      "
      >
        {/* Background image */}
        {experian?.background && (
          <div
            className="w-full h-[70vh] top-0 sm:h-[30vh] md:h-[50vh] bg-cover bg-center rounded-lg shadow-md max-sm:h-auto"
            style={{ backgroundImage: `url(${experian?.background})` }}
          />
        )}
      </div>
      <div className="space-y-8 leading-relaxed max-w-5xl m-auto px-4 py-3 relative ">
        <h3 className=" text-4xl font-bold text-center">{experian?.title}</h3>
        {/* Content HTML */}
        {experian?.content1 && (
          <div
            className="prose prose-lg  mb-10 text-justify max-w-none leading-relaxed mt-8 relative z-10"
            dangerouslySetInnerHTML={{ __html: experian?.content1 }}
          />
        )}
      </div>
    </>
  );
}
