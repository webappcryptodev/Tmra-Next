/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GridGoldenratioIcon from '@mui/icons-material/GridGoldenratio';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GroupIcon from '@mui/icons-material/Group';
import { TabPanel, a11yProps } from './TabPanelProps';
import Summary from './Summary';
import AmountForm from './AmountForm';
import GoldForm from './GoldForm';
import StockForm from './StockForm';
import MutualForm from './MutualForm';
import FormResult from './FormResult';
import { Zakat } from './data';
import { styled } from '@mui/system';
import SilverForm from './SilverForm';

import { Appearance } from '@modules/fundraising/Campaign';
import { OrganizationInfoFragment } from '@generated/graphql';
import { getAccentColor, getButtonColor } from '@utils/theme-colors';
import { Theme, InputLabel, MenuItem, useTheme } from '@mui/material';
import Select, { selectClasses } from '@mui/material/Select';
import Button, { buttonClasses } from '@mui/material/Button';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import { alpha } from '@mui/material/styles';
import Icon from '@components/Iconify';

import axios from 'axios';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

const CURRENCY_OPTIONS = ['GBP', 'SAR', 'USD'];
const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;
interface Props {
  handleAmount: any;
  amount: any;
  appearance?: Appearance | null;
  organization?: OrganizationInfoFragment | null;
}

const ZakatBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  /* alignItems: 'center', */
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const CssTextField = styled(TextField)(
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
          color: color,
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: color,
            color: color,
          },
        },
      },
    };
  },
);

export const SelectStyle = styled(Select)(
  ({ theme, appearance }: { theme?: Theme; appearance?: Appearance | null }) => {
    const accentColor = getAccentColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      [`&.${selectClasses.root}`]: {
        '&.Mui-focused': {
          '& fieldset': {
            borderColor: color,
            color: color,
          },
        },
      },
    };
  },
);

export const ButtonStyle = styled(Button)(
  ({
    theme,
    appearance,
    variant,
  }: {
    theme?: Theme;
    appearance?: Appearance | null;
    variant: string;
  }) => {
    const accentColor = getButtonColor(appearance);
    let color: string;
    if (accentColor.indexOf('#') > -1) {
      color = accentColor;
    } else {
      color = theme?.palette[accentColor.split('.')[0]][accentColor.split('.')[1]];
    }
    return {
      [`&.${buttonClasses.root}`]: {
        '&:focus': {
          background: `${alpha(color, 0.2)}`,
        },
        borderColor: color,
        color: `${variant === 'outlined' ? color : theme?.palette.common.white}`,
        backgroundColor: `${variant === 'outlined' ? theme?.palette.common.white : color}`,
        '&:hover': {
          backgroundColor: `${alpha(color, variant === 'outlined' ? 0.2 : 0.5)}`,
          borderColor: color,
        },
      },
    };
  },
);

