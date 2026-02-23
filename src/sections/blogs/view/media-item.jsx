import Link from 'next/link';

import { useTranslate } from 'src/locales';

import PrimaryButton from 'src/sections/utils/PrimaryButtton';

export default function MediaItem({ article: { image, title, content }, id }) {
  const { currentLang, t, i18n } = useTranslate();

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden mt-7 p-4 relative max-sm:mt-2 max-sm:p-2">
      <div className=" w-full overflow-hidden rounded-3xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col items-center justify-center max-sm:p-1">
        <Link href={`/media-center/${id}`}>
          <h3 className="text-lg font-bold mb-2 text-start line-clamp-2 mt-2">{title}</h3>
        </Link>
        <p className="text-gray-600 text-justify py-1 pb-3 line-clamp-3 mb-3 max-sm:text-sm">
          {content}
        </p>
        <PrimaryButton link={`/media-center/${id}`} text={t('btn.read.more')} />
      </div>
    </div>
  );
}
