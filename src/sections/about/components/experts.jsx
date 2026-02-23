import BG from 'src/assets/bg_2.jpg';
import { useTranslate } from 'src/locales';

export default function Experts({ data }) {
  const { t } = useTranslate();
  return (
    // <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">

    // </section>
    <div className="bg-white py-10" style={{ background: `url(${BG.src})` }}>
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="font-semibold mb-2 mt-2 text-2xl  pb-1   border-b border-red-500  inline-block">
            {t('about.what.do.title')}
          </h3>
          <p className="text-lg text-gray-600 mb-6">{data?.description}</p>
        </div>
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={data?.video_url}
            title="ICT Filtration"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
