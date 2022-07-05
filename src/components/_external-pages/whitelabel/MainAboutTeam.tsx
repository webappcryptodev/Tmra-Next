import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// Components Material
import { Typography, Container, Grid, CardContent, Card, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
// Animations
import { varFadeInUp, MotionInView, varFadeInDown } from '@components/animate';
// utils
import mockData from '@utils/mock-data';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [...Array(4)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  image: `https://minimal-assets-api.vercel.app/assets/images/members/member-${index + 1}.jpg`,
  role: mockData.role(index),
}));

const SOCIALS = [
  { name: 'Facebook', icon: facebookFill, enabled: true },
  { name: 'Google', icon: googleFill, enabled: true },
  { name: 'Linkedin', icon: linkedinFill, enabled: true },
  { name: 'Twitter', icon: twitterFill, enabled: true },
];

const CarouselImgStyle = styled('img')(({ theme }) => ({
  width: '100%',
  objectFit: 'cover',
  transition: theme.transitions.create('all'),
  borderRadius: theme.spacing(2),
}));

// ----------------------------------------------------------------------

type CardItemProps = {
  name: string;
  role: string;
  image: string;
};

function CardItem({ item }: { item: CardItemProps }) {
  const { image, name, role } = item;

  return (
    <MotionInView variants={varFadeInUp}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" paragraph sx={{ mb: 1 }}>
            {name}
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'gray' }}>
            {role}
          </Typography>
          <CarouselImgStyle alt={name} src={image} />
          <Grid item>
            <Stack spacing={2} direction="row" justifyContent={{ xs: 'center' }} sx={{ mt: 3 }}>
              {SOCIALS.filter(social => social.enabled).map(social => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </CardContent>
      </Card>
    </MotionInView>
  );
}

export default function MainAboutTeam() {
  return (
    <Container maxWidth="lg" sx={{ py: 6, textAlign: 'center' }} id="about_team">
      <MotionInView variants={varFadeInDown}>
        <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
          Dream team
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Meet Our Team
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mb: 6,
            mx: 'auto',
            maxWidth: 630,
            color: theme => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
          }}
        >
          Minimal will provide you support if you have any problems, our support team will reply
          within a day and we also have detailed documentation.
        </Typography>
      </MotionInView>

      <Grid container alignItems="center" spacing={4} sx={{ pb: 4 }}>
        {MOCK_CAROUSELS.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <CardItem key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
