import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from 'next-i18next';

const Step = styled(Paper)(({ theme, color }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: color,
  borderRadius: '50%',
  width: 20,
  height: 20,
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: color === '#fff' ? theme.palette.primary.main : '#fff',
}));

interface Title {
  name: string;
}
interface Props {
  step: number;
  title: Title[];
}

const Steps: React.FC<Props> = ({ step, title }) => {
  const { t } = useTranslation();
  const matches = useMediaQuery('(max-width: 540px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: matches ? 'column' : 'row',
        mx: 'auto',
        mt: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {title.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Step
            sx={!(index === 0) ? { ml: matches ? 0 : 2, mt: matches ? 2 : 0 } : {}}
            color={index === step ? '#fff' : '#333'}
          >
            {index < step ? <CheckIcon /> : index + 1}
          </Step>
          <Box sx={{ ml: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: matches ? '12px' : 0 }}>
              <Typography sx={{ color: index > step ? '#c2beb9' : '#333' }}>
                {t('gift.step')} {index + 1}
              </Typography>
              {!(index >= title.length - 1) && (
                <Box
                  sx={{
                    width: 70,
                    height: '1px',
                    backgroundColor: '#333',
                    ml: 2,
                    display: matches ? 'none' : 'block',
                  }}
                ></Box>
              )}
            </Box>
            <Typography sx={{ color: index > step ? '#c2beb9' : '#333' }} variant="body2">
              {item.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Steps;
