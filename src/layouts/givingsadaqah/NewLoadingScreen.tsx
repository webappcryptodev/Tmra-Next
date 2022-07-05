// material
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
//
// import Logo from '@components/Logo';
import Page from '@components/Page';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
// import config from '@configuration';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function NewLoadingScreen({ organization, imgLogo }) {
  const { t } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const LogoComponent = () => {
    // giving sadaqah
    const orgId = organization?.id || organization?._id;
    if (orgId === '62414373cf00cca3a830814a' && imgLogo) {
      return (
        <Box
          component="img"
          src={
            imgLogo ??
            `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/GS-Logo_OriginalAdjustNoOrg-120y.png`
          }
          sx={{ width: 80, height: 40 }}
        />
      );
    } else if (orgId === '61b4794cfe52d41f557f1acc' && imgLogo) {
      return (
        <Box
          component="img"
          src={imgLogo ?? '/static/logo-ommar.png'}
          sx={{ width: 90, height: 30 }}
        />
      );
    }
    // return <Logo sx={{ width: 64, height: 64 }} />;

    return (
      <Box
        component="img"
        src={
          imgLogo ??
          `${publicRuntimeConfig.bunny.cdn.urlMedia}/${publicRuntimeConfig.bunny.storage.prefix}organization-cms/62414373cf00cca3a830814a/GS-Logo_OriginalAdjustNoOrg-120y.png`
        }
        sx={{ width: 80, height: 40 }}
      />
    );
  };

  return (
    <RootStyle title={`${t('app.name')} - ${t('app.subtitle')}`} id="move_top">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <LogoComponent />
      </motion.div>

      <Box
        component={motion.div}
        animate={{
          scale: [1.2, 1, 1, 1.2, 1.2],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: '25%',
          position: 'absolute',
          border: theme => `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{
          ease: 'linear',
          duration: 3.2,
          repeat: Infinity,
        }}
        sx={{
          width: 120,
          height: 120,
          borderRadius: '25%',
          position: 'absolute',
          border: theme => `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />
    </RootStyle>
  );
}
