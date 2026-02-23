import { useTranslate } from 'src/locales';

export default function TermsContent({ dataAr, dataEn }) {
  const { t, currentLang } = useTranslate();
  3;
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1  gap-10">
        <div>
          <h3 className=" text-2xl mb-3 pb-1  font-semibold border-b border-red-500 inline-block text-center">
            {t('page.terms')}
          </h3>
          <p className="text-lg leading-5 text-gray-600">
            {currentLang.value === 'ar' ? dataAr : dataEn}
          </p>
        </div>
      </div>
    </section>
  );
}
