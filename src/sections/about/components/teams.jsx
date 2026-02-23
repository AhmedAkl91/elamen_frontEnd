import { useTranslate } from 'src/locales';

export default function Teams({ data }) {
  console.log('data', data);
  const { t } = useTranslate();
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">{t('about.team.title')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {data?.map((el, i) => (
            <div key={i} className="bg-white border  text-center">
              <img src={el.image} className="aspect-square bg-gray-100 mb-2 w-full" />
              <p className=" font-medium py-2 bg-gray-700 text-white text-xl block">
                <span className="block">{el.name}</span>
                <span>{el.job_title}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
