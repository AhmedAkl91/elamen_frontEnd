import Image from 'next/image';
import NextLink from 'next/link';

import { URL_IMAGE } from 'src/config';

// ----------------------------------------------------------------------
export default function LogoHeader({ homeNine, logoDark }) {
  return (
    <NextLink href="/"   >
      {homeNine ? (
        <Image
          src={`${URL_IMAGE}/${logoDark}`}
          alt="logo"
          className="logo_dark"
          priority
          loading="eager"
          sizes="(max-width: 768px) 50vw,(max-width: 1200px) 50vw,33vw"
          fill
        />
      ) : (
        <Image
          src={`${URL_IMAGE}/${logoDark}`}
          alt="logo"
          fill
          className="logo_dark"
          sizes="(max-width: 768px) 50vw,(max-width: 1200px) 50vw,33vw"
          priority
          loading="eager"
        />
      )}
    </NextLink>
  );
}
