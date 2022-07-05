/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// layouts
import { client } from '@contexts/RealmUrqlContext';
//
import {
  FindOneOrganizationByIdDocument,
  FindOneOrganizationByIdQuery,
  FindOneOrganizationByIdQueryVariables,
  FindOneOrganizationByUsernameDocument,
  FindOneOrganizationByUsernameQuery,
  FindOneOrganizationByUsernameQueryVariables,
  GetOrganizationAppearanceDocument,
  GetOrganizationAppearanceQuery,
  GetOrganizationAppearanceQueryVariables,
  OrganizationInfoFragment,
} from '@generated/graphql';
import MainLayout from '@layouts/main';
import WhitelabelLayout from '@layouts/whitelabel';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
// material
import { styled } from '@mui/material/styles';
// Redux
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { app } from '@redux/slices/auth/realm';
import { removeCartData, selectCartItems } from '@redux/slices/cart/cartSlice';
import { toString } from 'lodash';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// components
import Page from 'src/components/Page';
import RuntimeConfigs from '@utils/runtime-configs';
import { CombinedError, gql, useQuery } from 'urql';

const FindOneCampaignByCampaignIdDocument = gql`
  query findManyCampaignsByOrganizationId($campaignId: ObjectId!, $username: String!) {
    campaign(query: { _id: $campaignId }) {
      _id
      organizationId
      title
      createdAt
      updatedAt
      creatorUserId
      updaterUserId
      description
      images
      coverImage
      coverImageIndex
      islamCharityType
      methods
      currencyCode
      amountTarget
      campaignDescription
      campaignImage
      campaignName
      campaignType
      organizationId
      ownerUserId
      totalDonation
      donorReached
    }
    organization(query: { username: $username }) {
      username
      name
      paypalClientId
    }
  }
`;

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));
const CampaignAmountBox = styled('div')(() => ({
  height: `107px`,
  background: `#EAEAEA 0% 0% no-repeat padding-box`,
  borderRadius: `10px`,
  padding: 18,
  width: '100%',
  opacity: 1,
}));
const CampaignAmount = styled('span')(() => ({
  paddingLeft: '10px',
  color: `#000000`,
  font: `normal normal medium 49px/59px Graphik`,
  fontSize: `50px`,
  letterSpacing: `-0.98px`,
  padding: 1,
  opacity: 1,
}));
const CampaignCurrency = styled('span')(() => ({
  color: '#707070',
  fontSize: `14px`,
  letterSpacing: `0px`,
  verticalAlign: `30px`,
  opacity: 1,
}));
const RouterAmount = styled('a')(() => ({
  width: '100%',
}));
const FormStep0 = styled('form')(({ theme }) => ({
  width: '65%',
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}));

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

interface DonatesValue {
  donationAmount: string;
  tipAmount: string;
  message: string;
}
type dataImg = {
  image: [] | undefined;
};

export interface IPropsAmountDonation {
  organizationRes: { data: OrganizationInfoFragment | null; error: string | null };
  appearanceRes: { data: GetOrganizationAppearanceQuery | null; error: string | null };
  statusCode: number;
}

