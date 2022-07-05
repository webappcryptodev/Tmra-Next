import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ----------------------------------------------------------------------

import CheckoutDonationWhitelabel, {
  getOrganizationCheckoutProps,
  IPropsCheckoutDonation,
} from '@components/_external-pages/whitelabel/CheckoutDonationWhitelabel';

// ----------------------------------------------------------------------
export interface CheckoutDonationWrapperProps {
  organizationCheckoutPageProps: IPropsCheckoutDonation;
}

// ----------------------------------------------------------------------

export default function OrganizationHomePageWrapper({
  organizationCheckoutPageProps,
}: CheckoutDonationWrapperProps) {
  return <CheckoutDonationWhitelabel {...organizationCheckoutPageProps} />;
}

export const getServerSideProps: GetServerSideProps<CheckoutDonationWrapperProps> = async ({
  locale,
  res,
  query,
}) => {
  const orgUsername = query.org as string;

  const organizationCheckoutPageProps = await getOrganizationCheckoutProps({
    organizationUsername: orgUsername,
  });
  res.statusCode = organizationCheckoutPageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      organizationCheckoutPageProps,
    },
  };
};
