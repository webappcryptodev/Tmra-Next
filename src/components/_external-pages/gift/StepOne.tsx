import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import wedding from './images/undraw_wedding_t-1-yl.svg';
import general from './images/undraw_messages_re_qy9x.svg';
import parents from './images/undraw_wedding_t-1-yl.svg';
import newborn from './images/undraw_baby_ja-7-a.svg';
import healing from './images/undraw_medicine_b-1-ol.svg';
import graduation from './images/undraw_education_f8ru.svg';
import { useTranslation } from 'next-i18next';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
}));

interface Props {
  setGiftType: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepOne: React.FC<Props> = ({ setGiftType, setStep }) => {
  const { t } = useTranslation();
  const row1: any[] = [
    { name: t('gift.general'), src: general.src },
    { name: t('gift.parents'), src: parents.src },
    { name: t('gift.newborn'), src: newborn.src },
  ];
  const row2: any[] = [
    { name: t('gift.marriage'), src: wedding.src },
    { name: t('gift.graduation'), src: graduation.src },
    { name: t('gift.healing'), src: healing.src },
  ];
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {row1.map((item, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <Item>{item.name}</Item>
            <Button
              onClick={() => {
                setGiftType(item.name);
                setStep(1);
              }}
              sx={{ px: 0, width: '100%' }}
            >
              <Card sx={{ mt: 2, width: '100%' }} variant="outlined">
                <CardMedia
                  sx={{ width: '100%' }}
                  src={item.src}
                  height="300px"
                  width="100% "
                  component="img"
                />
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {row2.map((item, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <Item>{item.name}</Item>
            <Button
              onClick={() => {
                setGiftType(item.name);
                setStep(1);
              }}
              sx={{ px: 0, width: '100%' }}
            >
              <Card sx={{ mt: 2, width: '100%' }} variant="outlined">
                <CardMedia
                  sx={{ width: '100%' }}
                  src={item.src}
                  height="300px"
                  width="100% "
                  component="img"
                />
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StepOne;
