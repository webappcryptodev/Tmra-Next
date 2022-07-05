import CheckoutQuickDonate from '@components/checkout/CheckoutQuickDonate';
import OrganizationHomePage, {
  getOrganizationHomePageProps,
  OrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/OrganizationHomePage';
import config from '@configuration';
// material
import { styled } from '@mui/material/styles';
import { withMongo } from '@utils/mongodb';
import {
  getOrganizationFromFqdn,
  getOrganizationFromRequest,
  OrganizationInfo,
} from '@utils/whitelabel';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// components
import Page from 'src/components/Page';
import { LandingFeatures, LandingHero } from 'src/components/_external-pages/landing';
// layouts
import MainLayout from 'src/layouts/main';
import { NonprofitAppearance, NonprofitAppearanceClass } from 'src/models/Organization';

const RootStyle = styled(Page)({
  height: '100%',
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

/**
 * Important: Next.js props cannot be undefined, so for missing value, use null.
 */
export interface IndexPageProps {
  organization: OrganizationInfo | null;
  organizationHomePageProps: OrganizationHomePageProps | null;
  appearance: NonprofitAppearance | null;
}

/**
 * IndexPage may display one from 3 alternatives:
 *
 * a. If the FQDN matches an organization's FQDN (custom domain),
 *    it will display that organization's whitelabel landing page.
 * b. If the configuration's defaultOrganization.organizationId is set,
 *    it will display that organization's whitelabel landing page.
 * c. Otherwise, the Tmra.io landing page is displayed.
 *
 * The logic is determined in getServerSideProps using req.headers['host'].
 *
 * @returns
 */
export default function IndexPage({ organizationHomePageProps }: IndexPageProps): JSX.Element {
  const { t } = useTranslation('app');
  // const [cartData, setCartData] = useLocalStorage('tmraCart', []);

  if (organizationHomePageProps) {
    // Organization home page
    return <OrganizationHomePage {...organizationHomePageProps} />;
  } else {
    // Tmra home page
    return (
      <MainLayout campaignDetails={false}>
        <RootStyle title={`${t('app.name')} - ${t('app.subtitle')}`} id="move_top">
          <LandingHero />
          {config.main.checkoutQuickDonate.enabled && <CheckoutQuickDonate />}
          <ContentStyle>
            <LandingFeatures />
            {/* <LandingHugePackElements />
            <LandingDarkMode />
            <LandingThemeColor />
            <LandingCleanInterfaces />
            <LandingPricingPlans />
            <LandingAdvertisement /> */}
          </ContentStyle>
        </RootStyle>
      </MainLayout>
    );
  }
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async ({
  locale,
  req,
  res,
}) => {
  // return await withMongo(async () => {
  const organization = await getOrganizationFromRequest(req);

  let organizationHomePageProps: OrganizationHomePageProps | null = null;
  // let appearance: NonprofitAppearance | null = null;
  const appearance: NonprofitAppearance | null = null;
  if (organization) {
    // console.debug('get appearance from MongoDB...');
    // appearance = (await NonprofitAppearanceClass.findById(organization?.id).lean()) ?? null;
    // console.debug('aboutFeature=', appearance?.aboutFeature);
    // if (appearance) {
    //   appearance = JSON.parse(JSON.stringify(appearance)) as NonprofitAppearance;
    // }

    organizationHomePageProps = await getOrganizationHomePageProps({
      organizationId: organization.id,
    });
    res.statusCode = organizationHomePageProps?.statusCode;
  }

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      organization,
      organizationHomePageProps,
      appearance,
    },
  };
  // });
};
