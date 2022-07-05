/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LoadingScreen from '@components/LoadingScreen';
import Affiliation from '@components/_my/index/affiliation';
import AllDonations from '@components/_my/donations/allDonations';
// layouts
import MyDashboardLayout from '@layouts/dashboard/MyDashboardLayout';
import { Container, Skeleton, Typography } from '@mui/material';
import { app } from '@redux/slices/auth/realm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useEffect, useState } from 'react';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';
// import { gql, useQuery } from 'urql';
// import { useAppSelector } from '@redux/hooks';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import axios from 'axios';

// ----------------------------------------------------------------------

// const donation = gql`
//   query getDonor($donorRealmId: DonorQueryInput!) {
//     donation_logs(query: { donorRealmId: $donorRealmId }, sortBy: CREATEDAT_DESC) {
//       _id
//       amount
//       createdAt
//       campaignId {
//         title
//         islamCharityType
//         images
//       }
//       currency
//       donationStatus
//     }
//   }
// `;

interface donation_logs {
  _id?: string;
  amount?: string;
  createdAt?: string;
  campaignId?: {
    title?: string;
    islamCharityType?: string;
    images?: string[];
  };
  currency?: string;
  donationStatus?: string;
  organizationName?: string;
}
// interface donorListProps {
//   donation_logs: donation_logs[] | undefined;
// }
export default function MyPage() {
  // const currentUser = useAppSelector(state => state.currentUser);
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
  const { themeStretch } = useSettings();
  const [affiliation, setAffiliation] = React.useState<any | null>(null);
  const [donorRes, setDonors] = useState<{
    donation_logs: {
      _id?: string;
      amount?: string;
      createdAt?: string;
      campaignId?: {
        title?: string;
        islamCharityType?: string;
        images?: string[];
      };
      currency?: string;
      donationStatus?: string;
      organizationName?: string;
    }[];
  } | null>(null);
  // const arry: donation_logs[] = [];
  // const { data, fetching, error } = donorRes;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = publicRuntimeConfig.tmra.raise.url;
      const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

      const getDonor = async () => {
        const response = await axios.get(
          `${path}/donor/getDonationLogs?donorUserId=${currentUser.id}`,
        );

        setDonors({
          donation_logs: response.data,
        });
      };

      getDonor();
    }

    // if (affiliation === null && fetching === true && data) {
    //   app.currentUser?.functions
    //     .callFunction('getAffiliation', { ownerRealmId: app.currentUser?.id })
    //     .then(affiliations => {
    //       setAffiliation(affiliations);
    //     });
    // }
  }, []);

  // console.log('affiliation', affiliation);

  const newArrCampaign = donorRes?.donation_logs.map(item => {
    const campAdd = {
      images: [
        'tmra/production/campaign-image/lets-build-house-in-paradise-by-build-mosque-61cc1e025d053e74fe15d0ce-5714.jpg',
      ],
      islamCharityType: ['WAQF', 'Books', 'Beauty & Health', 'Income'][
        (Math.random() * ['WAQF', 'Books', 'Beauty & Health', 'Income'].length) | 0
      ],
      title: item.campaignId?.title ?? "Let's build house in Paradise by build Mosque!",
    };

    return {
      ...item,
      currency: item.currency ?? 'GBP',
      campaignId: item.campaignId ? item.campaignId : campAdd,
    };
  });

  return (
    <MyDashboardLayout>
      <Page title="My Dashboard | Tmra">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {donorRes ? (
            donorRes?.donation_logs.length > 0 ? (
              <>
                <AllDonations donation_logs={newArrCampaign!} />
                <div style={{ marginTop: 50 }}></div>
                <Affiliation affiliations={affiliation} />
              </>
            ) : (
              <Typography variant="h5" component="p" paragraph>
                No records of data transactions
              </Typography>
            )
          ) : (
            <Skeleton
              variant="rectangular"
              width="100%"
              sx={{ paddingTop: '50%', borderRadius: 2 }}
            />
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
