import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ----------------------------------------------------------------------

import CampaignDetailsWhitelabel, {
  getOrganizationHomePageProps,
  OrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/CampaignDetailsWhitelabel';

// ----------------------------------------------------------------------
export interface CampaignDetailsWrapperProps {
  organizationHomePageProps: OrganizationHomePageProps;
}

// ----------------------------------------------------------------------

export default function OrganizationHomePageWrapper({
  organizationHomePageProps,
}: CampaignDetailsWrapperProps) {
  return <CampaignDetailsWhitelabel {...organizationHomePageProps} />;
}

export const getServerSideProps: GetServerSideProps<CampaignDetailsWrapperProps> = async ({
  locale,
  res,
  query,
}) => {
  const organizationHomePageProps = await getOrganizationHomePageProps({
    organizationUsername: query.organizationUsername as string,
  });
  res.statusCode = organizationHomePageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      organizationHomePageProps,
    },
  };
};
