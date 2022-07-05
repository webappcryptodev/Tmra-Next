import { CheckCircleRounded, ChevronRight } from '@mui/icons-material';
import { Avatar, Box, Button, Divider, Paper } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// material
import { styled } from '@mui/material/styles';
import currency from 'currency.js';
import { toInteger } from 'lodash';
import moment from 'moment';
import getConfig from 'next/config';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// hooks
import { useTranslation } from 'react-i18next';
import RuntimeConfigs from '@utils/runtime-configs';
import { MHidden } from '../../../../../src/components/@material-extend';
import DefaultDonor from './json/default/campaign_donor.json';

// ----------------------------------------------------------------------

type DonorProps = {
  img: string | null;
  sender: string;
  amount: string;
  time: string;
};

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({}));

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

const AmountValueStyle = styled('h2')(() => ({
  fontSize: 24,
  fontWeight: 400,
  lineHeight: '36px',
  color: '#333',
  margin: 0,
}));

const TextStyle = styled('div')(() => ({
  fontWeight: 400,
  fontSize: 14,
  color: '#666',
}));

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  marginTop: 5,
  marginBottom: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundImage: 'linear-gradient(267deg, #A078B6, #79A1D4)',
  },
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

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

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
};
type dataImg = {
  image: [] | undefined;
};
type unionCampaignContent = {
  dataImg: [] | undefined;
  dataDetail: dataDetail | undefined;
  cmpgActivities: Activities[] | undefined;
  handleShareBtnPress?: () => void;
};
type Activities = {
  datetime: Date;
  avatar: string;
  author: string;
  content: string;
  amount: string;
};
export default function CampaignSide({
  handleShareBtnPress,
  dataImg,
  cmpgActivities,
  dataDetail,
}: unionCampaignContent) {
  console.log('converted', dataDetail);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [isLoadJson, setLoadJson] = useState(true);
  const [detail, setDetail] = useState<dataDetail | undefined>(undefined);
  const [donor, setDonor] = useState(DefaultDonor);
  const getLastItem = (thePath: any) => thePath.substring(thePath.lastIndexOf('/') + 1);
  useEffect(() => {
    async function getData() {
      await Promise.all([])
        .then(res => {
          setDetail(dataDetail);
          // setDonor(res[1].default);
          setLoadJson(false);
        })
        .catch(() => console.log('error'));
    }

    getData();
  }, []);

  const DetailData = detail;
  const DonorData = donor;
  let progressPercent = 0;
  let gained: any = 0;
  let goal: any = 0;
  if (DetailData) {
    gained = DetailData?.gained;
    goal = DetailData?.goal;
  }
  const currencyFormat = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: dataDetail?.currency ?? 'USD',
  });
  const amountProgress = currency(gained);
  const amountTarget = currency(goal);
  const amountRemaining = amountTarget.subtract(amountProgress);
  if (amountTarget.value > 0) {
    if (amountProgress.value >= amountTarget.value) {
      progressPercent = 100;
    } else {
      progressPercent = amountProgress.multiply(100).divide(amountTarget).value;
    }
  }
  // const { by, organization, gained, offline_gained, goal, givers } = DetailData;

  const convertToMoneyFormat = (text: number | Float32Array | undefined) => {
    console.log('converted money', text);
    if (text) {
      return Number(text)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        .split('.')[0];
    } else {
      return '0';
    }
  };

  const renderDonor = (data: Activities, idx: number) => {
    const date = new Date(data.datetime);
    const currentDate = new Date();
    const selisih = Math.abs(currentDate.getTime() - date.getTime()) / 3600000;
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
            sx={{ width: 45, height: 45 }}
          ></Avatar>
        ) : (
          <Avatar alt="profile avatar" sx={{ width: 45, height: 45 }}>
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

  return !isLoadJson ? (
    <RootStyle>
      <MHidden width="mdDown">
        <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '25px' }}>
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

          <Box sx={{ flex: 1, paddingLeft: '10px' }}>
            <OwnerName>
              {t('campaign.by')}{' '}
              <span style={{ color: '#A078B6', fontWeight: 600 }}>{DetailData!.by}</span>
            </OwnerName>
            {DetailData?.organization && <OwnerDesc>{DetailData.organization}</OwnerDesc>}
          </Box>
        </Box>

        <Paper sx={{ backgroundColor: '#fff', padding: '15px 20px' }} elevation={2}>
          <AmountValueStyle>
            {`${currencyFormat.format(Number(DetailData?.offline_gained))} `}
            {t('campaign.raised')}
          </AmountValueStyle>
          {/* {DetailData!.offline_gained && DetailData!.offline_gained > 0 && (
            <TextStyle>
              (Inc S${convertToMoneyFormat(DetailData!.offline_gained)} Raised Offline)
            </TextStyle>
          )} */}
          <TextStyle>
            {t('campaign.of')}
            {` ${currencyFormat.format(Number(DetailData?.goal))} `}
          </TextStyle>

          <BorderLinearProgress variant="determinate" value={progressPercent} />

          <TextStyle>from {convertToMoneyFormat(toInteger(DetailData!.givers))} Givers</TextStyle>

          <Divider sx={{ margin: '15px 0' }} />

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
            Donations will go to <strong>{DetailData?.organization}</strong> via{' '}
            <strong>Tmra</strong>
          </TextStyle>
        </Paper>
        <RouterLink
          href={`/org/${router.query.organizationUsername}/campaign/${router.query.campaignId}/amount`}
          passHref
        >
          <DonateButtonStyle fullWidth={true} variant="contained">
            {t('campaign.please_donate_btn')}
          </DonateButtonStyle>
        </RouterLink>
        <ShareButtonStyle onClick={handleShareBtnPress} fullWidth={true} variant="contained">
          {t('campaign.share_campaign_btn')}
        </ShareButtonStyle>
      </MHidden>

      {/* <Paper sx={{ backgroundColor: '#fff', marginTop: '20px', padding: '20px' }} elevation={2}>
        {cmpgActivities?.slice(0, 5).map(renderDonor)}

        <TextStyle sx={{ paddingTop: '5px' }}>
          <strong>+ {cmpgActivities && cmpgActivities.length} givers</strong> have donated to this
          campaign
        </TextStyle>  
      </Paper> */}

      <Paper
        sx={{ backgroundColor: '#fff', marginTop: '20px', padding: '20px 20px 10px' }}
        elevation={2}
      >
        <TextStyle sx={{ color: '#000', fontSize: '16px' }}>{t('campaign.fundraiser')}</TextStyle>

        <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px 0' }}>
          {DetailData?.favicon ? (
            <Avatar
              src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${DetailData?.favicon}`}
              alt="profile avatar"
              sx={{ width: 45, height: 45 }}
            ></Avatar>
          ) : (
            <Avatar alt="profile avatar" sx={{ width: 45, height: 45 }}>
              {DetailData !== undefined && DetailData.by.charAt(0)}
            </Avatar>
          )}
          <Box sx={{ flex: 1, paddingLeft: '10px' }}>
            <OwnerName>
              {t('campaign.by')}{' '}
              <span style={{ color: '#A078B6', fontWeight: 600, textTransform: 'uppercase' }}>
                {DetailData?.by}
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
            <strong>{t('campaign.send_message_btn')}</strong>
          </TextStyle>

          <ChevronRight sx={{ color: '#666' }} />
        </Button>
      </Paper>
    </RootStyle>
  ) : (
    <div />
  );
}
