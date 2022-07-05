import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  styled,
  Box,
  Typography,
  Stack,
  InputBase,
  SvgIcon,
  TextField,
  Input,
} from '@mui/material';
import { withStyles } from '@mui/styles';
// Redux
import { useAppDispatch } from '@redux/hooks';
import { removeCartItems } from '@redux/slices/cart/cartSlice';
// Hooks
import currency from 'currency.js';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import ReactCardFlip from 'react-card-flip';

export enum MultipleCheckoutMode {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED',
}

type CampaignInfo = {
  _id: number;
  organizationId: string;
  title: string;
  remainingAmount: string;
  collectedAmount: string;
  currencyCode: string;
};

type CampaignCardProps = {
  campaign: CampaignInfo;
};

export type BadgeCounterProps = {
  count: number;
};

export function MultipleCheckoutArea({ campaign }: { campaign: CampaignInfo }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  // const userId = useAppSelector(state => state.currentUser?.id);
  const [cartOpen, setCartOpen] = useState(false);
  const [amountItems, setAmountItems] = useState<{ [key: string]: number }>({});

  // redux
  const dispatch = useAppDispatch();

  if (campaign.currencyCode == null) {
    console.error('Campaign', campaign._id, 'has null currency code');
  }

  const handleChangeQty = e => {
    if (e.target.value === '0' || e.target.value === '') {
      e.target.value = '';
    }

    const id = e.target.id;
    const value = parseInt(e.target.value);

    setAmountItems({ ...amountItems, [id]: value });
  };

  const handleDonateNow = async () => {};

  const handleAddToCart = async () => {
    setCartOpen(true);
  };
  const handleRemoveFromCart = async (id: string) => {
    setCartOpen(false);

    dispatch(removeCartItems(id));
  };
  return (
    <Grid container spacing={1} justifyContent="center" sx={{ py: 2 }}>
      {!cartOpen && (
        <>
          <Grid item xs={10}>
            <Box
              display="flex"
              flexDirection="row"
              borderRadius={2}
              sx={{ backgroundColor: '#eeeeee', padding: '10px 12px' }}
            >
              <InputBase
                type="number"
                placeholder={t('fundraising.cart.amount')}
                onKeyDown={e => {
                  const prevent = ['e', 'E', '+', '-', '.', ','];
                  prevent.includes(e.key) && e.preventDefault();
                }}
                onKeyPress={e => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                onChange={handleChangeQty}
                startAdornment={
                  <InputAdornment position="start">{campaign.currencyCode}</InputAdornment>
                }
              />
              <Button
                size="small"
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: '#3f65eb',
                  marginLeft: '16px',
                }}
                onClick={handleDonateNow}
              >
                {t('fundraising.campaign.donate_now')}
              </Button>
            </Box>
          </Grid>
        </>
      )}
      {cartOpen && (
        <Grid item xs={9} sx={{ mr: 3 }}>
          <Button variant="contained" disabled color="inherit" fullWidth>
            {t('fundraising.cart.added')}
          </Button>
        </Grid>
      )}
      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {!cartOpen && (
          <IconButton sx={{ color: '#3fd6eb' }} onClick={handleAddToCart}>
            <SvgIcon>
              <path
                fill="currentColor"
                d="m20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12ZM12 16a4 4 0 0 1-4-4a1 1 0 0 1 2 0a2 2 0 0 0 4 0a1 1 0 0 1 2 0a4 4 0 0 1-4 4ZM6.41 7l1.71-1.71A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7Z"
              ></path>
            </SvgIcon>
          </IconButton>
        )}
        {cartOpen && (
          <Button
            color="inherit"
            variant="contained"
            onClick={() => handleRemoveFromCart(`${campaign._id}`)}
          >
            {t('core.remove')}
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

function CampaignCardInner({ campaign }: CampaignCardProps) {
  // const router = useRouter();
  const { t, i18n } = useTranslation();

  const [isShare, setShare] = useState(false);
  const [isGift, setGift] = useState(false);

  const currencyFormat = new Intl.NumberFormat(i18n.language);
  let progressPercent = 0;
  const amountProgress = currency(campaign.collectedAmount ?? 0);
  const remainingAmount = currency(campaign.remainingAmount ?? 0);
  const amountTarget = currency(
    Number(campaign.collectedAmount) + Number(campaign.remainingAmount),
  );
  if (amountTarget.value > 0) {
    if (amountProgress.value >= amountTarget.value) {
      progressPercent = 100;
    } else {
      progressPercent = amountProgress.multiply(100).divide(amountTarget).value;
    }
  }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#32b9cc',
    },
  }));

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#3fd6eb',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#3fd6eb',
          color: '#3fd6eb',
        },
      },
    },
  })(TextField);

  return (
    <Card sx={{ borderRadius: 3.75, padding: 2 }}>
      <ReactCardFlip
        isFlipped={isGift || isShare}
        flipDirection="horizontal"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ cursor: 'pointer' }} onClick={() => setGift(true)}>
            {campaign.title}
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography
              variant="body2"
              sx={{ cursor: 'pointer', color: '#3f65eb', textDecoration: 'underline' }}
            >
              See Details
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <IconButton sx={{ color: '#3f65eb' }} size="small" onClick={() => setGift(true)}>
                <Icon icon="eva:gift-fill" />
              </IconButton>
              <IconButton sx={{ color: '#3f65eb' }} size="small" onClick={() => setShare(true)}>
                <Icon icon="bi:share-fill" />
              </IconButton>
            </Box>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" flexDirection="column" marginY={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                Remaining Amount
              </Typography>
              <Stack
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                spacing={0.75}
              >
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {campaign.currencyCode ?? 'USD'}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
                  {currencyFormat.format(remainingAmount.value)}
                </Typography>
              </Stack>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                Collected Amount
              </Typography>
              <Stack
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                spacing={0.75}
              >
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {campaign.currencyCode ?? 'USD'}
                </Typography>
                <Typography variant="subtitle1">
                  {currencyFormat.format(amountProgress.value)}
                </Typography>
              </Stack>
            </Box>
          </Box>
          <BorderLinearProgress
            variant="determinate"
            value={progressPercent}
            sx={{ marginY: 2 }}
            aria-label={`${progressPercent}%`}
          />
          <MultipleCheckoutArea campaign={campaign} />
        </Box>

        <Box>
          <IconButton
            sx={{ color: '#637381', backgroundColor: '#f4f4f4' }}
            onClick={() => {
              setGift(false);
              setShare(false);
            }}
          >
            <Icon icon="eva:close-fill" />
          </IconButton>
          {isGift && (
            <Stack spacing={3} direction="column" mt={2}>
              <Typography variant="subtitle1" align="center">
                Give a gift for your friends
              </Typography>
              <CssTextField id="name" label="Your Name" variant="outlined" />
              <CssTextField id="name" label="Name of the gifted" variant="outlined" />
              <CssTextField id="name" label="Description" multiline rows={5} variant="outlined" />
              <Button
                size="small"
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: '#3fd6eb',
                }}
              >
                Continue
              </Button>
            </Stack>
          )}
          {isShare && (
            <Stack spacing={3} direction="column" mt={2} mb={4}>
              <Box
                display="flex"
                alignSelf="center"
                component="img"
                src="https://staging.ommar.net/static/logo-ommar.png"
                sx={{ width: 120, height: 40 }}
              />
              <Typography variant="subtitle1" align="center">
                Share on social media
              </Typography>
              <CssTextField
                type="text"
                value="https://www.npmjs.com/package/react-copy-to-clipboard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton sx={{ color: '#3fd6eb' }}>
                        <Icon icon="eva:copy-fill" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          )}
        </Box>
      </ReactCardFlip>
    </Card>
  );
}

export default function CampaignCard(props: CampaignCardProps) {
  return <CampaignCardInner {...props} />;
}
