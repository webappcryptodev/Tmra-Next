/* eslint-disable @typescript-eslint/no-unused-vars */
// material
// components
import Page from '@components/Page';
import { client } from '@contexts/RealmUrqlContext';
//
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
import MainLayout from '@layouts/main';
import WhitelabelLayout from '@layouts/whitelabel';
import { CampaignInfo } from '@modules/fundraising/Campaign';
import CloseIcon from '@mui/icons-material/Close';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
// Redux
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  addCartItems,
  removeCartData,
  removeCartItems,
  selectCartItems,
} from '@redux/slices/cart/cartSlice';
import { motion } from 'framer-motion';
import { parseInt } from 'lodash';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MotionContainer, varBounceIn } from 'src/components/animate';
import RuntimeConfigs from '@utils/runtime-configs';
import { CombinedError } from 'urql';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const CoverImgStyle = styled('img')(({ theme }) => ({
  width: '100%',
  height: '10rem',
  objectFit: 'cover',
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export interface IPropsCart {
  organizationRes: { data: OrganizationInfoFragment | null; error: string | null };
  appearanceRes: { data: GetOrganizationAppearanceQuery | null; error: string | null };
  statusCode: number;
}

// ----------------------------------------------------------------------

export default function CartWhitelabel({ organizationRes, appearanceRes }: IPropsCart) {
  const { t } = useTranslation();
  const [amountItems, setAmountItems] = useState<{ [key: string]: number }>({});
  const [amountdata, setAmountdata] = useState<CampaignInfo[] | null>([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [orgName, setOrgName] = useState('');
  const router = useRouter();

  // Redux
  const dispatch = useAppDispatch();
  const cartsData = useAppSelector(selectCartItems);

  useEffect(() => {
    const amountItems = {};
    const cartsData = JSON.parse(localStorage.getItem('tmraCart')!);

    setAmountdata(cartsData);

    if (cartsData) {
      cartsData.forEach(cart => {
        amountItems[cart._id!] = cart.amount;
      });
      setAmountItems(amountItems);
    }
  }, [cartsData]);

  useEffect(() => {
    const amount = Object.values(amountItems).reduce((a, b) => a + b, 0);
    setGrandTotal(amount);
  }, [amountItems]);

  useEffect(() => {
    const lsOrgName = JSON.parse(localStorage.getItem('organizationCampaign')!);

    if (lsOrgName !== null) {
      setOrgName(lsOrgName);
    }
  }, []);

  const handleChangeQty = e => {
    if (e.target.value === '0' || e.target.value === '') {
      e.target.value = '0';
    }

    const id = e.target.id;
    const value = parseInt(e.target.value);

    setAmountItems({ ...amountItems, [id]: value });
    if (isNaN(id)) {
      amountItems[id] = value;

      setAmountItems({ ...amountItems });

      const total = Object.values(amountItems);

      const sum = total.reduce((result, item) => {
        return result + item;
      }, 0);

      setGrandTotal(sum);
    }
  };

  const handleRemoveFromCart = async (id: string) => {
    dispatch(removeCartItems(id));

    if (amountItems) {
      delete amountItems[`${id}`];

      const total = Object.values(amountItems);

      const sum = total.reduce((result, item) => {
        return result + item;
      }, 0);

      setGrandTotal(sum);
    }

    localStorage.removeItem('singlePayment');
  };

  const handleToPayment = async () => {
    const amountData = amountdata;
    const dataToCart: CampaignInfo[] = [];

    if (amountData) {
      amountData.forEach(cart => {
        const toPayment = {
          _id: cart._id,
          amount: grandTotal ? grandTotal : amountItems[cart._id!],
          amountTarget: cart.amountTarget,
          coverImage: cart.coverImage,
          currencyCode: cart.currencyCode,
          description: cart.description,
          islamCharityType: cart.islamCharityType,
          organizationId: cart.organizationId,
          title: cart.title,
        } as CampaignInfo;

        dataToCart.push(toPayment);
      });
    }

    dispatch(removeCartData());

    dispatch(addCartItems(dataToCart[0]));

    router.push(`/org/${orgName}/campaign/${dataToCart[0]?._id}/amount`);
  };

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
      <RootStyle title={`${t('menu.cart')} | ${t('app.name')}`}>
        <Container>
          {cartsData.length > 0 && (
            <Grid container spacing={4} sx={{ my: 4 }}>
              <Grid item xs={12} sm={6} sx={{ my: 2 }}>
                {cartsData.map((item, index) => {
                  return (
                    <Card key={index} sx={{ mb: 2 }}>
                      <CardContent>
                        <Grid container justifyContent="end" spacing={4}>
                          <Grid item>
                            <IconButton
                              aria-label="remove-cart"
                              size="small"
                              onClick={() => handleRemoveFromCart(`${item._id}`)}
                            >
                              <CloseIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                        <Grid container spacing={4} alignItems="center">
                          <Grid item xs={12} sm={6} sx={{ my: 2 }}>
                            <RouterLink href={`/org/iqamglobal/campaign/${item._id}`}>
                              <Typography sx={{ fontWeight: 'bold', mb: 2, cursor: 'pointer' }}>
                                {item.title}
                              </Typography>
                            </RouterLink>
                            <TextField
                              sx={{ width: '100%' }}
                              fullWidth
                              id={item._id!}
                              type="number"
                              value={amountItems[item._id!] | 0}
                              size="small"
                              onKeyDown={e => {
                                const prevent = ['e', 'E', '+', '-', '.', ','];
                                prevent.includes(e.key) && e.preventDefault();
                              }}
                              onKeyPress={e => {
                                if (!/[0-9]/.test(e.key)) {
                                  e.preventDefault();
                                }
                              }}
                              onChange={handleChangeQty}
                              InputProps={{
                                inputProps: { min: 1 },
                                startAdornment: (
                                  <InputAdornment position="start">
                                    {item.currencyCode}
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{ my: 2, display: 'flex', justifyContent: 'end' }}
                          >
                            <RouterLink href={`/org/iqamglobal/campaign/${item._id}`}>
                              <CoverImgStyle
                                src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${item.coverImage}?w=720`}
                                sx={{ cursor: 'pointer' }}
                              />
                            </RouterLink>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  );
                })}
              </Grid>
              <Grid item xs={12} sm={6} sx={{ my: 2 }}>
                <Card>
                  <CardContent>
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6} sx={{ my: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {t('fundraising.cart.grand_total')}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{ my: 2, display: 'inline-flex', justifyContent: 'end' }}
                      >
                        <Typography sx={{ fontWeight: 'bold', mr: 2 }}>{grandTotal}</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>SAR</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={handleToPayment}
                        disabled={grandTotal === 0}
                      >
                        {t('fundraising.cart.to_pay')}
                      </Button>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
          {cartsData.length === 0 && (
            <Container
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4 }}
            >
              <MotionContainer initial="initial" open>
                <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
                  <motion.div variants={varBounceIn}>
                    <Typography variant="h4" paragraph sx={{ my: 4 }}>
                      {t('fundraising.cart.empty.placeholder')}
                    </Typography>
                  </motion.div>

                  <Button
                    variant="contained"
                    sx={{ mb: 4 }}
                    onClick={() => {
                      router.push(`/org/${orgName}`);
                      localStorage.removeItem('tmraCart');
                      localStorage.removeItem('organizationCampaign');
                    }}
                  >
                    {t('fundraising.cart.empty.button')}
                  </Button>
                </Box>
              </MotionContainer>
            </Container>
          )}
        </Container>
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
}): Promise<IPropsCart> {
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
