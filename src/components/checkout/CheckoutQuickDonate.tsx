// Material
import { MotionContainer, varBounceIn, varWrapEnter } from '@components/animate';
import { Icon } from '@iconify/react';
// Icon
import { Add, Close, Info, Remove } from '@mui/icons-material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Collapse,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  styled,
  Tab,
  TextField,
  Tooltip,
  Typography,
  Zoom,
  Theme,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
//
import { motion } from 'framer-motion';
import { toInteger } from 'lodash';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';

import { Appearance } from '@modules/fundraising/Campaign';
import { textFieldClasses } from '@mui/material/TextField';
import { radioClasses } from '@mui/material/Radio';
import { checkboxClasses } from '@mui/material/Checkbox';
import { buttonClasses } from '@mui/material/Button';
import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import { alpha, useTheme } from '@mui/material/styles';

import { useAppSelector } from '@redux/hooks';
import { DonorForm } from '../../../pages/charity/more-info';
import QuickDonate from '@components/donate/quickDonate';

// ----------------------------------------------------------------------

const ButtonQuickDonate = styled('div')(() => ({
  position: 'fixed',
  top: '15%',
  right: 0,
  zIndex: 99,
}));

const IllustrationImgStyle = styled('img')(() => ({
  width: 146,
  height: 106,
  margin: 'auto',
}));

const IllustrationPayment = styled('img')(() => ({
  width: 69,
  height: 19,
}));

const LabelTotalAmount = styled('div')(() => ({
  border: '1px solid #A9C2FF',
  borderRadius: '6px',
  backgroundColor: 'rgba(237, 243, 255, 0.6)',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const WrapperForm = styled('div')(() => ({
  border: '1px solid rgba(145, 158, 171, 0.32)',
  borderRadius: '6px',
  padding: '8px 16px',
}));

const WrapperFormPaymentTitle = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const CssTextField = styled(TextField)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const accentColor = getAccentColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      [`&.${textFieldClasses.root}`]: {
        '& label.Mui-focused': {
          color: color,
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: color,
            color: color,
          },
        },
      },
    };
  },
);

export const RadioButtonStyle = styled(Radio)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const accentColor = getAccentColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      [`&.${radioClasses.root}`]: {
        '&.Mui-checked': {
          color: color,
        },
      },
    };
  },
);

export const ButtonStyle = styled(Button)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const accentColor = getButtonColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      [`&.${buttonClasses.root}`]: {
        '&:focus': {
          background: `${alpha(color, 0.2)}`,
        },
        borderRadius: '5px',
        borderColor: color,
        backgroundColor: color,
        '&:hover': {
          backgroundColor: `${alpha(color, 0.5)}`,
          borderColor: color,
        },
      },
    };
  },
);

export const AmountButtonStyle = styled(Button)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const accentColor = getAccentColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      [`&.${buttonClasses.root}`]: {
        color: color,
        '&:focus': {
          background: `${alpha(color, 0.2)}`,
        },
        borderRadius: '5px',
        borderColor: color,
        '&:hover': {
          backgroundColor: `${alpha(color, 0.5)}`,
          borderColor: `${color} !important`,
        },
      },
    };
  },
);

export const CheckboxStyle = styled(Checkbox)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const accentColor = getAccentColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      [`&.${checkboxClasses.root}`]: {
        '&.Mui-checked': {
          color: color,
        },
      },
    };
  },
);

// ----------------------------------------------------------------------

type InitialValuesEmailMessage = {
  email: string | null;
  message?: string | null;
};

type InitialValuesPaymentCC = {
  name_holder?: string | null;
  card_number?: number | null;
  cvv?: number | null;
  month?: number | null;
  year?: number | null;
};

export type QuickDonateRef = {
  setPaytabsUrl: (data) => void;
  setTransRef: (data) => void;
};

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
const path = `${publicRuntimeConfig.tmra.fund.url}/v1/paytabs/request`;

const DONATION_AMOUNT = [
  {
    value: 10,
    title: '$10',
    code: '',
  },
  {
    value: 15,
    title: '$15',
    code: '',
  },
  {
    value: 20,
    title: '$20',
    code: '',
  },
  {
    value: 25,
    title: '$25',
    code: '',
  },
];

