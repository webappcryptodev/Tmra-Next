import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ----------------------------------------------------------------------

import CartWhitelabel, {
  getOrganizationHomePageProps,
  IPropsCart,
} from '@components/_external-pages/whitelabel/CartWhitelabel';

// ----------------------------------------------------------------------
export interface CartWrapperProps {
  organizationCartPageProps: IPropsCart;
}

// ----------------------------------------------------------------------

export default function OrganizationHomePageWrapper({
  organizationCartPageProps,
}: CartWrapperProps) {
  return <CartWhitelabel {...organizationCartPageProps} />;
}

export const getServerSideProps: GetServerSideProps<CartWrapperProps> = async ({ locale, res }) => {
  let orgUsername;
  if (typeof window !== 'undefined') {
    orgUsername = JSON.parse(localStorage.getItem('organizationCampaign')!);
  }
  const organizationCartPageProps = await getOrganizationHomePageProps({
    organizationUsername: orgUsername ? (orgUsername as string) : 'duniaanakalam',
  });
  res.statusCode = organizationCartPageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      organizationCartPageProps,
    },
  };
};
