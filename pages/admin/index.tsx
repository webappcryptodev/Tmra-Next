import { Container, Typography } from '@mui/material';
// layouts
import MyDashboardLayout from '@layouts/dashboard/MyDashboardLayout';
// hooks
import useSettings from 'src/hooks/useSettings';
// components
import Page from 'src/components/Page';
import AdminDashboardLayout from '@layouts/dashboard/AdminDashboardLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ----------------------------------------------------------------------

export default function PageFive() {
  const { themeStretch } = useSettings();

  return (
    <AdminDashboardLayout>
      <Page title="Admin | Tmra">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant="h3" component="h1" paragraph>
            Page Five
          </Typography>
          <Typography gutterBottom>
            Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue
            nunc, vitae euismod ligula urna in dolor. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Phasellus blandit leo ut odio. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. In consectetuer turpis ut velit.
            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna
            dolor sagittis lacus. Vestibulum suscipit nulla quis orci. Nam commodo suscipit quam.
            Sed a libero.
          </Typography>
          <Typography>
            Praesent ac sem eget est egestas volutpat. Phasellus viverra nulla ut metus varius
            laoreet. Curabitur ullamcorper ultricies nisi. Ut non enim eleifend felis pretium
            feugiat. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Fusce vel
            dui. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. In enim
            justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Cras dapibus.
          </Typography>
        </Container>
      </Page>
    </AdminDashboardLayout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
