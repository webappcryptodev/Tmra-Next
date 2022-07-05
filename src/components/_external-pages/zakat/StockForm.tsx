import * as React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'next-i18next';
import { IconButton, Stack, Box, Typography } from '@mui/material';

import { Appearance } from '@modules/fundraising/Campaign';
import { CssTextField, ButtonStyle } from '@components/_external-pages/zakat/MenuTab';

interface Props {
  title: string;
  stockLabel: string;
  numberLabel: string;
  valueLabel: string;
  SARLabel: string;
  handleSubmit: (
    event: any,
    amount: any[],
    handleAmount: any,
    number: any,
    name: any,
    editedObj: any,
  ) => void;
  resultState: any[];
  handleResultState: (event: any) => void;
  type: string;
  amountArr: any[];
  handleAmount: any;
  appearance?: Appearance | null;
  currencyCode?: string;
}

const StockForm: React.FC<Props> = ({
  type,
  handleResultState,
  resultState,
  handleSubmit,
  stockLabel,
  numberLabel,
  valueLabel,
  SARLabel,
  title,
  amountArr,
  handleAmount,
  appearance,
  currencyCode,
}) => {
  const { t } = useTranslation();
  const [name, setName] = React.useState('');
  const [numberAsString, setNumberAsString] = React.useState('');
  const [text, setText] = React.useState('');
  const [SAR, setSAR] = React.useState('');
  const [id, setId] = React.useState('');
  const [display, setDisplay] = React.useState<any[]>([]);

  const [isEdit, setEdit] = React.useState(-1);
  const [editedObj, setEditedObj] = React.useState({});

  // React.useEffect(() => {
  //   const newResultState = resultState.map(item => {
  //     if (item[type]) {
  //       item[type] = '';
  //     }
  //     return item;
  //   });
  //   handleResultState(newResultState);
  // });

  const StocksItem = ({ item, index, amountIndex }) => {
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
        <Stack spacing={{ xs: 2, md: 4 }} direction={{ xs: 'column', md: 'row' }} sx={{ flex: 1 }}>
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
        </Stack>
        <Box display="flex" flexDirection="row" alignItems="center">
          <IconButton
            onClick={() => {
              const temp = [...amountArr];
              temp[amountIndex].custom.splice(index, 1);
              const amt = temp[amountIndex].amt;
              const nisab = 0.025;

              if (temp[amountIndex].amt === 0) {
                const filteredResultState = resultState.filter(fItem => {
                  if (fItem.gold) {
                    return false;
                  }
                  return true;
                });
                handleResultState(filteredResultState);
              }
              temp[amountIndex].amt = Math.round(amt - Number(item.value) * nisab * item.number);
              temp[amountIndex].value = Math.round(temp[amountIndex].value - item.value);
              handleAmount(temp);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              const temp = [...amountArr];
              setEditedObj({
                prevAmount: temp[amountIndex].custom[index].amt,
                index: index,
                value: temp[amountIndex].custom[index].value,
                name: temp[amountIndex].custom[index].name,
                number: temp[amountIndex].custom[index].number,
              });
              setEdit(index);
              setText(temp[amountIndex].custom[index].value);
              setName(temp[amountIndex].custom[index].name);
              setNumberAsString(temp[amountIndex].custom[index].number);
              setSAR(
                (
                  parseFloat(temp[amountIndex].custom[index].value) *
                  parseFloat(temp[amountIndex].custom[index].number)
                ).toString(),
              );
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
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
              <StocksItem key={key} item={x} index={key} amountIndex={find} />
            ))}
          </Box>
        );
      }
    }
  };

  return (
    <div>
      {renderStockResults()}
      {/* {display.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mb: 3 }}>
          <Typography
            sx={{ backgroundColor: '#a5e3c4', px: 2, py: 1, borderRadius: 3, color: '#fff' }}
          >
            {t('zakat.name')} - {item.name}
          </Typography>
          <Typography
            sx={{ ml: 2, backgroundColor: '#a5e3c4', px: 2, py: 1, borderRadius: 3, color: '#fff' }}
          >
            {t('zakat.number')} - {item.number}
          </Typography>
          <Typography
            sx={{ ml: 2, backgroundColor: '#a5e3c4', px: 2, py: 1, borderRadius: 3, color: '#fff' }}
          >
            {t('zakat.value')} - {item.text}
          </Typography>
          <Typography
            sx={{ ml: 2, backgroundColor: '#a5e3c4', px: 2, py: 1, borderRadius: 3, color: '#fff' }}
          >
            {t('zakat.sar')} - {item.SAR}
          </Typography>
          <CancelIcon
            onClick={() => {
              console.log('type:' + type);
              item.id = index;
              const newDisplay = display.filter(dItem => {
                const a = String(dItem.id);
                const bool = a === String(item.id) ? false : dItem;
                return bool;
              });
              setDisplay(newDisplay);
              const filteredAmount = amountArr.map(aItem => {
                if (aItem.type === 'stocks') {
                  const amt = parseFloat(parseFloat(aItem.amt).toFixed(2)); //Number(aItem.amt);
                  const nisab = 0.025;
                  aItem.amt = Math.abs(
                    Math.round(amt - Math.round(Number(item.text) * nisab * item.number)),
                  );
                  aItem.value = Math.abs(Math.round(aItem.value - item.SAR));
                  console.log(aItem.amt);
                  if (aItem.amt === 0) {
                    const filteredResultState = resultState.filter(fItem => {
                      if (fItem[type]) {
                        return false;
                      }
                      return true;
                    });
                    handleResultState(filteredResultState);
                  }
                }
                return aItem;
              });
              handleAmount(filteredAmount);
            }}
            sx={{ ml: 2 }}
          />
        </Box>
      ))} */}
      <Typography variant="h5">{title}</Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', mt: 2 }}
        onSubmit={(e: any) => {
          if (e) {
            e.preventDefault();
          }
          const reg = new RegExp('^[0-9]+$');
          if (!reg.test(text) || !name || !reg.test(numberAsString) || !reg.test(SAR)) {
            return;
          }
          handleSubmit(e, amountArr, handleAmount, numberAsString, name, editedObj);
          // const inp = { text, name, number: numberAsString, SAR, id };
          // const newDisplay = [...display, inp];
          // setDisplay(newDisplay);
          const newResultState = resultState.map(item => {
            if (item.stocks) {
              item.stocks = 'stocks';
            }
            return item;
          });
          const g = { stocks: '' };
          if (
            newResultState.some(
              e => Object.getOwnPropertyNames(e)[0] !== Object.getOwnPropertyNames(g)[0],
            ) ||
            newResultState.length === 0
          ) {
            console.log(Object.getOwnPropertyNames(g)[0]);
            newResultState.push({ stocks: 'stocks' });
          }
          handleResultState(newResultState);
          setName('');
          setNumberAsString('');
          setText('');
          setSAR('');
          setId('');
          setEdit(-1);
          setEditedObj({});
        }}
      >
        <CssTextField
          appearance={appearance}
          id="outlined-basic"
          label={stockLabel}
          variant="outlined"
          name="stock"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ mt: 2 }}
          data-cy="fundraising-zakat.zakat-calc.field.stock-name"
        />
        <CssTextField
          appearance={appearance}
          id="outlined-basic"
          label={numberLabel}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          variant="outlined"
          name="number"
          value={numberAsString}
          onChange={e => {
            setNumberAsString(e.target.value);
            if (text && parseFloat(text) > 0) {
              setSAR((parseFloat(e.target.value) * parseFloat(text)).toString());
            }
          }}
          sx={{ mt: 2 }}
          data-cy="fundraising-zakat.zakat-calc.field.number-stock"
        />
        <CssTextField
          appearance={appearance}
          id="outlined-basic"
          label={valueLabel}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          variant="outlined"
          name="val"
          value={text}
          onChange={e => {
            setText(e.target.value);
            if (e.target.value && parseFloat(e.target.value) > 0) {
              setSAR((parseFloat(e.target.value) * parseFloat(numberAsString)).toString());
            } else {
              setSAR('');
            }
          }}
          sx={{ mt: 2 }}
          data-cy="fundraising-zakat.zakat-calc.field.value-stock"
        />
        <CssTextField
          appearance={appearance}
          id="outlined-basic"
          disabled
          label={SARLabel}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          variant="outlined"
          name="SAR"
          value={SAR}
          onChange={e => setSAR(e.target.value)}
          sx={{ mt: 2 }}
        />
        <ButtonStyle
          appearance={appearance}
          type="submit"
          variant="outlined"
          sx={{ mt: 2, py: 2 }}
          data-cy="fundraising-zakat.zakat-calc.button.add-stock"
        >
          {Number(isEdit) > -1 ? 'Edit' : t('zakat.add')}
        </ButtonStyle>
      </Box>
    </div>
  );
};

export default StockForm;
