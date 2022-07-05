/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  varFadeInRight,
  varFadeInUp,
  varWrapEnter,
  varFadeInDown,
  MotionInView,
} from '@components/animate';
import Page from '@components/Page';
// components
import IqamLayout from '@layouts/iqamglobal';
import { Grid, Typography, Box, Button, Modal } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { CampaignInfo, Appearance } from '@modules/fundraising/Campaign';
import { OrganizationInfoFragment } from '@generated/graphql';
import { getLandingMainPaths } from '@routes/paths';
import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import { useTheme } from '@mui/material';

import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import Iconify from '@components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
  },
  paddingBottom: theme.spacing(4),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));
const HeroRootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg)',
  position: 'relative',
  height: 400,
  [theme.breakpoints.up('md')]: {
    padding: 0,
  },
}));

const HeroContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

const ButtonPlayStyle = styled(Button)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translate(0, -50%)',
  borderRadius: '50%',
  width: 120,
  height: 120,
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ['&:hover']: {
    backgroundColor: theme.palette.common.white,
  },
}));

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const dummyText = [
  {
    title: 'Title of explain text',
    desc: 'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.',
  },
];

export default function IqamGlobalTermsContent({
  campaigns,
  organization,
  appearance,
}: {
  campaigns?: CampaignInfo[];
  organization?: OrganizationInfoFragment | null;
  appearance?: Appearance | null;
}) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isOpenModal, setOpenModal] = React.useState(false);

  return (
    <RootStyle
      title={`Ommar | Privacy Policy`}
      id="move_top"
      sx={{ backgroundColor: '#FCFCFC' }}
      favicon={
        organization?.favicon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organization?.favicon}`
          : null
      }
    >
      <HeroRootStyle
        initial="initial"
        animate="animate"
        variants={varWrapEnter}
        sx={{
          backgroundImage: `url(${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}/organization-cms/61b4794cfe52d41f557f1acc/slider-01-1214006594212724383.png)`,
          height: 400,
        }}
        id="hero_content"
      >
        <Box
          sx={{
            backgroundColor: '#112f54',
            position: 'absolute',
            left: 0,
            top: 0,
            opacity: 0.5,
            width: '100%',
            height: '100%',
          }}
        ></Box>
        <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
          <HeroContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h1"
                sx={{
                  color: 'common.black',
                  fontWeight: 'fontWeightMedium',
                }}
              >
                Privacy Policy
              </Typography>
            </motion.div>
          </HeroContentStyle>
        </Container>
      </HeroRootStyle>
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <MotionInView variants={varFadeInUp}>
          <Box marginY={4}>
            <Typography variant="h4">Privacy Policy</Typography>
          </Box>
          <Typography variant="h6" component="p" gutterBottom sx={{ fontWeight: 400 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae itaque voluptatem
            quos amet rem eveniet obcaecati fugiat molestias minima beatae ea sed, saepe est
            praesentium perspiciatis rerum at hic autem quia aliquid velit accusantium veritatis!
            Praesentium eum dolores quam earum consequatur illum suscipit temporibus, qui vel. Earum
            corrupti assumenda quia fugit consequatur. Recusandae alias, porro accusamus placeat
            consequuntur error omnis itaque, eligendi minus consequatur illo quisquam possimus
            voluptas ad sint impedit. Maxime modi, officiis obcaecati deserunt esse sit pariatur ex
            reiciendis, dolore architecto voluptates. Quas voluptas minus illo adipisci autem
            molestiae debitis, in laudantium atque qui voluptatibus quibusdam eaque facere.
          </Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="lg" sx={{ pt: 3, mb: 4 }}>
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={2}>
            {Array.from(Array(6)).map((x, key) => (
              <Grid item md={6} key={key}>
                <Typography component="p" variant="body1">
                  <Typography
                    component="span"
                    sx={{ marginRight: 0.5, color: getButtonColor(appearance) }}
                  >{`Title of explain text ${key + 1}`}</Typography>
                  Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere
                  aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis
                  voluptates nihil accusantium doloribus eaque debitis.
                </Typography>
              </Grid>
            ))}
          </Grid>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
