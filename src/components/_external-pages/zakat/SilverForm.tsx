import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

import { Appearance } from '@modules/fundraising/Campaign';
import { CssTextField, ButtonStyle } from '@components/_external-pages/zakat/MenuTab';

import Popover from '@mui/material/Popover';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { alpha, styled } from '@mui/material/styles';
import moment from 'moment';

interface Props {
  label: string | undefined;
  title: string;
  handleSubmit: (event: any, amount: any[], handleAmount: any) => void;
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

export const BasePriceSilverInfo = ({ currencyCode, basePrice }) => {
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
            {`The price of silver per gram is`}{' '}
            <b>{`${basePrice?.silver ?? 0} ${currencyCode ?? 'SAR'}`}</b>
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

const SilverForm: React.FC<Props> = ({
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
  return (
    <div>
      <Box display="flex" alignItems="center">
        <Typography variant="h5">{title}</Typography>
        <BasePriceSilverInfo currencyCode={currencyCode} basePrice={basePrice} />
      </Box>
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
          if (!/^\d+(,\d{0,2})?$/.test(text)) {
            return;
          }
          const { val } = e.target.elements;
          const tempValue = parseFloat(val.value.replace(',', '.').replace(' ', ''));
          const newAmount = amountArr.map((item: any) => {
            if (item.type === 'silver') {
              item.value = tempValue;
              item.amt += Math.round(Number(tempValue * basePrice?.silver * 0.025));
              item.isAdded = true;
            }
            return item;
          });
          handleAmount(newAmount);
          // handleSubmit(e, amountArr, handleAmount);
          setText('');
        }}
      >
        <CssTextField
          appearance={appearance}
          id="outlined-basic"
          label={label}
          inputProps={{ inputMode: 'numeric' }}
          name="val"
          variant="outlined"
          sx={{}}
          value={text}
          onChange={e => {
            if (/^\d+(,\d{0,2})?$/.test(e.target.value)) {
              setText(e.target.value);
            }
          }}
          data-cy="fundraising-zakat.zakat-calc.field.amount-silver"
        />
        <ButtonStyle
          appearance={appearance}
          type="submit"
          variant="outlined"
          sx={{ mt: 2, py: 2 }}
          data-cy="fundraising-zakat.zakat-calc.button.add-silver"
        >
          {t('zakat.add')}
        </ButtonStyle>
      </Box>
    </div>
  );
};

export default SilverForm;
