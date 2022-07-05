/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// layouts
import { MIconButton } from '@components/@material-extend';
import { paypal } from '@components/checkout/paypalCurrency';
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
import closeFill from '@iconify/icons-eva/close-fill';
import { Icon } from '@iconify/react';
import { Alert, Button, Card, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { app } from '@redux/slices/auth/realm';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
// material
import { useSnackbar } from 'notistack';
import React from 'react';
// components
import Page from 'src/components/Page';
import MainLayout from 'src/layouts/main';
import WhitelabelLayout from 'src/layouts/whitelabel';
import RuntimeConfigs from '@utils/runtime-configs';
import { CombinedError, gql, useMutation } from 'urql';

const insertDonationLog = gql`
  mutation insertDonationLog($donationStatus: String!) {
    insertOneDonation_log(data: { donationStatus: $donationStatus }) {
      _id
      donationStatus
    }
  }
`;
const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
}));

const PaymentRightTop = styled('div')(({ theme }) => ({
  // padding-left: 20px;
  background: `#aeffff 0% 0% no-repeat padding-box`,
  borderRadius: `19px`,
  opacity: `1`,
}));

const PaymentRightBottom = styled('div')(({ theme }) => ({
  padding: `20px`,
}));

const SwapGrid = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column-reverse',
  },
}));

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

type PaymentData = {
  currency: string;
  paypalClientId: string;
  amount: string;
  campaignName: string;
  message: string;
  campaignId: string;
  donorRealmId: string;
  donorUserId: string;
  username: string;
};

export interface IPropsCheckoutDonation {
  organizationRes: { data: OrganizationInfoFragment | null; error: string | null };
  appearanceRes: { data: GetOrganizationAppearanceQuery | null; error: string | null };
  statusCode: number;
}

