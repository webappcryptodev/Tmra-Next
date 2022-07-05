import { Box, Grid, IconButton, Typography } from '@mui/material';
import { DonateBtn } from '../quickDonate/atonementDonate';

export default function NoConnection(props: any) {
  return (
    <Grid>
      <Box display="flex" justifyContent="center" style={{ paddingInline: '100px' }}>
        <img src="/assets/donate/noConnectionIcon.png" />
      </Box>
      <Typography
        lineHeight="45px"
        display="flex"
        justifyContent="center"
        fontSize="20px"
        fontWeight="600"
      >
        No Connection
      </Typography>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Typography lineHeight="35px" fontSize="12px" fontWeight="500" width="236px">
          This page can’t be displayed because your device is currently offline.
        </Typography>
      </Box>
      <DonateBtn onClick={() => props.nextStepDonate()}>
        <img src="/assets/donate/reloadIcon.png" />
        &nbsp; Reload &nbsp;
      </DonateBtn>
    </Grid>
  );
}
