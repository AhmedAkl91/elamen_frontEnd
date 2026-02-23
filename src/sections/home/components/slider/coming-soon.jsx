// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

import { useCountdownDate } from 'src/hooks/use-countdown';
// hooks
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(3),
}));
const CountdownStyle = styled('div')({
  // display: 'flex',
  justifyContent: 'center',
});
// ----------------------------------------------------------------------
// };
export default function ComingSoon() {
  const countdown = useCountdownDate(new Date('09/10/2024 09:00'));
  // const fNumber = useCallback(
  //   (number) =>  numeral(number).format(),[]
  // );
  return (
    <RootStyle>
      <Container>
        <Box sx={{ margin: 'auto', textAlign: 'center' }}>
          <CountdownStyle className="CountdownStyle">
            <div>
              <Typography variant="h2" className="count_items">
                {countdown.days}
                <sub className="count_sub_items">D</sub>
              </Typography>
            </div>
            <hr />
            <div>
              <Typography variant="h2" className="count_items">
                {countdown.hours}
                <sub className="count_sub_items">H</sub>
              </Typography>
            </div>
            <hr />
            <div>
              <Typography variant="h2" className="count_items">
                {countdown.minutes}
                <sub className="count_sub_items">M</sub>
              </Typography>
            </div>
            <hr />
            <div>
              <Typography variant="h2" className="count_items">
                {countdown.seconds}
                <sub className="count_sub_items">S</sub>
              </Typography>
            </div>
          </CountdownStyle>
        </Box>
      </Container>
    </RootStyle>
  );
}
