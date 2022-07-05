import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ----------------------------------------------------------------------

import PaymentStatus, {
  getOrganizationHomePageProps,
  IPropsPaymentStatus,
} from '@components/_external-pages/whitelabel/PaymentStatus';

// ----------------------------------------------------------------------
export interface PaymentStatusWrapperProps {
  organizationPaymentStatusPageProps: IPropsPaymentStatus;
}

// ----------------------------------------------------------------------

export default function OrganizationHomePageWrapper({
  organizationPaymentStatusPageProps,
}: PaymentStatusWrapperProps) {
  return <PaymentStatus {...organizationPaymentStatusPageProps} />;
}

export const getServerSideProps: GetServerSideProps<PaymentStatusWrapperProps> = async ({
  locale,
  res,
}) => {
  let orgUsername;
  if (typeof window !== 'undefined') {
    orgUsername = JSON.parse(localStorage.getItem('organizationCampaign')!);
  }
  const organizationPaymentStatusPageProps = await getOrganizationHomePageProps({
    organizationUsername: orgUsername ? (orgUsername as string) : 'duniaanakalam',
  });
  res.statusCode = organizationPaymentStatusPageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      organizationPaymentStatusPageProps,
    },
  };
};
