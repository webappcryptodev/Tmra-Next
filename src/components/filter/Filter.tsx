import React from 'react';
import { TextField } from '@mui/material';
import { IFilter } from './Filter.types';
import { useTranslation } from 'next-i18next';

const Filter = ({ value, handleChangeValue, selectData, placeholder }: IFilter) => {
  const { t } = useTranslation();

  return (
    <TextField
      select
      fullWidth
      value={value}
      SelectProps={{ native: true }}
      onChange={handleChangeValue}
      placeholder={placeholder}
      sx={{
        width: '150px',
        '& fieldset': { border: '0 !important' },
        '& select': {
          pl: 1,
          py: 0.5,
          pr: '24px !important',
          typography: 'subtitle2',
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: 0.75,
          bgcolor: 'background.neutral',
        },
        '& .MuiNativeSelect-icon': {
          top: 4,
          right: 0,
          width: 20,
          height: 20,
        },
      }}
      style={{ marginLeft: '8px' }}
    >
      <option value="" disabled>
        {t('orgs.select_placeholder')} {placeholder}
      </option>
      {selectData.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </TextField>
  );
};

export default Filter;
