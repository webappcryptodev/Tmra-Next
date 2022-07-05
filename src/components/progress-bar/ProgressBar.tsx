import React from 'react';
import { IProgressBar } from './ProgressBar.types';
import { Grid, LinearProgress, Typography } from '@mui/material';

const CampaignOverview = ({ title, campaignName, value }: IProgressBar) => (
  <Grid container spacing={2} sx={{ marginTop: 1, display: 'flex', alignItems: 'center' }}>
    <Grid
      item
      xs={3}
      sx={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      <Typography variant="caption" color="black">
        {title}
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="caption" color="black">
        {campaignName}
      </Typography>
    </Grid>
    <Grid item xs={4}>
      <LinearProgress variant="determinate" value={value} />
    </Grid>
    <Grid item xs={2}>
      <Typography variant="caption" color="black">
        {value}
      </Typography>
    </Grid>
  </Grid>
);

export default CampaignOverview;
