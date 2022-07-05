import Slider from 'react-slick';
import { m } from 'framer-motion';
import { useState, useRef } from 'react';
import { useTranslation } from 'next-i18next';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, Paper, Button, Typography, Container, Grid, InputBase, Box } from '@mui/material';
// _mock_
import mockData from '@utils/mock-data';
// components
import Image from '@components/Image';
import { varFadeInRight, MotionContainerNew } from '../../../animate';
import { CarouselArrowIndex } from '@components/carousel-alter';
import Iconify from '@components/Iconify';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function SubscriptionSection() {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          backgroundColor: '#e2ac80',
          marginBottom: 3,
          marginTop: 6,
          padding: 3,
          color: 'common.white',
          borderRadius: 3,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography component="div" variant="h5">
              Langganan Berita
            </Typography>
            <Typography component="div" variant="body2">
              Jadilah yang pertama tahu tentang diskon, penawaran, dan acara
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 2,
                paddingY: 1,
                paddingX: 2.5,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#efb88b',
              }}
            >
              <InputBase
                sx={{ color: 'common.white' }}
                startAdornment={
                  <Iconify
                    icon="fluent:mail-24-regular"
                    sx={{ color: 'common.white', marginRight: 1, width: 20, height: 20 }}
                  />
                }
                inputProps={{ style: { color: '#fff' } }}
                placeholder="Email Anda"
              />
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: 'common.white',
                  color: 'common.black',
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: 'common.white' },
                }}
              >
                Kirim
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
