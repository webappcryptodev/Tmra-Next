/* eslint-disable @typescript-eslint/no-unused-vars */
import LoadingScreen from '@components/LoadingScreen';
import Affiliation from '@components/_my/index/affiliation';
import AllDonations from '@components/_my/donations/allDonations';
// layouts
import MyDashboardLayout from '@layouts/dashboard/MyDashboardLayout';
import { Container, Skeleton } from '@mui/material';
import { app } from '@redux/slices/auth/realm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useEffect } from 'react';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';
import { gql, useQuery } from 'urql';

// ----------------------------------------------------------------------

const donation = gql`
  query getDonor($donorRealmId: DonorQueryInput!) {
    donation_logs(query: { donorRealmId: $donorRealmId }, sortBy: CREATEDAT_DESC) {
      _id
      amount
      createdAt
      campaignId {
        title
        islamCharityType
        images
      }
      currency
      donationStatus
    }
  }
`;

export default function MyDonations() {
  const { themeStretch } = useSettings();
  const [donorRes, reexecuteQuery] = useQuery<{
    donation_logs: {
      _id: string;
      amount: string;
      createdAt: string;
      campaignId: {
        title: string;
        islamCharityType: string;
        images: string[];
      };
      currency: string;
      donationStatus: string;
    }[];
  }>({
    query: donation,
    variables: { donorRealmId: { ownerRealmId: app?.currentUser!.id } },
  });
  const { data, fetching, error } = donorRes;

  return (
    <MyDashboardLayout>
      <Page title="My Donations | Tmra">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {data && data?.donation_logs.length > 0 ? (
            <>
              <AllDonations donation_logs={data.donation_logs} />
            </>
          ) : (
            <Skeleton variant="rectangular" height={200} />
          )}
        </Container>
      </Page>
    </MyDashboardLayout>
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
