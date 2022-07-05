import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTranslation } from 'next-i18next';

import { Appearance } from '@modules/fundraising/Campaign';
import { CssTextField, ButtonStyle } from '@components/_external-pages/zakat/MenuTab';

interface Props {
  title: string;
  mutualLabel: string;
  numberLabel: string;
  valueLabel: string;
  SARLabel: string;
  handleSubmit: (event: any, amount: any[], handleAmount: any, number: any, text: any) => void;
  resultState: any[];
  handleResultState: (event: any) => void;
  type: string;
  amountArr: any[];
  handleAmount: any;
  appearance?: Appearance | null;
}

const MutualForm: React.FC<Props> = ({
  type,
  handleResultState,
  resultState,
  handleSubmit,
  mutualLabel,
  numberLabel,
  valueLabel,
  SARLabel,
  title,
  amountArr,
  handleAmount,
  appearance,
}) => {
  const { t } = useTranslation();
  const [name, setName] = React.useState('');
  const [numberAsString, setNumberAsString] = React.useState('');
  const [text, setText] = React.useState('');
  const [SAR, setSAR] = React.useState('');
  const [id, setId] = React.useState('');
  const [display, setDisplay] = React.useState<any[]>([]);

  // React.useEffect(() => {
  //   const newResultState = resultState.map(item => {
  //     if (item[type]) {
  //       item[type] = '';
  //     }
  //     return item;
  //   });
  //   handleResultState(newResultState);
  // });

  return (
    <div>
      {display.map((item, index) => (
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
                if (aItem.type === 'mutual') {
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
      ))}
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
          handleSubmit(e, amountArr, handleAmount, numberAsString, '');
          const inp = { text, name, number: numberAsString, SAR, id };
          const newDisplay = [...display, inp];
          setDisplay(newDisplay);
          const newResultState = resultState.map(item => {
            if (item[type]) {
              item[type] = type;
            }
            return item;
          });
          const g = { [type]: '' };
          if (
            newResultState.some(
              e => Object.getOwnPropertyNames(e)[0] !== Object.getOwnPropertyNames(g)[0],
            ) ||
            newResultState.length === 0
          ) {
            console.log(Object.getOwnPropertyNames(g)[0]);
            newResultState.push({ [type]: type });
          }
          handleResultState(newResultState);
          setName('');
          setNumberAsString('');
          setText('');
          setSAR('');
          setId('');
        }}
      >
        <CssTextField
          appearance={appearance}
          id="outlined-basic"
          label={mutualLabel}
          variant="outlined"
          name="mutual"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ mt: 2 }}
          data-cy="fundraising-zakat.zakat-calc.field.mutual-name"
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
            try {
              setNumberAsString(e.target.value);
              if (text && parseFloat(text) > 0) {
                setSAR((parseFloat(e.target.value) * parseFloat(text)).toString());
              }
            } catch (error) {
              console.error(
                'Invalid number. value=',
                e.target.value,
                'text=',
                text,
                'error=',
                error,
              );
            }
          }}
          sx={{ mt: 2 }}
          data-cy="fundraising-zakat.zakat-calc.field.number-fund"
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
            try {
              setText(e.target.value);
              if (parseFloat(e.target.value) > 0 && e.target.value) {
                setSAR((parseFloat(e.target.value) * parseFloat(numberAsString)).toString());
              } else {
                setSAR('');
              }
            } catch (error) {
              console.error(
                'Invalid number. value=',
                e.target.value,
                'numberAsString=',
                numberAsString,
                'error=',
                error,
              );
            }
          }}
          sx={{ mt: 2 }}
          data-cy="fundraising-zakat.zakat-calc.field.value-fund"
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
          data-cy="fundraising-zakat.zakat-calc.button.add-fund"
        >
          {t('zakat.add')}
        </ButtonStyle>
      </Box>
    </div>
  );
};

export default MutualForm;
