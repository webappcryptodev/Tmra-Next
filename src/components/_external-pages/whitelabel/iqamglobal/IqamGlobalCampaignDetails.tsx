/* eslint-disable @typescript-eslint/no-unused-vars */
import { MotionInView, varFadeInRight } from '@components/animate';
import CopyClipboard from '@components/CopyClipboard';
import Iconify from '@components/Iconify';
import Image from '@components/Image';
import LogoOmmar from '@components/LogoOmmar';
import Page from '@components/Page';
import { GetOrganizationAppearanceQuery, OrganizationInfoFragment } from '@generated/graphql';
// layout
import IqamLayout from '@layouts/iqamglobal';
// components
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  LinearProgress,
  Stack,
  Step,
  StepLabel,
  Stepper,
  styled,
  Tab,
  Tabs,
  Typography,
  useTheme,
  Paper,
  Theme,
  Snackbar,
  Alert,
} from '@mui/material';
import { blue, green, grey } from '@mui/material/colors';
import mockData from '@utils/mock-data';
import { m } from 'framer-motion';
import { round, toInteger } from 'lodash';
import moment from 'moment';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import NextLink from 'next/link';
//
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
import { MHidden } from '@components/@material-extend';

import { Appearance } from '@modules/fundraising/Campaign';
import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import { app } from '@redux/slices/auth/realm';
import axios from 'axios';

// ----------------------------------------------------------------------

const STEPS = [
  {
    label: 'First milestone',
    isActive: false,
    isCompleted: true,
  },
  {
    label: 'Second milestone',
    isActive: true,
    isCompleted: false,
  },
  {
    label: 'Third milestone',
    isActive: false,
    isCompleted: false,
  },
];

const ICON_SIZE = {
  width: 18,
  height: 18,
};

const SOCIALS = [
  { name: 'Facebook', icon: <Iconify icon={'eva:facebook-fill'} {...ICON_SIZE} />, enabled: true },
  { name: 'Google', icon: <Iconify icon={'eva:google-fill'} {...ICON_SIZE} />, enabled: true },
  {
    name: 'Whatsapp',
    icon: <Iconify icon={'ic:whatsapp-outline'} {...ICON_SIZE} />,
    enabled: false,
  },
  { name: 'Twitter', icon: <Iconify icon={'eva:twitter-fill'} {...ICON_SIZE} />, enabled: true },
];

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
  },
  paddingBottom: theme.spacing(4),
}));

const AvatarCustom = styled(Avatar)(({ theme }) => ({
  cursor: 'pointer',
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.info.main,
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover': {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
}));

const WrapperLastActivity = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightRegular,
}));

const TabItemCustom = styled(Tab)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  marginRight: '16px !important',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  transition: 'all 0.5s',
  '&.Mui-selected': {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
  },
}));

const HeaderListImageStyle = styled('div')(
  ({
    theme,
    appearance,
    isActive,
  }: {
    theme?: Theme;
    appearance?: Appearance | null;
    isActive?: boolean;
  }) => {
    const borderColor = getAccentColor(appearance);
    let color: string;
    if (borderColor.indexOf('#') > -1) {
      color = borderColor;
    } else {
      color = theme?.palette[borderColor.split('.')[0]][borderColor.split('.')[1]];
    }
    return {
      ...(isActive && { borderColor: color, borderWidth: '3px', borderStyle: 'solid' }),
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      height: 50,
      width: 80,
      margin: '0 10px',
      cursor: 'pointer',
    };
  },
);

const HeaderImageBackgroundStyle = styled('div')(() => ({
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '200%',
  filter: 'blur(10px)',
  opacity: 0.8,
  position: 'absolute',
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
  zIndex: 0,
}));

const HeaderImageContainerStyle = styled('div')(({ theme }) => ({
  height: '60vh',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#999',
  [theme.breakpoints.down('md')]: {
    height: '50vh',
  },
}));

const HeaderListImageFloatingButtonStyle = styled(Button)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const textColor = getAccentColor(appearance);
    let color: string;
    if (textColor.indexOf('#') > -1) {
      color = textColor;
    } else {
      color = theme?.palette[textColor.split('.')[0]][textColor.split('.')[1]];
    }
    return {
      boxShadow: theme?.shadows[15],
      margin: '10px',
      color: color,
      backgroundColor: '#fff',
      '&:hover': {
        backgroundColor: '#fff',
      },
    };
  },
);

