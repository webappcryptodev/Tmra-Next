import { Icon } from '@iconify/react';
import { Appearance, CampaignInfo } from '@modules/fundraising/Campaign';
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Skeleton,
  Stack,
  styled,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { alpha, useTheme } from '@mui/material/styles';
import { textFieldClasses } from '@mui/material/TextField';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Redux
import { useAppDispatch } from '@redux/hooks';
import { app } from '@redux/slices/auth/realm';
import { addCartItems, removeCartItems } from '@redux/slices/cart/cartSlice';
import { getAccentColor, getButtonColor } from '@utils/theme-colors';
// Hooks
import currency from 'currency.js';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import React, { Suspense, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Controller, useForm } from 'react-hook-form';
import RuntimeConfigs from '@utils/runtime-configs';

type QuantityItemCardProps = {
  campaign: CampaignInfo;
  appearance: Appearance | null;
  hrefFunc: (campaign: CampaignInfo) => string;
  hasProgress?: boolean;
  hasGift?: boolean;
  hasShare?: boolean;
  hasMap?: boolean;
  hasRemainingAmount?: boolean;
  hasCollectedAmount?: boolean;
  hasCart?: boolean;
  hasInputAmount?: boolean;
  setCopiedStatus?: (isCopied: boolean) => void;
};

const CoverImgStyle = styled('img')(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const borderColor = getAccentColor(appearance);
    let color: string;
    if (borderColor.indexOf('#') > -1) {
      color = borderColor;
    } else {
      color = theme?.palette[borderColor.split('.')[0]][borderColor.split('.')[1]];
    }
    return {
      width: '100%',
      height: '10rem',
      objectFit: 'cover',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: color,
    };
  },
);

const CustomLinearProgress = styled(LinearProgress)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const progressColor = getAccentColor(appearance);
    let color: string;
    if (progressColor.indexOf('#') > -1) {
      color = progressColor;
    } else {
      color = theme?.palette[progressColor.split('.')[0]][progressColor.split('.')[1]];
    }
    return {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 20,
      width: '100%',
      borderRadius: 0,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'transparent',
      },
      [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: color,
        borderRadius: 0,
      },
    };
  },
);

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme?.palette?.grey[200],
  padding: theme?.spacing(1),
}));

const AmountButtonStyle = styled(IconButton)(
  ({ theme, buttonType }: { theme?: Theme; buttonType: 'increament' | 'decreament' }) => ({
    backgroundColor: theme?.palette?.grey[300],
    borderRadius: 0,
    padding: theme?.spacing(1),
    ...(buttonType === 'increament' && {
      borderTopRightRadius: theme?.spacing(2.5),
      borderBottomRightRadius: theme?.spacing(2.5),
    }),
    ...(buttonType === 'decreament' && {
      borderTopLeftRadius: theme?.spacing(2.5),
      borderBottomLeftRadius: theme?.spacing(2.5),
    }),
  }),
);

const CssTextField = styled(TextField)(
  ({
    theme,
    appearance,
    isAmount,
  }: {
    theme?: Theme;
    appearance?: Appearance | null;
    isAmount?: boolean;
  }) => {
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
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: color,
        },
        '& .MuiOutlinedInput-root': {
          ...(isAmount && {
            fieldset: {
              borderRadius: 0,
            },
          }),
          '&:hover fieldset': {
            borderColor: color,
          },
          '&.Mui-focused fieldset': {
            borderColor: color,
            color: color,
          },
        },
      },
    };
  },
);

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

function GiftCardForm({ appearance }: { appearance?: Appearance | null }) {
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm({});
  const onSubmit = async (data: any) => {
    console.log('gifted data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} direction="column" mt={2}>
        <Typography variant="subtitle1" align="center">
          Give a gift for your friends
        </Typography>
        <CssTextField appearance={appearance} name="name" label="Your Name" variant="outlined" />
        <CssTextField
          appearance={appearance}
          name="gifted_name"
          label="Name of the gifted"
          variant="outlined"
        />
        <CssTextField
          appearance={appearance}
          name="description"
          label="Description"
          multiline
          rows={5}
          variant="outlined"
        />
        <Button
          type="submit"
          size="small"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: getButtonColor(appearance),
            mb: 2,
            '&:hover': { backgroundColor: getButtonColor(appearance), opacity: 0.5 },
          }}
        >
          Continue
        </Button>
      </Stack>
    </form>
  );
}

