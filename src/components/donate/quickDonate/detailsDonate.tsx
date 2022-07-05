import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { CancelBtn, DInput, DonateBtn } from './atonementDonate';

const giftList: any = [
  {
    id: 1,
    name: 'Flowers',
  },
  {
    id: 2,
    name: 'Lamp',
  },
  {
    id: 3,
    name: 'Ring',
  },
];

export default function DetailsDonate(props) {
  const [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);
  const [stepProcess, setStepProcess] = useState(1);
  const [val, setVal] = useState({});
  const [donationArea, setDonationArea] = useState('Saudi Arabia');
  const [yourName, setYourName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('123456789');
  useEffect(() => {}, []);

  const handleChange = newValue => {
    setValue(newValue);
  };

  const saveStep4DonateInfo = () => {
    const data = [
      {
        donationArea: donationArea,
        yourName: yourName,
        receiverName: receiverName,
        receiverPhone: receiverPhone,
      },
    ];
    if (validate(data[0])) {
      props.saveChildStep4DonateInfo(data);
      props.nextStepDonate();
    }
  };

  const validate = (values: any) => {
    console.log('validate', values);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.yourName) {
      window.alert('Please input email');
      return false;
    } else if (!values.receiverName) {
      window.alert('Please input donation purpose');
      return false;
    } else if (!values.receiverPhone) {
      window.alert('Please input donation purpose');
      return false;
    }
    return true;
  };

  const selectPhoneNumber = phone => {
    setReceiverPhone(phone);
  };

  const donateTypes: any = [
    {
      id: 1,
      type: 'type1',
    },
    {
      id: 2,
      type: 'type2',
    },
  ];

  return (
    <Grid minWidth="300px">
      <Grid>
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
          Your Name
        </Typography>
        <DInput
          variant="outlined"
          label="Enter your name"
          fullWidth
          width="325px"
          style={{ marginBlock: '5px' }}
          id="amount"
          onChange={e => setYourName(e.target.value)}
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
          Receiver name
        </Typography>
        <DInput
          variant="outlined"
          label="Enter receiver name"
          fullWidth
          width="325px"
          style={{ marginBlock: '5px' }}
          id="amount"
          onChange={e => setReceiverName(e.target.value)}
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
          Receiver’s mobile number
        </Typography>
        {/* <MobilePhone selectPhoneNumber={selectPhoneNumber} />                 */}
        <DonateBtn onClick={saveStep4DonateInfo}>
          Continue &nbsp;
          <img src="/assets/donate/nextIcon.png" />
        </DonateBtn>
        <CancelBtn onClick={() => props.backStepDonate()}>Back</CancelBtn>
      </Grid>
    </Grid>
  );
}