export default function AmountDonationWhitelabel({
  organizationRes,
  appearanceRes,
}: IPropsAmountDonation): JSX.Element {
  const { t } = useTranslation('app');
  const [donateValue, setDonateValue] = React.useState('0');
  const [disabled, setDisabled] = React.useState(true);
  const [step, setStep] = React.useState(0);
  const router = useRouter();
  const [creator, setCreator] = React.useState<{ name: string; organizationName: string } | null>(
    null,
  );
  const [isValid, setIsValid] = React.useState(false);
  console.log('current user type', app.currentUser);

  const [amountItems, setAmountItems] = useState<{ [key: string]: number }>({});

  // Redux
  const dispatch = useAppDispatch();
  const cartsData = useAppSelector(selectCartItems);

  const submitForm = (e: any) => {
    e.preventDefault();
    setDonateValue(e.target[0].value);
    setStep(1);
  };
  const [campaignRes, reexecuteQuery] = useQuery<{
    campaign: {
      _id: string;
      title: string | undefined;
      campaignImage: string;
      images: dataImg;
      organizationId: string;
      creatorUserId: string;
      currencyCode: string;
    };
    organization: {
      username: string;
      defaultCurrency: string;
      name: string;
      paypalClientId: string;
    };
  }>({
    query: FindOneCampaignByCampaignIdDocument,
    variables: {
      campaignId: router.query.campaignId,
      username: router.query.organizationUsername,
    },
  });

  useEffect(() => {
    const amountItems = {};
    const cartsData = JSON.parse(localStorage.getItem('tmraCart')!);
    if (cartsData) {
      cartsData.forEach(cart => {
        amountItems[cart._id!] = cart.amount;
      });
      setAmountItems(amountItems);
    }
  }, [cartsData]);

  useEffect(() => {
    const amount = Object.values(amountItems).reduce((a, b) => a + b, 0);
    if (amount) {
      setDonateValue(toString(amount));
      setDisabled(false);
    }
  }, [amountItems]);

  const { data, fetching, error } = campaignRes;
  React.useEffect(() => {
    if (fetching === true && isValid === false) {
      if (app.currentUser?.providerType !== 'custom-token') {
        router.push(`/user/login`);
      } else {
        setIsValid(true);
      }
    }
  }, [fetching, setIsValid]);
  if (fetching === true || isValid === false) {
    return <>Loading...</>;
  }
  console.log('data', app.currentUser);
  const handleToCheckOut = (e: any) => {
    e.preventDefault();
    console.log(e);
    const variables = {
      campaignId: router.query.campaignId,
      donorRealmId: app.currentUser!.id,
      donorUserId: app.currentUser!.profile.ssoId,
      email: app.currentUser!.profile.email,
      campaignName: data?.campaign.title,
      currency: data?.campaign.currencyCode ? data?.campaign.currencyCode.toUpperCase() : 'SAR',
      message: e.target[5].value,
      amount: Number(donateValue) + Number(e.target[3].value),
      paypalClientId: data?.organization.paypalClientId,
      username: router.query.organizationUsername,
    };
    dispatch(removeCartData());
    localStorage.setItem('singlePayment', JSON.stringify(variables));
    localStorage.removeItem('tmraCart');
    router.push(`/checkout?org=${router.query.organizationUsername}`);
    console.log('variables', variables);
  };

  if (organizationRes.error || appearanceRes.error) {
    return (
      <MainLayout campaignDetails={false}>
        <RootStyle title={`${organizationRes.data?.name} | ${t('app.name')}`} id="move_top">
          {organizationRes.error && (
            <Container maxWidth="lg" sx={{ py: 3 }}>
              <Alert severity="error">Error: {organizationRes.error}</Alert>
            </Container>
          )}
          {appearanceRes.error && (
            <Container maxWidth="lg" sx={{ py: 3 }}>
              <Alert severity="error">Error: {appearanceRes.error}</Alert>
            </Container>
          )}
        </RootStyle>
      </MainLayout>
    );
  }

  return (
    <WhitelabelLayout
      backgroundColor={
        appearanceRes.data?.nonprofitAppearance?.primaryColor
          ? appearanceRes.data?.nonprofitAppearance?.primaryColor
          : 'primary.main'
      }
      secondColor={appearanceRes.data?.nonprofitAppearance?.secondaryColor}
      imgLogoUrl={
        appearanceRes.data?.nonprofitAppearance?.logo &&
        appearanceRes.data?.nonprofitAppearance?.logo != ''
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes.data?.nonprofitAppearance?.logo}`
          : `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationRes.data?.favicon}`
      }
    >
      <RootStyle title={`${t('app.name')} - ${t('app.subtitle')}`} id="move_top">
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <ContentStyle>
            {step === 0 && (
              <Grid container justifyContent="center" alignItems="center">
                <Grid
                  item
                  xs={12}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography variant="h3">Donation Amount</Typography>
                </Grid>
                <Grid
                  container
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      margin: 2,
                    }}
                  >
                    <Button
                      variant="text"
                      disableTouchRipple={true}
                      color="inherit"
                      sx={{ width: '100%' }}
                      onClick={() => {
                        setDonateValue('50');
                        setStep(1);
                        console.log(donateValue);
                      }}
                    >
                      <CampaignAmountBox tabIndex={0}>
                        <CampaignAmount>
                          50{' '}
                          <CampaignCurrency>
                            {data?.campaign.currencyCode ? data?.campaign.currencyCode : 'SAR'}
                          </CampaignCurrency>
                        </CampaignAmount>
                      </CampaignAmountBox>
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      margin: 2,
                    }}
                  >
                    <Button
                      variant="text"
                      disableTouchRipple={true}
                      color="inherit"
                      sx={{ width: '100%' }}
                      onClick={() => {
                        setDonateValue('100');
                        setStep(1);
                        console.log('value', donateValue);
                      }}
                    >
                      <CampaignAmountBox tabIndex={1}>
                        <CampaignAmount>
                          100{' '}
                          <CampaignCurrency>
                            {data?.campaign.currencyCode ? data?.campaign.currencyCode : 'SAR'}
                          </CampaignCurrency>
                        </CampaignAmount>
                      </CampaignAmountBox>
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      margin: 2,
                    }}
                  >
                    <Button
                      variant="text"
                      disableTouchRipple={true}
                      color="inherit"
                      sx={{ width: '100%' }}
                      onClick={() => {
                        setDonateValue('150');
                        setStep(1);
                        console.log(donateValue);
                      }}
                    >
                      <CampaignAmountBox tabIndex={2}>
                        <CampaignAmount>
                          150{' '}
                          <CampaignCurrency>
                            {data?.campaign.currencyCode ? data?.campaign.currencyCode : 'SAR'}
                          </CampaignCurrency>
                        </CampaignAmount>
                      </CampaignAmountBox>
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      margin: 2,
                    }}
                  >
                    <Button
                      variant="text"
                      disableTouchRipple={true}
                      color="inherit"
                      sx={{ width: '100%' }}
                      onClick={() => {
                        setDonateValue('200');
                        setStep(1);
                        console.log(donateValue);
                      }}
                    >
                      <CampaignAmountBox tabIndex={3}>
                        <CampaignAmount>
                          200{' '}
                          <CampaignCurrency>
                            {data?.campaign.currencyCode ? data?.campaign.currencyCode : 'SAR'}
                          </CampaignCurrency>
                        </CampaignAmount>
                      </CampaignAmountBox>
                    </Button>
                  </Grid>
                </Grid>
                <FormStep0
                  style={{
                    // margin: '0 auto',
                    // display: 'flex',

                    marginBottom: 5,
                  }}
                  onSubmit={submitForm}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      mt: 2.5,
                      mb: 5,
                      width: '100%',
                    }}
                  >
                    <TextField
                      sx={{ width: '100%' }}
                      fullWidth
                      type="number"
                      defaultValue={donateValue === '0' ? '' : donateValue}
                      onChange={e => {
                        if (e.target.value === '0') {
                          e.target.value = '';
                          setDisabled(true);
                        }
                        if (e.target.value === '') {
                          setDisabled(true);
                        } else {
                          setDisabled(false);
                        }
                      }}
                      label={t('Other Amount')}
                      InputProps={{
                        inputProps: { min: 1 },
                        startAdornment: (
                          <InputAdornment position="start">
                            {data?.campaign.currencyCode ? data?.campaign.currencyCode : 'SAR'}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  {disabled === false && (
                    <>
                      <Grid
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          marginBottom: 5,
                        }}
                        item
                        xs={12}
                      >
                        <LoadingButton
                          type="submit"
                          disabled={disabled}
                          variant="outlined"
                          fullWidth={true}
                        >
                          Continue
                        </LoadingButton>
                      </Grid>
                    </>
                  )}
                </FormStep0>
              </Grid>
            )}
            {step === 1 && (
              <Grid container justifyContent="center" alignItems="center">
                <Grid
                  item
                  xs={12}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: 18 }} variant="caption">
                    Donation to <b>{data?.organization.name && data.organization.name}</b> through{' '}
                    <b>Tmra</b>
                  </Typography>
                </Grid>
                <form onSubmit={handleToCheckOut}>
                  <Stack spacing={3} sx={{ margin: 5 }}>
                    <Grid item xs={12}>
                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {data?.campaign.currencyCode ? data?.campaign.currencyCode : 'SAR'}
                            </InputAdornment>
                          ),
                          endAdornment: <Button>Edit</Button>,
                        }}
                        disabled={true}
                        fullWidth
                        defaultValue={donateValue}
                        label={t('Donation Amount')}
                        onClick={() => {
                          setStep(0);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        InputProps={{
                          inputProps: { min: 0 },
                          startAdornment: (
                            <InputAdornment position="start">
                              {data?.campaign.currencyCode ? data?.campaign.currencyCode : 'SAR'}
                            </InputAdornment>
                          ),
                        }}
                        type="number"
                        onKeyDown={e => {
                          // console.log();
                          const prevent = ['e', 'E', '+', '-', '.', ','];
                          prevent.includes(e.key) && e.preventDefault();
                        }}
                        fullWidth
                        defaultValue="3"
                        label={t('Tip Amount')}
                      />
                      <Typography variant="caption" color="gray">
                        Tmra relies on your generosity to continue providing platform for
                        fundraisers.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField multiline fullWidth label={t('Message')} />
                    </Grid>
                    <Grid item xs={12}>
                      <LoadingButton type="submit" variant="outlined" fullWidth={true}>
                        Continue
                      </LoadingButton>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                      {' '}
                      <Typography variant="caption" color="gray">
                        By proceeding, you agree to our terms and privacy
                      </Typography>
                    </Grid>
                  </Stack>
                </form>
              </Grid>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </WhitelabelLayout>
  );
}

export async function getOrganizationHomePageProps({
  organizationUsername,
  organizationId,
}: {
  organizationUsername?: string;
  organizationId?: string;
}): Promise<IPropsAmountDonation> {
  let statusCode = 200;
  let organizationData: OrganizationInfoFragment | null = null;
  let organizationError: CombinedError | null = null;
  if (organizationId != null) {
    console.info('Find one organization by ID ', organizationId);
    const res = await client
      .query<FindOneOrganizationByIdQuery, FindOneOrganizationByIdQueryVariables>(
        FindOneOrganizationByIdDocument,
        { id: organizationId },
      )
      .toPromise();
    organizationData = res.data?.organization ?? null;
    organizationError = res.error ?? null;
  } else if (organizationUsername != null) {
    console.info('Find one organization by username ', organizationUsername);
    const res = await client
      .query<FindOneOrganizationByUsernameQuery, FindOneOrganizationByUsernameQueryVariables>(
        FindOneOrganizationByUsernameDocument,
        { username: organizationUsername! },
      )
      .toPromise();
    organizationData = res.data?.organization ?? null;
    organizationError = res.error ?? null;
  } else {
    throw new Error('One of organizationId or organizationUsername is required');
  }
  if (!organizationData) {
    statusCode = 404;
    console.error(
      `Error find one organization by username=${organizationUsername} or id=${organizationId}`,
      organizationError?.message,
      organizationError?.networkError?.message,
    );
  }

  const appearanceRes = await client
    .query<GetOrganizationAppearanceQuery, GetOrganizationAppearanceQueryVariables>(
      GetOrganizationAppearanceDocument,
      {
        _id: organizationData?._id ?? '',
      },
    )
    .toPromise();
  if (appearanceRes.error) {
    statusCode = 500;
    console.error(
      `Error get organization appearance for ${organizationData?._id}: ${appearanceRes.error.message}`,
      appearanceRes.error,
    );
  } else {
    console.debug(
      `Got appearance for ${organizationData?._id}. favicon=${appearanceRes.data?.nonprofitAppearance?.favIcon} mainImageUrl=${appearanceRes.data?.nonprofitAppearance?.mainImageUrl} logo=${appearanceRes.data?.nonprofitAppearance?.logo}`,
    );
  }

  return {
    statusCode,
    organizationRes: {
      data: organizationData,
      error: organizationError?.message ?? null,
    },
    appearanceRes: {
      data: appearanceRes.data ?? null,
      error: appearanceRes.error?.message ?? null,
    },
  };
}
