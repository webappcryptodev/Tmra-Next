/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Page from '@components/Page';
import {
  Box,
  Button,
  Container,
  styled,
  Paper,
  Divider,
  Avatar,
  Snackbar,
  Alert,
  Theme,
} from '@mui/material';
import getConfig from 'next/config';
import React, { useState } from 'react';
// hooks
import { useTranslation } from 'react-i18next';
import RuntimeConfigs from '@utils/runtime-configs';

import { useRouter } from 'next/router';
import RouterLink from 'next/link';
import { MHidden } from '@components/@material-extend';
import { CheckCircleRounded, ChevronRight, Share } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Appearance } from '@modules/fundraising/Campaign';

import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import { app } from '@redux/slices/auth/realm';
import axios from 'axios';

import CarouselThumbnail from '@components/carousel/CarouselThumbnail';
import { useAppSelector } from '@redux/hooks';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));
const ContentStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: 50,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));
const CampaignContentStyle = styled('div')(({ theme }) => ({
  width: '68%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
const CampaignSideStyle = styled('div')(({ theme }) => ({
  width: '31%',
  padding: '35px 10px 0 20px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: 20,
    paddingTop: 0,
  },
}));

const OwnerName = styled('div')(() => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  color: '#999',
}));
const OwnerDesc = styled('p')(() => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  color: '#999',
  margin: 0,
}));

const TextStyle = styled('div')(() => ({
  fontWeight: 400,
  fontSize: 14,
  color: '#666',
}));

const DonateButtonStyle = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#A078B6',
  boxShadow: 'none',
  marginTop: '20px',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#A078B6',
  },
}));
const ShareButtonStyle = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#79A1D4',
  boxShadow: 'none',
  marginTop: '20px',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#79A1D4',
  },
}));

const PaperStyle = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    borderRadius: 0,
  },
}));

