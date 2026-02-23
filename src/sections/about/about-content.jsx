import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';

export default function AboutContent({
  data,
  dataValue,
  dataAbout,
  title7,
  title8,
  title9,
  title10,
  title11,
  title12,
}) {
  const { i18n } = useTranslation();
  const { currentLang, t } = useTranslate();
  const dir = i18n.dir();

  console.log('dataAbout', dataAbout);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-fill  text-white relative overflow-hidden">
      {/* left  */}
      <m.div
        className="flex flex-col justify-center items-center  py-4"
        initial={{ opacity: 0, y: '30vh' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: 'easeIn' }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-black uppercase tracking-wide my-4 md:my-8">
          {dataAbout?.sub_title}
        </h2>
        <div className="h-[60px] md:h-[100px] w-[1px] bg-[var(--thm-base)] mb-4 " />
        <p className="w-full px-10 text-justify text-base md:text-lg leading-relaxed text-black max-sm:px-3">
          <div
            className="text-justify"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: dataAbout?.content_1 }}
          />
        </p>
      </m.div>

      <m.div
        className="bg-cover bg-center bg-no-repeat min-h-[50vh]"
        style={{ backgroundImage: `url(${`${URL_IMAGE}/${dataAbout?.image1} `})` }}
        initial={{ opacity: 0, y: '-30vh' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: 'easeIn' }}
      />

      {/* <m.img
        src={ServiceStart.src}
        alt="services star"
        className="absolute top-[70vh] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-spin w-20 md:w-20"
        style={{ animationDuration: '10s' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      /> */}
    </section>
  );
}
