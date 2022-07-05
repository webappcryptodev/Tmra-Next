/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { DialogProps } from '@mui/material';
import config from '@configuration';
//
import DialogCheckoutZakat from '@components/checkout/DialogCheckoutZakat';
import DialogQuickDonate from '@components/checkout/DialogQuickDonate';
import { Appearance } from '@modules/fundraising/Campaign';
import { OrganizationInfoFragment } from '@generated/graphql';
import { CssTextField, ButtonStyle } from '@components/_external-pages/zakat/MenuTab';

interface Props {
  amount: any[];
  organization?: OrganizationInfoFragment | null;
  appearance?: Appearance | null;
  currencyCode?: string;
}

const ZakatSummaryCard = styled(Card)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '44%',
  },
}));

const Summary: React.FC<Props> = ({ amount, appearance, organization, currencyCode }) => {
  const { t } = useTranslation();
  const [extraAmountText, setExtraAmountText] = React.useState('');
  const [extra, setExtra] = React.useState(0);
  const filteredAmount = amount.map(item => {
    return item.amt;
  });
  const totalAmt = filteredAmount.reduce((accum, a) => {
    return accum + a;
  });
  const total = Math.round(Math.ceil(Number(totalAmt + extra)));
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('body');
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleOpenPopup = (scrollType: DialogProps['scroll']) => () => {
    setOpenDialog(true);
    setScroll(scrollType);
  };

  return (
    <ZakatSummaryCard sx={{ minWidth: 275, mt: 4, px: 0, pt: 5, pb: 0 }} variant="outlined">
      <CardContent sx={{ px: 0, pb: 0 }}>
        <Typography sx={{ px: 3 }} variant="h5">
          {t('zakat.summary')}
        </Typography>
        <Typography sx={{ mt: 1, px: 3 }}>
          {t('zakat.netZakat')} - {totalAmt ? Math.round(Math.ceil(Number(totalAmt))) : 0}{' '}
          {currencyCode ?? 'SAR'}
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ mt: 2, px: 3 }}
          onSubmit={(e: any) => {
            if (e) {
              e.preventDefault();
            }
            // try {
            //   setExtra(parseFloat(extraAmountText));
            // } catch (e) {
            //   console.error(`Cannot parse extra amount '${e.target.value}'`);
            // }
            // setExtraAmountText('');
          }}
        >
          <CssTextField
            appearance={appearance}
            type="number"
            id="outlined-basic"
            label="Add extra amount"
            variant="outlined"
            sx={{ width: '100%' }}
            value={extraAmountText}
            onChange={e => {
              setExtraAmountText(e.target.value);
              if (e.target.value && parseFloat(e.target.value)) {
                try {
                  setExtra(parseFloat(e.target.value));
                } catch (err) {
                  console.debug(`Cannot parse extra amount '${e.target.value}'`, err);
                }
              } else {
                setExtra(0);
              }
            }}
            data-cy="fundraising-zakat.zakat-calc.button.add-fund"
          />
        </Box>

        <Box sx={{ py: 3, px: 4, mt: 4 }}>
          <Typography variant="h5">{t('zakat.dueZakat')}</Typography>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}
          >
            <Typography variant="h4">
              {total} <sup>{currencyCode ?? 'SAR'}</sup>
            </Typography>
            {config.zakat.checkout.enabled && total > 0 && (
              <ButtonStyle
                appearance={appearance}
                variant="contained"
                onClick={() => {
                  setOpenDialog(true);
                  handleOpenPopup('body');
                }}
                data-cy="fundraising-zakat.zakat-calc.label.total-zakat"
              >
                {t('zakat.proceed')}
              </ButtonStyle>
            )}
          </Box>
        </Box>
        {/* {total > 0 && (
          <ZakatCheckoutPopup
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            appearance={appearance}
            total={total}
            currencyCode={currencyCode}
            amountArr={amount}
          />
        )} */}
        {organization?._id === '61b4794cfe52d41f557f1acc' && total > 0 ? (
          <DialogCheckoutZakat
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            scrollType={scroll}
            amount={total}
            dataUrlTemplate={null}
            appearance={appearance}
          />
        ) : (
          <DialogQuickDonate
            organizationId={organization?._id}
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            scrollType={scroll}
            appearance={appearance}
            amount={total}
          />
        )}
      </CardContent>
    </ZakatSummaryCard>
  );
};

export default Summary;
