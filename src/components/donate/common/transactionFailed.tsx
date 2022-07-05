import { Box, Grid, IconButton, Typography } from '@mui/material';
import { DonateBtn } from '../quickDonate/atonementDonate';

export default function TransactionFailed(props: any) {
  return (
    <Grid style={{ paddingBlock: '30px' }}>
      <Box display="flex" justifyContent="center" style={{ paddingInline: '100px' }}>
        <img src="/assets/donate/txFailedIcon.png" />
      </Box>
      <Typography
        lineHeight="45px"
        display="flex"
        justifyContent="center"
        fontSize="20px"
        fontWeight="600"
      >
        Transaction Failed
      </Typography>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Typography lineHeight="35px" fontSize="12px" fontWeight="500" width="236px">
          Please try a different payment method
        </Typography>
      </Box>
      <DonateBtn onClick={() => props.nextStepDonate()}>
        <img src="/assets/donate/tryIcon.png" />
        &nbsp; Try again &nbsp;
      </DonateBtn>
    </Grid>
  );
}
