import { Box, Grid, IconButton, Typography } from '@mui/material';

export default function Congratulation(props: any) {
  return (
    <Grid style={{ paddingBlock: '30px' }}>
      <Box display="flex" justifyContent="center" style={{ paddingInline: '100px' }}>
        <img src="/assets/donate/congratulationIcon.png" />
      </Box>
      <Typography
        lineHeight="45px"
        display="flex"
        justifyContent="center"
        fontSize="20px"
        fontWeight="600"
      >
        Congratulations done
      </Typography>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Typography fontSize="12px" fontWeight="500" width="236px">
          You can share your donations in instant messengers and social networks
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingInline: '60px',
          marginTop: '10px',
          marginBottom: '20px',
        }}
      >
        <img src="/assets/donate/facebook.png" />
        <img src="/assets/donate/twitter.png" />
        <img src="/assets/donate/whatsapp.png" />
      </Box>
      <IconButton
        sx={{
          width: '100%',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '40px',
          backgroundColor: '#5C68EA !important',
          marginTop: '10px',
          borderRadius: '30px',
          letterSpacing: '2px',
        }}
        onClick={() => props.finishThisDonate()}
      >
        <img src="/assets/donate/ok.png" />
        &nbsp; Okay &nbsp;
      </IconButton>
    </Grid>
  );
}
