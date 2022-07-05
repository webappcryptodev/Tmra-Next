import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { CancelBtn, DonateBtn } from './atonementDonate';

const giftList = [
  {
    id: 1,
    name: 'flower',
  },
  {
    id: 2,
    name: 'lamp',
  },
  {
    id: 3,
    name: 'ring',
  },
];

export default function GiftsDonate(props: any) {
  const [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);
  const [stepProcess, setStepProcess] = useState(1);
  const [selectedGift, setSelectedGift] = useState(2);
  const [selectedStyle, setSelectedStyle] = useState(1);

  useEffect(() => {}, []);

  const handleChange = newValue => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Grid>
        <Typography paddingLeft="5px">Choose the type of gift</Typography>
        <Grid display="flex" spacing={3} paddingTop="6px" paddingBottom="10px">
          {giftList.map(gift => {
            return (
              <Grid key={gift.id} item xs={6} md={4} position="relative" padding="5px">
                {selectedGift == gift.id && (
                  <Box
                    sx={{
                      backgroundColor: '#5c68ea',
                      backgroundRepeat: 'round',
                      minWidth: '35px',
                      height: '35px',
                      borderTopLeftRadius: '45%',
                      borderBottomRightRadius: '100%',
                      position: 'absolute',
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="30px"
                      height="30px"
                    >
                      <img src={'/assets/donate/tick-circle.png'} />
                    </Box>
                  </Box>
                )}
                <a onClick={() => setSelectedGift(gift.id)}>
                  <img src={'/assets/donate/gift' + gift.id + '.png'} />
                </a>
                <Typography>{gift.name}</Typography>
              </Grid>
            );
          })}
        </Grid>
        <Typography paddingLeft="5px">Choose the card</Typography>
        <Grid display="flex" spacing={3} position="relative" paddingTop="6px">
          {giftList.map(gift => {
            return (
              <Grid key={gift.id} item xs={6} md={4} padding="5px">
                {selectedStyle == gift.id && (
                  <Box
                    sx={{
                      backgroundColor: '#5c68ea',
                      backgroundRepeat: 'round',
                      minWidth: '35px',
                      height: '35px',
                      borderTopLeftRadius: '45%',
                      borderBottomRightRadius: '100%',
                      position: 'absolute',
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="30px"
                      height="30px"
                    >
                      <img src={'/assets/donate/tick-circle.png'} />
                    </Box>
                  </Box>
                )}
                <a onClick={() => setSelectedStyle(gift.id)}>
                  <img
                    src={
                      '/assets/donate/' +
                      giftList[selectedGift - 1].name +
                      'giftcard' +
                      gift.id +
                      '.png'
                    }
                  />
                </a>
              </Grid>
            );
          })}
        </Grid>
        <DonateBtn onClick={() => props.nextStepDonate()}>
          Continue &nbsp;
          <img src="/assets/donate/nextIcon.png" />
        </DonateBtn>
        <CancelBtn onClick={() => props.backStepDonate()}>Back</CancelBtn>
      </Grid>
    </Grid>
  );
}
