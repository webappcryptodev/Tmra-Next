import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ----------------------------------------------------------------------

import AmountDonationWhitelabel, {
  getOrganizationHomePageProps,
  IPropsAmountDonation,
} from '@components/_external-pages/whitelabel/AmountDonationWhitelabel';

// ----------------------------------------------------------------------
export interface AmountDonationWrapperProps {
  organizationAmountPageProps: IPropsAmountDonation;
}

// ----------------------------------------------------------------------

export default function OrganizationHomePageWrapper({
  organizationAmountPageProps,
}: AmountDonationWrapperProps) {
  return <AmountDonationWhitelabel {...organizationAmountPageProps} />;
}

export const getServerSideProps: GetServerSideProps<AmountDonationWrapperProps> = async ({
  locale,
  res,
  query,
}) => {
  const organizationAmountPageProps = await getOrganizationHomePageProps({
    organizationUsername: query.organizationUsername as string,
  });
  res.statusCode = organizationAmountPageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      organizationAmountPageProps,
    },
  };
};
