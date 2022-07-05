import React from 'react';
import { Grid, Typography } from '@mui/material';
import { IList } from './List.types';

const List = ({ name, country, variant = 'caption' }: IList) => (
  <Grid container spacing={2} sx={{ marginTop: 1 }}>
    <Grid
      item
      xs={6}
      sx={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      <Typography variant={variant} color="black">
        {name}
      </Typography>
    </Grid>
    <Grid
      item
      xs={6}
      sx={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      <Typography variant={variant} color="black">
        {country}
      </Typography>
    </Grid>
  </Grid>
);

export default List;
