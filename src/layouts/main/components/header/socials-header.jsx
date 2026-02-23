import Link from 'next/link';
import React, { Fragment } from 'react';

import { Iconify } from 'src/components/iconify';

export default function SocialsHeader({ SettingCurrent }) {
  const socials = [
    {
      id: 1,
      icon: 'ri:facebook-fill',
      path: SettingCurrent?.facebook_link || '',
    },
    {
      id: 2,
      icon: 'garden:twitter-fill-12',
      path: SettingCurrent?.twitter_link || '',
    },
    {
      id: 3,
      icon: 'ri:instagram-fill',
      path: SettingCurrent?.instagram_link || '',
    },
    {
      id: 4,
      icon: 'ri:linkedin-fill',
      path: SettingCurrent?.linkedin_link || '',
    },
    {
      id: 5,
      icon: 'mdi:youtube',
      path: SettingCurrent?.youtube_link || '',
    },
  ];
  return (
    <>
      {socials.map(({ id, icon, path }) => (
        <Fragment key={id}>
          {path ? (
            <Link href={`${path}`} target="_blank" className=" transition  ">
              <Iconify icon={icon} width={18} className="text-white" />
            </Link>
          ) : (
            ''
          )}
        </Fragment>
      ))}
    </>
  );
}
