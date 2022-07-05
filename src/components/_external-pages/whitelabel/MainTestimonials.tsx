// Components Material
import { Typography, Container, Grid, CardContent, Card, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
// Animations
import { varFadeInUp, MotionInView, varFadeInDown } from '@components/animate';
// utils
import { useTranslation } from 'next-i18next';
import { getAccentColor } from '@utils/theme-colors';

// ----------------------------------------------------------------------
const TESTIMONIALS = [
  {
    name: 'Cody Fisher',
    rating: 4.5,
    dateCreate: 'April 21, 2021',
    content: `It's a very good dashboard and we are really liking the product .`,
    image: `https://minimal-assets-api.vercel.app/assets/images/members/member-2.jpg`,
    role: 'Entrepreneur',
  },
  {
    name: 'Adam Graham',
    rating: 5,
    dateCreate: 'April 22, 2021',
    content: `Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !`,
    image: `https://minimal-assets-api.vercel.app/assets/images/members/member-3.jpg`,
    role: 'Software Engineer',
  },
  {
    name: 'Thomas Bulton',
    rating: 4.5,
    dateCreate: 'April 19, 2021',
    content: `Excellent Work! Thanks a lot!`,
    image: `https://minimal-assets-api.vercel.app/assets/images/members/member-1.jpg`,
    role: 'UI UX Designer',
  },
  {
    name: 'Jenny Wilson',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Amazing, really good code quality and gives you a lot of examples for implementations`,
    image: `https://minimal-assets-api.vercel.app/assets/images/members/member-4.jpg`,
    role: 'UI UX Designer',
  },
];

const CardImgStyle = styled('img')(({ theme }) => ({
  width: '100%',
  objectFit: 'cover',
  transition: theme.transitions.create('all'),
  borderRadius: theme.spacing(1),
}));

// ----------------------------------------------------------------------

type CardItemProps = {
  testimonial: {
    name: string;
    rating: number;
    content: string;
    dateCreate: Date | string;
    image: string;
    role: string;
  };
};

export interface MainTestimonialProps {
  appearance: {
    accent?: string | null;
    peopleSay?: string | null;
    usePallete?: boolean;
  };
}

function CardItem({ testimonial }: CardItemProps) {
  const { name, image, rating, dateCreate, content, role } = testimonial;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body1" sx={{ color: 'gray', fontStyle: 'italic', mb: 1 }}>
          {`"${content}"`}
        </Typography>
        <Rating value={rating} name="read-only" readOnly size="small" precision={0.5} />
        <Typography gutterBottom component="p" variant="caption" sx={{ color: 'grey.500', mb: 3 }}>
          {dateCreate}
        </Typography>
        <Grid container alignItems="center" spacing={2} justifyContent="start">
          <Grid item xs={4}>
            <CardImgStyle alt={name} src={image} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
              {role}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function MainTestimonials({ appearance }: MainTestimonialProps) {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg" sx={{ py: 12 }} id="testimonials">
      <MotionInView variants={varFadeInDown}>
        <Typography
          component="p"
          variant="overline"
          sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}
        >
          {t('menu.testimonials')}
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          variant="h2"
          sx={{
            mb: 1,
            textAlign: 'center',
            color: getAccentColor(appearance),
          }}
        >
          What People Says About Us
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mb: 6,
            mx: 'auto',
            maxWidth: 630,
            color: theme => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
            textAlign: 'center',
          }}
        >
          {appearance?.peopleSay ?? ''}
        </Typography>
      </MotionInView>

      <Grid container alignItems="start" spacing={4} sx={{ pb: 4 }}>
        {TESTIMONIALS.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <MotionInView key={index} variants={varFadeInUp}>
              <CardItem key={index} testimonial={item} />
            </MotionInView>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
