import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { CancelBtn, DonateBtn } from './atonementDonate';

const giftList = [
  {
    id: 1,
    name: 'Flowers',
  },
  {
    id: 2,
    name: 'Lamp',
  },
  {
    id: 3,
    name: 'Ring',
  },
];

export default function PaymentDonate(props: any) {
  const [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);
  const [stepProcess, setStepProcess] = useState(1);

  useEffect(() => {
    window.open(
      'https://buy.stripe.com/test_5kA01W62V2NDbIc000',
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=150,width=1100,height=600',
    );
  }, []);

  const handleChange = newValue => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Grid>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '16px',
                color: 'pink',
              }}
            >
              Stripe
            </Typography>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '14px',
                mt: 1.8,
              }}
            >
              Loading . . .
            </Typography>
          </Box>
        </Grid>
        <DonateBtn onClick={() => props.nextStepDonate()}>
          Continue to payment&nbsp;
          <img src="/assets/donate/nextIcon.png" />
        </DonateBtn>
        <CancelBtn onClick={() => props.backStepDonate()}>Back</CancelBtn>
      </Grid>
    </Grid>
  );
}
