import { useTranslation } from 'next-i18next';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Button } from '@mui/material';
// colors
import { grey } from '@mui/material/colors';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: grey[100],
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
  },
}));

// ----------------------------------------------------------------------

export default function NotificationLabel() {
  const { t } = useTranslation();
  return (
    <RootStyle id="notification_basket">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.25}
          justifyContent={{ xs: 'flex-start', sm: 'space-between', md: 'flex-start' }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <Typography variant="body1" sx={{ color: 'info.main' }}>
            You Have <strong>2</strong> Donation in Progress in your Basket
          </Typography>
          <Button variant="contained" color="info">
            Go to The Basket
          </Button>
        </Stack>
      </Container>
    </RootStyle>
  );
}
