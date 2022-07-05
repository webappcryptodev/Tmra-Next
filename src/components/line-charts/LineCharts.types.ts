export interface ILineCharts {
  lineChartData: {
    year: number;
    data: {
      name: string;
      data: number[];
    }[];
  }[];
  seriesData: number;
  categories: string[];
}
