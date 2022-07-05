import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AtonementDonate from './atonementDonate';
import PaymentDonate from './paymentDonate';
import GiftsDonate from './giftsDonate';
import DetailsDonate from './detailsDonate';
import Congratulation from '../common/congratulation';
import NoConnection from '../common/noConnection';
import TransactionFailed from '../common/transactionFailed';
import NotFound from '../common/notFound';

declare const window: any;

const Switch = (props: any) => {
  const { index, children } = props;
  // filter out only children with a matching prop
  return children.find((child: any) => {
    return child.props.value === index;
  });
};

const steps = [{ id: 1 }, { id: 2 }];

const QuickDonate = (props: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [amount, setAmount] = useState(50);
  const [period, setPeriod] = useState('');
  const [progress, setProgress] = useState(30);
  const [stepProcess, setStepProcess] = useState(1);
  const [tickState, setTickState] = useState(1);
  const [giftDonateState, setGiftDonateState] = useState(false);

  const [networkStatus, setNetworkStatus] = useState('online');
  const [donationArea, setDonationArea] = useState('Saudi Arabia');
  const [donorName, setDonorName] = useState('Fantasy');
  const [donorEmail, setDonorEmail] = useState('ddeevvv1999@gmail.com');
  const [donationPurpose, setDonationPurpose] = useState('');
  const [receiverName, setReceiverName] = useState('Awesome');
  const [receiverPhone, setReceiverPhone] = useState('123456789');
  const [date, setDate] = useState(new Date());
  const [cardNumber, setCardNumber] = useState('3342 7732 2771 1234');
  const [completionInfo, setCompletionInfo] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  useEffect(() => {
    setOpen(props.openState);
    window.addEventListener('online', () => {
      setNetworkStatus('online');
    });

    // const updateContext = (updatedContextValue = {}) => {
    //   setDonationContextInfomation(DonationContextInfo => ({
    //     ...DonationContextInfo,
    //     ...updatedContextValue,
    //   }));
    //   console.log('updatedcontext', updatedContextValue);
    // };

    window.addEventListener('offline', () => {
      setNetworkStatus('offline');
    });
  }, [props, steps]);

  const handleClose = () => {
    setOpen(false);
    props.close();
  };

  const handleChange = (stepNum: number) => {
    setValue(stepNum);
  };

  const setAmountFunc = (amount: number) => {
    setAmount(amount);
  };
  /**
   * Saving data
   * @param data from atonementDonate component
   */
  const saveChildStep1DonateInfo = (data: any) => {
    console.log('step1 data', data);
    setAmount(data[0].amount);
    setPeriod(data[0].period);
    setDonorEmail(data[0].email);
    setDonationPurpose(data[0].purpose);
    setSelectedCurrency(data[0].currency);

    createStripePaymentApi(data);
  };

  const createStripePaymentApi = (paymentDetails: any) => {};

  const saveChildPaymentDonateInfo = (data: any) => {
    console.log('step1 data', data);
    setDate(data[0].date);
    setCardNumber(data[0].cardNumber);
  };

  const saveChildStep4DonateInfo = (data: any) => {
    console.log('step2 data', data);
    setDonationArea(data[0].donationArea);
    setDonorName(data[0].donorName);
    setReceiverName(data[0].receiverName);
    setReceiverPhone(data[0].receiverPhone);
  };

  const goCompleted = () => {
    setStepProcess(10);
  };

  const selectPaymentMethod = () => {
    setStepProcess(10);
  };

  const finishThisDonate = () => {
    handleClose();
    setTickState(1);
    setStepProcess(1);
  };

  const setCompletionInfoFunc = () => {
    const giftCompletionInfo: any = [
      {
        id: 1,
        name: 'Your donate',
        value: `$${amount}`,
      },
      {
        id: 2,
        name: 'Shipping method',
        value: 'Gift',
      },
      {
        id: 3,
        name: 'Donation area',
        value: donationArea,
      },
      {
        id: 4,
        name: 'Your Name',
        value: donorName,
      },
      {
        id: 5,
        name: 'Receiver name',
        value: receiverName,
      },
      {
        id: 6,
        name: 'Receiver’s  mobile number',
        value: receiverPhone,
      },
      {
        id: 7,
        name: 'Date',
        value: date,
      },
      {
        id: 8,
        name: 'cardNumber',
        value: cardNumber,
      },
    ];

    const justCompletionInfo: any = [
      {
        id: 1,
        name: 'Your donate',
        value: `$${amount}`,
      },
      {
        id: 2,
        name: 'Shipping method',
        value: 'Gift',
      },
      {
        id: 3,
        name: 'cardNumber',
        value: cardNumber,
      },
      {
        id: 4,
        name: 'Date',
        value: date,
      },
    ];
    if (giftDonateState) {
      console.log('giftCompletionInfo', giftCompletionInfo);
      setCompletionInfo(giftCompletionInfo);
    } else {
      setCompletionInfo(justCompletionInfo);
    }
  };

  const stepInfo: any = [
    {
      stepId: 1,
      headPop: 'Donation',
      title: 'Atonement for the inability to fast',
      imgSrc: '/assets/donate/donation-icon.png',
    },
    {
      stepId: 2,
      headPop: 'Gifts',
      title: 'Your donate ',
      imgSrc: '/assets/donate/Group.png',
    },
    {
      stepId: 3,
      headPop: 'Details',
      title: 'Your donate ',
      imgSrc: '/assets/donate/Group.png',
    },
    {
      stepId: 4,
      headPop: 'Payment',
      title: 'Your donate ',
      imgSrc: '/assets/donate/Group.png',
    },
  ];

  const nextStepDonate = (giftState?: boolean) => {
    //save step1 donation info
    if (giftState == undefined) {
      giftState = false;
    }
    setGiftDonateState(giftState);
    if (stepProcess == 5 && networkStatus == 'offline') {
      setStepProcess(6);
    } else {
      if (stepProcess == 1 && !giftState) {
        console.log('steps', steps);
        setStepProcess(stepProcess + 3);
      } else if (stepProcess == 1 && giftState) {
        steps.push({ id: 3 });
        setStepProcess(stepProcess + 1);
        ``;
      } else {
        setStepProcess(stepProcess + 1);
      }
    }
    setTickState(tickState + 1);
  };

  const backStepDonate = () => {
    if (!giftDonateState && stepProcess == 4) {
      setStepProcess(1);
      setTickState(1);
    } else {
      if (stepProcess == 5) {
        setStepProcess(stepProcess - 3);
      } else {
        setStepProcess(stepProcess - 1);
      }
    }
    setTickState(tickState - 1);
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          zIndex: 500,
          fontFamily: 'Urbanist',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {stepProcess < 5 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <Typography display="flex">{stepInfo[stepProcess - 1].headPop}</Typography>
            <Typography display="flex">
              {steps.map(step => {
                return (
                  <Box
                    key={step.id}
                    sx={{
                      width: '10px',
                      height: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: `${step.id <= tickState ? '#5C68EA' : 'transparent'}}`,
                      border: '1px solid #F4F4F9',
                      marginInline: '2px',
                    }}
                  >
                    {step.id < tickState && <img src="/assets/donate/tick.png" />}
                  </Box>
                );
              })}
            </Typography>
          </Box>
        )}
        {stepProcess < 5 && (
          <DialogTitle
            sx={{
              fontSize: '16px',
              fontWeight: '600 Semi Bold',
              lineHeight: '20.8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: `${stepProcess == 1 ? 'center' : 'space-betwwen'}`,
              mt: -3.25,
            }}
          >
            <Box display="flex" alignItems="center" width="325px">
              <img src={stepInfo[stepProcess - 1].imgSrc} />
              &nbsp;{stepInfo[stepProcess - 1].title}
              {stepProcess > 1 && stepProcess < 5 ? '$' + amount + '/' + period : ''} &nbsp;&nbsp;
            </Box>
          </DialogTitle>
        )}
        <DialogContent
          sx={{
            mt: 2,
          }}
        >
          {/* <DonationContext.Provider value={donationContextInfomation}> */}
          <Switch index={stepProcess}>
            <AtonementDonate
              value={1}
              nextStepDonate={nextStepDonate}
              setAmountFunc={setAmountFunc}
              saveChildStep1DonateInfo={saveChildStep1DonateInfo}
              setGiftDonateState={setGiftDonateState}
            />
            <GiftsDonate
              value={2}
              nextStepDonate={nextStepDonate}
              backStepDonate={backStepDonate}
            />
            <DetailsDonate
              value={3}
              nextStepDonate={nextStepDonate}
              backStepDonate={backStepDonate}
              saveChildStep4DonateInfo={saveChildStep4DonateInfo}
            />
            <PaymentDonate
              value={4}
              nextStepDonate={nextStepDonate}
              backStepDonate={backStepDonate}
              saveChildPaymentDonateInfo={saveChildPaymentDonateInfo}
            />
            <Congratulation value={5} finishThisDonate={finishThisDonate} />
            <NoConnection value={6} goCompleted={goCompleted} />
            <TransactionFailed value={7} goCompleted={goCompleted} />
            <NotFound value={8} />
          </Switch>
          {/* </DonationContext.Provider> */}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default QuickDonate;
