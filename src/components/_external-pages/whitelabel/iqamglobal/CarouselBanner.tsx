import Slider from 'react-slick';
import { m } from 'framer-motion';
import { useState, useRef } from 'react';
import { useTranslation } from 'next-i18next';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, Paper, Button, Typography, Container, Grid, CardContent } from '@mui/material';
// _mock_
import mockData from '@utils/mock-data';
// components
import Image from '@components/Image';
import { varFadeInRight, MotionContainerNew } from '../../../animate';
import { CarouselArrowIndex } from '@components/carousel-alter';

// ----------------------------------------------------------------------

const _carouselsExample = [...Array(2)].map((_, index) => ({
  id: mockData.id(index),
  title: mockData.text.title(index),
  image: `/static/banner/donor-banner-${index + 1}.jpg`,
  description: mockData.text.description(index),
  themeContent: index === 0 ? 'black' : 'white',
}));

// ----------------------------------------------------------------------

export default function CarouselBanner() {
  const theme = useTheme();
  const carouselRef = useRef<Slider | null>(null);
  const [currentIndex, setCurrentIndex] = useState(
    theme.direction === 'rtl' ? _carouselsExample.length - 1 : 0,
  );

  const settings = {
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Card sx={{ borderRadius: 0 }}>
      <Slider ref={carouselRef} {...settings}>
        {_carouselsExample.map((item, index) => (
          <CarouselItem key={item.id} item={item} isActive={index === currentIndex} />
        ))}
      </Slider>

      <CarouselArrowIndex
        index={currentIndex}
        total={_carouselsExample.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  title: string;
  description: string;
  image: string;
  themeContent: string;
};

function CarouselItem({ item, isActive }: { item: CarouselItemProps; isActive: boolean }) {
  // const theme = useTheme();
  const { image, title } = item;
  const { t } = useTranslation();

  return (
    <Paper sx={{ position: 'relative' }}>
      <Image alt={title} src={image} ratio="21/9" />
      <CardContent
        component={MotionContainerNew}
        animate={isActive}
        action
        sx={{
          width: '100%',
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
          top: 0,
          bottom: 0,
          left: 0,
          right: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid item xs={12} sm={8} md={6}>
            <m.div variants={varFadeInRight}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  ...(item.themeContent === 'white' && {
                    color: 'common.black',
                  }),
                }}
              >
                {item.title}
              </Typography>
            </m.div>
            <m.div variants={varFadeInRight}>
              <Typography
                variant="body1"
                noWrap
                gutterBottom
                sx={{
                  ...(item.themeContent === 'white' && {
                    color: 'text.secondary',
                  }),
                }}
              >
                {item.description}
              </Typography>
            </m.div>
            <m.div variants={varFadeInRight}>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  ...(item.themeContent === 'black'
                    ? {
                        color: 'common.black',
                        bgcolor: 'common.white',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.8) !important',
                        },
                      }
                    : {
                        color: 'common.white',
                        bgcolor: 'common.black',
                        '&:hover': {
                          bgcolor: 'rgba(0, 0, 0, 0.8) !important',
                        },
                      }),
                }}
              >
                {t('carousel.button')}
              </Button>
            </m.div>
          </Grid>
        </Container>
      </CardContent>
    </Paper>
  );
}