const HeaderListImageButtonStyle = styled(Button)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    console.log(appearance);
    const textColor = getAccentColor(appearance);
    let color: string;
    if (textColor.indexOf('#') > -1) {
      color = textColor;
    } else {
      color = theme?.palette[textColor.split('.')[0]][textColor.split('.')[1]];
    }
    return {
      color: color,
      borderColor: '#eee',
      margin: '0 10px',
      '&:hover': {
        backgroundColor: '#fff',
        borderColor: '#eee',
      },
    };
  },
);

const PaperStyle = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    borderRadius: 0,
  },
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

interface IPropsCampaignDetails {
  campaign: {
    _id: string;
    title: string | undefined;
    campaignImage: string;
    images: [];
    organizationId: string;
    creatorUserId: string;
    amountProgress: string;
    amountTarget: string;
    description: string;
    currencyCode: string;
    coverImage: string;
    islamCharityType: string;
  };
  campaignActivities: {
    datetime: Date;
    avatar: string;
    author: string;
    content: string;
    amount: string;
  }[];
  campaignNotificationReports: {
    title: string;
    description: string;
    campaignPhoto: string;
  }[];
}

interface TabPanelItemProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

type Activities = {
  datetime: Date;
  avatar: string;
  author: string;
  content: string;
  amount: string;
};

// ----------------------------------------------------------------------

function DialogFollowCampaign({ onOpen, onClose }: { onOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={onOpen} onClose={onClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>
        <Stack direction="row" spacing={4} alignItems="center" justifyContent="space-between">
          <LogoOmmar
            href="/"
            sx={{
              filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
            }}
          />
          <IconButton onClick={onClose}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ mt: 2, mb: 1 }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Campaign followed successfully
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

function DialogShareCampaign({ onOpen, onClose }: { onOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={onOpen} onClose={onClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>
        <Stack direction="row" spacing={4} alignItems="center" justifyContent="space-between">
          <LogoOmmar
            href="/"
            sx={{
              filter: 'drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255))',
            }}
          />
          <IconButton onClick={onClose}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ mt: 4, mb: 1 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          Share Campaign on Social media
        </Typography>
        <CopyClipboard value={window.location.href} />
      </DialogContent>
      {/* <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%', mt: 1, mb: 4 }}
      >
        {SOCIALS.filter(social => social.enabled).map(social => (
          <NextLink key={social.name} href="#" passHref>
            <AvatarCustom>{social.icon}</AvatarCustom>
          </NextLink>
        ))}
      </Stack> */}
    </Dialog>
  );
}

function TabPanelItemDetail(props: TabPanelItemProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2.5 }}>{children}</Box>}
    </div>
  );
}

function a11yItemProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// ----------------------------------------------------------------------

