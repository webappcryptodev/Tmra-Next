import React from 'react';
import { MotionInView, varFadeInUp, varWrapEnter, varFadeInRight } from '@components/animate';
import Page from '@components/Page';
// components
import { Grid, Typography, Stack, Box, Button, MenuItem, Theme, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { Controller, useForm } from 'react-hook-form';
import { CampaignInfo, Appearance } from '@modules/fundraising/Campaign';
import { OrganizationInfoFragment } from '@generated/graphql';
import { getLandingMainPaths } from '@routes/paths';
import { motion } from 'framer-motion';
import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import { useTheme } from '@mui/material';
import { textFieldClasses } from '@mui/material/TextField';

import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import Iconify from '@components/Iconify';
import UploadMultiFile, { CustomFile } from '@components/upload/UploadMultiFile';

// ----------------------------------------------------------------------

export interface NewContactValues {
  name: string;
  location: string;
  suggestion: string;
  images: CustomFile[];
}

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
  },
  paddingBottom: theme.spacing(4),
}));

const Input = styled('input')({
  display: 'none',
});

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

const CssTextField = styled(TextField)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const accentColor = getAccentColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      [`&.${textFieldClasses.root}`]: {
        backgroundColor: theme?.palette.common.white,
        '& label.Mui-focused': {
          // color: '#3fd6eb',
          color: color,
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            // borderColor: '#3fd6eb',
            // color: '#3fd6eb',
            borderColor: color,
            color: color,
          },
        },
      },
    };
  },
);

const countries = [
  { label: 'Indonesia', value: 'indonesia' },
  { label: 'Singapore', value: 'singapore' },
  { label: 'Kenya', value: 'kenya' },
  { label: 'Madagascar', value: 'madagascar' },
];

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export default function IqamGlobalContactContent({
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
  const [country, setCountry] = React.useState('');

  const { handleSubmit, control, reset, setValue, getValues } = useForm<NewContactValues>({
    defaultValues: {
      name: '',
      location: '',
      suggestion: '',
      images: [],
    },
  });
  const onSubmit = async (data: any) => {
    console.log('contact data:', data);
  };
  const handleDrop = React.useCallback<(acceptedFiles: File[]) => void>(
    acceptedFiles => {
      const newImages = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );
      setValue('images', newImages);
      console.debug('images=', newImages);
    },
    [setValue],
  );
  const handleRemoveAll = () => {
    setValue('images', []);
    console.debug('images=', []);
  };
  const handleRemove = (file: File | string) => {
    const filteredItems = getValues('images').filter(_file => _file !== file);
    setValue('images', filteredItems);
    console.debug('images=', filteredItems);
  };

  return (
    <RootStyle
      title={`Ommar | Contact Us`}
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
                Connect with Us
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h4"
                sx={{
                  color: 'common.black',
                  fontWeight: 'fontWeightMedium',
                }}
              >
                Stay close and share your suggestions with us. Our specialized team will make sure
                to answer all your questions
              </Typography>
            </motion.div>
          </HeroContentStyle>
        </Container>
      </HeroRootStyle>
      <Container maxWidth="lg" sx={{ pt: 3 }} id="thumbnail_cover">
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box marginBottom={3.75}>
                  <Iconify
                    icon="heroicons-outline:mail-open"
                    width={40}
                    height={40}
                    color={getAccentColor(appearance)}
                  />
                </Box>
                <Typography variant="h6">EMAIL</Typography>
                <Typography
                  variant="body1"
                  component="a"
                  href="mailto://pro@iqam.com.sa"
                  sx={{ textDecoration: 'none', color: 'common.black' }}
                >
                  pro@iqam.com.sa
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box marginBottom={3.75}>
                  <Iconify
                    icon="bx:headphone"
                    width={40}
                    height={40}
                    color={getAccentColor(appearance)}
                  />
                </Box>
                <Typography variant="h6">PHONE NUMBER</Typography>
                <Typography
                  variant="body1"
                  component="a"
                  href="tel://+973 3991 3322 "
                  sx={{ textDecoration: 'none', color: 'common.black' }}
                >
                  +973 3991 3322
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box marginBottom={3.75}>
                  <Iconify
                    icon="eva:pin-outline"
                    width={40}
                    height={40}
                    color={getAccentColor(appearance)}
                  />
                </Box>
                <Typography variant="h6">ADDRESS</Typography>
                {/* <Typography
                  variant="body1"
                  component="a"
                  href="tel://00973 3991 3322 "
                  sx={{ textDecoration: 'none', color: 'common.black' }}
                >
                  00973 3991 3322
                </Typography> */}
              </Box>
            </Grid>
          </Grid>
        </MotionInView>
      </Container>
      <Container maxWidth="lg" sx={{ pt: 3 }} id="thumbnail_cover">
        <MotionInView variants={varFadeInUp}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={3}
              marginY={4}
              padding={2}
              direction="column"
              sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}
            >
              <Typography variant="h6">Contact Us</Typography>
              <CssTextField
                appearance={appearance}
                name="name"
                label="Your Fullname"
                variant="outlined"
              />
              <CssTextField
                appearance={appearance}
                name="email"
                label="Your Email"
                variant="outlined"
              />
              <CssTextField
                appearance={appearance}
                name="suggestion"
                label="How we can help you"
                variant="outlined"
                multiline
                rows={5}
              />
              <Controller
                name="images"
                control={control}
                render={({ field, fieldState }) => (
                  <UploadMultiFile
                    showPreview={false}
                    maxSize={3145728}
                    accept="image/*"
                    files={field.value}
                    onDrop={handleDrop}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                    error={Boolean(fieldState.invalid && fieldState.error)}
                  />
                )}
              />
              <Button
                type="submit"
                sx={{
                  backgroundColor: getButtonColor(appearance),
                  color: 'common.white',
                  '&:hover': {
                    backgroundColor: getButtonColor(appearance),
                  },
                }}
              >
                Start A Discussion
              </Button>
            </Stack>
          </form>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
