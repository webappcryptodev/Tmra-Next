import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import { useTranslation } from 'react-i18next';

interface Props {
  selects: any[];
}

const useSelect = (defaulState: string, selects: any[], label: string, selectWidth: string) => {
  const [state, setState] = React.useState<string>(defaulState);
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
  const FormSelect: React.FC<{}> = () => {
    return (
      <Box sx={{ position: 'relative', mt: 2, width: selectWidth }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          sx={{ width: '100%' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label={label}
          onChange={handleChangeSelect}
        >
          {selects.map(item => (
            <MenuItem key={item.name} value={item.value ? item.value : item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    );
  };
  return { FormSelect, state, setState };
};

export default useSelect;
