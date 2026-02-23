import dynamic from 'next/dynamic';

import { Skeleton } from '@mui/material';

// import ButtonTwo from 'src/utils/ButtonTwo';

const ButtonTwo = dynamic(() => import('src/utils/ButtonTwo').then((mod) => mod.ButtonTwo), {});

export function SlideText({ heading, URL, subject, button_text, loading }) {
  return (
    <div className="slider-content-wrap d-flex align-items-center text-justify">
      <div className="container">
        <div className="slider-content">
          <div className="slider-caption medium">
            <div className="inner-layer">{}</div>
          </div>
          <div className="slider-caption big">
            <div className="inner-layer">
              <div>{loading ? <Skeleton variant="text" width="100%" height={20} /> : heading}</div>
            </div>
          </div>
          <div className="slider-caption small">
            <p className="text">
              {loading ? (
                <>
                  <Skeleton variant="text" width="100%" height={20} />
                  <Skeleton variant="text" width="100%" height={20} />
                </>
              ) : (
                subject
              )}
            </p>
          </div>
          <div className="slider-btn">
            <ButtonTwo title={button_text} Link={URL} />
          </div>
        </div>
      </div>
    </div>
  );
}