const TitleStyle = styled('div')(({ theme }) => ({
  color: 'rgba(51,51,51,.87)',
  fontSize: 30,
  fontWeight: 300,
  lineHeight: '36px',
  padding: '35px 0',
  [theme.breakpoints.down('md')]: {
    padding: '15px 20px',
  },
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
const HeaderListImageButtonStyle = styled(Button)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
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
const NoContentTextStyle = styled('p')(() => ({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'center',
  color: '#666',
  padding: '0 15px 20px',
  margin: '1rem 0',
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

type CampaignDetails = {
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
};
type Creator = {
  name: string;
  organizationName: string;
  favicon: string;
  defaultCurrency: string;
  baseSumAmount: string;
  donorsCount: string;
  listDonors: [];
};
type DetailData = {
  favicon: string;
  title: string | undefined;
  by: string;
  organization: string;
  img: string | null;
  gained: string | undefined;
  offline_gained: string | undefined;
  goal: string | undefined;
  givers: string | undefined;
  is_verify: boolean;
  currency: string | undefined;
  description: string | undefined;
  donors: [];
};
type TopDonor = {
  datetime: Date;
  avatar: string;
  author: string;
  content: string;
  amount: number;
  currency: string;
};

type GivingSadaqahCampaignDetailProps = {
  campaignData?: CampaignDetails;
  creatorData?: Creator;
  dataDetail?: DetailData;
  topDonor?: TopDonor[];
  appearance?: Appearance | null;
};

// ----------------------------------------------------------------------

function GivingSadaqahCampaignSide({ dataDetail }) {
  const router = useRouter();
  const { t } = useTranslation();
  const currentUser = useAppSelector(state => state.currentUser);

  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);

  return (
    <Box>
      <MHidden width="mdDown">
        <Paper sx={{ backgroundColor: '#fff', padding: '15px 20px' }} elevation={2}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleRounded color="success" sx={{ fontSize: 20 }} />

            <Box sx={{ flex: 1, marginLeft: '10px' }}>
              <TextStyle>
                <strong>
                  <span style={{ color: '#74ae3b' }}>{t('campaign.verified_by')} </span>Tmra
                </strong>
              </TextStyle>
              {/* <TextStyle sx={{ fontSize: '12px' }}>3 SEP 2021</TextStyle> */}
            </Box>
          </Box>

          <Divider sx={{ margin: '15px 0' }} />

          <TextStyle>
            Donations will go to <strong>{dataDetail?.organization}</strong> via{' '}
            <strong>Tmra</strong>
          </TextStyle>
        </Paper>
        <DonateButtonStyle
          fullWidth={true}
          variant="contained"
          onClick={() => {
            currentUser?.id
              ? router.push(`/charity/amount?cid=${router.query.campaignId}`)
              : router.push('/user/login');
          }}
        >
          {t('campaign.please_donate_btn')}
        </DonateButtonStyle>
        <CopyToClipboard text={`${window.location.href}`} onCopy={() => setCopiedStatus(true)}>
          <ShareButtonStyle fullWidth={true} variant="contained">
            {t('campaign.share_campaign_btn')}
          </ShareButtonStyle>
        </CopyToClipboard>
      </MHidden>

      <Paper
        sx={{ backgroundColor: '#fff', marginTop: '20px', padding: '20px 20px 10px' }}
        elevation={2}
      >
        <TextStyle sx={{ color: '#000', fontSize: '16px' }}>{t('campaign.fundraiser')}</TextStyle>

        <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px 0' }}>
          {dataDetail?.favicon ? (
            <Avatar
              src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${dataDetail?.favicon}`}
              alt="profile avatar"
              sx={{ width: 45, height: 45 }}
            ></Avatar>
          ) : (
            <Avatar alt="profile avatar" sx={{ width: 45, height: 45 }}>
              {dataDetail !== undefined && dataDetail.by.charAt(0)}
            </Avatar>
          )}
          <Box sx={{ flex: 1, paddingLeft: '10px' }}>
            <OwnerName>
              {t('campaign.by')}{' '}
              <span style={{ color: '#A078B6', fontWeight: 600, textTransform: 'uppercase' }}>
                {dataDetail?.by}
              </span>
            </OwnerName>
            <OwnerDesc>Family member of the beneficiary</OwnerDesc>
          </Box>
        </Box>

        <Divider />

        <Button
          variant="text"
          fullWidth={true}
          disableRipple={true}
          component="a"
          href="/contact"
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0',
            justifyContent: 'space-between',
            '&:hover': {
              backgroundColor: '#fff',
            },
          }}
        >
          <TextStyle>
            <strong>Get in Touch</strong>
          </TextStyle>

          <ChevronRight sx={{ color: '#666' }} />
        </Button>
      </Paper>
      <Snackbar
        open={copiedStatus}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={() => setCopiedStatus(false)}
      >
        <Alert onClose={() => setCopiedStatus(false)} severity="success">
          Link is copied
        </Alert>
      </Snackbar>
    </Box>
  );
}

function GivingSadaqahCampaignContent({ dataDetail, dataImg, appearance }) {
  console.log(dataImg);
  const router = useRouter();
  const { t } = useTranslation();

  const [activeHeaderImage, setActiveHeaderImage] = useState<number>(0);
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);

  const handleChangeHeaderImage = (newActive: number) => () => {
    setActiveHeaderImage(newActive);
  };

  const renderImagePreview = (data, idx) => {
    return (
      <HeaderListImageStyle
        isActive={activeHeaderImage === idx}
        appearance={appearance}
        onClick={handleChangeHeaderImage(idx)}
        key={idx}
        sx={{
          backgroundImage: 'url("' + publicRuntimeConfig.bunny.cdn.urlMedia + '/' + data + '")',
        }}
      />
    );
  };

  return (
    <Box>
      <TitleStyle>{dataDetail?.title}</TitleStyle>

      <PaperStyle sx={{ backgroundColor: '#fff', overflow: 'hidden' }} elevation={2}>
        <CarouselThumbnail images={dataImg} />
        {/* <HeaderImageContainerStyle>
          <HeaderImageBackgroundStyle
            sx={{
              backgroundImage:
                'url("' +
                publicRuntimeConfig.bunny.cdn.urlMedia +
                '/' +
                (dataImg && dataImg[activeHeaderImage]) +
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
                (dataImg && dataImg[activeHeaderImage]) +
                '")',
            }}
          />
        </HeaderImageContainerStyle>
        <MHidden width="mdUp">
          <Box sx={{ textAlign: 'right' }}>
            <HeaderListImageFloatingButtonStyle variant="text">
              {t('campaign.see_more_photos_btn')}
            </HeaderListImageFloatingButtonStyle>
          </Box>
        </MHidden>

        <MHidden width="mdDown">
          <Box sx={{ display: 'flex', height: '80px', padding: '15px 10px' }}>
            <Box sx={{ flex: 1, display: 'flex', overflow: 'auto' }}>
              {dataImg && dataImg.map(renderImagePreview)}
            </Box>

            <HeaderListImageButtonStyle variant="outlined">
              {t('campaign.see_more_photos_btn')}
            </HeaderListImageButtonStyle>
          </Box>
        </MHidden> */}
      </PaperStyle>

      <PaperStyle
        sx={{
          backgroundColor: '#fff',
          borderStartEndRadius: 0,
          borderStartStartRadius: 0,
          marginTop: '49px',
        }}
        elevation={2}
      >
        <Box sx={{ padding: '30px' }}>
          {dataDetail && dataDetail.description && dataDetail?.description.trim().length > 0 ? (
            <TextStyle
              sx={{ fontWeight: 400 }}
              dangerouslySetInnerHTML={{
                __html:
                  '<div style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">' +
                  dataDetail?.title +
                  '</div>' +
                  dataDetail?.description,
              }}
            />
          ) : (
            <NoContentTextStyle>{t('campaign.no_data_tab')}</NoContentTextStyle>
          )}
        </Box>
      </PaperStyle>

      <MHidden width="mdDown">
        <PaperStyle
          sx={{ backgroundColor: '#fff', marginTop: '20px', padding: '20px' }}
          elevation={2}
        >
          <TextStyle>{dataDetail?.title}</TextStyle>
          <RouterLink href={`/charity/amount?cid=${router.query.campaignId}`} passHref>
            <DonateButtonStyle fullWidth={true} variant="contained">
              {t('campaign.please_donate_btn')}
            </DonateButtonStyle>
          </RouterLink>
          <CopyToClipboard text={`${window.location.href}`} onCopy={() => setCopiedStatus(true)}>
            <ShareButtonStyle fullWidth={true} variant="contained">
              {t('campaign.share_campaign_btn')}
            </ShareButtonStyle>
          </CopyToClipboard>
        </PaperStyle>
      </MHidden>

      <MHidden width="mdUp">
        <PaperStyle
          sx={{
            backgroundColor: '#fff',
            position: 'fixed',
            bottom: 0,
            right: 0,
            left: 0,
            padding: '10px 20px',
            zIndex: 10,
            display: 'flex',
          }}
          elevation={2}
        >
          <CopyToClipboard text={`${window.location.href}`} onCopy={() => setCopiedStatus(true)}>
            <ShareButtonStyle
              variant="contained"
              sx={{ marginTop: 0, marginRight: '10px', padding: '10px' }}
            >
              <Share />
            </ShareButtonStyle>
          </CopyToClipboard>
          <RouterLink href={`/charity/amount?cid=${router.query.campaignId}`} passHref>
            <DonateButtonStyle
              fullWidth={true}
              variant="contained"
              sx={{ marginTop: 0, padding: '10px' }}
            >
              {t('campaign.please_donate_btn')}
            </DonateButtonStyle>
          </RouterLink>
        </PaperStyle>
      </MHidden>
      <Snackbar
        open={copiedStatus}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={() => setCopiedStatus(false)}
      >
        <Alert onClose={() => setCopiedStatus(false)} severity="success">
          Link is copied
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default function GivingSadaqahCampaignDetail({
  campaignData,
  dataDetail,
  appearance,
}: GivingSadaqahCampaignDetailProps) {
  return (
    <RootStyle
      title={campaignData?.campaign.title}
      id="move_top"
      favicon={
        appearance?.favIcon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearance?.favIcon}`
          : null
      }
    >
      <Container maxWidth="lg">
        <ContentStyle>
          <CampaignContentStyle>
            <GivingSadaqahCampaignContent
              dataDetail={dataDetail}
              dataImg={campaignData?.campaign.images.map((img, idx) => ({
                id: idx,
                title: campaignData?.campaign.title,
                image: `${publicRuntimeConfig.bunny.cdn.urlMedia}/${img}`,
                description: campaignData?.campaign.description,
              }))}
              appearance={appearance}
            />
          </CampaignContentStyle>

          <CampaignSideStyle>
            <GivingSadaqahCampaignSide dataDetail={dataDetail} />
          </CampaignSideStyle>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
