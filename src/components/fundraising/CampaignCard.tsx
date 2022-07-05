/* eslint-disable @typescript-eslint/no-unused-vars */
import { Appearance, CampaignInfo } from '@modules/fundraising/Campaign';
// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Skeleton,
  styled,
  TextField,
  Typography,
} from '@mui/material';
// Redux
import { useAppDispatch } from '@redux/hooks';
import { app } from '@redux/slices/auth/realm';
import { addCartItems, removeCartItems } from '@redux/slices/cart/cartSlice';
import { getButtonColor } from '@utils/theme-colors';
// Hooks
import currency from 'currency.js';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import React, { Suspense, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import RuntimeConfigs from '@utils/runtime-configs';

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export enum MultipleCheckoutMode {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED',
}

type CampaignCardProps = {
  campaign: CampaignInfo;
  donateArea?: 'visible' | 'hidden';
  appearance: Appearance;
  hrefFunc: (campaign: CampaignInfo) => string;
  multipleCheckout: MultipleCheckoutMode;
};

const CoverImgStyle = styled('img')(({ theme }) => ({
  // top: 0,
  // zIndex: 8,
  width: '100%',
  // height: '100%',
  height: '10rem',
  objectFit: 'cover',
  // position: 'absolute',
}));

interface DonateAreaValues {
  amountStr: string;
}

export type BadgeCounterProps = {
  count: number;
};

export function DonateArea({
  campaign,
  appearance,
}: {
  campaign: CampaignInfo;
  appearance: Appearance;
}) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { handleSubmit, control, reset } = useForm<DonateAreaValues>({
    defaultValues: {
      amountStr: '',
    },
  });
  const onSubmit = async (data: DonateAreaValues) => {
    console.log('DonateArea.data:', data);

    const campaignList = await app.currentUser?.functions.callFunction('findOneCampaign', {
      _id: campaign._id,
    });
    console.log('hasil search campaign', campaignList);
    // console.log('hasil search campaign',campaignList.ownerRealmId.toString())
    let variables = {};
    variables = {
      nonprofitRealmId: { link: campaignList.ownerRealmId.toString() },
      campaignId: { link: campaign._id },
      donorRealmId: { link: app.currentUser!.id },
      donorUserId: { link: app.currentUser!.profile.ssoId },
      amount: parseFloat(data.amountStr),
      nonprofitUserId: campaignList.ownerUserId,
      campaignName: campaign.title,
      donorReached: campaign.amountProgress,
    };
    localStorage.setItem('paymentData', JSON.stringify(variables));
    router.push('/payment');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container sx={{ mt: 1 }}>
        <Grid item xs={8}>
          <Controller
            name="amountStr"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                size="small"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                placeholder={t('fundraising.cart.amount')}
                sx={{ ml: 1 }}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            type="submit"
            size="small"
            style={{
              backgroundColor: getButtonColor(appearance),
            }}
            variant="contained"
            sx={{ ml: 1, height: '100%' }}
            onClick={handleSubmit(onSubmit)}
          >
            {t('fundraising.campaign.donate_now')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export function MultipleCheckoutArea({
  campaign,
  appearance,
}: {
  campaign: CampaignInfo;
  appearance: Appearance;
}) {
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

  const handleDonateNow = async () => {
    const dataToCart = {
      _id: campaign._id,
      amount: amountItems[campaign._id!] || 0,
      amountTarget: campaign.amountTarget,
      coverImage: campaign.coverImage,
      currencyCode: campaign.currencyCode,
      description: campaign.description,
      islamCharityType: campaign.islamCharityType,
      organizationId: campaign.organizationId,
      title: campaign.title,
    };

    dispatch(addCartItems(dataToCart));

    router.push(`/org/${router.query.organizationUsername}/campaign/${campaign._id}/amount`);
  };

  const handleAddToCart = async () => {
    setCartOpen(true);

    const dataToCart = {
      _id: campaign._id,
      amount: amountItems[campaign._id!] || 0,
      amountTarget: campaign.amountTarget,
      coverImage: campaign.coverImage,
      currencyCode: campaign.currencyCode,
      description: campaign.description,
      islamCharityType: campaign.islamCharityType,
      organizationId: campaign.organizationId,
      title: campaign.title,
    };

    dispatch(addCartItems(dataToCart));
  };
  const handleRemoveFromCart = async (id: string) => {
    setCartOpen(false);

    dispatch(removeCartItems(id));
  };
  return (
    <Container>
      <Grid container spacing={1} justifyContent="center" sx={{ py: 2 }}>
        {!cartOpen && (
          <>
            <Grid item xs={5}>
              <TextField
                fullWidth
                id={campaign._id!}
                type="number"
                size="small"
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
                InputProps={{
                  inputProps: { min: 1 },
                  startAdornment: (
                    <InputAdornment position="start">{campaign.currencyCode}</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <Button
                size="medium"
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: getButtonColor(appearance),
                }}
                onClick={handleDonateNow}
              >
                {t('fundraising.campaign.donate_now')}
              </Button>
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
            <IconButton color="error" aria-label="add to shopping cart" onClick={handleAddToCart}>
              <AddShoppingCartIcon />
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
    </Container>
  );
}

function CampaignCardInner({
  campaign,
  donateArea,
  appearance,
  hrefFunc,
  multipleCheckout,
}: CampaignCardProps) {
  // const router = useRouter();
  const { t, i18n } = useTranslation();
  if (campaign.currencyCode == null) {
    console.error('Campaign', campaign._id, 'has null currency code');
  }

  if (!campaign?._id || !campaign?.organizationId) {
    return <Skeleton variant="rectangular" height={200}></Skeleton>;
  }

  const currencyFormat = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: campaign.currencyCode ?? 'USD',
  });
  let progressPercent = 0;
  const amountProgress = currency(campaign.amountProgress ?? 0);
  const amountTarget = currency(campaign.amountTarget ?? 0);
  // console.log('campaignnya adalah', campaign);
  let amountRemaining = amountTarget.subtract(amountProgress);
  if (amountTarget.value < amountProgress.value) {
    amountRemaining = currency(0);
  }
  if (amountTarget.value > 0) {
    if (amountProgress.value >= amountTarget.value) {
      progressPercent = 100;
    } else {
      progressPercent = amountProgress.multiply(100).divide(amountTarget).value;
    }
  }
  const coverImageUrl = campaign.coverImage
    ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${campaign.coverImage}?w=720`
    : '/static/placeholder/basic.png';

  return (
    <Card>
      <RouterLink href={hrefFunc(campaign)}>
        <Typography variant="subtitle1" sx={{ m: 1, cursor: 'pointer' }}>
          {campaign.title}
        </Typography>
      </RouterLink>
      <RouterLink href={hrefFunc(campaign)}>
        <CoverImgStyle src={coverImageUrl} sx={{ cursor: 'pointer' }} />
      </RouterLink>
      <Typography variant="caption" sx={{ m: 2 }}>
        {t('fundraising.campaign.progress')}
      </Typography>
      {/* {config.main.campaignCard.progressBar.enabled === true && ( */}
      <LinearProgress variant="determinate" value={progressPercent} sx={{ m: 2 }} />
      {/* )} */}
      <Divider />
      <Grid container sx={{ py: 1 }}>
        <Grid item xs={6}>
          <Typography
            variant="caption"
            sx={{ mx: 2, my: 1, color: 'text.secondary', display: 'block' }}
          >
            {t('fundraising.campaign.remaining')}
          </Typography>
          <Typography variant="subtitle1" sx={{ mx: 2, my: 1, color: 'text.primary' }}>
            {currencyFormat.format(amountRemaining.value)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="caption"
            sx={{ mx: 2, my: 1, color: 'text.secondary', display: 'block' }}
          >
            {t('fundraising.campaign.collected')}
          </Typography>
          <Typography variant="subtitle1" sx={{ mx: 2, my: 1, color: 'text.primary' }}>
            {amountProgress ? currencyFormat.format(amountProgress.value) : ''}
          </Typography>
        </Grid>
        {(donateArea ?? 'visible') === 'visible' && (
          <DonateArea campaign={campaign} appearance={appearance} />
        )}
      </Grid>
      {multipleCheckout === MultipleCheckoutMode.ENABLED && (
        <MultipleCheckoutArea campaign={campaign} appearance={appearance} />
      )}
    </Card>
  );
}

export default function CampaignCard(props: CampaignCardProps) {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" height={200} />}>
      <CampaignCardInner {...props} />
    </Suspense>
  );
}
