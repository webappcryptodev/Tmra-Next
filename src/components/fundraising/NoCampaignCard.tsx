/* eslint-disable react/no-unescaped-entities */
//
import { MotionInView, varFadeInUp } from '@components/animate';
// components
import { Box, Button, Container, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
// routes
import { getOrgDashboardPaths } from '@routes/paths';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import React from 'react';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------
export default function NoDataCard({
  organizationId,
  type,
}: {
  organizationId?: string;
  type?: 'Campaign' | null | undefined;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const paths = getOrgDashboardPaths(organizationId);

  const createData = () => {
    let url = '/';
    switch (type?.toLowerCase()) {
      case 'campaign':
        url = paths.campaignsNew;
        break;
      default:
        break;
    }
    router.push(url);
  };
  return (
    <Container maxWidth="lg" sx={{ pt: 6, pb: 4 }} id="giving_options">
      <MotionInView variants={varFadeInUp}>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={'/static/illustrations/no-campaigns.png'}
            sx={{ mb: 5, mx: 'auto', height: 300 }}
          />

          <Typography variant="h3" gutterBottom>
            Let's spread kindness as wide as possible!
          </Typography>

          <Typography>
            Messenger of Allah (ﷺ) said,
            <br />
            "Whoever guides someone to virtue will be rewarded equivalent to him who practices that
            good action".
            <br />
            <b>[Muslim]</b>
            <br /> <b>~بِسْمِ ٱللَّٰهِ</b>
          </Typography>

          <Button size="large" variant="contained" sx={{ mt: 5 }} onClick={createData}>
            {type ? `Create ${type}` : 'Go to homepage'}
          </Button>
        </Box>
      </MotionInView>
    </Container>
  );
}
