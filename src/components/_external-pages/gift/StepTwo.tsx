import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import parents from './images/undraw_wedding_t-1-yl.svg';
import healing from './images/undraw_medicine_b-1-ol.svg';
import graduation from './images/undraw_education_f8ru.svg';
import TemplateConfig from './data';
import { useTranslation } from 'next-i18next';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
}));

interface Props {
  Country: React.FC<{}>;
  Area: React.FC<{}>;
  Template: React.FC<{}>;
  Currency: React.FC<{}>;
  Amount: React.FC<{}>;
  NumberPrefix: React.FC<{}>;
  country: string;
  area: string;
  template: string;
  currency: string;
  amount: string;
  numberPrefix: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  setTemplate: React.Dispatch<React.SetStateAction<string>>;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  setNumberPrefix: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  beneficiary: string;
  phoneNumber: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setBeneficiary: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  giftType: string;
}

const StepTwo: React.FC<Props> = ({
  Country,
  Area,
  Template,
  Currency,
  Amount,
  NumberPrefix,
  country,
  area,
  template,
  currency,
  amount,
  numberPrefix,
  setCountry,
  setArea,
  setTemplate,
  setCurrency,
  setAmount,
  setNumberPrefix,
  setStep,
  name,
  beneficiary,
  phoneNumber,
  setName,
  setBeneficiary,
  setPhoneNumber,
  giftType,
}) => {
  const { t } = useTranslation();
  const tempConfig = TemplateConfig[Number(template[template.length - 1]) - 1];
  const [error, setError] = useState('');
  const matches = useMediaQuery('(max-width: 900px)');
  const resetForm = () => {
    setError('');
    setArea('');
    setCountry('');
    setName('');
    setTemplate('');
    setBeneficiary('');
    setNumberPrefix('');
    setPhoneNumber('');
    setAmount('');
    setCurrency('');
  };
  return (
    <Grid sx={{ mt: 3 }} container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
          onSubmit={(e: any) => {
            if (e) {
              e.preventDefault();
            }
            const reg = new RegExp('^[0-9]+$');
            if (
              !area ||
              !name ||
              !country ||
              !template ||
              !beneficiary ||
              !currency ||
              !amount ||
              !numberPrefix ||
              !reg.test(phoneNumber)
            ) {
              setError(t('gift.error'));
              return;
            }
            setError('');
            setStep(2);
          }}
        >
          <TextField
            disabled
            id="outlined-disabled"
            label={t('gift.gift')}
            defaultValue={giftType}
          />
          <Area />
          <Template />
          {template && (
            <Box sx={{ mt: 2, display: matches ? 'block' : 'none' }}>
              <Item
                sx={{
                  fontSize: tempConfig.fontSize,
                  fontStyle: tempConfig.fontStyle,
                  color: tempConfig.color,
                }}
              >
                {template}
              </Item>
              <Card sx={{ mt: 2 }} variant="outlined">
                <CardMedia
                  src={
                    template === 'Template 1'
                      ? parents.src
                      : template === 'Template 2'
                      ? graduation.src
                      : healing.src
                  }
                  height="300px"
                  width="100% "
                  component="img"
                />
              </Card>
            </Box>
          )}
          <Box sx={{ position: 'relative', mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Amount />
              <Currency />
            </Box>
          </Box>
          <TextField
            id="outlined-basic"
            label={t('gift.yourname')}
            variant="outlined"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            id="outlined-basic"
            label={t('gift.beneficiaryname')}
            variant="outlined"
            name="beneficiary"
            value={beneficiary}
            onChange={e => setBeneficiary(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Country />
          <Box sx={{ position: 'relative', mt: 2 }}>
            <InputLabel id="demo-simple-select-label">{t('gift.beneficiarynumber')}</InputLabel>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <NumberPrefix />
              <TextField
                id="outlined-basic"
                label={t('gift.inputnumber')}
                variant="outlined"
                name="phonenumber"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                sx={{ width: '65%', mt: 2 }}
              />
            </Box>
          </Box>
          <Typography sx={{ mt: 2, color: 'red' }}>{error}</Typography>
          <FormGroup sx={{ mt: 2 }}>
            <FormControlLabel control={<Checkbox />} label={t('gift.copysms')} />
          </FormGroup>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              onClick={() => {
                resetForm();
                setStep(0);
              }}
              variant="contained"
              sx={{ mt: 2, py: 2 }}
            >
              {t('gift.previous')}
            </Button>
            <Button type="submit" variant="contained" sx={{ ml: 3, mt: 2, py: 2 }}>
              {t('gift.next')}
            </Button>
          </Box>
        </Box>
      </Grid>
      {template && (
        <Grid sx={{ display: matches ? 'none' : 'block' }} item xs={12} md={6}>
          <Item
            sx={{
              fontSize: tempConfig.fontSize,
              fontStyle: tempConfig.fontStyle,
              color: tempConfig.color,
            }}
          >
            {template}
          </Item>
          <Card sx={{ mt: 2 }} variant="outlined">
            <CardMedia
              src={
                template === 'Template 1'
                  ? parents.src
                  : template === 'Template 2'
                  ? graduation.src
                  : healing.src
              }
              height="300px"
              width="100% "
              component="img"
            />
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default StepTwo;
