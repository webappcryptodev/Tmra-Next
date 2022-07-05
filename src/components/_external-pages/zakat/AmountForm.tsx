import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

import { Appearance } from '@modules/fundraising/Campaign';
import { CssTextField, ButtonStyle } from '@components/_external-pages/zakat/MenuTab';

interface Props {
  label: string | undefined;
  title: string;
  handleSubmit: (event: any, amount: any[], handleAmount: any) => void;
  amountArr: any[];
  handleAmount: any;
  appearance?: Appearance | null;
}

const AmountForm: React.FC<Props> = ({
  handleSubmit,
  label,
  title,
  amountArr,
  handleAmount,
  appearance,
}) => {
  const { t } = useTranslation();
  const [text, setText] = React.useState('');
  return (
    <div>
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
          if (!reg.test(text)) {
            return;
          }
          handleSubmit(e, amountArr, handleAmount);
          setText('');
        }}
      >
        <CssTextField
          id="outlined-basic"
          label={label}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          name="val"
          variant="outlined"
          sx={{}}
          value={text}
          onChange={e => setText(e.target.value)}
          data-cy="fundraising-zakat.zakat-calc.field.amount-money"
          appearance={appearance}
        />
        <ButtonStyle
          appearance={appearance}
          type="submit"
          variant="outlined"
          sx={{
            mt: 2,
            py: 2,
          }}
          data-cy="fundraising-zakat.zakat-calc.button.add-money"
        >
          {t('zakat.add')}
        </ButtonStyle>
      </Box>
    </div>
  );
};

export default AmountForm;
