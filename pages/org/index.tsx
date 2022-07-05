// React
import React, { useState, useEffect } from 'react';
// Compoenent
import CampaignList from '@components/fundraising/CampaignList';
import Page from '@components/Page';
import MainLayout from '@layouts/main';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { app } from '@redux/slices/auth/realm';
// Material
import {
  Container,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Stack,
  Pagination,
} from '@mui/material';
import { motion } from 'framer-motion';
import { varFadeInRight, varWrapEnter } from '@components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const HeroRootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const HeroContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function OrganizationCampaignList() {
  const { t } = useTranslation();
  const [valueItems, setValueItems] = useState('');
  const [valueFilter, setValueFilter] = useState([]);
  const [valueCampaigns, setValueCampaigns] = useState([]);
  const [valueFilteredCampaigns, setValueFilteredCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentCampaign =
    valueFilteredCampaigns.length > 0
      ? valueFilteredCampaigns.slice(indexOfFirstPost, indexOfLastPost)
      : valueCampaigns.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setIsLoading(true);
    app.currentUser?.functions
      .callFunction('getAllCampaign', { category: '' })
      .then(res => {
        const resData = res.filter((it: { campaignType: null }) => it.campaignType !== null);
        setValueCampaigns(resData);

        const allCampaignsTypes = resData.map((it: { campaignType: string }) => it.campaignType);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const uniqueCampaignsTypes = allCampaignsTypes.reduce((a: any[], b: any) => {
          if (a.indexOf(b) < 0) a.push(b);

          return a;
        }, []);

        setValueFilter(uniqueCampaignsTypes);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const handleChangeSelect = async (event: SelectChangeEvent) => {
    const valueFilterDua = event.target.value as string;

    setValueItems(event.target.value as string);

    const resDataCoba = await valueCampaigns.filter((it: { campaignType: string }) =>
      it.campaignType.includes(valueFilterDua),
    );

    setValueFilteredCampaigns(resDataCoba);

    setCurrentPage(1);
  };
  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`${t('app.name')} - ${t('app.subtitle')}`} id="move_top">
        <HeroRootStyle
          initial="initial"
          animate="animate"
          variants={varWrapEnter}
          sx={{
            backgroundImage: 'url(/static/overlay.svg)',
          }}
          id="hero_content"
        >
          <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
            <HeroContentStyle>
              <motion.div variants={varFadeInRight}>
                <Typography
                  variant="h1"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 'fontWeightMedium',
                  }}
                >
                  Organizations Campaign List
                </Typography>
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 5,
                    color: 'common.white',
                    fontWeight: 'fontWeightMedium',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </motion.div>
            </HeroContentStyle>
          </Container>
        </HeroRootStyle>
        <Container maxWidth="lg" sx={{ py: 10 }} id="select_filter_campaign">
          <FormControl sx={{ minWidth: 80, mb: 6 }}>
            <InputLabel id="select-label">Filter</InputLabel>
            <Select
              labelId="select-label"
              id="select-label"
              value={valueItems}
              onChange={handleChangeSelect}
              label="Filter"
              variant="outlined"
            >
              {valueFilter.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <CampaignList
            fetching={isLoading}
            campaigns={currentCampaign!.map(it => it!)}
            donateArea="hidden"
            hrefFunc={campaign => {
              return `/org/${campaign.organizationId!}/campaign/${campaign._id!}`;
            }}
          />

          <Stack
            spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Pagination
              size="large"
              color="primary"
              count={
                valueFilteredCampaigns.length
                  ? Math.ceil(valueFilteredCampaigns.length / postPerPage)
                  : Math.ceil(valueCampaigns.length / postPerPage)
              }
              page={currentPage}
              onChange={handleChangePagination}
              sx={{ mt: 6 }}
            />
          </Stack>
        </Container>
      </RootStyle>
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
    },
  };
}
