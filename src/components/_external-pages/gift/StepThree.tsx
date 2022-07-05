/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import parents from './images/undraw_wedding_t-1-yl.svg';
import healing from './images/undraw_medicine_b-1-ol.svg';
import graduation from './images/undraw_education_f8ru.svg';
import TemplateConfig from './data';
import { useTranslation } from 'next-i18next';
import { DialogProps } from '@mui/material';
//
import DialogQuickDonate from '@components/checkout/DialogQuickDonate';

// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
}));

interface Props {
  area: string;
  name: string;
  beneficiary: string;
  number: string;
  template: string;
  giftType: string;
}

const StepThree: React.FC<Props> = ({ area, name, beneficiary, number, template, giftType }) => {
  const { t } = useTranslation();
  const tempConfig = TemplateConfig[Number(template[template.length - 1]) - 1];
  const [dataURL, setDataURL] = useState('');
  const results = [
    {
      title: t('gift.gift'),
      name: giftType,
    },
    {
      title: t('gift.donationArea'),
      name: area,
    },
    {
      title: t('gift.yourname'),
      name: name,
    },
    {
      title: t('gift.giftedname'),
      name: beneficiary,
    },
    {
      title: t('gift.giftednumber'),
      name: number,
    },
  ];
  const [scroll, setScroll] = useState<DialogProps['scroll']>('body');
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenPopup = (scrollType: DialogProps['scroll']) => () => {
    setOpenDialog(true);
    setScroll(scrollType);
  };

  useEffect(() => {
    const node: any = document.querySelector('.final-template');
    htmlToImage
      .toPng<any>(node)
      .then(function (dataUrl) {
        setDataURL(dataUrl);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  });
  return (
    <Grid sx={{ mt: 3 }} container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">{t('gift.donationsummary')}</Typography>
        {results.map((item, index) => (
          <Box
            key={index}
            sx={{
              mt: index === 0 ? 2 : 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography>{item.title}</Typography>
            <Typography>{item.name}</Typography>
          </Box>
        ))}
        <Button
          sx={{ mt: 4 }}
          variant="contained"
          onClick={() => {
            setOpenDialog(true);
            handleOpenPopup('body');
          }}
        >
          {t('gift.pay')}
        </Button>
      </Grid>
      {template && (
        <Grid className="final-template" item xs={12} md={6}>
          <Item
            sx={{
              fontSize: tempConfig.fontSize,
              fontStyle: tempConfig.fontStyle,
              color: tempConfig.color,
            }}
          >
            {template}
          </Item>
          <Card sx={{ mt: 2, position: 'relative' }} variant="outlined">
            <CardMedia
              src={
                template === 'Template 1'
                  ? parents.src
                  : template === 'Template 2'
                  ? graduation.src
                  : healing.src
              }
              height="300px"
              width="100% "
              component="img"
            />
            <Item
              sx={{
                position: 'absolute',
                left: tempConfig.x1,
                top: tempConfig.y1,
                transform: `translate(-${tempConfig.x1}, -${tempConfig.y1})`,
                fontFamily: tempConfig.fontFace,
                fontSize: tempConfig.fontSize,
                fontStyle: tempConfig.fontStyle,
                color: tempConfig.color,
              }}
            >
              {name}
            </Item>
            <Item
              sx={{
                position: 'absolute',
                left: tempConfig.x2,
                top: tempConfig.y2,
                transform: `translate(-${tempConfig.x2}, -${tempConfig.y2})`,
                fontFamily: tempConfig.fontFace,
                fontSize: tempConfig.fontSize,
                fontStyle: tempConfig.fontStyle,
                color: tempConfig.color,
              }}
            >
              {beneficiary}
            </Item>
          </Card>
        </Grid>
      )}
      {/* <DialogQuickDonate
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        scrollType={scroll}
        dataUrlTemplate={dataURL}
      /> */}
    </Grid>
  );
};

export default StepThree;
