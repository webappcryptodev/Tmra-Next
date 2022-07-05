// Components
import { Container, Typography, Grid, Divider, Card, CardContent } from '@mui/material';
// Hooks
import { useTranslation } from 'next-i18next';
// Animations
import { varFadeInUp, varFadeInRight, MotionInView } from '@components/animate';

import { getAccentColor } from '@utils/theme-colors';
import { Appearance } from '@modules/fundraising/Campaign';
// ----------------------------------------------------------------------

export interface MainWhyUsProps {
  appearance: Appearance;
}

export default function MainWhyUs({ appearance }: MainWhyUsProps) {
  const { t } = useTranslation();
  const whyUs = [
    {
      title: '01',
      description: appearance?.whySupportUs1,
    },
    {
      title: '02',
      description: appearance?.whySupportUs2,
    },
    {
      title: '03',
      description: appearance?.whySupportUs3,
    },
  ];
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 12, pb: 6, overflowX: 'hidden' }} id="why_us">
        <MotionInView variants={varFadeInRight}>
          <Grid container alignItems="center">
            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  color: getAccentColor(appearance),
                }}
              >
                {t('whitelabel.why.us')}
              </Typography>
            </Grid>
            <Divider
              flexItem
              sx={{
                backgroundColor: getAccentColor(appearance),
                width: '0.5rem',
                mx: '1rem',
              }}
            />
            <Grid item>
              <Typography variant="body2">{appearance?.whyShouldWe ?? ''}</Typography>
            </Grid>
          </Grid>
        </MotionInView>
        <Grid container alignItems="start" spacing={4} sx={{ py: '2rem' }}>
          {whyUs.map((value, index) => (
            <Grid key={index} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      variant="h5"
                      paragraph
                      sx={{
                        color: getAccentColor(appearance),
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography variant="body2" sx={{ my: '1rem' }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
