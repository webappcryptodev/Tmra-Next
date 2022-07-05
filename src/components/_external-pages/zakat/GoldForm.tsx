/* eslint-disable no-useless-escape */
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'next-i18next';

import { Appearance } from '@modules/fundraising/Campaign';
import { CssTextField, ButtonStyle, SelectStyle } from '@components/_external-pages/zakat/MenuTab';
import Popover from '@mui/material/Popover';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { alpha, styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import moment from 'moment';

interface Props {
  label: string | undefined;
  title: string;
  handleSubmit: (
    event: any,
    amount: any[],
    handleAmount: any,
    carat: any,
    indexEdited: any,
    prevValue: any,
  ) => void;
  resultState: any[];
  handleResultState: (event: any) => void;
  amountArr: any[];
  handleAmount: any;
  appearance?: Appearance | null;
  currencyCode?: string;
  basePrice?: any;
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

export const BasePriceGoldInfo = ({ item, currencyCode, basePrice }) => {
  const [isOpen, setOpen] = React.useState(false);
  const itemRef = React.useRef(null);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box
        ref={itemRef}
        sx={{ marginLeft: 1 }}
        aria-owns={isOpen ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        <InfoRoundedIcon />
      </Box>
      <Popover
        id="mouse-over-popover"
        open={isOpen}
        sx={{
          pointerEvents: 'none',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={itemRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.5,
            overflow: 'inherit',
            boxShadow: theme => theme.customShadows.z20,
            border: theme => `solid 1px ${theme.palette.grey[500_8]}`,
            width: 350,
          },
        }}
        disableRestoreFocus
      >
        <ArrowStyle />

        <Box padding={1.5}>
          <Typography>
            {`The price of gold (${item.carat} carat) per gram is`}{' '}
            <b>{`${basePrice[`${item.carat}K`]} ${currencyCode ?? 'SAR'}`}</b>
            <br />
            {' based on '}
            <b>{moment(basePrice?.updatedAt).format('MMM Do YYYY')}</b>
          </Typography>
          {/* <Typography>{`last updated on `}</Typography> */}
        </Box>
      </Popover>
    </>
  );
};

const GoldForm: React.FC<Props> = ({
  handleResultState,
  resultState,
  handleSubmit,
  label,
  title,
  amountArr,
  handleAmount,
  appearance,
  currencyCode,
  basePrice,
}) => {
  const { t } = useTranslation();
  const [text, setText] = React.useState('');
  const [prevValue, setPrevValue] = React.useState(0);
  const [display, setDisplay] = React.useState<any[]>([]);
  const [carat, setCarat] = React.useState('');
  const [isEdit, setEdit] = React.useState(-1);
  const [carats, setCarats] = React.useState([12, 14, 18, 21, 22, 24]);
  const handleChange = event => {
    setCarat(event.target.value);
  };

  const GoldItems = ({ item, index, amountIndex, basePrice }) => {
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
            <Typography>{`${Number(item.value)} grams (${item.carat} Carat)`}</Typography>
            <BasePriceGoldInfo item={item} currencyCode={currencyCode} basePrice={basePrice} />
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
              switch (item.carat) {
                case 12: {
                  temp[amountIndex].amt =
                    Math.round(amt - Number(item.value) * nisab * basePrice[`12K`] * 100) / 100;
                  break;
                }
                case 14: {
                  temp[amountIndex].amt =
                    Math.round(amt - Number(item.value) * nisab * basePrice[`14K`] * 100) / 100;
                  break;
                }
                case 18: {
                  temp[amountIndex].amt =
                    Math.round(amt - Number(item.value) * nisab * basePrice[`18K`] * 100) / 100;
                  break;
                }
                case 21: {
                  temp[amountIndex].amt =
                    Math.round(amt - Number(item.value) * nisab * basePrice[`21K`] * 100) / 100;
                  break;
                }
                case 22: {
                  temp[amountIndex].amt =
                    Math.round(amt - Number(item.value) * nisab * basePrice[`22K`] * 100) / 100;
                  break;
                }
                case 24: {
                  temp[amountIndex].amt =
                    Math.round(amt - Number(item.value) * nisab * basePrice[`24K`] * 100) / 100;
                  break;
                }
              }

              if (temp[amountIndex].amt === 0) {
                const filteredResultState = resultState.filter(fItem => {
                  if (fItem.gold) {
                    return false;
                  }
                  return true;
                });
                handleResultState(filteredResultState);
              }

              temp[amountIndex].value = Math.round(temp[amountIndex].value - item.value);
              handleAmount(temp);
              setCarats([...carats, item.carat]);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              const temp = [...amountArr];
              setPrevValue(temp[amountIndex].custom[index].amt);
              setEdit(index);
              setText(temp[amountIndex].custom[index].value.toString().replace('.', ','));
              setCarats([...carats, item.carat]);
              setCarat(item.carat);
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
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
                {`${amountArr[find].custom.reduce(
                  (a, { value }) => Math.round(Number(Number(a) + Number(value)) * 100) / 100,
                  0,
                )} grams of total`}
              </Typography>
              <Typography variant="h5">
                {'Gold zakat amount - '}
                {amountArr[find].custom.reduce((a, { amt }) => a + Number(amt), 0)}{' '}
                <sup>{currencyCode ?? 'SAR'}</sup>
              </Typography>
            </Box>
            {amountArr[find].custom.map((x, key) => (
              <GoldItems key={key} item={x} index={key} amountIndex={find} basePrice={basePrice} />
            ))}
          </Box>
        );
      }
    }
  };

  const submitGoldZakat = (e, amount, handleAmount, carat, indexEdited, prevAmount) => {
    const { val } = e.target.elements;
    const nisab = 0.025;
    if (indexEdited === -1) {
      const newAmount = amount.map((item: any) => {
        if (item.type === 'gold') {
          const obj: any = {};
          const tempValue = parseFloat(val.value.replace(',', '.').replace(' ', ''));
          obj.value = tempValue;
          switch (carat) {
            case 12: {
              obj.amt = Math.round(Number(tempValue * nisab * basePrice[`12K`]) * 100) / 100;
              break;
            }
            case 14: {
              obj.amt = Math.round(Number(tempValue * nisab * basePrice[`14K`]) * 100) / 100;
              break;
            }
            case 18: {
              obj.amt = Math.round(Number(tempValue * nisab * basePrice[`18K`]) * 100) / 100;
              break;
            }
            case 21: {
              obj.amt = Math.round(Number(tempValue * nisab * basePrice[`21K`]) * 100) / 100;
              break;
            }
            case 22: {
              obj.amt = Math.round(Number(tempValue * nisab * basePrice[`22K`]) * 100) / 100;
              break;
            }
            case 24: {
              obj.amt = Math.round(Number(tempValue * nisab * basePrice[`24K`]) * 100) / 100;
              break;
            }
          }
          obj.carat = carat;
          item.amt += obj.amt;
          item.custom.push(obj);
        }
        return item;
      });
      handleAmount(newAmount);
    } else {
      const idx = amount.findIndex(x => x.type === 'gold');
      const temp = [...amount];
      const tempValue = parseFloat(val.value.replace(',', '.').replace(' ', ''));
      temp[idx].custom[indexEdited].value = tempValue;
      switch (carat) {
        case 12: {
          temp[idx].custom[indexEdited].amt =
            Math.round(Number(tempValue * nisab * basePrice[`12K`]) * 100) / 100;
          break;
        }
        case 14: {
          temp[idx].custom[indexEdited].amt =
            Math.round(Number(tempValue * nisab * basePrice[`14K`]) * 100) / 100;
          break;
        }
        case 18: {
          temp[idx].custom[indexEdited].amt =
            Math.round(Number(tempValue * nisab * basePrice[`18K`]) * 100) / 100;
          break;
        }
        case 21: {
          temp[idx].custom[indexEdited].amt =
            Math.round(Number(tempValue * nisab * basePrice[`21K`]) * 100) / 100;
          break;
        }
        case 22: {
          temp[idx].custom[indexEdited].amt =
            Math.round(Number(tempValue * nisab * basePrice[`22K`]) * 100) / 100;
          break;
        }
        case 24: {
          temp[idx].custom[indexEdited].amt =
            Math.round(Number(tempValue * nisab * basePrice[`24K`]) * 100) / 100;
          break;
        }
      }
      const tempAmount = amount[idx].amt - Number(prevAmount);
      temp[idx].amt = tempAmount + temp[idx].custom[indexEdited].amt;
      temp[idx].custom[indexEdited].carat = carat;
      handleAmount(temp);
    }
  };

  return (
    <div>
      {renderGoldResults()}
      <Box display="flex" alignItems="center">
        <Typography variant="h5">{title}</Typography>
        <BasePriceGoldInfo item={{ carat: 24 }} currencyCode={currencyCode} basePrice={basePrice} />
      </Box>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2,
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
        onSubmit={(e: any) => {
          if (e) {
            e.preventDefault();
          }
          if (!carat) {
            return;
          }
          const reg = new RegExp('^[0-9]+$');
          if (!/^\d+(,\d{0,2})?$/.test(text)) {
            return;
          }

          const newCarats = carats.filter(item => {
            const a = String(item);
            const bool = a === String(carat) ? false : item;
            return bool;
          });
          setCarats(newCarats);
          submitGoldZakat(e, amountArr, handleAmount, carat, isEdit, prevValue);
          setText('');
          setCarat('');
          setEdit(-1);
          setPrevValue(0);
          const newResultState = resultState.map(item => {
            if (item.gold) {
              item.gold = 'gold';
            }
            return item;
          });
          const g = { gold: '' };
          if (
            newResultState.some(
              e => Object.getOwnPropertyNames(e)[0] !== Object.getOwnPropertyNames(g)[0],
            ) ||
            newResultState.length === 0
          ) {
            newResultState.push({ gold: 'gold' });
          }
          handleResultState(newResultState);
        }}
      >
        <CssTextField
          appearance={appearance}
          id="outlined-basic"
          label={label}
          inputProps={{ inputMode: 'numeric' }}
          name="val"
          variant="outlined"
          value={text}
          onChange={e => {
            if (/^\d+(,\d{0,2})?$/.test(e.target.value)) {
              setText(e.target.value);
            }
          }}
          data-cy="fundraising-zakat.zakat-calc.field.amount-gold"
        />
        <Box sx={{ position: 'relative', mt: 2 }}>
          <InputLabel id="demo-simple-select-label">Carat</InputLabel>
          <SelectStyle
            appearance={appearance}
            sx={{ width: '100%' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={carat}
            label="Carat"
            onChange={handleChange}
            data-cy="fundraising-zakat.zakat-calc.select.carat-gold"
          >
            {carats.sort().map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </SelectStyle>
        </Box>
        <ButtonStyle
          appearance={appearance}
          type="submit"
          variant="contained"
          sx={{ mt: 2, py: 2 }}
          data-cy="fundraising-zakat.zakat-calc.button.add-gold"
        >
          {Number(isEdit) > -1 ? 'Edit' : t('zakat.add')}
        </ButtonStyle>
      </Box>
    </div>
  );
};

export default GoldForm;
