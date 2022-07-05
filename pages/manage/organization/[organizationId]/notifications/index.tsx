import React, { useState } from 'react';
// layout
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
// components
// import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import Page from 'src/components/Page';
import Iconify from 'src/components/Iconify';
import {
  Stack,
  Container,
  Alert,
  Skeleton,
  Snackbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
// hooks
import { useFindOneOrganizationByIdQuery } from '@generated/graphql';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import useSettings from 'src/hooks/useSettings';
import { blue } from '@mui/material/colors';

export default function NotificationsAccount() {
  const router = useRouter();
  const { t } = useTranslation();
  const { themeStretch } = useSettings();

  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });

  const [notif, setNotif] = useState({
    open: false,
    type: '',
  });

  const { open } = notif;

  const handleClose = () => {
    setNotif({ open: false, type: '' });
  };

  if (organizationRes) {
    console.log('organizationRes', organizationRes);
  }

  return (
    <OrgDashboardLayout organization={organizationRes?.data?.organization}>
      <Page
        title={`Nonprofit Organization - ${
          organizationRes?.data?.organization?.name ?? '...'
        } | Tmra`}
      >
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {organizationRes?.data?.organization ? (
            <>
              <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  {notif.type}
                </Alert>
              </Snackbar>
              {/* Header breadcrumbs */}
              <Box>
                <Typography variant="h4" gutterBottom>
                  {t('core.menu.notifications')}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ my: 2 }}
                >
                  <Button
                    color="inherit"
                    variant="contained"
                    startIcon={<Iconify icon={'eva:bell-outline'} width={20} height={20} />}
                  >
                    {t('core.menu.notifications')}
                  </Button>
                  <Button
                    color="inherit"
                    variant="contained"
                    startIcon={
                      <Iconify icon={'ant-design:history-outlined'} width={20} height={20} />
                    }
                  >
                    {t('core.menu.activity')}
                  </Button>
                </Stack>
              </Box>
              {/* End of header breadcrumbs */}
              {/* Notifications today */}
              <Box sx={{ mt: 6 }}>
                <Typography variant="h3" component="p" sx={{ fontWeight: 700 }} gutterBottom>
                  Today
                </Typography>
                {[...Array(4)].map((_, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    component="div"
                    sx={{ width: '100%', mt: 3.5 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        mr: 1,
                      }}
                    >
                      <Iconify
                        icon={
                          Math.random() > 0.5
                            ? 'eva:checkmark-outline'
                            : 'eva:message-square-outline'
                        }
                        color="white"
                        width={30}
                        height={30}
                        sx={{ bgcolor: blue[100], p: 0.75, borderRadius: '100%' }}
                      />
                    </Box>
                    <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla similique ex
                      in eaque enim! Aliquid, consectetur nulla quod atque culpa, laboriosam
                      praesentium, amet in pariatur velit quam nihil accusamus odio.
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ color: 'text.secondary', width: 100 }}
                    >
                      6:30 AM
                    </Typography>
                  </Stack>
                ))}
              </Box>
              {/* End Notifications today */}
              {/* Notifications today */}
              <Box sx={{ mt: 6 }}>
                <Typography variant="h3" component="p" sx={{ fontWeight: 700 }} gutterBottom>
                  Yesterday
                </Typography>
                {[...Array(4)].map((_, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    component="div"
                    sx={{ width: '100%', mt: 3.5 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        mr: 1,
                      }}
                    >
                      <Iconify
                        icon={
                          Math.random() > 0.5
                            ? 'eva:checkmark-outline'
                            : 'eva:message-square-outline'
                        }
                        color="white"
                        width={30}
                        height={30}
                        sx={{ bgcolor: blue[100], p: 0.75, borderRadius: '100%' }}
                      />
                    </Box>
                    <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla similique ex
                      in eaque enim! Aliquid, consectetur nulla quod atque culpa, laboriosam
                      praesentium, amet in pariatur velit quam nihil accusamus odio.
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ color: 'text.secondary', width: 100 }}
                    >
                      6:30 AM
                    </Typography>
                  </Stack>
                ))}
              </Box>
              {/* End Notifications today */}
            </>
          ) : (
            <Skeleton variant="rectangular" height={200} />
          )}
        </Container>
      </Page>
    </OrgDashboardLayout>
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
