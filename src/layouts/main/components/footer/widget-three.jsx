import Link from 'next/link';

import { useTranslate } from 'src/locales';

export default function WidgetThree({ fetchCategories }) {
  const { t, currentLang, i18n } = useTranslate();

  const dir = i18n.dir();

  const links = [{ text: t(`footer.pdf`), link: '/' }];

  return (
    <div className="flex flex-col gap-1  ">
      <h3 className="text-lg font-semibold mb-2 capitalize">{t('footer.title.quick.link')}</h3>
      {fetchCategories?.map((el, index) => (
        <Link
          key={index}
          href={`/governance/${el.id}`}
          className="transition opacity-60 capitalize"
        >
          {el?.translations[currentLang.value].name}
        </Link>
      ))}
    </div>
  );
}
