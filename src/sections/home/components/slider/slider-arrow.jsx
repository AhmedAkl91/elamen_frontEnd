import { Button } from '@mui/material';

import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';

export function SliderArrowNext(props) {
  const { t } = useTranslate();
  const { onClick } = props;
  // ----------------------------------------------------------------------

  return (
    <div className="testimonial-arrows hero-arrows-prev">
      <div className="testimonial-next-arrow">
        <Button onClick={onClick}>
          <Iconify width={30} icon="mi:arrow-right" />
        </Button>
      </div>
    </div>
  );
}

export function SliderArrowPrev(props) {
  const { onClick } = props;
  // ----------------------------------------------------------------------

  return (
    <div className="testimonial-arrows  hero-arrows-next ">
      <div className="testimonial-prev-arrow">
        <Button className="" onClick={onClick}>
          <Iconify width={30} icon="mi:arrow-left" />
        </Button>
      </div>
    </div>
  );
}
