import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import { FormControl, Grid, InputAdornment, InputLabel, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createPaymentLink } from '../common/payment';

// import MobilePhone from './mobilePhoneNumber';

export const DInput = styled('input')((props: any) => ({
  width: props.width,
  height: '54px',
  textAlign: 'center',
  borderRadius: '50px',
  border: '1px solid #dce0e4',
  '::placeholder': props.placeholder,
  ':focus': {
    border: '1px solid #dce0e4',
  },

  fontSize: props.fontSize,
  fontFamily: 'Urbanist',
  fontWeight: 600,
}));

export const CurrencyInput = styled(TextField)`
  width: 309px;
  div {
    border-radius: 50px;
  }
  input {
    text-align: center;
    font-family: Urbanist;
    font-weight: 600;
  }
  input::placeholder {
    text-align: center;
    font-family: Urbanist;
    font-weight: 600;
  }
`;

const CurrencySelect = styled(Select)`
  fieldset {
    border: 0px !important;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export const DonateBtn = styled(IconButton)`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  background-color: #5c68ea !important;
  border-radius: 30px !important;
  &:hover: {
    background-color: '#363d8b !important';
  }
`;

export const CancelBtn = styled(IconButton)`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #5c68ea;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  border: 2px solid #5c68ea;
  margin-top: 10px;
  border-radius: 30px;