export function QtyItemForm({
  campaign,
  appearance,
  hasInputAmount,
  hasCart,
}: {
  campaign: CampaignInfo;
  appearance: Appearance | null;
  hasInputAmount?: boolean;
  hasCart?: boolean;
}) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  // const userId = useAppSelector(state => state.currentUser?.id);
  const [cartOpen, setCartOpen] = useState(false);
  const [amountItems, setAmountItems] = useState<{ [key: string]: number }>({});
  const [qty, setQty] = useState<number>(0);

  // redux
  const dispatch = useAppDispatch();

  const handleChangeAmount = e => {
    if (e.target.value === '0' || e.target.value === '') {
      e.target.value = '';
    }

    const id = e.target.id;
    const value = parseInt(e.target.value);

    setAmountItems({ ...amountItems, [id]: value });
  };

  const handleChangeQty = e => {
    if (e.target.value === '0' || e.target.value === '') {
      e.target.value = '';
    }
    const value = parseInt(e.target.value);

    setQty(value);
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
    <Box>
      <Grid container spacing={1} justifyContent="center" sx={{ py: 2 }}>
        {!cartOpen && (
          <>
            {hasInputAmount && (
              <Grid item xs={5}>
                <Box display="flex" flexDirection="row">
                  <AmountButtonStyle
                    buttonType="decreament"
                    size="small"
                    onClick={() => {
                      setQty(qty - 1 >= 0 ? qty - 1 : 0);
                    }}
                  >
                    <Icon icon="akar-icons:minus" />
                  </AmountButtonStyle>
                  <CssTextField
                    isAmount
                    appearance={appearance}
                    fullWidth
                    type="number"
                    size="small"
                    value={qty}
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
                      inputProps: { min: 1, style: { textAlign: 'center' } },
                    }}
                  />
                  <AmountButtonStyle
                    buttonType="increament"
                    size="small"
                    onClick={() => setQty(qty + 1)}
                  >
                    <Icon icon="akar-icons:plus" />
                  </AmountButtonStyle>
                </Box>
              </Grid>
            )}
            <Grid item xs={hasInputAmount ? 7 : 12}>
              <CssTextField
                appearance={appearance}
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
                onChange={handleChangeAmount}
                InputProps={{
                  inputProps: { min: 1 },
                  startAdornment: (
                    <InputAdornment position="start">{campaign.currencyCode}</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </>
        )}
      </Grid>
      <Grid container spacing={1} justifyContent="center" sx={{ mb: 2 }}>
        {!cartOpen && (
          <Grid item xs={10}>
            <Button
              size="medium"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: getButtonColor(appearance),
                '&:hover': { backgroundColor: getButtonColor(appearance), opacity: 0.5 },
                boxShadow: 'none',
              }}
              onClick={handleDonateNow}
            >
              {t('fundraising.campaign.donate_now')}
            </Button>
          </Grid>
        )}
        {cartOpen && (
          <Grid item xs={9} sx={{ mr: 3 }}>
            <Button variant="contained" disabled color="inherit" fullWidth>
              {t('fundraising.cart.added')}
            </Button>
          </Grid>
        )}
        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {!cartOpen && hasCart && (
            <IconButton
              sx={{
                backgroundColor: getAccentColor(appearance),
                color: 'common.white',
                '&:hover': { backgroundColor: getAccentColor(appearance), opacity: 0.5 },
              }}
              aria-label="add to shopping cart"
              onClick={handleAddToCart}
            >
              <Icon icon="fa-solid:cart-plus" />
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
    </Box>
  );
}

