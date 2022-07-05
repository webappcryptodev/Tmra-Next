import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import { Icon } from '@iconify/react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import RouterLink from 'next/link';
import React from 'react';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import Label from '../../Label';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3),
  [theme.breakpoints.up(414)]: {
    padding: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

type PricingPlanCardProps = {
  card: {
    subscription: string;
    price: number;
    caption: string;
    icon: JSX.Element;
    labelAction: string;
    lists: {
      text: string;
      isAvailable: boolean;
    }[];
  };
  index: number;
  isPath: boolean;
  nonprofitPlan: React.Dispatch<React.SetStateAction<number>> | undefined;
  setStep: React.Dispatch<React.SetStateAction<number>> | undefined;
};

export default function PricingPlanCard({
  card,
  index,
  isPath,
  nonprofitPlan,
  setStep,
}: PricingPlanCardProps) {
  const { subscription, icon, price, caption, lists, labelAction } = card;
  return (
    <RootStyle>
      {index === 1 && (
        <Label
          color="info"
          sx={{
            top: 16,
            right: 16,
            position: 'absolute',
          }}
        >
          POPULAR
        </Label>
      )}

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {subscription}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
        {index === 1 || index === 2 ? (
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            $
          </Typography>
        ) : (
          ''
        )}
        <Typography variant="h2" sx={{ mx: 1 }}>
          {price === 0 ? 'Free' : price}
        </Typography>
        {index === 1 || index === 2 ? (
          <Typography
            gutterBottom
            component="span"
            variant="subtitle2"
            sx={{
              alignSelf: 'flex-end',
              color: 'text.secondary',
            }}
          >
            /mo
          </Typography>
        ) : (
          ''
        )}
      </Box>

      <Typography
        variant="caption"
        sx={{
          color: 'primary.main',
          textTransform: 'capitalize',
        }}
      >
        {caption}
      </Typography>

      <Box sx={{ width: 80, height: 80, mt: 3 }}>{icon}</Box>

      <Stack component="ul" spacing={2} sx={{ my: 5, width: 1 }}>
        {lists.map(item => (
          <Stack
            key={item.text}
            component="li"
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{
              typography: 'body2',
              color: item.isAvailable ? 'text.primary' : 'text.disabled',
            }}
          >
            <Box component={Icon} icon={checkmarkFill} sx={{ width: 20, height: 20 }} />
            <Typography variant="body2">{item.text}</Typography>
          </Stack>
        ))}
      </Stack>
      {isPath === false ? (
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={() => {
            nonprofitPlan !== undefined && nonprofitPlan(index);
            setStep !== undefined && setStep(1);
          }}
        >
          {labelAction}
        </Button>
      ) : (
        <RouterLink href={PATH_DASHBOARD.root}>
          <Button fullWidth size="large" variant="contained" disabled={index === 0}>
            {labelAction}
          </Button>
        </RouterLink>
      )}
    </RootStyle>
  );
}
