import { useTranslation } from 'react-i18next';
// @mui
import { Box, Container, Typography, Card, CardContent, Grid, Skeleton } from '@mui/material';
//
import Image from '@components/Image';

// ----------------------------------------------------------------------
interface IPropsDonorSummary {
  totalCount: string;
  totalAmount: string;
  totalCampaign: string;
  totalDonors: string;
  fetching: boolean;
}

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    {[...Array(4)].map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

export default function CampaignInsights({
  totalCount,
  totalAmount,
  totalCampaign,
  totalDonors,
  fetching,
}: IPropsDonorSummary) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" id="charity_impact">
      <Box sx={{ my: 6 }}>
        {/* <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          {t('whitelabel.charity.performance')}
        </Typography> */}
        <Grid container spacing={2} alignItems="flex-start">
          {fetching && SkeletonLoad}

          {!fetching && (
            <>
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    boxShadow: 'none',
                    borderRadius: '24px',
                    border: '5px solid #FEE8D6',
                    '&:hover': {
                      boxShadow: '80px 40px 80px rgba(37, 42, 50, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', px: { xs: 4, sm: 6 } }}>
                    <Image
                      alt="Care Beige"
                      src="/static/icons/care_beige.svg"
                      sx={{ width: '84px', height: '84px', mx: 'auto', mb: 2 }}
                    />
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        position: 'relative',
                        fontWeight: 500,
                        '&:after': {
                          display: 'block',
                          minWidth: '120px',
                          width: '120px',
                          height: 14,
                          content: '""',
                          position: 'absolute',
                          background: '#F2CAAA',
                          bottom: 7,
                          left: 0,
                          margin: 'auto',
                          right: 0,
                          zIndex: -1,
                        },
                      }}
                    >
                      {/* {t('donations')} */}
                      Donations
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {/* {totalAmount} {t('donations.total')} */}
                      {totalAmount} Total Donation
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    boxShadow: 'none',
                    borderRadius: '24px',
                    border: '5px solid #E5FAFD',
                    '&:hover': {
                      boxShadow: '80px 40px 80px rgba(37, 42, 50, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', px: { xs: 4, sm: 6 } }}>
                    <Image
                      alt="Care Primary"
                      src="/static/icons/care_primary.svg"
                      sx={{ width: '84px', height: '84px', mx: 'auto', mb: 2 }}
                    />
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        position: 'relative',
                        fontWeight: 500,
                        '&:after': {
                          display: 'block',
                          minWidth: '120px',
                          width: '120px',
                          height: 14,
                          content: '""',
                          position: 'absolute',
                          background: '#A9E8F1',
                          bottom: 7,
                          left: 0,
                          margin: 'auto',
                          right: 0,
                          zIndex: -1,
                        },
                      }}
                    >
                      {/* {t('numbers')} */}
                      Numbers
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {/* {totalCount} {t('numbers.total')} */}
                      {totalCount} Number of Donations
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    boxShadow: 'none',
                    borderRadius: '24px',
                    border: '5px solid #FEE8D6',
                    '&:hover': {
                      boxShadow: '80px 40px 80px rgba(37, 42, 50, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', px: { xs: 4, sm: 6 } }}>
                    <Image
                      alt="Care Beige"
                      src="/static/icons/care_beige.svg"
                      sx={{ width: '84px', height: '84px', mx: 'auto', mb: 2 }}
                    />
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        position: 'relative',
                        fontWeight: 500,
                        '&:after': {
                          display: 'block',
                          minWidth: '120px',
                          width: '120px',
                          height: 14,
                          content: '""',
                          position: 'absolute',
                          background: '#F2CAAA',
                          bottom: 7,
                          left: 0,
                          margin: 'auto',
                          right: 0,
                          zIndex: -1,
                        },
                      }}
                    >
                      {/* {t('campaigns')} */}
                      Campaigns
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {/* {totalCampaign} {t('campaigns.total')} */}
                      {totalCampaign} Total campaigns
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card
                  sx={{
                    boxShadow: 'none',
                    borderRadius: '24px',
                    border: '5px solid #E5FAFD',
                    '&:hover': {
                      boxShadow: '80px 40px 80px rgba(37, 42, 50, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', px: { xs: 4, sm: 6 } }}>
                    <Image
                      alt="Care Primary"
                      src="/static/icons/care_primary.svg"
                      sx={{ width: '84px', height: '84px', mx: 'auto', mb: 2 }}
                    />
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        position: 'relative',
                        fontWeight: 500,
                        '&:after': {
                          display: 'block',
                          minWidth: '120px',
                          width: '120px',
                          height: 14,
                          content: '""',
                          position: 'absolute',
                          background: '#A9E8F1',
                          bottom: 7,
                          left: 0,
                          margin: 'auto',
                          right: 0,
                          zIndex: -1,
                        },
                      }}
                    >
                      {/* {t('donors')} */}
                      Donors
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {/* {totalDonors} {t('donors.total')} */}
                      {totalDonors} Total Donors
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </Container>
  );
}
