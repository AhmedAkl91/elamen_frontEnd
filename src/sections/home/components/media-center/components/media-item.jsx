import Link from 'next/link';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';

import PrimaryButton from 'src/sections/utils/PrimaryButtton';

export default function MediaItem({ article: { cover, name, description }, id }) {
  const { currentLang, t, i18n } = useTranslate();

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden mt-7 p-4 relative max-sm:mt-2 max-sm:p-2">
      <div className=" w-full overflow-hidden rounded-3xl">
        <img src={`${URL_IMAGE}/${cover}`} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col items-center justify-center max-sm:p-1">
        <Link href={`/media-center/${id}`}>
          <h3 className="text-lg font-bold mb-2 text-start line-clamp-2 mt-2">{name}</h3>
        </Link>

        <p className="text-gray-600 text-justify py-1 pb-3 line-clamp-3 mb-3 max-sm:text-sm">
          {description}
        </p>
        <PrimaryButton link={`/media-center/${id}`} text={t('btn.read.more')} />
      </div>
    </div>
  );
}
