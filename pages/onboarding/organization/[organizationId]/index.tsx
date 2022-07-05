import { PlanFreeIcon, PlanPremiumIcon, PlanStarterIcon } from '@assets';
import { MIconButton } from '@components/@material-extend';
import Page from '@components/Page';
import { PricingPlanCard } from '@components/_external-pages/pricing';
import useIsMountedRef from '@hooks/useIsMountedRef';
import closeFill from '@iconify/icons-eva/close-fill';
import { Icon } from '@iconify/react';
import OnboardingLayout from '@layouts/OnboardingLayout';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { app } from '@redux/slices/auth/realm';
import { Form, FormikProvider, useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React from 'react';
import dataCountry from 'src/components/_external-pages/gift/phone_prefix.json';
import Steps from 'src/components/_external-pages/gift/Steps';
import { gql, useMutation } from 'urql';
import * as Yup from 'yup';

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));
type InitialValues = {
  afterSubmit?: string;
  name: string;
  username: string;
  licenseNumber: string;
  orgObjective: string;
  contactEmail: string;
  phone1: string;
  phone2: string;
  organizationType: string;
  // comissioner: string;
  organizationSwiftCode: string;
  organizationBankAccountNumber: string;
  organizationBankAccountName: string;
  organizationBankAccount: string;
  organizationSize: string;
  organizationProfile: string;
  defaultCurrency: string;
  paypalClientId: string;
};
const insertNonprofitGQL = gql`
  mutation insertnonprofit(
    $ownerUserId: String!
    $ownerRealmId: ObjectId!
    $name: String!
    $username: String!
    $organizationSwiftCode: String!
    $organizationBankAccount: String!
    $organizationBankAccountName: String!
    $orgObjective: String
    $organizationBankAccountNumber: String!
    $organizationSize: String!
    $organizationProfile: String!
    $contactEmail: String!
    $licenseNumber: String!
    $contactPhone: String!
    $organizationType: String!
    $defaultCurrency: String!
    $packageType: Int!
    $paypalClientId: String!
  ) {
    updateOneOrganization(
      query: { ownerUserId: $ownerUserId }
      set: {
        ownerRealmId: $ownerRealmId
        name: $name
        username: $username
        contactEmail: $contactEmail
        organizationSwiftCode: $organizationSwiftCode
        organizationBankAccount: $organizationBankAccount
        organizationBankAccountName: $organizationBankAccountName
        organizationSize: $organizationSize
        organizationProfile: $organizationProfile
        orgObjective: $orgObjective
        organizationBankAccountNumber: $organizationBankAccountNumber
        licenseNumber: $licenseNumber
        contactPhone: $contactPhone
        organizationType: $organizationType
        packageType: $packageType
        paypalClientId: $paypalClientId
        defaultCurrency: $defaultCurrency
      }
    ) {
      _id
      ownerUserId
      ownerRealmId
      name
    }
  }
`;
const Home: React.FC = () => {
  const { t } = useTranslation('org');
  const [step, setStep] = React.useState(0);
  const [plan, setPlan] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const [resultInsertNonprofit, insertNonprofit] = useMutation(insertNonprofitGQL);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const router = useRouter();
  console.log('nonprofit', app.currentUser);
  const onboardingSchema = Yup.object().shape({
    username: Yup.string().required('Organization name is required'),
    name: Yup.string().required('Organization username is required'),
    contactEmail: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
  });
  const formik = useFormik<InitialValues>({
    initialValues: {
      name: '',
      username: '',
      licenseNumber: '',
      orgObjective: '',
      phone1: '',
      phone2: '',
      contactEmail: '',
      organizationType: 'education',
      organizationSwiftCode: '',
      organizationBankAccount: '',
      organizationBankAccountNumber: '',
      organizationBankAccountName: '',
      organizationSize: '',
      organizationProfile: '',
      defaultCurrency: 'SAR',
      paypalClientId: '',
    },
    validationSchema: onboardingSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      const variables = {
        ownerRealmId: app.currentUser!.id!,
        ownerUserId: app.currentUser?.profile.ssoId,
        name: values.name,
        username: values.username,
        contactEmail: values.contactEmail,
        organizationSwiftCode: values.organizationSwiftCode,
        organizationBankAccount: values.organizationBankAccount,
        organizationBankAccountName: values.organizationBankAccountName,
        organizationBankAccountNumber: values.organizationBankAccountNumber,
        contactPhone: values.phone1.replace('+', '') + values.phone2,
        licenseNumber: values.licenseNumber,
        orgObjective: values.orgObjective,
        organizationSize: values.organizationSize,
        organizationProfile: values.organizationProfile,
        organizationType: values.organizationType,
        defaultCurrency: values.defaultCurrency,
        packageType: plan,
        paypalClientId: values.paypalClientId,
      };
      console.log('variables', variables);
      try {
        const resp1 = await insertNonprofit(variables);
        console.log(resp1);
        if (resp1.error) {
          if (resp1.error.message) {
            if (resp1.error.message.includes('username dup key')) {
              throw new Error('Username already exist, please change it.');
            } else {
              throw new Error(resp1.error.message);
            }
          }
        }
        enqueueSnackbar('Onboarding complete!', {
          variant: 'success',
          action: key => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
        router.push(`/manage/organization/${router.query.organizationId}`);
      } catch (error) {
        setSubmitting(false);
        setErrors({ afterSubmit: JSON.stringify(error) });
      }
    },
  });
  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
  const path = false;
  const steps = [
    { name: t('Choose your plan') },
    { name: t('gift.step2') },
    // { name: t('gift.step3') },
  ];
  const PLANS = [
    {
      subscription: 'basic',
      icon: <PlanFreeIcon />,
      price: 0,
      caption: 'forever',
      lists: [
        { text: '3 prototypes', isAvailable: true },
        { text: '3 boards', isAvailable: true },
        { text: 'Up to 5 team members', isAvailable: false },
        { text: 'Advanced security', isAvailable: false },
        { text: 'Permissions & workflows', isAvailable: false },
      ],
      labelAction: 'Choose Free',
    },
    {
      subscription: 'starter',
      icon: <PlanStarterIcon />,
      price: 4.99,
      caption: 'saving $24 a year',
      lists: [
        { text: '3 prototypes', isAvailable: true },
        { text: '3 boards', isAvailable: true },
        { text: 'Up to 5 team members', isAvailable: true },
        { text: 'Advanced security', isAvailable: false },
        { text: 'Permissions & workflows', isAvailable: false },
      ],
      labelAction: 'choose starter',
    },
    {
      subscription: 'premium',
      icon: <PlanPremiumIcon />,
      price: 9.99,
      caption: 'saving $124 a year',
      lists: [
        { text: '3 prototypes', isAvailable: true },
        { text: '3 boards', isAvailable: true },
        { text: 'Up to 5 team members', isAvailable: true },
        { text: 'Advanced security', isAvailable: true },
        { text: 'Permissions & workflows', isAvailable: true },
      ],
      labelAction: 'choose premium',
    },
  ];
  console.log(plan);
  console.log(step);
  return (
    <RootStyle title={`${t('pages.login.forgotPassword')} | ${t('app.name')}`}>
      <OnboardingLayout />
      <Page title="Dashboard | Ommar">
        <Container maxWidth="xl">
          <Steps step={step} title={steps} />
          {step === 0 && (
            <>
              <Typography sx={{ mt: 5 }} variant="h3" align="center" paragraph>
                Flexible plans for your
                <br /> community&apos;s size and needs
              </Typography>
              <Typography align="center" sx={{ color: 'text.secondary' }}>
                Choose your plan and make modern online conversation magic
              </Typography>

              <Box sx={{ my: 5 }}>
                <Stack direction="row" alignItems="center" justifyContent="flex-end">
                  <Typography variant="overline" sx={{ mr: 1.5 }}>
                    MONTHLY
                  </Typography>
                  <Switch />
                  <Typography variant="overline" sx={{ ml: 1.5 }}>
                    YEARLY (save 10%)
                  </Typography>
                </Stack>
                <Typography
                  variant="caption"
                  align="right"
                  sx={{ color: 'text.secondary', display: 'block' }}
                >
                  * Plus applicable taxes
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {PLANS.map((card, index) => (
                  <Grid item xs={12} md={4} key={card.subscription}>
                    <PricingPlanCard
                      card={card}
                      index={index}
                      isPath={path}
                      nonprofitPlan={setPlan}
                      setStep={setStep}
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
          {step === 1 && (
            <>
              <FormikProvider value={formik}>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  {errors.afterSubmit && (
                    <Alert sx={{ mb: 3, mt: 3 }} severity="error">
                      {errors.afterSubmit}
                    </Alert>
                  )}
                  <Stack
                    spacing={3}
                    sx={{
                      mt: 5,
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Grid container spacing={2} sx={{ maxWidth: 600 }}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={t('Username')}
                          {...getFieldProps('username')}
                          error={Boolean(touched.username && errors.username)}
                          helperText={touched.username && errors.username}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label={t('Organization name')}
                          {...getFieldProps('name')}
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label={t('License number')}
                          {...getFieldProps('licenseNumber')}
                          error={Boolean(touched.licenseNumber && errors.licenseNumber)}
                          helperText={touched.licenseNumber && errors.licenseNumber}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          multiline
                          label={t('Organization objective')}
                          {...getFieldProps('orgObjective')}
                          error={Boolean(touched.orgObjective && errors.orgObjective)}
                          helperText={touched.orgObjective && errors.orgObjective}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          type="number"
                          onKeyDown={e => {
                            const prevent = ['e', 'E', '+', '-', '.', ','];
                            prevent.includes(e.key) && e.preventDefault();
                          }}
                          inputProps={{
                            inputMode: 'numeric',
                            pattern: '[0-9]*',
                          }}
                          label={t('Organization size')}
                          {...getFieldProps('organizationSize')}
                          error={Boolean(touched.organizationSize && errors.organizationSize)}
                          helperText={touched.organizationSize && errors.organizationSize}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          label={t('Organization profile')}
                          {...getFieldProps('organizationProfile')}
                          error={Boolean(touched.organizationProfile && errors.organizationProfile)}
                          helperText={touched.organizationProfile && errors.organizationProfile}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          type="email"
                          label={t('Contact email')}
                          {...getFieldProps('contactEmail')}
                          error={Boolean(touched.contactEmail && errors.contactEmail)}
                          helperText={touched.contactEmail && errors.contactEmail}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <FormControl sx={{ width: '100%' }}>
                          <InputLabel id="code">Code</InputLabel>
                          <Select
                            labelId="code"
                            label={t('Code')}
                            {...getFieldProps('phone1')}
                            error={Boolean(touched.phone1 && errors.phone1)}
                            // helperText={touched.state && errors.state}
                          >
                            {dataCountry.countries.map(country => (
                              <MenuItem key={country.name} value={country.code}>
                                {country.code}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={9}>
                        <TextField
                          fullWidth
                          type="number"
                          label={t('pages.register.phone-number')}
                          {...getFieldProps('phone2')}
                          error={Boolean(touched.phone2 && errors.phone2)}
                          helperText={touched.phone2 && errors.phone2}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl sx={{ width: '100%' }}>
                          <InputLabel id="organizationType">Nonprofit categories</InputLabel>
                          <Select
                            labelId="organizationType"
                            label={t('Nonprofit categories')}
                            {...getFieldProps('organizationType')}
                            error={Boolean(touched.organizationType && errors.organizationType)}
                            // helperText={touched.state && errors.state}
                          >
                            <MenuItem value="education">Education</MenuItem>
                            <MenuItem value="communityService">Community Service</MenuItem>
                            <MenuItem value="orphanCare">Orphan Care</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      {/* <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          label={t('Comissioner')}
                          {...getFieldProps('comissioner')}
                          error={Boolean(touched.comissioner && errors.comissioner)}
                          helperText={touched.comissioner && errors.comissioner}
                        />
                      </Grid> */}
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label={t('Bank account')}
                          {...getFieldProps('organizationBankAccount')}
                          error={Boolean(
                            touched.organizationBankAccount && errors.organizationBankAccount,
                          )}
                          helperText={
                            touched.organizationBankAccount && errors.organizationBankAccount
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label={t('Swift code')}
                          {...getFieldProps('organizationSwiftCode')}
                          error={Boolean(
                            touched.organizationSwiftCode && errors.organizationSwiftCode,
                          )}
                          helperText={touched.organizationSwiftCode && errors.organizationSwiftCode}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label={t('Bank account number')}
                          {...getFieldProps('organizationBankAccountNumber')}
                          error={Boolean(
                            touched.organizationBankAccountNumber &&
                              errors.organizationBankAccountNumber,
                          )}
                          helperText={
                            touched.organizationBankAccountNumber &&
                            errors.organizationBankAccountNumber
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label={t('Bank account name')}
                          {...getFieldProps('organizationBankAccountName')}
                          error={Boolean(
                            touched.organizationBankAccountName &&
                              errors.organizationBankAccountName,
                          )}
                          helperText={
                            touched.organizationBankAccountName &&
                            errors.organizationBankAccountName
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl sx={{ width: '100%' }}>
                          <InputLabel id="Currency">Currency</InputLabel>
                          <Select
                            labelId="Currency"
                            label={t('Currency')}
                            {...getFieldProps('defaultCurrency')}
                            error={Boolean(touched.defaultCurrency && errors.defaultCurrency)}
                            // helperText={touched.state && errors.state}
                          >
                            <MenuItem value="SAR">SAR</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={t('Paypal client id')}
                          {...getFieldProps('paypalClientId')}
                          error={Boolean(touched.paypalClientId && errors.paypalClientId)}
                          helperText={touched.paypalClientId && errors.paypalClientId}
                        />
                      </Grid>
                    </Grid>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Button
                          fullWidth
                          size="large"
                          type="submit"
                          variant="outlined"
                          onClick={() => {
                            setStep(0);
                          }}
                        >
                          {t('Prev')}
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <LoadingButton
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                          loading={isSubmitting}
                        >
                          {t('Finish')}
                        </LoadingButton>
                      </Grid>
                    </Grid>
                  </Stack>
                </Form>
              </FormikProvider>
            </>
          )}
          {/* {step === 2 && } */}
          <Box sx={{ my: 5 }}></Box>
        </Container>
      </Page>
    </RootStyle>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
