import CampaignList from '@components/fundraising/CampaignList';
import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
import {
  useFindManyCampaignsByOrganizationIdQuery,
  useFindOneOrganizationByIdQuery,
} from '@generated/graphql';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import OrgDashboardLayout from '@layouts/dashboard/OrgDashboardLayout';
import { Button, Container, Skeleton } from '@mui/material';
import { getOrgDashboardPaths } from '@routes/paths';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';

// ----------------------------------------------------------------------

function CampaignsSection({ organizationId }: { organizationId: string }) {
  const { t } = useTranslation();
  const [{ data: campaignsData, fetching: campaignsFetching, error: campaignsError }] =
    useFindManyCampaignsByOrganizationIdQuery({ variables: { organizationId } });
  const paths = getOrgDashboardPaths(organizationId);

  if (campaignsFetching) {
    return <Skeleton variant="rectangular" height={200} />;
  }
  return (
    <>
      {/* <Typography variant="h3" component="h1" paragraph>
          {data?.nonprofit?.organizationName}
        </Typography> */}

      <HeaderBreadcrumbs
        heading={t('fundraising.campaign.campaigns')}
        links={[{ name: t('orgs.dashboard') }]}
        action={
          <RouterLink href={paths.campaignsNew} passHref>
            <Button
              variant="contained"
              startIcon={<Icon icon={plusFill} />}
              data-cy="dashboard.campaigns.button.create-campaign"
            >
              {t('fundraising.campaign.create')}
            </Button>
          </RouterLink>
        }
      />

      <CampaignList
        fetching={campaignsFetching}
        error={campaignsError?.message}
        campaigns={campaignsData?.campaigns.map(it => it!)}
        donateArea="hidden"
        hrefFunc={campaign => paths.campaignsEdit(campaign._id!)}
      />
    </>
  );
}

export default function OrgDashboardOverview() {
  const { themeStretch } = useSettings();
  const router = useRouter();
  const [organizationRes] = useFindOneOrganizationByIdQuery({
    variables: { id: router.query.organizationId },
  });
  const { data, fetching, error } = organizationRes;
  console.debug('organization:', data);
  const paths = getOrgDashboardPaths(router.query.organizationId! as string);
  const { t } = useTranslation();
  return (
    <OrgDashboardLayout organization={data?.organization}>
      <Page title={`Organization Dashboard - ${data?.organization?.name ?? '...'} | Tmra`}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <CampaignsSection organizationId={router.query.organizationId! as string} />
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
