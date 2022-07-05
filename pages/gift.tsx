import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import StepOne from 'src/components/_external-pages/gift/StepOne';
import StepTwo from 'src/components/_external-pages/gift/StepTwo';
import StepThree from 'src/components/_external-pages/gift/StepThree';
import Steps from 'src/components/_external-pages/gift/Steps';
import useSelect from 'src/components/_external-pages/gift/hooks/useSelect';
import { useTranslation } from 'next-i18next';
import MainLayout from '@layouts/main';
import Page from '@components/Page';
import { styled } from '@mui/system';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import data from 'src/components/_external-pages/gift/phone_prefix.json';

const lngs: any = {
  en: { nativeName: 'English' },
  ar: { nativeName: 'Arabic' },
};
const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));
const Donation: React.FC = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [name, setName] = React.useState('');
  const [beneficiary, setBeneficiary] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [giftType, setGiftType] = React.useState('');
  const countryName = data.countries.map(data => ({ name: data.name }));
  const countryPhone = data.countries.map(data => ({
    name: data.name + ' ' + data.code,
    value: data.code,
  }));
  const {
    FormSelect: Country,
    state: country,
    setState: setCountry,
  } = useSelect('', countryName, t('gift.country'), '100%');
  const {
    FormSelect: Area,
    state: area,
    setState: setArea,
  } = useSelect(
    '',
    [{ name: 'Food Collection' }, { name: 'Sharing' }, { name: 'Money Transfer' }],
    t('gift.donationArea'),
    '100%',
  );
  const {
    FormSelect: Template,
    state: template,
    setState: setTemplate,
  } = useSelect(
    '',
    [{ name: 'Template 1' }, { name: 'Template 2' }, { name: 'Template 3' }],
    t('gift.template'),
    '100%',
  );
  const {
    FormSelect: Amount,
    state: amount,
    setState: setAmount,
  } = useSelect('', [{ name: '10' }, { name: '50' }, { name: '100' }], t('gift.amount'), '47%');
  const {
    FormSelect: Currency,
    state: currency,
    setState: setCurrency,
  } = useSelect(
    '',
    [
      { name: 'EUR', fullName: 'Euro', symbol: '€' },
      { name: 'USD', fullName: 'US Dollars', symbol: '$' },
    ],
    t('gift.currency'),
    '47%',
  );
  const {
    FormSelect: NumberPrefix,
    state: numberPrefix,
    setState: setNumberPrefix,
  } = useSelect('', countryPhone, '', '30%');
  const steps = [{ name: t('gift.step1') }, { name: t('gift.step2') }, { name: t('gift.step3') }];
  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`${t('menu.gift')} | ${t('app.name')}`}>
        <Container maxWidth="lg">
          <Steps step={step} title={steps} />
          <Box sx={{ my: 5 }}>
            {step === 0 && <StepOne setGiftType={setGiftType} setStep={setStep} />}
            {step === 1 && (
              <StepTwo
                Area={Area}
                area={area}
                Country={Country}
                country={country}
                Template={Template}
                template={template}
                Amount={Amount}
                amount={amount}
                Currency={Currency}
                currency={currency}
                NumberPrefix={NumberPrefix}
                numberPrefix={numberPrefix}
                setCountry={setCountry}
                setArea={setArea}
                setTemplate={setTemplate}
                setAmount={setAmount}
                setCurrency={setCurrency}
                setNumberPrefix={setNumberPrefix}
                setStep={setStep}
                beneficiary={beneficiary}
                name={name}
                phoneNumber={phoneNumber}
                setName={setName}
                setBeneficiary={setBeneficiary}
                setPhoneNumber={setPhoneNumber}
                giftType={giftType}
              />
            )}
            {step === 2 && (
              <StepThree
                giftType={giftType}
                area={area}
                name={name}
                beneficiary={beneficiary}
                number={numberPrefix + phoneNumber}
                template={template}
              />
            )}
          </Box>
        </Container>
      </RootStyle>
    </MainLayout>
  );
};

export default Donation;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
