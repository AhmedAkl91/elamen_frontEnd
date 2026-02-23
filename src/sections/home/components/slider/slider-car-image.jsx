import Image from 'next/image';

import { useResponsive } from 'src/hooks/use-responsive';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';

export function CarImage({ image }) {
  const { currentLang, t } = useTranslate();

  const smDown = useResponsive('down', 'sm');

  return (
    <div className="car-holder">
      <div className="car">
        <Image
          width={700}
          height={347}
          fetchPriority="high"
          alt={t('_app_name')}
          className="wow rollIn image-slider-car"
          src={`${URL_IMAGE}/${image}`}
          style={{ aspectRatio: '700 /347' }}
          priority
        />
      </div>
      <div className="shape">
        <div className="slide_bottom" data-duration="1.5s" data-delay="0.3s">
          {}
        </div>
        <div data-animation-name="dotAnimatedBottomToTop2" data-duration="1.5s" data-delay="0.2s">
          {}
        </div>
        <div className="slide_top" data-duration="1.5s" data-delay="0.5s">
          {}
        </div>
      </div>
    </div>
  );
}
