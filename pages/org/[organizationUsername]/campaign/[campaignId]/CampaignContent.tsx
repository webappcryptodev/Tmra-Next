/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronRight, SignalWifiStatusbarNullRounded, Sms, Star } from '@mui/icons-material';
import { LoadingButton, TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Tab,
  Typography,
  Container,
  Grid,
} from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { MHidden } from '../../../../../src/components/@material-extend';
// hooks
import useOffSetTop from '../../../../../src/hooks/useOffSetTop';
import DefaultContentData from './json/default/campaign_content.json';
import DefaultDetailData from './json/default/campaign_detail.json';
import DefaultDonor from './json/default/campaign_donor.json';
import DefaultImageData from './json/default/campaign_images.json';
import { useQuery } from 'urql';
import { useRouter } from 'next/router';
import config from '@configuration';
import { app } from '@redux/slices/auth/realm';
import ThemePrimaryColor from '@components/ThemePrimaryColor';
import RouterLink from 'next/link';
import moment from 'moment';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

type DonorProps = {
  img: string | null;
  sender: string;
  amount: string;
  time: string;
};

type DonorUpdateProps = { sender: string; img: any; time: string; content: string };
type DonorActivityProps = { text: string; img: any; sender: string; time: string; amount: string };
type TopDonorProps = { text: string; img: any; sender: string; time: string; amount: string };

type DataProps = {
  story: string;
  updates: DonorUpdateProps[];
  activities: DonorActivityProps[];
  top_donor: TopDonorProps[];
};

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({}));

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

const HeaderListImageStyle = styled('div')(() => ({
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  height: 50,
  width: 80,
  margin: '0 10px',
  cursor: 'pointer',
}));
const HeaderListImageButtonStyle = styled(Button)(() => ({
  color: '#A078B6',
  borderColor: '#eee',
  margin: '0 10px',
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#eee',
  },
}));
const HeaderListImageFloatingButtonStyle = styled(Button)(() => ({
  position: 'absolute',
  bottom: 15,
  right: 25,
  color: '#A078B6',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
  },
}));

const ChildMedContainer = styled(Paper)(({ theme }) => ({
  padding: '18px 25px',
  backgroundColor: '#fff',
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
    margin: 20,
  },
}));
const ChildMedMainText = styled('div')(({ theme }) => ({
  color: '#666',
  fontSize: 18,
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
}));
const ChildMedSubText = styled('p')(({ theme }) => ({
  color: '#ec7070',
  fontWeight: 600,
  marginBottom: 0,
  marginTop: 5,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
}));

const TextStyle = styled('div')(() => ({
  fontWeight: 600,
  fontSize: 16,
  color: '#666',
}));
const NoContentTextStyle = styled('p')(() => ({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'center',
  color: '#666',
  padding: '0 15px 20px',
  margin: '1rem 0',
}));

const DonateButtonStyle = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#A078B6',
  boxShadow: 'none',
  marginTop: '20px',
  textTransform: 'uppercase',
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
  textTransform: 'uppercase',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#79A1D4',
  },
}));

