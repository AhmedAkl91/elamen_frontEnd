import Link from 'next/link';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { Iconify } from 'src/components/iconify';

export default function FooterCopyRight({ facebook, instagram, linkedin, twitter, youtube }) {
  const { i18n } = useTranslation();
  const dir = i18n.dir();

  const socials = [
    {
      id: 1,
      icon: 'basil:facebook-solid',
      path: facebook,
      color: 'bg-[#1877F2]',
    },
    {
      id: 2,
      icon: 'prime:twitter',
      path: twitter,
      color: 'bg-[#15202b]',
    },
    {
      id: 3,
      icon: 'basil:instagram-outline',
      path: instagram,
      color: 'bg-[#C13584]',
    },
    {
      id: 4,
      icon: 'entypo-social:linkedin',
      path: linkedin,
      color: 'bg-[#0077B5]',
    },
    {
      id: 5,
      icon: 'uil:youtube',
      path: youtube,
      color: 'bg-[#FF0000]',
    },
  ];

  return (
    <div className="flex items-start justify-start gap-1 order-3 md:order-3 mt-5 sm:mt-0">
      {socials.map(({ id, icon, path, color }) => (
        <Fragment key={id}>
          {path ? (
            <Link
              href={`${path}`}
              target="_blank"
              className={`w-4 h-4 rounded-full  flex items-center justify-center  transition hover:-translate-y-0.5 ${color}`}
            >
              <Iconify icon={icon} width={18} className={`text-white  `} />
            </Link>
          ) : (
            ''
          )}
        </Fragment>
      ))}
    </div>
  );
}