function QtyItemCardInner({
  campaign,
  appearance,
  hrefFunc,
  hasMap,
  hasGift,
  hasShare,
  hasProgress,
  hasRemainingAmount,
  hasCart,
  hasCollectedAmount,
  hasInputAmount,
  setCopiedStatus,
}: QuantityItemCardProps) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const [isShowShareForm, setShowShareForm] = useState(false);
  const [isShowGiftForm, setShowGiftForm] = useState(false);
  const [isShowMap, setShowMap] = useState(false);

  const currencyFormat = new Intl.NumberFormat(i18n.language);
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
    <Card sx={{ borderRadius: 3.75, padding: 2 }}>
      <ReactCardFlip
        isFlipped={isShowGiftForm || isShowShareForm || isShowMap}
        flipDirection="horizontal"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <Box>
          <Stack spacing={3} direction="row" alignItems="center" mb={1}>
            <RouterLink href={hrefFunc(campaign)}>
              <Typography
                variant="subtitle1"
                noWrap
                sx={{ cursor: 'pointer', flex: 1, color: getButtonColor(appearance) }}
              >
                {campaign.title}
              </Typography>
            </RouterLink>
            <Stack direction="row" spacing={1.5} alignItems="center">
              {hasGift && (
                <IconButtonStyle
                  sx={{ color: getAccentColor(appearance) }}
                  size="small"
                  onClick={() => setShowGiftForm(true)}
                >
                  <Icon icon="eva:gift-fill" />
                </IconButtonStyle>
              )}
              {hasShare && (
                <IconButtonStyle
                  sx={{ color: getAccentColor(appearance) }}
                  size="small"
                  onClick={() => setShowShareForm(true)}
                >
                  <Icon icon="bi:share-fill" />
                </IconButtonStyle>
              )}
            </Stack>
          </Stack>
          <RouterLink href={hrefFunc(campaign)}>
            <Box position="relative" mb={2}>
              <Box position="relative">
                <CoverImgStyle
                  appearance={appearance}
                  src={coverImageUrl}
                  sx={{
                    cursor: 'pointer',
                    borderTopLeftRadius: theme.spacing(2),
                    borderTopRightRadius: theme.spacing(2),
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderTopLeftRadius: theme.spacing(2),
                    borderBottomRightRadius: theme.spacing(2),
                    backgroundColor: getAccentColor(appearance),
                    paddingX: theme.spacing(1),
                    paddingY: theme.spacing(0.625),
                  }}
                >
                  <Typography color={theme.palette.common.white} variant="caption">
                    Some Text
                  </Typography>
                </Box>
                {hasProgress && (
                  <>
                    <Box
                      display="inline-flex"
                      position="absolute"
                      bottom={-5}
                      left={0}
                      width="100%"
                    >
                      <CustomLinearProgress
                        variant="determinate"
                        value={progressPercent}
                        aria-label={`${progressPercent}%`}
                        appearance={appearance}
                      />
                      {progressPercent > 0 && (
                        <Typography
                          color="common.white"
                          variant="body2"
                          sx={{
                            zIndex: theme.zIndex.tooltip,
                            left: 10,
                            bottom: 0,
                            position: 'absolute',
                          }}
                        >{`${progressPercent}%`}</Typography>
                      )}
                    </Box>
                    <Box
                      display="inline-flex"
                      position="absolute"
                      bottom={0}
                      left={0}
                      width="100%"
                      height={4}
                      sx={{ backgroundColor: getAccentColor(appearance) }}
                    />
                  </>
                )}
              </Box>
              {/* {hasMap && (
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    color: 'common.white',
                    backgroundColor: alpha(theme.palette.common.white, 0.2),
                    width: theme.spacing(3.5),
                    height: theme.spacing(3.5),
                    padding: '5px',
                  }}
                >
                  <Icon icon="akar-icons:location" />
                </IconButton>
              )} */}
            </Box>
          </RouterLink>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            marginY={hasRemainingAmount || hasCollectedAmount ? 2 : 0}
          >
            {hasRemainingAmount && (
              <Box display="flex" flexDirection="column" justifyContent="center">
                <Typography
                  variant="caption"
                  sx={{ color: getAccentColor(appearance), display: 'block' }}
                >
                  {t('fundraising.campaign.remaining')}
                </Typography>
                <Stack
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  direction="row"
                  spacing={0.75}
                >
                  <Typography variant="caption" sx={{ color: getButtonColor(appearance) }}>
                    {campaign.currencyCode ?? 'USD'}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: getButtonColor(appearance) }}>
                    {currencyFormat.format(amountRemaining.value)}
                  </Typography>
                </Stack>
              </Box>
            )}
            {hasCollectedAmount && (
              <Box display="flex" flexDirection="column" justifyContent="center">
                <Typography
                  variant="caption"
                  sx={{ color: getAccentColor(appearance), display: 'block' }}
                >
                  {t('fundraising.campaign.collected')}
                </Typography>
                <Stack
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  direction="row"
                  spacing={0.75}
                >
                  <Typography variant="caption" sx={{ color: getButtonColor(appearance) }}>
                    {campaign.currencyCode ?? 'USD'}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: getButtonColor(appearance) }}>
                    {currencyFormat.format(amountProgress.value)}
                  </Typography>
                </Stack>
              </Box>
            )}
          </Box>
          <QtyItemForm
            campaign={campaign}
            appearance={appearance}
            hasInputAmount={hasInputAmount}
            hasCart={hasCart}
          />
          <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
            <Typography variant="body1" color="text.secondary" sx={{ cursor: 'pointer' }}>
              Some Text
            </Typography>
          </Box>
        </Box>

        <Box>
          <IconButton
            sx={{ color: '#637381', backgroundColor: '#f4f4f4' }}
            onClick={() => {
              setShowGiftForm(false);
              setShowShareForm(false);
              setShowMap(false);
            }}
          >
            <Icon icon="eva:close-fill" />
          </IconButton>
          {isShowGiftForm && <GiftCardForm appearance={appearance} />}
          {isShowShareForm && (
            <Stack spacing={3} direction="column" mt={2} mb={4}>
              {/* <Box
                display="flex"
                alignSelf="center"
                component="img"
                src="https://staging.ommar.net/static/logo-ommar.png"
                sx={{ width: 120, height: 40 }}
              /> */}
              <Typography variant="subtitle1" align="center">
                Share on social media
              </Typography>
              <CssTextField
                appearance={appearance}
                type="text"
                focused
                value={`${window.location.origin}${hrefFunc(campaign)}`}
                InputProps={{
                  endAdornment: (
                    <CopyToClipboard
                      text={`${window.location.origin}${hrefFunc(campaign)}`}
                      onCopy={() => setCopiedStatus && setCopiedStatus(true)}
                    >
                      <InputAdornment position="end">
                        <IconButton sx={{ color: getAccentColor(appearance) }}>
                          <Icon icon="eva:copy-fill" />
                        </IconButton>
                      </InputAdornment>
                    </CopyToClipboard>
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

export default function QuantityItemCard(props: QuantityItemCardProps) {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" height={200} />}>
      <QtyItemCardInner {...props} />
    </Suspense>
  );
}