export default function IqamGlobalCampaignDetails({
  organization,
  appearance,
  campaignData,
}: {
  organization?: OrganizationInfoFragment | null;
  appearance?: GetOrganizationAppearanceQuery | null;
  campaignData?: IPropsCampaignDetails;
}) {
  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();

  const [openFollowCampaign, setOpenFollowCampaign] = useState(false);
  const [openShareCampaign, setOpenShareCampaign] = useState(false);

  const [donateValue, setDonateValue] = useState('');
  const [isShowAlert, setShowAlert] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const [valueTabItem, setValueTabItem] = useState(0);
  const [activeHeaderImage, setActiveHeaderImage] = useState<number>(0);

  const handleChangeTabsItem = (event: React.SyntheticEvent, newValue: number) => {
    setValueTabItem(newValue);
  };

  const handleChangeHeaderImage = (newActive: number) => () => {
    setActiveHeaderImage(newActive);
  };

  console.log(campaignData);

  const coverImageUrl = campaignData?.campaign?.coverImage
    ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${campaignData?.campaign?.coverImage}?w=640`
    : 'https://zone-assets-api.vercel.app/assets/img_placeholder.svg';

  const percentageDonation = round(
    (toInteger(campaignData?.campaign.amountProgress) /
      toInteger(campaignData?.campaign.amountTarget)) *
      100,
  );

  const renderImagePreview = (data, idx) => {
    return (
      <HeaderListImageStyle
        isActive={activeHeaderImage === idx}
        appearance={appearance?.nonprofitAppearance}
        onClick={handleChangeHeaderImage(idx)}
        key={idx}
        sx={{
          backgroundImage: 'url("' + publicRuntimeConfig.bunny.cdn.urlMedia + '/' + data + '")',
        }}
      />
    );
  };

  const postPayment = async () => {
    try {
      if (donateValue && Number(donateValue) > 0) {
        const path = `${publicRuntimeConfig.tmra.fund.url}/v1/paytabs/request`;

        const paymentData = {
          organizationId: organization?._id,
          campaignId: campaignData?.campaign?._id,
          campaignTitle: campaignData?.campaign?.title,
          amount: donateValue,
          userId: app.currentUser!.id,
          type: 'item',
          currency: campaignData?.campaign?.currencyCode,
        };
        const { data } = await axios.post(path, paymentData);
        window.open(data.data.redirect_url, '_blank');
      } else {
        setErrorMessage('Donation amount is required');
        setShowAlert(true);
      }
    } catch (error: any) {
      let errMsg = 'Sorry! but something went wrong.';
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          errMsg = error.response.data.message;
        }
      }
      setErrorMessage(errMsg);
      setShowAlert(true);
    }
  };

  const onCloseAlert = () => {
    setShowAlert(false);
    setErrorMessage('');
  };

  return (
    <IqamLayout
      organization={organization}
      imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.nonprofitAppearance?.logo}`}
    >
      <RootStyle
        title={campaignData?.campaign.title}
        id="move_top"
        favicon={
          organization?.favicon
            ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organization?.favicon}`
            : null
        }
        sx={{ backgroundColor: '#FCFCFC' }}
      >
        <Snackbar
          open={isShowAlert}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={2000}
          onClose={onCloseAlert}
        >
          <Alert onClose={onCloseAlert} severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>
        <Container maxWidth="lg">
          <Box
            onClick={() => router.back()}
            sx={{
              my: 1.5,
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
              ml: -1,
            }}
          >
            <Iconify
              icon="eva:chevron-left-outline"
              width={30}
              height={30}
              sx={{ color: 'info.main' }}
            />
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {t('common.back')}
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            {campaignData?.campaign.title}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Card>
                <CardContent>
                  {/* <Image
                    src={coverImageUrl}
                    alt={`coverImg-${campaignData?.campaign.title}`}
                    sx={{ borderRadius: 2 }}
                  /> */}
                  <PaperStyle sx={{ backgroundColor: '#fff', overflow: 'hidden' }} elevation={2}>
                    <HeaderImageContainerStyle>
                      <HeaderImageBackgroundStyle
                        sx={{
                          backgroundImage:
                            'url("' +
                            publicRuntimeConfig.bunny.cdn.urlMedia +
                            '/' +
                            (campaignData?.campaign?.images &&
                              campaignData?.campaign?.images[activeHeaderImage]) +
                            '")',
                        }}
                      />

                      <HeaderImageBackgroundStyle
                        sx={{
                          opacity: 1,
                          filter: 'none',
                          backgroundSize: 'contain',
                          backgroundImage:
                            'url("' +
                            publicRuntimeConfig.bunny.cdn.urlMedia +
                            '/' +
                            (campaignData?.campaign?.images &&
                              campaignData?.campaign?.images[activeHeaderImage]) +
                            '")',
                        }}
                      />
                    </HeaderImageContainerStyle>
                    <MHidden width="mdUp">
                      <Box sx={{ textAlign: 'right' }}>
                        <HeaderListImageFloatingButtonStyle
                          variant="text"
                          appearance={appearance?.nonprofitAppearance}
                        >
                          {t('campaign.see_more_photos_btn')}
                        </HeaderListImageFloatingButtonStyle>
                      </Box>
                    </MHidden>

                    <MHidden width="mdDown">
                      <Box sx={{ display: 'flex', height: '80px', padding: '15px 10px' }}>
                        <Box sx={{ flex: 1, display: 'flex', overflow: 'auto' }}>
                          {campaignData?.campaign?.images &&
                            campaignData?.campaign?.images.map(renderImagePreview)}
                        </Box>

                        <HeaderListImageButtonStyle
                          variant="outlined"
                          appearance={appearance?.nonprofitAppearance}
                        >
                          {t('campaign.see_more_photos_btn')}
                        </HeaderListImageButtonStyle>
                      </Box>
                    </MHidden>
                  </PaperStyle>
                </CardContent>
              </Card>
              <Card sx={{ border: '2px solid white', bgcolor: grey[100], mt: 4 }}>
                <Box
                  sx={{
                    width: '100%',
                    backgroundColor: grey[100],
                    padding: 2.5,
                  }}
                >
                  <Tabs
                    value={valueTabItem}
                    onChange={handleChangeTabsItem}
                    variant="standard"
                    textColor="inherit"
                    TabIndicatorProps={{
                      style: { display: 'none' },
                    }}
                    scrollButtons
                    allowScrollButtonsMobile
                  >
                    <TabItemCustom label="Description" {...a11yItemProps(0)} />
                    {/* <TabItemCustom label="Top Donors" {...a11yItemProps(1)} />
                    <TabItemCustom label="Last Activity" {...a11yItemProps(2)} /> */}
                  </Tabs>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    backgroundColor: 'common.white',
                  }}
                >
                  <TabPanelItemDetail value={valueTabItem} index={0} dir={theme.direction}>
                    <Box component={MotionInView} variants={varFadeInRight} sx={{ mb: 2 }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {campaignData?.campaign.description}
                      </Typography>
                    </Box>
                  </TabPanelItemDetail>
                  {/* <TabPanelItemDetail value={valueTabItem} index={1} dir={theme.direction}>
                    {campaignData?.campaignActivities?.map((item, i) => (
                      <Box
                        key={i}
                        component={MotionInView}
                        variants={varFadeInRight}
                        sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
                      >
                        <Image
                          src={
                            item?.avatar
                              ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${item?.avatar}`
                              : 'https://zone-assets-api.vercel.app/assets/img_placeholder.svg'
                          }
                          alt={`avatar-${item.author}`}
                          sx={{
                            width: '42px',
                            height: '42px',
                            borderRadius: 100,
                            border: '2px solid',
                            borderColor: 'info.main',
                            mr: 1.5,
                          }}
                        />
                        <Box>
                          <Typography variant="body2" sx={{ color: 'text.primary' }}>
                            {item?.author}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            component="p"
                            sx={{ color: 'info.main', fontWeight: 600 }}
                          >
                            Amount Donate : {item?.amount}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </TabPanelItemDetail>
                  <TabPanelItemDetail value={valueTabItem} index={2} dir={theme.direction}>
                    {campaignData?.campaignActivities?.map((item, i) => (
                      <Box
                        key={i}
                        component={MotionInView}
                        variants={varFadeInRight}
                        sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
                      >
                        <Image
                          src={
                            item?.avatar
                              ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${item?.avatar}`
                              : 'https://zone-assets-api.vercel.app/assets/img_placeholder.svg'
                          }
                          alt={`avatar-${item.author}`}
                          sx={{
                            width: '42px',
                            height: '42px',
                            borderRadius: 100,
                            border: '2px solid',
                            borderColor: 'info.main',
                            mr: 1.5,
                          }}
                        />
                        <Box>
                          <Typography variant="body2" sx={{ color: 'text.primary' }}>
                            {item.author}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            component="p"
                            sx={{ color: 'info.main', fontWeight: 600 }}
                          >
                            Amount Donate : {item?.amount} &nbsp;
                            <WrapperLastActivity>
                              {`${moment().diff(item?.datetime, 'day')}`} days ago
                            </WrapperLastActivity>
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </TabPanelItemDetail> */}
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              {/* <Card sx={{ bgcolor: grey[100], border: '1.5px solid white', mb: 2 }}>
                <CardContent>
                  {[...Array(3)].map((_, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1.5}
                      sx={{ mb: 2, '&:last-child': { mb: 0 } }}
                    >
                      <Image
                        src={mockData.image.avatar(i + 2)}
                        alt="avatar"
                        sx={{
                          width: '42px',
                          height: '42px',
                          borderRadius: 100,
                          border: '2px solid',
                          borderColor: 'info.main',
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle2" component="p" sx={{ color: 'info.main' }}>
                          {mockData.role(i + 2)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {mockData.name.fullName(i + 2)}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </CardContent>
              </Card> */}
              <Card sx={{ bgcolor: 'common.white', border: `1.5px solid ${grey[200]}`, mb: 2 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
                  component={MotionInView}
                  sx={{ p: 2, bgcolor: '#DBE3FF' }}
                >
                  <Box component={m.div} variants={varFadeInRight} sx={{ width: '100%' }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, color: 'text.primary', display: 'inline-block' }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: blue[900],
                          fontWeight: 900,
                          marginRight: '6px',
                          display: 'inline-block',
                        }}
                      >
                        {percentageDonation}%
                      </Typography>
                      Complete
                    </Typography>
                  </Box>
                  <Box
                    component={m.div}
                    variants={varFadeInRight}
                    sx={{ width: '100%', textAlign: 'right' }}
                  >
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Update in Progress
                    </Typography>
                  </Box>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={
                    percentageDonation > 100 ? 100 : percentageDonation < 0 ? 0 : percentageDonation
                  }
                  color="info"
                />
                <Stack direction="column" spacing={3} component={MotionInView} sx={{ p: 2 }}>
                  <Box component={m.div} variants={varFadeInRight} sx={{ width: '100%' }}>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      <span style={{ color: green[400], marginRight: '6px' }}>
                        {campaignData?.campaign?.currencyCode}{' '}
                        {campaignData?.campaign?.amountProgress}
                      </span>
                      raised of total {campaignData?.campaign?.currencyCode}{' '}
                      {campaignData?.campaign?.amountTarget}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                      Hakim bin Hizam narrated that the Prophet ﷺ said, <br />
                      <i>
                        “The upper hand is better than the lower hand (i.e. he who gives in charity
                        is better than he who takes it). One should begin by giving to his
                        dependents. And the best sadaqah is that which is given by a wealthy person
                        (from the money which is left over after his expenses). And whoever abstains
                        from asking others for some financial help, Allah will provide for him and
                        save him from asking others; Allah will make him self-sufficient.”
                      </i>{' '}
                      <br />
                      <b>[Sahih Bukhari and Muslim]</b>
                    </Typography>
                  </Box>
                  <Box
                    component={m.div}
                    variants={varFadeInRight}
                    sx={{
                      width: '100%',
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                      component="div"
                    >
                      <Box
                        sx={{
                          backgroundColor: grey[200],
                          borderRadius: '16px',
                          px: 1.5,
                          py: 1,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <InputBase
                          fullWidth
                          placeholder={t('fundraising.cart.amount')}
                          inputProps={{
                            'aria-label': 'amount',
                          }}
                          type="number"
                          startAdornment={
                            <InputAdornment position="start" sx={{ color: 'common.black' }}>
                              {campaignData?.campaign?.currencyCode ?? 'SAR'}
                            </InputAdornment>
                          }
                          value={donateValue}
                          onChange={e => setDonateValue(e.target.value)}
                          sx={{
                            color: 'common.black',
                            input: {
                              '&::placeholder': {
                                color: 'common.black !important',
                                opacity: 1,
                              },
                              '&::-moz-placeholder': {
                                color: 'common.black !important',
                              },
                              '&:-ms-input-placeholder': {
                                color: 'common.black !important',
                              },
                              '&:-moz-placeholder': {
                                color: 'common.black !important',
                              },
                            },
                          }}
                        />
                        <Button
                          variant="contained"
                          size="small"
                          color="info"
                          fullWidth
                          onClick={() => postPayment()}
                        >
                          {t('fundraising.campaign.donate_now')}
                        </Button>
                        {/* <IconButton color="primary" size="large">
                          <Iconify icon="eva:shopping-bag-fill" />
                        </IconButton> */}
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
              {/* <Card sx={{ bgcolor: 'common.white', border: `1.5px solid ${grey[200]}`, mb: 2 }}>
                <CardContent component={MotionInView} variants={varFadeInRight}>
                  <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
                    Campaign Status
                  </Typography>
                  <Stepper activeStep={STEPS.findIndex(x => x.isActive === true)} sx={{ my: 2 }}>
                    {STEPS &&
                      STEPS.map((_, index) => (
                        <Step
                          key={index}
                          sx={{
                            '& .Mui-active > circle': { color: 'info.main' },
                            '& .Mui-completed ': { color: '#3F65EB !important' },
                          }}
                        >
                          <StepLabel
                            sx={{
                              '& .Mui-completed ': { color: '#3F65EB !important' },
                            }}
                          />
                        </Step>
                      ))}
                  </Stepper>
                  {STEPS &&
                    STEPS.map((item, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          mb: 1,
                          ...((item.isActive && !item.isCompleted) || item.isCompleted
                            ? { color: 'info.main' }
                            : { color: 'inherit' }),
                        }}
                      >
                        {index + 1}. {item.label}
                      </Typography>
                    ))}
                </CardContent>
              </Card> */}
              <Card sx={{ bgcolor: grey[100], border: '1.5px solid white' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 }}>
                    {`Islamic Campaign Type : ${t(
                      `fundraising.campaign.IslamCharityType.${campaignData?.campaign?.islamCharityType}`,
                    )}`}
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ mr: 2 }}
                      component="a"
                      href="/contact"
                    >
                      <Typography variant="body2" sx={{ color: 'common.white', fontWeight: 600 }}>
                        Get in Touch
                      </Typography>
                    </Button>
                    <DialogFollowCampaign
                      onOpen={openFollowCampaign}
                      onClose={() => setOpenFollowCampaign(false)}
                    />
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ mr: 2 }}
                      onClick={() => setOpenShareCampaign(true)}
                    >
                      <Typography variant="body2" sx={{ color: 'common.white', fontWeight: 600 }}>
                        Share Campaign
                      </Typography>
                    </Button>
                    <DialogShareCampaign
                      onOpen={openShareCampaign}
                      onClose={() => setOpenShareCampaign(false)}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </IqamLayout>
  );
}
