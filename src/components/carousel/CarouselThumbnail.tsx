import Slider from 'react-slick';
import { useState, useRef, useEffect } from 'react';
// material
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// utils
import mockData from '../../utils/mock-data'; //
import { CarouselControlsArrowsIndex } from './controls';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: mockData.text.title(index),
  image: mockData.image.cover(index),
  description: mockData.text.description(index),
}));

const THUMB_SIZE = 64;

const RootStyle = styled(Box)(({ theme }) => {
  const isRTL = theme.direction === 'rtl';

  return {
    marginBottom: '30px',
    root: {
      '& .slick-slide': {
        float: isRTL ? 'right' : 'left',
      },
    },
  };
});

const LargeImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
}));

const ThumbImgStyle = styled('img')(({ theme }) => ({
  opacity: 0.48,
  width: THUMB_SIZE,
  cursor: 'pointer',
  height: THUMB_SIZE,
  margin: theme.spacing(0, 1),
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: theme.shape.borderRadiusSm,
  '&:hover': {
    opacity: 0.72,
    transition: theme.transitions.create('opacity'),
  },
}));

// ----------------------------------------------------------------------

type CarouselItemProps = {
  title: string;
  description: string;
  image: string;
};

function LargeItem({ item }: { item: CarouselItemProps }) {
  const { image, title } = item;

  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: {
          xs: '100%',
          md: '50%',
        },
      }}
    >
      <LargeImgStyle alt={title} src={image} />
    </Box>
  );
}

function ThumbnailItem({ item }: { item: CarouselItemProps }) {
  const { image, title } = item;

  return <ThumbImgStyle alt={title} src={image} />;
}

export default function CarouselThumbnail({ images }: { images?: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  const settings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const settings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    slidesToShow: images && Array.isArray(images) ? (images.length > 3 ? 3 : images?.length) : 1,
  };

  useEffect(() => {
    if (slider1.current) {
      setNav1(slider1.current);
    }
    if (slider2.current) {
      setNav2(slider2.current);
    }
  }, []);

  const handlePrevious = () => {
    slider2.current?.slickPrev();
  };

  const handleNext = () => {
    slider2.current?.slickNext();
  };

  return Array.isArray(images) && images.length > 0 ? (
    <RootStyle>
      <Box
        sx={{
          zIndex: 0,
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Slider {...settings1} asNavFor={nav2} ref={slider1}>
          {images.map(item => (
            <LargeItem key={item.id} item={item} />
          ))}
        </Slider>
        <CarouselControlsArrowsIndex
          index={currentIndex}
          total={images.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </Box>

      <Box
        sx={{
          mt: 3,
          mx: 'auto',
          ...(images.length === 1 && { maxWidth: THUMB_SIZE * 1 + 16 }),
          ...(images.length === 2 && { maxWidth: THUMB_SIZE * 2 + 32 }),
          ...(images.length === 3 && { maxWidth: THUMB_SIZE * 3 + 48 }),
          ...(images.length === 4 && { maxWidth: THUMB_SIZE * 3 + 48 }),
          ...(images.length === 5 && { maxWidth: THUMB_SIZE * 6 }),
          '& .slick-current img': {
            opacity: 1,
            border: theme => `solid 3px ${theme.palette.primary.main}`,
          },
        }}
      >
        <Slider {...settings2} asNavFor={nav1} ref={slider2}>
          {images.map(item => (
            <ThumbnailItem key={item.title} item={item} />
          ))}
        </Slider>
      </Box>
    </RootStyle>
  ) : null;
}
