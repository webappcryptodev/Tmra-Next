/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LoadingScreen from '@components/LoadingScreen';
import Page from '@components/Page';
import IqamGlobalCampaignDetails from '@components/_external-pages/whitelabel/iqamglobal/IqamGlobalCampaignDetails';
//
import { client } from '@contexts/RealmUrqlContext';
import {
  FindOneOrganizationByIdDocument,
  FindOneOrganizationByIdQuery,
  FindOneOrganizationByIdQueryVariables,
  FindOneOrganizationByUsernameDocument,
  FindOneOrganizationByUsernameQuery,
  FindOneOrganizationByUsernameQueryVariables,
  GetOrganizationAppearanceDocument,
  GetOrganizationAppearanceQuery,
  GetOrganizationAppearanceQueryVariables,
  OrganizationInfoFragment,
} from '@generated/graphql';
// layout
import MainLayout from '@layouts/main';
import WhitelabelLayout from '@layouts/whitelabel';
// icons
import { Close, Facebook, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';
import { Alert, Box, Button, Container, IconButton, Modal, styled } from '@mui/material';
import { app } from '@redux/slices/auth/realm';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// hooks
import { useTranslation } from 'react-i18next';
import RuntimeConfigs from '@utils/runtime-configs';
import { CombinedError, gql, useQuery } from 'urql';
// PageComponents
import CampaignComment from '../../../../pages/org/[organizationUsername]/campaign/[campaignId]/CampaignComment';
import CampaignContent from '../../../../pages/org/[organizationUsername]/campaign/[campaignId]/CampaignContent';
import CampaignSide from '../../../../pages/org/[organizationUsername]/campaign/[campaignId]/CampaignSide';
import CampaignSimilar from '../../../../pages/org/[organizationUsername]/campaign/[campaignId]/CampaignSimilar';
import NewLoadingScreen from '@layouts/whitelabel/NewLoadingScreen';

import GivingSadaqahLayout from '@layouts/givingsadaqah';
import GivingSadaqahCampaignDetail from '@components/_external-pages/whitelabel/giving-sadaqah/GivingSadaqahCampaignDetail';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const FindOneCampaignByCampaignIdDocument = gql`
  query findOneMCampaignsByOrganizationId($campaignId: ObjectId!) {
    campaign(query: { _id: $campaignId }) {
      _id
      organizationId
      title
      createdAt
      updatedAt
      creatorUserId
      updaterUserId
      description
      images
      coverImage
      coverImageIndex
      islamCharityType
      methods
      currencyCode
      amountTarget
      amountProgress
      campaignDescription
      campaignImage
      campaignName
      campaignType
      organizationId
      ownerUserId
      totalDonation
      donorReached
    }
    campaignActivities(query: { campaignId: $campaignId }, sortBy: DATETIME_DESC) {
      datetime
      avatar
      author
      content
      amount
    }
    campaignNotificationReports(query: { campaignId: $campaignId }) {
      title
      description
      campaignPhoto
    }
  }
`;

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

const ModalContainerStyle = styled('div')(() => ({
  padding: '10px 30px 20px',
  backgroundColor: '#fff',
  margin: '0 auto',
  maxWidth: 400,
  borderRadius: 8,
  position: 'relative',
}));
const ModalTitleStyle = styled('div')(() => ({
  fontSize: 18,
  fontWeight: 600,
  paddingTop: 10,
  paddingBottom: 10,
  color: '#666',
  textAlign: 'center',
}));
const ModalDescStyle = styled('div')(() => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  color: '#666',
  textAlign: 'center',
}));

