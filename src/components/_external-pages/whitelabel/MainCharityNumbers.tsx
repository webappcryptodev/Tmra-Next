// material
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
// Hooks
import { useTranslation } from 'next-i18next';
// Animation
import { varFadeInDown, MotionInView } from '@components/animate';
import { themesColor as defaultThemeColor } from '@utils/mock-data/theme-colors';

// ----------------------------------------------------------------------

type AppereancesType = {
  usePallete: boolean;
  themesColor?: string | null | undefined;
  accent?: string | null | undefined;
  lButton?: string | null | undefined;
};
type LinearStyleProps = {
  appereance: AppereancesType;
};

const CARDS_PERFORMANCE = [
  {
    number: '129',
    descriptionNumber: 'Total Donation',
  },
  {
    number: '0',
    descriptionNumber: 'Total Beneficiaries',
  },
  {
    number: '1150153',
    descriptionNumber: 'Total Donation Amount',
    currency: true,
  },
];

const ContentStyle = styled('div')<LinearStyleProps>(({ theme, appereance }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
    ${
      appereance?.usePallete
        ? appereance?.accent
        : appereance?.themesColor
        ? defaultThemeColor[appereance?.themesColor?.toLowerCase()].lighter
        : theme.palette.primary.main
    } 0%,
    ${
      appereance?.usePallete
        ? appereance?.lButton
        : appereance?.themesColor
        ? defaultThemeColor[appereance?.themesColor?.toLowerCase()].darker
        : theme.palette.primary.darker
    } 100%)`,
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
    padding: theme.spacing(10),
    textAlign: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function MainCharityNumbers({ defaultCurrency, appereance }) {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg" sx={{ pt: 12, pb: 6 }} id="charity_impact">
      <ContentStyle appereance={appereance}>
        <Box sx={{ color: 'common.white' }}>
          <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 3 }}>
            <Typography variant="h3">{t('whitelabel.charity.performance')}</Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Grid container spacing={4} alignItems="center" justifyContent="start">
              {CARDS_PERFORMANCE.map((card, index) => (
                <Grid item key={index} xs={12} md={4}>
                  <Box>
                    <Typography variant="h2">
                      {card.number} {card.currency ? defaultCurrency : ''}
                    </Typography>
                    <Typography variant="body1">{card.descriptionNumber}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </MotionInView>
        </Box>
      </ContentStyle>
    </Container>
  );
}
