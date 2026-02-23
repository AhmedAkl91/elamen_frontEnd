import Link from 'next/link';
import React, { useState } from 'react';

import { paths } from 'src/routes/paths';

import { ArrowMenuLtr } from 'src/utils/arrow';

import { useTranslate } from 'src/locales';

import { LanguagePopover } from 'src/components/language-popover';

export default function NavDesktop({ fetchCategories }) {
  const { i18n, currentLang, t } = useTranslate();
  const dir = i18n.dir();
  const data = [
    { text: t(`nav.home`), link: paths.home },
    { text: t(`nav.about`), link: paths.about },
    { text: t(`nav.projects`), link: '/#projects' },
  ];

  const [active, setActive] = useState(false);

  return (
    <div className="bg-gray-900/20 backdrop-blur-2xl rounded-2xl hidden md:block">
      <div className="flex items-center text-white   px-6 py-2 rounded-2xl text-md">
        {data.map((el, index) => (
          <Link className="capitalize " href={el.link}>
            <li
              key={index}
              className="text-white bg-inherit lg:px-2 xl:px-2 py-1 flex items-center group lg:text-sm  md:text-sm xl:text-lg capitalize hover:bg-black/40 cursor-pointer"
            >
              {dir === 'rtl' ? <ArrowMenuLtr /> : ''}

              {el.text}

              {dir === 'ltr' ? <ArrowMenuLtr /> : ''}
            </li>
          </Link>
        ))}
        <li
          className="text-white bg-inherit lg:px-2
          xl:px-2 py-1 flex items-center group
        capitalize hover:bg-black/40 
        cursor-pointer relative z-10 lg:text-md xl:text-lg"
        >
          <button
            className="capitalize flex items-center group focus:outline-none "
            onClick={() => setActive(!active)}
          >
            {dir === 'rtl' ? <ArrowMenuLtr /> : ''}

            {t('nav.governance')}
            {dir === 'ltr' ? <ArrowMenuLtr /> : ''}
          </button>
          <ul
            className={`absolute left-0 top-full  bg-black/25 text-white shadow-md transition-all duration-300 rounded-md z-50 mt-2 flex flex-col ${active ? 'block' : 'hidden'}`}
          >
            {fetchCategories?.map((el) => (
              <Link
                href={`/governance/${el.id}`}
                className="flex items-center w-full whitespace-nowrap gap-2 hover:bg-black/40 "
              >
                <li className="lg:px-2 xl:px-5 py-2 flex items-center lg:text-xs xl:text-lg capitalize  cursor-pointer ">
                  {dir === 'rtl' ? <ArrowMenuLtr /> : ''}

                  {el?.translations[currentLang.value].name}
                  {dir === 'ltr' ? <ArrowMenuLtr /> : ''}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <Link className="capitalize " href={paths.media}>
          <li className="text-white bg-inherit lg:px-2 xl:px-2 py-1 flex items-center group lg:text-md xl:text-lg capitalize hover:bg-black/40 cursor-pointer">
            {dir === 'rtl' ? <ArrowMenuLtr /> : ''}

            {t('nav.articles')}
            {dir === 'ltr' ? <ArrowMenuLtr /> : ''}
          </li>
        </Link>
        <Link className="capitalize " href={paths.contact}>
          <li className="text-white bg-inherit lg:px-2 xl:px-2 py-1 flex items-center group lg:text-md xl:text-lg capitalize hover:bg-black/40 cursor-pointer">
            {dir === 'rtl' ? <ArrowMenuLtr /> : ''}

            {t('nav.contact')}
            {dir === 'ltr' ? <ArrowMenuLtr /> : ''}
          </li>
        </Link>
        <div className="mx-2 flex items-center gap-2 cursor-pointer text-white font-semibold">
          <LanguagePopover />
        </div>
      </div>
    </div>
  );
}
