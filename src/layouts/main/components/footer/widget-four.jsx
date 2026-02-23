import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';

export default function WidgetFour({ dataSetting }) {
  const { t } = useTranslate();

  return (
    <div className="flex flex-col gap-3 pt-4 md:pt-0">
      <h3 className="text-lg font-semibold mb-2 capitalize">{t('footer.title.contact')}</h3>
      <p className="text-sm flex items-center gap-2">
        <Iconify icon="mdi-light:phone" width={30} color="#ff6900" />

        <a href={`tel:${dataSetting?.phone1}`} className="">
          <span className="opacity-60">{dataSetting?.phone1}</span>
        </a>
      </p>
      <p className="text-sm flex items-center gap-2">
        <Iconify icon="mi:email" width={30} color="#ff6900" />
        <a href={` mailto:${dataSetting?.email}}`} className="">
          <span className="opacity-60">{dataSetting?.email}</span>
        </a>
      </p>
      <p className="text-sm flex items-center gap-2">
        <Iconify icon="charm:map-pin" width={30} color="#ff6900" />
        <span className="opacity-60">{dataSetting?.address}</span>
      </p>
    </div>
  );
}
