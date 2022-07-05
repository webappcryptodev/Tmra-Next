import { CheckCircleRounded, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button, Card, CardContent, CardMedia } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// material
import { styled } from '@mui/material/styles';
import React, { CSSProperties, MouseEventHandler, useEffect, useRef, useState } from 'react';
// components
// hooks
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
// ----------------------------------------------------------------------
import defaultSimiliar from './json/default/campaign_similar.json';

// ----------------------------------------------------------------------

type DataSimilarProps = {
  img: any;
  is_verify: boolean;
  title: string;
  desc: string;
  sender: string;
  value: number;
  target: number;
};

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingBottom: 80,
  paddingTop: 50,
  [theme.breakpoints.down('lg')]: {
    margin: '0 20px',
  },
}));

const HeaderStyle = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px 20px',
}));
const TitleStyle = styled('div')(() => ({
  fontSize: 24,
  fontWeight: 400,
  lineHeight: '32px',
  color: 'rgba(51, 51, 51, 0.87)',
}));
const RefreshButton = styled(Button)(() => ({
  color: '#A078B6',
  backgroundColor: 'transparent',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

const CampaignSimiliarStyle = styled('div')(({ theme }) => ({
  width: '25%',
  boxSizing: 'border-box',
  display: 'inline-block',
  padding: '2px 7px 27px',
  verticalAlign: 'top',
  [theme.breakpoints.down('lg')]: {
    width: '45%',
  },
  [theme.breakpoints.down('md')]: {
    width: '85%',
  },
}));
const CampaignSimiliarContentStyle = styled(CardContent)(() => ({
  whiteSpace: 'normal',
  padding: '10px 20px 20px',
  height: 160,
  overflow: 'hidden',
}));
const CampaignSimiliarVerifyStyle = styled('span')(() => ({
  color: '#74ae3b',
  fontSize: 14,
  fontWeight: 400,
  paddingTop: 10,
  display: 'flex',
  alignItems: 'center',
}));
const CampaignSimiliarTitleStyle = styled('div')(() => ({
  fontSize: 18,
  fontWeight: 600,
  color: '#333',
  marginTop: 5,
}));
const CampaignSimiliarDescStyle = styled('div')(() => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  color: '#333',
  paddingTop: 5,
  paddingBottom: 10,
}));
const CampaignSimiliarSenderStyle = styled('div')(() => ({
  fontSize: 14,
  fontWeight: 600,
  lineHeight: '24px',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  color: '#999',
  position: 'relative',
}));
const CampaignSimiliarAmountStyle = styled('div')(() => ({
  fontSize: 12,
  color: '#999',
  textTransform: 'uppercase',
}));

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 3,
  borderRadius: 5,
  marginTop: 10,
  marginBottom: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundImage: 'linear-gradient(267deg, #A078B6, #79A1D4)',
  },
}));

const NavigationButton = styled('div')(() => ({
  position: 'absolute',
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  display: 'flex',
  color: '#000',
  zIndex: 10,
}));

// ----------------------------------------------------------------------

function SampleNextArrow(props: { sx?: CSSProperties; onClick?: MouseEventHandler }) {
  const { sx, onClick } = props;

  return (
    <NavigationButton sx={{ ...sx, right: '-57px' }} onClick={onClick}>
      <ChevronRight
        color="inherit"
        sx={{ fontSize: '37px', padding: '3.5px', backgroundColor: '#fff', borderRadius: '50%' }}
      />
    </NavigationButton>
  );
}

function SamplePrevArrow(props: { sx?: CSSProperties; onClick?: MouseEventHandler }) {
  const { sx, onClick } = props;
  return (
    <NavigationButton sx={{ ...sx, left: '-57px' }} onClick={onClick}>
      <ChevronLeft
        color="inherit"
        sx={{ fontSize: '37px', padding: '3.5px', backgroundColor: '#fff', borderRadius: '50%' }}
      />
    </NavigationButton>
  );
}

export default function CampaignSimilar() {
  const { t } = useTranslation();
  const carouselRef = useRef<Slider>(null);
  const [similiar, setSimiliar] = useState(defaultSimiliar);
  const [isLoadJson, setLoadJson] = useState(true);
  const getLastItem = (thePath: any) => thePath.substring(thePath.lastIndexOf('/') + 1);
  useEffect(() => {}, []);

  const renderSimilarCampaign = (data: DataSimilarProps, idx: number) => {
    return (
      <CampaignSimiliarStyle key={idx}>
        <Card sx={{ backgroundColor: '#fff', borderRadius: '12px' }}>
          <CardMedia component="img" alt="green iguana" height="180" image={data.img} />
          <CampaignSimiliarContentStyle>
            <CampaignSimiliarVerifyStyle>
              <CheckCircleRounded sx={{ width: 16, height: 16, marginRight: '5px' }} />
              {t('campaign.verify')}
            </CampaignSimiliarVerifyStyle>
            <CampaignSimiliarTitleStyle>{data.title}</CampaignSimiliarTitleStyle>
            <CampaignSimiliarDescStyle>{data.desc}</CampaignSimiliarDescStyle>
          </CampaignSimiliarContentStyle>
          <CampaignSimiliarContentStyle style={{ height: 'auto' }}>
            <CampaignSimiliarSenderStyle>
              {t('campaign.by')} {data.sender}
            </CampaignSimiliarSenderStyle>

            <BorderLinearProgress variant="determinate" value={(data.value / data.target) * 100} />

            <CampaignSimiliarAmountStyle>
              <span style={{ color: '#000' }}>
                {t('campaign.raised')} {data.value}
              </span>{' '}
              {t('campaign.of')} {data.target}
            </CampaignSimiliarAmountStyle>
          </CampaignSimiliarContentStyle>
        </Card>
      </CampaignSimiliarStyle>
    );
  };

  return !isLoadJson ? (
    <RootStyle>
      <HeaderStyle>
        <TitleStyle>{t('campaign.similar_title')}</TitleStyle>

        <RefreshButton variant="text">{t('campaign.similar_see_more')}</RefreshButton>
      </HeaderStyle>

      <Slider
        slidesToShow={4}
        responsive={[
          { breakpoint: 1199.95, settings: { swipe: true, slidesToShow: 2 } },
          { breakpoint: 899.95, settings: { swipe: true, slidesToShow: 1, arrows: false } },
        ]}
        infinite={false}
        swipe={false}
        ref={carouselRef}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        {similiar.map(renderSimilarCampaign)}
      </Slider>
    </RootStyle>
  ) : (
    <div />
  );
}