const MenuTab: React.FC<Props> = ({ handleAmount, amount, appearance, organization }) => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(5);
  const [resultState, setresultState] = React.useState([]);
  const [selectedCurrency, setSelectedCurrency] = React.useState<string>('SAR');
  const [basePricePerCarat, setBasePricePerCarat] = React.useState({});
  const [basePriceMetal, setBasePriceMetal] = React.useState({});
  const theme = useTheme();

  React.useEffect(() => {
    if (organization) {
      setSelectedCurrency(organization.defaultCurrency!);
    }

    (async () => {
      try {
        const basePriceCaratURL = `${publicRuntimeConfig.tmra.raise.url}/zakat/metalprice?base=${selectedCurrency}`;
        const basePriceMetalURL = `${publicRuntimeConfig.tmra.raise.url}/zakat/metalprice?base=${selectedCurrency}&symbols=XAU,XAG`;

        const { data: basePriceCarat } = await axios.get(basePriceCaratURL);
        const { data: basePriceMetal } = await axios.get(basePriceMetalURL);
        if (basePriceCarat.rates) {
          Object.keys(basePriceCarat.rates).map(x => {
            basePriceCarat['rates'][x] =
              Math.round(Number(basePriceCarat['rates'][x] * 5.0027) * 100) / 100;
          });
          const basePriceCaratTemp = Object.keys(basePriceCarat.rates).reduce((r, key) => {
            const k = key.replace('Carat ', '');
            r[k] = basePriceCarat['rates'][key];
            return r;
          }, {});
          setBasePricePerCarat({
            ...basePriceCaratTemp,
            updatedAt: basePriceCarat.createdDate,
          });
        }
        if (basePriceMetal.rates) {
          const basePriceMetalTemp = Object.keys(basePriceMetal.rates).reduce((r, key) => {
            const k =
              key === 'XAG'
                ? key.replace('XAG', 'silver')
                : key === 'XAU'
                ? key.replace('XAU', 'gold')
                : key;
            r[k] = Math.round(Number(basePriceMetal['rates'][key] / 31.1) * 100) / 100;
            if (basePriceMetal.currency === 'USD') {
              r[k] = Math.round(Number(1 / basePriceMetal['rates'][key] / 31.1) * 100) / 100;
            }
            return r;
          }, {});
          setBasePriceMetal({
            ...basePriceMetalTemp,
            updatedAt: basePriceMetal.createdDate,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedCurrency, organization]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const newAmount = amount.map((item: any) => {
      resultState.forEach(cItem => {
        if (item.type === Object.getOwnPropertyNames(cItem)[0]) {
          item.isAdded = true;
        }
        if (newValue === 2 && item.type === 'gold') {
          item.isAdded = false;
        }
        if (newValue === 3 && item.type === 'stocks') {
          item.isAdded = false;
        }
      });
      return item;
    });
    handleAmount(newAmount);
  };

  // const handleSelectCurrency = event => {
  //   setSelectedCurrency(event.target.value);
  // };

  // const totalAmt = amount.reduce((a, { amt }) => a + Number(amt), 0);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          allowScrollButtonsMobile={true}
          scrollButtons="auto"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: getAccentColor(appearance),
            },
          }}
        >
          <Tab
            sx={{ flexDirection: 'row' }}
            label={t('zakat.money')}
            {...a11yProps(0)}
            icon={<MonetizationOnIcon sx={{ mr: 1 }} />}
            data-cy="fundraising-zakat.zakat-calc.money"
          />
          <Tab
            sx={{ flexDirection: 'row' }}
            label={t('zakat.silver')}
            {...a11yProps(1)}
            icon={<ShoppingBagIcon sx={{ mr: 1 }} />}
            data-cy="fundraising-zakat.zakat-calc.silver"
          />
          <Tab
            sx={{ flexDirection: 'row' }}
            label={t('zakat.gold')}
            {...a11yProps(2)}
            icon={<GridGoldenratioIcon sx={{ mr: 1 }} />}
            data-cy="fundraising-zakat-calc.zakat.gold"
          />
          <Tab
            sx={{ flexDirection: 'row' }}
            label={t('zakat.stocks')}
            {...a11yProps(3)}
            icon={<ShowChartIcon sx={{ mr: 1 }} />}
            data-cy="fundraising-zakat.zakat-calc.stocks"
          />
          <Tab
            sx={{ flexDirection: 'row' }}
            label={t('zakat.mutual')}
            {...a11yProps(4)}
            icon={<GroupIcon sx={{ mr: 1 }} />}
            data-cy="fundraising-zakat.zakat-calc.mutual-funds"
          />
          <Tab sx={{ display: 'none' }} label="" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <Box sx={{ mt: 2, padding: 4, backgroundColor: '#F1F1EF', borderRadius: 1 }}>
        <Box display="flex" alignItems="center" mb={1.5}>
          <Icon icon="gg:notes" width={20} height={20} />
          <Typography sx={{ flex: 1, marginLeft: 2, fontSize: '20px' }}>Notes :</Typography>
        </Box>
        <Typography sx={{ fontSize: '20px' }}>
          This zakat calculator aims to help someone who already knows that he is a Muzzaki.
          <br />
          Muzzaki
          <b> is a Muslim who obliges to pay Zakat</b>
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', mt: 4 }}>
        <Typography variant="h4" component="p" sx={{ color: theme.palette.grey[500] }}>
          Your base currency is <strong>{selectedCurrency}</strong>
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          color="error"
          sx={{ fontWeight: theme.typography.fontWeightLight }}
        >
          *you can change the currency in the setting
        </Typography>
        {/* <InputLabel id="demo-simple-select-label">Your base currency</InputLabel>
        <SelectStyle
          appearance={appearance}
          sx={{ mt: 1, width: '20%' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCurrency}
          onChange={handleSelectCurrency}
          data-cy="fundraising-zakat.zakat-calc.select.carat-gold"
          disabled={totalAmt > 0}
        >
          {CURRENCY_OPTIONS.map(item => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </SelectStyle> */}
      </Box>
      <ZakatBox sx={{ my: 1 }}>
        {Zakat.map(item => {
          return (
            <TabPanel key={item.id} value={value} index={item.id}>
              {Zakat.map(item => {
                return (
                  <Box key={item.id}>
                    {item.formType === 'amount' && amount[item.id].isAdded && (
                      <FormResult
                        handleAmount={handleAmount}
                        type={amount[0].type}
                        amountArr={amount}
                        title={t(item.title) + ' '}
                        name={t(item.name)}
                        amount={amount[item.id].amt}
                        value={amount[item.id].value}
                        currencyCode={selectedCurrency}
                      />
                    )}
                    {item.formType === 'silver' && amount[item.id].isAdded && (
                      <FormResult
                        handleAmount={handleAmount}
                        type={amount[1].type}
                        amountArr={amount}
                        title={t(item.title) + ' '}
                        name={t(item.name)}
                        amount={amount[item.id].amt}
                        value={amount[item.id].value}
                        currencyCode={selectedCurrency}
                        basePriceMetal={basePriceMetal}
                        basePricePerCarat={basePricePerCarat}
                      />
                    )}
                    {item.isResultState && amount[item.id].isAdded && (
                      <FormResult
                        resultState={resultState}
                        handleResultState={setresultState}
                        handleAmount={handleAmount}
                        type={amount[item.id].type}
                        amountArr={amount}
                        title={t(item.title) + ' '}
                        name={t(item.name)}
                        amount={amount[item.id].amt}
                        carat={amount[item.id].carat}
                        value={amount[item.id].value}
                        currencyCode={selectedCurrency}
                        basePriceMetal={basePriceMetal}
                        basePricePerCarat={basePricePerCarat}
                      />
                    )}
                  </Box>
                );
              })}
              {!amount[item.id].isAdded && (
                <Card sx={{ minWidth: 275, mt: 5, px: 2, py: 5 }} variant="outlined">
                  <CardContent sx={{ px: 0 }}>
                    {item.formType === 'amount' && (
                      <AmountForm
                        appearance={appearance}
                        handleAmount={handleAmount}
                        amountArr={amount}
                        handleSubmit={item.handleSubmit}
                        label={t(item.label)}
                        title={t(item.title) + ' ' + t('zakat.calculator')}
                      />
                    )}
                    {item.formType === 'silver' && (
                      <SilverForm
                        appearance={appearance}
                        handleAmount={handleAmount}
                        amountArr={amount}
                        handleSubmit={item.handleSubmit}
                        label={t(item.label)}
                        title={t(item.title) + ' ' + t('zakat.calculator')}
                        currencyCode={selectedCurrency}
                        basePrice={basePriceMetal}
                      />
                    )}
                    {item.formType === 'gold' && (
                      <GoldForm
                        appearance={appearance}
                        handleAmount={handleAmount}
                        amountArr={amount}
                        resultState={resultState}
                        handleResultState={setresultState}
                        handleSubmit={item.handleSubmit}
                        label={t(item.label)}
                        title={t(item.title) + ' ' + t('zakat.calculator')}
                        currencyCode={selectedCurrency}
                        basePrice={basePricePerCarat}
                      />
                    )}
                    {item.formType === 'stocks' && (
                      <StockForm
                        appearance={appearance}
                        handleAmount={handleAmount}
                        amountArr={amount}
                        type="stocks"
                        resultState={resultState}
                        handleResultState={setresultState}
                        handleSubmit={item.handleSubmit}
                        stockLabel={t('zakat.stockLabel')}
                        numberLabel={t('zakat.numberLabel')}
                        valueLabel={t('zakat.value')}
                        SARLabel={selectedCurrency}
                        title={t(item.title) + ' ' + t('zakat.calculator')}
                        currencyCode={selectedCurrency}
                      />
                    )}
                    {item.formType === 'mutual' && (
                      <MutualForm
                        appearance={appearance}
                        handleAmount={handleAmount}
                        amountArr={amount}
                        type="mutual"
                        resultState={resultState}
                        handleResultState={setresultState}
                        handleSubmit={item.handleSubmit}
                        mutualLabel={t('zakat.mutualLabel')}
                        numberLabel={t('zakat.numberLabel')}
                        valueLabel={t('zakat.value')}
                        SARLabel={selectedCurrency}
                        title={t(item.title) + ' ' + t('zakat.calculator')}
                      />
                    )}
                  </CardContent>
                </Card>
              )}
            </TabPanel>
          );
        })}
        <TabPanel value={value} index={5}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              minWidth: 275,
              bgcolor: 'background.paper',
              boxShadow: 12,
              px: 5,
              py: 10,
              mt: 4,
            }}
          >
            {t('zakat.title')}
          </Typography>
        </TabPanel>
        <Summary
          amount={amount}
          organization={organization}
          appearance={appearance}
          currencyCode={selectedCurrency}
        />
      </ZakatBox>
    </Box>
  );
};

export default MenuTab;
