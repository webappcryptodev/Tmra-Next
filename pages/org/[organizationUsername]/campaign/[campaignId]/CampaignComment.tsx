import RefreshIcon from '@mui/icons-material/Refresh';
import { Avatar, Box, Button } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
// hooks
import { useTranslation } from 'react-i18next';
import DefaultComment from './json/default/campaign_comment.json';
import config from '@configuration';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

type CommentProps = {
  text: string;
  img: string | null;
  sender: string;
  recevier: string;
};

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingBottom: 50,
  paddingTop: 50,
  [theme.breakpoints.down('lg')]: {
    margin: '0 20px',
  },
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

const CommentContainerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    flexWrap: 'wrap',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));
const CommentContentStyle = styled('div')(({ theme }) => ({
  flex: 1,
  marginTop: 20,
  [theme.breakpoints.down('lg')]: {
    flex: 'none',
    width: '50%',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
const CommentStyle = styled('div')(() => ({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  borderLeftStyle: 'solid',
  borderLeftWidth: 2,
  color: '#666',
  marginBottom: 15,
  paddingLeft: 20,
  paddingRight: 10,
  wordWrap: 'break-word',
}));
const CommentDescStyle = styled('div')(() => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  paddingRight: 10,
  flex: 1,
  color: '#464646',
  marginLeft: 10,
}));

// ----------------------------------------------------------------------

type comment = {
  avatar: string;
  author: string;
  content: string;
  orgName: string | undefined;
};
type unionComment = {
  comment: comment[] | undefined;
  orgName: string | undefined;
};

export default function CampaignComment({ comment, orgName }: unionComment) {
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
  const { t } = useTranslation();
  const [isLoadJson, setLoadJson] = useState(true);
  const getLastItem = (thePath: any) => thePath.substring(thePath.lastIndexOf('/') + 1);
  console.log('comment', comment);
  useEffect(() => {
    // async function getData() {
    //   await Promise.all([import(`./json/${getLastItem(pathname)}/campaign_comment.json`)])
    //     .then(res => {
    //       setComment(res[0].default);
    //       setLoadJson(false);
    //     })
    //     .catch(_ => console.log('ERROR'));
    // }
    // getData();
  }, []);

  // console.log(comment);

  const renderComment = (data: comment, idx: number) => {
    return (
      <CommentContentStyle key={idx}>
        <CommentStyle>&quot;{data.content}&quot;</CommentStyle>
        <Box sx={{ display: 'flex', paddingLeft: '20px', paddingRight: '10px' }}>
          {data.avatar ? (
            <Avatar
              src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${data.avatar}`}
              alt="profile avatar"
              sx={{ width: 28, height: 28 }}
            ></Avatar>
          ) : (
            <Avatar alt="profile avatar" sx={{ width: 28, height: 28 }}>
              {data?.author.charAt(0)}
            </Avatar>
          )}

          <CommentDescStyle>
            <strong style={{ color: '#A078B6' }}>{data.author}</strong>{' '}
            {t('campaign.comment_donate_by')}{' '}
            <strong style={{ color: '#A078B6' }}>{orgName}</strong>
          </CommentDescStyle>
        </Box>
      </CommentContentStyle>
    );
  };

  return isLoadJson ? (
    <RootStyle>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <TitleStyle>
          {/* #WhyIGave */}
          {t('campaign.comment_title')}
        </TitleStyle>

        {/* <RefreshButton variant="text" startIcon={<RefreshIcon />}> */}
        {/* Refresh */}
        {/* {t('campaign.comment_refresh')} */}
        {/* </RefreshButton> */}
      </Box>

      <CommentContainerStyle>
        {comment && comment.slice(0, 4).map(renderComment)}
      </CommentContainerStyle>
    </RootStyle>
  ) : (
    <div />
  );
}
