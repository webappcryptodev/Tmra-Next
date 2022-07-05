// Components
import { Container, Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
// Hooks
import { useTranslation } from 'next-i18next';
// Animations
import { varFadeInUp, varFadeInRight, MotionInView } from '@components/animate';

import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import { Appearance } from '@modules/fundraising/Campaign';
// ----------------------------------------------------------------------

export interface MainOurStoryProps {
  appearance: Appearance;
}

export default function MainOurStory({ appearance }: MainOurStoryProps) {
  const { t } = useTranslation();
  const story = [appearance?.detailStory1, appearance?.detailStory2, appearance?.detailStory3];
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 12, pb: 6 }} id="our_story">
        <MotionInView variants={varFadeInRight}>
          <Grid container alignItems="center">
            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  color: getAccentColor(appearance),
                }}
              >
                {t('whitelabel.story.heading')}
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
              <Typography variant="body2">{appearance?.ourStory ?? ''}</Typography>
            </Grid>
          </Grid>
        </MotionInView>
        <Grid container alignItems="start" spacing={4} sx={{ py: 4 }}>
          {story.map((value, index) => (
            <Grid key={index} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      variant="h6"
                      paragraph
                      sx={{
                        mb: '0px',
                        color: getAccentColor(appearance),
                      }}
                    >
                      Tittle
                    </Typography>
                    <Typography variant="body2" sx={{ my: '1rem' }}>
                      {value}
                    </Typography>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: getButtonColor(appearance),
                      }}
                    >
                      {t('whitelabel.story.readStory')}
                    </Button>
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