export default function CheckoutDonationWhitelabel({
  appearanceRes,
  organizationRes,
}: IPropsCheckoutDonation): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation('app');
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [paymentData, setPaymentData] = React.useState<PaymentData | null>(null);
  const [, insertOneDonationLog] = useMutation(insertDonationLog);
  const [exist, setExist] = React.useState(false);
  // React.useEffect(() => {

  // }, [setPaymentData]);
  React.useEffect(() => {
    if (paymentData === null) {
      setPaymentData(JSON.parse(localStorage.getItem('singlePayment')!));
      // localStorage.removeItem('singlePayment');
      const checkData = JSON.parse(localStorage.getItem('singlePayment')!);
      const found = paypal.paypalCurrency.find(x => x.Code === checkData?.currency);
      console.debug('Find PayPal currency by', checkData?.currency, ':', found);
      setExist(found != null);
    }

    if (!router.query) {
      router.push('/');
    }
  }, []);
  console.log('local storage payment', paymentData);
  console.log('is currency exist on paypal', exist);
  const [payment, setPayment] = React.useState('');
  const handleError = async (errorHeader: any, errorData: any) => {
    console.log('error header', errorHeader);
    console.log('error data', errorData);
    try {
      const path = `${publicRuntimeConfig.tmra.fund.url}/v1/paypal/error`;
      const token = localStorage.getItem('token')!;
      const headers = { Authorization: token };
      const data = {
        campaignId: paymentData?.campaignId,
        donorRealmId: paymentData?.donorRealmId,
        donorUserId: paymentData?.donorUserId,
        amount: paymentData?.amount.toString(),
        currency: paymentData?.currency,
        message: paymentData?.message,
        username: paymentData?.username,
        lastErrorCode: errorData.details[0] ? errorData.details[0].issue : errorData || '',
        lastErrorData: JSON.stringify(errorData) || '',
        lastErrorHeader: errorHeader || '',
      };
      console.log('variable', data);
      const resp = await axios.post(path, data, { headers: headers });
      console.log('hasil', resp);
      enqueueSnackbar(
        errorData && errorData.details[0] && errorData.details[0].description
          ? errorData.details[0].description
          : 'Donation failed!',
        {
          variant: 'error',
          action: key => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        },
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error', error.response);
        enqueueSnackbar(
          error.response?.data.message ? error.response.data.message : error.response?.data,
          {
            variant: 'error',
            action: key => (
              <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                <Icon icon={closeFill} />
              </MIconButton>
            ),
          },
        );
      } else {
        console.log('error', error);
        enqueueSnackbar(JSON.stringify(error), {
          variant: 'error',
          action: key => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
      }
    }
  };
  const handleDonation = async (dataPaypal: any, captureAction: any) => {
    console.log('data donasi', dataPaypal);
    console.log('action donasi', captureAction);
    try {
      const variables = {
        donationStatus: 'PENDING',
      };
      const insertDLog = await insertOneDonationLog(variables);
      console.log('insert donation log', insertDLog);
      const path = `${publicRuntimeConfig.tmra.fund.url}/v1/paypal/success`;
      const token = localStorage.getItem('token')!;
      const headers = { Authorization: token };
      const data = {
        donationId: insertDLog.data.insertOneDonation_log._id,
        campaignId: paymentData?.campaignId,
        donorRealmId: paymentData?.donorRealmId,
        donorUserId: paymentData?.donorUserId,
        amount: paymentData?.amount.toString(),
        currency: paymentData?.currency,
        message: paymentData?.message,
        username: paymentData?.username,
        facilitatorAccessToken: dataPaypal?.facilitatorAccessToken,
        orderId: dataPaypal?.orderID,
        payerId: dataPaypal?.payerID,
        merchantId: captureAction.purchase_units[0].payee.merchant_id,
        paymentStatus: captureAction.status,
      };
      const resp = await axios.post(path, data, { headers: headers });
      // console.log('hasil', JSON.parse(resp.data));
      console.log('hasil json', resp);
      const cId = paymentData?.campaignId;
      const uname = paymentData?.username;
      localStorage.removeItem('singlePayment');
      const sendEmail = await app.currentUser?.callFunction('successDonationEmail', {
        _id: data.donationId,
      });
      console.log('donation success email', sendEmail);
      enqueueSnackbar('Donation success!', {
        variant: 'success',
        action: key => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Icon icon={closeFill} />
          </MIconButton>
        ),
      });
      router.push(`/payment/${dataPaypal?.orderID}/status`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error', error.response);
        enqueueSnackbar(
          error.response?.data.message ? error.response.data.message : error.response?.data,
          {
            variant: 'error',
            action: key => (
              <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                <Icon icon={closeFill} />
              </MIconButton>
            ),
          },
        );
      } else {
        console.log('error', error);
        enqueueSnackbar(JSON.stringify(error), {
          variant: 'error',
          action: key => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
      }
    }
    // }
    //
  };
  const xenditPayment = async () => {
    function makeid(length: number) {
      const result: any = [];
      const characters = '0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
      }
      return result.join('');
    }
    const resp = await app.currentUser?.functions.callFunction('createInvoiceXendit', {
      rand: makeid(10),
      campaignId: paymentData?.campaignId,
      donorRealmId: paymentData?.donorRealmId,
      donorUserId: paymentData?.donorUserId,
      amount: paymentData?.amount.toString(),
      currency: paymentData?.currency,
      message: paymentData?.message,
      username: paymentData?.username,
    });
    console.log('hasil xendit', resp);
    if (resp) {
      localStorage.removeItem('singlePayment');
      window.open(resp.invoice_url);
    }
  };
  if (paymentData === null) {
    return <>Loading...</>;
  }

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
        <ContentStyle>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3">Payment</Typography>
              </Grid>
              {/* <SwapGrid> */}
              <Grid container sx={{ mt: 2, mb: 2 }}>
                {/* <Stack spacing={3}> */}
                <Grid item xs={12} sm={6}>
                  <Card sx={{ m: 2 }}>
                    <div style={{ padding: 20 }}>
                      <Typography variant="h4" sx={{ textAlign: 'center' }}>
                        Payment options
                      </Typography>
                      <Grid
                        sx={{ pt: 3, pb: 3 }}
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
                        {exist && (
                          <Grid
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            item
                            xs={3}
                          >
                            <Button
                              onClick={() => {
                                setPayment('paypal');
                              }}
                              disableTouchRipple={true}
                              color="inherit"
                            >
                              <img
                                style={{ width: 100 }}
                                src="`${publicRuntimeConfig.bunny.cdn.urlMedia}/tmra/production/pp_fc_hl.svg?width=100"
                              />
                            </Button>
                          </Grid>
                        )}
                        <Grid
                          item
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          xs={3}
                        >
                          <Button
                            onClick={() => {
                              xenditPayment();
                            }}
                            disableTouchRipple={true}
                            color="inherit"
                          >
                            <img
                              style={{ width: 100 }}
                              src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/tmra/production/01-xendit_logo.svg?width=100`}
                            />
                          </Button>
                        </Grid>
                      </Grid>
                      {payment === 'paypal' && paymentData && (
                        <div style={{ margin: 20 }}>
                          <PayPalScriptProvider
                            options={{
                              currency:
                                paymentData && paymentData.currency ? paymentData.currency : 'USD',
                              'client-id':
                                paymentData && paymentData.paypalClientId
                                  ? paymentData.paypalClientId
                                  : '',
                            }}
                          >
                            <PayPalButtons
                              onError={err => {
                                const errTostring = err.toString();
                                const jsonString = errTostring.match(/\{.*\}/gm);
                                //   const jsontoString =
                                const errorHeader = errTostring.match(/[^\n]*/)![0];
                                const errorData = JSON.parse(jsonString![0]);
                                handleError(errorHeader, errorData);
                              }}
                              //   onCancel={handleCancel}
                              onApprove={async (data, actions) => {
                                const captureAction = await actions.order.capture();
                                return handleDonation(data, captureAction);
                              }}
                              createOrder={(data: any, actions: any) => {
                                return actions.order.create({
                                  purchase_units: [
                                    {
                                      amount: {
                                        value:
                                          paymentData && paymentData.amount
                                            ? paymentData.amount
                                            : '0',
                                      },
                                    },
                                  ],
                                });
                              }}
                              style={{ layout: 'vertical', shape: 'pill' }}
                            />
                          </PayPalScriptProvider>
                        </div>
                      )}
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ m: 2 }}>
                    <PaymentRightTop sx={{ p: 3 }}>
                      <Typography sx={{ mb: 2 }} variant="h5">
                        Total Amount
                      </Typography>
                      <div>
                        <span style={{ fontSize: 30 }}>
                          {paymentData && paymentData.amount ? paymentData.amount : 0}
                          <span
                            style={{
                              fontWeight: 500,
                              fontSize: 15,
                              verticalAlign: 20,
                            }}
                          >
                            {paymentData && paymentData.currency ? paymentData.currency : 'SAR'}
                          </span>
                        </span>
                      </div>
                    </PaymentRightTop>
                    <PaymentRightBottom>
                      <Grid container>
                        <Grid item xs={6}>
                          <Typography sx={{ fontSize: 25 }}>
                            {paymentData && paymentData.campaignName
                              ? paymentData.campaignName
                              : ''}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <div style={{ float: 'right' }}>
                            <span style={{ fontSize: 30 }}>
                              {paymentData && paymentData.amount ? paymentData.amount : 0}
                              <span
                                style={{
                                  fontWeight: 500,
                                  fontSize: 15,
                                  verticalAlign: 20,
                                }}
                              >
                                {paymentData && paymentData.currency ? paymentData.currency : 'SAR'}
                              </span>
                            </span>
                          </div>
                        </Grid>
                      </Grid>
                    </PaymentRightBottom>
                  </Card>
                </Grid>
                {/* </Stack> */}
              </Grid>
              {/* </SwapGrid> */}
            </Grid>
          </Container>
        </ContentStyle>
      </RootStyle>
    </WhitelabelLayout>
  );
}

export async function getOrganizationCheckoutProps({
  organizationUsername,
  organizationId,
}: {
  organizationUsername?: string;
  organizationId?: string;
}): Promise<IPropsCheckoutDonation> {
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
