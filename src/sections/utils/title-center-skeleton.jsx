import { Skeleton } from '@mui/material';

export function TitleCenteredSkeleton({ title, subTitle }) {

  return (

    <div className="section-heading" data-aos="fade-down">
      <h2>
        <Skeleton
          variant="text"
          width="20%"
          height={40}
          sx={{
            textAlign: 'center',
            margin: '0 auto',
          }}
        />
      </h2>
      <Skeleton
        variant="text"
        width="30%"
        height={20}
        sx={{
          textAlign: 'center',
          margin: '0 auto',
        }}
      />
    </div>
  );
}
