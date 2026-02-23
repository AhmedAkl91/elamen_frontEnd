import Skeleton from '@mui/material/Skeleton';

export function SliderSkeleton() {
  const renderCarImg = (
    <div className="bg_cover">
      <div className="slider_desktop d-none-mobile">
        <Skeleton variant="rectangular" width="100%" height={800} />
      </div>
      <div className="slider_desktop d-none-desktop">
        <Skeleton variant="rectangular" width="100%" height={500} />
      </div>
    </div>
  );
  return (
    <div className="hero2-slider-area">
      <div className="her2-section-area">{renderCarImg}</div>
    </div>
  );
}
