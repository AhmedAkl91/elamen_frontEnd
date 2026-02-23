import { Skeleton } from '@mui/material';

export function TitleSideSkeleton() {


  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="section-heading-side" data-aos="fade-down">
      <h4>
        <Skeleton
          variant="text"
          width="20%"
          height={40}
          sx={{
            textAlign: 'left',
            margin: '0 auto',
          }}
        />
      </h4>
      <Skeleton
        variant="text"
        width="30%"
        height={20}
        sx={{
          textAlign: 'left',
          margin: '0 auto',
        }}
      />
    </div>
  );
}