export const CustomCircularProgress = styled(CircularProgress)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const accentColor = getAccentColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      color: color,
    };
  },
);

const CheckoutQuickDonate = forwardRef(
  (
    {
      appearance,
      donateAction,
      isLoading,
      donationAmountArr,
      hideInputAmount = false,
      currencyCode,
    }: {
      appearance?: Appearance | null;
      isLoading?: boolean;
      donateAction?: (data) => void;
      donationAmountArr?: any[];
      hideInputAmount?: boolean;
      currencyCode?: string;
    },
    ref,
  ) => {
    const router = useRouter();
    const currentUser = useAppSelector(state => state.currentUser);

    const { paymentSuccess } = router.query;

    const [showForm, setShowForm] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');
    const [donateValue, setDonateValue] = useState<number | 0>(0);
    const [disabled, setDisabled] = useState(true);
    const [nextStep, setNextStep] = useState(false);
    const [sendReceipt, setSendReceipt] = useState<string | null>(null);
    const [hideDonorName, setHideDonorName] = useState<string | null>(null);
    const [paymentMethods, setPaymentMethods] = useState<string | null>(null);
    const [agreeTnc, setAgreeTnc] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const { t } = useTranslation();

    // Recurrences
    const [valueRecurring, setValueRecurring] = useState<string | null>(null);
    const [valueTabsRecurrences, setValueTabsRecurrences] = useState('weekly');
    const [supportCampaignEnds, setSupportCampaignEnds] = useState<string | null>(null);
    const [counterWeekly, setCounterWeekly] = useState(0);
    const [counterMonthly, setCounterMonthly] = useState(0);

    // paytabs request
    const [paytabsUrl, setPaytabsUrl] = useState<string | undefined>();
    const [paytabsCallback, setPaytabsCallback] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(false);
    const [transRef, setTransRef] = useState<string | undefined>();

    const [priceCode, setPriceCode] = useState<string | null>(null);
    const [donationValues, setDonationValues] = useState(DONATION_AMOUNT);

    const [openQuickDonate, setOpenQuickDonate] = useState(false);

    useEffect(() => {
      if (paymentSuccess) {
        setOpenPopup(true);
        setNextStep(true);
        setPaytabsCallback(true);
      }
      // eslint-disable-next-line
    }, [paymentSuccess]);

    const setModalHide = () => {
      setOpenQuickDonate(false);
    };

    const handleChangePaymentMethods = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentMethods((event.target as HTMLInputElement).value);

      if ((event.target as HTMLInputElement).value === 'other-method') {
        setFormPaymentCC({
          name_holder: '',
          card_number: null,
          cvv: null,
          month: null,
          year: null,
        });
      }
    };

    useEffect(() => {
      if (donationAmountArr && Array.isArray(donationAmountArr) && donationAmountArr.length > 0) {
        setDonationValues(donationAmountArr);
      }
    }, [donationAmountArr]);

    useImperativeHandle(ref, () => ({
      setPaytabsUrl: url => {
        setPaytabsUrl(url);
      },
      setTransRef: trans_ref => {
        setTransRef(trans_ref);
      },
    }));

    const handleChangeTabsRecurrences = (event: React.SyntheticEvent, newValue: string) => {
      setValueTabsRecurrences(newValue);
    };

    const handleChangeSupportCampaign = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSupportCampaignEnds((event.target as HTMLInputElement).value);
    };

    const incrementCounter = (e: React.MouseEvent<HTMLElement>, type: string) => {
      if (type === 'weekly') {
        setCounterWeekly(counterWeekly + 1);
      } else if (type === 'monthly') {
        setCounterMonthly(counterMonthly + 1);
      }
    };

    const decrementCounter = (e: React.MouseEvent<HTMLElement>, type: string) => {
      let newCounter: React.SetStateAction<number>;

      if (type === 'weekly') {
        if (counterWeekly > 1) {
          newCounter = counterWeekly - 1;
        } else {
          newCounter = 0;
        }

        setCounterWeekly(newCounter);
      } else if (type === 'monthly') {
        if (counterMonthly > 1) {
          newCounter = counterMonthly - 1;
        } else {
          newCounter = 0;
        }

        setCounterMonthly(newCounter);
      }
    };

    const [formEmailMessage, setFormEmailMessage] = useState<InitialValuesEmailMessage>({
      email: '',
      message: '',
    });

    const [errorEmailMessage, setErrorEmailMessage] = useState<InitialValuesEmailMessage>({
      email: '',
      message: '',
    });

    const [formPaymentCC, setFormPaymentCC] = useState<InitialValuesPaymentCC>({
      name_holder: '',
      card_number: null,
      cvv: null,
      month: null,
      year: null,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChangeEmailMessage = (e: any) => {
      setFormEmailMessage({
        ...formEmailMessage,
        [e.target.name]: e.target.value,
      });

      if (valueRecurring !== null) {
        setErrorEmailMessage({
          ...errorEmailMessage,
          [e.target.name]: '',
        });
      }
    };

    const validate = () => {
      const newError = { ...errorEmailMessage };

      if (!formEmailMessage.email) {
        newError.email = 'Email wajib diisi !';
      }

      if (!formEmailMessage.message) {
        newError.message = 'Message wajib diisi !';
      }

      return newError;
    };

    const handleOpenPopup = (scrollType: DialogProps['scroll']) => () => {
      setOpenPopup(true);
      setScroll(scrollType);
    };
    const handleClosePopup = () => {
      setOpenPopup(false);
      setShowForm(false);
      setDonateValue(0);
      setDisabled(true);
      setNextStep(false);
      setValueRecurring(null);
      setSendReceipt(null);
      setErrorEmailMessage({
        email: '',
        message: '',
      });
      setFormPaymentCC({
        name_holder: '',
        card_number: null,
        cvv: null,
        month: null,
        year: null,
      });
      setAgreeTnc(false);
      setValueRecurring(null);
      setPaymentMethods(null);
      setValueTabsRecurrences('weekly');
      setSupportCampaignEnds(null);
      setCounterWeekly(0);
      setCounterMonthly(0);
      setHideDonorName(null);

      setPaytabsCallback(false);
      setPaytabsUrl(undefined);
      setIsFirstLoad(false);
      setTransRef(undefined);
    };
    const handleChangeRecurring = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueRecurring((event.target as HTMLInputElement).value);
      setSendReceipt(null);
      if ((event.target as HTMLInputElement).value === 'recurring') {
        setFormEmailMessage({
          email: '',
          message: '',
        });
      }
    };
    const handleChangeSendReceipt = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSendReceipt((event.target as HTMLInputElement).value);
    };
    const handleChangeHideDonorName = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHideDonorName((event.target as HTMLInputElement).value);
    };
    const handleChangeAgreeTnc = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAgreeTnc((event.target as HTMLInputElement).checked);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmitNotRecurring = async (e: any) => {
      e.preventDefault();
      const findErrors = validate();

      if (Object.values(findErrors).some(err => err !== '')) {
        setErrorEmailMessage(findErrors);
      } else {
        try {
          const recurrence = valueRecurring ? true : false;
          setSubmitting(true);
          console.log({
            donateValue,
            ...formEmailMessage,
            recurrence: recurrence,
            credit_card: paymentMethods === 'credit-debit-card' ? true : false,
            other_method: paymentMethods === 'other-method' ? true : false,
            ...formPaymentCC,
            send_receipt: sendReceipt === 'send-receipt' ? true : false,
            hide_donor_name: hideDonorName === 'hide-donor-name' ? true : false,
          });
          const payload = {
            userId: '1234',
            campaignId: '1111114',
            campaignTitle: 'abc',
            amount: donateValue.toString(),
          };

          const response = await axios.post(path, payload);
          setPaytabsUrl(response.data.data.redirect_url);
          setTransRef(response.data.data.tran_ref);

          setSubmitting(false);
        } catch (errorEmailMessage) {
          console.log(errorEmailMessage);
          setSubmitting(false);
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmitRecurring = async (e: any) => {
      e.preventDefault();
      try {
        const recurrence = valueRecurring ? true : false;
        setSubmitting(true);
        console.log({
          donateValue,
          recurrence: recurrence,
          recurring_type: valueTabsRecurrences,
          amount_times: valueTabsRecurrences === 'weekly' ? counterWeekly : counterMonthly,
          support_campaign: supportCampaignEnds === 'support-campaign-ends' ? true : false,
          credit_card: paymentMethods === 'credit-debit-card' ? true : false,
          other_method: paymentMethods === 'other-method' ? true : false,
          ...formPaymentCC,
          send_receipt: sendReceipt === 'send-receipt' ? true : false,
        });
        const payload = {
          userId: '1234',
          campaignId: '1111114',
          campaignTitle: 'abc',
          amount: donateValue.toString(),
        };

        const response = await axios.post(path, payload);
        setPaytabsUrl(response.data.data.redirect_url);
        setTransRef(response.data.data.tran_ref);

        setSubmitting(false);
      } catch (errorEmailMessage) {
        console.log(errorEmailMessage);
        setSubmitting(false);
      }
    };

    const handleOpenQuickDonate = () => {
      console.log('handleOpenQuickDonate');
      setOpenQuickDonate(true);
    };

    return (
      <>
        <QuickDonate openState={openQuickDonate} close={setModalHide} />
        <ButtonQuickDonate>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="medium"
              color="info"
              startIcon={<Add />}
              onClick={() => setOpenQuickDonate(true)}
              sx={{ borderRadius: '20px 0 0 20px' }}
            >
              Quick Donate
            </Button>
          </Stack>
        </ButtonQuickDonate>
        {/* <motion.div variants={varWrapEnter}>
          <Dialog
            open={openPopup}
            maxWidth={!showForm ? 'xs' : 'lg'}
            onClose={handleClosePopup}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title" sx={{ textAlign: 'right' }}>
              <IconButton
                size="small"
                aria-label="close"
                onClick={handleClosePopup}
                sx={{
                  color: theme => theme.palette.grey[500],
                }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Collapse orientation="vertical" in={!nextStep}>
                <IllustrationImgStyle
                  src={`/static/illustrations/quick_donation.png`}
                  alt="SVG-Illustration"
                />
                <Typography
                  id="scroll-dialog-description"
                  variant="subtitle1"
                  sx={{ textAlign: 'center', mt: 3, mb: 1 }}
                >
                  Enter amount you want to donate
                </Typography>
                {!hideInputAmount && (
                  <CssTextField
                    appearance={appearance}
                    sx={{ width: '100%', fontSize: '50px', mt: 2 }}
                    fullWidth
                    type="number"
                    color="primary"
                    value={donateValue}
                    onKeyDown={e => {
                      const prevent = ['e', 'E', '+', '-', '.', ','];
                      prevent.includes(e.key) && e.preventDefault();
                    }}
                    onChange={e => {
                      if (e.target.value === '0') {
                        e.target.value = '';
                        setDisabled(true);
                      }
                      if (e.target.value === '') {
                        setDonateValue(0);
                        setDisabled(true);
                      } else {
                        setDonateValue(toInteger(e.target.value));
                        setDisabled(false);
                      }
                    }}
                    InputProps={{
                      inputProps: { min: 1 },
                      startAdornment: (
                        <InputAdornment position="start">{currencyCode ?? '$'}</InputAdornment>
                      ),
                    }}
                  />
                )}
                <Grid container alignItems="center" spacing={2} sx={{ mt: 1 }}>
                  {donationValues.map((amount, idx) => (
                    <Grid item xs={6} key={idx}>
                      <AmountButtonStyle
                        appearance={appearance}
                        variant="outlined"
                        sx={{
                          color: theme => theme.palette.grey[600],
                        }}
                        fullWidth
                        onClick={() => {
                          if (amount.code) setPriceCode(amount.code);
                          setDonateValue(amount.value);
                          setDisabled(false);
                        }}
                      >
                        {amount.title}
                      </AmountButtonStyle>
                    </Grid>
                  ))}
                </Grid>
                <ButtonStyle
                  appearance={appearance}
                  variant="contained"
                  onClick={async () => {
                    if (donateValue > 0) {
                      setNextStep(true);
                      if (currentUser?.id) {
                        if (donateAction) {
                          const data: any = {};
                          data.amount = donateValue.toString();
                          if (priceCode) data.code = priceCode;
                          donateAction(data);
                        }
                      } else {
                        setShowForm(true);
                      }
                    }
                  }}
                  fullWidth
                  disabled={disabled}
                  sx={{
                    mt: 2,
                  }}
                >
                  Donate{' '}
                  {`${
                    donationValues.find(x => x.value === donateValue)?.title ??
                    `${currencyCode ?? '$'}${donateValue}`
                  }`}
                </ButtonStyle>
              </Collapse>
              {isLoading && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: 400, height: 500 }}
                >
                  <CustomCircularProgress size={50} thickness={5} appearance={appearance} />
                </Box>
              )}
              {nextStep && showForm ? (
                <DonorForm
                  customAction={data => {
                    setShowForm(false);
                    if (donateAction) {
                      const obj: any = {};
                      obj.amount = donateValue.toString();
                      obj.donorId = data?._id;
                      if (priceCode) obj.code = priceCode;
                      donateAction(obj);
                    }
                  }}
                  paymentRequestObject={null}
                />
              ) : nextStep && !paytabsUrl && !paytabsCallback && !donateAction ? (
                <Collapse orientation="vertical" in={nextStep}>
                  <LabelTotalAmount>
                    <Typography variant="body2">Donation Ammount (Include Tax)</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: getAccentColor(appearance),
                        mb: 0,
                        fontSize: '20px',
                        fontWeight: 'bold',
                      }}
                    >{`$${donateValue}`}</Typography>
                  </LabelTotalAmount>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ my: 1 }}
                  >
                    <Grid item xs={6}>
                      <FormControl>
                        <RadioGroup
                          value={valueRecurring}
                          name="recurring"
                          onChange={handleChangeRecurring}
                        >
                          <FormControlLabel
                            value="recurring"
                            control={<RadioButtonStyle appearance={appearance} size="small" />}
                            label="Recurring"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      {valueRecurring !== 'recurring' && (
                        <FormControl>
                          <RadioGroup
                            value={sendReceipt}
                            name="send-receipt"
                            onChange={handleChangeSendReceipt}
                          >
                            <FormControlLabel
                              value="send-receipt"
                              control={<RadioButtonStyle appearance={appearance} size="small" />}
                              label="Send Receipt"
                            />
                          </RadioGroup>
                        </FormControl>
                      )}
                    </Grid>
                  </Grid>
                  <form autoComplete="off">
                    {valueRecurring !== 'recurring' ? (
                      <Stack spacing={3} sx={{ mt: 2 }}>
                        <CssTextField
                          appearance={appearance}
                          fullWidth
                          id="email"
                          type="email"
                          name="email"
                          size="small"
                          label={t('pages.login.email.placeholder')}
                          value={formEmailMessage.email}
                          onChange={handleChangeEmailMessage}
                          helperText={errorEmailMessage.email}
                          error={errorEmailMessage.email ? true : false}
                          disabled={isSubmitting}
                        />

                        <CssTextField
                          appearance={appearance}
                          fullWidth
                          id="message"
                          name="message"
                          multiline
                          rows={4}
                          label="Message"
                          size="small"
                          value={formEmailMessage.message}
                          onChange={handleChangeEmailMessage}
                          helperText={errorEmailMessage.message}
                          error={errorEmailMessage.message ? true : false}
                          disabled={isSubmitting}
                        />

                        <FormControl>
                          <RadioGroup
                            value={hideDonorName}
                            name="hide-donor-name"
                            onChange={handleChangeHideDonorName}
                          >
                            <FormControlLabel
                              value="hide-donor-name"
                              control={<RadioButtonStyle appearance={appearance} size="small" />}
                              label="Hide donor name"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Stack>
                    ) : (
                      <Stack spacing={3}>
                        <WrapperForm>
                          <Box sx={{ width: '100%' }}>
                            <TabContext value={valueTabsRecurrences}>
                              <TabList
                                TabIndicatorProps={{
                                  style: {
                                    backgroundColor: getAccentColor(appearance),
                                  },
                                }}
                                onChange={handleChangeTabsRecurrences}
                                aria-label="lab API tabs recurrences"
                                sx={{ mb: 3 }}
                              >
                                <Tab value="weekly" label="Weekly" />
                                <Tab value="monthly" label="Monthly" />
                              </TabList>
                              <TabPanel value="weekly">
                                <ButtonGroup variant="outlined" fullWidth>
                                  <AmountButtonStyle
                                    appearance={appearance}
                                    onClick={e => decrementCounter(e, valueTabsRecurrences)}
                                  >
                                    <Remove fontSize="small" />
                                  </AmountButtonStyle>
                                  <Button disabled>{counterWeekly}</Button>
                                  <AmountButtonStyle
                                    appearance={appearance}
                                    onClick={e => incrementCounter(e, valueTabsRecurrences)}
                                  >
                                    <Add fontSize="small" />
                                  </AmountButtonStyle>
                                </ButtonGroup>
                              </TabPanel>
                              <TabPanel value="monthly">
                                <ButtonGroup variant="outlined" fullWidth>
                                  <AmountButtonStyle
                                    appearance={appearance}
                                    onClick={e => decrementCounter(e, valueTabsRecurrences)}
                                  >
                                    <Remove fontSize="small" />
                                  </AmountButtonStyle>
                                  <Button disabled>{counterMonthly}</Button>
                                  <AmountButtonStyle
                                    appearance={appearance}
                                    onClick={e => incrementCounter(e, valueTabsRecurrences)}
                                  >
                                    <Add fontSize="small" />
                                  </AmountButtonStyle>
                                </ButtonGroup>
                              </TabPanel>
                            </TabContext>
                          </Box>
                          <FormControl>
                            <RadioGroup
                              value={supportCampaignEnds}
                              name="support-campaign-ends"
                              onChange={handleChangeSupportCampaign}
                              sx={{ mt: 2 }}
                            >
                              <FormControlLabel
                                value="support-campaign-ends"
                                control={<RadioButtonStyle appearance={appearance} size="small" />}
                                label="Support even the campaign ends"
                              />
                            </RadioGroup>
                          </FormControl>
                        </WrapperForm>
                      </Stack>
                    )}
                    <Stack spacing={2} sx={{ mt: 3 }}>
                      <Typography variant="subtitle2">Payment Method</Typography>
                      <FormControl>
                        <RadioGroup
                          value={paymentMethods}
                          name="payment-methods"
                          onChange={handleChangePaymentMethods}
                        >
                          <WrapperForm sx={{ mb: 2 }}>
                            <WrapperFormPaymentTitle>
                              <FormControlLabel
                                value="credit-debit-card"
                                control={<RadioButtonStyle appearance={appearance} size="small" />}
                                label="Credit / Debit Card"
                              />
                              <IllustrationPayment
                                src={`/static/cc_icon.png`}
                                alt="CC-Illustration"
                              />
                            </WrapperFormPaymentTitle>
                            {paymentMethods === 'credit-debit-card' && (
                              <Stack spacing={2} sx={{ my: 2 }}>
                                <CssTextField
                                  appearance={appearance}
                                  fullWidth
                                  id="name_holder"
                                  type="text"
                                  name="name_holder"
                                  size="small"
                                  label="Name Holder"
                                  onChange={e => {
                                    setFormPaymentCC({
                                      ...formPaymentCC,
                                      name_holder: e.target.value,
                                    });
                                  }}
                                />
                                <CssTextField
                                  appearance={appearance}
                                  fullWidth
                                  id="card_number"
                                  type="number"
                                  name="card_number"
                                  size="small"
                                  label="Card Number"
                                  onKeyDown={e => {
                                    const prevent = ['e', 'E', '+', '-', '.', ','];
                                    prevent.includes(e.key) && e.preventDefault();
                                  }}
                                  onChange={e => {
                                    if (e.target.value === '0') {
                                      e.target.value = '';
                                      setFormPaymentCC({
                                        ...formPaymentCC,
                                        card_number: null,
                                      });
                                    }
                                    if (e.target.value === '') {
                                      setFormPaymentCC({
                                        ...formPaymentCC,
                                        card_number: null,
                                      });
                                    } else {
                                      setFormPaymentCC({
                                        ...formPaymentCC,
                                        card_number: toInteger(e.target.value),
                                      });
                                    }
                                  }}
                                  onInput={e => {
                                    (e.target as HTMLInputElement).value = Math.max(
                                      0,
                                      parseInt((e.target as HTMLInputElement).value),
                                    )
                                      .toString()
                                      .slice(0, 16);
                                  }}
                                />
                                <Grid container justifyContent="center" alignItems="flex-start">
                                  <Grid item xs={12} sm={6}>
                                    <CssTextField
                                      appearance={appearance}
                                      id="cvv"
                                      type="number"
                                      name="cvv"
                                      size="small"
                                      label="CVV"
                                      onKeyDown={e => {
                                        const prevent = ['e', 'E', '+', '-', '.', ','];
                                        prevent.includes(e.key) && e.preventDefault();
                                      }}
                                      onChange={e => {
                                        if (e.target.value === '0') {
                                          e.target.value = '';
                                          setFormPaymentCC({
                                            ...formPaymentCC,
                                            cvv: null,
                                          });
                                        }
                                        if (e.target.value === '') {
                                          setFormPaymentCC({
                                            ...formPaymentCC,
                                            cvv: null,
                                          });
                                        } else {
                                          setFormPaymentCC({
                                            ...formPaymentCC,
                                            cvv: toInteger(e.target.value),
                                          });
                                        }
                                      }}
                                      onInput={e => {
                                        (e.target as HTMLInputElement).value = Math.max(
                                          0,
                                          parseInt((e.target as HTMLInputElement).value),
                                        )
                                          .toString()
                                          .slice(0, 3);
                                      }}
                                      InputProps={{
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <Tooltip
                                              title="Information"
                                              TransitionComponent={Zoom}
                                              placement="top"
                                            >
                                              <Info fontSize="small" color="disabled" />
                                            </Tooltip>
                                          </InputAdornment>
                                        ),
                                      }}
                                      helperText="Security Token CVV"
                                      sx={{ mr: 1 }}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <Grid container>
                                      <Grid item xs={6}>
                                        <CssTextField
                                          appearance={appearance}
                                          fullWidth
                                          id="month"
                                          type="number"
                                          name="month"
                                          size="small"
                                          label="MM"
                                          onKeyDown={e => {
                                            const prevent = ['e', 'E', '+', '-', '.', ','];
                                            prevent.includes(e.key) && e.preventDefault();
                                          }}
                                          onChange={e => {
                                            if (e.target.value === '0') {
                                              e.target.value = '';
                                              setFormPaymentCC({
                                                ...formPaymentCC,
                                                month: null,
                                              });
                                            }
                                            if (e.target.value === '') {
                                              setFormPaymentCC({
                                                ...formPaymentCC,
                                                month: null,
                                              });
                                            } else {
                                              setFormPaymentCC({
                                                ...formPaymentCC,
                                                month: toInteger(e.target.value),
                                              });
                                            }
                                          }}
                                          onInput={e => {
                                            (e.target as HTMLInputElement).value = Math.max(
                                              0,
                                              parseInt((e.target as HTMLInputElement).value),
                                            )
                                              .toString()
                                              .slice(0, 2);
                                          }}
                                          sx={{
                                            '& .MuiOutlinedInput-root': {
                                              '& fieldset': {
                                                borderRadius: `8px 0 0 8px`,
                                              },
                                            },
                                          }}
                                          InputProps={{
                                            inputProps: { min: 0, max: 12 },
                                          }}
                                        />
                                      </Grid>
                                      <Grid item xs={6}>
                                        <CssTextField
                                          appearance={appearance}
                                          fullWidth
                                          id="year"
                                          type="number"
                                          name="year"
                                          size="small"
                                          label="YY"
                                          onKeyDown={e => {
                                            const prevent = ['e', 'E', '+', '-', '.', ','];
                                            prevent.includes(e.key) && e.preventDefault();
                                          }}
                                          onChange={e => {
                                            if (e.target.value === '0') {
                                              e.target.value = '';
                                              setFormPaymentCC({
                                                ...formPaymentCC,
                                                year: null,
                                              });
                                            }
                                            if (e.target.value === '') {
                                              setFormPaymentCC({
                                                ...formPaymentCC,
                                                year: null,
                                              });
                                            } else {
                                              setFormPaymentCC({
                                                ...formPaymentCC,
                                                year: toInteger(e.target.value),
                                              });
                                            }
                                          }}
                                          onInput={e => {
                                            (e.target as HTMLInputElement).value = Math.max(
                                              0,
                                              parseInt((e.target as HTMLInputElement).value),
                                            )
                                              .toString()
                                              .slice(0, 2);
                                          }}
                                          InputProps={{
                                            inputProps: { min: 0 },
                                          }}
                                          sx={{
                                            '& .MuiOutlinedInput-root': {
                                              '& fieldset': {
                                                borderRadius: `0 8px 8px 0`,
                                              },
                                            },
                                          }}
                                        />
                                      </Grid>
                                    </Grid>
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        color: '#637381',
                                        lineHeight: '1.5',
                                        fontSize: '0.75rem',
                                        fontFamily: 'Almarai,sans-serif',
                                        fontWeight: '400',
                                        textAlign: 'left',
                                        marginRight: '14px',
                                        marginBottom: 0,
                                        marginLeft: '14px',
                                        marginTop: '8px',
                                      }}
                                    >
                                      Expiration Date
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Stack>
                            )}
                          </WrapperForm>
                          <WrapperForm>
                            <FormControlLabel
                              value="other-method"
                              control={<RadioButtonStyle appearance={appearance} size="small" />}
                              label="Other Method"
                            />
                            {paymentMethods === 'other-method' && (
                              <Stack spacing={2} sx={{ my: 1 }}>
                                <Typography variant="caption" sx={{ color: '#637381' }}>
                                  Under Construction
                                </Typography>
                              </Stack>
                            )}
                          </WrapperForm>
                        </RadioGroup>
                      </FormControl>
                    </Stack>
                    <FormGroup sx={{ mt: 3 }}>
                      <FormControlLabel
                        control={
                          <CheckboxStyle
                            appearance={appearance}
                            checked={agreeTnc}
                            onChange={handleChangeAgreeTnc}
                          />
                        }
                        label="Agree terms of services"
                      />
                    </FormGroup>
                    {valueRecurring !== 'recurring' ? (
                      <ButtonStyle
                        appearance={appearance}
                        fullWidth
                        size="large"
                        variant="contained"
                        disabled={isSubmitting || !agreeTnc}
                        sx={{
                          mt: 2,
                        }}
                        onClick={handleSubmitNotRecurring}
                      >
                        Donate
                      </ButtonStyle>
                    ) : (
                      <ButtonStyle
                        appearance={appearance}
                        fullWidth
                        size="large"
                        variant="contained"
                        disabled={isSubmitting || !agreeTnc}
                        sx={{
                          mt: 2,
                        }}
                        onClick={handleSubmitRecurring}
                      >
                        Donate
                      </ButtonStyle>
                    )}
                  </form>
                </Collapse>
              ) : !!paytabsUrl && nextStep ? (
                <Stack>
                  <iframe
                    data-cy="iframe-paytabs"
                    frameBorder="0"
                    width="400px"
                    height="500px"
                    src={paytabsUrl}
                    sandbox="allow-forms allow-scripts"
                    onLoad={() => {
                      if (!isFirstLoad) return setIsFirstLoad(true);
                      if (isFirstLoad) {
                        setIsFirstLoad(false);
                        setPaytabsUrl(undefined);
                        setPaytabsCallback(true);
                      }
                    }}
                  />
                </Stack>
              ) : (
                paytabsCallback &&
                nextStep && (
                  <MotionContainer initial="initial" open>
                    <Stack
                      spacing={3}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ textAlign: 'center', mb: 4 }}
                    >
                      <motion.div variants={varBounceIn}>
                        <Box
                          sx={{
                            color: 'primary.main',
                            bgcolor: 'rgba(200, 250, 205, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '100%',
                            maxWidth: '100px',
                            mx: 'auto',
                            p: 0.5,
                          }}
                        >
                          <Box
                            component={Icon}
                            icon="eva:checkmark-outline"
                            width={50}
                            height={50}
                            sx={{ color: 'primary.main' }}
                          />
                        </Box>
                      </motion.div>
                      <motion.div variants={varBounceIn}>
                        <Typography
                          variant="h5"
                          component="p"
                          sx={{ fontWeight: 'bold', mt: 0, fontStyle: 'italic' }}
                        >
                          Thank you for your donation!
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          sx={{ mt: 0, color: 'text.secondary', fontStyle: 'italic' }}
                        >
                          ID transaction: {!!transRef && transRef}
                        </Typography>
                      </motion.div>
                      <motion.div variants={varBounceIn}>
                        <ButtonStyle
                          appearance={appearance}
                          fullWidth
                          variant="contained"
                          onClick={handleClosePopup}
                        >
                          Go to Home
                        </ButtonStyle>
                      </motion.div>
                    </Stack>
                  </MotionContainer>
                )
              )}
            </DialogContent>
          </Dialog>
        </motion.div> */}
      </>
    );
  },
);

export default CheckoutQuickDonate;
