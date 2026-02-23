import Link from 'next/link';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';

import PrimaryButton from 'src/sections/utils/PrimaryButtton';

export default function ServiceCard({ service: { image, title, description }, id }) {
  const { t } = useTranslate();
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-3 relative max-sm:p-2">
      <div className=" w-full overflow-hidden rounded-3xl">
        <img src={`${URL_IMAGE}/${image}`} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="pt-4 flex flex-col items-center justify-center">
        <Link href={`/services/${id}`}>
          <h3 className="text-2xl font-bold  text-center max-sm:text-lg capitalize">{title}</h3>
        </Link>

        <p className="text-gray-600 text-start my-3 line-clamp-3 max-sm:text-sm">{description}</p>
        <PrimaryButton link={`/services/${id}`} text={t('btn.read.more')} />
      </div>
    </div>
  );
}
