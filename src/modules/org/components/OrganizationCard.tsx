import { Avatar, Box, Card, CardContent, Grid, Link, Typography } from '@mui/material';
// @mui
import { alpha, styled } from '@mui/material/styles';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import SvgIconStyle from './SvgIconStyle';
import TextMaxLine from './TextMaxLine';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.8),
}));

const CoverImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

interface OrganizationInfo {
  _id?: string | null;
  username?: string | null;
  name?: string | null;
  organizationProfile?: string | null;
  aboutPicture?: string | null;
  favicon?: string | null;
}

type Props = {
  organization: OrganizationInfo;
  index: number;
};

export default function OrganizationCard({ organization, index }: Props) {
  // const { cover, title, view, comment, share, author, createdAt } = post;
  const faviconUrl = `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organization.favicon}?w=128`;
  const coverUrl = `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organization.aboutPicture}?w=640`;
  const title = organization.name;
  const view = '';
  const comment = '';
  const share = '';
  const author = { name: organization.name, avatarUrl: '' };
  const createdAt = new Date();
  // const linkTo = `${PATH_DASHBOARD.blog.root}/post/${paramCase(title)}`;
  const linkTo = `/org/${organization.username}`;

  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  const POST_INFO = [
    // { number: comment, icon: 'eva:message-circle-fill' },
    // { number: view, icon: 'eva:eye-fill' },
    // { number: share, icon: 'eva:share-fill' },
  ];

  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'relative',
            paddingTop: 'calc(100% * 3 / 4)',
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          <SvgIconStyle
            src="https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          />
          <Avatar
            alt={title ?? undefined}
            src={faviconUrl}
            sx={{
              zIndex: 9,
              width: 32,
              height: 32,
              left: 24,
              bottom: -16,
              position: 'absolute',
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />

          {(latestPostLarge || latestPost) && <OverlayStyle />}
          <CoverImgStyle alt={title ?? undefined} src={coverUrl} />
          {/* <Image
            alt={title}
            src={coverUrl}
            sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
          /> */}
        </Box>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              zIndex: 10,
              position: 'absolute',
            }),
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            sx={{
              color: 'text.disabled',
              ...((latestPostLarge || latestPost) && {
                opacity: 0.72,
                color: 'common.white',
              }),
            }}
          >
            {organization.organizationProfile}
          </Typography>

          <Link href={linkTo} color={latestPostLarge || latestPost ? 'common.white' : 'inherit'}>
            <TextMaxLine persistent line={2} variant={latestPostLarge ? 'h5' : 'subtitle2'}>
              {title}
            </TextMaxLine>
          </Link>

          {/* <Stack
            spacing={1}
            direction="row"
            justifyContent="flex-end"
            sx={{
              mt: 3,
              color: 'text.disabled',
              ...((latestPostLarge || latestPost) && {
                opacity: 0.72,
                color: 'common.white',
              }),
            }}
          >
            {POST_INFO.map((info, index) => (
              <TextIconLabel
                key={index}
                icon={<Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />}
                value={fShortenNumber(info.number)}
                sx={{ typography: 'caption' }}
              />
            ))}
          </Stack> */}
        </CardContent>
      </Card>
    </Grid>
  );
}
