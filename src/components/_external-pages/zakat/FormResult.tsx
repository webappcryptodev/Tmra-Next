import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTranslation } from 'next-i18next';
import { alpha, styled } from '@mui/material/styles';

import { BasePriceSilverInfo } from './SilverForm';
import { BasePriceGoldInfo } from './GoldForm';

interface Props {
  name: string;
  title: string;
  amount: number;
  type: string;
  amountArr: any[];
  handleAmount: any;
  resultState?: any[];
  handleResultState?: (event: any) => void;
  carat?: string;
  value: string | number;
  currencyCode?: string;
  basePriceMetal?: any;
  basePricePerCarat?: any;
}

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}));

const FormResult: React.FC<Props> = ({
  handleResultState,
  resultState,
  title,
  name,
  amount,
  type,
  amountArr,
  handleAmount,
  carat,
  value,
  currencyCode,
  basePriceMetal,
  basePricePerCarat,
}) => {
  const { t } = useTranslation();

  const renderLabel = () => {
    let label = '';
    switch (type) {
      case 'money':
        label = `${currencyCode ?? 'SAR'} cash amount`;
        break;
      case 'silver':
        label = name;
        break;
      case 'gold':
        label = name;
        break;
      case 'stocks':
        label = `${currencyCode ?? 'SAR'} Net stocks value`;
        break;
      case 'mutual':
        label = `${currencyCode ?? 'SAR'} Net stocks value`;
        break;
      default:
        break;
    }
    return label;
  };

  const GoldItems = ({ item, basePricePerCarat }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 1,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'lightgray',
          borderRadius: 1,
          alignItems: 'center',
          marginY: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{`${item.value} grams (${item.carat} Carat)`}</Typography>
          <BasePriceGoldInfo
            item={item}
            currencyCode={currencyCode}
            basePrice={basePricePerCarat}
          />
        </Box>
        <Typography>
          {item.amt} <sup>{currencyCode ?? 'SAR'}</sup>
        </Typography>
      </Box>
    );
  };

  const renderGoldResults = () => {
    const find = amountArr.findIndex(x => x.type === 'gold');
    if (find > -1) {
      if (
        amountArr[find].custom &&
        Array.isArray(amountArr[find].custom) &&
        amountArr[find].custom.length > 0
      ) {
        return (
          <>
            <Box
              sx={{
                marginBottom: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5">
                {`${amountArr[find].custom.reduce(
                  (a, { value }) => a + Number(value),
                  0,
                )} grams of total`}
              </Typography>
              <Typography>
                {title} {currencyCode ?? 'SAR'} -{' '}
                {amountArr[find].custom.reduce((a, { amt }) => a + Number(amt), 0)}{' '}
                <sup>{currencyCode ?? 'SAR'}</sup>
              </Typography>
            </Box>
            {amountArr[find].custom.map((x, key) => (
              <GoldItems key={key} item={x} basePricePerCarat={basePricePerCarat} />
            ))}
          </>
        );
      }
    }
  };

  const StocksItem = ({ item }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 1,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'lightgray',
          borderRadius: 1,
          alignItems: 'center',
          marginY: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ display: 'flex', alignItems: 'baseline' }}>
            <b>{`${item.name} `}</b>
            <p style={{ color: '#999', marginLeft: '4px' }}>
              {`(${Number(item.value)} * ${Number(item.number)}) = ${Math.round(
                Number(item.value * item.number),
              )} `}
              <sup>{currencyCode ?? 'SAR'}</sup>
            </p>
          </Typography>
        </Box>
        <Typography>
          {item.amt} <sup>{currencyCode ?? 'SAR'}</sup>
        </Typography>
      </Box>
    );
  };

  const renderStockResults = () => {
    const find = amountArr.findIndex(x => x.type === 'stocks');
    if (find > -1) {
      if (
        amountArr[find].custom &&
        Array.isArray(amountArr[find].custom) &&
        amountArr[find].custom.length > 0
      ) {
        return (
          <Box sx={{ mt: 2, mb: 4 }}>
            <Box
              sx={{
                marginBottom: 1,
                display: 'flex',
                alignItems: { xs: 'unset', md: 'center' },
                justifyContent: { xs: 'center', md: 'space-between' },
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Typography variant="h5">
                {'Stocks zakat amount - '}
                {amountArr[find].custom.reduce((a, { amt }) => a + Number(amt), 0)}{' '}
                <sup>{currencyCode ?? 'SAR'}</sup>
              </Typography>
            </Box>
            {amountArr[find].custom.map((x, key) => (
              <StocksItem key={key} item={x} />
            ))}
          </Box>
        );
      }
    }
  };
  return (
    <Card sx={{ minWidth: 275, mt: 4, px: 2, py: 2, position: 'relative' }} variant="outlined">
      <CardContent sx={{ px: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>
            {title} {t('zakat.calculator')}
          </Typography>
          {type === 'silver' && (
            <BasePriceSilverInfo currencyCode={currencyCode} basePrice={basePriceMetal} />
          )}
        </Box>
        {type === 'gold' ? (
          <Box sx={{ mt: 2 }}>{renderGoldResults()}</Box>
        ) : type === 'stocks' ? (
          <Box sx={{ mt: 2 }}>{renderStockResults()}</Box>
        ) : (
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">{`${value} ${renderLabel()} ${
              carat ? `(${carat} Carat)` : ''
            }`}</Typography>
            <Typography>
              {title} {currencyCode ?? 'SAR'} - {amount} <sup>{currencyCode ?? 'SAR'}</sup>
            </Typography>
          </Box>
        )}
      </CardContent>
      <CancelIcon
        onClick={() => {
          const filteredAmount = amountArr.map(item => {
            if (item.type === type) {
              item.isAdded = false;
              item.amt = 0;
              item.value = 0;
              if (item.custom) item.custom = [];
            }
            return item;
          });
          if (resultState) {
            const filteredResultState = resultState.filter(item => {
              if (item[type]) {
                return false;
              }
              return true;
            });
            if (handleResultState) handleResultState(filteredResultState);
          }
          handleAmount(filteredAmount);
        }}
        sx={{ position: 'absolute', top: 10, right: 10 }}
      />
    </Card>
  );
};

export default FormResult;