const TabsContainerStyle = styled(Paper)(({ theme }) => {
  return {
    [theme.breakpoints.down('md')]: {
      borderRadius: 0,
      padding: 0,
    },
  };
});
const TabsListStyle = styled(TabList)(({ theme }) => ({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#A078B6',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
const TabStyle = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  fontWeight: 800,
  padding: '15px 6px',
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 10px !important',
  },
  margin: '0 20px !important',
  color: '#666',
  '&:hover': {
    color: '#A078B6',
    opacity: 1,
  },
  '&:after': {
    verticalAlign: 'middle',
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 5,
    backgroundColor: '#666',
    color: '#fff',
    display: 'inline-block',
    marginLeft: 15,
    padding: '2px 4px',
  },
  '&.Mui-selected': {
    color: '#A078B6',
    '&:after': {
      backgroundColor: '#A078B6',
    },
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const LoadingButtonStyle = styled(LoadingButton)(() => ({
  color: '#A078B6',
  borderColor: '#eee',
  margin: '0 10px',
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#eee',
  },
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

function kFormatter(num: number) {
  const convertResult =
    Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000) : Math.sign(num) * Math.abs(num);

  if (Math.abs(num) > 999) {
    return convertResult.toFixed(1) + 'K';
  }

  return convertResult;
}

function limitArray(data: any[], limitNum: number, isShowAll: boolean) {
  return data.reduce((accumulative, data) => {
    return accumulative.length < limitNum || isShowAll ? [...accumulative, data] : accumulative;
  }, []);
}

type dataDetail = {
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

type dataImg = {
  image: [] | undefined;
};

type Activities = {
  datetime: Date;
  avatar: string;
  author: string;
  content: string;
  amount: string;
};

type TopDonors = {
  datetime: Date;
  avatar: string;
  author: string;
  content: string;
  amount: number;
  currency: string;
};

type campaignUpdates = {
  campaignPhoto: string;
  description: string;
  title: string;
};

type unionCampaignContent = {
  dataImg: [] | undefined;
  dataDetail: dataDetail | undefined;
  cmpgActivities: Activities[] | undefined;
  topDonations: TopDonors[] | undefined;
  cmpgUpdates: campaignUpdates[] | undefined;
};

export default function CampaignContent({
  dataImg,
  dataDetail,
  cmpgActivities,
  topDonations,
  cmpgUpdates,
}: unionCampaignContent) {
  console.log('top donations', topDonations);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [isLoadJson, setLoadJson] = useState(true);
  const [content, setContent] = useState(DefaultContentData);
  const [detail, setDetail] = useState<dataDetail | undefined>(undefined);
  const [images, setImages] = useState<[] | undefined>(undefined);
  console.log('data image', dataImg);
  const [donor, setDonor] = useState(DefaultDonor);
  console.log('data detail', dataDetail);
  useEffect(() => {
    // setContent(res[0].default);
    setDetail(dataDetail);
    // setDonor(res[2].default);
    console.log('the image', typeof dataImg);
    setImages(dataImg);
    setLoadJson(false);
  }, [setImages]);
  const DetailData = detail;
  const ContentData = content;
  const ImageData = images;
  const DonorData = donor;
  console.log('image data', ImageData);
  const isOffsetContent = useOffSetTop(50);

  const tabRef = useRef<any>();

  const { story, updates, activities, top_donor }: DataProps = ContentData;

  const [activeTab, setActiveTab] = useState<string>('1');
  const [activeHeaderImage, setActiveHeaderImage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isShowAllDataUpdate, setIsShowAllDataUpdate] = useState<boolean>(false);
  const [isShowAllDataActivities, setIsShowAllDataActivities] = useState<boolean>(false);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    if (isOffsetContent) {
      tabRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    setActiveTab(newValue);
  };

  const handleChangeHeaderImage = (newActive: number) => () => {
    setActiveHeaderImage(newActive);
  };

  const handleShowMoreUpdateData = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsShowAllDataUpdate(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleShowMoreActivitiesData = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsShowAllDataActivities(true);
      setIsLoading(false);
    }, 1000);
  };

  const renderDonor = (data: Activities, idx: number) => {
    const date = new Date(data.datetime);
    const currentDate = new Date();
    const selisih = Math.abs(currentDate.getTime() - date.getTime()) / 3600000;
    const currencyFormat = new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: dataDetail?.currency ?? 'USD',
    });
    const split = data.amount.split(' ');
    return (
      <Box
        key={idx}
        sx={{ display: 'flex', alignItems: 'center', padding: idx === 0 ? '0 0 10px' : '10px 0' }}
      >
        {data?.avatar ? (
          <Avatar
            src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${data.avatar}`}
            alt="profile avatar"
            sx={{ width: 32, height: 32 }}
          ></Avatar>
        ) : (
          <Avatar alt="profile avatar" sx={{ width: 32, height: 32 }}>
            {data?.author.charAt(0)}
          </Avatar>
        )}

        <Box sx={{ flex: 1, marginLeft: '10px' }}>
          <TextStyle sx={{ fontSize: '14px', fontWeight: 400 }}>{data.author}</TextStyle>
          <TextStyle sx={{ fontSize: '14px', fontWeight: 400 }}>
            <strong>{currencyFormat.format(Number(split[0]))}</strong> •{' '}
            {moment().subtract(selisih, 'hours').fromNow()}
          </TextStyle>
        </Box>
      </Box>
    );
  };

  const renderImagePreview = (data: dataImg, idx: number) => {
    return (
      <HeaderListImageStyle
        onClick={handleChangeHeaderImage(idx)}
        key={idx}
        sx={{
          backgroundImage: 'url("' + publicRuntimeConfig.bunny.cdn.urlMedia + '/' + data + '")',
        }}
      />
    );
  };

  const renderDonorActivities = (data: Activities, idx: number) => {
    const date = new Date(data.datetime);
    const currentDate = new Date();
    const selisih = Math.abs(currentDate.getTime() - date.getTime()) / 3600000;

    return (
      <div key={idx}>
        <Box sx={{ display: 'flex', padding: '10px 0' }}>
          {data.avatar ? (
            <Avatar
              src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${data.avatar}`}
              alt="profile avatar"
              sx={{ width: 42, height: 42 }}
            ></Avatar>
          ) : (
            <Avatar alt="profile avatar" sx={{ width: 42, height: 42 }}>
              {data.author.charAt(0)}
            </Avatar>
          )}
          <Box sx={{ flex: 1, marginLeft: '15px' }}>
            <TextStyle sx={{ fontSize: '14px', fontWeight: 400 }}>
              <strong>{data.author}</strong> has donated {data.amount}
            </TextStyle>
            {data.content && (
              <TextStyle sx={{ fontSize: '14px', fontWeight: 400 }}>
                &quot;{data.content}&quot;
              </TextStyle>
            )}
            <TextStyle sx={{ fontSize: '12px', fontWeight: 400, color: '#999' }}>
              {moment().subtract(selisih, 'hours').fromNow()}
            </TextStyle>
          </Box>
        </Box>

        <Divider sx={{ margin: '0.5rem 0' }} />
      </div>
    );
  };

  const renderTopDonor = (data: TopDonors, idx: number) => {
    const badgeColors = ['#A078B6', '#79A1D4', '#3DFF8E'];
    const date = new Date(data.datetime);
    const currentDate = new Date();
    const selisih = Math.abs(currentDate.getTime() - date.getTime()) / 3600000;
    return (
      <div key={idx}>
        <Box sx={{ display: 'flex', padding: '10px 0' }}>
          {idx < 3 ? (
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              badgeContent={
                <Star
                  sx={{
                    backgroundColor: badgeColors[idx],
                    color: '#fff',
                    fontSize: '34px',
                    padding: '5px',
                    borderRadius: '50%',
                  }}
                />
              }
            >
              {data.avatar ? (
                <Avatar
                  src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${data.avatar}`}
                  alt="profile avatar"
                  sx={{ width: 100, height: 100 }}
                ></Avatar>
              ) : (
                <Avatar alt="profile avatar" sx={{ width: 100, height: 100 }}>
                  {data.author.charAt(0)}
                </Avatar>
              )}
            </Badge>
          ) : (
            <Avatar alt="profile avatar" sx={{ width: 100, height: 100 }}>
              {data.author.charAt(0)}
            </Avatar>
          )}

          <Box sx={{ flex: 1, marginLeft: '30px' }}>
            <TextStyle sx={{ fontSize: '18px', fontWeight: 400 }}>
              {data.amount + ' ' + data.currency} by <strong>{data.author}</strong>
            </TextStyle>
            <TextStyle sx={{ fontSize: '14px', fontWeight: 400, color: '#999' }}>
              Giver since {moment().subtract(selisih, 'hours').fromNow()}
            </TextStyle>
            {data.content && (
              <TextStyle sx={{ fontSize: '14px', fontWeight: 400 }}>
                &quot;{data.content}&quot;
              </TextStyle>
            )}
          </Box>
        </Box>

        <Divider sx={{ margin: '0.5rem 0' }} />
      </div>
    );
  };

  const renderUpdateDonor = (data: campaignUpdates, idx: number) => {
    // const date = new Date(data.datetime);
    // const currentDate = new Date();
    // const selisih = Math.abs(currentDate.getTime() - date.getTime()) / 3600000;
    return (
      <Box key={idx} sx={{ display: 'flex', marginBottom: '10px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              width: '16px',
              height: '16px',
              borderRadius: '16px',
              backgroundColor: '#A078B6',
            }}
          />
          <Box
            sx={{
              width: '5px',
              height: 'calc(100% - 16px)',
              borderEndStartRadius: '5px',
              borderEndEndRadius: '5px',
              backgroundColor: '#A078B6',
            }}
          />
        </Box>
        <Box sx={{ flex: 1, marginLeft: '20px', marginBottom: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: idx === 0 ? '0 0 10px' : '10px 0',
            }}
          >
            {DetailData?.favicon ? (
              <Avatar
                src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${DetailData?.favicon}`}
                alt="profile avatar"
                sx={{ width: 45, height: 45 }}
              ></Avatar>
            ) : (
              <Avatar alt="profile avatar" sx={{ width: 45, height: 45 }}>
                {DetailData?.by.charAt(0)}
              </Avatar>
            )}

            <Box sx={{ flex: 1, marginLeft: '10px' }}>
              <TextStyle sx={{ fontSize: '14px', fontWeight: 800 }}>
                {DetailData?.organization}
              </TextStyle>
              <TextStyle sx={{ fontSize: '14px', fontWeight: 400, color: '#999' }}>
                {/* {moment().subtract(selisih, 'hours').fromNow()} */}
              </TextStyle>
            </Box>
          </Box>

          <TextStyle
            sx={{ fontWeight: 400 }}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div
            style={{
              height: `60vh`,
              position: `relative`,
              overflow: `hidden`,
              backgroundColor: `#999`,
            }}
          >
            <div
              style={{
                backgroundPosition: `50%`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `200%`,
                filter: `blur(10px)`,
                opacity: `0.8`,
                position: `absolute`,
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                zIndex: 0,

                backgroundImage: `url('${publicRuntimeConfig.bunny.cdn.urlMedia}/${data.campaignPhoto}'')`,
              }}
            ></div>
            <div
              style={{
                backgroundPosition: `50%`,
                backgroundRepeat: `no-repeat`,
                // backgroundSize: `200%`,
                // filter: `blur(10px)`,
                // opacity: 0.8,
                position: `absolute`,
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                zIndex: 0,
                opacity: `1`,
                filter: `none`,
                backgroundSize: `contain`,
                backgroundImage: `url('${publicRuntimeConfig.bunny.cdn.urlMedia}/${data.campaignPhoto}')`,
              }}
            ></div>
          </div>
          {/* <img src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${data.campaignPhoto}`} /> */}
        </Box>
      </Box>
    );
  };

  console.log('campaign activities', cmpgActivities);
  console.log('donor list', detail?.donors);
  return !isLoadJson ? (
    <RootStyle>
      <TitleStyle>{DetailData?.title}</TitleStyle>

      <PaperStyle sx={{ backgroundColor: '#fff', overflow: 'hidden' }} elevation={2}>
        <HeaderImageContainerStyle>
          <HeaderImageBackgroundStyle
            sx={{
              backgroundImage:
                'url("' +
                publicRuntimeConfig.bunny.cdn.urlMedia +
                '/' +
                (images && images[activeHeaderImage]) +
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
                (images && images[activeHeaderImage]) +
                '")',
            }}
          />

          <MHidden width="mdUp">
            <HeaderListImageFloatingButtonStyle variant="text">
              {t('campaign.see_more_photos_btn')}
            </HeaderListImageFloatingButtonStyle>
          </MHidden>
        </HeaderImageContainerStyle>

        <MHidden width="mdDown">
          <Box sx={{ display: 'flex', height: '80px', padding: '15px 10px' }}>
            <Box sx={{ flex: 1, display: 'flex', overflow: 'auto' }}>
              {images && images.map(renderImagePreview)}
            </Box>

            <HeaderListImageButtonStyle variant="outlined">
              {t('campaign.see_more_photos_btn')}
            </HeaderListImageButtonStyle>
          </Box>
        </MHidden>
      </PaperStyle>

      <Link sx={{ '&:hover': { textDecoration: 'none' } }} href="#">
        {/* <ChildMedContainer elevation={2}>
          <img
            src="https://give.asia/assets/images/childmed/logo@3x.jpg"
            alt="ChildMed"
            height="80"
            width="80"
          />

          <Box sx={{ flex: 1, paddingLeft: '20px' }}>
            <ChildMedMainText>
              We believe <strong>every child deserves a chance</strong> to live beyond the confines
              of the hospital walls.
            </ChildMedMainText>
            <ChildMedSubText>
              Help Baby Emma Medical Bills and other children live normal lives
            </ChildMedSubText>
          </Box>

          <ChevronRight sx={{ color: '#666', fontSize: 36, alignSelf: 'center' }} />
        </ChildMedContainer> */}
      </Link>

      <Box ref={tabRef}>
        <TabContext value={activeTab}>
          <TabsContainerStyle
            sx={{
              backgroundColor: '#fff',
              marginTop: '20px',
              borderEndEndRadius: 0,
              borderEndStartRadius: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              ...(isOffsetContent && {
                position: 'fixed',
                top: { xs: 64, md: 88 },
                right: 0,
                left: 0,
                margin: 0,
                zIndex: 10,
              }),
            }}
            elevation={2}
          >
            <Container maxWidth="lg">
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                flexWrap="nowrap"
                spacing={4}
              >
                <Grid item>
                  <TabsListStyle
                    variant="scrollable"
                    scrollButtons="auto"
                    onChange={handleChangeTab}
                  >
                    {config.main.campaignDetail.story.enabled === true && (
                      <TabStyle disableRipple label={t('campaign.story_tab')} value="1"></TabStyle>
                    )}
                    <TabStyle
                      disableRipple
                      label={t('campaign.updates_tab')}
                      value="2"
                      sx={{
                        '&:after': {
                          content: '"' + kFormatter(cmpgUpdates ? cmpgUpdates.length : 0) + '"',
                        },
                      }}
                    ></TabStyle>
                    <TabStyle
                      disableRipple
                      label={t('campaign.activities_tab')}
                      value="3"
                      sx={{
                        '&:after': {
                          content:
                            '"' + kFormatter(cmpgActivities ? cmpgActivities.length : 0) + '"',
                        },
                      }}
                    ></TabStyle>
                    <TabStyle
                      disableRipple
                      label={t('campaign.top_donors_tab')}
                      value="4"
                    ></TabStyle>
                  </TabsListStyle>
                </Grid>
                <Grid item>
                  <MHidden width="mdDown">
                    {isOffsetContent && (
                      <Box sx={{ padding: '0 10px 0 20px' }}>
                        <RouterLink
                          href={`/org/${router.query.organizationUsername}/campaign/${router.query.campaignId}/amount`}
                          passHref
                        >
                          <DonateButtonStyle
                            sx={{ margin: 0 }}
                            fullWidth={true}
                            variant="contained"
                          >
                            {t('campaign.please_donate_btn')}
                          </DonateButtonStyle>
                        </RouterLink>
                      </Box>
                    )}
                  </MHidden>
                </Grid>
              </Grid>
            </Container>
          </TabsContainerStyle>

          {isOffsetContent && <Box sx={{ height: '49px' }} />}

          <PaperStyle
            sx={{ backgroundColor: '#fff', borderStartEndRadius: 0, borderStartStartRadius: 0 }}
            elevation={2}
          >
            {config.main.campaignDetail.story.enabled === true && (
              <TabPanel sx={{ padding: '30px' }} value="1">
                {DetailData &&
                DetailData.description &&
                DetailData?.description.trim().length > 0 ? (
                  <TextStyle
                    sx={{ fontWeight: 400 }}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<div style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">' +
                        DetailData?.title +
                        '</div>' +
                        DetailData?.description,
                    }}
                  />
                ) : (
                  <NoContentTextStyle>{t('campaign.no_data_tab')}</NoContentTextStyle>
                )}
              </TabPanel>
            )}
            <TabPanel sx={{ padding: '30px' }} value="2">
              {cmpgUpdates && cmpgUpdates.length > 0 ? (
                <>
                  {limitArray(cmpgUpdates && cmpgUpdates, 1, isShowAllDataUpdate).map(
                    renderUpdateDonor,
                  )}

                  {cmpgUpdates && cmpgUpdates.length > 1 && !isShowAllDataUpdate && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                      <LoadingButtonStyle
                        onClick={handleShowMoreUpdateData}
                        loading={isLoading}
                        variant="outlined"
                        sx={{ margin: '10px 20px' }}
                      >
                        {t('campaign.see_more_updates_btn')}
                      </LoadingButtonStyle>
                    </Box>
                  )}
                </>
              ) : (
                <NoContentTextStyle>{t('campaign.no_data_tab')}</NoContentTextStyle>
              )}
            </TabPanel>
            <TabPanel sx={{ padding: '30px' }} value="3">
              {cmpgActivities && cmpgActivities.length > 0 ? (
                <>
                  {limitArray(cmpgActivities && cmpgActivities, 5, isShowAllDataActivities).map(
                    renderDonorActivities,
                  )}

                  {cmpgActivities && cmpgActivities.length > 5 && !isShowAllDataActivities && (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <LoadingButtonStyle
                        onClick={handleShowMoreActivitiesData}
                        loading={isLoading}
                        variant="outlined"
                        sx={{ margin: '10px 20px' }}
                      >
                        {t('campaign.see_more_activities_btn')}
                      </LoadingButtonStyle>
                    </Box>
                  )}
                </>
              ) : (
                <NoContentTextStyle>{t('campaign.no_data_tab')}</NoContentTextStyle>
              )}
            </TabPanel>
            <TabPanel sx={{ padding: '30px' }} value="4">
              {topDonations && topDonations.length > 0 ? (
                topDonations.slice(0, 3).map(renderTopDonor)
              ) : (
                <NoContentTextStyle>{t('campaign.no_data_tab')}</NoContentTextStyle>
              )}
            </TabPanel>
          </PaperStyle>
        </TabContext>
      </Box>

      <MHidden width="mdDown">
        <PaperStyle
          sx={{ backgroundColor: '#fff', marginTop: '20px', padding: '20px' }}
          elevation={2}
        >
          <TextStyle>{DetailData?.title}</TextStyle>
          <RouterLink
            href={`/org/${router.query.organizationUsername}/campaign/${router.query.campaignId}/amount`}
            passHref
          >
            <DonateButtonStyle fullWidth={true} variant="contained">
              {t('campaign.please_donate_btn')}
            </DonateButtonStyle>
          </RouterLink>
          <ShareButtonStyle fullWidth={true} variant="contained">
            {t('campaign.share_campaign_btn')}
          </ShareButtonStyle>

          <Divider sx={{ margin: '20px 0' }} />

          {/* {cmpgActivities?.slice(0, 5).map(renderDonor)} */}
          {/* {cmpgActivities?.map(renderDonor)} */}
          {detail?.donors.map(renderDonor)}
          <TextStyle
            sx={{ fontSize: '14px', paddingTop: '5px', fontWeight: 400 }}
            data-i18n="campaign.donation_givers_desc"
          >
            <Trans
              i18nKey="campaign.donation_givers_desc"
              components={{ bold: <strong /> }}
              values={{ lenght: detail?.givers }}
            ></Trans>
          </TextStyle>
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
          <ShareButtonStyle
            variant="contained"
            sx={{ marginTop: 0, marginRight: '10px', padding: '10px' }}
          >
            <Sms />
          </ShareButtonStyle>
          <RouterLink
            href={`/org/${router.query.organizationUsername}/campaign/${router.query.campaignId}/amount`}
            passHref
          >
            <DonateButtonStyle
              fullWidth={true}
              variant="contained"
              sx={{ marginTop: 0, padding: '10px' }}
            >
              PLEASE DONATE
              {t('campaign.please_donate_btn')}
            </DonateButtonStyle>
          </RouterLink>
        </PaperStyle>
      </MHidden>
    </RootStyle>
  ) : (
    <div />
  );
}
