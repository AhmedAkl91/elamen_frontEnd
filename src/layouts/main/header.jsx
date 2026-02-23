'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';
import logo from 'src/assets/logo-dark.png';

import { LanguagePopover } from 'src/components/language-popover';

import { ScrollToWithOffset } from './nav/scroll-offset';

export function Header({ categories, services }) {
  const pathname = usePathname();
  const { i18n, t } = useTranslate();
  const dir = i18n.dir();

  // إزالة prefix اللغة لو موجود (/ar أو /en)
  const cleanPath = pathname.replace(/^\/(ar|en)/, '');
  console.log('services', services);
  // helper للـ active
  const isActive = (path) => cleanPath === path || cleanPath.startsWith(`${path}/`);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href={paths.home}>
          <img src={logo.src} className="w-24" alt="logo" />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-4 text-md font-medium capitalize">
          {/* Home */}
          <Link
            href={paths.home}
            className={
              isActive(paths.home)
                ? 'text-[var(--thm-base)] font-semibold'
                : 'text-gray-700 hover:text-[var(--thm-base)]'
            }
          >
            {t('nav.home')}
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={
                cleanPath.startsWith('/products')
                  ? 'flex items-center gap-1 text-[var(--thm-base)] font-semibold'
                  : 'flex items-center gap-1 text-gray-700 hover:text-[var(--thm-base)]'
              }
            >
              <span>{t('nav.products')}</span>
              <i className="fa-solid fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div
              className={`absolute top-full ${
                dir === 'ltr' ? 'left-0' : 'right-0'
              } mt-3 min-w-30 bg-white opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50
              border-t-4 border-[var(--thm-base)] shadow-lg`}
            >
              <div className="flex flex-col">
                {categories?.map((el) => {
                  const href = `/products/product-category/${el.id}`;
                  const active = cleanPath.startsWith(href);

                  return (
                    <Link
                      key={el.id}
                      href={href}
                      className={
                        active
                          ? 'px-3 py-2 text-sm font-semibold bg-[#f7f7f7] text-[var(--thm-base)] '
                          : 'px-3 py-2 text-sm font-semibold text-black/80 hover:bg-[#f7f7f7] hover:text-[var(--thm-base)] '
                      }
                    >
                      {el.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            href={paths.sectors}
            className={
              isActive(paths.sectors)
                ? 'text-[var(--thm-base)] font-semibold'
                : 'text-gray-700 hover:text-[var(--thm-base)]'
            }
          >
            {t('nav.sectors')}
          </Link>
          {/* About */}
          <Link
            href={paths.about}
            className={
              isActive(paths.about)
                ? 'text-[var(--thm-base)] font-semibold'
                : 'text-gray-700 hover:text-[var(--thm-base)]'
            }
          >
            {t('nav.Company')}
          </Link>

          <div className="relative group">
            <button
              type="button"
              className={
                cleanPath.startsWith('/products')
                  ? 'flex items-center gap-1 text-[var(--thm-base)] font-semibold'
                  : 'flex items-center gap-1 text-gray-700 hover:text-[var(--thm-base)]'
              }
            >
              <span>{t('nav.services')}</span>
              <i className="fa-solid fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div
              className={`absolute top-full ${
                dir === 'ltr' ? 'left-0' : 'right-0'
              } mt-3 min-w-30 bg-white opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50
              border-t-4 border-[var(--thm-base)] shadow-lg`}
            >
              <div className="flex flex-col">
                {services?.map((el) => {
                  const href = `/services/${el.id}`;
                  const active = cleanPath.startsWith(href);

                  return (
                    <Link
                      key={el.id}
                      href={href}
                      className={
                        active
                          ? 'px-3 py-2 text-sm font-semibold bg-[#f7f7f7] text-[var(--thm-base)] '
                          : 'px-3 py-2 text-sm font-semibold text-black/80 hover:bg-[#f7f7f7] hover:text-[var(--thm-base)] '
                      }
                    >
                      {el.title1}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Media */}
          <Link
            href="/blogs"
            className={
              isActive('/blogs')
                ? 'text-[var(--thm-base)] font-semibold'
                : 'text-gray-700 hover:text-[var(--thm-base)]'
            }
          >
            {t('nav.media')}
          </Link>

          {/* Contact Scroll */}
          <span
            onClick={() => ScrollToWithOffset('contact_form', 100)}
            className="text-gray-700 hover:text-[var(--thm-base)] cursor-pointer"
          >
            {t('nav.contact')}
          </span>
        </nav>

        {/* Language */}
        <div className="px-2 py-1 text-sm">
          <LanguagePopover />
        </div>
      </div>
    </header>
  );
}
