import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';
import logo from 'src/assets/logo-dark.png';

import ContactSection from 'src/sections/home/components/contact-section';
import { Fragment } from 'react';
import { Iconify } from 'src/components/iconify';
// ----------------------------------------------------------------------
export function Footer({ configSetting }) {
  const { t } = useTranslate();
  const { i18n } = useTranslation();

  console.log('configSetting', configSetting);

  // ----------------------------------------------------------------------
  const linksOne = [
    { text: t(`nav.home`), link: paths.home },
    { text: t(`nav.about`), link: paths.about },
    { text: t(`nav.services`), link: paths.services },
    { text: t(`nav.media`), link: paths.media },
  ];

  const linksTow = [
    { text: t(`footer.privacy`), link: paths.privacy },
    { text: t(`footer.cookies`), link: paths.cookies },
    { text: t(`footer.terms`), link: paths.terms },
  ];

  const socials = [
    {
      id: 1,
      icon: 'ri:facebook-fill',
      path: configSetting?.facebook || '',
    },
    {
      id: 2,
      icon: 'garden:twitter-fill-12',
      path: configSetting?.twitter || '',
    },
    {
      id: 3,
      icon: 'ri:instagram-fill',
      path: configSetting?.instagram || '',
    },
    {
      id: 4,
      icon: 'ri:linkedin-fill',
      path: configSetting?.linkedin || '',
    },
  ];
  // ----------------------------------------------------------------------

  return (
    <>
      <ContactSection configSetting={configSetting} />
      <footer className="bg-white text-gray-800">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 pt-10 pb-3 md:grid-cols-3">
          <div>
            <Image src={logo} alt="Alamin Group " width={250} className="mx-auto" />

            <div className="w-full mx-auto">
              <div className="flex gap-2 my-2 mx-auto items-center justify-center">
                {socials.map(({ id, icon, path }) => (
                  <Fragment key={id}>
                    {path ? (
                      <Link
                        href={`${path}`}
                        target="_blank"
                        className="w-5 h-5 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-[var(--thm-base)] hover:text-black transition"
                      >
                        <Iconify icon={icon} width={20} className="text-white" />
                      </Link>
                    ) : (
                      ''
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-red-600">{t('footer.link.1')}</h4>
            <ul className="space-y-2 text-xs">
              {linksOne?.map((el, index) => (
                <li key={index}>
                  <Link href={el.link}>{el.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-red-600">{t('footer.link.2')}</h4>
            <ul className="space-y-2 text-xs">
              {linksTow?.map((el, index) => (
                <li key={index}>
                  <Link href={el.link}>{el.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <footer>
        {/* --- Top Footer Area (Dark Background) --- */}

        {/* --- Bottom Footer Bar (Red Background) --- */}
        <div className="bg-red-700 py-4 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} {t('footer.right')}.
            </p>
            <div className="flex space-x-4">
              <Link href={paths.about} className="hover:text-gray-200 transition">
                {t('footer.about.us')}
              </Link>
              <span className="text-red-300">|</span>
              <Link href={paths.privacy} className="hover:text-gray-200 transition">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
