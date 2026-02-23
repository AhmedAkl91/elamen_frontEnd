import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { paths } from 'src/routes/paths';

export default function WidgetTow() {
  const { i18n, t } = useTranslation();
  const dir = i18n.dir();
  const data = [
    { text: t(`nav.home`), link: paths.home },
    { text: t(`nav.about`), link: '#' },
    { text: t(`nav.projects`), link: '/#projects' },
    { text: t(`nav.investors`), link: '/#projects' },
    { text: t(`nav.media`), link: '/#projects' },
    { text: t(`nav.contact`), link: '/#projects' },
  ];
  return (
    <div className="flex flex-col gap-3 ">
      <h3 className="text-lg font-semibold mb-2 capitalize">{t('footer.title.quick.link')}</h3>
      <div className=" text-sm opacity-90 grid grid-cols-2 gap-y-3">
        {data?.map((el, index) => (
          <Link key={index} href={`${el.link}`} className="transition opacity-60 capitalize">
            {el.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
