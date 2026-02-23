import Image from 'next/image';

import { Skeleton } from '@mui/material';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';

export function SliderBackground({ background, loading }) {
  const { currentLang, t } = useTranslate();

  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" width={450} height={550} />
      ) : (
        // <Skeleton variant="rectangular" width={1920} height={700} />

        <>
          <Image
            alt={t('_app_name')}
            className="kenburns background"
            priority
            // fetchPriority="high"
            // loading="eager"
            src={`${URL_IMAGE}/${background}`}
            // width={1920}
            // height={700}
            style={{ aspectRatio: '1900 /700', objectFit: 'cover' }}
            // placeholder="blur"
            fill
            sizes="100vw"
          />
          {/* <Image
            alt="image-res"
            fill
            className="kenburns background-mobile"
            layout="fill"
            priority
            fetchPriority="high"
            loading="eager"
            quality={75}
            src={`${URL_IMAGE}/${background}`}
            style={{ aspectRatio: '700 /350' }}
          /> */}
        </>
      )}
    </>
  );
}
