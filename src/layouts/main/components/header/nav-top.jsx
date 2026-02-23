import Link from 'next/link';
import { Fragment } from 'react';

import { Iconify } from 'src/components/iconify';
import { LanguagePopover } from 'src/components/language-popover';

export default function NavTop({ SettingCurrent }) {
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
    <div className=" hidden sm:block bg-[#0a2b5c] text-white text-sm py-1">
      <div className="container m-auto">
        <div className=" flex flex-col md:flex-row justify-between  text-md  gap-2 md:gap-0 pb-2">
          <div className="flex flex-col sm:flex-row justify-start  gap-1 sm:gap-4">
            <span className="flex items-center gap-1">
              <Iconify icon="mi:email" width={22} />
              <Link
                href={`mailto:${SettingCurrent?.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SettingCurrent?.email}
              </Link>
            </span>
            <span className="flex items-center gap-1">
              <Iconify icon="mdi-light:phone" width={22} />
              <Link href={`tel:${SettingCurrent?.phone1}`}>{SettingCurrent?.phone1}</Link>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row  gap-1 sm:gap-6 justify-end ">
            <div className="flex gap-4">
              {/* {socials.map(({ id, icon, href }) => (
                <Link href={`${href}`} target="_blank" key={id}>
                  <Iconify icon={icon} width={15} />
                </Link>
              ))} */}

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
            </div>
            <LanguagePopover />
          </div>
        </div>
      </div>
    </div>
  );
}
