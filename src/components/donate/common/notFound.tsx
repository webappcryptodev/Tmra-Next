import { Box, Grid, IconButton, Typography } from '@mui/material';
import { DonateBtn } from '../quickDonate/atonementDonate';

export default function NotFound(props: any) {
  return (
    <Grid>
      <Box display="flex" justifyContent="center" style={{ paddingInline: '100px' }}>
        <img src="/assets/donate/404.png" />
      </Box>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Typography lineHeight="35px" fontSize="12px" fontWeight="500" width="236px">
          Sorry, the current campaign is no longer available.
        </Typography>
      </Box>
      <DonateBtn onClick={() => props.nextStepDonate()}>&nbsp; Back to Dashboard &nbsp;</DonateBtn>
    </Grid>
  );
}