const FBButtonStyle = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#355B9F',
  boxShadow: 'none',
  margin: '10px 0 5px',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#355B9F',
  },
}));
const LinkedinButtonStyle = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#0077b5',
  boxShadow: 'none',
  margin: '5px 0',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#0077b5',
  },
}));
const TwitterButtonStyle = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#1dcaff',
  boxShadow: 'none',
  margin: '5px 0',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#1dcaff',
  },
}));
const WhatsAppButtonStyle = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#7ed321',
  boxShadow: 'none',
  margin: '5px 0 10px',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#7ed321',
  },
}));
const DownloadButtonStyle = styled(Button)(() => ({
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

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export interface OrganizationHomePageProps {
  organizationRes: { data: OrganizationInfoFragment | null; error: string | null };
  appearanceRes: { data: GetOrganizationAppearanceQuery | null; error: string | null };
  statusCode: number;
}

type CampaignContents = {
  campaignImage: [];
};
type dataImg = {
  image: [] | undefined;
};
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
type comment = {
  avatar: string;
  author: string;
  content: string;
  orgName: string | undefined;
};

// ----------------------------------------------------------------------

export default function CampaignDetailsWhitelabel({
  organizationRes,
  appearanceRes,
}: OrganizationHomePageProps) {
  const { t } = useTranslation();
  const router = useRouter();
  // const paths = getLandingMainPaths();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };
  const [creator, setCreator] = useState<{
    name: string;
    organizationName: string;
    favicon: string;
    defaultCurrency: string;
    baseSumAmount: string;
    donorsCount: string;
    listDonors: [];
  } | null>(null);
  const topDonation: any = [];
  const comment: comment[] = [];
  const [sortedTopDonor, setSortedTopDonor] = useState<TopDonors[] | null>(null);
  const [comments, setComments] = useState<comment[] | undefined>(undefined);
  const [pushHandle, setPushHandle] = useState(false);
  const image: CampaignContents = { campaignImage: [] };

  const [campaignRes, reexecuteQuery] = useQuery<{
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
  }>({
    query: FindOneCampaignByCampaignIdDocument,
    variables: {
      campaignId: router.query.campaignId,
    },
  });
  const { data, fetching, error } = campaignRes;
  useEffect(() => {
    if (fetching === false && data) {
      (async function fetchCreator() {
        const resp = await app.currentUser?.callFunction('getNonprofitDataDetailCampaign', {
          organizationId: data.campaign.organizationId,
          creatorUserId: data.campaign.creatorUserId,
          campaignId: data.campaign._id,
        });
        console.log('find creator', data.campaign._id);
        console.log('organizationId', data.campaign.organizationId);
        if (resp) {
          setCreator(resp);
        }
      })();
      for (let i = 0; i < data.campaignActivities.length; i++) {
        const splitter = data.campaignActivities[i].amount.split(' ');
        topDonation.push({
          amount: parseInt(splitter[0]),
          currency: splitter[1],
          author: data.campaignActivities[i].author,
          content: data.campaignActivities[i].content,
          avatar: data.campaignActivities[i].avatar,
          datetime: data.campaignActivities[i].datetime,
        });
        comment.push({
          author: data.campaignActivities[i].author,
          content: data.campaignActivities[i].content,
          avatar: data.campaignActivities[i].avatar,
          orgName: creator?.organizationName,
        });
      }
      console.log('comment index', comment);
      console.log('top donation', topDonation);
      const sortDonation = topDonation.sort(function (
        a: { amount: number },
        b: { amount: number },
      ) {
        return b.amount - a.amount;
      });
      setSortedTopDonor(sortDonation);
      setComments(comment);
    }
    // }

    setPushHandle(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCreator, data, fetching, setSortedTopDonor, setComments]);

  // const coverUrl = organizationRes.data?.aboutPicture
  //   ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationRes.data?.aboutPicture}?w=640`
  //   : undefined;

  const hasThemeColor = {
    ...organizationRes.data,
    defaultThemeColor: '',
  };

  // implement for some organization username
  if (hasThemeColor.username === 'duniaanakalam') {
    hasThemeColor.defaultThemeColor = 'warning.main';
  } else if (hasThemeColor.username === 'iqamglobal') {
    hasThemeColor.defaultThemeColor = 'error.main';
  }

  const orgUsername = router.query.organizationUsername;
  const orgId = data?.campaign?.organizationId;

  if (fetching === true || creator === null || sortedTopDonor === null) {
    if (
      (orgUsername && orgUsername === 'iqamglobal') ||
      (orgId && orgId === '61b4794cfe52d41f557f1acc')
    ) {
      return (
        <NewLoadingScreen organization={organizationRes?.data} imgLogo={`/static/logo-ommar.png`} />
      );
    }
    return <LoadingScreen />;
  }
  console.log('top donation', topDonation);
  const dataDetail: dataDetail = {
    favicon: creator.favicon,
    title: data?.campaign.title,
    by: creator.name,
    organization: creator.organizationName,
    img: null,
    gained: creator.baseSumAmount,
    offline_gained: data?.campaign.amountProgress,
    goal: data?.campaign.amountTarget,
    givers: creator.donorsCount,
    is_verify: true,
    currency: creator.defaultCurrency,
    description: data?.campaign.description,
    donors: creator.listDonors,
  };
  console.log('data campaign', data);

  if (
    (orgUsername && orgUsername === 'iqamglobal') ||
    (orgId && orgId === '61b4794cfe52d41f557f1acc')
  ) {
    return (
      <IqamGlobalCampaignDetails
        organization={organizationRes.data}
        appearance={appearanceRes.data}
        campaignData={data}
      />
    );
  }

  if (organizationRes?.data?._id === '62414373cf00cca3a830814a') {
    return (
      <GivingSadaqahLayout
        backgroundColor="transparent"
        secondColor="secondary.main"
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
        homeURL="/"
        organization={organizationRes?.data}
      >
        <GivingSadaqahCampaignDetail
          campaignData={data}
          dataDetail={dataDetail}
          appearance={appearanceRes.data?.nonprofitAppearance}
        />
      </GivingSadaqahLayout>
    );
  }

  if (organizationRes.error || appearanceRes.error) {
    return (
      <MainLayout campaignDetails={false}>
        <RootStyle title={`${organizationRes.data?.name} | ${t('app.name')}`} id="move_top">
          {organizationRes.error && (
            <Container maxWidth="lg" sx={{ py: 3 }}>
              <Alert severity="error">Error: {organizationRes.error}</Alert>
            </Container>
          )}
          {appearanceRes.error && (
            <Container maxWidth="lg" sx={{ py: 3 }}>
              <Alert severity="error">Error: {appearanceRes.error}</Alert>
            </Container>
          )}
        </RootStyle>
      </MainLayout>
    );
  }

  return (
    <WhitelabelLayout
      backgroundColor={
        appearanceRes.data?.nonprofitAppearance?.primaryColor
          ? appearanceRes.data?.nonprofitAppearance?.primaryColor
          : 'primary.main'
      }
      secondColor={appearanceRes.data?.nonprofitAppearance?.secondaryColor}
      imgLogoUrl={
        appearanceRes.data?.nonprofitAppearance?.logo &&
        appearanceRes.data?.nonprofitAppearance?.logo != ''
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes.data?.nonprofitAppearance?.logo}`
          : `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organizationRes.data?.favicon}`
      }
    >
      <RootStyle title={data?.campaign.title} id="move_top">
        <Container maxWidth="lg">
          <ContentStyle>
            <CampaignContentStyle>
              <CampaignContent
                dataImg={data?.campaign.images}
                dataDetail={dataDetail}
                cmpgActivities={creator.listDonors}
                topDonations={sortedTopDonor}
                cmpgUpdates={data?.campaignNotificationReports}
                // campaignData={data?.campaign}
                // orgData={creator}
              />
            </CampaignContentStyle>

            <CampaignSideStyle>
              <CampaignSide
                handleShareBtnPress={handleCloseModal}
                dataImg={data?.campaign.images}
                dataDetail={dataDetail}
                cmpgActivities={creator.listDonors}
              />
            </CampaignSideStyle>
          </ContentStyle>

          <CampaignComment orgName={creator?.organizationName} comment={comments} />
          <CampaignSimilar />
        </Container>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <ModalContainerStyle>
              <IconButton
                disableRipple
                onClick={handleCloseModal}
                sx={{
                  right: 0,
                  top: 0,
                  position: 'absolute',
                  '&:hover': { backgroundColor: 'transparent' },
                }}
              >
                <Close color="disabled" />
              </IconButton>

              <ModalTitleStyle>{t('campaign.share_campaign_title')}</ModalTitleStyle>
              <ModalDescStyle>{t('campaign.share_campaign_desc')}</ModalDescStyle>
              <FBButtonStyle fullWidth={true} variant="contained" startIcon={<Facebook />}>
                {t('campaign.share_facebook_btn')}
              </FBButtonStyle>
              <LinkedinButtonStyle fullWidth={true} variant="contained" startIcon={<Twitter />}>
                {t('campaign.share_linkedin_btn')}
              </LinkedinButtonStyle>
              <TwitterButtonStyle fullWidth={true} variant="contained" startIcon={<LinkedIn />}>
                {t('campaign.share_twitter_btn')}
              </TwitterButtonStyle>
              <WhatsAppButtonStyle fullWidth={true} variant="contained" startIcon={<WhatsApp />}>
                {t('campaign.share_whatsapp_btn')}
              </WhatsAppButtonStyle>
              <ModalDescStyle>{t('campaign.print_desc')}</ModalDescStyle>
              <Box
                sx={{
                  height: '170px',
                  backgroundColor: '#ddd',
                  borderRadius: '12px',
                  marginTop: '10px',
                }}
              />
              <DownloadButtonStyle fullWidth={true} variant="contained" startIcon={<WhatsApp />}>
                {t('campaign.share_print_btn')}
              </DownloadButtonStyle>
            </ModalContainerStyle>
          </Box>
        </Modal>
      </RootStyle>
    </WhitelabelLayout>
  );
}

export async function getOrganizationHomePageProps({
  organizationUsername,
  organizationId,
}: {
  organizationUsername?: string;
  organizationId?: string;
}): Promise<OrganizationHomePageProps> {
  let statusCode = 200;
  let organizationData: OrganizationInfoFragment | null = null;
  let organizationError: CombinedError | null = null;
  if (organizationId != null) {
    console.info('Find one organization by ID ', organizationId);
    const res = await client
      .query<FindOneOrganizationByIdQuery, FindOneOrganizationByIdQueryVariables>(
        FindOneOrganizationByIdDocument,
        { id: organizationId },
      )
      .toPromise();
    organizationData = res.data?.organization ?? null;
    organizationError = res.error ?? null;
  } else if (organizationUsername != null) {
    console.info('Find one organization by username ', organizationUsername);
    const res = await client
      .query<FindOneOrganizationByUsernameQuery, FindOneOrganizationByUsernameQueryVariables>(
        FindOneOrganizationByUsernameDocument,
        { username: organizationUsername! },
      )
      .toPromise();
    organizationData = res.data?.organization ?? null;
    organizationError = res.error ?? null;
  } else {
    throw new Error('One of organizationId or organizationUsername is required');
  }
  if (!organizationData) {
    statusCode = 404;
    console.error(
      `Error find one organization by username=${organizationUsername} or id=${organizationId}`,
      organizationError?.message,
      organizationError?.networkError?.message,
    );
  }

  const appearanceRes = await client
    .query<GetOrganizationAppearanceQuery, GetOrganizationAppearanceQueryVariables>(
      GetOrganizationAppearanceDocument,
      {
        _id: organizationData?._id ?? '',
      },
    )
    .toPromise();
  if (appearanceRes.error) {
    statusCode = 500;
    console.error(
      `Error get organization appearance for ${organizationData?._id}: ${appearanceRes.error.message}`,
      appearanceRes.error,
    );
  } else {
    console.debug(
      `Got appearance for ${organizationData?._id}. favicon=${appearanceRes.data?.nonprofitAppearance?.favIcon} mainImageUrl=${appearanceRes.data?.nonprofitAppearance?.mainImageUrl} logo=${appearanceRes.data?.nonprofitAppearance?.logo}`,
    );
  }

  return {
    statusCode,
    organizationRes: {
      data: organizationData,
      error: organizationError?.message ?? null,
    },
    appearanceRes: {
      data: appearanceRes.data ?? null,
      error: appearanceRes.error?.message ?? null,
    },
  };
}
