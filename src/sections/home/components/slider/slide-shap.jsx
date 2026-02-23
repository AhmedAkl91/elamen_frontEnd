import Image from 'next/image';

import { useTranslate } from 'src/locales';
// import heroS1en from 'src/ass/shape/hero-s-1-en.webp';
import heroS1en from 'src/assets/bg/shape/hero-s-1-en.webp';
import heroS1ar from 'src/assets/bg/shape/hero-s-1-ar.webp';
import heroS2ar from 'src/assets/bg/shape/hero-s-2-ar.webp';
import heroS2en from 'src/assets/bg/shape/hero-s-2-en.webp';

// import heroS2ar from '../../../../../public/img/shape/hero-s-1-ar.webp';

export function SliderShap() {
  // ----------------------------------------------------------------------
  const { currentLang, t } = useTranslate();

  // ----------------------------------------------------------------------
  return (
    <div className="hero-bg-shape " data-wow-duration=".9s" data-wow-delay=".3s">
      <div className="hero-s-1  d-none-mobile">
        {currentLang.value === 'ar' ? (
          <Image
            src={heroS1ar.src}
            alt={t('_app_name')}
            priority
            loading="eager"
            style={{ aspectRatio: '495 /513', objectFit: 'cover' }}
            width={495}
            height={513}
          />
        ) : (
          <Image
            src={heroS1en.src}
            alt={t('_app_name')}
            priority
            loading="eager"
            style={{ aspectRatio: '520 /534', objectFit: 'cover' }}
            width={520}
            height={534}
          />
        )}
      </div>
      <div className="hero-s-2 d-none-mobile">
        {currentLang.value === 'ar' ? (
          <Image
            src={heroS2ar.src}
            alt={t('_app_name')}
            priority
            loading="eager"
            style={{ aspectRatio: '495 /513', objectFit: 'cover' }}
            width={495}
            height={513}
          />
        ) : (
          <Image
            src={heroS2en.src}
            alt={t('_app_name')}
            priority
            loading="eager"
            style={{ aspectRatio: '520 /534', objectFit: 'cover' }}
            width={495}
            height={495}
          />
        )}
      </div>
    </div>
  );
}
