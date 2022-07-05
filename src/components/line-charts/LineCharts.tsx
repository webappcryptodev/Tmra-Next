import React from 'react';
import { Box } from '@mui/material';
import BaseOptionChart from '@components/charts/BaseOptionChart';
import ReactApexChart from 'react-apexcharts';
import { merge } from 'lodash';
import { ILineCharts } from './LineCharts.types';

const LineCharts = ({ lineChartData, seriesData, categories }: ILineCharts) => {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories,
    },
  });

  return (
    <>
      {lineChartData.map(item => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart type="line" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
    </>
  );
};

export default LineCharts;
