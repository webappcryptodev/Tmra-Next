import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Steps from './Steps';
import Button from '@mui/material/Button';
import useSelect from './hooks/useSelect';
import { useTranslation } from 'next-i18next';

const lngs: any = {
  en: { nativeName: 'English' },
  ar: { nativeName: 'Arabic' },
};

const Donation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(0);
  const [name, setName] = React.useState('');
  const [beneficiary, setBeneficiary] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [giftType, setGiftType] = React.useState('');
  const {
    FormSelect: Country,
    state: country,
    setState: setCountry,
  } = useSelect(
    '',
    [{ name: 'country 1' }, { name: 'country 2' }, { name: 'country 3' }],
    t('gift.country'),
    '100%',
  );
  const {
    FormSelect: Area,
    state: area,
    setState: setArea,
  } = useSelect(
    '',
    [{ name: 'city 1' }, { name: 'city 2' }, { name: 'city 3' }],
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
  } = useSelect('', [{ name: '+12' }, { name: '+444' }, { name: '+234' }], '', '30%');
  const steps = [{ name: t('gift.step1') }, { name: t('gift.step2') }, { name: t('gift.step3') }];
  return (
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
      <Box sx={{ mt: 2, mb: 3, display: 'flex' }}>
        {Object.keys(lngs).map(lng => (
          <Button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default Donation;