`;

export default function AtonementDonate(props) {
  // const donationContext = useContext(DonationContext);

  const [value, setValue] = useState('1');
  const [amount, setAmount] = useState(50);
  const [email, setEmail] = useState('');
  const [period, setPeriod] = useState('Once');
  const [progress, setProgress] = useState(30);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [donationPurpose, setDonationPurpose] = useState('');

  useEffect(() => {}, []);

  const handlePeriodChange = newValue => {
    setValue(newValue);
    if (newValue == 1) {
      setPeriod('Once');
    } else {
      setPeriod('Daily');
    }
  };

  const saveStep1DonateInfo = (giftState: boolean) => {
    const data = [
      {
        amount: amount,
        period: period,
        email: email,
        currency: selectedCurrency,
        purpose: donationPurpose,
      },
    ];
    if (validate(data[0])) {
      // createPaymentLink();
      props.saveChildStep1DonateInfo(data);
      props.nextStepDonate(giftState);
    }
  };

  const validate = (values: any) => {
    console.log('validate', values);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      window.alert('Please input email');
      return false;
    } else if (!regex.test(values.email)) {
      window.alert('Please input valid email');
      return false;
    }
    if (!values.purpose) {
      window.alert('Please input donation purpose');
      return false;
    }
    return true;
  };

  const handlePurposeOfDonation = (event: SelectChangeEvent) => {
    setDonationPurpose(event.target.value);
  };

  const donateTypes = [
    {
      id: 1,
      type: 'Today is my firend birthday',
    },
    {
      id: 2,
      type: "My mother's borthday",
    },
  ];

  const donateAmounts: any = [
    {
      id: 1,
      amount: 50,
    },
    {
      id: 2,
      amount: 100,
    },
    {
      id: 3,
      amount: 200,
    },
    {
      id: 4,
      amount: 500,
    },
  ];
  const donatePeriods: any = [
    {
      id: 1,
      period: 'Daily',
    },
    {
      id: 2,
      period: 'Weekly',
    },
    {
      id: 3,
      period: 'Monthly',
    },
  ];

  return (
    <Grid>
      <Grid
        sx={{
          mt: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontFamily="Urbanist" fontSize="12px" fontWeight="600,Semi Bold">
          $4200 / $16000
        </Typography>
        <Typography fontFamily="Urbanist" fontSize="12px" fontWeight="600,Semi Bold">
          {progress}%
        </Typography>
      </Grid>
      <Slider
        defaultValue={progress}
        value={progress}
        aria-label="Default"
        valueLabelDisplay="auto"
        size="medium"
        sx={{
          color: '#5C68EA',
        }}
      />
      <Grid>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '115%',
            color: '#2C2C30',
          }}
        >
          Regularity of payment
        </Typography>
        <Box
          sx={{
            width: '100%',
            mt: 1.5,
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderRadius: '30px',
                background: '#F4F4F9',
                display: 'flex',
                justifyContent: 'center',
                width: '300px',
              }}
            >
              <Button
                sx={{
                  backgroundColor: `${value == '1' ? '#5C68EA !important' : '#F4F4F9 !important'}`,
                  color: `${value == '2' ? '#B0B0C5' : 'white'}`,
                  transitionDuration: '0.5s',
                  width: '50%',
                  borderRadius: '20px',
                  height: '36px',
                }}
                onClick={() => handlePeriodChange('1')}
              >
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '115%',
                  }}
                >
                  One time
                </Typography>
              </Button>
              <Button
                sx={{
                  backgroundColor: `${value == '2' ? '#5C68EA !important' : '#F4F4F9 !important'}`,
                  color: `${value == '1' ? '#B0B0C5' : 'white'}`,
                  transitionDuration: '0.5s',
                  width: '50%',
                  borderRadius: '20px',
                  height: '36px',
                }}
                onClick={() => handlePeriodChange('2')}
              >
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '115%',
                  }}
                >
                  Recuring
                </Typography>
              </Button>
            </Box>
            <TabPanel
              value="1"
              sx={{
                width: '300px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '115%',
                  color: '#2C2C30',
                  mt: 2.9,
                  mb: 1.5,
                }}
              >
                Amount to donate
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <CurrencyInput
                  value={amount}
                  onChange={(event: any) => setAmount(event.target.value)}
                  label="Enter your amount"
                  sx={{
                    position: 'absolute',
                  }}
                  required
                />
                <CurrencySelect
                  labelId="enter-amount"
                  id="demo-simple-select-autowidth"
                  value={selectedCurrency}
                  onChange={(e: any) => setSelectedCurrency(e.target.value)}
                  autoWidth
                  sx={{
                    border: '0 !important',
                    mr: 1,
                  }}
                >
                  <MenuItem value="USD">
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: '600',
                        lineHeight: '115%',
                        color: '#2C2C30',
                      }}
                    >
                      USD
                    </Typography>
                  </MenuItem>
                  <MenuItem value="EUR">
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: '600',
                        lineHeight: '115%',
                        color: '#2C2C30',
                      }}
                    >
                      EUR
                    </Typography>
                  </MenuItem>
                  <MenuItem value="SAR">
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: '600',
                        lineHeight: '115%',
                        color: '#2C2C30',
                      }}
                    >
                      SAR
                    </Typography>
                  </MenuItem>
                </CurrencySelect>
              </Box>
              <Box mt={1.3} display="flex" justifyContent="space-between">
                {donateAmounts.map(amountData => {
                  return (
                    <Button
                      key={amountData.id}
                      style={{
                        width: '22%',
                        border: '1px solid',
                        borderColor: `${amount == amountData.amount ? '#5C68EA' : '#F4F4F9'}`,
                        color: '#5C68EA',
                        borderRadius: '20px',
                      }}
                      onClick={() => setAmount(amountData.amount)}
                    >
                      ${amountData.amount}
                    </Button>
                  );
                })}
              </Box>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '115%',
                  color: '#2C2C30',
                  mt: 2.9,
                  mb: 0.5,
                }}
              >
                Email
              </Typography>
              <DInput
                type="email"
                fontSize="12px"
                sx={{
                  mt: 1.25,
                }}
                width="309px"
                id="email"
                placeholder="Enter your Email"
                onChange={(e: any) => setEmail(e.target.value)}
                required
              />
              <FormControl fullWidth>
                <InputLabel sx={{ mt: 1.8, ml: 1.25 }}>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: '600',
                      lineHeight: '115%',
                      color: '#b0b9c2',
                    }}
                  >
                    Choose the purpose of donation
                  </Typography>
                </InputLabel>
                <Select
                  labelId="purpose"
                  label="Choose the purpose of donation"
                  fullWidth
                  sx={{
                    marginTop: '10px',
                    borderRadius: '50px',
                  }}
                  id="amount"
                  onChange={handlePurposeOfDonation}
                  required
                >
                  {donateTypes.map(donate => {
                    return (
                      <MenuItem key={donate.id} value={donate.type} sx={{ textAlign: 'center' }}>
                        <Typography
                          sx={{
                            fontSize: '12px',
                            fontWeight: '600',
                            lineHeight: '115%',
                            color: '#2C2C30',
                            mt: 0.8,
                          }}
                        >
                          {donate.type}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </TabPanel>
            <TabPanel value="2" sx={{ width: '300px' }}>
              <Box display="flex" justifyContent="space-between" marginTop="10px">
                {donatePeriods.map(periodData => {
                  return (
                    <Button
                      key={periodData.id}
                      style={{
                        width: '30%',
                        border: '1px solid',
                        borderColor: `${periodData.period == period ? '#5C68EA' : '#F4F4F9'}`,
                        color: '#5C68EA',
                        borderRadius: '20px',
                      }}
                      onClick={() => setPeriod(periodData.period)}
                    >
                      {periodData.period}
                    </Button>
                  );
                })}
              </Box>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '115%',
                  color: '#2C2C30',
                  mt: 2.9,
                  mb: 0.5,
                }}
              >
                Email
              </Typography>
              <DInput
                startAt="20px"
                type="email"
                sx={{
                  mt: 1.25,
                }}
                width="309px"
                id="amount"
                label="Enter your email"
                onChange={(e: any) => setEmail(e.target.value)}
                required
              />
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '115%',
                  color: '#2C2C30',
                  mt: 2.9,
                  mb: 0.5,
                }}
              >
                Amount to donate
              </Typography>
              <Box display="flex" justifyContent="space-between" mb={1.5}>
                {donateAmounts.map(amountData => {
                  return (
                    <Button
                      key={amountData.id}
                      style={{
                        width: '22%',
                        border: '1px solid',
                        borderColor: `${amount == amountData.amount ? '#5C68EA' : '#F4F4F9'}`,
                        color: '#5C68EA',
                        borderRadius: '20px',
                      }}
                      onClick={() => setAmount(amountData.amount)}
                    >
                      ${amountData.amount}
                    </Button>
                  );
                })}
              </Box>
              <Box sx={{ position: 'relative' }}>
                <CurrencyInput
                  value={amount}
                  onChange={(event: any) => setAmount(event.target.value)}
                  label="Enter your amount"
                  sx={{
                    position: 'absolute',
                  }}
                  required
                />
                <CurrencySelect
                  labelId="enter-amount"
                  id="demo-simple-select-autowidth"
                  value={selectedCurrency}
                  onChange={(e: any) => setSelectedCurrency(e.target.value)}
                  autoWidth
                  sx={{
                    border: '0 !important',
                    mr: 1,
                  }}
                  required
                >
                  <MenuItem value="USD">
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: '600',
                        lineHeight: '115%',
                        color: '#2C2C30',
                      }}
                    >
                      USD
                    </Typography>
                  </MenuItem>
                  <MenuItem value="EUR">
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: '600',
                        lineHeight: '115%',
                        color: '#2C2C30',
                      }}
                    >
                      EUR
                    </Typography>
                  </MenuItem>
                  <MenuItem value="SAR">
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: '600',
                        lineHeight: '115%',
                        color: '#2C2C30',
                      }}
                    >
                      SAR
                    </Typography>
                  </MenuItem>
                </CurrencySelect>
              </Box>
              <FormControl fullWidth>
                <InputLabel sx={{ mt: 1.8, ml: 1.25 }}>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: '600',
                      lineHeight: '115%',
                      color: '#b0b9c2',
                    }}
                  >
                    Choose the purpose of donation
                  </Typography>
                </InputLabel>
                <Select
                  labelId="purpose"
                  label="Choose the purpose of donation"
                  fullWidth
                  sx={{
                    marginTop: '10px',
                    borderRadius: '50px',
                  }}
                  id="amount"
                  onChange={handlePurposeOfDonation}
                  required
                >
                  {donateTypes.map(donate => {
                    return (
                      <MenuItem key={donate.id} value={donate.type} sx={{ textAlign: 'center' }}>
                        <Typography
                          sx={{
                            fontSize: '12px',
                            fontWeight: '600',
                            lineHeight: '115%',
                            color: '#2C2C30',
                            mt: 0.8,
                          }}
                        >
                          {donate.type}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </TabPanel>
          </TabContext>
          <DonateBtn
            onClick={() => saveStep1DonateInfo(false)}
            sx={{ marginTop: '18px', fontSize: '14px' }}
          >
            {period != 'Once' && (
              <img style={{ marginRight: '10px' }} src="/assets/donate/donateIcon.png" />
            )}
            Just Donate
          </DonateBtn>
          {period == 'Once' && (
            <DonateBtn
              onClick={() => {
                saveStep1DonateInfo(true);
              }}
              sx={{ marginTop: '8px', fontSize: '14px' }}
            >
              {/* <img src="/assets/donate/donateIcon.png" /> */}
              Send as Gift
            </DonateBtn>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
