import React from 'react';
import Link from 'next/link';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

export default function Nav({ fetchCategories }) {
  const { t, i18n, currentLang } = useTranslate();

  const dir = i18n.dir();

  return (
    <nav className="hidden md:flex gap-4 w-full   justify-center  ">
      <ul className="flex gap-6 items-center xl:gap-6 lg:gap-6 md:gap-6">
        <li>
          <Link
            href={paths.home}
            className="hover:text-[var(--base-1)]  capitalize transition-all duration-300"
          >
            {t(`nav.home`)}
          </Link>
        </li>

        <li className="relative group cursor-pointer inline-block py-2">
          <a
            href="#"
            className="hover:text-[var(--base-1)]  capitalize transition-all duration-300 flex items-center relative"
          >
            {t(`nav.society`)}
            {dir == 'rtl' ? (
              <svg
                className="w-2 h-2 ml-1 mr-1 transform transition-transform duration-300 group-focus-within:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
              </svg>
            ) : (
              ''
            )}
            {dir == 'ltr' ? (
              <svg
                className="w-2 h-2 ml-1 mr-1 transform transition-transform duration-300 group-focus-within:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
              </svg>
            ) : (
              ''
            )}
          </a>
          <ul className=" absolute hidden group-focus-within:flex flex-col bg-white shadow-lg mt-2 py-2 px-2 min-w-full whitespace-nowrap transition-all duration-300 opacity-0 group-focus-within:opacity-100 group-focus-within:translate-y-2 z-50">
            {/* group-hover:event-unset absolute left-0 bottom-[0%] min-w-[200px] columns-3  p-3 text-n2 duration-300 group-hover:visible group-hover:top-full group-hover:opacity-100 lg:px-5 invisible opacity-0 pointer-events-none bg-[var(--base-1)] */}

            <Link
              href={paths.about}
              className="hover:text-[var(--base-4)]  capitalize transition-all duration-300"
            >
              <li className=" px-4 py-2 hover:text-[var(--base-4)]  capitalize hover:bg-[var(--base-1)] transition-all duration-300">
                {t(`nav.about`)}
              </li>
            </Link>

            <Link
              href={paths.organize}
              className="hover:text-[var(--base-4)]  capitalize transition-all duration-300"
            >
              <li className=" px-4 py-2 hover:text-[var(--base-4)]  capitalize hover:bg-[var(--base-1)] transition-all duration-300">
                {t(`nav.organize`)}
              </li>
            </Link>

            <Link
              href={paths.goals}
              className="hover:text-[var(--base-4)]  capitalize transition-all duration-300"
            >
              <li className="block px-4 py-2 hover:text-[var(--base-4)]  capitalize hover:bg-[var(--base-1)] transition-all duration-300">
                {t(`nav.about.strategic.goals`)}
              </li>
            </Link>
            <Link
              href={paths.chairman}
              className="hover:text-[var(--base-4)]  capitalize transition-all duration-300"
            >
              <li className="block px-4 py-2 hover:text-[var(--base-4)]  capitalize hover:bg-[var(--base-1)] transition-all duration-300">
                {t(`nav.about.chairman`)}
              </li>
            </Link>
            <Link
              href={paths.members}
              className="hover:text-[var(--base-4)]  capitalize transition-all duration-300"
            >
              <li className="block px-4 py-2 hover:text-[var(--base-4)]  capitalize hover:bg-[var(--base-1)] transition-all duration-300">
                {t(`nav.about.board.members`)}
              </li>
            </Link>
            <Link
              href={paths.committees}
              className="hover:text-[var(--base-4)]  capitalize transition-all duration-300"
            >
              <li className="block px-4 py-2 hover:text-[var(--base-4)]  capitalize hover:bg-[var(--base-1)] transition-all duration-300">
                {t(`nav.about.committees`)}
              </li>
            </Link>
          </ul>
        </li>

        <li className="relative inline-block group py-2">
          <a
            href="#"
            className="hover:text-[var(--base-1)]  capitalize transition-all duration-300 flex items-center"
          >
            {t(`nav.governance`)}
            {dir == 'rtl' ? (
              <svg
                className="w-2 h-2 ml-1 mr-1 transform transition-transform duration-300 group-focus-within:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
              </svg>
            ) : (
              ''
            )}
            {dir == 'ltr' ? (
              <svg
                className="w-2 h-2 ml-1 mr-1 transform transition-transform duration-300 group-focus-within:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
              </svg>
            ) : (
              ''
            )}
          </a>
          <ul className="absolute hidden group-focus-within:flex flex-col bg-white shadow-lg mt-2 py-2 px-2 min-w-full whitespace-nowrap transition-all duration-300 opacity-0 group-focus-within:opacity-100 group-focus-within:translate-y-2 z-50">
            {fetchCategories?.map((el) => (
              <Link
                href={`/governance/${el.id}`}
                className="hover:text-[var(--base-4)]  capitalize transition-all duration-300 "
              >
                <li className="block px-4 py-2 hover:text-[var(--base-4)]  capitalize hover:bg-[var(--base-1)] transition-all duration-300  ">
                  {el?.translations[currentLang.value].name}
                </li>
              </Link>
            ))}
          </ul>
        </li>

        <Link
          href={paths.program}
          className="hover:text-[var(--base-1)]  capitalize transition-all duration-300"
        >
          <li>{t(`nav.programs`)}</li>
        </Link>
        <Link
          href={paths.media}
          className="hover:text-[var(--base-1)]  capitalize transition-all duration-300"
        >
          <li>{t(`nav.media`)}</li>
        </Link>
        <li className="relative group cursor-pointer inline-block py-2">
          <a
            href="#"
            className="hover:text-[var(--base-1)]  capitalize transition-all duration-300 flex items-center relative"
          >
            {t(`nav.electronic.service`)}
            {dir == 'rtl' ? (
              <svg
                className="w-2 h-2 ml-1 mr-1 transform transition-transform duration-300 group-focus-within:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
              </svg>
            ) : (
              ''
            )}
            {dir == 'ltr' ? (
              <svg
                className="w-2 h-2 ml-1 mr-1 transform transition-transform duration-300 group-focus-within:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
              </svg>
            ) : (
              ''
            )}
          </a>
          <ul className="absolute hidden group-focus-within:flex flex-col bg-white shadow-lg mt-2 py-2 px-2 min-w-full whitespace-nowrap transition-all duration-300 opacity-0 group-focus-within:opacity-100 group-focus-within:translate-y-2 z-50">
            <Link
              href={paths.volunteer}
              className="hover:text-[var(--base-4)]  capitalize transition-all duration-300"
            >
              <li className=" px-4 py-2 hover:text-[var(--base-4)]  capitalize hover:bg-[var(--base-1)] transition-all duration-300">
                {t(`nav.volunteer`)}
              </li>
            </Link>

            <Link
              href={paths.proposals}
              className="hover:text-[var(--base-4)]  capitalize transition-all duration-300"
            >
              <li className=" px-4 py-2 hover:text-[var(--base-4)]  capitalize hover:bg-[var(--base-1)] transition-all duration-300">
                {t(`nav.proposals`)}
              </li>
            </Link>
          </ul>
        </li>
        <Link
          href={paths.contact}
          className="hover:text-[var(--base-1)]  capitalize transition-all duration-300"
        >
          <li>{t(`nav.contact`)}</li>
        </Link>
      </ul>
    </nav>
  );
}
