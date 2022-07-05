/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { varFadeInRight, varFadeInUp, varWrapEnter, varFadeInDown } from '@components/animate';
import Page from '@components/Page';
// components
import IqamLayout from '@layouts/iqamglobal';
import { Grid, Typography, Box, Button, Modal } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { CampaignInfo } from '@modules/fundraising/Campaign';
import { GetOrganizationAppearanceQuery, OrganizationInfoFragment } from '@generated/graphql';
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

export default function IqamGlobalWhoAreWeContent({
  campaigns,
  organization,
  appearance,
}: {
  campaigns?: CampaignInfo[];
  organization?: OrganizationInfoFragment | null;
  appearance?: GetOrganizationAppearanceQuery | null;
}) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isOpenModal, setOpenModal] = React.useState(false);

  return (
    <RootStyle
      title={`Ommar | About Us`}
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
                Who Are We
              </Typography>
            </motion.div>
          </HeroContentStyle>
        </Container>
      </HeroRootStyle>
      <HeroRootStyle
        animate="animate"
        variants={varWrapEnter}
        sx={{
          backgroundImage: `url(${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}/organization-cms/61b4794cfe52d41f557f1acc/OurVision-Background214719232.jpeg)`,
          height: '100%',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: 'relative', height: '100%', paddingY: theme.spacing(11) }}
        >
          <motion.div variants={varFadeInRight}>
            <Box marginBottom={theme.spacing(7.5)}>
              <Typography
                variant="h3"
                sx={{
                  color: '#112f54',
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#112f54', mt: theme.spacing(4.5), fontWeight: 600 }}
              >
                We aspire through our vision to be the largest leading company in the field of
                mosque development in the world.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  color: '#112f54',
                }}
              >
                The Quality
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#112f54', mt: theme.spacing(4.5), fontWeight: 600 }}
              >
                The philosophy of beauty and quality is embedded in our engineering designs and the
                latest building and construction techniques, adopting the highest standards of
                quality and safety during project implementation to completion.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </HeroRootStyle>
      <HeroRootStyle
        animate="animate"
        variants={varWrapEnter}
        sx={{
          backgroundImage: `url(${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}/organization-cms/61b4794cfe52d41f557f1acc/slider-01-1214006594212724383.png)`,
          height: '100%',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: 'relative', height: '100%', paddingY: theme.spacing(11) }}
        >
          <motion.div variants={varFadeInRight}>
            <Grid container>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <Box marginBottom={theme.spacing(7.5)}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#112f54',
                    }}
                  >
                    Our Societies
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: '#112f54', mt: theme.spacing(4.5), fontWeight: 600 }}
                  >
                    We are working in Iqaam to develop our projects in an integrated manner around
                    the world by providing everything that suits the spirituality of the project
                    users, as it includes the most appropriate facilities. We also implement modern
                    designs to keep pace with the times and what is commensurate with the nature of
                    the project site
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <ButtonPlayStyle onClick={() => setOpenModal(true)}>
              <Iconify icon="akar-icons:play" sx={{ color: '#bf8c4c', width: 40, height: 40 }} />
            </ButtonPlayStyle>
          </motion.div>
        </Container>
      </HeroRootStyle>
      <Modal open={isOpenModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            paddingY: theme.spacing(5),
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              width: '100%',
              textAlign: 'right',
            }}
          >
            <Button
              sx={{
                '&:hover': { backgroundColor: 'transparent' },
              }}
              onClick={() => setOpenModal(false)}
            >
              <Iconify
                icon="ci:close-small"
                sx={{ width: 44, height: 44, color: theme.palette.common.white }}
              />
            </Button>
          </Box>
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              verticalAlign: 'middle',
              maxWidth: 1020,
              width: '100%',
            }}
          >
            <Box sx={{ paddingBottom: '56.25%', position: 'relative', width: '100%' }}>
              <iframe
                style={{
                  width: '100%',
                  boxShadow: '0 0 8px rgb(0 0 0 / 60%)',
                  background: theme.palette.common.black,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                }}
                src="https://www.youtube.com/embed/5orXJGlm9bQ"
                frameBorder="0"
                allowFullScreen={false}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </RootStyle>
  );
}
