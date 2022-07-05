import React from 'react';
import { Card, Grid, Typography, Box } from '@mui/material';
import { thousandSeparator, fNumber } from '@utils/formatNumber';
import { IInfoBox } from './InfoBox.types';
import { Icon } from '@iconify/react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useTheme } from '@mui/material/styles';

const InfoBox = ({ title, isUp, gainAmount, infoAmount, chartData, chartColor }: IInfoBox) => {
  const theme = useTheme();
  const chartOptions: ApexOptions = {
    colors: [chartColor],
    chart: { sparkline: { enabled: true } },
    plotOptions: { bar: { columnWidth: '68%', borderRadius: 2 } },
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName: number | string) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
      marker: { show: false },
    },
  };

  const switchColors = isUp ? theme.palette.primary.main : theme.palette.error.main;

  return (
    <Grid item md={3} sm={6} xs={12}>
      <Card>
        <div style={{ padding: 20 }}>
          <Typography sx={{ marginBottom: 2 }} variant="button" color={theme.palette.grey[600]}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', margin: '6px 0px' }}>
                <Box
                  sx={{
                    borderRadius: '50%',
                    color: switchColors,
                    backgroundColor: `${switchColors}4D`,
                    padding: '4px',
                    height: 21,
                    width: 21,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '6px',
                  }}
                >
                  {isUp ? (
                    <Icon icon="eva:trending-up-fill" />
                  ) : (
                    <Icon icon="eva:trending-down-fill" />
                  )}
                </Box>
                <Typography color={theme.palette.grey[600]} variant="caption">
                  {gainAmount}
                </Typography>
              </Box>
              <Typography variant="h2" color="black">
                {thousandSeparator(infoAmount)}
              </Typography>
            </Box>
            <ReactApexChart
              type="bar"
              series={chartData}
              options={chartOptions}
              width={60}
              height={36}
            />
          </Box>
        </div>
      </Card>
    </Grid>
  );
};

export default InfoBox;
